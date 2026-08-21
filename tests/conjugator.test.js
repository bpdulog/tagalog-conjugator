const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "..");
const context = vm.createContext({
  window: {},
  document: { addEventListener() {} },
  navigator: {},
  console,
  setTimeout,
  clearTimeout
});

for (const filename of ["attestation.js", "verbs.js", "essential-verbs.js", "lexicon.js", "app.js"]) {
  const source = fs.readFileSync(path.join(projectRoot, filename), "utf8");
  vm.runInContext(source, context, { filename });
}

function evaluate(source) {
  return vm.runInContext(source, context);
}

assert.equal(evaluate("Object.keys(VERB_LEXICON).length"), 206);
assert.deepEqual(
  JSON.parse(evaluate("JSON.stringify(VERB_LEXICON.kain.meanings)")),
  ["to eat"]
);
assert.deepEqual(
  JSON.parse(evaluate("JSON.stringify(VERB_LEXICON.bili.meanings)")),
  ["to buy", "to sell (depending on focus)"],
  "bili should use the normalized source rather than its legacy card"
);

const kainPatterns = JSON.parse(
  evaluate("JSON.stringify(VERB_LEXICON.kain.allowedPatterns)")
);
assert.ok(kainPatterns.includes("um"));
assert.ok(kainPatterns.includes("in"));
assert.ok(kainPatterns.includes("ipa"));
assert.equal(
  evaluate(`Object.values(VERB_LEXICON).every(entry =>
    Array.isArray(entry.meanings) &&
    Array.isArray(entry.allowedPatterns) &&
    entry.overrides &&
    Array.isArray(entry.examples) &&
    Array.isArray(entry.sources)
  )`),
  true
);

const kinain = JSON.parse(
  evaluate('JSON.stringify(LEXICON_CONJUGATED_LOOKUP["kinain"])')
);
assert.deepEqual(kinain, { root: "kain", affix: "in", aspect: "complete" });

const generatedUmOnly = JSON.parse(
  evaluate('JSON.stringify(Object.keys(generateConjugations("sulat", ["um"])))')
);
assert.deepEqual(generatedUmOnly, ["Actor (-um-)"]);

const kainResult = JSON.parse(evaluate('JSON.stringify(resolveVerb("kain"))'));
assert.equal(kainResult.status, "curated");
assert.equal(kainResult.isVerified, true);
assert.ok(kainResult.conjugations["Actor (-um-)"]);
assert.ok(!kainResult.conjugations["Actor (magka-)"]);
const coverageMismatches = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(VERB_LEXICON)
    .map(([root, entry]) => ({
      root,
      missing: Object.keys(entry.overrides).filter(
        focus => !resolveVerb(root).conjugations[focus]
      )
    }))
    .filter(item => item.missing.length)
)`));
assert.deepEqual(coverageMismatches, []);

const usisaResult = JSON.parse(evaluate('JSON.stringify(resolveVerb("usisa"))'));
assert.ok(usisaResult.conjugations["Actor (mag-)"]);
assert.ok(usisaResult.conjugations["Negation (hindi-)"]);
assert.equal(
  usisaResult.conjugations["Actor (mag-)"].forms.progressive.form,
  "nag-uusisa"
);
assert.match(
  usisaResult.conjugations["Actor (mag-)"].forms.progressive.example,
  /nawawalang bata/
);
assert.equal(
  evaluate('ACTIVE_CONJUGATED_LOOKUP["nag-uusisa"].root'),
  "usisa"
);

const conjugatedResult = JSON.parse(
  evaluate('JSON.stringify(resolveVerb("kinakain"))')
);
assert.equal(conjugatedResult.root, "kain");
assert.equal(conjugatedResult.isConjugated, true);
assert.equal(conjugatedResult.detectedAspect, "progressive");

// -hin is the surface spelling for some object-focus forms. It must be
// searchable both as the infinitive and in a reduplicated contemplated form.
for (const [form, aspect] of [["bilhin", "infinitive"], ["bibilhin", "contemplated"]]) {
  const result = JSON.parse(evaluate(`JSON.stringify(resolveVerb("${form}"))`));
  assert.equal(result.root, "bili", form);
  assert.equal(result.isConjugated, true, form);
  assert.equal(result.detectedAffix, "in", form);
  assert.equal(result.detectedAspect, aspect, form);
  assert.equal(
    result.conjugations["Object (-in)"].forms[aspect].form,
    form,
    `${form} should resolve to the displayed object-focus form`
  );
}

// Check several -hin spellings, including roots that delete a final vowel or
// change o to u before the suffix. Each must remain searchable in both its
// infinitive and reduplicated contemplated form.
for (const [root, infinitive, contemplated] of [
  ["bili", "bilhin", "bibilhin"],
  ["dala", "dalhin", "dadalhin"],
  ["sabi", "sabihin", "sasabihin"],
  ["huli", "hulihin", "huhulihin"],
  ["gusto", "gustuhin", "gugustuhin"]
]) {
  for (const [form, aspect] of [[infinitive, "infinitive"], [contemplated, "contemplated"]]) {
    const result = JSON.parse(evaluate(`JSON.stringify(resolveVerb("${form}"))`));
    assert.equal(result.root, root, form);
    assert.equal(result.detectedAffix, "in", form);
    assert.equal(result.detectedAspect, aspect, form);
  }
}

assert.match(
  evaluate('renderResult(resolveVerb("bili"))'),
  /Object \(-in \/ -hin\)/,
  "the object-focus card should name the -hin surface variant"
);
assert.match(
  evaluate('renderResult(resolveVerb("bili"))'),
  /<button[^>]*class="copy-btn"[^>]*aria-label="Copy bilhin"/,
  "copy controls need an accessible label that identifies the form"
);

const unknownResult = JSON.parse(evaluate('JSON.stringify(resolveVerb("foobar"))'));
assert.equal(unknownResult.status, "unknown");
assert.equal(unknownResult.isVerified, false);
assert.deepEqual(unknownResult.conjugations, {});

// Essential verb expansion: generated, irregular, and stative forms all
// render from the normalized entries and resolve back to their root.
for (const [root, focus, aspect, expected] of [
  ["gamit", "Actor (-um-)", "progressive", "gumagamit"],
  ["gamit", "Object (-in)", "contemplated", "gagamitin"],
  ["nood", "Object (-in)", "contemplated", "panonoorin"],
  ["tingin", "Object / Location (-an)", "progressive", "tinitingnan"],
  ["hawak", "Locative/Benefactive (-an)", "complete", "hinawakan"],
  ["suot", "Object (i-)", "contemplated", "isusuot"],
  ["intindi", "Ability / Understand (ma-...-an)", "contemplated", "maiintindihan"],
  ["kilala", "Object (-in)", "contemplated", "kikilalanin"],
  ["kailangan", "State / Need", "contemplated", "kakailanganin"],
  ["kaya", "Object (-in)", "contemplated", "kakayanin"],
  ["tira", "Locative/Benefactive (-an)", "contemplated", "titirahan"],
  ["alaga", "Object / Benefactive (-an)", "contemplated", "aalagaan"],
  ["kanta", "Object (-in)", "contemplated", "kakantahin"]
]) {
  assert.equal(resolveForm(root, focus, aspect), expected, `${root} ${focus} ${aspect}`);
}

for (const [form, root] of [
  ["gagamitin", "gamit"], ["panonoorin", "nood"], ["titingnan", "tingin"],
  ["hawakan", "hawak"], ["isusuot", "suot"], ["maiintindihan", "intindi"],
  ["kikilalanin", "kilala"], ["kakailanganin", "kailangan"], ["kakayanin", "kaya"],
  ["titirahan", "tira"], ["aalagaan", "alaga"], ["kakantahin", "kanta"]
]) {
  assert.equal(evaluate(`ACTIVE_CONJUGATED_LOOKUP["${form}"].root`), root, form);
}
assert.equal(evaluate('resolveVerb("kelangan").root'), "kailangan");
assert.equal(evaluate('resolveVerb("tignan").root'), "tingin");

for (const [form, root] of [
  ["ipakita", "kita"], ["tatawagan", "tawag"], ["ipasok", "pasok"],
  ["ilabas", "labas"], ["sakyan", "sakay"], ["isakay", "sakay"],
  ["iuwi", "uwi"], ["hiramin", "hiram"], ["ipahiram", "hiram"],
  ["turuan", "turo"], ["ituro", "turo"], ["alamin", "alam"],
  ["mahalin", "mahal"], ["magkasakit", "sakit"]
]) {
  assert.equal(evaluate(`ACTIVE_CONJUGATED_LOOKUP["${form}"].root`), root, form);
}

const negationResult = JSON.parse(evaluate('JSON.stringify(resolveVerb("gamit"))'));
assert.equal(
  negationResult.conjugations["Negation (hindi-)"].forms.progressive.form,
  "hindi gumagamit"
);
assert.equal(
  negationResult.conjugations["Negation (hindi-)"].forms.imperative.form,
  "huwag kang gumamit"
);
assert.match(
  negationResult.conjugations["Negation (hindi-)"].forms.imperative.example,
  /^Huwag kang gumamit\./,
  "the negative imperative's displayed form and example must agree"
);

function resolveForm(root, focus, aspect) {
  return JSON.parse(evaluate(`JSON.stringify(resolveVerb("${root}"))`))
    .conjugations[focus].forms[aspect].form;
}

// Corrected forms that were previously wrong in the curated data.
assert.equal(
  evaluate('resolveVerb("sara").conjugations["Object (-in)"].forms.infinitive.form'),
  "sarahin"
);
assert.equal(
  evaluate('resolveVerb("tulong").conjugations["Object (-an)"].forms.infinitive.form'),
  "tulungan"
);
// makalimutan is the ma-...-an stative, not an actor-focus form: the forgetter
// is a ng-actor ("Nakalimutan ko"), so the card must not be filed under Actor.
assert.equal(
  evaluate('resolveVerb("limot").conjugations["Ability / Understand (ma-...-an)"].forms.infinitive.form'),
  "makalimutan"
);
assert.equal(
  evaluate('resolveVerb("limot").conjugations["Actor (ma-)"]'),
  undefined
);
assert.equal(
  evaluate('resolveVerb("ingat").conjugations["Actor (mag-)"].forms.infinitive.form'),
  "mag-ingat"
);
assert.equal(
  evaluate('generateConjugations("sara", ["in"])["Object (-in)"].forms.infinitive.form'),
  "sarahin"
);
assert.equal(
  evaluate('generateConjugations("basa", ["in"])["Object (-in)"].forms.contemplated.form'),
  "babasahin"
);
assert.equal(
  evaluate('generateConjugations("luto", ["in"])["Object (-in)"].forms.infinitive.form'),
  "lutuin"
);

// Reverse lookup: standard spellings resolve; the ma-object focus is indexed.
for (const [form, root, affix] of [
  ["sarahin", "sara", "in"],
  ["tulungan", "tulong", "an"],
  ["nakalimutan", "limot", "ma-an"],
  ["mag-ingat", "ingat", "mag"],
  ["nakita", "kita", "mao"]
]) {
  const hit = JSON.parse(evaluate(`JSON.stringify(ACTIVE_CONJUGATED_LOOKUP["${form}"])`));
  assert.equal(hit.root, root, form);
  assert.equal(hit.affix, affix, form);
}

// No nonstandard forms survive in the curated reverse-lookup table.
for (const bad of ["sarhin", "sasarhin", "itulong", "itinulong", "umingat", "umiingat", "makalimot", "nakalimot"]) {
  assert.equal(evaluate(`ACTIVE_CONJUGATED_LOOKUP["${bad}"]`), undefined, bad);
}

// ============================================================
// Invariants over the WHOLE lexicon.
//
// The checks above pin individual forms that were once wrong. These instead
// assert properties that must hold for every rendered card, so a whole class
// of error cannot come back through a new verb or a new template. Each one
// corresponds to a bug that was actually shipped.
// ============================================================

const allCards = JSON.parse(evaluate(`JSON.stringify(
  Object.keys(VERB_LEXICON).flatMap(root =>
    Object.entries(resolveVerb(root).conjugations || {}).flatMap(([focus, card]) =>
      Object.entries(card.forms || {}).map(([aspect, data]) => ({
        root, focus, aspect, form: data.form, example: data.example
      }))
    )
  )
)`));
assert.ok(allCards.length > 2000, "expected the full lexicon to render");

const words = text => String(text || "")
  .toLowerCase().replace(/[.,!?'’]/g, "").split(/\s+/).filter(Boolean);
const tagalogHalf = example => String(example || "").split("—")[0];

// 1. Enclitic pronoun placement. Tagalog enclitics attach to the first word of
//    the predicate, so a negated clause is "Hindi siya kumain", never
//    "Hindi kumain siya". A template once produced the latter for 169 roots.
const ENCLITICS = [
  "siya", "ako", "ka", "kang", "sila", "kami", "tayo", "ito",
  "niya", "nila", "ko", "mo", "namin", "natin", "ninyo"
];
const misplacedEnclitics = allCards.filter(card => {
  const w = words(tagalogHalf(card.example));
  return /^(hindi|huwag)$/.test(w[0] || "") && w.length > 2 && ENCLITICS.includes(w[2]);
});
assert.deepEqual(misplacedEnclitics.map(c => `${c.root} ${c.aspect}`), [],
  "enclitic pronoun must follow the negator, not the verb");

// 2. Every example must actually demonstrate the form it illustrates. Multi-word
//    forms ("hindi kumain") may be split by an enclitic, so match as a
//    subsequence rather than a substring.
const exampleMismatches = allCards.filter(card => {
  const form = String(card.form || "").toLowerCase();
  if (!form || form.startsWith("(")) return false;  // parenthesised = unattested
  const want = words(form);
  let i = 0;
  for (const w of words(tagalogHalf(card.example))) if (w === want[i]) i++;
  return i < want.length;
});
assert.deepEqual(exampleMismatches.map(c => `${c.root} ${c.focus} ${c.aspect}`), [],
  "example sentence must contain the form it illustrates");

// 3. Every root needs a real English gloss. Roots without one silently rendered
//    as "He/she did not do it" via the generic placeholder.
const ungloss = JSON.parse(evaluate(`JSON.stringify(
  Object.keys(VERB_LEXICON).filter(root => !TAGALOG_ENGLISH[root])
)`));
assert.deepEqual(ungloss, [], "every lexicon root needs an explicit English gloss");

// 4. No generated example may leak the generic placeholder into user-facing text.
const placeholderLeaks = allCards.filter(card => /\b(do it|doing it|did it)\b/.test(card.example || ""));
assert.deepEqual(placeholderLeaks.map(c => `${c.root} ${c.aspect}`), [],
  "no example may fall back to the 'do it' placeholder");

// 5. Focus keys are free text, so a new spelling must still resolve to a known
//    pattern and pick up a sort position, a colour, and a usage badge.
//    21 of 39 keys in use once resolved to none of the three.
const unmappedFocuses = [...new Set(allCards.map(c => c.focus))].filter(focus => {
  const rank = evaluate(`focusRank(${JSON.stringify(focus)})`);
  const tip = evaluate(`focusTip(${JSON.stringify(focus)}) ? 1 : 0`);
  return rank === -1 || !tip;
});
assert.deepEqual(unmappedFocuses, [],
  "every focus key must resolve to a sort rank and a usage tip");

// 6. The generator and the usage badge must agree about restricted patterns.
//    They read the same constants now; before, two copies of each root list
//    could drift so a card claimed "common" for a form the generator had
//    already parenthesised as unattested.
//    Scoped to GENERATED cards: a curated override supplies a hand-checked
//    form and is never parenthesised, so it can legitimately carry a low
//    badge (usap's curated "mag-usapan" is rare -- the common word for
//    discussing something is pag-usapan, which the corpus confirms).
const hasOverride = (root, focus) =>
  evaluate(`Boolean((VERB_LEXICON[${JSON.stringify(root)}].overrides || {})[${JSON.stringify(focus)}])`);
const badgeDisagreements = [];
for (const [pattern, focus] of [
  ["maka", "Actor (maka-)"],
  ["magka", "Actor (magka-)"],
  ["reciprocal", "Reciprocal (mag-...-an)"]
]) {
  for (const card of allCards.filter(c => c.focus === focus && !hasOverride(c.root, focus))) {
    const unattested = String(card.form).startsWith("(");
    const tag = evaluate(`(focusTip(${JSON.stringify(focus)}, ${JSON.stringify(card.root)}) || {}).tag`);
    if (unattested !== (tag === "uncommon")) {
      badgeDisagreements.push(`${card.root} ${pattern}: form=${card.form} badge=${tag}`);
    }
  }
}
assert.deepEqual(badgeDisagreements, [],
  "usage badge must agree with whether the generator marked the form attested");

// ============================================================
// Corpus attestation layer (attestation.js)
// ============================================================

assert.ok(evaluate("Object.keys(CORPUS_ATTESTATION).length") > 150,
  "attestation.js must be loaded before app.js");

// Every suggested pattern must be one the generator actually understands, and
// belong to a root that exists. A typo here would silently add nothing.
const SUPPORTED = ["um","mag","ma","in","i","mao","an","maka","mang","mangh",
  "magpa","magka","ipa","ipag","ipang","ma-an","pa-in","state","reciprocal",
];
const badSuggestions = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(CORPUS_SUGGESTED_PATTERNS).flatMap(([root, pats]) =>
    pats.filter(p => !${JSON.stringify(SUPPORTED)}.includes(p) || !VERB_LEXICON[root])
        .map(p => root + ":" + p)
  )
)`));
assert.deepEqual(badSuggestions, [], "suggested patterns must be valid and resolvable");

// Suggested patterns must actually reach the rendered output.
const unmerged = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(CORPUS_SUGGESTED_PATTERNS).flatMap(([root, pats]) =>
    pats.filter(p => !VERB_LEXICON[root].allowedPatterns.includes(p))
        .map(p => root + ":" + p)
  )
)`));
assert.deepEqual(unmerged, [], "every suggested pattern must be merged into allowedPatterns");

// A pattern can be offered by a generated card or supplied by a curated
// override. Any other allowedPatterns entry is dead configuration: it silently
// renders nothing, even though the root appears to support it.
const deadAllowedPatterns = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(VERB_LEXICON).flatMap(([root, entry]) => {
    const generatedPatterns = new Set(
      Object.keys(generateConjugations(root, entry.allowedPatterns))
        .map(patternIdForFocus)
        .filter(Boolean)
    );
    const overridePatterns = new Set(
      Object.keys(entry.overrides || {}).map(patternIdForFocus).filter(Boolean)
    );
    return entry.allowedPatterns
      .filter(pattern => !generatedPatterns.has(pattern) && !overridePatterns.has(pattern))
      .map(pattern => root + ":" + pattern);
  })
)`));
assert.deepEqual(deadAllowedPatterns, [],
  "every allowed pattern must generate a card or have a curated override");

// The tiering must be monotonic: a pair with many occurrences across several
// aspects cannot come back as unattested.
const tierViolations = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(CORPUS_ATTESTATION).flatMap(([root, pats]) =>
    Object.entries(pats)
      .filter(([p, v]) => v[0] >= 100 && v[2] >= 2 && attestationTier(root, p) !== "common")
      .map(([p]) => root + ":" + p)
  )
)`));
assert.deepEqual(tierViolations, [], "well-attested pairs must tier as common");

// The homograph guard must hold: a single attested surface form never counts
// as a paradigm, however frequent it is (tindahan "store", masaya "happy").
const homographLeaks = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(CORPUS_ATTESTATION).flatMap(([root, pats]) =>
    Object.entries(pats)
      .filter(([p, v]) => v[2] < 2 && attestationTier(root, p) !== "unattested")
      .map(([p]) => root + ":" + p)
  )
)`));
assert.deepEqual(homographLeaks, [], "a single attested form must not tier as a paradigm");

// Card-level evidence must cover curated irregulars, whose forms never match
// what the generator would have produced for their pattern. Before this, they
// had no entry in the pattern table and scored as unattested.
assert.ok(evaluate("Object.keys(CORPUS_FORM_HITS).length") > 1000,
  "form-level corpus index must be present");
for (const [root, focus] of [
  ["kita", "Object (ma-)"],                          // makita / nakita
  ["nood", "Object (-in)"],                          // panoorin, irregular
  ["intindi", "Ability / Understand (ma-...-an)"],   // maintindihan
  ["alaga", "Object / Benefactive (-an)"]            // alagaan
]) {
  const tier = evaluate(
    `tierFromEvidence(cardEvidence(resolveVerb(${JSON.stringify(root)}).conjugations[${JSON.stringify(focus)}]))`);
  assert.equal(tier, "common", `${root} ${focus} should score as common`);
}
// cardEvidence must deduplicate: -um- infinitive and complete are one string,
// so a card must never be credited with more attested aspects than it has
// distinct forms.
const overCounted = JSON.parse(evaluate(`JSON.stringify(
  Object.keys(VERB_LEXICON).flatMap(root =>
    Object.entries(resolveVerb(root).conjugations || {}).flatMap(([focus, card]) => {
      const ev = cardEvidence(card);
      if (!ev) return [];
      const distinct = new Set(Object.values(card.forms || {})
        .map(d => String(d.form || "").toLowerCase().replace(/^\\(|\\)$/g, "").trim())
        .filter(f => f && !f.includes(" "))).size;
      return ev.aspects > distinct ? [root + " " + focus] : [];
    })
  )
)`));
assert.deepEqual(overCounted, [], "cardEvidence must not count a form twice");

// Suffix selection for vowel-final roots. -in/-an follow a glottal stop and
// -hin/-han follow a plain vowel, but the ASCII roots do not record glottal
// stops, so the final letter cannot decide it: basa -> basahan yet alaga ->
// alagaan. Measured per root; unmeasured roots keep the spelling heuristic.
assert.ok(evaluate("Object.keys(CORPUS_SUFFIX).length") > 25,
  "suffix preference table must be present");
for (const [root, pattern, expected] of [
  ["basa",  "in", "basahin"],
  ["basa",  "an", "basahan"],
  ["alaga", "an", "alagaan"],   // NOT alagahan, despite ending in -a
  ["upo",   "an", "upuan"],
  ["turo",  "an", "turuan"],
  ["pili",  "in", "piliin"],    // NOT pilihin
  ["sabi",  "in", "sabihin"],
  // consonant-final roots are unaffected and never take the h-glide
  ["kain",  "in", "kainin"],
  ["sulat", "in", "sulatin"]
]) {
  const card = JSON.parse(evaluate(
    `JSON.stringify(generateConjugations(${JSON.stringify(root)}, [${JSON.stringify(pattern)}]))`));
  const focus = Object.keys(card)[0];
  assert.equal(String(card[focus].forms.infinitive.form).replace(/^\(|\)$/g, ""),
    expected, `${root} + -${pattern}`);
}
// The table must only ever name real suffixes.
const badSuffixes = JSON.parse(evaluate(`JSON.stringify(
  Object.entries(CORPUS_SUFFIX).flatMap(([root, kinds]) =>
    Object.entries(kinds)
      .filter(([kind, val]) =>
        (kind === "in" && val !== "in" && val !== "hin") ||
        (kind === "an" && val !== "an" && val !== "han"))
      .map(([kind, val]) => root + ":" + kind + "=" + val))
)`));
assert.deepEqual(badSuffixes, [], "suffix table must contain only -in/-hin/-an/-han");

// Nasal assimilation for the mang- family. A -ng prefix adapts to the root's
// first sound and usually absorbs it; reduplication then copies a different
// unit depending on whether that consonant survived. Every expected form here
// occurs in the reference corpora, and the naive "mang- + root" spellings
// (mangbili, mangkuha) occur zero times.
for (const [root, pattern, expected] of [
  // consonant dropped: nasal fills the onset, so the copy is nasal + vowel
  ["bili",  "mang",  ["mamili", "namili", "namimili", "mamimili"]],
  ["putol", "mang",  ["mamutol", "namutol", "namumutol", "mamumutol"]],
  ["takot", "mang",  ["manakot", "nanakot", "nananakot", "mananakot"]],
  // k is always dropped, and the prefix stays -ng
  ["kuha",  "mang",  ["manguha", "nanguha", "nangunguha", "mangunguha"]],
  // consonant retained: nasal closes the prefix, root's own onset is copied
  ["huli",  "mangh", ["manghuli", "nanghuli", "nanghuhuli", "manghuhuli"]],
  ["hingi", "mangh", ["manghingi", "nanghingi", "nanghihingi", "manghihingi"]]
]) {
  const card = JSON.parse(evaluate(
    `JSON.stringify(generateConjugations(${JSON.stringify(root)}, [${JSON.stringify(pattern)}]))`));
  const focus = Object.keys(card)[0];
  const got = ["infinitive","complete","progressive","contemplated"]
    .map(a => String(card[focus].forms[a].form).replace(/^\(|\)$/g, ""));
  assert.deepEqual(got, expected, `${root} + ${pattern}-`);
}
// manunulat is the noun "writer", the only attested form of sulat's mang-
// paradigm. One attested form is not a paradigm, so it must stay disclaimed.
assert.equal(
  evaluate('generateConjugations("sulat", ["mang"])["Actor (mang-)"].forms.infinitive.form'),
  "(manulat)");

// The morphophonemic d -> r rule before a vowel-initial suffix. Every one of
// these r-spellings is the attested form; the d-spelling has zero corpus hits.
for (const [root, pattern, aspect, expected] of [
  ["bayad", "an", "infinitive", "bayaran"],
  ["bayad", "an", "contemplated", "babayaran"],
  ["bayad", "in", "infinitive", "bayarin"],
  ["lakad", "an", "infinitive", "lakaran"],
  ["tawad", "an", "infinitive", "tawaran"],
  ["pagod", "in", "infinitive", "pagurin"],     // o->u applies before d->r
  ["lipad", "in", "infinitive", "liparin"],
  ["tawid", "an", "infinitive", "tawiran"]
]) {
  const got = evaluate(`generateConjugations(${JSON.stringify(root)}, [${JSON.stringify(pattern)}])` +
    `[Object.keys(generateConjugations(${JSON.stringify(root)}, [${JSON.stringify(pattern)}]))[0]].forms.${aspect}.form`);
  assert.equal(got, expected, `${root} + -${pattern} (${aspect})`);
}
// ...but a d that is not intervocalic, and a root with no final d, are untouched.
assert.equal(evaluate('generateConjugations("luto", ["in"])["Object (-in)"].forms.infinitive.form'), "lutuin");
assert.equal(evaluate('generateConjugations("kain", ["in"])["Object (-in)"].forms.infinitive.form'), "kainin");
// The completed aspect takes no suffix, so the d survives there.
assert.equal(evaluate('generateConjugations("bayad", ["in"])["Object (-in)"].forms.complete.form'), "binayad");

console.log(`All conjugator regression checks passed (${allCards.length} forms checked).`);
