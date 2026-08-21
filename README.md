# Tagalog Verb Conjugator

The app uses a local lexicon plus a constrained conjugation engine. A verb is
generated only from affix patterns explicitly approved for that root.

## Verb schema

Add new verbs to `VERB_DATABASE` in `verbs.js` using the normalized shape:

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

Supported pattern IDs are `um`, `mag`, `ma`, `in`, `i`, `an`, `maka`,
`mang`, `mangh`, `magpa`, `magka`, `ipa`, `ipag`, `ipang`, `reciprocal`,
`negation`, and `distributive`.

Use `overrides` only when a generated card or form needs curated data. During
the ongoing migration, older entries may still contain complete focus cards;
`lexicon.js` adapts both formats to the same runtime schema.

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
