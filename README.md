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

The suite has two halves. The first pins individual forms that were once
wrong. The second asserts invariants across every rendered form in the
lexicon (currently ~2,260), so a class of error cannot reappear through a new
verb or a new template:

| Invariant | Bug it prevents |
| --- | --- |
| Enclitic pronouns follow the negator, not the verb | "Hindi kumain siya" instead of "Hindi siya kumain" |
| Every example contains the form it illustrates | Cards demonstrating a different word than the one shown |
| Every root has an explicit English gloss | Examples reading "He/she did not do it" |
| No example contains the `do it` placeholder | The generic fallback reaching user-facing text |
| Every focus key resolves to a sort rank and usage tip | New key spellings rendering uncoloured, unsorted, unlabelled |
| Usage badge agrees with the generator's attestation | A card marked "common" for a form generated as unattested |

Focus keys are free text, so the same pattern appears under several spellings
(`Actor (um-)` vs `Actor (-um-)`). Display data is looked up by the pattern id
that `lexicon.js` derives from the key, so a new spelling inherits the colour,
sort position, and usage badge of its family instead of falling through.

Roots that commonly take an otherwise-restricted pattern are listed once, in
the `*_COMMON_ROOTS` constants near the top of `app.js`. Both the generator and
the usage badge read them, so the two cannot disagree.

### What these checks do not cover

They verify internal consistency, not external truth. They cannot confirm that
an example sentence sounds natural to a native speaker. Frequency claims are
covered separately, by corpus evidence (below). Populate `sources` as entries
are verified against a reference.

## Corpus attestation

Whether a form is common is a claim about usage, so it is answered with
evidence rather than judgement. `attestation.js` is generated from three
corpora and holds, per (root, affix pattern), how often the paradigm actually
occurs.

```powershell
bash tools/fetch-corpora.sh corpora      # ~35 MB, gitignored
node tools/build-attestation.js corpora  # regenerates attestation.js
```

| Corpus | Size | Register |
| --- | --- | --- |
| OpenSubtitles v2024 (`tl`) | 1,272,483 lines | Conversational |
| Tatoeba (`tgl`) | 79,067 sentences | Human-written sentences |
| Leipzig `tgl_wikipedia_2021_100K` | 100,000 sentences | Formal |

Register is weighted deliberately: "most common" in a learner app means
everyday speech, and Wikipedia Tagalog skews formal, over-representing `mag-`
and `-in`. Only the first two count toward the conversational total; Wikipedia
is recorded separately for contrast.

Two methodological guards matter:

- **Deduplicate surface forms.** For `-um-` the infinitive and the completed
  aspect are the same string (`tumigil`), so summing all four aspects counts it
  twice.
- **Require several attested aspects.** A real paradigm appears in more than
  one form. A homograph spikes in exactly one: `masaya` ("happy") occurs 3,882
  times while `nasaya` occurs 0, and `tindahan` ("store") 696 times with no
  other form of the paradigm present. Counting either as verb usage would be
  wrong, so a single attested form never tiers as a paradigm.

`attestation.js` holds three tables. `CORPUS_ATTESTATION` is keyed by (root,
pattern) and drives which generated forms are offered. `CORPUS_FORM_HITS`
counts each individual rendered form, so curated irregulars — `makita`,
`panoorin`, `sundan`, `maintindihan` — are scored too; the pattern table alone
would miss them, because the generator never produces those spellings and they
would read as unattested. `CORPUS_SUGGESTED_PATTERNS` adds a pattern a verb was
missing when its full paradigm is frequent and absent from what the app already
renders. Verbs
that gained a pattern this way carry a `corpusAdded` marker, so a
corpus-derived card is distinguishable from a hand-checked one.

## Morphophonemic rules

Three rules govern how an affix and a root combine. Each was verified against
the corpora before being implemented, and each is covered by tests.

**Intervocalic d → r** before a vowel-initial suffix. `bayad` + `-an` is
`bayaran`, not `bayadan`. It applies after the o → u raising, so `pagod`
becomes `pagud-` then `pagurin`. Every d-final root in the lexicon confirms
this: the d-spellings have zero corpus occurrences.

**Nasal assimilation** in the `mang-` family. A prefix ending in `-ng` adapts
to the root's first sound, which is usually absorbed:

| Root begins with | Prefix becomes | Example |
| --- | --- | --- |
| p, b | `-m` | `bili` → `mamili` |
| d, l, r, s, t | `-n` | `takot` → `manakot` |
| k | `-ng`, k always dropped | `kuha` → `manguha` |
| anything else | `-ng` | `huli` → `manghuli` |

Reduplication then depends on whether that consonant survived. When it is
absorbed the nasal fills the empty onset, so the copied syllable is nasal +
vowel (`namimili`). When it is retained the nasal closes the prefix and the
root's own onset is copied (`nanghuhuli`).

**Suffix selection** for vowel-final roots. `-in`/`-an` follow a root ending in
a glottal stop; `-hin`/`-han` follow a plain vowel. The ASCII roots do not
record glottal stops, so this cannot be derived from the spelling — `basa`
takes `basahan` but `alaga` takes `alagaan`. It is measured per root into
`CORPUS_SUFFIX`; roots with no clear evidence fall back to the spelling
heuristic.

These counts measure written text. Treat them as strong evidence about usage,
not a verdict on grammaticality — a zero does not prove a form is wrong, only
that it is not in evidence here.
