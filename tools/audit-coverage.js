/* ============================================================
   Audit coverage of a reviewed core-verb target.

   Usage:
     node tools/audit-coverage.js
     node tools/audit-coverage.js --strict

   This tool deliberately does not guess which raw corpus tokens are verbs:
   Tagalog roots routinely overlap with nouns and adjectives. Instead, the
   reviewed list in common-verb-candidates.json provides a measurable target.
   ============================================================ */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "..");
const candidatesPath = path.join(__dirname, "common-verb-candidates.json");
const candidates = JSON.parse(fs.readFileSync(candidatesPath, "utf8"));
const strict = process.argv.includes("--strict");
const CORE_TARGET_SIZE = 200;

function loadApp() {
  const context = vm.createContext({
    window: {},
    document: { addEventListener() {} },
    navigator: {},
    console,
    setTimeout,
    clearTimeout
  });

  for (const filename of ["attestation.js", "verbs.js", "essential-verbs.js", "lexicon.js", "app.js"]) {
    vm.runInContext(fs.readFileSync(path.join(projectRoot, filename), "utf8"), context, { filename });
  }
  return context;
}

function cleanForm(value) {
  const form = String(value || "").trim();
  return form && !form.startsWith("(") && !form.includes(" ") ? form.toLowerCase() : null;
}

function evidenceFor(context, root) {
  const result = vm.runInContext(`resolveVerb(${JSON.stringify(root)})`, context);
  const forms = new Set();
  for (const card of Object.values(result.conjugations || {})) {
    for (const data of Object.values(card.forms || {})) {
      const form = cleanForm(data.form);
      if (form) forms.add(form);
    }
  }
  const hits = vm.runInContext("CORPUS_FORM_HITS", context);
  return {
    formCount: forms.size,
    hits: [...forms].reduce((sum, form) => sum + (hits[form] || 0), 0)
  };
}

function auditRoots(context, roots) {
  const lexicon = vm.runInContext("VERB_LEXICON", context);
  return roots.map(root => {
    const entry = lexicon[root];
    if (!entry) return { root, status: "missing", formCount: 0, hits: 0 };
    const evidence = evidenceFor(context, root);
    return {
      root,
      status: evidence.formCount ? "covered" : "empty",
      ...evidence
    };
  });
}

const context = loadApp();
const required = auditRoots(context, candidates.requiredRoots || []);
const review = auditRoots(context, candidates.reviewRoots || []);
const gaps = required.filter(item => item.status !== "covered");
const uncoveredReview = review.filter(item => item.status !== "covered");
const duplicateRoots = candidates.requiredRoots.filter(
  (root, index, roots) => roots.indexOf(root) !== index
);
const targetSizeMatches = candidates.requiredRoots.length === CORE_TARGET_SIZE;

console.log(`Required core verbs: ${required.length - gaps.length}/${required.length} covered`);
console.log(`Corpus-form hits across required roots: ${required.reduce((sum, item) => sum + item.hits, 0)}`);

if (!targetSizeMatches) {
  console.log(`\nCore target size: ${candidates.requiredRoots.length}/${CORE_TARGET_SIZE}`);
}

if (duplicateRoots.length) {
  console.log(`\nDuplicate required roots: ${[...new Set(duplicateRoots)].join(", ")}`);
}

if (gaps.length) {
  console.log("\nRequired gaps:");
  for (const gap of gaps) console.log(`- ${gap.root} (${gap.status})`);
}

console.log("\nReview queue:");
for (const item of review) {
  const detail = item.status === "covered"
    ? `${item.formCount} rendered forms; ${item.hits} corpus-form hits`
    : item.status;
  console.log(`- ${item.root}: ${detail}`);
}

if (strict && (gaps.length || !targetSizeMatches || duplicateRoots.length)) {
  console.error("\nCoverage target is incomplete or malformed. Curate each required root and keep the core target at 200 unique roots.");
  process.exitCode = 1;
}

if (!uncoveredReview.length) {
  console.log("\nReview queue is clear.");
}
