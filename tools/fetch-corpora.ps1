[CmdletBinding()]
param(
  [string]$Destination = "corpora"
)

$ErrorActionPreference = "Stop"

function Get-SevenZip {
  $command = Get-Command 7z.exe -ErrorAction SilentlyContinue
  if ($command) { return $command.Source }

  $defaultPath = Join-Path $env:ProgramFiles "7-Zip\\7z.exe"
  if (Test-Path -LiteralPath $defaultPath) { return $defaultPath }

  throw "7-Zip is required to extract the .bz2 and .tar.gz downloads. Install it with 'winget install 7zip.7zip', then run this command again."
}

function Download-File([string]$Uri, [string]$Path) {
  Write-Host "Downloading $Uri"
  Invoke-WebRequest -Uri $Uri -OutFile $Path
}

$destinationPath = [System.IO.Path]::GetFullPath($Destination)
$temporaryPath = Join-Path $destinationPath ".download"
$sevenZip = Get-SevenZip
New-Item -ItemType Directory -Force -Path $destinationPath, $temporaryPath | Out-Null

try {
  $openSubtitles = Join-Path $temporaryPath "opensubtitles.txt.gz"
  Download-File "https://object.pouta.csc.fi/OPUS-OpenSubtitles/v2024/mono/tl.txt.gz" $openSubtitles
  & $sevenZip x $openSubtitles "-o$temporaryPath" -y | Out-Null
  Move-Item -Force (Join-Path $temporaryPath "tl.txt") (Join-Path $destinationPath "opensubtitles.txt")

  $tatoeba = Join-Path $temporaryPath "tgl_sentences.tsv.bz2"
  Download-File "https://downloads.tatoeba.org/exports/per_language/tgl/tgl_sentences.tsv.bz2" $tatoeba
  & $sevenZip x $tatoeba "-o$temporaryPath" -y | Out-Null
  Get-Content (Join-Path $temporaryPath "tgl_sentences.tsv") | ForEach-Object {
    ($_ -split "`t", 3)[2]
  } | Set-Content -Encoding utf8 (Join-Path $destinationPath "tatoeba.txt")

  $leipzig = Join-Path $temporaryPath "tgl_wikipedia_2021_100K.tar.gz"
  Download-File "https://downloads.wortschatz-leipzig.de/corpora/tgl_wikipedia_2021_100K.tar.gz" $leipzig
  & $sevenZip x $leipzig "-o$temporaryPath" -y | Out-Null
  & $sevenZip x (Join-Path $temporaryPath "tgl_wikipedia_2021_100K.tar") "-o$temporaryPath" -y | Out-Null
  Get-Content (Join-Path $temporaryPath "tgl_wikipedia_2021_100K\\tgl_wikipedia_2021_100K-sentences.txt") | ForEach-Object {
    ($_ -split "`t", 2)[1]
  } | Set-Content -Encoding utf8 (Join-Path $destinationPath "wikipedia.txt")
} finally {
  Remove-Item -Recurse -Force -LiteralPath $temporaryPath -ErrorAction SilentlyContinue
}

Get-ChildItem (Join-Path $destinationPath "*.txt") | ForEach-Object {
  "{0}`t{1}" -f $_.Name, (Get-Content $_.FullName | Measure-Object -Line).Lines
}
