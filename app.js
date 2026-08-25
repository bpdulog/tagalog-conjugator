/* ============================================================
   Tagalog Verb Conjugator — App Logic
   ============================================================ */

// ----- Pattern-based conjugation engine -----
// Generates all standard forms from a base root when not in the
// normalized local lexicon. Uses documented Tagalog affixation rules.

const VOWELS = "aeiou";

// First syllable of a root (used for reduplication)
function firstSyllable(root) {
  if (!root) return "";
  const lower = root.toLowerCase();
  // If starts with vowel, the "syllable" is just that vowel
  if (VOWELS.includes(lower[0])) return lower[0];
  // Consonant + vowel (or consonant + ng + vowel) forms a syllable
  // Handle common clusters
  if (lower.startsWith("ng")) {
    return lower.startsWith("nga") || lower.startsWith("ngo") || lower.startsWith("ngi") || lower.startsWith("ngu")
      ? "ng" + lower[2] : "ng";
  }
  if (lower.length >= 2 && VOWELS.includes(lower[1])) {
    return lower.slice(0, 2);
  }
  // Consonant cluster: Tagalog reduplicates the first consonant + first vowel
  // (plantsa → pa-plantsa, trabaho → ta-trabaho), not the whole cluster.
  for (let i = 1; i < lower.length; i++) {
    if (VOWELS.includes(lower[i])) return lower[0] + lower[i];
  }
  return lower.slice(0, 2);
}

// Reduplicate the first syllable (CV or V → CVCV or VV)
function reduplicate(root) {
  const fs = firstSyllable(root);
  return fs + root;
}

// ----- Roots that commonly take an otherwise-restricted pattern -----
// Read by the generator (to decide whether to mark a form as attested) AND by
// focusTip (to decide which usage badge to show). They were previously
// duplicated verbatim in both places, so an edit to one copy silently
// contradicted the other -- the card could claim "common" while the generator
// had already parenthesised the form as unattested.
const MAKA_COMMON_ROOTS = [
  "kain", "inom", "lakad", "takbo", "sulat", "basa", "tulog", "gawa", "aral",
  "trabaho", "tulong", "harap", "tayo", "upo", "hinga",
  // Perception/acquaintance roots whose maka- forms are everyday vocabulary
  // ("nakakita ako", "nakilala ko siya"). The curated cards already treat
  // these as attested, so the badge must not call them uncommon.
  "kita", "kilala"
];
const MANG_COMMON_ROOTS = [
  "bili", "isda", "huli", "sipa", "basa", "kuha", "gala", "saka", "ani",
  "pitas", "bunot", "putol", "karga", "sundo", "hila", "takbo", "lakad",
  "langoy", "kayod", "linis"
];
const MAGKA_COMMON_ROOTS = [
  "roon", "isa", "dalawa", "tatlo", "kaibigan", "bahay", "trabaho", "asawa",
  "buhay", "oras", "pera", "lugi", "tuwa", "galak", "takot", "sakit"
];
const RECIPROCAL_COMMON_ROOTS = [
  "usap", "tulong", "away", "halik", "yakap", "suntok", "tama", "lakad",
  "takbo", "hawak", "tingin", "kilala", "libot", "ikot",
  // mag-asawa ("to marry / to be spouses") is curated and in everyday use.
  "asawa"
];

// ----- Corpus attestation -----
// attestation.js carries frequency evidence per (root, pattern). When it is
// loaded it decides whether a form is presented as common, less common, or
// unattested; the hand-written lists above remain only as a fallback for when
// it is not, so the page still renders standalone.
const ATTESTATION_COMMON_HITS = 100;   // conversational occurrences
const ATTESTATION_PRESENT_HITS = 10;
const ATTESTATION_MIN_ASPECTS = 2;     // guards against homographs

function attestationFor(root, pattern) {
  if (typeof CORPUS_ATTESTATION === "undefined") return null;
  const entry = CORPUS_ATTESTATION[String(root || "").toLowerCase()];
  const value = entry && entry[pattern];
  if (!value) return { conv: 0, formal: 0, aspects: 0 };
  return { conv: value[0], formal: value[1], aspects: value[2] };
}

// "common" | "less-common" | "unattested", or null when no corpus data exists.
// A single attested surface form is not a paradigm: masaya ("happy") and
// tindahan ("store") each spike in exactly one slot, so requiring two guards
// against reading a noun or adjective as verb usage.
function attestationTier(root, pattern) {
  const a = attestationFor(root, pattern);
  if (!a) return null;
  if (a.aspects < ATTESTATION_MIN_ASPECTS) return "unattested";
  if (a.conv >= ATTESTATION_COMMON_HITS) return "common";
  if (a.conv >= ATTESTATION_PRESENT_HITS) return "less-common";
  return "unattested";
}

// Is this root/pattern combination worth presenting as real usage? Falls back
// to the curated allowlist when attestation.js is absent.
function patternIsAttested(root, pattern, fallbackList) {
  const tier = attestationTier(root, pattern);
  if (tier === null) return fallbackList.includes(String(root || "").toLowerCase());
  return tier !== "unattested";
}

// Evidence for the forms a card ACTUALLY shows. The pattern table is keyed on
// what the generator produces, so a curated irregular (makita, panoorin,
// sundan) has no entry there and would be misread as unattested. Scoring the
// rendered forms directly covers curated and generated cards alike.
function cardEvidence(card) {
  if (typeof CORPUS_FORM_HITS === "undefined" || !card) return null;
  const seen = new Set();
  let conv = 0, aspects = 0, known = 0;
  for (const data of Object.values(card.forms || {})) {
    const form = String(data.form || "").toLowerCase().replace(/^\(|\)$/g, "").trim();
    if (!form || form.includes(" ") || seen.has(form)) continue;
    seen.add(form);
    const hits = CORPUS_FORM_HITS[form];
    if (typeof hits !== "number") continue;
    known++;
    conv += hits;
    if (hits > 0) aspects++;
  }
  return known ? { conv, aspects } : null;
}

function tierFromEvidence(evidence) {
  if (!evidence) return null;
  if (evidence.aspects < ATTESTATION_MIN_ASPECTS) return "unattested";
  if (evidence.conv >= ATTESTATION_COMMON_HITS) return "common";
  if (evidence.conv >= ATTESTATION_PRESENT_HITS) return "less-common";
  return "unattested";
}

// Build forms only for the patterns approved by the verb's lexicon entry.
// Returns a structure compatible with curated overrides so the UI can render
// both through the same path.
function generateConjugations(root, allowedPatterns = []) {
  const r = root.toLowerCase().trim();
  const fs = firstSyllable(r);
  const redup = reduplicate(r);
  const c1 = r[0];
  const isVowelInitial = VOWELS.includes(c1);

  // First vowel of root and the rest after it (used for -in- and i- progressive)
  const v1Idx = (() => {
    if (isVowelInitial) return 0;
    for (let i = 1; i < r.length; i++) {
      if (VOWELS.includes(r[i])) return i;
    }
    return -1;
  })();
  const v1 = v1Idx >= 0 ? r[v1Idx] : "";
  const restAfterV = v1Idx >= 0 ? r.slice(v1Idx + 1) : "";

  // For -an focus: find last vowel to potentially shift 'o' → 'u'
  const lastVowelIdx = (() => {
    for (let i = r.length - 1; i >= 0; i--) {
      if (VOWELS.includes(r[i])) return i;
    }
    return -1;
  })();
  // Root as it appears before a vowel-initial suffix (-in, -an).
  // Two morphophonemic rules apply, in this order:
  //   1. A final 'o' raises to 'u':            luto  → lutu-  (lutuin)
  //   2. An intervocalic final 'd' becomes 'r': bayad → bayar- (bayaran)
  // Order matters: pagod → pagud → pagur- ("pagurin"), which is the attested
  // spelling; applying d→r first would strand the 'o'.
  const rAnRaised = (lastVowelIdx >= 0 && r[lastVowelIdx] === "o")
    ? r.slice(0, lastVowelIdx) + "u" + r.slice(lastVowelIdx + 1)
    : r;
  // Only intervocalic d shifts, so the segment before it must be a vowel.
  const rAn = (rAnRaised.endsWith("d") && VOWELS.includes(rAnRaised.at(-2) || ""))
    ? rAnRaised.slice(0, -1) + "r"
    : rAnRaised;

  // Roots beginning with l, r, w or y take the prefix ni- instead of the -in- infix:
  //   luto → niluto (not "linuto"), linis → nilinis, lagay → nilagay/nilagyan
  const usesNi = !isVowelInitial && "lrwy".includes(c1);

  const result = {};

  // ============== ACTOR FOCUS — um- ==============
  {
    // Infinitive / Complete: C-um-V-rest (insert um- after first consonant)
    const infinitive = isVowelInitial ? `um${r}` : `${c1}um${r.slice(1)}`;
    const complete = infinitive;
    // Progressive: C-um-V-rest-CV (where the CV at end is the reduplicated first syllable of root)
    // Equivalently: insert um- into the REDUPLICATED form, after the first consonant
    //   redup = "tatakip" → "t" + "um" + "atakip" = "tumatakip" ✓
    const progressive = isVowelInitial
      ? `um${redup}`
      : `${c1}um${redup.slice(1)}`;
    // Contemplated: reduplicated root
    const contemplated = redup;
    result["Actor (-um-)"] = {
      focus: "Actor Focus",
      description: `Focuses on the doer of the action (${r}). The um- infix is inserted after the first consonant (or um- prefix for vowel-initial roots).`,
      forms: {
        infinitive:   { form: infinitive,    use: "To " + getEnglish(r).base + " (infinitive / future intent)",      example: `Gusto kong ${infinitive}. — I want to ${getEnglish(r).base}.` },
        complete:     { form: complete,      use: "Past completed action",                          example: `${capitalize(complete)} siya kagabi. — He/she ${getEnglish(r).past} last night.` },
        progressive:  { form: progressive,   use: "Currently " + getEnglish(r).gerund + " / habitual",              example: `${capitalize(progressive)} siya ngayon. — He/she is ${getEnglish(r).gerund} now.` },
        contemplated: { form: contemplated,  use: "Will " + getEnglish(r).base + " / planned action",                example: `${capitalize(contemplated)} siya bukas. — He/she will ${getEnglish(r).base} tomorrow.` }
      }
    };
  }

  // ============== ACTOR FOCUS — mag- ==============
  {
    const magPrefix = isVowelInitial ? "mag-" : "mag";
    const nagPrefix = isVowelInitial ? "nag-" : "nag";
    // Infinitive/Complete: mag-/nag- + (hyphen if vowel-initial) + root
    const infinitive = `${magPrefix}${r}`;
    const complete = `${nagPrefix}${r}`;
    // Progressive/Contemplated: prefix + reduplicated root
    const progressive = `${nagPrefix}${redup}`;
    const contemplated = `${magPrefix}${redup}`;
    result["Actor (mag-)"] = {
      focus: "Actor Focus (Intentional)",
      description: `Focuses on the doer with intentional / planned action. mag- prefix is added; past becomes nag-; present and future reduplicate the first syllable.`,
      forms: {
        infinitive:   { form: infinitive,    use: "To " + getEnglish(r).base + " (planned / intentional)",         example: `${capitalize(infinitive)} ka. — ${capitalize(getEnglish(r).base)}! / Let's ${getEnglish(r).base}.` },
        complete:     { form: complete,      use: "Past completed action",                          example: `${capitalize(complete)} siya kagabi. — He/she ${getEnglish(r).past} last night.` },
        progressive:  { form: progressive,   use: "Currently " + getEnglish(r).gerund,             example: `${capitalize(progressive)} siya ngayon. — He/she is ${getEnglish(r).gerund} now.` },
        contemplated: { form: contemplated,  use: "Will " + getEnglish(r).base,                         example: `${capitalize(contemplated)} siya bukas. — He/she will ${getEnglish(r).base} tomorrow.` }
      }
    };
  }

  // ============== ACTOR FOCUS — ma- (stative) ==============
  {
    // ma-/na- attach directly, with no hyphen, even before a vowel (maantok, naaantok)
    const maPrefix = "ma";
    const naPrefix = "na";
    const infinitive = `${maPrefix}${r}`;
    const complete = `${naPrefix}${r}`;
    // Progressive: na + reduplicated first syllable + root
    //   e.g. tulog → na + tu + tulog = "natutulog"
    //   e.g. antok → na + a + antok = "naaantok"  (vowel-initial reduplicates the vowel)
    const progressive = `${naPrefix}${redup}`;
    const contemplated = `${maPrefix}${redup}`;
    result["Actor (ma-)"] = {
      focus: "Actor Focus (Stative)",
      description: `Focuses on a state or accidental action involving ${r}. ma- prefix (infinitive / future); na- for past. Often indicates 'to become' or 'to get' the state of ${r}-ing.`,
      forms: {
        infinitive:   { form: infinitive,    use: "To become / to be " + getEnglish(r).state,            example: `Hindi niya gustong ${infinitive}. — He/she doesn't want to be ${getEnglish(r).state}.` },
        complete:     { form: complete,      use: "Became — past",                                       example: `${capitalize(complete)} ang bata. — The child became ${getEnglish(r).state}.` },
        progressive:  { form: progressive,   use: "Becoming / being — ongoing",                          example: `${capitalize(progressive)} ang bata. — The child is becoming ${getEnglish(r).state}.` },
        contemplated: { form: contemplated,  use: "Will become / will be",                               example: `${capitalize(contemplated)} ang bata. — The child will become ${getEnglish(r).state}.` }
      }
    };
  }

  // ============== OBJECT FOCUS — -in ==============
  {
    // infinitive: root + -in. A final 'o' shifts to 'u' (luto → lutuin), and a
    // final 'a' takes the h-glide (sara → sarahin, basa → basahin). Other vowel
    // finals attach -in directly (pili → piliin, turo → turuin).
    const inSuffix = suffixFor(r, "in", /a$/.test(rAn) ? "hin" : "in");
    const infinitive = `${rAn}${inSuffix}`;
    // complete: C-in-V-rest (insert -in- after first consonant)
    //   e.g. kain → k + in + ain = "kinain"
    //   e.g. aral → (in) + aral = "inaral"  (no consonant, so in- prefix)
    const complete = isVowelInitial
      ? `in${r}`                  // aral → inaral
      : usesNi
        ? `ni${r}`                // luto → niluto
        : `${c1}in${r.slice(1)}`; // kain → kinain
    // progressive: C-in-V-C-V-rest (where the first V-C-V is the reduplicated first syllable, after the vowel is echoed)
    //   e.g. kain: k + in + a + ka + in = "kinakain"
    //   e.g. sulat: s + in + u + su + lat = "sinusulat"
    //   e.g. aral: in + a + a + ral = "inaaral"  (vowel-initial: in + v1 + v1 + restAfterV)
    const progressive = isVowelInitial
      ? `in${redup}`
      : usesNi
        ? `ni${redup}`              // luto → niluluto
        : `${c1}in${redup.slice(1)}`;
    // contemplated: reduplicated first syllable + root + -in/-hin
    //   e.g. kain → ka + kain + in = "kakainin"
    //   e.g. sulat → su + sulat + in = "susulatin"
    //   e.g. sara → sa + sara + hin = "sasarahin"
    //   e.g. aral → a + aral + in = "aaralin"
    const contemplated = `${firstSyllable(rAn)}${rAn}${inSuffix}`;
    result["Object (-in)"] = {
      focus: "Object Focus",
      description: `Focuses on the object of the action (the thing being ${getEnglish(r).past}). The object-focus suffix is usually written -in, with -hin in forms such as bili → bilhin / bibilhin.`,
      forms: {
        infinitive:   { form: infinitive,      use: "To " + getEnglish(r).base + " (something specific)",           example: `${capitalize(infinitive)} mo. — ${capitalize(getEnglish(r).base)} it.` },
        complete:     { form: complete,        use: "Was " + getEnglish(r).past + " — past",                       example: `${capitalize(complete)} niya. — He/she ${getEnglish(r).past} it.` },
        progressive:  { form: progressive,     use: "Being " + getEnglish(r).past + " — ongoing",                  example: `${capitalize(progressive)} ngayon. — [It] is being ${getEnglish(r).past} now.` },
        contemplated: { form: contemplated,    use: "Will be " + getEnglish(r).past,                                 example: `${capitalize(contemplated)} niya bukas. — He/she will ${getEnglish(r).base} it tomorrow.` }
      }
    };
  }

  // ============== OBJECT FOCUS — i- ==============
  {
    // infinitive: i + root
    const infinitive = `i${r}`;
    // complete: i + C-in-V-rest; vowel-initial roots take ini- as a prefix
    //   e.g. sulat → i + s + in + u + lat = "isinulat"
    //   e.g. abot  → ini + abot = "iniabot"
    const complete = (isVowelInitial || usesNi)
      ? `ini${r}`                    // abot → iniabot, lagay → inilagay
      : `i${c1}in${r.slice(1)}`;     // sulat → isinulat
    // progressive: i + C + in + V + [firstSyllable] + rest
    //   e.g. sulat: i + s + in + u + su + lat = "isinusulat"
    //   e.g. abot:  ini + a + abot = "iniaabot"
    const progressive = (isVowelInitial || usesNi)
      ? `ini${redup}`
      : `i${c1}in${redup.slice(1)}`;
    // contemplated: i + reduplicated first syllable + root
    //   e.g. sulat: i + su + sulat = "isusulat"
    //   e.g. aral: i + a + aral = "iaaral"
    const contemplated = `i${fs}${r}`;
    result["Object (i-)"] = {
      focus: "Object Focus",
      description: `Focuses on the object as the item being transferred or moved. The i- prefix is added to the root.`,
      forms: {
        infinitive:   { form: infinitive,     use: "To " + getEnglish(r).base + " (something — i- focus)",            example: `${capitalize(infinitive)} mo ito. — ${capitalize(getEnglish(r).base)} it.` },
        complete:     { form: complete,       use: `${capitalize(getEnglish(r).past)} (something) — past`,          example: `${capitalize(complete)} niya. — He/she ${getEnglish(r).past} it.` },
        progressive:  { form: progressive,    use: `${capitalize(getEnglish(r).gerund)} (something) — ongoing`,     example: `${capitalize(progressive)} niya ngayon. — He/she is ${getEnglish(r).gerund} it now.` },
        contemplated: { form: contemplated,   use: `Will ${getEnglish(r).base} (something)`,                                example: `${capitalize(contemplated)} niya bukas. — He/she will ${getEnglish(r).base} it tomorrow.` }
      }
    };
  }

  // ============== LOCATIVE/BENEFACTIVE — -an ==============
  {
    // The -an/-han rule: roots ending in a/e/i/o take -han (sara → sarahan,
    // kain → kainahan is wrong — kain is n-final → kainan). Consonant-final
    // roots take -an. When a final 'o' shifts to 'u', the suffix is plain
    // -an (luto → lutuan, turo → turuan) — never -han.
    // Examples:
    //   sara (a-final) → sarahan
    //   kain (n-final) → kainan
    //   lakad (d-final) → lakaran
    //   luto (o → u) → lutuan
    const endsInVowel = /[aeiou]$/.test(r);  // Use ORIGINAL root, not rAn
    const oShifted = rAn !== r;              // luto → lutu
    const suffix = suffixFor(r, "an", endsInVowel && !oShifted ? "han" : "an");
    // infinitive: root + -an/-han
    const infinitive = `${rAn}${suffix}`;
    // complete: C-in-V-rest-an/-han
    //   e.g. kain → k + in + a + in + an? But the form is "kinainan" not "kinaininan"
    //   Actually it's just C-in-V-rest + -an: "k + in + ain + an" = "kinainan"  (wait, that has 'nan' which looks wrong)
    //   Let me check: "kainan" (eat at) - the complete form should be "kinainan"
    //   k-in-ain-an → "kinainan" (4 syllables: ki-na-i-nan)
    //   Hmm, that looks right. So formula: c1 + in + r.slice(1) + an
    const complete = isVowelInitial
      ? `in${rAn}${suffix}`
      : usesNi
        ? `ni${rAn}${suffix}`                 // luto → nilutuhan, lagay → nilagyan
        : `${c1}in${rAn.slice(1)}${suffix}`;
    // progressive: C-in-V-[firstSyllable]-rest-an
    //   e.g. kain: k + in + a + ka + in + an = "kinakainan"
    //   e.g. aral: in + a + a + ral + an = "inaaralan"
    const rAnRedup0 = firstSyllable(rAn) + rAn;
    const progressive = isVowelInitial
      ? `in${rAnRedup0}${suffix}`
      : usesNi
        ? `ni${rAnRedup0}${suffix}`
        : `${c1}in${rAnRedup0.slice(1)}${suffix}`;
    // contemplated: reduplicated first syllable + root + -an
    //   e.g. kain: ka + kain + an = "kainan"
    //   e.g. sulat: su + sulat + an = "susulatan"
    //   e.g. aral: a + aral + an = "aaralan"
    // For "luto" (last vowel 'o' becomes 'u'): "lutu" + "han" suffix
    //   contemplated: lu + lutu + han = "lulutuhan"
    const rAnFs = firstSyllable(rAn);
    const contemplated = `${rAnFs}${rAn}${suffix}`;
    result["Locative/Benefactive (-an)"] = {
      focus: "Locative / Benefactive Focus",
      description: `Focuses on the place of the action OR the beneficiary. The -an (or -han) suffix is added; the last 'o' of the root often becomes 'u' (e.g., luto → lutu-).`,
      forms: {
        infinitive:   { form: infinitive,     use: "To " + getEnglish(r).base + " at / for",                            example: `${capitalize(infinitive)} mo. — ${capitalize(getEnglish(r).base)} at / for [it].` },
        complete:     { form: complete,       use: "Did at / for — past",                                  example: `${capitalize(complete)} niya. — He/she ${getEnglish(r).past} at / for [it].` },
        progressive:  { form: progressive,    use: "Doing at / for — ongoing",                             example: `${capitalize(progressive)} niya ngayon. — He/she is ${getEnglish(r).gerund} at / for [it] now.` },
        contemplated: { form: contemplated,   use: "Will do at / for",                                    example: `${capitalize(contemplated)} niya bukas. — He/she will ${getEnglish(r).base} at / for [it] tomorrow.` }
      }
    };
  }

  // ============== ACTOR FOCUS — maka- (Potential / Ability) ==============
  {
    // maka- + root
    //   e.g. kain: maka + kain = "makakain"  (can eat / will be able to eat)
    //   naka- + root (complete)
    //   e.g. kain: naka + kain = "nakakain"  (could / was able to eat)
    //   naka- + reduplicated (progressive) — "still / currently able to..."
    //   e.g. kain: naka + ka + kain = "nakakakain"
    //   maka- + reduplicated (contemplated) — "will be able to..."
    //   e.g. kain: maka + ka + kain = "makakakain"
    // Verb class decides the prefix. Ramos & Bautista pair -um- verbs with
    // maka- (makabasa, makakain, makasulat) and mag- verbs with makapag-
    // (makapaglinis, makapagluto, makapaghugas). Roots that take both actor
    // affixes are listed with the pag optional — maka(pag)sayaw — so when um
    // is also allowed the shorter -um- reading is the safe default.
    const usesMakapag = allowedPatterns.includes("mag") && !allowedPatterns.includes("um");
    const makaStem = usesMakapag ? "makapag" : "maka";
    const nakaStem = usesMakapag ? "nakapag" : "naka";
    const infinitive = `${makaStem}${r}`;
    const complete = `${nakaStem}${r}`;
    // Both aspects have an attested doublet: the copy can fall on the root
    // (nakasusulat) or on the prefix (nakakasulat). The root-copy spelling is
    // the one the corpus tables are keyed on, so it stays canonical here and
    // the prefix-copy variant is named in the usage line instead.
    const progressive = `${nakaStem}${fs}${r}`;
    const contemplated = `${makaStem}${fs}${r}`;
    const makaAltProgressive = `${nakaStem}ka${r}`;
    const makaAltContemplated = `${makaStem}ka${r}`;
    // maka- is productively used for "can do X" with -um- type verbs (kain → makakain).
    // For other verbs, "can do X" is more commonly expressed as "kayang X-in" or
    // "magagawa ko ang X". Many maka- forms (like makatapon) are grammatically
    // constructed but rarely used in everyday speech.
    const makaCommonRoots = MAKA_COMMON_ROOTS;
    const isMakaCommon = patternIsAttested(r, "maka", makaCommonRoots);
    const makaForm = isMakaCommon ? infinitive : `(${infinitive})`;
    const makaUse = isMakaCommon
      ? "To be able to / can " + r + " (infinitive)"
      : `Not commonly used — "can ${r}" is usually expressed differently in Tagalog.`;
    const makaExample = isMakaCommon
      ? `${capitalize(infinitive)} ako. — I can / will be able to ${r}.`
      : `This form is rarely used in standard Tagalog. "I can ${r}" is more commonly "kayang mag${r}" or "magagawa kong mag${r}".`;
    const makaCompleteForm = isMakaCommon ? complete : `(${complete})`;
    const makaContemplatedForm = isMakaCommon ? contemplated : `(${contemplated})`;
    const makaProgressiveForm = isMakaCommon ? progressive : `(${progressive})`;
    result["Actor (maka-)"] = {
      focus: "Actor Focus (Potential / Ability)",
      description: isMakaCommon
        ? `Focuses on the actor's ability or potential to do ${r}. Common in phrases like "Makakain ako" (I can/will be able to eat).`
        : `The maka- form of "${r}" is grammatically possible but rarely used in everyday Tagalog. For "I can / will be able to ${r}", speakers more commonly use the -um- root (e.g., "kayang ${r}-in") or "magagawa ko mag-${r}". This form is shown for reference only.`,
      forms: {
        infinitive:   { form: makaForm,              use: makaUse,                example: makaExample },
        complete:     { form: makaCompleteForm,      use: isMakaCommon ? "Was able to / could (past)" : "Not used — see note above.", example: isMakaCommon ? `${capitalize(complete)} ako kagabi. — I was able to ${r} last night.` : "This form is rarely used in standard Tagalog." },
        progressive:  { form: makaProgressiveForm,   use: isMakaCommon ? `Being able to (ongoing) — also said ${makaAltProgressive}` : "Not used — see note above.",   example: isMakaCommon ? `${capitalize(progressive)} siya. — He/she is able to ${r}.` : "This form is rarely used in standard Tagalog." },
        contemplated: { form: makaContemplatedForm,  use: isMakaCommon ? `Will be able to (future) — also said ${makaAltContemplated}` : "Not used — see note above.",  example: isMakaCommon ? `${capitalize(contemplated)} siya bukas. — He/she will be able to ${r} tomorrow.` : "This form is rarely used in standard Tagalog." }
      }
    };
  }

  // ============== ACTOR FOCUS — mang- (with assimilation) ==============
  {
    // Nasal assimilation. A prefix ending in -ng adapts to the root's first
    // sound, and that sound is usually absorbed:
    //   before p, b          → -m   (bili  → mamili,   putol → mamutol)
    //   before d, l, r, s, t → -n   (sulat → manulat,  takot → manakot)
    //   before k             → -ng, and the k is ALWAYS dropped (kuha → manguha)
    //   otherwise            → -ng  (huli  → manghuli, isda  → mangisda)
    //
    // Reduplication depends on whether the root's consonant survived:
    //   dropped/vowel-initial — the nasal fills the empty onset, so the copied
    //     syllable is nasal + vowel:  bili → na·mi·mili, isda → na·ngi·ngisda
    //   retained — the nasal closes the prefix and the root's own onset is
    //     copied:                     huli → nang·hu·huli
    // Every form below is attested in the reference corpora; the previous
    // "mang- + root" shortcut produced mangbili / mangkuha, which are not.
    //
    // IMPORTANT: The mang- prefix is NOT used with every verb. It typically applies
    // only to specific semantic categories: going around doing X (shopping, fishing,
    // hunting, gathering). For most verbs (e.g. tapon = throw away), the mang- form
    // is unattested. We mark it as "uncommon" with a clear note.
    const mangNasal = "pb".includes(r[0]) ? "m"
      : "dlrst".includes(r[0]) ? "n"
      : "ng";
    const mangDropsConsonant = "pbdlrstk".includes(r[0]);
    // Onset through the first vowel — the unit Tagalog copies for this prefix.
    const throughFirstVowel = (word) => {
      for (let i = 0; i < word.length; i++) {
        if (VOWELS.includes(word[i])) return word.slice(0, i + 1);
      }
      return word;
    };
    let infinitive, complete, progressive, contemplated;
    if (mangDropsConsonant || isVowelInitial) {
      const stem = mangNasal + (mangDropsConsonant ? r.slice(1) : r);
      const copy = throughFirstVowel(stem);
      infinitive = `ma${stem}`;
      complete = `na${stem}`;
      progressive = `na${copy}${stem}`;
      contemplated = `ma${copy}${stem}`;
    } else {
      const copy = throughFirstVowel(r);
      infinitive = `ma${mangNasal}${r}`;
      complete = `na${mangNasal}${r}`;
      progressive = `na${mangNasal}${copy}${r}`;
      contemplated = `ma${mangNasal}${copy}${r}`;
    }
    const focusName = r.startsWith("h") ? "Actor (mangh-)" : "Actor (mang-)";
    // Verbs that commonly take mang- (acquisition / hunting / gathering semantic class)
    const mangCommonRoots = MANG_COMMON_ROOTS;
    // h-initial roots are filed under the mangh- focus, so their evidence is
    // stored under that pattern id. Looking up "mang" here would miss it and
    // disclaim attested forms like manghuli / nanghuhuli.
    const mangPatternId = r.startsWith("h") ? "mangh" : "mang";
    const isMangCommon = patternIsAttested(r, mangPatternId, mangCommonRoots);
    const mangDescription = isMangCommon
      ? `Focuses on the doer using the mang- prefix. Common for actions like shopping (bili → mamili), fishing (isda → mangisda), hunting (huli → manghuli), etc. Nasal assimilation may change the prefix spelling (m- before b, n- before d/t).`
      : `The mang- prefix is NOT commonly used with "${r}" in standard Tagalog. The mang- pattern is reserved for specific semantic categories: going around doing X (shopping, fishing, hunting, gathering). For "${r}", the actor-focus forms you'd actually use are listed in the Actor (-um-) and Actor (mag-) sections above. This form is shown for reference only — it is grammatically constructed but unattested.`;
    result[focusName] = {
      focus: "Actor Focus (mang- / mangh-)",
      description: mangDescription,
      forms: {
        infinitive:   { form: isMangCommon ? infinitive : `(${infinitive})`,     use: isMangCommon ? "To " + getEnglish(r).gerund + " (collective action, often plural)" : `Not used — mang- form of "${r}" is unattested.`,   example: isMangCommon ? `${capitalize(infinitive)} tayo. — Let's ${getEnglish(r).base} together.` : `This mang- form is not used in standard Tagalog. Use the mag- or -um- actor focus above instead.` },
        complete:     { form: isMangCommon ? complete : `(${complete})`,       use: isMangCommon ? "Went / did (past, often plural/collective action)" : `Not used — see note above.`,                  example: isMangCommon ? `${capitalize(complete)} sila. — They ${getEnglish(r).past} together.` : `This form is not used in standard Tagalog.` },
        progressive:  { form: isMangCommon ? progressive : `(${progressive})`,    use: isMangCommon ? "Currently doing / going around doing" : `Not used — see note above.`,                                example: isMangCommon ? `${capitalize(progressive)} sila. — They are ${getEnglish(r).gerund} together.` : `This form is not used in standard Tagalog.` },
        contemplated: { form: isMangCommon ? contemplated : `(${contemplated})`,   use: isMangCommon ? "Will do / will go " + getEnglish(r).gerund : `Not used — see note above.`,                            example: isMangCommon ? `${capitalize(contemplated)} sila bukas. — They will ${getEnglish(r).base} together tomorrow.` : `This form is not used in standard Tagalog.` }
      }
    };
  }

  // ============== ACTOR FOCUS — magpa- (Causative) ==============
  {
    // magpa- + root — "to make/let someone do it"
    //   e.g. tulog: magpa + tulog = "magpatulog"  (to put someone to sleep)
    //   Reduplication copies the prefix syllable "pa", not the root syllable:
    //   nagpapatulog / magpapatulog (never "nagpatutulog").
    const infinitive = `magpa${r}`;
    const complete = `nagpa${r}`;
    const progressive = `nagpapa${r}`;
    const contemplated = `magpapa${r}`;
    result["Actor (magpa-)"] = {
      focus: "Actor Focus (Causative)",
      description: `Focuses on causing / making / letting someone do ${r}. "Magpatulog" = "to put [someone] to sleep", "magpalabas" = "to let [someone] out".`,
      forms: {
        infinitive:   { form: infinitive,     use: "To make / let someone " + getEnglish(r).base,         example: `${capitalize(infinitive)} mo ang bata. — Make / let the child ${getEnglish(r).base}.` },
        complete:     { form: complete,       use: "Made / let someone do (past)",                        example: `${capitalize(complete)} niya ang bata. — He/she made the child ${getEnglish(r).base}.` },
        progressive:  { form: progressive,    use: "Making / letting someone do (ongoing)",               example: `${capitalize(progressive)} niya ang bata. — He/she is making the child ${getEnglish(r).gerund}.` },
        contemplated: { form: contemplated,   use: "Will make / let someone do",                          example: `${capitalize(contemplated)} niya ang bata. — He/she will make the child ${getEnglish(r).base}.` }
      }
    };
  }

  // ============== ACTOR FOCUS — magka- (Existential / Possessive) ==============
  {
    // magka- + root — "to have / to get / to experience"
    //   e.g. roon: magka + roon = "magkaroon"  (to be there / to have)
    //   Reduplication copies the prefix syllable "ka", not the root syllable:
    //   nagkakaroon / magkakaroon (never "nagkaroroon").
    const infinitive = `magka${r}`;
    const complete = `nagka${r}`;
    const progressive = `nagkaka${r}`;
    const contemplated = `magkaka${r}`;
    // magka- is the existential/possessive affix. It works for roots that can
    // be "had" (roon → magkaroon, isa → magkaisa) but is awkward for action
    // verbs like "tapon". Forms like "magkatapon" are grammatically constructed
    // but semantically odd — you don't typically "have" tapon.
    const magkaCommonRoots = MAGKA_COMMON_ROOTS;
    const isMagkaCommon = patternIsAttested(r, "magka", magkaCommonRoots);
    const magkaForm = isMagkaCommon ? infinitive : `(${infinitive})`;
    result["Actor (magka-)"] = {
      focus: "Actor Focus (Existential / Possessive)",
      description: isMagkaCommon
        ? `Focuses on having / getting / experiencing ${r}. "Magkaroon" = "to have / to come into being", "magkaisa" = "to unite / have unity". Common in existential statements.`
        : `The magka- form of "${r}" is grammatically constructed but semantically awkward — magka- works for roots meaning states or things that can be "had" (like "roon" → "magkaroon" = to have), not for action verbs like "${r}". Speakers would more naturally use "mag-${r}" or "nagkaroon ng ${r}" instead. This form is shown for reference only.`,
      forms: {
        infinitive:   { form: magkaForm,                       use: isMagkaCommon ? "To have / to get / to experience " + r : `Not used — "to have ${r}" is expressed differently.`, example: isMagkaCommon ? `${capitalize(infinitive)}. — To have / get ${r}.` : `This magka- form is rarely used for action verbs like "${r}".` },
        complete:     { form: isMagkaCommon ? complete : `(${complete})`,     use: isMagkaCommon ? "Got / had (past)" : "Not used — see note above.",         example: isMagkaCommon ? `${capitalize(complete)} siya ng ${r}. — He/she got / had ${r}.` : "This form is rarely used in standard Tagalog." },
        progressive:  { form: isMagkaCommon ? progressive : `(${progressive})`, use: isMagkaCommon ? "Having / getting (ongoing)" : "Not used — see note above.", example: isMagkaCommon ? `${capitalize(progressive)} siya ng ${r}. — He/she is having/getting ${r}.` : "This form is rarely used in standard Tagalog." },
        contemplated: { form: isMagkaCommon ? contemplated : `(${contemplated})`, use: isMagkaCommon ? "Will have / will get" : "Not used — see note above.",  example: isMagkaCommon ? `${capitalize(contemplated)} siya ng ${r}. — He/she will have/get ${r}.` : "This form is rarely used in standard Tagalog." }
      }
    };
  }

  // ============== BENEFACTIVE — ipag- (For someone) ==============
  {
    // ipag- + root — "to do X for someone" with i- prefix
    //   e.g. luto: ipag + luto = "ipagluto"  (to cook for someone)
    //   ipinag- + root (complete)
    //   ipinapag- + reduplicated / ipinag- + reduplicated (progressive)
    //   ipapag- + reduplicated / ipag- + reduplicated (contemplated)
    const infinitive = `ipag${r}`;
    const complete = `ipinag${r}`;
    const progressive = `ipinag${fs}${r}`;   // luto → ipinagluluto
    const contemplated = `ipag${fs}${r}`;    // luto → ipagluluto
    result["Benefactive (ipag-)"] = {
      focus: "Benefactive Focus",
      description: `Focuses on doing ${r} for someone — cooking for, writing for, buying for. Uses the ipag- prefix. "Ipinagluto niya sa bata" = "She cooked for the child".`,
      forms: {
        infinitive:   { form: infinitive,     use: "To " + getEnglish(r).base + " for someone",            example: `${capitalize(infinitive)} mo sa kanya. — ${capitalize(getEnglish(r).base)} it for him/her.` },
        complete:     { form: complete,       use: "Did for someone (past)",                              example: `${capitalize(complete)} niya sa kanya. — He/she ${getEnglish(r).past} it for him/her.` },
        progressive:  { form: progressive,    use: "Doing for someone (ongoing)",                         example: `${capitalize(progressive)} niya sa kanya. — He/she is ${getEnglish(r).gerund} it for him/her.` },
        contemplated: { form: contemplated,   use: "Will do for someone",                                 example: `${capitalize(contemplated)} niya sa kanya. — He/she will ${getEnglish(r).base} it for him/her.` }
      }
    };
  }

  // ============== INSTRUMENTAL — ipang- (Use as tool) ==============
  {
    // ipang- + root — "to use X as a means to do Y"
    //   e.g. kain: ipang + kain = "ipangkain"  (to use [something] for eating — a fork!)
    //   ipinang- + root (complete)
    //   ipinapang- + reduplicated / ipinang- + reduplicated (progressive)
    //   ipapang- + reduplicated / ipang- + reduplicated (contemplated)
    // Nasal assimilation applies here too, but on narrower terms than the
    // mang- family. The prefix-final -ng adapts to a following p or b, and the
    // root's own consonant is RETAINED, where mang- would absorb it:
    //   bili  → ipambili    (mang- gives mamili, with the b gone)
    //   punas → ipampunas
    // Before every other consonant the prefix stays -ng and nothing is dropped:
    //   linis → ipanglinis,  sugal → ipangsugal,  gamot → ipanggamot
    //   hila  → ipanghila    (the previous "ipangh" branch produced the
    //                         impossible double-h spelling "ipanghhila")
    // Ramos & Bautista record no ipan- allomorph: d/l/r/s/t roots keep ipang-.
    const ipangAssimilates = "pb".includes(c1);
    const ipangPrefix = ipangAssimilates ? "ipam" : "ipang";
    const ipinangPrefix = ipangAssimilates ? "ipinam" : "ipinang";
    const infinitive = `${ipangPrefix}${r}`;
    const complete = `${ipinangPrefix}${r}`;
    const progressive = `ipina${ipangPrefix.slice(1)}${r}`;   // kain → ipinapangkain
    const contemplated = `ipa${ipangPrefix.slice(1)}${r}`;    // kain → ipapangkain
    result["Instrumental (ipang-)"] = {
      focus: "Instrumental Focus",
      description: `Focuses on the instrument used to do ${r}. "Ipangkain" = "use [something] for eating" (e.g., a fork). The instrument becomes the subject of the sentence.`,
      forms: {
        infinitive:   { form: infinitive,     use: "To use (something) for " + getEnglish(r).gerund,         example: `${capitalize(infinitive)} mo ang tinidor. — Use the fork for ${getEnglish(r).gerund}.` },
        complete:     { form: complete,       use: "Used (something) for " + getEnglish(r).gerund + " (past)", example: `${capitalize(complete)} niya ang kutsara. — He/she used the spoon for ${getEnglish(r).gerund}.` },
        progressive:  { form: progressive,    use: "Using (something) for " + getEnglish(r).gerund + " (ongoing)", example: `${capitalize(progressive)} niya ang tinidor. — He/she is using the fork for ${getEnglish(r).gerund}.` },
        contemplated: { form: contemplated,   use: "Will use (something) for " + getEnglish(r).gerund,        example: `${capitalize(contemplated)} niya ang tinidor. — He/she will use the fork for ${getEnglish(r).gerund}.` }
      }
    };
  }

  // ============== RECIPROCAL — mag-...-an (Each other) ==============
  {
    // The reciprocal pattern: mag- + reduplicated first syllable + -an
    //   e.g. usap: mag + u + usap + an = "mag-uusapan"  (to talk to each other)
    //   e.g. halik: mag + ha + halik + an = "maghahalikan"  (to kiss each other)
    //   e.g. away: mag + a + away + an = "mag-aawayan"  (to fight each other)
    //   e.g. tulong: mag + tu + tulong + an = "magtutulungan"  (to help each other)
    // Note: -an suffix is added to the REDUPLICATED form
    // For vowel-initial: same pattern with the vowel as first syllable
    //   e.g. aral: mag + a + aral + an = "mag-aaralan"  (to learn from each other / discuss)
    // Forms (the -an suffix goes on the root; only the aspect prefixes reduplicate):
    //   infinitive:   mag- + root + -an     usap → mag-usapan
    //   complete:     nag- + root + -an     usap → nag-usapan
    //   progressive:  nag- + redup + -an    usap → nag-uusapan
    //   contemplated: mag- + redup + -an    usap → mag-uusapan
    // The final 'o' of the root shifts to 'u' before -an (tulong → magtulungan).
    const magR = isVowelInitial ? "mag-" : "mag";
    const nagR = isVowelInitial ? "nag-" : "nag";
    const rAnRedup = firstSyllable(rAn) + rAn;
    const infinitive = `${magR}${rAn}an`;
    const complete = `${nagR}${rAn}an`;
    const progressive = `${nagR}${rAnRedup}an`;
    const contemplated = `${magR}${rAnRedup}an`;
    // The reciprocal pattern is productive for action verbs where mutual action
    // is conceptually natural (usap → mag-usapan = talk to each other,
    // tulong → magtulungan = help each other). For other verbs, the
    // reciprocal form may be grammatically constructed but rarely used.
    const reciprocalCommonRoots = RECIPROCAL_COMMON_ROOTS;
    const isReciprocalCommon = patternIsAttested(r, "reciprocal", reciprocalCommonRoots);
    const reciprocalForm = isReciprocalCommon ? infinitive : `(${infinitive})`;
    result["Reciprocal (mag-...-an)"] = {
      focus: "Reciprocal / Mutual Focus",
      description: isReciprocalCommon
        ? `Focuses on the action being done to each other (mutually). "Mag-usapan" = "talk to each other", "magtulungan" = "help each other", "mag-awayan" = "fight each other". Common for relationships and group actions.`
        : `The reciprocal form of "${r}" (mutually doing it to each other) is grammatically possible but rarely used. The mag-...-an pattern works best for actions where mutual action is conceptually natural (talking, helping, fighting). For "${r}", speakers would more naturally just use the regular mag- forms in context. This form is shown for reference only.`,
      forms: {
        infinitive:   { form: reciprocalForm,                  use: isReciprocalCommon ? "To " + getEnglish(r).base + " each other (infinitive)" : `Not commonly used for "${r}".`, example: isReciprocalCommon ? `${capitalize(infinitive)} tayo. — Let's ${getEnglish(r).base} each other.` : `This reciprocal form is rarely used for action verbs like "${r}".` },
        complete:     { form: isReciprocalCommon ? complete : `(${complete})`,         use: isReciprocalCommon ? "Did to each other (past)" : "Not used — see note above.",                example: isReciprocalCommon ? `${capitalize(complete)} sila. — They ${getEnglish(r).past} each other.` : "This form is rarely used in standard Tagalog." },
        progressive:  { form: isReciprocalCommon ? progressive : `(${progressive})`,  use: isReciprocalCommon ? "Doing to each other (ongoing)" : "Not used — see note above.",        example: isReciprocalCommon ? `${capitalize(progressive)} sila. — They are ${getEnglish(r).gerund} each other.` : "This form is rarely used in standard Tagalog." },
        contemplated: { form: isReciprocalCommon ? contemplated : `(${contemplated})`, use: isReciprocalCommon ? "Will do to each other" : "Not used — see note above.",                example: isReciprocalCommon ? `${capitalize(contemplated)} sila. — They will ${getEnglish(r).base} each other.` : "This form is rarely used in standard Tagalog." }
      }
    };
  }


  // ============== ASSOCIATIVE — maki- / makipag- (join in) ==============
  {
    // maki- asks to share in an action someone else is already doing:
    //   sakay → makisakay "ride along",  usap → makipag-usap "talk with"
    // The verb class picks the stem exactly as it does in the aptative:
    // mag- verbs take makipag-, -um- verbs take plain maki-.
    // Reduplication copies the prefix syllable "ki", never the root:
    //   nakikisakay / makikisakay,  nakikipag-usap / makikipag-usap
    const usesMakipag = allowedPatterns.includes("mag") && !allowedPatterns.includes("um");
    const makiStem = usesMakipag ? (isVowelInitial ? `pag-${r}` : `pag${r}`) : r;
    const infinitive = `maki${makiStem}`;
    const complete = `naki${makiStem}`;
    const progressive = `nakiki${makiStem}`;
    const contemplated = `makiki${makiStem}`;
    result["Actor (maki-)"] = {
      focus: "Associative Focus",
      description: `Focuses on the doer joining an action already under way — asking to share in it rather than starting it. "Makisakay" = "ride along with", "makipag-usap" = "get into conversation with".`,
      forms: {
        infinitive:   { form: infinitive,   use: "To join in " + getEnglish(r).gerund,  example: `${capitalize(infinitive)} ako sa inyo. — Let me join you in ${getEnglish(r).gerund}.` },
        complete:     { form: complete,     use: "Joined in — past",                    example: `${capitalize(complete)} siya sa amin. — He/she joined us in ${getEnglish(r).gerund}.` },
        progressive:  { form: progressive,  use: "Joining in — ongoing",                example: `${capitalize(progressive)} siya sa amin. — He/she is joining us in ${getEnglish(r).gerund}.` },
        contemplated: { form: contemplated, use: "Will join in",                        example: `${capitalize(contemplated)} siya bukas. — He/she will join in ${getEnglish(r).gerund} tomorrow.` }
      }
    };
  }

  // ============== INVOLUNTARY — mapa- (did it without meaning to) ==============
  {
    // mapa- marks an action that escaped the actor rather than being chosen:
    //   tingin → napatingin "found herself looking", iyak → napaiyak "burst into tears"
    // The copied syllable is the prefix "pa", not the root: napapatingin.
    const infinitive = `mapa${r}`;
    const complete = `napa${r}`;
    const progressive = `napapa${r}`;
    const contemplated = `mapapa${r}`;
    result["Actor (mapa-)"] = {
      focus: "Actor Focus (Involuntary)",
      description: `Focuses on an action the doer did not intend — it happened to them. "Napatingin siya" = "he/she found himself looking", "napaiyak" = "burst into tears".`,
      forms: {
        infinitive:   { form: infinitive,   use: "To " + getEnglish(r).base + " involuntarily", example: `Baka ${infinitive} ka. — You might ${getEnglish(r).base} without meaning to.` },
        complete:     { form: complete,     use: "Did it involuntarily — past",                 example: `${capitalize(complete)} siya. — He/she ${getEnglish(r).past} without meaning to.` },
        progressive:  { form: progressive,  use: "Keeps doing it involuntarily",                example: `${capitalize(progressive)} siya. — He/she keeps ${getEnglish(r).gerund} without meaning to.` },
        contemplated: { form: contemplated, use: "Will do it involuntarily",                    example: `${capitalize(contemplated)} siya. — He/she will ${getEnglish(r).base} without meaning to.` }
      }
    };
  }

  // ============== REASON FOCUS — ika- (the cause) ==============
  {
    // ika- puts the CAUSE of a state in focus: "Ikinagalit niya ang sinabi ko"
    // = "what I said was what made him angry". The -in- infix lands inside the
    // prefix (ika- → ikina-), and the copied syllable is the prefix "ka".
    const infinitive = `ika${r}`;
    const complete = `ikina${r}`;
    const progressive = `ikinaka${r}`;
    const contemplated = `ikaka${r}`;
    result["Reason (ika-)"] = {
      focus: "Reason Focus",
      description: `Focuses on the reason or cause behind a state — the thing that brought it about. "Ikinagalit" = "was the cause of [someone's] anger".`,
      forms: {
        infinitive:   { form: infinitive,   use: "To be the cause of becoming " + getEnglish(r).state, example: `${capitalize(infinitive)} ang balita. — The news is what causes it.` },
        complete:     { form: complete,     use: "Was the cause — past",                               example: `${capitalize(complete)} niya ang balita. — The news was what made him/her ${getEnglish(r).state}.` },
        progressive:  { form: progressive,  use: "Is the cause — ongoing",                             example: `${capitalize(progressive)} niya ang balita. — The news is what is making him/her ${getEnglish(r).state}.` },
        contemplated: { form: contemplated, use: "Will be the cause",                                  example: `${capitalize(contemplated)} niya ang balita. — The news will be what makes him/her ${getEnglish(r).state}.` }
      }
    };
  }

  // ============== DIRECTIONAL — ka-...-an (object of a feeling) ==============
  {
    // A small closed class of psych and perception roots takes ka-...-an rather
    // than plain -an for the thing the feeling is directed at:
    //   takot → katakutan "be afraid of X",  galit → kagalitan "scold X"
    // The o → u and d → r adjustments apply before the suffix, so the shared
    // rAn stem is reused here.
    const infinitive = `ka${rAn}an`;
    const complete = `kina${rAn}an`;
    const progressive = `kinaka${rAn}an`;
    const contemplated = `kaka${rAn}an`;
    result["Directional (ka-...-an)"] = {
      focus: "Directional Focus",
      description: `Focuses on what a feeling or reaction is aimed at. "Katakutan" = "the thing feared", "kagalitan" = "the one scolded". Used with a small set of emotion and perception roots.`,
      forms: {
        infinitive:   { form: infinitive,   use: "To direct it at [someone]", example: `${capitalize(infinitive)} mo siya. — Direct it at him/her.` },
        complete:     { form: complete,     use: "Directed at — past",        example: `${capitalize(complete)} niya ako. — He/she directed it at me.` },
        progressive:  { form: progressive,  use: "Directing at — ongoing",    example: `${capitalize(progressive)} niya ako. — He/she is directing it at me.` },
        contemplated: { form: contemplated, use: "Will direct at",            example: `${capitalize(contemplated)} niya ako. — He/she will direct it at me.` }
      }
    };
  }

  // ============== ACTOR FOCUS — magpaka- (do it to the full) ==============
  {
    // magpaka- turns the causative on the actor themselves, with an intensive
    // reading: busog → magpakabusog "eat one's fill". Like magpa-, the copied
    // syllable is the prefix "pa": nagpapakabusog.
    const infinitive = `magpaka${r}`;
    const complete = `nagpaka${r}`;
    const progressive = `nagpapaka${r}`;
    const contemplated = `magpapaka${r}`;
    result["Actor (magpaka-)"] = {
      focus: "Actor Focus (Intensive Causative)",
      description: `Focuses on the doer bringing a state fully upon themselves. "Magpakabusog" = "eat one's fill", "magpakabuti" = "make oneself thoroughly good".`,
      forms: {
        infinitive:   { form: infinitive,   use: "To make oneself thoroughly " + getEnglish(r).state, example: `${capitalize(infinitive)} ka. — Make yourself thoroughly ${getEnglish(r).state}.` },
        complete:     { form: complete,     use: "Did so fully — past",                               example: `${capitalize(complete)} siya. — He/she became fully ${getEnglish(r).state}.` },
        progressive:  { form: progressive,  use: "Doing so fully — ongoing",                          example: `${capitalize(progressive)} siya. — He/she is making himself/herself fully ${getEnglish(r).state}.` },
        contemplated: { form: contemplated, use: "Will do so fully",                                  example: `${capitalize(contemplated)} siya. — He/she will become fully ${getEnglish(r).state}.` }
      }
    };
  }

  // ============== LOCATIVE — pag-...-an (place / sustained object) ==============
  {
    // pag-...-an is a distinct paradigm from plain -an, not a spelling of it:
    //   aral → pag-aralan "study X",  laro → paglaruan "play with X"
    // Ramos & Bautista show no -han variant in this set (paghandaan, not
    // paghandahan), so the suffix is a plain -an on the o->u / d->r stem.
    const pagPrefix = isVowelInitial ? "pag-" : "pag";
    const pinagPrefix = isVowelInitial ? "pinag-" : "pinag";
    const rAnPagRedup = firstSyllable(rAn) + rAn;
    const infinitive = `${pagPrefix}${rAn}an`;
    const complete = `${pinagPrefix}${rAn}an`;
    const progressive = `${pinagPrefix}${rAnPagRedup}an`;
    const contemplated = `${pagPrefix}${rAnPagRedup}an`;
    result["Locative (pag-...-an)"] = {
      focus: "Locative Focus",
      description: `Focuses on the place of the action, or on an object engaged with over time. "Pag-aralan" = "study [a subject]", "paglaruan" = "play with [a thing]".`,
      forms: {
        infinitive:   { form: infinitive,   use: "To " + getEnglish(r).base + " it / at it", example: `${capitalize(infinitive)} mo ito. — ${capitalize(getEnglish(r).base)} this.` },
        complete:     { form: complete,     use: "Did to / at — past",                       example: `${capitalize(complete)} niya ito. — He/she ${getEnglish(r).past} this.` },
        progressive:  { form: progressive,  use: "Doing to / at — ongoing",                  example: `${capitalize(progressive)} niya ito. — He/she is ${getEnglish(r).gerund} this.` },
        contemplated: { form: contemplated, use: "Will do to / at",                          example: `${capitalize(contemplated)} niya ito bukas. — He/she will ${getEnglish(r).base} this tomorrow.` }
      }
    };
  }

  // ============== RECENT PERFECTIVE — ka- + CV (just did it) ==============
  // ka- plus the reduplicated first syllable marks an action finished a moment
  // ago: kakakain "just ate", kasusulat "just wrote", kalilinis "just cleaned".
  // Ramos & Bautista list it once per entry, against the actor-focus paradigm,
  // so it is attached to the actor cards rather than given a card of its own.
  {
    const recentForm = `ka${redup}`;
    for (const key of ["Actor (-um-)", "Actor (mag-)", "Actor (ma-)"]) {
      if (!result[key]) continue;
      result[key].forms.recent = {
        form: recentForm,
        use: "Just " + getEnglish(r).past + " a moment ago",
        example: `${capitalize(recentForm)} lang siya. — He/she just ${getEnglish(r).past}.`
      };
    }
  }

  const allowed = new Set(allowedPatterns);
  return Object.fromEntries(
    Object.entries(result).filter(([focus]) => {
      const pattern = typeof patternIdForFocus === "function"
        ? patternIdForFocus(focus)
        : null;
      return pattern && allowed.has(pattern);
    })
  );
}

// Which suffix a vowel-final root takes before -in / -an. Tagalog attaches
// -in/-an after a glottal stop and -hin/-han otherwise, but the ASCII roots do
// not record glottal stops, so the choice cannot be read off the spelling:
// basa takes basahin, yet pili takes piliin and alaga takes alagaan. Corpus
// evidence decides where we have it; otherwise the caller's spelling
// heuristic stands.
function suffixFor(root, kind, fallback) {
  if (typeof CORPUS_SUFFIX === "undefined") return fallback;
  const entry = CORPUS_SUFFIX[String(root || "").toLowerCase()];
  return (entry && entry[kind]) || fallback;
}

// ----- English translation helpers (best-effort, template-based) -----
function capitalize(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

// Build a negated Tagalog clause with correct enclitic pronoun placement.
//
// Tagalog enclitic pronouns (siya, ako, ka, sila...) attach to the FIRST word
// of the predicate, not to the verb. When a negator precedes the verb, the
// pronoun goes between them:
//   correct:   Hindi siya kumain kagabi.
//   incorrect: Hindi kumain siya kagabi.
// The negated forms in this file are stored as "hindi <verb>" / "huwag
// <verb>", so the pronoun is inserted after that leading particle.
function negatedClause(negatedForm, pronoun, tail) {
  const words = String(negatedForm).trim().split(/\s+/);
  const [particle, ...verb] = words;
  const parts = [capitalize(particle)];
  if (pronoun) parts.push(pronoun);
  parts.push(...verb);
  if (tail) parts.push(tail);
  return parts.join(" ") + ".";
}

// Tagalog → English translation dictionary for common verbs.
// Used by the pattern generator to produce natural English examples.
// Falls back to a generic template if the root isn't in the dictionary.
const TAGALOG_ENGLISH = {
  // Food & eating
  kain: { base: "eat",        gerund: "eating",     past: "ate",      state: "fed" },
  inom: { base: "drink",      gerund: "drinking",   past: "drank",    state: "drunk" },
  luto: { base: "cook",       gerund: "cooking",    past: "cooked",   state: "cooked" },
  // Actions / movement
  lakad: { base: "walk",      gerund: "walking",    past: "walked",   state: "walked" },
  punta: { base: "go",        gerund: "going",      past: "went",     state: "gone" },
  balik: { base: "return",    gerund: "returning",  past: "returned", state: "returned" },
  takbo: { base: "run",       gerund: "running",    past: "ran",      state: "run" },
  upo: { base: "sit",        gerund: "sitting",    past: "sat",      state: "sat" },
  tayo: { base: "stand",     gerund: "standing",   past: "stood",    state: "stood" },
  higa: { base: "lie down",  gerund: "lying down", past: "lay down", state: "lying" },
  // Communication
  sulat: { base: "write",     gerund: "writing",    past: "wrote",    state: "written" },
  basa: { base: "read",       gerund: "reading",    past: "read",     state: "read" },
  tanong: { base: "ask",      gerund: "asking",     past: "asked",    state: "asked" },
  sagot: { base: "answer",    gerund: "answering",  past: "answered", state: "answered" },
  isip: { base: "think",     gerund: "thinking",   past: "thought",  state: "thought" },
  usap: { base: "talk",      gerund: "talking",    past: "talked",   state: "talked" },
  sayaw: { base: "dance",    gerund: "dancing",    past: "danced",   state: "danced" },
  awit: { base: "sing",     gerund: "singing",     past: "sang",     state: "sung" },
  puno: { base: "fill",     gerund: "filling",     past: "filled",   state: "filled" },
  // Daily activities
  gising: { base: "wake up",  gerund: "waking up",  past: "woke up",  state: "awake" },
  ligo: { base: "bathe",     gerund: "bathing",    past: "bathed",   state: "bathed" },
  aral: { base: "study",     gerund: "studying",   past: "studied",  state: "studied" },
  trabaho: { base: "work",   gerund: "working",    past: "worked",   state: "worked" },
  laro: { base: "play",      gerund: "playing",    past: "played",   state: "played" },
  bili: { base: "buy",       gerund: "buying",     past: "bought",   state: "bought" },
  bigay: { base: "give",      gerund: "giving",     past: "gave",     state: "given" },
  benta: { base: "sell",     gerund: "selling",    past: "sold",     state: "sold" },
  bayad: { base: "pay",      gerund: "paying",     past: "paid",     state: "paid" },
  tapon: { base: "throw away", gerund: "throwing away", past: "threw away", state: "thrown away" },
  dala: { base: "bring/carry", gerund: "bringing",  past: "brought",  state: "brought" },
  pasan: { base: "carry (on shoulder)", gerund: "carrying", past: "carried", state: "carried" },
  // Body / health
  tawa: { base: "laugh",     gerund: "laughing",   past: "laughed",  state: "laughing" },
  iyak: { base: "cry",       gerund: "crying",     past: "cried",    state: "crying" },
  sipon: { base: "have a cold", gerund: "having a cold", past: "had a cold", state: "sick" },
  sakit: { base: "hurt/be sick", gerund: "hurting/being sick", past: "hurt/got sick", state: "sick" },
  hinga: { base: "breathe",  gerund: "breathing",  past: "breathed",  state: "breathing" },
  // Travel
  biyahe: { base: "travel",  gerund: "traveling",  past: "traveled", state: "traveled" },
  uwi: { base: "go home",    gerund: "going home", past: "went home", state: "home" },
  sakay: { base: "ride",     gerund: "riding",     past: "rode",     state: "ridden" },
  lipad: { base: "fly",      gerund: "flying",     past: "flew",     state: "flown" },
  // States (stative)
  tulog: { base: "sleep",    gerund: "sleeping",   past: "slept",    state: "asleep" },
  takot: { base: "fear",     gerund: "fearing",    past: "feared",   state: "afraid" },
  galit: { base: "be angry", gerund: "being angry",past: "got angry", state: "angry" },
  gulo: { base: "become confused/tangled", gerund: "becoming confused/tangled", past: "became confused/tangled", state: "confused/tangled" },
  kinig: { base: "listen", gerund: "listening", past: "listened", state: "attentive" },
  talo: { base: "lose", gerund: "losing", past: "lost", state: "defeated" },
  panalo: { base: "win", gerund: "winning", past: "won", state: "victorious" },
  gutom: { base: "be hungry",gerund: "being hungry",past: "got hungry",state: "hungry" },
  uhaw: { base: "be thirsty",gerund: "being thirsty",past: "got thirsty",state: "thirsty" },
  tuwa: { base: "be happy", gerund: "being happy", past: "was happy", state: "happy" },
  pagod: { base: "be tired", gerund: "being tired", past: "got tired", state: "tired" },
  // Other
  buhay: { base: "live",     gerund: "living",     past: "lived",    state: "alive" },
  gamit: { base: "use",      gerund: "using",      past: "used",     state: "used" },
  nood: { base: "watch",     gerund: "watching",   past: "watched",  state: "watched" },
  tingin: { base: "look",    gerund: "looking",    past: "looked",   state: "seen" },
  hawak: { base: "hold",     gerund: "holding",    past: "held",     state: "held" },
  suot: { base: "wear",      gerund: "wearing",    past: "wore",     state: "worn" },
  intindi: { base: "understand", gerund: "understanding", past: "understood", state: "understood" },
  kilala: { base: "recognize", gerund: "recognizing", past: "recognized", state: "known" },
  kailangan: { base: "need", gerund: "needing",     past: "needed",   state: "needed" },
  kaya: { base: "manage",    gerund: "managing",   past: "managed",  state: "manageable" },
  tira: { base: "stay",      gerund: "staying",    past: "stayed",   state: "resident" },
  alaga: { base: "care for", gerund: "caring for",  past: "cared for", state: "cared for" },
  mahal: { base: "love",     gerund: "loving",     past: "loved",    state: "loved" },
  // Household / cleaning
  linis: { base: "clean",     gerund: "cleaning",    past: "cleaned",  state: "clean" },
  punas: { base: "wipe",      gerund: "wiping",     past: "wiped",    state: "wiped" },
  laba: { base: "wash (clothes)", gerund: "washing (clothes)", past: "washed (clothes)", state: "washed" },
  sara: { base: "close",     gerund: "closing",     past: "closed",   state: "closed" },
  bukas: { base: "open",      gerund: "opening",     past: "opened",   state: "open" },
  // Other common
  kanta: { base: "sing",      gerund: "singing",     past: "sang",     state: "sung" },
  takip: { base: "cover",     gerund: "covering",    past: "covered",  state: "covered" },
  // Newly added 20 verbs
  gawa: { base: "make/do",    gerund: "making/doing",past: "made/did", state: "made/done" },
  sabi: { base: "say",        gerund: "saying",      past: "said",     state: "said" },
  hanap: { base: "search/look for", gerund: "searching", past: "searched", state: "found" },
  tanggap: { base: "receive/accept", gerund: "receiving", past: "received", state: "received" },
  pasa: { base: "pass",       gerund: "passing",     past: "passed",   state: "passed" },
  tigil: { base: "stop",      gerund: "stopping",    past: "stopped",  state: "stopped" },
  hintay: { base: "wait",     gerund: "waiting",     past: "waited",   state: "waited" },
  simula: { base: "begin/start", gerund: "beginning/starting", past: "began/started", state: "begun/started" },
  tapos: { base: "finish",    gerund: "finishing",   past: "finished", state: "finished" },
  tuloy: { base: "continue/proceed", gerund: "continuing", past: "continued", state: "continued" },
  alis: { base: "leave/remove", gerund: "leaving/removing", past: "left/removed", state: "left/removed" },
  dating: { base: "arrive",   gerund: "arriving",    past: "arrived",  state: "arrived" },
  kuha: { base: "take/get",   gerund: "taking/getting", past: "took/got", state: "taken/gotten" },
  taya: { base: "bet/guess",  gerund: "betting/guessing", past: "bet/guessed", state: "bet/guessed" },
  suklay: { base: "comb",     gerund: "combing",     past: "combed",   state: "combed" },
  yuko: { base: "bow/bend down", gerund: "bowing/bending down", past: "bowed/bent down", state: "bowed/bent down" },
  lipat: { base: "move/transfer", gerund: "moving/transferring", past: "moved/transferred", state: "moved/transferred" },
  hugot: { base: "pull/draw out", gerund: "pulling/drawing out", past: "pulled/drew out", state: "pulled/drawn out" },
  tulak: { base: "push",      gerund: "pushing",     past: "pushed",   state: "pushed" },
  salpak: { base: "smash/throw", gerund: "smashing/throwing", past: "smashed/threw", state: "smashed/thrown" },
  // Other common (added in round 2)
  tawag: { base: "call",      gerund: "calling",      past: "called",    state: "called" },
  // 20 NEW VERBS (round 3)
  hatid: { base: "deliver/accompany home", gerund: "delivering/accompanying home", past: "delivered/accompanied home", state: "delivered" },
  pili: { base: "choose/select", gerund: "choosing/selecting", past: "chose/selected", state: "chosen/selected" },
  tinda: { base: "sell (retail)", gerund: "selling (retail)", past: "sold (retail)", state: "sold" },
  sukat: { base: "try on / measure", gerund: "trying on / measuring", past: "tried on / measured", state: "tried on / measured" },
  timbang: { base: "weigh",    gerund: "weighing",     past: "weighed",   state: "weighed" },
  sali: { base: "join",       gerund: "joining",      past: "joined",    state: "joined" },
  abot: { base: "reach",      gerund: "reaching",     past: "reached",   state: "reached" },
  tawid: { base: "cross",     gerund: "crossing",     past: "crossed",   state: "crossed" },
  talon: { base: "jump",      gerund: "jumping",      past: "jumped",    state: "jumped" },
  langoy: { base: "swim",      gerund: "swimming",     past: "swam",      state: "swum" },
  luhod: { base: "kneel down", gerund: "kneeling down", past: "knelt down", state: "kneeling" },
  hikab: { base: "yawn",      gerund: "yawning",      past: "yawned",     state: "yawned" },
  saya: { base: "enjoy oneself", gerund: "enjoying oneself", past: "enjoyed oneself", state: "happy" },
  tago: { base: "hide",       gerund: "hiding",       past: "hid",       state: "hidden" },
  iwas: { base: "avoid",      gerund: "avoiding",     past: "avoided",   state: "avoided" },
  ayaw: { base: "not want / refuse", gerund: "not wanting/refusing", past: "didn't want / refused", state: "refused" },
  ibig: { base: "want / love", gerund: "wanting/loving", past: "wanted/loved", state: "wanted/loved" },
  lungkot: { base: "be sad",  gerund: "being sad",    past: "became sad / was sad", state: "sad" },
  hiya: { base: "be ashamed", gerund: "being ashamed", past: "became ashamed", state: "ashamed" },
  inis: { base: "be annoyed/irritated", gerund: "being annoyed/irritated", past: "became annoyed", state: "annoyed" },
  antok: { base: "be sleepy", gerund: "being sleepy", past: "became sleepy / was sleepy", state: "sleepy" },
  usisa: { base: "investigate/pry", gerund: "investigating/prying", past: "investigated/pried", state: "investigated" },
  // More nouns used as verbs
  magkano: { base: "how much", gerund: "asking how much", past: "asked how much", state: "asked how much" },
  kape: { base: "drink coffee / have coffee", gerund: "drinking coffee", past: "drank coffee / had coffee", state: "had coffee" },
  tubig: { base: "water / pour water", gerund: "watering / pouring water", past: "watered / poured water", state: "watered" },
  dumi: { base: "dirt / get dirty", gerund: "getting dirty / making dirty", past: "got dirty / made dirty", state: "dirty" },

  // ----- Perception & cognition -----
  kita: { base: "see",         gerund: "seeing",         past: "saw",           state: "seen" },
  rinig: { base: "hear",       gerund: "hearing",        past: "heard",         state: "heard" },
  alam: { base: "know",        gerund: "knowing",        past: "knew",          state: "known" },
  gusto: { base: "like",       gerund: "liking",         past: "liked",         state: "liked" },
  alala: { base: "worry",      gerund: "worrying",       past: "worried",       state: "worried" },
  limot: { base: "forget",     gerund: "forgetting",     past: "forgot",        state: "forgotten" },
  asa: { base: "hope",         gerund: "hoping",         past: "hoped",         state: "hopeful" },
  selos: { base: "be jealous", gerund: "being jealous",  past: "was jealous",   state: "jealous" },
  sisi: { base: "blame",       gerund: "blaming",        past: "blamed",        state: "blamed" },
  bigo: { base: "fail",        gerund: "failing",        past: "failed",        state: "disappointed" },
  ingat: { base: "be careful", gerund: "being careful",  past: "was careful",   state: "careful" },

  // ----- Speech & interaction -----
  salita: { base: "speak",     gerund: "speaking",       past: "spoke",         state: "spoken" },
  kwento: { base: "tell a story", gerund: "telling a story", past: "told a story", state: "told" },
  turo: { base: "teach",       gerund: "teaching",       past: "taught",        state: "taught" },
  tulong: { base: "help",      gerund: "helping",        past: "helped",        state: "helped" },
  away: { base: "fight",       gerund: "fighting",       past: "fought",        state: "fought" },
  amin: { base: "admit",       gerund: "admitting",      past: "admitted",      state: "admitted" },
  hingi: { base: "ask for",    gerund: "asking for",     past: "asked for",     state: "asked for" },
  paalam: { base: "say goodbye", gerund: "saying goodbye", past: "said goodbye", state: "bidden farewell" },
  tawad: { base: "bargain",    gerund: "bargaining",     past: "bargained",     state: "bargained" },
  ngiti: { base: "smile",      gerund: "smiling",        past: "smiled",        state: "smiled" },
  asawa: { base: "marry",      gerund: "marrying",       past: "married",       state: "married" },

  // ----- Movement & position -----
  pasok: { base: "enter",      gerund: "entering",       past: "entered",       state: "entered" },
  labas: { base: "go out",     gerund: "going out",      past: "went out",      state: "gone out" },
  akyat: { base: "climb",      gerund: "climbing",       past: "climbed",       state: "climbed" },
  baba: { base: "go down",     gerund: "going down",     past: "went down",     state: "gone down" },
  taas: { base: "raise",       gerund: "raising",        past: "raised",        state: "raised" },
  iwan: { base: "leave behind", gerund: "leaving behind", past: "left behind",  state: "left behind" },
  sundo: { base: "fetch",      gerund: "fetching",       past: "fetched",       state: "fetched" },
  huli: { base: "catch",       gerund: "catching",       past: "caught",        state: "caught" },
  lagay: { base: "put",        gerund: "putting",        past: "put",           state: "put" },
  jog: { base: "jog",          gerund: "jogging",        past: "jogged",        state: "jogged" },

  // ----- Household & daily routine -----
  hugas: { base: "wash",       gerund: "washing",        past: "washed",        state: "washed" },
  hilamos: { base: "wash one's face", gerund: "washing one's face", past: "washed one's face", state: "washed" },
  sipilyo: { base: "brush one's teeth", gerund: "brushing one's teeth", past: "brushed one's teeth", state: "brushed" },
  ahit: { base: "shave",       gerund: "shaving",        past: "shaved",        state: "shaved" },
  ayos: { base: "fix",         gerund: "fixing",         past: "fixed",         state: "fixed" },
  plantsa: { base: "iron",     gerund: "ironing",        past: "ironed",        state: "ironed" },
  tiklop: { base: "fold",      gerund: "folding",        past: "folded",        state: "folded" },
  ihi: { base: "urinate",      gerund: "urinating",      past: "urinated",      state: "urinated" },
  ubo: { base: "cough",        gerund: "coughing",       past: "coughed",       state: "coughed" },
  hilik: { base: "snore",      gerund: "snoring",        past: "snored",        state: "snored" },
  lagnat: { base: "have a fever", gerund: "having a fever", past: "had a fever", state: "feverish" },

  // ----- Food preparation -----
  prito: { base: "fry",        gerund: "frying",         past: "fried",         state: "fried" },
  gisa: { base: "sauté",       gerund: "sautéing",       past: "sautéed",       state: "sautéed" },
  putol: { base: "cut",         gerund: "cutting",        past: "cut",           state: "cut" },
  boil: { base: "boil",        gerund: "boiling",        past: "boiled",        state: "boiled" },
  grill: { base: "grill",      gerund: "grilling",       past: "grilled",       state: "grilled" },
  bake: { base: "bake",        gerund: "baking",         past: "baked",         state: "baked" },
  buhos: { base: "pour",       gerund: "pouring",        past: "poured",        state: "poured" },
  almusal: { base: "eat breakfast", gerund: "eating breakfast", past: "ate breakfast", state: "had breakfast" },
  hapunan: { base: "eat dinner", gerund: "eating dinner", past: "ate dinner",   state: "had dinner" },

  // ----- Work, money & study -----
  ipon: { base: "save up",     gerund: "saving up",      past: "saved up",      state: "saved up" },
  utang: { base: "owe",        gerund: "owing",          past: "owed",          state: "indebted" },
  hiram: { base: "borrow",     gerund: "borrowing",      past: "borrowed",      state: "borrowed" },
  upa: { base: "rent",         gerund: "renting",        past: "rented",        state: "rented" },
  negosyo: { base: "do business", gerund: "doing business", past: "did business", state: "in business" },
  bilang: { base: "count",     gerund: "counting",       past: "counted",       state: "counted" },
  umpisa: { base: "start",     gerund: "starting",       past: "started",       state: "started" },
  resign: { base: "resign",    gerund: "resigning",      past: "resigned",      state: "resigned" },
  withdraw: { base: "withdraw", gerund: "withdrawing",   past: "withdrew",      state: "withdrawn" },
  maneho: { base: "drive",     gerund: "driving",        past: "drove",         state: "driven" },
  bisikleta: { base: "bike",   gerund: "biking",         past: "biked",         state: "biked" },

  // ----- Farming -----
  tanim: { base: "plant",      gerund: "planting",       past: "planted",       state: "planted" },
  ani: { base: "harvest",      gerund: "harvesting",     past: "harvested",     state: "harvested" },

  // ----- Communication & tech -----
  text: { base: "text",        gerund: "texting",        past: "texted",        state: "texted" },
  email: { base: "email",      gerund: "emailing",       past: "emailed",       state: "emailed" },
  chat: { base: "chat",        gerund: "chatting",       past: "chatted",       state: "chatted" },
  type: { base: "type",        gerund: "typing",         past: "typed",         state: "typed" },
  share: { base: "share",      gerund: "sharing",        past: "shared",        state: "shared" },

  // ----- Leisure & religion -----
  basketball: { base: "play basketball", gerund: "playing basketball", past: "played basketball", state: "played" },
  badminton: { base: "play badminton", gerund: "playing badminton", past: "played badminton", state: "played" },
  volleyball: { base: "play volleyball", gerund: "playing volleyball", past: "played volleyball", state: "played" },
  karaoke: { base: "sing karaoke", gerund: "singing karaoke", past: "sang karaoke", state: "sung" },
  bakasyon: { base: "go on vacation", gerund: "going on vacation", past: "went on vacation", state: "on vacation" },
  dasal: { base: "pray",       gerund: "praying",        past: "prayed",        state: "prayed" },
  simba: { base: "go to church", gerund: "going to church", past: "went to church", state: "gone to church" },

  // ----- Weather & change-of-state adjectival roots -----
  ulan: { base: "rain",        gerund: "raining",        past: "rained",        state: "rainy" },
  lamig: { base: "get cold",   gerund: "getting cold",   past: "got cold",      state: "cold" },
  init: { base: "get hot",     gerund: "getting hot",    past: "got hot",       state: "hot" },
  bigat: { base: "get heavier", gerund: "getting heavier", past: "got heavier", state: "heavy" },
  gaan: { base: "get lighter", gerund: "getting lighter", past: "got lighter",  state: "light" },
  haba: { base: "get longer",  gerund: "getting longer", past: "got longer",    state: "long" },
  ikli: { base: "get shorter", gerund: "getting shorter", past: "got shorter",  state: "short" },
  bilis: { base: "speed up",   gerund: "speeding up",    past: "sped up",       state: "fast" },
  bagal: { base: "slow down",  gerund: "slowing down",   past: "slowed down",   state: "slow" },
  mura: { base: "get cheaper", gerund: "getting cheaper", past: "got cheaper",  state: "cheap" },
  laki: { base: "grow bigger", gerund: "growing bigger", past: "grew bigger",   state: "big" },
  liit: { base: "get smaller", gerund: "getting smaller", past: "got smaller",  state: "small" },
  ganda: { base: "become more beautiful", gerund: "becoming more beautiful", past: "became more beautiful", state: "beautiful" },
  pangit: { base: "become uglier", gerund: "becoming uglier", past: "became uglier", state: "ugly" },
  bago: { base: "become new",  gerund: "becoming new",   past: "became new",    state: "new" },
  luma: { base: "become old",  gerund: "becoming old",   past: "became old",    state: "old" },

  // ----- Roots previously mis-resolved by substring matching -----
  // walis ("sweep") must not fall through to alis ("leave"), and the pa-
  // roots below are lexicalised: pahinga is "rest", not "breathe" (hinga),
  // and padala is "send", not "carry" (dala).
  walis: { base: "sweep",      gerund: "sweeping",       past: "swept",         state: "swept" },
  pahinga: { base: "rest",     gerund: "resting",        past: "rested",        state: "rested" },
  padala: { base: "send",      gerund: "sending",        past: "sent",          state: "sent" },

  // ----- Existential / copular -----
  maging: { base: "become",    gerund: "becoming",       past: "became",        state: "become" },
  // roon is the bound root behind magkaroon ("to have / to come to have").
  roon: { base: "have",        gerund: "having",         past: "had",           state: "had" },
  // umaga / gabi are time-of-day roots used verbally ("to be overtaken by
  // morning / nightfall"), most often in the mag- and ma- families.
  umaga: { base: "stay until morning", gerund: "staying until morning", past: "stayed until morning", state: "overtaken by morning" },
  gabi: { base: "stay until night", gerund: "staying until night", past: "stayed until night", state: "overtaken by night" },

  // ----- Curated everyday expansion -----
  sama: { base: "join or accompany", gerund: "joining or accompanying", past: "joined or accompanied", state: "with others" },
  handa: { base: "prepare", gerund: "preparing", past: "prepared", state: "prepared" },
  subok: { base: "try", gerund: "trying", past: "tried", state: "tried" },
  paliwanag: { base: "explain", gerund: "explaining", past: "explained", state: "explained" },
  tanggi: { base: "refuse", gerund: "refusing", past: "refused", state: "refused" },
  "sang-ayon": { base: "agree", gerund: "agreeing", past: "agreed", state: "in agreement" },
  desisyon: { base: "decide", gerund: "deciding", past: "decided", state: "decided" },
  karga: { base: "load or carry", gerund: "loading or carrying", past: "loaded or carried", state: "loaded" },
  ikot: { base: "turn or go around", gerund: "turning or going around", past: "turned or went around", state: "turned" },
  kilos: { base: "move or act", gerund: "moving or acting", past: "moved or acted", state: "active" },
  bantay: { base: "watch or guard", gerund: "watching or guarding", past: "watched or guarded", state: "guarded" },
  gamot: { base: "seek medical treatment", gerund: "seeking medical treatment", past: "sought medical treatment", state: "treated" },
  kumpuni: { base: "repair", gerund: "repairing", past: "repaired", state: "repaired" },
  pindot: { base: "press", gerund: "pressing", past: "pressed", state: "pressed" },
  sira: { base: "break or become broken", gerund: "breaking or becoming broken", past: "broke or became broken", state: "broken" },
  linaw: { base: "clarify", gerund: "clarifying", past: "clarified", state: "clear" },
  plano: { base: "plan", gerund: "planning", past: "planned", state: "planned" },
  message: { base: "send a message", gerund: "sending a message", past: "sent a message", state: "messaged" },
  order: { base: "order", gerund: "ordering", past: "ordered", state: "ordered" },
  download: { base: "download", gerund: "downloading", past: "downloaded", state: "downloaded" },
};

// Get the English base/gerund/past for a Tagalog root. Detailed legacy
// entries use the hand-written table; extended catalog entries supply a
// normalized meaning from which we derive a conservative display gloss.
function getEnglish(root) {
  if (TAGALOG_ENGLISH[root]) return TAGALOG_ENGLISH[root];
  const entry = typeof VERB_LEXICON === "undefined" ? null : VERB_LEXICON[root];
  const meaning = (entry && entry.meanings || []).find(value => /^to\s+/i.test(value || ""));
  if (meaning) {
    const base = meaning.replace(/^to\s+/i, "").trim();
    const words = base.split(/\s+/);
    const verb = words.shift();
    const tail = words.length ? ` ${words.join(" ")}` : "";
    const gerundVerb = /ie$/i.test(verb)
      ? `${verb.slice(0, -2)}ying`
      : /e$/i.test(verb) && !/(ee|ye)$/i.test(verb)
        ? `${verb.slice(0, -1)}ing`
        : `${verb}ing`;
    const pastVerb = /e$/i.test(verb) ? `${verb}d` : `${verb}ed`;
    const gloss = { base, gerund: `${gerundVerb}${tail}`, past: `${pastVerb}${tail}`, state: base };
    TAGALOG_ENGLISH[root] = gloss;
    return gloss;
  }
  // No substring fallback. Matching on endsWith/startsWith silently produced
  // wrong glosses for unrelated roots that merely share letters — walis
  // ("sweep") resolved to alis ("leave"), pahinga ("rest") to hinga
  // ("breathe"), padala ("send") to dala ("carry"). A generic placeholder is
  // wrong in an obvious way; a confident mistranslation is not.
  //
  // Fallback: return generic placeholders so the example doesn't say "-ing"
  // a Tagalog root (which produces nonsense like "takiping" or "sayawing").
  return {
    base: "do it",
    gerund: "doing it",
    past: "did it",
    state: "done"
  };
}

// Derive an imperative example sentence from an infinitive form.
// Different focuses use different sentence-final particles:
//   Actor focuses:         "...ka!"  (you [singular])  /  "...kayo!" (you [plural])
//   Object/Locative/etc.:  "...mo!"  (it / do it to it)
//   "Reciprocal":          "...tayo!"  (us / let's)
function deriveImperativeExample(infinitive, focus, root) {
  const form = infinitive.form;
  const isReciprocal = focus.startsWith("Reciprocal");
  const isObjectLike = focus.startsWith("Object") || focus.startsWith("Locative") ||
                        focus.startsWith("Benefactive") || focus.startsWith("Instrumental");
  const isMa = focus === "Actor (ma-)";
  const isMagpa = focus === "Actor (magpa-)";
  const isIpang = focus === "Instrumental (ipang-)";
  const isIpag = focus === "Benefactive (ipag-)";
  const isI = focus === "Object (i-)";
  const isAnLoc = focus.startsWith("Locative");
  const isUncommon = form.startsWith("(") && form.endsWith(")");  // e.g. "(mangtapon)" — unattested form
  // For unattested forms, don't try to derive a real imperative
  if (isUncommon) {
    return `${form} — Not used in standard Tagalog.`;
  }
  // Choose the right particle
  let particle = "mo";
  if (isReciprocal) particle = "tayo";
  else if (!isObjectLike) particle = "ka";
  const capitalized = form.charAt(0).toUpperCase() + form.slice(1);

  // Helper: try to extract a clean English verb from the use text
  function extractEngVerb(useText) {
    if (!useText) return null;
    // 1. "To <verb-phrase>..." (handles "to be thrown away", "to cook", "to throw away")
    let m = useText.match(/^To\s+((?:be\s+)?\w+(?:\s+\w+)?)/);
    if (m) return m[1];
    // 2. "Can <verb>..." or "Will be able to <verb>..." (maka- focus)
    m = useText.match(/^(?:Can|Will be able to)\s+((?:\w+\s+)?\w+)/i);
    if (m) return m[1];
    // 3. "Used to <verb>..." or "Doing <verb>..." or "Make / let someone <verb>"
    m = useText.match(/^(?:Used to|Doing|Make \/ let someone)\s+((?:\w+\s+)?\w+)/i);
    if (m) return m[1];
    return null;
  }

  // For rare / awkward focuses, return a focus-appropriate English imperative.
  if (isMa) {
    // Stative: "Matulog ka!" = "Go to sleep!" / "Get some sleep!"
    const stateUse = infinitive.use || "";
    // Match "To be X" or "To become / to be X" — extract the state adjective
    const stateMatch = stateUse.match(/To (?:become \/ )?be (\w+)/i) ||
                       stateUse.match(/To become \/ to be (\w+)/);
    if (stateMatch) {
      const state = stateMatch[1];
      const cap = state.charAt(0).toUpperCase() + state.slice(1);
      return `${capitalized} ka! — ${cap}! (stative)`;
    }
    // Also match "To sleep" or "To get wet" type patterns
    const verbMatch = stateUse.match(/^To (\w+)/);
    if (verbMatch) {
      const verb = verbMatch[1];
      const cap = verb.charAt(0).toUpperCase() + verb.slice(1);
      return `${capitalized} ka! — ${cap}! (stative)`;
    }
    return `${capitalized} ka! — Get / become (stative).`;
  }
  if (isMagpa) {
    // Causative: "Magpatulog ka!" = "Put [someone] to sleep!"
    const verb = extractEngVerb(infinitive.use) || getEnglish(root).base;
    return `${capitalized} ka! — Make / let someone ${verb}.`;
  }
  if (isIpang) {
    // Instrumental: "Ipangtakip mo!" = "Use [it] as a cover!"
    const verb = getEnglish(root).gerund || getEnglish(root).base;
    return `${capitalized} mo! — Use [it] for ${verb}.`;
  }
  if (isIpag) {
    // Benefactive: "Ipagluto mo sa kanya." = "Cook for him/her."
    // The pattern means "do X for [someone]". The English can use the verb directly.
    // Special case: some verbs have a different meaning in ipag- focus.
    //   ipagkain = feed (not "eat for"). Similar for inom/tulog/upo/higa.
    const specialBenefactive = {
      "kain":  "Feed [him/her]",
      "inom":  "Give [him/her] a drink",
      "tulog": "Put [him/her] to sleep",
      "upo":   "Have [him/her] sit down",
      "higa":   "Have [him/her] lie down",
    };
    if (specialBenefactive[root]) {
      return `${capitalized} mo sa kanya! — ${specialBenefactive[root]}!`;
    }
    const verb = getEnglish(root).base;
    const cap = verb.charAt(0).toUpperCase() + verb.slice(1);
    return `${capitalized} mo sa kanya! — ${cap} it for [him/her]!`;
  }
  if (isI) {
    // Object (i-): focus on the transferred/moved item.
    // Special case: some verbs have a different meaning in i- focus.
    //   ikain = feed (not "eat it"). Similar for inom/tulog.
    const specialI = {
      "kain":  "Feed [him/her] it",
      "inom":  "Give [him/her] a drink",
      "tulog": "Put [him/her] to sleep",
      "upo":   "Seat [him/her]",
      "higa":   "Lay [him/her] down",
    };
    if (specialI[root]) {
      return `${capitalized} mo! — ${specialI[root]}!`;
    }
    const verb = getEnglish(root).base;
    return `${capitalized} mo! — ${capitalize(verb)} it [somewhere]!`;
  }
  if (isAnLoc) {
    // Locative: focus on the place. "Kainan mo!" = "Eat at [it]!"
    const verb = getEnglish(root).base;
    const cap = verb.charAt(0).toUpperCase() + verb.slice(1);
    return `${capitalized} mo! — ${cap} at [the place]!`;
  }
  // Extract a short English translation from the use text or example.
  const origUse = infinitive.use || "";
  const origExample = infinitive.example || "";
  let engShort = null;
  if (origUse) {
    // For negation imperative, the use text says "Negative command: don't <verb>"
    const negMatch = origUse.match(/Negative command: don't\s+(\w+)/);
    if (negMatch) {
      engShort = "Don't " + negMatch[1] + "!";
    } else if (origUse.startsWith("Not used")) {
      return `${capitalized}${particle ? " " + particle : ""}! — Not used in standard Tagalog.`;
    } else {
      const verb = extractEngVerb(origUse);
      if (verb) engShort = verb.charAt(0).toUpperCase() + verb.slice(1) + "!";
    }
  }
  // If we couldn't derive from use text, try the example text
  if (!engShort && origExample) {
    const exParts = origExample.split("—");
    if (exParts.length >= 2) {
      const english = exParts[exParts.length - 1].trim();
      // Find the verb in the English translation, skipping articles and pronouns
      const SKIP_WORDS = new Set(["I", "You", "We", "They", "He", "She", "It", "The", "A", "An", "My", "Your", "Our", "Their", "His", "Her", "This", "That", "There", "Here"]);
      const words = english.split(/\s+/);
      for (const word of words) {
        // Strip punctuation
        const clean = word.replace(/[^a-zA-Z]/g, "");
        if (clean && !SKIP_WORDS.has(clean) && clean.length > 1) {
          engShort = clean + "!";
          break;
        }
      }
    }
  }
  if (!engShort) {
    engShort = "Do it!";
  }
  return `${capitalized}${particle ? " " + particle : ""}! — ${engShort}`;
}

function buildNegationCard(root, conjugations) {
  const actorFocus = [
    "Actor (-um-)", "Actor (um-)", "Actor (mag-)", "Actor (ma-)",
    "Actor (maka-)", "Actor (magka-)", "Actor (magpa-)"
  ].find(focus => conjugations[focus]) || Object.keys(conjugations).find(
    focus => focus.startsWith("Actor")
  );
  if (!actorFocus) return null;

  const forms = conjugations[actorFocus].forms || {};
  if (!forms.infinitive || !forms.complete || !forms.progressive || !forms.contemplated) {
    return null;
  }
  const english = getEnglish(root);
  return {
    focus: "Negative / Negation",
    description: `Negation keeps the same approved ${actorFocus} form: put hindi before a completed, ongoing, or future form. For a negative command, use huwag before the infinitive form.`,
    forms: {
      infinitive: { form: `huwag ${forms.infinitive.form}`, use: `Negative command: do not ${english.base}`, example: `${negatedClause(`huwag ${forms.infinitive.form}`, "kang")} — Don't ${english.base}.` },
      complete: { form: `hindi ${forms.complete.form}`, use: `Did not ${english.base}`, example: `${negatedClause(`hindi ${forms.complete.form}`, "siya")} — He/she did not ${english.base}.` },
      progressive: { form: `hindi ${forms.progressive.form}`, use: `Is not ${english.gerund}`, example: `${negatedClause(`hindi ${forms.progressive.form}`, "siya")} — He/she is not ${english.gerund}.` },
      contemplated: { form: `hindi ${forms.contemplated.form}`, use: `Will not ${english.base}`, example: `${negatedClause(`hindi ${forms.contemplated.form}`, "siya")} — He/she will not ${english.base}.` },
      imperative: { form: `huwag kang ${forms.infinitive.form}`, use: `Negative command: do not ${english.base}`, example: `Huwag kang ${forms.infinitive.form}. — Don't ${english.base}.` }
    }
  };
}

// Add regularly generated forms to the reverse index. Curated and legacy
// aliases win collisions; generated forms fill only previously unknown keys.
const ACTIVE_CONJUGATED_LOOKUP = (() => {
  const lookup = {
    ...(typeof LEXICON_CONJUGATED_LOOKUP !== "undefined"
      ? LEXICON_CONJUGATED_LOOKUP
      : {})
  };
  const lexicon = typeof VERB_LEXICON !== "undefined" ? VERB_LEXICON : {};

  for (const [root, entry] of Object.entries(lexicon)) {
    // A curated override replaces the generated card for the same pattern, so
    // the generated (often divergent) forms for that pattern must not enter
    // the reverse index — only forms the app actually displays.
    const overriddenPatterns = new Set(
      Object.keys(entry.overrides)
        .map(f => (typeof patternIdForFocus === "function" ? patternIdForFocus(f) : null))
        .filter(Boolean)
    );
    const generated = generateConjugations(root, entry.allowedPatterns);
    for (const [focus, card] of Object.entries(generated)) {
      const affix = patternIdForFocus(focus);
      if (affix && overriddenPatterns.has(affix)) continue;
      for (const [aspect, data] of Object.entries(card.forms || {})) {
        const form = typeof cleanLookupForm === "function"
          ? cleanLookupForm(data.form)
          : String(data.form || "").toLowerCase().trim();
        if (form && !lookup[form]) lookup[form] = { root, affix, aspect };
      }
    }
  }

  return Object.freeze(lookup);
})();

// ----- Input detection -----
// Tries to figure out: is input a base form or a conjugated form?
// Returns { root, affix, aspect, isConjugated, original }
function detectInput(raw) {
  const input = raw.toLowerCase().trim().replace(/[^a-z\-ñ\s]/g, "");
  if (!input) return null;

  const lookup = typeof ACTIVE_CONJUGATED_LOOKUP !== "undefined"
    ? ACTIVE_CONJUGATED_LOOKUP
    : (typeof CONJUGATED_LOOKUP !== "undefined" ? CONJUGATED_LOOKUP : {});
  const lexicon = typeof VERB_LEXICON !== "undefined" ? VERB_LEXICON : {};

  // 1. Direct lookup in the automatically derived conjugated-form index.
  if (lookup[input]) {
    const m = lookup[input];
    return { ...m, isConjugated: true, original: input, baseForm: m.root };
  }

  const rootAliases = typeof ROOT_SEARCH_ALIASES !== "undefined"
    ? ROOT_SEARCH_ALIASES
    : {};
  if (rootAliases[input]) {
    const root = rootAliases[input];
    return { root, isConjugated: false, original: input, baseForm: root };
  }

  // 2. Exact root match in the normalized lexicon.
  if (lexicon[input]) {
    return { root: input, isConjugated: false, original: input, baseForm: input };
  }

  // 3. Heuristic: try to strip known affixes to find the root
  // Order matters — try longer patterns first
  const affixPatterns = [
    // i-C-in- (i- + first consonant + -in-)
    { rx: /^i([bcdfghjklmnpqrstvwxyz])in/, affix: "i+in",  restFrom: 4 },
    // ipinang- / ipinapang- / ipapang- (instrumental)
    { rx: /^ipinang([bcdfghjklmnpqrstvwxyz]?[aeiou][a-z]*)$/, affix: "ipinang-", captureStart: 6 },
    { rx: /^ipinapang/, affix: "ipinapang-", restFrom: 9 },
    { rx: /^ipapang/, affix: "ipapang-", restFrom: 7 },
    { rx: /^ipinag/, affix: "ipinag-", restFrom: 6 },
    { rx: /^ipinapag/, affix: "ipinapag-", restFrom: 8 },
    { rx: /^ipapag/, affix: "ipapag-", restFrom: 6 },
    { rx: /^ipina/, affix: "ipina-", restFrom: 5 },
    { rx: /^ipinapa/, affix: "ipinapa-", restFrom: 8 },
    { rx: /^ipapa/, affix: "ipapa-", restFrom: 5 },
    // mag- / nag- / mang- / nang- / naka- / maka-
    { rx: /^mag[a-]/, affix: "mag-", restFrom: 3 },
    { rx: /^nag[a-]/, affix: "nag-", restFrom: 3 },
    { rx: /^mangh/, affix: "mangh-", restFrom: 5 },
    { rx: /^mang/, affix: "mang-", restFrom: 4 },
    { rx: /^nangh/, affix: "nangh-", restFrom: 5 },
    { rx: /^nang/, affix: "nang-", restFrom: 4 },
    { rx: /^naka/, affix: "naka-", restFrom: 4 },
    { rx: /^maka/, affix: "maka-", restFrom: 4 },
    { rx: /^magka/, affix: "magka-", restFrom: 5 },
    { rx: /^nagka/, affix: "nagka-", restFrom: 5 },
    { rx: /^magpa/, affix: "magpa-", restFrom: 5 },
    { rx: /^nagpa/, affix: "nagpa-", restFrom: 5 },
    // ma- / na- (stative)
    { rx: /^ma[a-]/, affix: "ma-", restFrom: 2 },
    { rx: /^na[a-]/, affix: "na-", restFrom: 2 },
    // ipang- / ipinang-
    { rx: /^ipangh/, affix: "ipangh-", restFrom: 6 },
    { rx: /^ipang/, affix: "ipang-", restFrom: 5 },
    // ipag- / ipinag- already above
    { rx: /^ipag/, affix: "ipag-", restFrom: 4 },
    // pa- (causative)
    { rx: /^pa[a-]/, affix: "pa-", restFrom: 2 },
    // C-um- (um- infix after consonant)
    { rx: /^([bcdfghjklmnpqrstvwxyz])um/, affix: "um-", restFrom: 0, umInfix: true },
    // hu- (variant for h-initial roots, e.g. humintay)
    { rx: /^hu([bcdfghjklmnpqrstvwxyz])([aeiou])/, affix: "um-", restFrom: 1, umInfix: true, prefixH: true },
    // ma-/na- plain
    { rx: /^ma/, affix: "ma-", restFrom: 2 },
    { rx: /^na/, affix: "na-", restFrom: 2 },
    // ka- (recent past with ka-)
    { rx: /^ka/, affix: "ka-", restFrom: 2 },
    // magpa-/nagpa-
    { rx: /^magpa/, affix: "magpa-", restFrom: 5 },
    // i- prefix
    { rx: /^i([bcdfghjklmnpqrstvwxyz])([aeiou])/, affix: "i-", restFrom: 1 },
    { rx: /^i([aeiou])/, affix: "i-", restFrom: 1 },
  ];

  // Suffix-based detection (do these before prefix because they tend to be distinctive)
  const suffixPatterns = [
    { rx: /han$/, affix: "an" },
    { rx: /in$/,  affix: "in" }
  ];

  // Try suffix detection
  for (const p of suffixPatterns) {
    if (p.rx.test(input)) {
      let root = input.replace(p.rx, "");
      if (p.affix === "an") {
        // keep root, will use -an
      } else {
        // -in suffix
      }
      // Verify this root is in the database
      if (lexicon[root]) {
        return { root, isConjugated: true, original: input, affix: p.affix, baseForm: root };
      }
    }
  }

  // Try prefix detection
  for (const p of affixPatterns) {
    const m = input.match(p.rx);
    if (m) {
      let root;
      if (p.umInfix) {
        // C-um-V: strip "Cum" and re-insert C at front
        // e.g. tumakbo → m[1]=t, after "tum" → "akbo", root = "t"+"akbo" = "takbo"
        const c = p.prefixH ? input[1] : input[0];
        const afterUm = p.prefixH ? input.slice(2) : input.slice(3);
        // C + (V from afterUm) + (rest of afterUm)
        const v = afterUm[0];
        const rest = afterUm.slice(1);
        root = c + v + rest;
      } else if (p.captureStart) {
        root = m[1] || input.slice(p.restFrom);
      } else {
        root = input.slice(p.restFrom);
      }
      if (lexicon[root]) {
        return { root, isConjugated: true, original: input, affix: p.affix, baseForm: root };
      }
    }
  }

  // 4. Treat an unmatched input as a possible base form. Unknown roots are
  // not conjugated until their accepted patterns are added to the lexicon.
  return { root: input, isConjugated: false, original: input, baseForm: input };
}

// ----- Main resolver: returns the full structure to render -----
function resolveVerb(input) {
  const detected = detectInput(input);
  if (!detected) return null;

  const root = detected.baseForm;

  const lexiconEntry = (typeof VERB_LEXICON !== "undefined") ? VERB_LEXICON[root] : null;

  let conjugations;
  let isVerified;
  let meaning;
  let notes;

  if (lexiconEntry) {
    // Generate only approved patterns, then let curated cards override the
    // corresponding generated cards.
    conjugations = generateConjugations(root, lexiconEntry.allowedPatterns);
    const overridePatterns = new Set(
      Object.keys(lexiconEntry.overrides).map(patternIdForFocus).filter(Boolean)
    );
    for (const generatedFocus of Object.keys(conjugations)) {
      if (overridePatterns.has(patternIdForFocus(generatedFocus))) {
        delete conjugations[generatedFocus];
      }
    }
    Object.assign(conjugations, lexiconEntry.overrides);
    for (const example of lexiconEntry.examples) {
      const examplePattern = example.pattern || patternIdForFocus(example.focus);
      const targetFocus = conjugations[example.focus]
        ? example.focus
        : Object.keys(conjugations).find(
          focus => examplePattern && patternIdForFocus(focus) === examplePattern
        );
      const targetForm = targetFocus && conjugations[targetFocus].forms[example.aspect];
      if (!targetForm || !example.text || targetForm.example === example.text) continue;

      conjugations[targetFocus] = {
        ...conjugations[targetFocus],
        forms: {
          ...conjugations[targetFocus].forms,
          [example.aspect]: { ...targetForm, example: example.text }
        }
      };
    }
    const negation = buildNegationCard(root, conjugations);
    if (negation && !conjugations["Negation (hindi-)"]) {
      conjugations["Negation (hindi-)"] = negation;
    }
    meaning = lexiconEntry.meanings.join(" / ");
    notes = lexiconEntry.notes;
    isVerified = ["curated", "verified", "native-reviewed"].includes(lexiconEntry.status);
  } else {
    conjugations = {};
    meaning = "(root not in the local lexicon)";
    notes = "No forms were generated because this root has not yet been assigned verified affix patterns.";
    isVerified = false;
  }

  return {
    input: detected.original,
    root,
    isConjugated: detected.isConjugated,
    detectedAffix: detected.affix || null,
    detectedAspect: detected.aspect || null,
    isVerified,
    meaning,
    notes,
    status: lexiconEntry ? lexiconEntry.status : "unknown",
    sources: lexiconEntry ? lexiconEntry.sources : [],
    conjugations
  };
}

// ============================================================
// UI Rendering
// ============================================================

const ASPECT_META = {
  infinitive:   { label: "Infinitive",          tag: "Pawatas",    color: "slate",  desc: "Base / to-verb form" },
  complete:     { label: "Complete (Past)",     tag: "Naganap",    color: "amber",  desc: "Action already finished" },
  progressive:  { label: "Progressive (Present)", tag: "Nagaganap", color: "sky",    desc: "Action ongoing or habitual" },
  contemplated: { label: "Contemplated (Future)", tag: "Magaganap", color: "emerald", desc: "Action not yet started" },
  recent:       { label: "Recent Perfective",   tag: "Katatapos", color: "violet", desc: "Just finished a moment ago" },
  imperative:   { label: "Imperative (Command)",  tag: "Pautos",    color: "rose",   desc: "Command — telling someone to do it" }
};

const FOCUS_ORDER = [
  "Actor (-um-)",
  "Actor (mag-)",
  "Actor (mang-)",
  "Actor (mangh-)",
  "Actor (ma-)",
  "Actor (maka-)",
  "Actor (magka-)",
  "Actor (magpa-)",
  "Actor (magpaka-)",
  "Actor (maki-)",
  "Actor (mapa-)",
  "Reciprocal (mag-...-an)",
  "Negation (hindi-)",
  "Object (-in)",
  "Object (i-)",
  "Object (ma-)",
  "Object (-an)",
  "Locative/Benefactive (-an)",
  "Locative (-an)",
  "Locative (pag-...-an)",
  "Directional (ka-...-an)",
  "Benefactive (i-)",
  "Benefactive (ipag-)",
  "Instrumental (ipang-)",
  "Reason (ika-)",
  // Not a focus: entries like umaga are nouns/time words kept in the lexicon
  // so a learner searching them gets the fixed expressions instead of an
  // invented conjugation.
  "Time expression (no aspect affixes)"
];

const FOCUS_COLORS = {
  "Actor (-um-)":                    "rose",
  "Actor (mag-)":                    "rose",
  "Actor (mang-)":                   "rose",
  "Actor (mangh-)":                  "rose",
  "Actor (ma-)":                     "rose",
  "Actor (maka-)":                   "rose",
  "Actor (magka-)":                  "rose",
  "Actor (magpa-)":                  "rose",
  "Actor (magpaka-)":                "rose",
  "Actor (maki-)":                   "rose",
  "Actor (mapa-)":                   "rose",
  "Reciprocal (mag-...-an)":         "rose",
  "Negation (hindi-)":               "slate",
  "Object (-in)":                    "blue",
  "Object (i-)":                     "blue",
  "Object (ma-)":                    "blue",
  "Object (-an)":                    "blue",
  "Locative/Benefactive (-an)":      "amber",
  "Locative (-an)":                  "amber",
  "Locative (pag-...-an)":           "amber",
  "Directional (ka-...-an)":         "amber",
  "Reason (ika-)":                   "sky",
  "Benefactive (i-)":                "emerald",
  "Benefactive (ipag-)":             "emerald",
  "Instrumental (ipang-)":           "violet",
  "Time expression (no aspect affixes)": "slate"
};

// Keep the canonical keys stable for the lexicon, lookup, and highlighting,
// while giving learners a label that names the common -hin surface variant.
const FOCUS_DISPLAY_NAMES = {
  "Object (-in)": "Object (-in / -hin)"
};

function focusDisplayName(focus) {
  return FOCUS_DISPLAY_NAMES[focus] || focus;
}

// Commonness / usage hints — shown as a small badge on each focus card
// to help learners choose between um-/mag- (and other) variants at a glance.
//   "common"     → ★ most common for this type of meaning
//   "info"       → just context (not a "commonness" claim)
//   "less-common" → ★ less common / more specialized
const FOCUS_TIPS = {
  "Actor (-um-)":               { tag: "common",      text: "Most common — basic, everyday actions (eat, drink, go, see)" },
  "Actor (mag-)":               { tag: "common",      text: "Most common — intentional activities (cook, study, work, play)" },
  "Actor (mang-)":              { tag: "less-common", text: "For specific actions: shopping, fishing, gathering" },
  "Actor (mangh-)":             { tag: "less-common", text: "mang- variant for h-initial roots (huli, hintay, etc.)" },
  "Actor (ma-)":                { tag: "info",        text: "Stative — a state or condition (becoming tired, being afraid)" },
  "Actor (maka-)":              { tag: "common",      text: "Potential / 'can' (e.g., makakain = can eat)" },
  "Actor (magka-)":             { tag: "less-common", text: "Existential / possessive (e.g., magkaroon = to have / to exist)" },
  "Actor (magpa-)":             { tag: "less-common", text: "Causative — 'make someone do it' (e.g., magpatulog = put to sleep)" },
  "Actor (magpaka-)":           { tag: "less-common", text: "Intensive — bring the state fully on yourself (magpakabusog)" },
  "Actor (maki-)":              { tag: "common",      text: "Join in what someone else is doing (makisakay, makipag-usap)" },
  "Actor (mapa-)":              { tag: "common",      text: "Involuntary — it happened without your meaning it (napaiyak, napatingin)" },
  "Reciprocal (mag-...-an)":    { tag: "common",      text: "Each other / mutual (talk to each other, help each other)" },
  "Locative (pag-...-an)":      { tag: "common",      text: "Place, or an object engaged with over time (pag-aralan, paglaruan)" },
  "Directional (ka-...-an)":    { tag: "less-common", text: "What a feeling is aimed at — a small closed class (katakutan, kagalitan)" },
  "Reason (ika-)":              { tag: "less-common", text: "The cause of a state (ikinagalit = what made them angry)" },
  "Negation (hindi-)":          { tag: "info",        text: "hindi + the ordinary form (hindi kumain / kumakain / kakain); huwag + infinitive for commands" },
  "Object (-in)":               { tag: "common",      text: "Most common — general 'do [something]'" },
  "Object (i-)":                { tag: "common",      text: "For transferring / moving something to a place" },
  "Object (ma-)":               { tag: "common",      text: "Stative/potential — the thing seen or heard (makita, marinig)" },
  "Object (-an)":               { tag: "common",      text: "Person-oriented object — the one affected (tulungan = help someone)" },
  "Locative/Benefactive (-an)": { tag: "common",      text: "For location ('at a place') or beneficiary ('for someone')" },
  "Locative (-an)":             { tag: "info",        text: "Same as Locative/Benefactive (-an) — alternate key" },
  "Benefactive (i-)":           { tag: "common",      text: "Benefactive — 'for someone' (the recipient is the subject)" },
  "Benefactive (ipag-)":        { tag: "common",      text: "Benefactive with ipag- — 'do X for someone'" },
  "Instrumental (ipang-)":      { tag: "less-common", text: "Use X as a tool (fork, spoon, money — instrument is the subject)" },
  "Time expression (no aspect affixes)": { tag: "info", text: "Not a verb — this word does not take aspect affixes; the fixed expressions are shown instead" }
};

// Focus keys in the curated data are free text, so the same pattern appears
// under several spellings ("Actor (um-)" vs "Actor (-um-)") and some cards
// carry per-verb annotations ("Object (-in) — root 'dinig'"). Rather than
// enumerate every variant in the three tables above, fall back to the pattern
// id that lexicon.js already derives from the key, and look the display data
// up by that. Keeps a new curated spelling from silently rendering with no
// colour, no usage badge, and an arbitrary sort position.
const PATTERN_DISPLAY = {
  um:          { order: "Actor (-um-)",                color: "rose" },
  mag:         { order: "Actor (mag-)",                color: "rose" },
  mang:        { order: "Actor (mang-)",               color: "rose" },
  mangh:       { order: "Actor (mangh-)",              color: "rose" },
  ma:          { order: "Actor (ma-)",                 color: "rose" },
  maka:        { order: "Actor (maka-)",               color: "rose" },
  magka:       { order: "Actor (magka-)",              color: "rose" },
  magpa:       { order: "Actor (magpa-)",              color: "rose" },
  reciprocal:  { order: "Reciprocal (mag-...-an)",     color: "rose" },
  maki:        { order: "Actor (maki-)",               color: "rose" },
  mapa:        { order: "Actor (mapa-)",               color: "rose" },
  magpaka:     { order: "Actor (magpaka-)",            color: "rose" },
  ika:         { order: "Reason (ika-)",               color: "sky" },
  "ka-an":     { order: "Directional (ka-...-an)",     color: "amber" },
  "pag-an":    { order: "Locative (pag-...-an)",       color: "amber" },
  in:          { order: "Object (-in)",                color: "blue" },
  i:           { order: "Object (i-)",                 color: "blue" },
  mao:         { order: "Object (ma-)",                color: "blue" },
  an:          { order: "Locative/Benefactive (-an)",  color: "amber" },
  ipag:        { order: "Benefactive (ipag-)",         color: "emerald" },
  ipa:         { order: "Benefactive (ipag-)",         color: "emerald",
                 tip: { tag: "less-common", text: "Causative — have someone do X, or have X done (ipa- + root)" } },
  ipang:       { order: "Instrumental (ipang-)",       color: "violet" },
  "ma-an":     { order: "Instrumental (ipang-)",       color: "blue",
                 tip: { tag: "common", text: "Stative/potential with ma-...-an — accidental or non-volitional (nakalimutan, naintindihan)" } },
  "pa-in":     { order: "Actor (magpa-)",              color: "emerald",
                 tip: { tag: "less-common", text: "Causative object focus — make someone do X (pa- + root + -in)" } },
  state:       { order: "Negation (hindi-)",           color: "slate",
                 tip: { tag: "info", text: "State or need — behaves like a verb but describes a condition" } }
};

// Resolve a free-text focus key to its canonical pattern display entry.
function patternDisplay(focus) {
  if (typeof patternIdForFocus !== "function") return null;
  const id = patternIdForFocus(focus);
  return (id && PATTERN_DISPLAY[id]) || null;
}

function focusColor(focus) {
  if (FOCUS_COLORS[focus]) return FOCUS_COLORS[focus];
  const display = patternDisplay(focus);
  return (display && display.color) || "slate";
}

// Sort position for a focus card. Unlisted spellings inherit the position of
// the canonical key for their pattern, so they sort next to their own family
// rather than being dumped at the end in insertion order.
function focusRank(focus) {
  const direct = FOCUS_ORDER.indexOf(focus);
  if (direct !== -1) return direct;
  const display = patternDisplay(focus);
  const inherited = display ? FOCUS_ORDER.indexOf(display.order) : -1;
  // Nudge inherited positions just after their canonical sibling so the
  // canonical spelling still leads its family.
  return inherited === -1 ? -1 : inherited + 0.5;
}

function focusTip(focus, root, card) {
  const display = patternDisplay(focus);
  // An unlisted spelling inherits the usage badge of the canonical key for its
  // pattern ("Actor (um-)" gets what "Actor (-um-)" says), unless the pattern
  // defines its own tip.
  const baseTip = FOCUS_TIPS[focus]
    || (display && (display.tip || FOCUS_TIPS[display.order]));
  if (!baseTip) return null;
  if (!root) return baseTip;
  // Override commonness for auto-generated focuses based on whether the verb
  // commonly takes that focus. These lists are the single source of truth --
  // the generator checks the same constants when it builds the card, so the
  // badge shown here can no longer disagree with the form that was generated.
  const r = root.toLowerCase();
  const pattern = typeof patternIdForFocus === "function" ? patternIdForFocus(focus) : null;
  if (!pattern) return baseTip;

  // Corpus evidence, where we have it, outranks the generic per-pattern blurb:
  // it is a claim about this verb rather than about the affix in general.
  // Prefer evidence for the forms this card actually shows; fall back to the
  // pattern-level table when the card's forms are not in the corpus index.
  const cardEv = cardEvidence(card);
  const tier = tierFromEvidence(cardEv) || attestationTier(r, pattern);
  const evidence = cardEv || attestationFor(r, pattern);
  if (tier && evidence) {
    if (tier === "common") {
      return { tag: "common", text: `${baseTip.text} — well attested for this verb (${evidence.conv.toLocaleString()} uses in the reference corpora)` };
    }
    if (tier === "less-common") {
      return { tag: "less-common", text: `Valid but uncommon for this verb — only ${evidence.conv} uses in the reference corpora` };
    }
    return { tag: "uncommon", text: UNATTESTED_TEXT[pattern] || "Not found in the reference corpora for this verb — prefer the focuses above" };
  }

  // No corpus data: fall back to the curated lists.
  if (pattern === "maka" && !MAKA_COMMON_ROOTS.includes(r)) return { tag: "uncommon", text: UNATTESTED_TEXT.maka };
  if (pattern === "magka" && !MAGKA_COMMON_ROOTS.includes(r)) return { tag: "uncommon", text: UNATTESTED_TEXT.magka };
  if (pattern === "reciprocal" && !RECIPROCAL_COMMON_ROOTS.includes(r)) return { tag: "uncommon", text: UNATTESTED_TEXT.reciprocal };
  if ((pattern === "mang" || pattern === "mangh") && !MANG_COMMON_ROOTS.includes(r)) return { tag: "uncommon", text: UNATTESTED_TEXT.mang };
  return baseTip;
}

const UNATTESTED_TEXT = {
  maka: "Less commonly used for this verb — 'can do X' is usually expressed differently",
  magka: "Less commonly used for this verb — 'have/get' typically uses other forms",
  reciprocal: "Less commonly used for this verb — 'each other' is usually expressed with other forms",
  mang: "Less commonly used for this verb — mang- pattern is for specific action categories"
};

function renderResult(result) {
  const root = result.root;
  const inputDisplay = result.input !== root ? `${result.input} → ${root}` : root;

  // Detect which focus/aspect to highlight (when input was a conjugated form)
  const highlight = {};
  if (result.isConjugated && result.detectedAffix) {
    // Map the affix we detected to the focus name
    const affixToFocus = {
      "um":        "Actor (-um-)",
      "mag":       "Actor (mag-)",
      "ma":        "Actor (ma-)",
      "mang":      "Actor (mang-)",
      "mangh":     "Actor (mangh-)",
      "maka":      "Actor (maka-)",
      "magka":     "Actor (magka-)",
      "magpa":     "Actor (magpa-)",
      "in":        "Object (-in)",
      "i":         "Object (i-)",
      "mao":       "Object (ma-)",
      "an":        "Locative/Benefactive (-an)",
      "ipag":      "Benefactive (ipag-)",
      "ipang":     "Instrumental (ipang-)",
      "ipangh":    "Instrumental (ipang-)",
      "pagan":     null, // could be several
      "naka":      null
    };
    const focusName = Object.keys(result.conjugations).find(
      focus => patternIdForFocus(focus) === result.detectedAffix
    ) || affixToFocus[result.detectedAffix];
    if (focusName) {
      const aspect = result.detectedAspect || "complete";
      highlight[focusName] = aspect;
    }
  }

  // Build the conjugation cards
  let html = "";

  // Header
  html += `
    <div class="result-header">
      <div class="header-left">
        <div class="verb-display">
          <div class="verb-label">VERB ROOT</div>
          <div class="verb-root">${escapeHtml(root)}</div>
          ${result.meaning ? `<div class="verb-meaning">${escapeHtml(result.meaning)}</div>` : ""}
        </div>
      </div>
      <div class="header-right">
        <div class="input-echo">
          <div class="input-echo-label">You searched for</div>
          <div class="input-echo-value">${escapeHtml(result.input)}</div>
          ${result.isConjugated ? `<div class="badge badge-conjugated">Conjugated form</div>` : `<div class="badge badge-base">Base form</div>`}
        </div>
        ${result.isVerified
          ? `<div class="badge badge-verified">✓ Curated lexicon</div>`
          : `<div class="badge badge-generated">Not in lexicon</div>`}
      </div>
    </div>
  `;

  if (result.notes) {
    html += `<div class="notes">${escapeHtml(result.notes)}</div>`;
  }

  // Conjugation grid: one card per focus
  const focusList = Object.keys(result.conjugations).sort((a, b) => {
    const ia = focusRank(a);
    const ib = focusRank(b);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  if (focusList.length === 0) {
    html += `
      <div class="empty-state">
        <div class="empty-title">This root needs review</div>
        <div class="empty-message">
          Add the verb's accepted affix patterns and any irregular overrides to the local lexicon before publishing its forms.
        </div>
      </div>`;
    return html;
  }

  html += `<div class="focus-grid">`;
  for (const focus of focusList) {
    const c = result.conjugations[focus];
    const color = focusColor(focus);
    const isHighlightedFocus = !!highlight[focus];

    html += `<div class="focus-card focus-${color}${isHighlightedFocus ? ' highlighted' : ''}">`;
    html += `<div class="focus-header">`;
    html += `<div class="focus-name">${escapeHtml(focusDisplayName(focus))}</div>`;
    html += `<div class="focus-type">${escapeHtml(c.focus)}</div>`;
    html += `</div>`;
    // Commonness / usage tip badge
    const tip = focusTip(focus, root, c);
    if (tip) {
      const tagClass = `focus-tip tag-${tip.tag}`;
      const star = tip.tag === "common" ? "★ " : tip.tag === "less-common" ? "· " : tip.tag === "uncommon" ? "△ " : "";
      html += `<div class="${tagClass}">${star}${escapeHtml(tip.text)}</div>`;
    }
    html += `<div class="focus-description">${escapeHtml(c.description)}</div>`;

    html += `<div class="aspect-list">`;
    for (const aspectKey of ["infinitive", "progressive", "complete", "recent", "contemplated", "imperative"]) {
      let f = c.forms[aspectKey];
      // Imperative: if not specified, default to the infinitive form
      // (the form is the same; only the sentence-final particle changes: "ka!" / "mo!" / etc.)
      if (!f && aspectKey === "imperative" && c.forms.infinitive) {
        const inf = c.forms.infinitive;
        const isReciprocal = focus.startsWith("Reciprocal");
        const isObjectLike = focus.startsWith("Object") || focus.startsWith("Locative") ||
                              focus.startsWith("Benefactive") || focus.startsWith("Instrumental");
        let particle = "mo";
        let particleNote = "you do it to it/them";
        if (isReciprocal) {
          particle = "tayo"; particleNote = "let's (do it together)";
        } else if (!isObjectLike) {
          particle = "ka"; particleNote = "you (singular) do it";
        }
        f = {
          form: inf.form,
          use: `Pattern-derived command: "${inf.form} ${particle}!" - ${particleNote}. Review the context and pronoun before use.`,
          example: deriveImperativeExample(inf, focus, root)
        };
      }
      if (!f) continue;
      const meta = ASPECT_META[aspectKey];
      const isHighlighted = isHighlightedFocus && highlight[focus] === aspectKey;

      html += `<div class="aspect-row${isHighlighted ? ' highlighted' : ''}">`;
      html += `<div class="aspect-label">`;
      html += `<div class="aspect-name">${meta.label}</div>`;
      html += `<div class="aspect-tag">${meta.tag} · ${meta.desc}</div>`;
      html += `</div>`;
      html += `<div class="aspect-content">`;
      html += `<div class="form-line">`;
      html += `<div class="form-value">${escapeHtml(f.form)}</div>`;
      html += `<button type="button" class="copy-btn" data-form="${escapeHtml(f.form)}" title="Copy form" aria-label="Copy ${escapeHtml(f.form)}">📋</button>`;
      html += `</div>`;
      html += `<div class="use-line">${escapeHtml(f.use)}</div>`;
      html += `<div class="example-line"><span class="example-tag">e.g.</span> ${escapeHtml(f.example)}</div>`;
      html += `</div>`;
      html += `</div>`;
    }
    html += `</div>`;

    html += `</div>`;
  }
  html += `</div>`;

  // Quick reference: a single combined table at the bottom for at-a-glance scanning
  html += renderQuickReference(result.conjugations, focusList);

  return html;
}

function renderQuickReference(conjugations, focusList) {
  let html = `<div class="quick-ref">`;
  html += `<h2>Quick Reference Table</h2>`;
  html += `<div class="quick-table-wrap"><table class="quick-table">`;
  html += `<thead><tr><th>Focus</th><th>Infinitive</th><th>Complete (Past)</th><th>Progressive</th><th>Recent Perf.</th><th>Contemplated (Future)</th><th>Imperative</th></tr></thead><tbody>`;
  for (const focus of focusList) {
    const c = conjugations[focus];
    html += `<tr><td class="focus-cell">${escapeHtml(focusDisplayName(focus))}</td>`;
    for (const aspect of ["infinitive", "complete", "progressive", "recent", "contemplated", "imperative"]) {
      const f = c.forms[aspect];
      html += `<td>${f ? escapeHtml(f.form) : "—"}</td>`;
    }
    html += `</tr>`;
  }
  html += `</tbody></table></div></div>`;
  return html;
}

function escapeHtml(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // A browser may expose Clipboard but still deny access; use the fallback.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

// ----- Wire up the page -----
function initApp() {
  const input = document.getElementById("verbInput");
  const submit = document.getElementById("submitBtn");
  const clear = document.getElementById("clearBtn");
  const resultsEl = document.getElementById("results");
  const exampleChips = document.querySelectorAll(".example-chip");

  function doSearch() {
    const value = input.value.trim();
    if (!value) {
      resultsEl.innerHTML = `<div class="empty-state">Type a verb above to see its curated forms.</div>`;
      return;
    }
    const result = resolveVerb(value);
    if (!result) {
      resultsEl.innerHTML = `<div class="empty-state">Couldn't parse that input. Try a Tagalog verb in base form (e.g., "kain", "luto") or already-conjugated (e.g., "kumain", "magluto").</div>`;
      return;
    }
    resultsEl.innerHTML = renderResult(result);
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

    // Wire up copy buttons
    resultsEl.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-form");
        const orig = btn.innerHTML;
        const originalLabel = btn.getAttribute("aria-label");
        if (await copyText(text)) {
          btn.innerHTML = "✓";
          btn.setAttribute("aria-label", `Copied ${text}`);
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.setAttribute("aria-label", originalLabel);
          }, 1000);
        } else {
          btn.innerHTML = "✗";
          btn.setAttribute("aria-label", `Could not copy ${text}`);
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.setAttribute("aria-label", originalLabel);
          }, 1000);
        }
      });
    });
  }

  submit.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
    resultsEl.innerHTML = `<div class="empty-state">Type a verb above to see its curated forms.</div>`;
  });

  exampleChips.forEach(chip => {
    chip.addEventListener("click", () => {
      input.value = chip.getAttribute("data-verb");
      doSearch();
    });
  });
}

document.addEventListener("DOMContentLoaded", initApp);
