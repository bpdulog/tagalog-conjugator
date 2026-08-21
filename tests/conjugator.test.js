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

for (const filename of ["verbs.js", "essential-verbs.js", "lexicon.js", "app.js"]) {
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
  "huwag gumamit"
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
assert.equal(
  evaluate('resolveVerb("limot").conjugations["Actor (ma-)"].forms.infinitive.form'),
  "makalimutan"
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
  ["nakalimutan", "limot", "ma"],
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

console.log("All conjugator regression checks passed.");
