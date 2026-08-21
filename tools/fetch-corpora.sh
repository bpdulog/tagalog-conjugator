#!/usr/bin/env bash
# Download the reference corpora used to build attestation.js.
# Public linguistic corpora; nothing from this repo is uploaded.
set -euo pipefail
DEST="${1:-corpora}"
mkdir -p "$DEST" && cd "$DEST"

# Conversational register. The register that matters most for a learner app:
# Wikipedia Tagalog is heavily formal and over-represents mag-/-in.
curl -fsSL -o os.txt.gz "https://object.pouta.csc.fi/OPUS-OpenSubtitles/v2024/mono/tl.txt.gz"
gzip -dc os.txt.gz > opensubtitles.txt

# Human-written sentences, CC-BY.
curl -fsSL -o tat.tsv.bz2 "https://downloads.tatoeba.org/exports/per_language/tgl/tgl_sentences.tsv.bz2"
bzip2 -dc tat.tsv.bz2 | cut -f3 > tatoeba.txt

# Formal register, for contrast.
curl -fsSL -o lz.tar.gz "https://downloads.wortschatz-leipzig.de/corpora/tgl_wikipedia_2021_100K.tar.gz"
tar -xzf lz.tar.gz
cut -f2 tgl_wikipedia_2021_100K/tgl_wikipedia_2021_100K-sentences.txt > wikipedia.txt

wc -l opensubtitles.txt tatoeba.txt wikipedia.txt
