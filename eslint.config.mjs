import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["attestation.js", "verbs.js", "tools/build-wiktionary-verb-expansion.js"]
  },
  {
    files: ["app.js", "lexicon.js", "essential-verbs.js", "tests/**/*.js", "tools/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "off",
      // Browser files are loaded as ordered classic scripts and deliberately
      // share lexicon data through globals, so ESLint cannot infer these names.
      "no-undef": "off"
    }
  }
];
