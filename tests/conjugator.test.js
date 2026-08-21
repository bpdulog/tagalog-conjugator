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

for (const filename of ["verbs.js", "lexicon.js", "app.js"]) {
  const source = fs.readFileSync(path.join(projectRoot, filename), "utf8");
  vm.runInContext(source, context, { filename });
}

function evaluate(source) {
  return vm.runInContext(source, context);
}

assert.equal(evaluate("Object.keys(VERB_LEXICON).length"), 194);
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
assert.deepEqual(Object.keys(usisaResult.conjugations), ["Actor (mag-)"]);
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

console.log("All conjugator regression checks passed.");
