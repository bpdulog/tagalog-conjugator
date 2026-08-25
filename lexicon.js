/* ============================================================
   Normalized Tagalog Verb Lexicon

   VERB_DATABASE in verbs.js is the legacy curated dataset. This module
   adapts every record to the canonical schema used by the application:

   {
     root: "kain",
     meanings: ["to eat"],
     allowedPatterns: ["um", "in", ...],
     overrides: { ...curated focus cards... },
     examples: [{ focus, aspect, text }],
     status: "curated",
     sources: [],
     notes: "..."
   }

   New records should use this schema directly. The adapter lets the
   existing curated data migrate incrementally without losing coverage.
   ============================================================ */

const PATTERN_FOCUS_KEYS = Object.freeze({
  um: "Actor (-um-)",
  mag: "Actor (mag-)",
  ma: "Actor (ma-)",
  in: "Object (-in)",
  i: "Object (i-)",
  mao: "Object (ma-)",
  an: "Locative/Benefactive (-an)",
  maka: "Actor (maka-)",
  mang: "Actor (mang-)",
  mangh: "Actor (mangh-)",
  magpa: "Actor (magpa-)",
  magka: "Actor (magka-)",
  ipa: "Causative (ipa-)",
  ipag: "Benefactive (ipag-)",
  ipang: "Instrumental (ipang-)",
  "ma-an": "Ability / Understand (ma-...-an)",
  "pa-in": "Causative (pa-...-in)",
  state: "State / Need",
  reciprocal: "Reciprocal (mag-...-an)"
});

// Conjugated forms that appeared as duplicate convenience records in the
// legacy dataset. Keep them searchable without treating them as verb roots.
const VERB_ALIASES = Object.freeze({
  kainin: "kain"
});

// These entries have moved to the normalized source. Keep their old records
// temporarily for provenance while excluding them from the runtime lexicon.
const MIGRATED_LEGACY_ROOTS = new Set(["bili"]);

function patternIdForFocus(focusName) {
  const focus = String(focusName || "").toLowerCase();

  // Check compound affixes before their shorter prefixes.
  if (focus.includes("reciprocal")) return "reciprocal";
  if (focus.includes("maki-")) return "maki";
  if (focus.includes("mapa-")) return "mapa";
  if (focus.includes("ika-")) return "ika";
  if (focus.includes("instrumental") || focus.includes("ipang-")) return "ipang";
  if (focus.includes("ipag-")) return "ipag";
  if (focus.includes("magpaka-")) return "magpaka";
  if (focus.includes("magpa-")) return "magpa";
  if (focus.includes("magka-")) return "magka";
  if (focus.includes("maka-")) return "maka";
  if (focus.includes("mangh-")) return "mangh";
  if (focus.includes("mang-")) return "mang";
  if (focus.includes("ipa-")) return "ipa";
  if (focus.includes("ma-...-an")) return "ma-an";
  if (focus.includes("pa-...-in")) return "pa-in";
  if (focus.includes("state / need")) return "state";

  if (focus.includes("change of state")) return "ma";
  // Stative/potential object focus (makita, marinig) before the generic checks.
  if (focus.includes("object") && focus.includes("(ma-)")) return "mao";
  if (focus.includes("actor") && /\(-?um-?\)/.test(focus)) return "um";
  if (focus.includes("actor") && focus.includes("(ma-)")) return "ma";
  if (focus.includes("actor") && focus.includes("(mag-)")) return "mag";
  if (focus.includes("object") && focus.includes("(-in)")) return "in";
  if ((focus.includes("object") || focus.includes("benefactive")) && focus.includes("(i-)")) return "i";
  if (focus.includes("pag-...-an")) return "pag-an";
  if (focus.includes("ka-...-an")) return "ka-an";
  if (focus.includes("(-an)") || focus.includes("...-an)")) return "an";

  return null;
}

function collectExamples(conjugations) {
  const examples = [];
  for (const [focus, card] of Object.entries(conjugations || {})) {
    for (const [aspect, form] of Object.entries(card.forms || {})) {
      if (form.example) examples.push({ focus, aspect, text: form.example });
    }
  }
  return examples;
}

function normalizeLegacyVerb(root, entry) {
  const overrides = entry.overrides || entry.conjugations || {};
  const allowedPatterns = entry.allowedPatterns || [...new Set(
    Object.keys(overrides).map(patternIdForFocus).filter(Boolean)
  )];

  return Object.freeze({
    root: entry.root || root,
    meanings: entry.meanings || (entry.meaning ? [entry.meaning] : []),
    allowedPatterns,
    overrides,
    examples: entry.examples || collectExamples(overrides),
    status: entry.status || "curated",
    sources: entry.sources || [],
    notes: entry.notes || ""
  });
}

const LEGACY_VERB_LEXICON = Object.fromEntries(
  Object.entries(VERB_DATABASE)
    .filter(([root]) => !VERB_ALIASES[root] && !MIGRATED_LEGACY_ROOTS.has(root))
    .map(([root, entry]) => [root, normalizeLegacyVerb(root, entry)])
);

function mergeLexiconEntry(base, update) {
  const baseOverrides = { ...(base ? base.overrides : {}) };
  for (const focus of update.removeFocuses || []) delete baseOverrides[focus];
  const allowedPatterns = new Set(base ? base.allowedPatterns : []);
  for (const pattern of update.removePatterns || []) allowedPatterns.delete(pattern);
  for (const pattern of update.allowedPatterns || []) allowedPatterns.add(pattern);

  return Object.freeze({
    root: update.root || (base && base.root),
    meanings: update.meanings || (base ? base.meanings : []),
    allowedPatterns: [...allowedPatterns],
    overrides: { ...baseOverrides, ...(update.overrides || {}) },
    examples: [...(base ? base.examples : []), ...(update.examples || [])],
    status: update.status || (base ? base.status : "curated"),
    sources: [...(base ? base.sources : []), ...(update.sources || [])],
    notes: update.notes || (base ? base.notes : "")
  });
}

const CURATED_ENTRIES = typeof CURATED_LEXICON_ENTRIES === "undefined"
  ? {}
  : {
      ...CURATED_LEXICON_ENTRIES,
      ...(typeof EXPANDED_EVERYDAY_ENTRIES === "undefined" ? {} : EXPANDED_EVERYDAY_ENTRIES)
    };
const CURATED_UPDATES = typeof CURATED_LEXICON_UPDATES === "undefined"
  ? {}
  : CURATED_LEXICON_UPDATES;
const ROOT_SEARCH_ALIASES = typeof CURATED_ROOT_ALIASES === "undefined"
  ? {}
  : CURATED_ROOT_ALIASES;
const FORM_SEARCH_ALIASES = typeof CURATED_FORM_ALIASES === "undefined"
  ? {}
  : CURATED_FORM_ALIASES;

// Patterns that corpus evidence says a verb needs but the curated data omits.
// See attestation.js: each was absent from everything the app rendered while
// occurring frequently, in a full paradigm, in the reference corpora. Merged
// last so curated decisions still win on everything they do specify.
const SUGGESTED_PATTERNS = typeof CORPUS_SUGGESTED_PATTERNS === "undefined"
  ? {}
  : CORPUS_SUGGESTED_PATTERNS;

function withSuggestedPatterns(root, entry) {
  const suggested = SUGGESTED_PATTERNS[root];
  if (!entry || !suggested || !suggested.length) return entry;
  const patterns = new Set(entry.allowedPatterns);
  const added = suggested.filter(p => !patterns.has(p));
  if (!added.length) return entry;
  for (const p of added) patterns.add(p);
  return Object.freeze({
    ...entry,
    allowedPatterns: [...patterns],
    // Record why the entry gained a pattern, so a reviewer can tell a
    // corpus-derived card from a hand-checked one.
    corpusAdded: Object.freeze(added)
  });
}

// Affix sets documented for these roots in Ramos & Bautista, "Handbook of
// Tagalog Verbs" (1986), which the generator can build but the curated data had
// no entry for. Kept in its own table, parallel to CORPUS_SUGGESTED_PATTERNS
// above, so a reviewer can tell a handbook-sourced card from a hand-checked or
// corpus-derived one.
//
// These carry no corpus frequency yet: attestation.js was generated before
// these pattern ids existed, so it has no counts under them and every form
// here would tier as unattested if it were gated. Each root below is one the
// handbook itself lists for that affix, which is the strongest evidence
// available until build-attestation.js is re-run over the corpora.
const HANDBOOK_PATTERNS = Object.freeze({
  // Associative maki- / makipag-: joining an action already under way.
  sakay: ["maki"], usap: ["maki", "pag-an"], laro: ["maki", "pag-an"],
  kain: ["maki"], tulong: ["maki"],

  // Involuntary mapa-: the action escaped the actor.
  tingin: ["mapa"], iyak: ["mapa"], upo: ["mapa"], tawa: ["mapa"],
  sagot: ["mapa"], punta: ["mapa"], tigil: ["mapa"], kanta: ["mapa"],
  ngiti: ["mapa"], sama: ["mapa"],

  // Reason focus ika-: the cause behind a state.
  galit: ["ika", "ka-an"], takot: ["ika", "ka-an"], saya: ["ika"],
  ganda: ["ika"], laki: ["ika"], lamig: ["ika"], init: ["ika"],
  gising: ["ika"], gutom: ["ika"], pagod: ["ika"], hiya: ["ika", "mapa"],
  linis: ["ika"], sara: ["ika"], haba: ["ika"], gulo: ["ika"], tuwa: ["ika"],

  // Directional ka-...-an: what a feeling is aimed at.
  limot: ["ka-an"],

  // Locative pag-...-an: place, or an object engaged with over time.
  aral: ["pag-an"], lagay: ["pag-an"], isip: ["pag-an"], luto: ["pag-an"],
  handa: ["pag-an"], tago: ["pag-an"], bili: ["pag-an"], gamit: ["pag-an"],
  pili: ["pag-an"], hugas: ["pag-an"], tanong: ["pag-an"]
});

function withHandbookPatterns(root, entry) {
  const handbook = HANDBOOK_PATTERNS[root];
  if (!entry || !handbook || !handbook.length) return entry;
  const patterns = new Set(entry.allowedPatterns);
  const added = handbook.filter(p => !patterns.has(p));
  if (!added.length) return entry;
  for (const p of added) patterns.add(p);
  return Object.freeze({
    ...entry,
    allowedPatterns: [...patterns],
    handbookAdded: Object.freeze(added)
  });
}

const VERB_LEXICON = Object.freeze(Object.fromEntries(
  [...new Set([
    ...Object.keys(LEGACY_VERB_LEXICON),
    ...Object.keys(CURATED_ENTRIES),
    ...Object.keys(CURATED_UPDATES)
  ])].map(root => {
    const legacy = LEGACY_VERB_LEXICON[root];
    const entry = CURATED_ENTRIES[root]
      ? mergeLexiconEntry(legacy, CURATED_ENTRIES[root])
      : legacy;
    const merged = CURATED_UPDATES[root]
      ? mergeLexiconEntry(entry, CURATED_UPDATES[root])
      : entry;
    return [root, withHandbookPatterns(root, withSuggestedPatterns(root, merged))];
  })
));

function cleanLookupForm(value) {
  const form = String(value || "").toLowerCase().trim();
  // Parenthesized values in the generator represent unattested candidates.
  if (!form || form.startsWith("(") || form.includes(" / ")) return null;
  return form;
}

function buildConjugatedLookup(lexicon, legacyLookup = {}) {
  const derived = {};

  for (const [root, entry] of Object.entries(lexicon)) {
    for (const [focus, card] of Object.entries(entry.overrides)) {
      const affix = patternIdForFocus(focus);
      if (!affix) continue;

      for (const [aspect, data] of Object.entries(card.forms || {})) {
        const form = cleanLookupForm(data.form);
        if (!form) continue;
        // Keep the first curated owner of an ambiguous form. The legacy data
        // contains a few conjugated forms duplicated as convenience roots
        // (for example, kainin); those must not replace the canonical root.
        if (!derived[form]) derived[form] = { root, affix, aspect };
      }
    }
  }

  // Preserve intentional aliases from the old hand-maintained table. It wins
  // ambiguous collisions while newly curated forms are indexed automatically.
  return Object.freeze({ ...derived, ...legacyLookup });
}

const LEXICON_CONJUGATED_LOOKUP = buildConjugatedLookup(
  VERB_LEXICON,
  {
    ...(typeof CONJUGATED_LOOKUP === "undefined" ? {} : CONJUGATED_LOOKUP),
    ...FORM_SEARCH_ALIASES
  }
);

if (typeof window !== "undefined") {
  window.VERB_LEXICON = VERB_LEXICON;
  window.LEXICON_CONJUGATED_LOOKUP = LEXICON_CONJUGATED_LOOKUP;
  window.ROOT_SEARCH_ALIASES = ROOT_SEARCH_ALIASES;
}
