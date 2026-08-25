/* ============================================================
   Regenerate attestation.js from the reference corpora.

     node tools/build-attestation.js [corporaDir]     (default: ./corpora)

   Fetch the corpora first with tools/fetch-corpora.sh or
   tools/fetch-corpora.ps1. The output is
   frequency evidence per (root, affix pattern), which the app uses instead of
   hand-maintained opinion about which forms are common.
   ============================================================ */
const fs = require("fs"), vm = require("vm"), path = require("path"), readline = require("readline");

const root = path.resolve(__dirname, "..");
const corporaDir = path.resolve(process.argv[2] || path.join(root, "corpora"));

// Affixal patterns only. State cards are lexical and negation is multi-word,
// so counting single tokens says nothing useful about either of them.
const PATTERNS = ["um","mag","ma","in","i","mao","an","maka","mang","mangh",
                  "magpa","magka","ipa","ipag","ipang","ma-an","pa-in","reciprocal"];
const SOURCES = [
  ["opensubtitles", "opensubtitles.txt", "conversational"],
  ["tatoeba",       "tatoeba.txt",       "conversational"],
  ["wikipedia",     "wikipedia.txt",     "formal"]
];
// Thresholds for promoting an unoffered pattern into allowedPatterns.
const MIN_CONV = 300, MIN_ASPECTS = 3, MIN_NOVEL = 3;

// Tagalog orthography: keep internal hyphens (nag-aaral), drop other punctuation.
function* tokens(line) {
  for (let w of line.toLowerCase().split(/[^a-z\u00f1\u00e0-\u00fc-]+/)) {
    w = w.replace(/^-+|-+$/g, "");
    if (w.length > 1) yield w;
  }
}

async function tally(file) {
  const freq = new Map();
  let lines = 0, total = 0;
  const rl = readline.createInterface({ input: fs.createReadStream(file, "utf8"), crlfDelay: Infinity });
  for await (const line of rl) { lines++; for (const t of tokens(line)) { freq.set(t, (freq.get(t) || 0) + 1); total++; } }
  return { freq, lines, total };
}

(async () => {
  for (const [, file] of SOURCES) {
    if (!fs.existsSync(path.join(corporaDir, file)))
      throw new Error(`missing ${file} in ${corporaDir} — run a tools/fetch-corpora script first`);
  }
  const counts = {};
  for (const [name, file] of SOURCES) {
    counts[name] = await tally(path.join(corporaDir, file));
    console.error(`${name}: ${counts[name].lines} lines, ${counts[name].total} tokens`);
  }
  const conv = w => SOURCES.filter(s => s[2] === "conversational")
    .reduce((n, [name]) => n + (counts[name].freq.get(w) || 0), 0);
  const formal = w => (counts.wikipedia.freq.get(w) || 0);

  const ctx = vm.createContext({ window:{}, document:{addEventListener(){}}, navigator:{}, console, setTimeout, clearTimeout });
  // app.js reads CORPUS_ATTESTATION; stub it so regeneration never feeds on
  // its own previous output.
  vm.runInContext("var CORPUS_ATTESTATION = {}, CORPUS_SUGGESTED_PATTERNS = {};", ctx);
  for (const f of ["verbs.js","essential-verbs.js","everyday-verbs.js","lexicon.js","app.js"])
    vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
  const LEX = vm.runInContext("VERB_LEXICON", ctx);
  const gen = vm.runInContext("generateConjugations", ctx);
  const resolve = vm.runInContext("resolveVerb", ctx);

  const rendered = r => {
    const set = new Set();
    for (const card of Object.values(resolve(r).conjugations || {}))
      for (const d of Object.values(card.forms || {}))
        for (const w of String(d.form||"").toLowerCase().replace(/^\(|\)$/g,"").split(/\s+/)) if (w) set.add(w);
    return set;
  };

  // Counts for the forms the app actually RENDERS, curated overrides included.
  // The pattern table below is keyed on what the generator produces, so an
  // irregular curated form (makita, panoorin, sundan) would otherwise carry no
  // evidence at all and be misread as unattested.
  const formHits = {};
  for (const verb of Object.keys(LEX)) {
    for (const card of Object.values(resolve(verb).conjugations || {})) {
      for (const d of Object.values(card.forms || {})) {
        const f = String(d.form||"").toLowerCase().replace(/^\(|\)$/g,"").trim();
        if (!f || f.includes(" ") || f in formHits) continue;
        formHits[f] = conv(f);
      }
    }
  }

  // Which suffix a vowel-final root takes (-in vs -hin, -an vs -han) depends on
  // whether the root ends in a glottal stop, which the ASCII spelling does not
  // record: basa -> basahin but pili -> piliin, alaga -> alagaan. It cannot be
  // derived from the final letter, so measure it. Roots with no clear winner
  // are omitted and fall back to the generator's spelling heuristic.
  const suffix = {};
  for (const verb of Object.keys(LEX)) {
    if (!/[aeiou]$/.test(verb)) continue;              // consonant-final always takes -in/-an
    const base = verb.replace(/o$/, "u");              // luto -> lutu-
    const pick = (plain, glide) => {
      const a = conv(base + plain), b = conv(base + glide);
      if (Math.max(a, b) < 5) return null;             // too thin to call
      if (a === b) return null;
      return a > b ? plain : glide;
    };
    const forIn = pick("in", "hin"), forAn = pick("an", "han");
    if (forIn || forAn) {
      suffix[verb] = {};
      if (forIn) suffix[verb].in = forIn;
      if (forAn) suffix[verb].an = forAn;
    }
  }

  const table = {}, suggested = {};
  for (const verb of Object.keys(LEX)) {
    const allowed = new Set(LEX[verb].allowedPatterns || []);
    const have = rendered(verb);
    for (const pattern of PATTERNS) {
      let card; try { card = gen(verb, [pattern]); } catch { continue; }
      const key = card && Object.keys(card)[0];
      if (!key) continue;
      // Deduplicate surface forms: for -um- the infinitive and completed
      // aspect are the same string, which would otherwise be counted twice.
      const forms = new Set();
      for (const d of Object.values(card[key].forms || {})) {
        const f = String(d.form||"").toLowerCase().replace(/^\(|\)$/g,"").trim();
        if (f && !f.includes(" ")) forms.add(f);
      }
      if (!forms.size) continue;
      let c = 0, w = 0, attested = 0, novel = 0;
      for (const f of forms) {
        const n = conv(f); c += n; w += formal(f);
        if (n > 0) { attested++; if (!have.has(f)) novel++; }
      }
      if (!c && !w) continue;
      (table[verb] = table[verb] || {})[pattern] = [c, w, attested];
      if (!allowed.has(pattern) && c >= MIN_CONV && attested >= MIN_ASPECTS && novel >= MIN_NOVEL)
        (suggested[verb] = suggested[verb] || []).push([pattern, c]);
    }
  }

  const n = x => x.toLocaleString("en-US");
  const totalTokens = SOURCES.reduce((s,[k]) => s + counts[k].total, 0);
  const body = Object.keys(table).sort().map(v =>
    `  ${v}: { ` + Object.entries(table[v]).sort((a,b)=>b[1][0]-a[1][0])
      .map(([p,val]) => `${JSON.stringify(p)}: [${val.join(", ")}]`).join(", ") + " }"
  ).join(",\n");
  const sug = Object.keys(suggested).sort().map(v =>
    `  ${v}: [${suggested[v].sort((a,b)=>b[1]-a[1]).map(([p])=>JSON.stringify(p)).join(", ")}]`
  ).join(",\n");
  const hitLines = Object.keys(formHits).sort()
    .map(f => `  ${JSON.stringify(f)}: ${formHits[f]}`).join(",\n");
  const suffixLines = Object.keys(suffix).sort()
    .map(v => `  ${v}: ${JSON.stringify(suffix[v])}`).join(",\n");

  fs.writeFileSync(path.join(root, "attestation.js"), `/* ============================================================
   Corpus attestation — GENERATED FILE, DO NOT EDIT BY HAND.
   Regenerate with: node tools/build-attestation.js

   Frequency evidence for each (root, affix pattern) pair, used to decide
   whether a form is presented as common, less common, or unattested. This
   replaces hand-maintained root allowlists that encoded those judgements as
   opinion in code.

   Each value is [conversational, formal, aspectsAttested]:
     conversational  — OpenSubtitles (${n(counts.opensubtitles.lines)} lines) + Tatoeba (${n(counts.tatoeba.lines)} sentences)
     formal          — Leipzig tgl_wikipedia_2021_100K (${n(counts.wikipedia.lines)} sentences)
     aspectsAttested — how many of the paradigm's distinct surface forms occur
                       at least once. A real paradigm appears in several; a
                       homograph (masaya "happy", tindahan "store") spikes in
                       exactly one, so this guards against reading a noun or
                       adjective as verb usage.

   Counts are over ${n(totalTokens)} tokens of written text. Treat them as strong
   evidence about usage, not a verdict on grammaticality: a zero does not
   prove a form is wrong, only that it is not in evidence here.
   ============================================================ */

const CORPUS_ATTESTATION = {
${body}
};

/* Patterns a verb does not currently offer, whose full paradigm is
   nevertheless frequent (>=${MIN_CONV} conversational occurrences, >=${MIN_ASPECTS} distinct
   aspects attested, >=${MIN_NOVEL} forms absent from what the app already renders).
   lexicon.js merges these into allowedPatterns so a verb is not missing the
   form learners meet most often. To reject one, delete its line and note why. */
const CORPUS_SUGGESTED_PATTERNS = {
${sug}
};

/* Conversational occurrences of each individual form the app renders, curated
   irregulars included. Lets a card be scored from the forms it actually shows
   rather than from what the generator would have produced for its pattern. */
const CORPUS_FORM_HITS = {
${hitLines}
};

/* Suffix selection for vowel-final roots. Tagalog attaches -in/-an to a root
   ending in a glottal stop and -hin/-han to one that does not, but the ASCII
   spelling does not record the glottal stop: basa takes basahin while pili
   takes piliin and alaga takes alagaan. The choice is lexical, so it is
   measured rather than derived. Roots absent here had no clear winner and use
   the generator's spelling heuristic. */
const CORPUS_SUFFIX = {
${suffixLines}
};

if (typeof window !== "undefined") {
  window.CORPUS_ATTESTATION = CORPUS_ATTESTATION;
  window.CORPUS_SUGGESTED_PATTERNS = CORPUS_SUGGESTED_PATTERNS;
  window.CORPUS_FORM_HITS = CORPUS_FORM_HITS;
  window.CORPUS_SUFFIX = CORPUS_SUFFIX;
}
`);
  console.error(`wrote attestation.js: ${Object.keys(table).length} roots, ` +
    `${Object.values(suggested).flat().length} suggested patterns across ${Object.keys(suggested).length} roots`);
})();
