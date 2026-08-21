/* ============================================================
   High-priority everyday verbs and focused corrections.

   These use the normalized lexicon schema. Regular patterns are generated;
   overrides are reserved for irregular spellings, productive distinctions,
   or focus families the generic generator cannot safely infer.
   ============================================================ */

function essentialForm(form, use, example) {
  return { form, use, example };
}

function essentialForms(forms, english, examples = []) {
  const [infinitive, complete, progressive, contemplated] = forms;
  return {
    infinitive: essentialForm(infinitive, `To ${english}`, examples[0] || `${infinitive}. — To ${english}.`),
    complete: essentialForm(complete, `Completed ${english}`, examples[1] || `${complete}. — ${english}.`),
    progressive: essentialForm(progressive, `Currently ${english}`, examples[2] || `${progressive}. — ${english}.`),
    contemplated: essentialForm(contemplated, `Will ${english}`, examples[3] || `${contemplated}. — Will ${english}.`)
  };
}

function essentialCard(focus, description, forms) {
  return { focus, description, forms };
}

const CURATED_LEXICON_ENTRIES = Object.freeze({
  kinig: {
    root: "kinig",
    meanings: ["to listen"],
    allowedPatterns: ["ma"],
    overrides: {
      "Actor (ma-)": essentialCard(
        "Actor Focus",
        "Focuses on the listener. Makinig is the standard form for listening attentively.",
        essentialForms(
          ["makinig", "nakinig", "nakikinig", "makikinig"],
          "listen",
          [
            "Makinig ka sa guro. — Listen to the teacher.",
            "Nakinig siya sa balita. — He/she listened to the news.",
            "Nakikinig kami sa radyo. — We are listening to the radio.",
            "Makikinig sila sa paliwanag. — They will listen to the explanation."
          ]
        )
      )
    },
    examples: [],
    status: "curated",
    sources: [],
    notes: "Makinig is the everyday actor-focus verb for listening."
  },

  talo: {
    root: "talo",
    meanings: ["to lose", "to be defeated"],
    allowedPatterns: ["ma"],
    overrides: {
      "Actor (ma-)": essentialCard(
        "Actor Focus",
        "Focuses on the person or side that loses or is defeated.",
        essentialForms(
          ["matalo", "natalo", "natatalo", "matatalo"],
          "lose or be defeated",
          [
            "Ayaw niyang matalo. — He/she does not want to lose.",
            "Natalo ang koponan kahapon. — The team lost yesterday.",
            "Natatalo sila sa laro. — They are losing the game.",
            "Matatalo tayo kung hindi tayo magsasanay. — We will lose if we do not practice."
          ]
        )
      )
    },
    examples: [],
    status: "curated",
    sources: [],
    notes: "Matalo means 'lose' or 'be defeated'; it contrasts with manalo ('win')."
  },

  panalo: {
    root: "panalo",
    meanings: ["to win", "to be victorious"],
    allowedPatterns: ["ma"],
    overrides: {
      "Actor (ma-)": essentialCard(
        "Actor Focus",
        "Focuses on the person or side that wins.",
        essentialForms(
          ["manalo", "nanalo", "nananalo", "mananalo"],
          "win",
          [
            "Gusto niyang manalo. — He/she wants to win.",
            "Nanalo ang koponan kahapon. — The team won yesterday.",
            "Nananalo siya sa laro. — He/she is winning the game.",
            "Mananalo tayo kung magsasanay tayo. — We will win if we practice."
          ]
        )
      )
    },
    examples: [],
    status: "curated",
    sources: [],
    notes: "Manalo means 'win' or 'be victorious'; it contrasts with matalo ('lose')."
  },

  putol: {
    root: "putol",
    meanings: ["to cut", "to break or sever"],
    allowedPatterns: ["um", "in"],
    overrides: {},
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Pumutol siya ng kahoy. — He/she cut some wood." },
      { pattern: "um", aspect: "progressive", text: "Pumuputol siya ng papel. — He/she is cutting paper." },
      { pattern: "in", aspect: "infinitive", text: "Putulin mo ang lubid. — Cut the rope." },
      { pattern: "in", aspect: "complete", text: "Pinutol niya ang sanga. — He/she cut the branch." },
      { pattern: "in", aspect: "progressive", text: "Pinuputol niya ang tela. — He/she is cutting the cloth." },
      { pattern: "in", aspect: "contemplated", text: "Puputulin niya ang tali. — He/she will cut the string." }
    ],
    status: "curated",
    sources: [],
    notes: "Pumutol is actor focus ('cut'); putulin focuses on the thing cut or severed."
  },

  gulo: {
    root: "gulo",
    meanings: ["to become confused or tangled", "to disturb or confuse something"],
    allowedPatterns: ["um", "in"],
    overrides: {
      "Actor (-um-)": essentialCard(
        "Actor Focus",
        "Focuses on something becoming tangled, confused, or complicated.",
        essentialForms(
          ["gumulo", "gumulo", "gumugulo", "gugulo"],
          "become tangled or confused",
          [
            "Gumulo ang sinulid. — The thread became tangled.",
            "Gumulo ang usapan. — The conversation became confused.",
            "Gumugulo ang sitwasyon. — The situation is getting complicated.",
            "Gugulo ang plano kung walang usapan. — The plan will become complicated without discussion."
          ]
        )
      ),
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on a person, thing, or plan that is being disturbed, confused, or made messy.",
        essentialForms(
          ["guluhin", "ginulo", "ginugulo", "guguluhin"],
          "disturb or confuse something",
          [
            "Huwag mong guluhin ang bata. — Don't disturb the child.",
            "Ginulo niya ang mga papel. — He/she messed up the papers.",
            "Ginugulo niya ang klase. — He/she is disturbing the class.",
            "Guguluhin nila ang plano. — They will disrupt the plan."
          ]
        )
      )
    },
    examples: [],
    status: "curated",
    sources: [],
    notes: "Gulo is a noun for confusion or disorder. Gumulo means 'become tangled/confused'; guluhin means 'disturb, confuse, or make messy'."
  },

  bili: {
    root: "bili",
    meanings: ["to buy", "to sell (depending on focus)"],
    allowedPatterns: ["um", "mang", "in", "an", "i", "ipang"],
    overrides: {
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on what is being bought. This family has the irregular bilhin / bibilhin spelling.",
        essentialForms(
          ["bilhin", "binili", "binibili", "bibilhin"],
          "buy something",
          [
            "Bilhin mo ang tiket. — Buy the ticket.",
            "Binili niya ang bulaklak. — She bought the flowers.",
            "Binibili niya ngayon ang sapatos. — She is buying the shoes now.",
            "Bibilhin niya ang bahay. — She will buy the house."
          ]
        )
      ),
      "Locative/Benefactive (-an)": essentialCard(
        "Locative / Benefactive Focus",
        "Focuses on the person or place involved in buying. This family uses the syncopated bilhan spelling.",
        essentialForms(
          ["bilhan", "binilhan", "binibilhan", "bibilhan"],
          "buy for or at a person or place",
          [
            "Bilhan mo siya ng regalo. — Buy a gift for her.",
            "Binilhan niya ang bata ng laruan. — She bought a toy for the child.",
            "Binibilhan niya ang nanay ng bulaklak. — She is buying flowers for her mom.",
            "Bibilhan niya ako ng kape. — She will buy coffee for me."
          ]
        )
      ),
      "Instrumental (ipang-)": essentialCard(
        "Instrumental Focus",
        "Focuses on money or another item used as the means to buy.",
        essentialForms(
          ["ipambili", "ipinambili", "ipinapambili", "ipapambili"],
          "use something to buy",
          [
            "Ipambili mo ang pera sa pagkain. — Use the money to buy food.",
            "Ipinambili niya ang pera sa sapatos. — She used the money to buy shoes.",
            "Ipinapambili niya ang ipon sa kotse. — He is using his savings to buy a car.",
            "Ipapambili niya ang pera sa bahay. — He will use the money to buy a house."
          ]
        )
      )
    },
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Bumili tayo ng tinapay. — Let's buy bread." },
      { pattern: "mang", aspect: "infinitive", text: "Mamili tayo ng groceries. — Let's go buy groceries." },
      { pattern: "i", aspect: "infinitive", text: "Ibili mo siya ng kotse. — Buy a car for him/her." }
    ],
    status: "curated",
    sources: [],
    notes: "Actor focus for buying is -um- (bumili). The -an form marks the person or place involved; i- marks the person bought for."
  },

  gamit: {
    root: "gamit",
    meanings: ["to use", "to employ"],
    allowedPatterns: ["um", "in"],
    overrides: {},
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Gumamit ka ng lapis. — Use a pencil." },
      { pattern: "in", aspect: "infinitive", text: "Gamitin mo ang lapis na ito. — Use this pencil." }
    ],
    status: "curated",
    sources: [{ title: "Wiktionary: gumamit", url: "https://en.wiktionary.org/wiki/gumamit" }],
    notes: "Both actor-focus gumamit and object-focus gamitin are everyday forms."
  },

  nood: {
    root: "nood",
    meanings: ["to watch"],
    allowedPatterns: ["ma", "in"],
    overrides: {
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on the show, film, or event being watched. This family has an irregular panoorin spelling.",
        essentialForms(
          ["panoorin", "pinanood", "pinapanood", "panonoorin"],
          "watch something",
          [
            "Panoorin mo ang pelikula. — Watch the film.",
            "Pinanood namin ang laro. — We watched the game.",
            "Pinapanood niya ang balita. — He/she is watching the news.",
            "Panonoorin natin ang palabas. — We will watch the show."
          ]
        )
      )
    },
    examples: [
      { pattern: "ma", aspect: "infinitive", text: "Manood tayo ng pelikula. — Let's watch a film." }
    ],
    status: "curated",
    sources: [{ title: "Wiktionary: manood", url: "https://en.wiktionary.org/wiki/manood" }],
    notes: "Manood is the common actor-focus form for watching a show, film, or game."
  },

  tingin: {
    root: "tingin",
    meanings: ["to look", "to look at"],
    allowedPatterns: ["um", "an"],
    overrides: {
      "Object / Location (-an)": essentialCard(
        "Object / Location Focus",
        "Focuses on what is looked at. The common form tingnan is a syncopated form of the -an family.",
        essentialForms(
          ["tingnan", "tiningnan", "tinitingnan", "titingnan"],
          "look at something",
          [
            "Tingnan mo ito. — Look at this.",
            "Tiningnan niya ang larawan. — He/she looked at the picture.",
            "Tinitingnan ko ang mapa. — I am looking at the map.",
            "Titingnan namin ang bahay. — We will look at the house."
          ]
        )
      )
    },
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Tumingin ka sa kaliwa. — Look to the left." }
    ],
    status: "curated",
    sources: [{ title: "Wiktionary: tingnan", url: "https://en.wiktionary.org/wiki/tingnan" }],
    notes: "Use tumingin for looking; use tingnan when directing attention to something."
  },

  hawak: {
    root: "hawak",
    meanings: ["to hold", "to grasp"],
    allowedPatterns: ["um", "an"],
    overrides: {},
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Humawak ka sa handrail. — Hold on to the handrail." },
      { pattern: "an", aspect: "infinitive", text: "Hawakan mo ang papel. — Hold the paper." }
    ],
    status: "curated",
    sources: [{ title: "Wiktionary: humawak", url: "https://en.wiktionary.org/wiki/humawak" }],
    notes: "Hawak commonly takes both actor-focus humawak and object-focus hawakan."
  },

  suot: {
    root: "suot",
    meanings: ["to wear", "to put on"],
    allowedPatterns: ["mag", "i"],
    overrides: {},
    examples: [
      { pattern: "mag", aspect: "infinitive", text: "Magsuot ka ng jacket. — Wear a jacket." },
      { pattern: "i", aspect: "infinitive", text: "Isuot mo ang sapatos. — Put on the shoes." }
    ],
    status: "curated",
    sources: [{ title: "Wiktionary: magsuot", url: "https://en.wiktionary.org/wiki/magsuot" }],
    notes: "Magsuot focuses on the wearer; isuot focuses on the clothing being put on."
  },

  intindi: {
    root: "intindi",
    meanings: ["to understand", "to comprehend"],
    allowedPatterns: ["um", "in", "ma-an"],
    overrides: {
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on understanding a particular idea or explanation.",
        essentialForms(["intindihin", "inintindi", "iniintindi", "iintindihin"], "understand something")
      ),
      "Ability / Understand (ma-...-an)": essentialCard(
        "Ability / Comprehension Focus",
        "The very common form used when something or someone can be understood.",
        essentialForms(
          ["maintindihan", "naintindihan", "naiintindihan", "maiintindihan"],
          "understand",
          [
            "Maintindihan mo ba ako? — Can you understand me?",
            "Naintindihan ko ang paliwanag. — I understood the explanation.",
            "Hindi ko naiintindihan. — I do not understand.",
            "Maiintindihan mo rin ito. — You will understand this too."
          ]
        )
      )
    },
    examples: [{ pattern: "um", aspect: "infinitive", text: "Umintindi ka muna. — Try to understand first." }],
    status: "curated",
    sources: [{ title: "Wiktionary: maintindihan", url: "https://en.wiktionary.org/wiki/maintindihan" }],
    notes: "Maintindihan is often more natural than a literal actor-focus form in everyday speech."
  },

  kilala: {
    root: "kilala",
    meanings: ["to recognize", "to know a person"],
    allowedPatterns: ["maka", "in"],
    overrides: {
      "Actor (maka-)": essentialCard(
        "Actor Focus (Recognition)",
        "Focuses on coming to recognize or identify someone or something.",
        essentialForms(["makilala", "nakilala", "nakikilala", "makikilala"], "recognize someone")
      ),
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on the person or thing being recognized or gotten to know.",
        essentialForms(["kilalanin", "kinilala", "kinikilala", "kikilalanin"], "get to know someone")
      )
    },
    examples: [],
    status: "curated",
    sources: [{ title: "Wiktionary: kilala", url: "https://en.wiktionary.org/wiki/kilala" }],
    notes: "Use makilala for recognition; kilalanin is common for getting to know or identifying someone."
  },

  kailangan: {
    root: "kailangan",
    meanings: ["to need", "necessary"],
    allowedPatterns: ["state"],
    overrides: {
      "State / Need": essentialCard(
        "Stative / Modal",
        "Kailangan is commonly used as a bare predicate meaning 'need' or 'necessary'. The -in family describes something that is or will be needed.",
        essentialForms(
          ["kailangan", "kinailangan", "kinakailangan", "kakailanganin"],
          "need something",
          [
            "Kailangan ko ng tulong. — I need help.",
            "Kinailangan namin ng oras. — We needed time.",
            "Kinakailangan ang ID. — An ID is required.",
            "Kakailanganin mo ito. — You will need this."
          ]
        )
      )
    },
    examples: [],
    status: "curated",
    sources: [{ title: "Wiktionary: kailangan", url: "https://en.wiktionary.org/wiki/kailangan" }],
    notes: "Also accept the common colloquial spelling kelangan as a search alias."
  },

  kaya: {
    root: "kaya",
    meanings: ["to manage", "to be capable of"],
    allowedPatterns: ["in"],
    overrides: {
      "Object (-in)": essentialCard(
        "Ability / Capacity",
        "Focuses on whether a task can be managed or endured.",
        essentialForms(["kayanin", "kinaya", "kinakaya", "kakayanin"], "manage something")
      )
    },
    examples: [],
    status: "curated",
    sources: [],
    notes: "The bare word kaya is also a very common modal meaning 'can' or 'able to'."
  },

  tira: {
    root: "tira",
    meanings: ["to stay", "to live somewhere"],
    allowedPatterns: ["um", "an"],
    overrides: {},
    examples: [
      { pattern: "um", aspect: "infinitive", text: "Tumira sila sa Maynila. — They live in Manila." },
      { pattern: "an", aspect: "infinitive", text: "Tirahan nila ang bahay na iyon. — They live in that house." }
    ],
    status: "curated",
    sources: [],
    notes: "Tumira is the everyday verb for residing or staying in a place."
  },

  alaga: {
    root: "alaga",
    meanings: ["to care for", "to look after"],
    allowedPatterns: ["mag", "an"],
    overrides: {
      "Object / Benefactive (-an)": essentialCard(
        "Object / Benefactive Focus",
        "Focuses on the person, animal, or thing receiving care.",
        essentialForms(["alagaan", "inalagaan", "inaalagaan", "aalagaan"], "care for someone")
      )
    },
    examples: [{ pattern: "mag", aspect: "infinitive", text: "Mag-alaga ka ng aso. — Take care of a dog." }],
    status: "curated",
    sources: [],
    notes: "The -an family uses alagaan, not the mechanically formed alagahan."
  },

  kanta: {
    root: "kanta",
    meanings: ["to sing", "song"],
    allowedPatterns: ["um", "in"],
    overrides: {
      "Object (-in)": essentialCard(
        "Object Focus",
        "Focuses on the song being sung.",
        essentialForms(["kantahin", "kinanta", "kinakanta", "kakantahin"], "sing a song")
      )
    },
    examples: [{ pattern: "um", aspect: "infinitive", text: "Kumanta tayo. — Let's sing." }],
    status: "curated",
    sources: [],
    notes: "Kanta is a common everyday search term alongside the existing awit entry."
  }
});

const CURATED_LEXICON_UPDATES = Object.freeze({
  kita: {
    allowedPatterns: ["ipa"],
    overrides: {
      "Causative / Show (ipa-)": essentialCard(
        "Causative / Object Focus",
        "Focuses on showing something to someone.",
        essentialForms(["ipakita", "ipinakita", "ipinapakita", "ipapakita"], "show something")
      )
    },
    examples: [{ pattern: "ipa", aspect: "infinitive", text: "Ipakita mo sa akin ang larawan. — Show me the picture." }]
  },
  tawag: {
    allowedPatterns: ["an"],
    overrides: {
      "Object / Recipient (-an)": essentialCard(
        "Object / Recipient Focus",
        "Commonly used for calling someone by telephone.",
        essentialForms(["tawagan", "tinawagan", "tinatawagan", "tatawagan"], "call someone")
      )
    },
    examples: [{ pattern: "an", aspect: "infinitive", text: "Tawagan mo ako mamaya. — Call me later." }]
  },
  pasok: {
    allowedPatterns: ["i", "pa-in"],
    overrides: {
      "Causative (pa-...-in)": essentialCard(
        "Causative Focus",
        "Focuses on allowing or causing someone to enter.",
        essentialForms(["papasukin", "pinasok", "pinapasok", "papasukin"], "let someone enter")
      )
    },
    examples: [{ pattern: "i", aspect: "infinitive", text: "Ipasok mo ang barya sa butas. — Put the coin into the hole." }]
  },
  labas: {
    allowedPatterns: ["i"],
    overrides: {},
    examples: [{ pattern: "i", aspect: "infinitive", text: "Ilabas mo ang basura. — Take the trash outside." }]
  },
  sakay: {
    allowedPatterns: ["i", "an"],
    overrides: {
      "Object / Vehicle (-an)": essentialCard(
        "Object / Vehicle Focus",
        "Focuses on the vehicle being ridden. This family uses the syncopated sakyan spelling.",
        essentialForms(["sakyan", "sinakyan", "sinasakyan", "sasakyan"], "ride a vehicle")
      )
    },
    examples: [{ pattern: "i", aspect: "infinitive", text: "Isakay mo ang bata sa kotse. — Put the child in the car." }]
  },
  uwi: {
    allowedPatterns: ["i"],
    overrides: {},
    examples: [{ pattern: "i", aspect: "infinitive", text: "Iuwi mo ang mga libro. — Bring the books home." }]
  },
  hiram: {
    allowedPatterns: ["in", "ipa"],
    overrides: {
      "Causative / Lend (ipa-)": essentialCard(
        "Causative / Object Focus",
        "Focuses on lending something to someone.",
        essentialForms(["ipahiram", "ipinahiram", "ipinapahiram", "ipapahiram"], "lend something")
      )
    },
    examples: [{ pattern: "in", aspect: "infinitive", text: "Hiramin mo ang libro. — Borrow the book." }]
  },
  turo: {
    allowedPatterns: ["i", "an"],
    overrides: {
      "Object / Benefactive (-an)": essentialCard(
        "Object / Benefactive Focus",
        "Focuses on the person being taught.",
        essentialForms(["turuan", "tinuruan", "tinuturuan", "tuturuan"], "teach someone")
      )
    },
    examples: [{ pattern: "i", aspect: "infinitive", text: "Ituro mo ang daan. — Point out the way." }]
  },
  alam: {
    allowedPatterns: ["in"],
    overrides: {},
    examples: [{ pattern: "in", aspect: "infinitive", text: "Alamin mo ang sagot. — Find out the answer." }],
    notes: "Bare alam means 'know'; malaman means 'find out' or 'come to know'; alamin means 'find out about' something specific."
  },
  mahal: {
    meanings: ["to love", "to be expensive"],
    allowedPatterns: ["mag", "in"],
    removePatterns: ["ma"],
    removeFocuses: ["Change of state"],
    overrides: {
      "Actor (mag-)": essentialCard(
        "Actor Focus",
        "Focuses on loving or valuing someone or something.",
        essentialForms(["magmahal", "nagmahal", "nagmamahal", "magmamahal"], "love")
      )
    },
    examples: [{ pattern: "in", aspect: "infinitive", text: "Mahalin mo ang pamilya mo. — Love your family." }],
    notes: "Mahal can mean 'expensive' as an adjective and 'love' in the magmahal / mahalin verb families."
  },
  sakit: {
    meanings: ["to hurt", "to be sick", "to become ill"],
    allowedPatterns: ["magka"],
    overrides: {},
    examples: [{ pattern: "magka", aspect: "infinitive", text: "Ayokong magkasakit. — I do not want to get sick." }],
    notes: "Masakit is an adjective ('painful'); sumakit means 'started to hurt'; magkasakit means 'become ill'."
  }
});

const CURATED_ROOT_ALIASES = Object.freeze({
  kelangan: "kailangan"
});

const CURATED_FORM_ALIASES = Object.freeze({
  tignan: { root: "tingin", affix: "an", aspect: "infinitive" }
});
