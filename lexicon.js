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
  an: "Locative/Benefactive (-an)",
  maka: "Actor (maka-)",
  mang: "Actor (mang-)",
  mangh: "Actor (mangh-)",
  magpa: "Actor (magpa-)",
  magka: "Actor (magka-)",
  ipa: "Causative (ipa-)",
  ipag: "Benefactive (ipag-)",
  ipang: "Instrumental (ipang-)",
  reciprocal: "Reciprocal (mag-...-an)",
  negation: "Negation (hindi-)",
  distributive: "Distributive (per-person)"
});

// Conjugated forms that appeared as duplicate convenience records in the
// legacy dataset. Keep them searchable without treating them as verb roots.
const VERB_ALIASES = Object.freeze({
  kainin: "kain"
});

function patternIdForFocus(focusName) {
  const focus = String(focusName || "").toLowerCase();

  // Check compound affixes before their shorter prefixes.
  if (focus.includes("negation") || focus.includes("hindi-")) return "negation";
  if (focus.includes("distributive") || focus.includes("per-person")) return "distributive";
  if (focus.includes("reciprocal")) return "reciprocal";
  if (focus.includes("instrumental") || focus.includes("ipang-")) return "ipang";
  if (focus.includes("ipag-")) return "ipag";
  if (focus.includes("magpa-")) return "magpa";
  if (focus.includes("magka-")) return "magka";
  if (focus.includes("maka-")) return "maka";
  if (focus.includes("mangh-")) return "mangh";
  if (focus.includes("mang-")) return "mang";
  if (focus.includes("ipa-")) return "ipa";

  if (focus.includes("change of state")) return "ma";
  if (focus.includes("actor") && /\(\-?um\-?\)/.test(focus)) return "um";
  if (focus.includes("actor") && focus.includes("(ma-)")) return "ma";
  if (focus.includes("actor") && focus.includes("(mag-)")) return "mag";
  if (focus.includes("object") && focus.includes("(-in)")) return "in";
  if ((focus.includes("object") || focus.includes("benefactive")) && focus.includes("(i-)")) return "i";
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

const VERB_LEXICON = Object.freeze(Object.fromEntries(
  Object.entries(VERB_DATABASE)
    .filter(([root]) => !VERB_ALIASES[root])
    .map(([root, entry]) => [root, normalizeLegacyVerb(root, entry)])
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
  typeof CONJUGATED_LOOKUP === "undefined" ? {} : CONJUGATED_LOOKUP
);

if (typeof window !== "undefined") {
  window.VERB_LEXICON = VERB_LEXICON;
  window.LEXICON_CONJUGATED_LOOKUP = LEXICON_CONJUGATED_LOOKUP;
}
