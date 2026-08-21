# Tagalog Verb Conjugator

The app uses a local lexicon plus a constrained conjugation engine. A verb is
generated only from affix patterns explicitly approved for that root.

## Verb schema

Add new verbs to `essential-verbs.js` using the normalized shape. Legacy
records remain in `verbs.js` and are adapted at runtime.

```js
usisa: {
  root: "usisa",
  meanings: ["to investigate", "to pry", "to inquire"],
  allowedPatterns: ["mag"],
  status: "curated",
  sources: [],
  notes: "Takes mag- for active investigation.",
  overrides: {},
  examples: [
    {
      pattern: "mag",
      aspect: "progressive",
      text: "Nag-uusisa siya ngayon. — He/she is investigating now."
    }
  ]
}
```

Supported pattern IDs are `um`, `mag`, `ma`, `in`, `i`, `mao` (stative/potential
object focus, e.g. `makita`), `an`, `maka`, `mang`, `mangh`, `magpa`, `magka`,
`ipa`, `ipag`, `ipang`, `ma-an`, `pa-in`, `state`, `reciprocal`, `negation`,
and `distributive`.

Use `overrides` only when a generated card or form needs curated data. During
the ongoing migration, older entries may still contain complete focus cards;
`lexicon.js` adapts both formats and merges corrections into the same runtime
schema.

Each source should eventually contain enough information to audit the entry,
for example:

```js
sources: [
  { title: "Reference title", url: "https://example.com/entry" }
]
```

Unknown roots do not receive speculative conjugations. The reverse lookup is
built from both curated overrides and generated approved patterns.

## Regression checks

```powershell
node tests/conjugator.test.js
```
