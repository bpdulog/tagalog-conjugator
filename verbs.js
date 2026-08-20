/* ============================================================
   Tagalog Verb Database
   Hand-verified forms for common Tagalog verbs
   Each entry has hand-checked conjugations + example sentences
   ============================================================ */

const VERB_DATABASE = {
  // ============== EAT / FOOD ==============
  kain: {
    root: "kain",
    meaning: "to eat",
    notes: "Takes um- actor focus, -in object focus, and maka- (potential 'can eat')",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the person eating. Used when the eater is the subject.",
        forms: {
          infinitive:   { form: "kumain",   use: "To eat (infinitive / future intent)",          example: "Gusto kong kumain ng adobo. — I want to eat adobo." },
          complete:     { form: "kumain",   use: "Past completed action of eating",               example: "Kumain kami ng kanin kanina. — We ate rice earlier." },
          progressive:  { form: "kumakain", use: "Currently eating or habitual eating",           example: "Kumakain sila ngayon. — They are eating now." },
          contemplated: { form: "kakain",   use: "Future / planned eating",                       example: "Kakain tayo mamaya. — We will eat later." }
        }
      },
      "Actor (maka-)": {
        focus: "Actor Focus (Potential / Ability)",
        description: "Focuses on the ability or opportunity to eat. 'Makakain' = 'can eat' or 'will be able to eat' (very common in daily conversation).",
        forms: {
          infinitive:   { form: "makakain",   use: "Can eat / will be able to eat (infinitive)",    example: "Makakain ka pa ba? — Can you still eat?" },
          complete:     { form: "nakakain",   use: "Could / was able to eat (past)",                 example: "Nakakain siya bago umalis. — He was able to eat before leaving." },
          progressive:  { form: "nakakakain", use: "Being able to eat / having the chance (ongoing)", example: "Nakakakain ka ba? — Are you able to eat?" },
          contemplated: { form: "makakakain", use: "Will be able to eat (future)",                  example: "Makakakain tayo sa party. — We will be able to eat at the party." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on the food being eaten. The object (food) becomes the subject.",
        forms: {
          infinitive:   { form: "kainin",     use: "To eat (something specific)",                  example: "Kainin mo ang mansanas. — Eat the apple." },
          complete:     { form: "kinain",     use: "Something was eaten (past)",                    example: "Kinain niya ang adobo. — He/she ate the adobo." },
          progressive:  { form: "kinakain",   use: "Something is being eaten now",                 example: "Kinakain ng bata ang kanin. — The child is eating the rice." },
          contemplated: { form: "kakainin",   use: "Something will be eaten",                       example: "Kakainin nila ang cake. — They will eat the cake." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Focuses on the place where the eating happens.",
        forms: {
          infinitive:   { form: "kainan",     use: "To eat at (a place)",                          example: "Kainan natin sa labas. — Let's eat outside." },
          complete:     { form: "kinainan",   use: "Ate at (a place) — past",                      example: "Kinainan namin ng hapunan ang bahay nila. — We had dinner at their house." },
          progressive:  { form: "kinakainan", use: "Eating at (a place) — ongoing",                example: "Kinakainan namin ang mesa. — We eat at the table." },
          contemplated: { form: "kakainan",   use: "Will eat at (a place)",                        example: "Kakainan natin ang bagong restaurant. — We will eat at the new restaurant." }
        }
      },
      "Benefactive (i-)": {
        focus: "Benefactive Focus",
        description: "Focuses on the beneficiary of the eating — feeding someone. Note: 'ikain' means 'to feed someone' (not 'to eat for them').",
        forms: {
          infinitive:   { form: "ikain",     use: "To feed (someone) [something]",                  example: "Ikain mo sa bata ang kanin. — Feed the child the rice." },
          complete:     { form: "ikinain",   use: "Fed (someone) [something] — past",              example: "Ikinain niya sa bata ang kanin. — He fed the child the rice." },
          progressive:  { form: "ikinakain", use: "Feeding (someone) [something] — ongoing",        example: "Ikinakain niya sa bata ang kanin. — He is feeding the child the rice." },
          contemplated: { form: "ikakainin", use: "Will feed (someone) [something]",                example: "Ikakainin niya sa bata ang kanin. — He will feed the child the rice." }
        }
      },
      "Instrumental (ipang-)": {
        focus: "Instrumental Focus",
        description: "Focuses on the tool or instrument used for eating.",
        forms: {
          infinitive:   { form: "ipangkain",    use: "To use (something) for eating",                example: "Ipangkain mo ang tinidor. — Use the fork for eating." },
          complete:     { form: "ipinangkain",  use: "Used (something) for eating — past",           example: "Ipinangkain niya ang kutsara. — He used the spoon for eating." },
          progressive:  { form: "ipinapangkain",use: "Using (something) for eating — ongoing",       example: "Ipinapangkain niya ang tinidor. — He is using the fork for eating." },
          contemplated: { form: "ipapangkain",  use: "Will use (something) for eating",              example: "Ipapangkain niya ang tinidor. — He will use the fork for eating." }
        }
      },
      "Benefactive (ipag-)": {
        focus: "Benefactive Focus",
        description: "Feeding someone (e.g., the mother feeding the child). 'Ipagkain' is the most common benefactive form for eating.",
        forms: {
          infinitive:   { form: "ipagkain",    use: "To feed (someone)",                            example: "Ipagkain mo sa bata ang kanin. — Feed the child the rice." },
          complete:     { form: "ipinagkain",  use: "Fed (someone) — past",                          example: "Ipinagkain niya sa bata ang kanin. — She fed the child the rice." },
          progressive:  { form: "ipinapagkain",use: "Feeding (someone) — ongoing",                  example: "Ipinapagkain niya sa bata ang kanin. — She is feeding the child the rice." },
          contemplated: { form: "ipapagkain",  use: "Will feed (someone)",                          example: "Ipapagkain niya bukas sa bata ang kanin. — She will feed the child the rice tomorrow." }
        }
      }
    }
  },

  // ============== DRINK ==============
  inom: {
    root: "inom",
    meaning: "to drink",
    notes: "Takes um- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the person drinking.",
        forms: {
          infinitive:   { form: "uminom",    use: "To drink (infinitive)",                        example: "Uminom ka ng tubig. — Drink water." },
          complete:     { form: "uminom",    use: "Drank — past completed",                        example: "Uminom siya ng kape. — He/she drank coffee." },
          progressive:  { form: "umiinom",   use: "Currently drinking",                           example: "Umiinom sila ng tubig. — They are drinking water." },
          contemplated: { form: "iinom",     use: "Will drink",                                   example: "Iinom siya ng gatas mamaya. — He/she will drink milk later." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on the drink being consumed.",
        forms: {
          infinitive:   { form: "inumin",     use: "To drink (something specific)",                example: "Inumin mo ang gamot. — Drink the medicine." },
          complete:     { form: "ininom",     use: "Drank (something) — past",                     example: "Ininom niya ang tubig. — He/she drank the water." },
          progressive:  { form: "iniinom",    use: "Drinking (something) — ongoing",               example: "Iniinom niya ngayon ang kape. — He/she is drinking the coffee now." },
          contemplated: { form: "iinumin",    use: "Will drink (something)",                       example: "Iinumin niya ang gatas. — He/she will drink the milk." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Focuses on the place of drinking.",
        forms: {
          infinitive:   { form: "inuman",     use: "Drinking place (n.) / to drink at",            example: "Inuman tayo sa labas. — Let's drink (alcohol) outside." },
          complete:     { form: "ininuman",   use: "Drank at (a place) — past",                    example: "Ininuman niya ng tubig ang garahe. — He drank water at the garage." },
          progressive:  { form: "iniinuman",  use: "Drinking at (a place) — ongoing",              example: "Iniinuman niya ang kanto. — He/she drinks at the corner." },
          contemplated: { form: "iinuman",    use: "Will drink at (a place)",                      example: "Iinuman niya ang baryo. — He will drink at the village." }
        }
      },
      "Benefactive (i-)": {
        focus: "Benefactive Focus",
        description: "Focuses on the beneficiary of the drinking action.",
        forms: {
          infinitive:   { form: "iinom",    use: "To drink (something) for someone",              example: "Iinom mo sa bata ang gatas. — Drink the milk for the child." },
          complete:     { form: "ininom",   use: "Drank (something) for someone — past",          example: "Ininom niya para sa bata ang gamot. — He drank the medicine for the child." },
          progressive:  { form: "iniinom",  use: "Drinking (something) for someone — ongoing",    example: "Iniinom niya ang gamot sa bata. — He is giving the medicine drink to the child." },
          contemplated: { form: "iinumin",  use: "Will drink (something) for someone",            example: "Iinumin niya ang gatas sa bata. — He will give the milk to the child to drink." }
        }
      }
    }
  },

  // ============== COOK ==============
  luto: {
    root: "luto",
    meaning: "to cook",
    notes: "Takes mag- actor focus (intentional cooking)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the cook. Implies intentional / planned cooking.",
        forms: {
          infinitive:   { form: "magluto",     use: "To cook (infinitive / planned)",              example: "Magluto tayo ng hapunan. — Let's cook dinner." },
          complete:     { form: "nagluto",     use: "Cooked — past completed",                     example: "Nagluto si Nanay ng adobo. — Mother cooked adobo." },
          progressive:  { form: "nagluluto",   use: "Currently cooking",                           example: "Nagluluto siya ngayon. — She is cooking now." },
          contemplated: { form: "magluluto",   use: "Will cook",                                   example: "Magluluto siya bukas. — She will cook tomorrow." }
        }
      },
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Focuses on the cook. Implies accidental or non-intentional cooking (e.g., the food got cooked).",
        forms: {
          infinitive:   { form: "maluto",      use: "To be cooked (stative / accidental)",         example: "Ayaw niyang maluto ang pagkain. — She doesn't want the food to be cooked." },
          complete:     { form: "naluto",      use: "Got cooked (unintentionally)",                example: "Naluto ang kanin. — The rice got cooked." },
          progressive:  { form: "naluluto",    use: "Being cooked (gradually)",                    example: "Naluluto na ang adobo. — The adobo is being cooked." },
          contemplated: { form: "maluluto",    use: "Will get cooked",                             example: "Maluluto na ang pagkain. — The food will get cooked." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on the food being cooked.",
        forms: {
          infinitive:   { form: "lutuin",      use: "To cook (something specific)",                example: "Lutuin mo ang isda. — Cook the fish." },
          complete:     { form: "niluto",      use: "Cooked (something) — past",                   example: "Niluto niya ang adobo. — He/she cooked the adobo." },
          progressive:  { form: "niluluto",    use: "Cooking (something) — ongoing",               example: "Niluluto niya ang isda. — He/she is cooking the fish." },
          contemplated: { form: "lulutuin",    use: "Will cook (something)",                       example: "Lulutuin niya ang manok bukas. — She will cook the chicken tomorrow." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Focuses on the place where cooking happens (e.g., the kitchen, the pot).",
        forms: {
          infinitive:   { form: "lutuan",      use: "Place where something is cooked; to cook at",  example: "Lutuan mo ang kaldero. — Use the pot for cooking." },
          complete:     { form: "nilutuan",    use: "Cooked at (a place) — past",                  example: "Nilutuan niya ang kawali. — He/she cooked at the frying pan." },
          progressive:  { form: "nilulutuan",  use: "Cooking at (a place) — ongoing",              example: "Nilulutuan niya ang kaldero. — He is cooking at the pot." },
          contemplated: { form: "lulutuan",    use: "Will cook at (a place)",                      example: "Lulutuan niya ang bagong lutuan. — She will cook at the new kitchen." }
        }
      },
      "Benefactive (ipag-)": {
        focus: "Benefactive Focus",
        description: "Cooking for someone — focuses on the beneficiary.",
        forms: {
          infinitive:   { form: "ipagluto",      use: "To cook for someone",                       example: "Ipagluto mo sa kanya ang adobo. — Cook adobo for him/her." },
          complete:     { form: "ipinagluto",    use: "Cooked for someone — past",                 example: "Ipinagluto niya sa bata ang sopas. — He cooked soup for the child." },
          progressive:  { form: "ipinagluluto",  use: "Cooking for someone — ongoing",             example: "Ipinagluluto niya ang hapunan sa pamilya. — She is cooking dinner for the family." },
          contemplated: { form: "ipagluluto",    use: "Will cook for someone",                     example: "Ipagluluto niya ang cake sa kaarawan. — She will cook a cake for the birthday." }
        }
      }
    }
  },

  // ============== TAPON (throw away) ==============
  tapon: {
    root: "tapon",
    meaning: "to throw away / discard",
    notes: "The -um- form 'tumapon' (to be thrown away / to fall off) is grammatically valid but uncommon in everyday speech. For active throwing, use magtapon or itapon. Noun: 'tapon' = 'trash / thing thrown away'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one throwing something away. The most common way to say 'throw away' in everyday speech.",
        forms: {
          infinitive:   { form: "magtapon",     use: "To throw away (infinitive / planned)",         example: "Magtapon tayo ng basura. — Let's throw away the trash." },
          complete:     { form: "nagtapon",     use: "Threw away — past",                            example: "Nagtapon siya ng basura kagabi. — She threw away the trash last night." },
          progressive:  { form: "nagtatapon",   use: "Currently throwing away",                      example: "Nagtatapon siya ngayon ng mga lumang dyaryo. — He is throwing away old newspapers now." },
          contemplated: { form: "magtatapon",   use: "Will throw away",                              example: "Magtatapon siya bukas ng mga gamit. — She will throw away her things tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (-um- form)",
        description: "Focuses on what gets thrown away / falls off. Grammatically valid (um- + t + apon) but uncommon — most speakers use magtapon for the active sense. 'Tumapon' carries a passive or accidental nuance: 'to be thrown away', 'to fall off', 'to be wasted'.",
        forms: {
          infinitive:   { form: "tumapon",     use: "To be thrown away (passive / accidental)",      example: "Huwag mong hayaang tumapon ang pagkain. — Don't let the food go to waste." },
          complete:     { form: "tumapon",     use: "Was thrown away / fell off (past)",            example: "Tumapon ang mga papel sa sahig. — The papers fell on the floor." },
          progressive:  { form: "tumatapon",   use: "Falling / being thrown (ongoing)",             example: "Tumatapon ang mga dahon. — The leaves are falling." },
          contemplated: { form: "tatapon",     use: "Will be thrown / will fall",                    example: "Baka tatapon ang tubig. — The water might spill." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on the thing being thrown away (becomes the subject). The most common form for commanding someone to throw something away.",
        forms: {
          infinitive:   { form: "itapon",      use: "To throw (something specific) away",           example: "Itapon mo na ang basura. — Throw away the trash now." },
          complete:     { form: "itinapon",    use: "Thrown away (something) — past",               example: "Itinapon niya ang lumang kahon. — He threw away the old box." },
          progressive:  { form: "itinapon",    use: "Throwing (something) — ongoing",               example: "Itinapon niya ngayon ang mga lumang libro. — She is throwing away the old books now." },
          contemplated: { form: "itatapon",    use: "Will throw (something) away",                  example: "Itatapon niya bukas ang sirang radyo. — She will throw away the broken radio tomorrow." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Focuses on where something is thrown — the trash can, the floor, a specific place. The noun 'tapunan' = 'trash can' / 'place where things are thrown'.",
        forms: {
          infinitive:   { form: "tapunan",      use: "Place to throw things; to throw at (a place)", example: "Tapunan mo ng basura ang timba. — Throw the trash into the bucket." },
          complete:     { form: "tinapunan",    use: "Thrown at (a place) — past",                   example: "Tinapunan niya ng tubig ang hardin. — She threw water on the garden." },
          progressive:  { form: "tinatapunan",  use: "Throwing at (a place) — ongoing",              example: "Tinatapunan niya ng pagkain ang mga ibon. — She is throwing food to the birds." },
          contemplated: { form: "tatapunan",    use: "Will throw at (a place)",                      example: "Tatapunan niya ng tubig ang apoy. — He will throw water on the fire." }
        }
      },
      "Benefactive (ipag-)": {
        focus: "Benefactive Focus",
        description: "Throwing away for someone — focuses on the beneficiary. Less common in practice; usually expressed with 'para sa kanya'.",
        forms: {
          infinitive:   { form: "ipagtapon",      use: "To throw away for someone",                  example: "Ipagtapon mo sa kanya ang basura. — Throw away the trash for him/her." },
          complete:     { form: "ipinagtapon",    use: "Threw away for someone — past",              example: "Ipinagtapon niya sa bata ang papel. — He threw away the paper for the child." },
          progressive:  { form: "ipinagtatapon",  use: "Throwing away for someone — ongoing",        example: "Ipinagtatapon niya sa kapatid niya ang mga gamit. — She is throwing away her sibling's things." },
          contemplated: { form: "ipagtatapon",    use: "Will throw away for someone",                example: "Ipagtatapon niya sa pinsan niya ang lumang damit. — She will throw away the old clothes for her cousin." }
        }
      }
    }
  },

  // ============== BUY ==============
  bili: {
    root: "bili",
    meaning: "to buy / to sell (depending on focus)",
    notes: "Polymorphic: AF=bought, BF=sold. Root vowel 'i' is the marking for selling.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Someone is buying (the buyer is the focus).",
        forms: {
          infinitive:   { form: "magbili",     use: "To buy (infinitive)",                         example: "Magbili tayo ng tinapay. — Let's buy bread." },
          complete:     { form: "nagbili",     use: "Bought — past",                               example: "Nagbili siya ng bagong damit. — She bought new clothes." },
          progressive:  { form: "nagbibili",   use: "Currently buying",                            example: "Nagbibili sila ng pagkain. — They are buying food." },
          contemplated: { form: "magbibili",   use: "Will buy",                                    example: "Magbibili ako ng kotse. — I will buy a car." }
        }
      },
      "Actor (mang-)": {
        focus: "Actor Focus (mang- with nasal assimilation)",
        description: "Mang- prefix with nasal assimilation: the 'b' of 'bili' becomes 'm' (mangbili → mamili). 'Mamili' is the very common word for 'go shopping' / 'go buying'. Used for actions like shopping, fishing, gathering.",
        forms: {
          infinitive:   { form: "mamili",     use: "To go shopping / go buying (infinitive)",     example: "Mamili tayo ng groceries. — Let's go buy groceries." },
          complete:     { form: "namili",     use: "Went shopping / went buying (past)",          example: "Namili siya sa palengke. — She went shopping at the market." },
          progressive:  { form: "namimili",   use: "Currently shopping / buying (around)",        example: "Namimili ang nanay ng gulay. — Mom is shopping (around) for vegetables." },
          contemplated: { form: "mamimili",   use: "Will go shopping / will buy (collective)",    example: "Mamimili sila bukas. — They will go shopping tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being bought (becomes the subject).",
        forms: {
          infinitive:   { form: "bilhin",     use: "To buy (something)",                          example: "Bilhin mo ang tiket. — Buy the ticket." },
          complete:     { form: "binili",     use: "Bought (something) — past",                   example: "Binili niya ang bulaklak. — She bought the flowers." },
          progressive:  { form: "binibili",   use: "Buying (something) — ongoing",                example: "Binibili niya ngayon ang sapatos. — She is buying the shoes now." },
          contemplated: { form: "bibilhin",   use: "Will buy (something)",                        example: "Bibilhin niya ang bahay. — She will buy the house." }
        }
      },
      "Locative/Benefactive (-an)": {
        focus: "Locative / Benefactive Focus",
        description: "Buying FOR someone (beneficiary) or AT a place. Root vowel shifts to 'i' to indicate selling.",
        forms: {
          infinitive:   { form: "bilhan",     use: "To buy for/at",                               example: "Bilhan mo siya ng regalo. — Buy a gift for her." },
          complete:     { form: "binilhan",   use: "Bought for/at — past",                        example: "Binilhan niya ang bata ng laruan. — She bought a toy for the child." },
          progressive:  { form: "binibilhan", use: "Buying for/at — ongoing",                     example: "Binibilhan niya ang nanay ng bulaklak. — She is buying flowers for her mom." },
          contemplated: { form: "bibilhan",   use: "Will buy for/at",                             example: "Bibilhan niya ako ng kape. — She will buy coffee for me." }
        }
      },
      "Benefactive (i-)": {
        focus: "Benefactive Focus (Selling)",
        description: "Selling something to someone — the seller is the focus, the buyer benefits from receiving it.",
        forms: {
          infinitive:   { form: "ibili",      use: "To sell to someone",                          example: "Iibili mo sa kanya ang kotse. — Sell the car to him/her." },
          complete:     { form: "ibinili",    use: "Sold to someone — past",                      example: "Ibinili niya sa akin ang libro. — He sold the book to me." },
          progressive:  { form: "ibinibili",  use: "Selling to someone — ongoing",                example: "Ibinibili niya ang bahay sa amin. — He is selling the house to us." },
          contemplated: { form: "ibibili",    use: "Will sell to someone",                        example: "Ibibili niya sa iyo ang bisikleta. — He will sell the bike to you." }
        }
      },
      "Instrumental (ipang-)": {
        focus: "Instrumental Focus",
        description: "Use something as money / a means to buy.",
        forms: {
          infinitive:   { form: "ipambili",     use: "To use (something) to buy",                  example: "Ipambili mo ang pera sa pagkain. — Use the money to buy food." },
          complete:     { form: "ipinambili",   use: "Used (something) to buy — past",             example: "Ipinambili niya ang pera sa sapatos. — She used the money to buy shoes." },
          progressive:  { form: "ipinapambili", use: "Using (something) to buy — ongoing",         example: "Ipinapambili niya ang ipon sa kotse. — He is using his savings to buy a car." },
          contemplated: { form: "ipapambili",   use: "Will use (something) to buy",                example: "Ipapambili niya ang pera sa bahay. — He will use the money to buy a house." }
        }
      }
    }
  },

  // ============== WALK ==============
  lakad: {
    root: "lakad",
    meaning: "to walk",
    notes: "Takes mag- actor focus. Can also be um- in some uses.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the person walking.",
        forms: {
          infinitive:   { form: "maglakad",     use: "To walk",                                     example: "Maglakad tayo sa park. — Let's walk in the park." },
          complete:     { form: "naglakad",     use: "Walked — past",                               example: "Naglakad siya papunta sa school. — She walked to school." },
          progressive:  { form: "naglalakad",   use: "Currently walking / habitual walking",        example: "Naglalakad siya ngayon. — He is walking now." },
          contemplated: { form: "maglalakad",   use: "Will walk",                                   example: "Maglalakad ako bukas. — I will walk tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (um- variant)",
        description: "Less common than mag-; focuses on the walker.",
        forms: {
          infinitive:   { form: "lumakad",   use: "To walk (infinitive — um-)",                   example: "Lumakad na tayo. — Let's walk now." },
          complete:     { form: "lumakad",   use: "Walked — past",                                example: "Lumakad siya sa dilim. — She walked in the dark." },
          progressive:  { form: "lumalakad", use: "Currently walking",                            example: "Lumalakad siya sa kalsada. — She is walking on the road." },
          contemplated: { form: "lalakad",   use: "Will walk",                                    example: "Lalakad ako pauwi. — I will walk home." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Walking to/at a place; place becomes the focus.",
        forms: {
          infinitive:   { form: "lakaran",     use: "To walk on/at (a place)",                     example: "Lakaran mo ang kalsada. — Walk on the street." },
          complete:     { form: "nilakaran",   use: "Walked at/on — past",                         example: "Nilakaran niya ang tabi ng ilog. — She walked along the river." },
          progressive:  { form: "nilalakaran", use: "Walking at/on — ongoing",                     example: "Nilalakaran niya ang daan. — She is walking on the road." },
          contemplated: { form: "lalakaran",   use: "Will walk on/at",                             example: "Lalakaran niya ang kakahuyan. — She will walk through the forest." }
        }
      }
    }
  },

  // ============== GO ==============
  punta: {
    root: "punta",
    meaning: "to go (to a place)",
    notes: "Takes both mag- and um- actor focus with subtle differences.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Going somewhere — the goer is the focus.",
        forms: {
          infinitive:   { form: "magpunta",     use: "To go (planned / intentional)",               example: "Magpunta tayo sa beach. — Let's go to the beach." },
          complete:     { form: "nagpunta",     use: "Went — past",                                 example: "Nagpunta kami sa Maynila. — We went to Manila." },
          progressive:  { form: "nagpupunta",   use: "Currently going",                             example: "Nagpupunta sila sa school. — They are going to school." },
          contemplated: { form: "magpupunta",   use: "Will go",                                     example: "Magpupunta siya bukas. — He/she will go tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (um- variant)",
        description: "Going somewhere — same meaning as mag-, common in everyday speech.",
        forms: {
          infinitive:   { form: "pumunta",   use: "To go (infinitive — um-)",                     example: "Pumunta ka sa ospital. — Go to the hospital." },
          complete:     { form: "pumunta",   use: "Went — past",                                  example: "Pumunta siya sa bahay namin. — He came to our house." },
          progressive:  { form: "pumupunta", use: "Currently going",                              example: "Pumupunta siya tuwing Sabado. — He goes every Saturday." },
          contemplated: { form: "pupunta",   use: "Will go",                                      example: "Pupunta ako sa party. — I will go to the party." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Going to/at a place; the destination becomes the focus.",
        forms: {
          infinitive:   { form: "puntahan",     use: "Place to go to; to go to (a place)",         example: "Puntahan mo siya. — Go to where he/she is." },
          complete:     { form: "pinuntahan",   use: "Went to — past",                             example: "Pinuntahan niya ang ospital. — He/she went to the hospital." },
          progressive:  { form: "pinupuntahan", use: "Going to — ongoing",                         example: "Pinupuntahan niya ang park. — He/she is going to the park." },
          contemplated: { form: "pupuntahan",   use: "Will go to",                                 example: "Pupuntahan niya ang baryo. — He/she will go to the village." }
        }
      }
    }
  },

  // ============== SLEEP ==============
  tulog: {
    root: "tulog",
    meaning: "to sleep",
    notes: "Takes ma- (stative / non-intentional) or mag- (intentional — to put to sleep)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Falling asleep / being asleep — focus on the sleeper as a state.",
        forms: {
          infinitive:   { form: "matulog",    use: "To sleep (infinitive — to fall asleep)",       example: "Matulog na tayo. — Let's sleep now." },
          complete:     { form: "natulog",    use: "Slept / fell asleep — past",                   example: "Natulog siya agad. — She fell asleep immediately." },
          progressive:  { form: "natutulog",  use: "Currently sleeping",                          example: "Natutulog ang bata. — The child is sleeping." },
          contemplated: { form: "matutulog",  use: "Will sleep",                                  example: "Matutulog na siya. — He/she will sleep now." }
        }
      },
      "Actor (magpa-)": {
        focus: "Actor Focus (Causative — to put to sleep)",
        description: "Putting someone else to sleep; the sleeper is the patient. The magpa- prefix turns a stative verb into a causative one.",
        forms: {
          infinitive:   { form: "magpatulog",     use: "To put (someone) to sleep",                 example: "Magpatulog ka sa bata. — Put the child to sleep." },
          complete:     { form: "nagpatulog",     use: "Put to sleep — past",                       example: "Nagpatulog siya sa anak. — She put her child to sleep." },
          progressive:  { form: "nagpapatulog",   use: "Putting to sleep — ongoing",                example: "Nagpapatulog siya ngayon. — She is putting [someone] to sleep now." },
          contemplated: { form: "magpapatulog",   use: "Will put to sleep",                         example: "Magpapatulog siya sa kapatid. — She will put her sibling to sleep." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focus on the act of sleeping — sometimes used in fixed phrases.",
        forms: {
          infinitive:   { form: "itulog",     use: "To put to sleep (something specific)",         example: "Itulog mo na ang bata. — Put the child to sleep." },
          complete:     { form: "itinulog",   use: "Put to sleep — past",                         example: "Itinulog niya ang bata. — She put the child to sleep." },
          progressive:  { form: "itinutulog", use: "Putting to sleep — ongoing",                  example: "Itinutulog niya ang bata ngayon. — She is putting the child to sleep." },
          contemplated: { form: "itutulog",   use: "Will put to sleep",                           example: "Itutulog niya ang bata mamaya. — She will put the child to sleep later." }
        }
      }
    }
  },

  // ============== SAY / TELL ==============
  sabi: {
    root: "sabi",
    meaning: "to say / to tell",
    notes: "Often appears with pag-...-an for 'tell someone'",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Saying / telling — speaker is the focus.",
        forms: {
          infinitive:   { form: "magsabi",     use: "To say / tell",                               example: "Magsabi ka ng totoo. — Tell the truth." },
          complete:     { form: "nagsabi",     use: "Said / told — past",                          example: "Nagsabi siya ng tungkol sa plano. — He said something about the plan." },
          progressive:  { form: "nagsasabi",   use: "Currently saying / telling",                  example: "Nagsasabi siya ng kanyang saloobin. — He is saying his thoughts." },
          contemplated: { form: "magsasabi",   use: "Will say / tell",                             example: "Magsasabi siya ng importante. — She will say something important." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "What is being said becomes the focus.",
        forms: {
          infinitive:   { form: "isabi",     use: "To say (something) to someone",                 example: "Isabi mo sa kanya. — Say it to him/her." },
          complete:     { form: "inasabi",   use: "Said (something) to someone — past",           example: "Inasabi niya ang lihim. — He said the secret." },
          progressive:  { form: "inasasabi", use: "Saying (something) to someone — ongoing",      example: "Inasasabi niya ang balita. — He is saying the news." },
          contemplated: { form: "isasabi",   use: "Will say (something) to someone",              example: "Isasabi niya ang totoo. — He will say the truth." }
        }
      },
      "Locative/Benefactive (pag-...-an)": {
        focus: "Benefactive / Directional",
        description: "Telling someone specifically (pag- prefix + -an suffix).",
        forms: {
          infinitive:   { form: "sabihan",     use: "To tell someone (specific person)",            example: "Sabihan mo siya. — Tell him/her." },
          complete:     { form: "sinabihan",   use: "Told someone — past",                         example: "Sinabihan niya ang guro. — He told the teacher." },
          progressive:  { form: "sinasabihan", use: "Telling someone — ongoing",                   example: "Sinasabihan niya ang nanay. — She is telling her mom." },
          contemplated: { form: "sasabihan",   use: "Will tell someone",                           example: "Sasabihan niya ang kapatid. — He will tell the sibling." }
        }
      }
    }
  },

  // ============== WRITE ==============
  sulat: {
    root: "sulat",
    meaning: "to write",
    notes: "Takes both mag- and um- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Writing — the writer is the focus.",
        forms: {
          infinitive:   { form: "magsulat",     use: "To write",                                   example: "Magsulat ka ng liham. — Write a letter." },
          complete:     { form: "nagsulat",     use: "Wrote — past",                                example: "Nagsulat siya ng tula. — He wrote a poem." },
          progressive:  { form: "nagsusulat",   use: "Currently writing",                           example: "Nagsusulat siya ngayon. — He is writing now." },
          contemplated: { form: "magsusulat",   use: "Will write",                                  example: "Magsusulat siya bukas. — He will write tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (um-)",
        description: "Writing — alternative actor focus form.",
        forms: {
          infinitive:   { form: "sumulat",   use: "To write",                                    example: "Sumulat ka ng mensahe. — Write a message." },
          complete:     { form: "sumulat",   use: "Wrote — past",                                 example: "Sumulat siya ng talaarawan. — She wrote a diary." },
          progressive:  { form: "sumusulat", use: "Currently writing",                            example: "Sumusulat siya ngayon. — She is writing now." },
          contemplated: { form: "susulat",   use: "Will write",                                   example: "Susulat siya mamaya. — She will write later." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focus on what is being written (becomes the subject).",
        forms: {
          infinitive:   { form: "isulat",     use: "To write (something specific)",               example: "Isulat mo ang pangalan mo. — Write your name." },
          complete:     { form: "isinulat",   use: "Wrote (something) — past",                    example: "Isinulat niya ang liham. — He wrote the letter." },
          progressive:  { form: "isinusulat", use: "Writing (something) — ongoing",               example: "Isinusulat niya ang tula. — He is writing the poem." },
          contemplated: { form: "isusulat",   use: "Will write (something)",                      example: "Isusulat niya ang kuwento. — He will write the story." }
        }
      },
      "Locative/Benefactive (-an)": {
        focus: "Locative / Benefactive Focus",
        description: "Writing on something / for someone — the surface or recipient is the focus.",
        forms: {
          infinitive:   { form: "sulatan",     use: "To write on / write to (someone)",            example: "Sulatan mo ang papel. — Write on the paper." },
          complete:     { form: "sinulatan",   use: "Wrote on / wrote to — past",                  example: "Sinulatan niya ang kaibigan. — She wrote to her friend." },
          progressive:  { form: "sinusulatan", use: "Writing on / to — ongoing",                   example: "Sinusulatan niya ang journal. — She is writing in the journal." },
          contemplated: { form: "susulatan",   use: "Will write on / to",                          example: "Susulatan niya ang lupon. — He will write to the committee." }
        }
      }
    }
  },

  // ============== READ ==============
  basa: {
    root: "basa",
    meaning: "to read / to wet",
    notes: "Homonymous: 'basa' can mean 'read' (mag- focus) or 'wet' (ma- focus)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus (read)",
        description: "Reading — the reader is the focus.",
        forms: {
          infinitive:   { form: "magbasa",     use: "To read",                                    example: "Magbasa ka ng libro. — Read a book." },
          complete:     { form: "nagbasa",     use: "Read — past",                                 example: "Nagbasa siya ng nobela. — He read a novel." },
          progressive:  { form: "nagbabasa",   use: "Currently reading",                           example: "Nagbabasa siya ngayon. — She is reading now." },
          contemplated: { form: "magbabasa",   use: "Will read",                                   example: "Magbabasa ako mamaya. — I will read later." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being read (becomes the subject).",
        forms: {
          infinitive:   { form: "basahin",     use: "To read (something specific)",                example: "Basahin mo ang libro. — Read the book." },
          complete:     { form: "binasa",      use: "Read (something) — past",                    example: "Binasa niya ang artikulo. — He read the article." },
          progressive:  { form: "binabasa",    use: "Reading (something) — ongoing",               example: "Binabasa niya ang diyaryo. — He is reading the newspaper." },
          contemplated: { form: "babasa?in",   use: "Will read (something)",                       example: "Babasa?in niya ang mga dokumento. — She will read the documents." }
        }
      },
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — wet)",
        description: "When 'basa' means 'wet' — focus on the wet state.",
        forms: {
          infinitive:   { form: "mabasa",     use: "To get wet",                                  example: "Mabasa ka sa ulan. — You will get wet in the rain." },
          complete:     { form: "nabasa",     use: "Got wet — past",                              example: "Nabasa ang papel. — The paper got wet." },
          progressive:  { form: "nababasa",   use: "Getting wet — ongoing",                       example: "Nababasa ang sahig. — The floor is getting wet." },
          contemplated: { form: "mababasa",   use: "Will get wet",                                example: "Mababasa ang libro. — The book will get wet." }
        }
      }
    }
  },

  // ============== CLEAN ==============
  linis: {
    root: "linis",
    meaning: "to clean",
    notes: "Takes mag- actor focus. Can also be -um- in some contexts.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Cleaning — the cleaner is the focus.",
        forms: {
          infinitive:   { form: "maglinis",     use: "To clean",                                   example: "Maglinis ka ng bahay. — Clean the house." },
          complete:     { form: "naglinis",     use: "Cleaned — past",                              example: "Naglinis sila ng kuwarto. — They cleaned the room." },
          progressive:  { form: "naglilinis",   use: "Currently cleaning",                          example: "Naglilinis siya ngayon. — She is cleaning now." },
          contemplated: { form: "maglilinis",   use: "Will clean",                                  example: "Maglilinis ako bukas. — I will clean tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being cleaned (becomes the subject).",
        forms: {
          infinitive:   { form: "linisin",     use: "To clean (something)",                        example: "Linisin mo ang mesa. — Clean the table." },
          complete:     { form: "nilinis",     use: "Cleaned (something) — past",                  example: "Nilinis niya ang banyo. — She cleaned the bathroom." },
          progressive:  { form: "nililinis",   use: "Cleaning (something) — ongoing",              example: "Nililinis niya ang kusina. — She is cleaning the kitchen." },
          contemplated: { form: "lilinisin",   use: "Will clean (something)",                      example: "Lilinisin niya ang hardin. — He will clean the garden." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Cleaning a place — the place is the focus.",
        forms: {
          infinitive:   { form: "linisan",     use: "To clean (a place)",                          example: "Linisan mo ang bahay. — Clean the house (place).'" },
          complete:     { form: "nilinisan",   use: "Cleaned (a place) — past",                    example: "Nilinisan niya ang opisina. — She cleaned the office." },
          progressive:  { form: "nililisan",   use: "Cleaning (a place) — ongoing",                example: "Nililisan niya ang kalsada. — He is cleaning the street." },
          contemplated: { form: "lilisan",     use: "Will clean (a place)",                        example: "Lilisan niya ang paaralan. — He will clean the school." }
        }
      }
    }
  },

  // ============== STUDY ==============
  aral: {
    root: "aral",
    meaning: "to study / lesson",
    notes: "Vowel-initial root — reduplication patterns differ.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Studying — the student is the focus.",
        forms: {
          infinitive:   { form: "mag-aral",     use: "To study",                                  example: "Mag-aral ka nang mabuti. — Study well." },
          complete:     { form: "nag-aral",     use: "Studied — past",                             example: "Nag-aral siya ng matematika. — He studied math." },
          progressive:  { form: "nagaaral",     use: "Currently studying",                         example: "Nagaaral siya ngayon. — He is studying now." },
          contemplated: { form: "mag-aaral",    use: "Will study",                                 example: "Mag-aaral ako sa kolehiyo. — I will study in college." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being studied.",
        forms: {
          infinitive:   { form: "aralin",     use: "To study (something)",                        example: "Aralin mo ang leksyon. — Study the lesson." },
          complete:     { form: "inaral",     use: "Studied (something) — past",                  example: "Inaral niya ang kanyang aralin. — He studied his lesson." },
          progressive:  { form: "inaaral",    use: "Studying (something) — ongoing",              example: "Inaaral niya ngayon ang agham. — He is studying science now." },
          contemplated: { form: "aaralin",    use: "Will study (something)",                      example: "Aaralin niya ang musika. — She will study music." }
        }
      }
    }
  },

  // ============== GIVE ==============
  bigay: {
    root: "bigay",
    meaning: "to give",
    notes: "Takes mag- (intentional) and um- (less common)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Giving — the giver is the focus.",
        forms: {
          infinitive:   { form: "magbigay",     use: "To give",                                   example: "Magbigay ka ng regalo. — Give a gift." },
          complete:     { form: "nagbigay",     use: "Gave — past",                                example: "Nagbigay siya ng bulaklak. — She gave flowers." },
          progressive:  { form: "nagbibigay",   use: "Currently giving",                           example: "Nagbibigay siya ngayon. — He is giving [something] now." },
          contemplated: { form: "magbibigay",   use: "Will give",                                  example: "Magbibigay ako ng sorpresa. — I will give a surprise." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being given.",
        forms: {
          infinitive:   { form: "bigyan",     use: "To give to someone (specific recipient)",     example: "Bigyan mo siya ng tubig. — Give him/her water." },
          complete:     { form: "binigyan",   use: "Gave to someone — past",                     example: "Binigyan niya ako ng libro. — She gave me a book." },
          progressive:  { form: "binibigyan", use: "Giving to someone — ongoing",                example: "Binibigyan niya ng candy ang mga bata. — She is giving candy to the children." },
          contemplated: { form: "bibigyan",   use: "Will give to someone",                       example: "Bibigyan niya ako ng regalo. — He will give me a gift." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus (transferred item)",
        description: "Focus on the item being given (becomes the subject of giving).",
        forms: {
          infinitive:   { form: "ibigay",     use: "To give (something specific)",               example: "Ibigay mo sa kanya. — Give it to him/her." },
          complete:     { form: "ibinigay",   use: "Gave (something) — past",                    example: "Ibinigay niya ang regalo. — He gave the gift." },
          progressive:  { form: "ibinibigay", use: "Giving (something) — ongoing",               example: "Ibinibigay niya ang pera. — She is giving the money." },
          contemplated: { form: "ibibigay",   use: "Will give (something)",                      example: "Ibibigay niya ang singsing. — He will give the ring." }
        }
      }
    }
  },

  // ============== TAKE / GET ==============
  kuha: {
    root: "kuha",
    meaning: "to take / to get / to fetch",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Taking / getting — the taker is the focus.",
        forms: {
          infinitive:   { form: "kumuha",   use: "To take / get",                                example: "Kumuha ka ng tubig. — Get some water." },
          complete:     { form: "kumuha",   use: "Took / got — past",                            example: "Kumuha siya ng payong. — He took an umbrella." },
          progressive:  { form: "kumukuha", use: "Currently taking",                             example: "Kumukuha siya ng pagkain. — He is getting food." },
          contemplated: { form: "kukuha",   use: "Will take",                                    example: "Kukuha ako ng ticket. — I will get a ticket." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being taken (becomes the subject).",
        forms: {
          infinitive:   { form: "kunin",     use: "To take (something specific)",                example: "Kunin mo ang payong. — Take the umbrella." },
          complete:     { form: "kinuha",    use: "Took (something) — past",                     example: "Kinuha niya ang pera. — She took the money." },
          progressive:  { form: "kinukuha",  use: "Taking (something) — ongoing",                example: "Kinukuha niya ngayon ang libro. — He is taking the book now." },
          contemplated: { form: "kukunin",   use: "Will take (something)",                       example: "Kukunin niya ang susi. — He will take the key." }
        }
      },
      "Benefactive (i-)": {
        focus: "Benefactive Focus",
        description: "Taking / getting for someone — the beneficiary is the focus.",
        forms: {
          infinitive:   { form: "ikuha",     use: "To take (something) for someone",             example: "Ikuha mo sa kanya ang libro. — Get the book for him/her." },
          complete:     { form: "ikinuha",   use: "Took (something) for someone — past",          example: "Ikinuha niya sa bata ang tubig. — She got the water for the child." },
          progressive:  { form: "ikinukuha", use: "Taking (something) for someone — ongoing",    example: "Ikinukuha niya ang ticket sa amin. — He is getting the ticket for us." },
          contemplated: { form: "ikukuha",   use: "Will take (something) for someone",           example: "Ikukuha niya ang pagkain sa pamilya. — She will get the food for the family." }
        }
      }
    }
  },

  // ============== SEE ==============
  kita: {
    root: "kita",
    meaning: "to see",
    notes: "Takes um- and nakakita (potential) for actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Seeing — the one who sees is the focus.",
        forms: {
          infinitive:   { form: "kumita",   use: "To see",                                       example: "Kumita ka ng doktor. — See a doctor." },
          complete:     { form: "kumita",   use: "Saw — past",                                    example: "Kumita siya ng multo. — She saw a ghost." },
          progressive:  { form: "kumikita", use: "Currently seeing",                              example: "Kumikita siya ng sine. — He is watching a movie." },
          contemplated: { form: "kikita",   use: "Will see",                                      example: "Kikita siya ng dentista. — He will see a dentist." }
        }
      },
      "Actor (maka-)": {
        focus: "Actor Focus (Potential)",
        description: "Potential / ability to see; emphasizes capability.",
        forms: {
          infinitive:   { form: "makakita",   use: "To be able to see",                          example: "Makakita ka ng magandang tanawin. — You will see a beautiful view." },
          complete:     { form: "nakakita",   use: "Was able to see / saw (potential)",           example: "Nakakita siya ng aksidente. — He saw an accident." },
          progressive:  { form: "nakakakita", use: "Currently able to see",                       example: "Nakakakita siya ng malinaw. — He is seeing clearly." },
          contemplated: { form: "makakakita", use: "Will be able to see",                         example: "Makakakita ka ng pagbabago. — You will see a change." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being seen.",
        forms: {
          infinitive:   { form: "kitain",     use: "To see (something)",                         example: "Kitain mo ang ganda. — See the beauty." },
          complete:     { form: "kinita",     use: "Saw (something) — past",                     example: "Kinita niya ang buwan. — He saw the moon." },
          progressive:  { form: "kinikita",   use: "Seeing (something) — ongoing",               example: "Kinikita niya ang bahay. — He is seeing the house." },
          contemplated: { form: "kikitain",   use: "Will see (something)",                       example: "Kikitain niya ang liwanag. — He will see the light." }
        }
      }
    }
  },

  // ============== HEAR ==============
  rinig: {
    root: "rinig",
    meaning: "to hear",
    notes: "Takes ma- (sensory / stative) actor focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Sensory)",
        description: "Hearing — the listener is the focus; emphasizes the sensory experience.",
        forms: {
          infinitive:   { form: "marinig",     use: "To hear (infinitive)",                      example: "Marinig mo ba? — Can you hear?" },
          complete:     { form: "narinig",     use: "Heard — past",                              example: "Narinig ko ang kanta. — I heard the song." },
          progressive:  { form: "naririnig",   use: "Currently hearing",                         example: "Naririnig ko ang alon. — I can hear the waves." },
          contemplated: { form: "maririnig",   use: "Will hear",                                 example: "Maririnig mo ang balita. — You will hear the news." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being heard.",
        forms: {
          infinitive:   { form: "rinigin",     use: "To hear (something)",                       example: "Rinigin mo ang tawag. — Hear the call." },
          complete:     { form: "rinig",       use: "Heard (something) — past",                  example: "Rinig niya ang sigaw. — She heard the shout." },
          progressive:  { form: "rinig",       use: "Hearing (something) — ongoing",             example: "Rinig niya ang musika. — She is hearing the music." },
          contemplated: { form: "ririgin",     use: "Will hear (something)",                     example: "Ririgin niya ang tawag. — He will hear the call." }
        }
      }
    }
  },

  // ============== KNOW ==============
  alam: {
    root: "alam",
    meaning: "to know (a fact)",
    notes: "Often used in stative / ma- focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Knowing — the knower is the focus; emphasizes the state of knowing.",
        forms: {
          infinitive:   { form: "maalam",     use: "To know (become aware of)",                  example: "Maalam mo ang sagot. — You will know the answer." },
          complete:     { form: "naalam",     use: "Knew / found out — past",                    example: "Naalam niya ang balita. — She found out the news." },
          progressive:  { form: "naaalam",    use: "Currently knowing",                          example: "Naaalam niya ang lahat. — She knows everything." },
          contemplated: { form: "maaalam",    use: "Will know",                                  example: "Maaalam mo ang katotohanan. — You will know the truth." }
        }
      }
    }
  },

  // ============== RUN ==============
  takbo: {
    root: "takbo",
    meaning: "to run",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Running — the runner is the focus.",
        forms: {
          infinitive:   { form: "tumakbo",    use: "To run",                                     example: "Tumakbo ka sa park. — Run in the park." },
          complete:     { form: "tumakbo",    use: "Ran — past",                                  example: "Tumakbo siya papunta. — He ran over there." },
          progressive:  { form: "tumutakbo",  use: "Currently running",                          example: "Tumutakbo siya ngayon. — He is running now." },
          contemplated: { form: "tatakbo",    use: "Will run",                                    example: "Tatakbo ako sa marathon. — I will run in the marathon." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Running — alternative actor focus form.",
        forms: {
          infinitive:   { form: "magtakbo",     use: "To run",                                   example: "Magtakbo tayo sa umaga. — Let's run in the morning." },
          complete:     { form: "nagtakbo",     use: "Ran — past",                               example: "Nagtakbo siya sa umaga. — He ran in the morning." },
          progressive:  { form: "nagtatakbo",   use: "Currently running",                        example: "Nagtatakbo siya ngayon. — She is running now." },
          contemplated: { form: "magtatakbo",   use: "Will run",                                  example: "Magtatakbo ako bukas. — I will run tomorrow." }
        }
      }
    }
  },

  // ============== SING ==============
  awit: {
    root: "awit",
    meaning: "to sing / song",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Singing — the singer is the focus.",
        forms: {
          infinitive:   { form: "umawit",    use: "To sing",                                     example: "Umawit ka ng kanta. — Sing a song." },
          complete:     { form: "umawit",    use: "Sang — past",                                  example: "Umawit siya sa pista. — He sang at the fiesta." },
          progressive:  { form: "umaawit",   use: "Currently singing",                            example: "Umaawit siya ngayon. — He is singing now." },
          contemplated: { form: "aawit",     use: "Will sing",                                    example: "Aawit siya sa concert. — She will sing at the concert." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Singing — alternative form, common in everyday speech.",
        forms: {
          infinitive:   { form: "mag-awit",     use: "To sing",                                  example: "Mag-awit ka para sa akin. — Sing for me." },
          complete:     { form: "nag-awit",     use: "Sang — past",                              example: "Nag-awit siya sa baryo. — He sang in the village." },
          progressive:  { form: "nagaawit",     use: "Currently singing",                        example: "Nagaawit siya sa palengke. — He is singing in the market." },
          contemplated: { form: "mag-aawit",    use: "Will sing",                                example: "Mag-aawit ako sa kasal. — I will sing at the wedding." }
        }
      }
    }
  },

  // ============== DANCE ==============
  sayaw: {
    root: "sayaw",
    meaning: "to dance / dance",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Dancing — the dancer is the focus.",
        forms: {
          infinitive:   { form: "sumayaw",    use: "To dance",                                  example: "Sumayaw ka sa musika. — Dance to the music." },
          complete:     { form: "sumayaw",    use: "Danced — past",                               example: "Sumayaw siya sa pista. — She danced at the fiesta." },
          progressive:  { form: "sumasayaw",  use: "Currently dancing",                            example: "Sumasayaw siya ngayon. — She is dancing now." },
          contemplated: { form: "sasayaw",    use: "Will dance",                                   example: "Sasayaw siya bukas. — She will dance tomorrow." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Dancing — alternative form.",
        forms: {
          infinitive:   { form: "magsayaw",     use: "To dance",                                example: "Magsayaw tayo. — Let's dance." },
          complete:     { form: "nagsayaw",     use: "Danced — past",                           example: "Nagsayaw sila sa kasal. — They danced at the wedding." },
          progressive:  { form: "nagsasayaw",   use: "Currently dancing",                       example: "Nagsasayaw sila ngayon. — They are dancing now." },
          contemplated: { form: "magsasayaw",   use: "Will dance",                              example: "Magsasayaw ako sa party. — I will dance at the party." }
        }
      }
    }
  },

  // ============== OPEN ==============
  bukas: {
    root: "bukas",
    meaning: "to open / tomorrow",
    notes: "Homonymous: 'bukas' as verb means 'open', as time word means 'tomorrow'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Opening — the opener is the focus.",
        forms: {
          infinitive:   { form: "magbukas",     use: "To open",                                example: "Magbukas ka ng pinto. — Open the door." },
          complete:     { form: "nagbukas",     use: "Opened — past",                          example: "Nagbukas siya ng regalo. — She opened the gift." },
          progressive:  { form: "nagbubukas",   use: "Currently opening",                      example: "Nagbubukas siya ngayon. — He is opening [something] now." },
          contemplated: { form: "magbubukas",   use: "Will open",                              example: "Magbubukas ako ng negosyo. — I will open a business." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being opened.",
        forms: {
          infinitive:   { form: "buksan",     use: "To open (something specific)",                example: "Buksan mo ang bintana. — Open the window." },
          complete:     { form: "binuksan",   use: "Opened (something) — past",                  example: "Binuksan niya ang libro. — She opened the book." },
          progressive:  { form: "binubuksan", use: "Opening (something) — ongoing",              example: "Binubuksan niya ang pinto. — He is opening the door." },
          contemplated: { form: "bubuksan",   use: "Will open (something)",                       example: "Bubuksan niya ang kahon. — He will open the box." }
        }
      }
    }
  },

  // ============== CLOSE ==============
  sara: {
    root: "sara",
    meaning: "to close",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Closing — the one closing is the focus.",
        forms: {
          infinitive:   { form: "sumara",   use: "To close",                                    example: "Sumara ka ng pinto. — Close the door." },
          complete:     { form: "sumara",   use: "Closed — past",                                example: "Sumara ang tindahan. — The store closed." },
          progressive:  { form: "sumasara", use: "Currently closing",                            example: "Sumasara ang pinto. — The door is closing." },
          contemplated: { form: "sasara",   use: "Will close",                                   example: "Sasara ang palengke. — The market will close." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being closed.",
        forms: {
          infinitive:   { form: "sarhin",     use: "To close (something specific)",            example: "Sarhin mo ang bintana. — Close the window." },
          complete:     { form: "sinara",     use: "Closed (something) — past",                 example: "Sinara niya ang libro. — She closed the book." },
          progressive:  { form: "sinasara",   use: "Closing (something) — ongoing",             example: "Sinasara niya ang pinto. — He is closing the door." },
          contemplated: { form: "sasarhin",   use: "Will close (something)",                    example: "Sasarhin niya ang tindahan. — He will close the store." }
        }
      }
    }
  },

  // ============== PLAY ==============
  laro: {
    root: "laro",
    meaning: "to play / game",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Playing — the player is the focus.",
        forms: {
          infinitive:   { form: "maglaro",     use: "To play",                                example: "Maglaro tayo ng bola. — Let's play ball." },
          complete:     { form: "naglaro",     use: "Played — past",                          example: "Naglaro sila kagabi. — They played last night." },
          progressive:  { form: "naglalaro",   use: "Currently playing",                      example: "Naglalaro siya ngayon. — He is playing now." },
          contemplated: { form: "maglalaro",   use: "Will play",                              example: "Maglalaro ako bukas. — I will play tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (um- variant)",
        description: "Playing — alternative form.",
        forms: {
          infinitive:   { form: "lumaro",   use: "To play",                                     example: "Lumaro ka sa labas. — Play outside." },
          complete:     { form: "lumaro",   use: "Played — past",                                example: "Lumaro siya ng basketball. — He played basketball." },
          progressive:  { form: "lumalaro", use: "Currently playing",                            example: "Lumalaro siya ngayon. — She is playing now." },
          contemplated: { form: "lalaro",   use: "Will play",                                    example: "Lalaro ako mamaya. — I will play later." }
        }
      }
    }
  },

  // ============== SWIM ==============
  langoy: {
    root: "langoy",
    meaning: "to swim",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Swimming — the swimmer is the focus.",
        forms: {
          infinitive:   { form: "lumangoy",    use: "To swim",                                  example: "Lumangoy ka sa dagat. — Swim in the sea." },
          complete:     { form: "lumangoy",    use: "Swam — past",                              example: "Lumangoy siya sa ilog. — He swam in the river." },
          progressive:  { form: "lumalangoy",  use: "Currently swimming",                       example: "Lumalangoy siya ngayon. — He is swimming now." },
          contemplated: { form: "lalangoy",    use: "Will swim",                                example: "Lalangoy ako sa pool. — I will swim in the pool." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Swimming — alternative form.",
        forms: {
          infinitive:   { form: "maglangoy",     use: "To swim",                                example: "Maglangoy tayo sa beach. — Let's swim at the beach." },
          complete:     { form: "naglangoy",     use: "Swam — past",                            example: "Naglangoy sila sa dagat. — They swam in the sea." },
          progressive:  { form: "naglalangoy",   use: "Currently swimming",                     example: "Naglalangoy sila ngayon. — They are swimming now." },
          contemplated: { form: "maglalangoy",   use: "Will swim",                              example: "Maglalangoy ako bukas. — I will swim tomorrow." }
        }
      }
    }
  },

  // ============== TEACH ==============
  turo: {
    root: "turo",
    meaning: "to teach / to point",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Teaching — the teacher is the focus.",
        forms: {
          infinitive:   { form: "magturo",     use: "To teach",                                example: "Magturo ka sa mga bata. — Teach the children." },
          complete:     { form: "nagturo",     use: "Taught — past",                           example: "Nagturo siya ng matematika. — She taught math." },
          progressive:  { form: "nagtuturo",   use: "Currently teaching",                      example: "Nagtuturo siya ngayon. — He is teaching now." },
          contemplated: { form: "magtuturo",   use: "Will teach",                              example: "Magtuturo ako sa school. — I will teach at school." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being taught.",
        forms: {
          infinitive:   { form: "turuin",     use: "To teach (something)",                      example: "Turuin mo siya. — Teach him/her." },
          complete:     { form: "tinuro",     use: "Taught (something) — past",                 example: "Tinuro niya ang kanta. — She taught the song." },
          progressive:  { form: "tinuturo",   use: "Teaching (something) — ongoing",            example: "Tinuturo niya ang sayaw. — She is teaching the dance." },
          contemplated: { form: "tuturuin",   use: "Will teach (something)",                    example: "Tuturuin niya ang sayaw. — She will teach the dance." }
        }
      }
    }
  },

  // ============== HELP ==============
  tulong: {
    root: "tulong",
    meaning: "to help",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Helping — the helper is the focus.",
        forms: {
          infinitive:   { form: "tumulong",    use: "To help",                                  example: "Tumulong ka sa nanay. — Help your mom." },
          complete:     { form: "tumulong",    use: "Helped — past",                             example: "Tumulong siya sa bata. — He helped the child." },
          progressive:  { form: "tumutulong",  use: "Currently helping",                          example: "Tumutulong siya ngayon. — He is helping now." },
          contemplated: { form: "tutulong",    use: "Will help",                                  example: "Tutulong ako sa bahay. — I will help at home." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Helping — alternative form.",
        forms: {
          infinitive:   { form: "magtulong",     use: "To help",                                 example: "Magtulong tayo sa kapwa. — Let's help others." },
          complete:     { form: "nagtulong",     use: "Helped — past",                           example: "Nagtulong sila sa bayan. — They helped the town." },
          progressive:  { form: "nagtutulong",   use: "Currently helping",                       example: "Nagtutulong sila ngayon. — They are helping now." },
          contemplated: { form: "magtutulong",   use: "Will help",                               example: "Magtutulong ako sa party. — I will help at the party." }
        }
      },
      "Benefactive (i-)": {
        focus: "Benefactive Focus",
        description: "Helping someone — focusing on the beneficiary.",
        forms: {
          infinitive:   { form: "itulong",     use: "To help (with something specific)",         example: "Itulong mo sa kanya. — Help him/her with it." },
          complete:     { form: "itinulong",   use: "Helped (with something) — past",            example: "Itinulong niya ang mensahe. — He delivered the message." },
          progressive:  { form: "itinutulong", use: "Helping (with something) — ongoing",       example: "Itinutulong niya ang liham. — He is delivering the letter." },
          contemplated: { form: "itutulong",   use: "Will help (with something)",               example: "Itutulong niya ang mensahe. — He will deliver the message." }
        }
      }
    }
  },

  // ============== FIGHT ==============
  away: {
    root: "away",
    meaning: "to fight / quarrel",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Fighting — the fighter is the focus.",
        forms: {
          infinitive:   { form: "mag-away",     use: "To fight / quarrel",                     example: "Mag-away ka ba sa kanya? — Will you fight with him?" },
          complete:     { form: "nag-away",     use: "Fought / quarreled — past",              example: "Nag-away sila kagabi. — They quarreled last night." },
          progressive:  { form: "nagaaway",     use: "Currently fighting",                    example: "Nagaaway sila ngayon. — They are fighting now." },
          contemplated: { form: "mag-aaway",    use: "Will fight",                            example: "Mag-aaway sila bukas. — They will fight tomorrow." }
        }
      }
    }
  },

  // ============== CATCH ==============
  huli: {
    root: "huli",
    meaning: "to catch / to be late / last",
    notes: "Polymorphic: AF=catch, ma-=be late",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Catching — the catcher is the focus.",
        forms: {
          infinitive:   { form: "humuli",   use: "To catch",                                  example: "Humuli ka ng bola. — Catch the ball." },
          complete:     { form: "humuli",   use: "Caught — past",                               example: "Humuli siya ng isda. — He caught a fish." },
          progressive:  { form: "humuhuli", use: "Currently catching",                            example: "Humuhuli siya ngayon. — He is catching [something] now." },
          contemplated: { form: "huhuli",   use: "Will catch",                                    example: "Huhuli ako ng babaeng magnanakaw. — I will catch the thief." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being caught.",
        forms: {
          infinitive:   { form: "hulihin",     use: "To catch (something specific)",          example: "Hulihin mo ang magnanakaw. — Catch the thief." },
          complete:     { form: "hinuli",      use: "Caught (something) — past",              example: "Hinuli niya ang bola. — She caught the ball." },
          progressive:  { form: "hinuhuli",    use: "Catching (something) — ongoing",         example: "Hinuhuli niya ang ibon. — She is catching the bird." },
          contemplated: { form: "huhulihin",   use: "Will catch (something)",                 example: "Huhulihin niya ang kuneho. — He will catch the rabbit." }
        }
      }
    }
  },

  // ============== PUT / PLACE ==============
  lagay: {
    root: "lagay",
    meaning: "to put / to place / to wear (accessory)",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Putting — the person putting is the focus.",
        forms: {
          infinitive:   { form: "maglagay",     use: "To put / place",                         example: "Maglagay ka ng libro sa mesa. — Put a book on the table." },
          complete:     { form: "naglagay",     use: "Put — past",                              example: "Naglagay siya ng bulaklak. — She put flowers." },
          progressive:  { form: "naglalagay",   use: "Currently putting",                       example: "Naglalagay siya ng libro ngayon. — He is putting a book now." },
          contemplated: { form: "maglalagay",   use: "Will put",                                example: "Maglalagay ako ng pagkain. — I will put food." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focus on what is being put (becomes the subject).",
        forms: {
          infinitive:   { form: "ilagay",     use: "To put (something specific)",              example: "Ilagay mo sa mesa. — Put it on the table." },
          complete:     { form: "inilagay",   use: "Put (something) — past",                  example: "Inilagay niya ang libro. — He put the book." },
          progressive:  { form: "inilalagay", use: "Putting (something) — ongoing",           example: "Inilalagay niya ang pagkain. — She is putting the food." },
          contemplated: { form: "ilalagay",   use: "Will put (something)",                    example: "Ilalagay niya ang bulaklak. — He will put the flowers." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Putting on/at a place — the place is the focus.",
        forms: {
          infinitive:   { form: "lagyan",     use: "To put on/at; to fill",                   example: "Lagyan mo ng asin. — Put some salt on it." },
          complete:     { form: "nilagyan",   use: "Put on/at — past",                        example: "Nilagyan niya ng tubig ang pitsel. — She filled the pitcher with water." },
          progressive:  { form: "nilalagyan", use: "Putting on/at — ongoing",                 example: "Nilalagyan niya ng pagkain ang plato. — He is putting food on the plate." },
          contemplated: { form: "lalagyan",   use: "Will put on/at",                          example: "Lalagyan niya ng pintura ang bahay. — He will paint the house." }
        }
      }
    }
  },

  // ============== LEAVE ==============
  alis: {
    root: "alis",
    meaning: "to leave / to remove",
    notes: "Vowel-initial root",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Leaving — the one leaving is the focus.",
        forms: {
          infinitive:   { form: "umalis",    use: "To leave",                                 example: "Umalis ka na. — Leave now." },
          complete:     { form: "umalis",    use: "Left — past",                              example: "Umalis siya kagabi. — He left last night." },
          progressive:  { form: "umaalis",   use: "Currently leaving",                        example: "Umaalis siya ngayon. — He is leaving now." },
          contemplated: { form: "aalis",     use: "Will leave",                               example: "Aalis siya bukas. — She will leave tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being removed.",
        forms: {
          infinitive:   { form: "alisin",     use: "To remove (something specific)",         example: "Alisin mo ang kalat. — Remove the mess." },
          complete:     { form: "inalis",     use: "Removed (something) — past",             example: "Inalis niya ang libro. — He removed the book." },
          progressive:  { form: "inaalis",    use: "Removing (something) — ongoing",         example: "Inaalis niya ang kalat. — She is removing the mess." },
          contemplated: { form: "aalisin",    use: "Will remove (something)",                example: "Aalisin niya ang dumi. — He will remove the dirt." }
        }
      }
    }
  },

  // ============== TALK / SPEAK ==============
  salita: {
    root: "salita",
    meaning: "to talk / to speak / word",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Talking — the speaker is the focus.",
        forms: {
          infinitive:   { form: "magsalita",     use: "To talk / speak",                      example: "Magsalita ka ng totoo. — Speak the truth." },
          complete:     { form: "nagsalita",     use: "Talked / spoke — past",                 example: "Nagsalita siya sa miting. — He spoke at the meeting." },
          progressive:  { form: "nagsasalita",   use: "Currently talking",                     example: "Nagsasalita siya ngayon. — She is talking now." },
          contemplated: { form: "magsasalita",   use: "Will talk",                             example: "Magsasalita siya bukas. — He will speak tomorrow." }
        }
      },
      "Actor (-um-)": {
        focus: "Actor Focus (um- variant)",
        description: "Talking — alternative form.",
        forms: {
          infinitive:   { form: "sumalita",   use: "To speak",                                example: "Sumalita ka sa lupon. — Speak to the committee." },
          complete:     { form: "sumalita",   use: "Spoke — past",                             example: "Sumalita siya sa harap. — He spoke in front." },
          progressive:  { form: "sumasalita", use: "Currently speaking",                        example: "Sumasalita siya ngayon. — He is speaking now." },
          contemplated: { form: "sasalita",   use: "Will speak",                                example: "Sasalita ako bukas. — I will speak tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focus on what is being said (becomes the subject).",
        forms: {
          infinitive:   { form: "isalita",     use: "To say (something specific)",           example: "Isalita mo ang balita. — Tell the news." },
          complete:     { form: "inasalita",   use: "Said (something) — past",               example: "Inasalita niya ang katotohanan. — He said the truth." },
          progressive:  { form: "inasasalita", use: "Saying (something) — ongoing",           example: "Inasasalita niya ang kuwento. — He is telling the story." },
          contemplated: { form: "isasalita",   use: "Will say (something)",                   example: "Isasalita niya ang plano. — He will tell the plan." }
        }
      }
    }
  },

  // ============== WAIT ==============
  hintay: {
    root: "hintay",
    meaning: "to wait",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Waiting — the one waiting is the focus.",
        forms: {
          infinitive:   { form: "humintay",    use: "To wait",                                example: "Humintay ka sa akin. — Wait for me." },
          complete:     { form: "humintay",    use: "Waited — past",                          example: "Humintay siya ng oras. — She waited an hour." },
          progressive:  { form: "humihintay",  use: "Currently waiting",                      example: "Humihintay siya ngayon. — She is waiting now." },
          contemplated: { form: "hihintay",    use: "Will wait",                              example: "Hihintay kita. — I will wait for you." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Waiting — alternative form.",
        forms: {
          infinitive:   { form: "maghintay",     use: "To wait",                              example: "Maghintay ka nang matiyaga. — Wait patiently." },
          complete:     { form: "naghintay",     use: "Waited — past",                        example: "Naghintay siya ng kaibigan. — She waited for her friend." },
          progressive:  { form: "naghihintay",   use: "Currently waiting",                    example: "Naghihintay siya ngayon. — He is waiting now." },
          contemplated: { form: "maghihintay",   use: "Will wait",                            example: "Maghihintay ako sa iyo. — I will wait for you." }
        }
      }
    }
  },

  // ============== WANT ==============
  gusto: {
    root: "gusto",
    meaning: "to want / to like",
    notes: "Mostly used as a stative expression; takes mag- for inchoative 'to come to want'",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Wanting / liking — the wanter is the focus.",
        forms: {
          infinitive:   { form: "magkagusto",   use: "To come to want",                       example: "Magkagusto ka ng cake. — You will come to want cake." },
          complete:     { form: "nagkagusto",   use: "Came to want — past",                   example: "Nagkagusto siya ng kotse. — He came to want a car." },
          progressive:  { form: "nagkakagusto", use: "Coming to want — ongoing",              example: "Nagkakagusto siya ng pagkain. — He is coming to want food." },
          contemplated: { form: "magkakagusto", use: "Will come to want",                     example: "Magkakagusto ka ng libro. — You will come to want a book." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being wanted.",
        forms: {
          infinitive:   { form: "gustuhin",   use: "To want (something specific)",            example: "Gustuhin mo ang totoo. — Want the truth." },
          complete:     { form: "gustuhin",   use: "Wanted (something) — past",                example: "Gustuhin mo ang tagumpay. — Want success." },
          progressive:  { form: "ginugusto",  use: "Wanting (something) — ongoing",             example: "Ginugusto niya ang pagkain. — She wants the food." },
          contemplated: { form: "gugustuhin", use: "Will want (something)",                     example: "Gugustuhin niya ang pera. — She will want the money." }
        }
      }
    }
  },

  // ============== WASH ==============
  hugas: {
    root: "hugas",
    meaning: "to wash (dishes)",
    notes: "Takes both um- and mag- actor focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Washing — the washer is the focus.",
        forms: {
          infinitive:   { form: "maghugas",     use: "To wash",                               example: "Maghugas ka ng pinggan. — Wash the dishes." },
          complete:     { form: "naghugas",     use: "Washed — past",                         example: "Naghugas siya ng kotse. — He washed the car." },
          progressive:  { form: "naghuhugas",   use: "Currently washing",                     example: "Naghuhugas siya ngayon. — She is washing now." },
          contemplated: { form: "maghuhugas",   use: "Will wash",                             example: "Maghuhugas ako mamaya. — I will wash later." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being washed (becomes the subject).",
        forms: {
          infinitive:   { form: "hugasan",   use: "To wash (something specific)",             example: "Hugasan mo ang plato. — Wash the plate." },
          complete:     { form: "hinugasan", use: "Washed (something) — past",                example: "Hinugasan niya ang mukha. — She washed her face." },
          progressive:  { form: "hinuhugasan", use: "Washing (something) — ongoing",           example: "Hinuhugasan niya ang mga pinggan. — She is washing the dishes." },
          contemplated: { form: "huhugasan", use: "Will wash (something)",                     example: "Huhugasan niya ang kotse. — He will wash the car." }
        }
      }
    }
  },

  // ============== EXIST / HAVE (magka- showcase) ==============
  roon: {
    root: "roon",
    meaning: "to be (somewhere) / to have / to exist",
    notes: "Canonical example of the magka- prefix. 'Magkaroon' = 'to have / to come into being'.",
    conjugations: {
      "Actor (magka-)": {
        focus: "Actor Focus (Existential / Possessive)",
        description: "Focuses on existence, possession, or coming into being. The classic example is 'magkaroon' — meaning 'to have' or 'there to be'.",
        forms: {
          infinitive:   { form: "magkaroon",   use: "To have / to come into being",              example: "Magkaroon ng pagkain. — There will be food. / There is food to have." },
          complete:     { form: "nagkaroon",   use: "Had / came into being (past)",              example: "Nagkaroon ng away. — There was a fight." },
          progressive:  { form: "nagkakaroon", use: "Coming into being / having (ongoing)",      example: "Nagkakaroon ng problema. — A problem is arising." },
          contemplated: { form: "magkakaroon", use: "Will have / will come into being",          example: "Magkakaroon ng pagbabago. — There will be a change." }
        }
      },
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — to be at a place)",
        description: "The stative ma- focus: being at / located in a place.",
        forms: {
          infinitive:   { form: "maroon",    use: "To be (located somewhere)",                  example: "Maroon tayo sa bahay. — We will be at home." },
          complete:     { form: "naroon",    use: "Was (at a place) — past",                    example: "Naroon siya kagabi. — She was there last night." },
          progressive:  { form: "narooroon", use: "Being (at a place) — ongoing",               example: "Narooroon siya ngayon. — She is there now." },
          contemplated: { form: "maroroon",  use: "Will be (at a place)",                       example: "Maroroon siya bukas. — She will be there tomorrow." }
        }
      }
    }
  },

  // ============== COMMUNICATION ==============
  tanong: {
    root: "tanong",
    meaning: "to ask (a question)",
    notes: "Polymorphic: AF=ask, BF=ask on behalf of",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The asker is the focus.",
        forms: {
          infinitive:   { form: "magtanong",   use: "To ask (a question)",                         example: "Magtanong ka sa guro. — Ask the teacher." },
          complete:     { form: "nagtanong",   use: "Asked — past",                                example: "Nagtanong siya ng pangalan. — He asked the name." },
          progressive:  { form: "nagtatanong", use: "Currently asking",                            example: "Nagtatanong ang bata. — The child is asking." },
          contemplated: { form: "magtatanong", use: "Will ask",                                    example: "Magtatanong siya bukas. — She will ask tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The question being asked is the focus.",
        forms: {
          infinitive:   { form: "tanungin",   use: "To ask (a question / something)",              example: "Tanungin mo siya. — Ask him/her." },
          complete:     { form: "tinanong",   use: "Asked (a question) — past",                   example: "Tinanong niya ang presyo. — She asked the price." },
          progressive:  { form: "tinatatanong", use: "Asking (a question) — ongoing",             example: "Tinatatanong niya ang direksyon. — He is asking for directions." },
          contemplated: { form: "tatanungin", use: "Will ask (a question)",                       example: "Tatanungin niya ang guro bukas. — He will ask the teacher tomorrow." }
        }
      },
      "Locative/Benefactive (-an)": {
        focus: "Locative / Benefactive Focus",
        description: "Asking someone specifically — the person being asked is the focus.",
        forms: {
          infinitive:   { form: "tanungan",   use: "To ask (someone)",                            example: "Tanungan mo siya. — Ask him/her." },
          complete:     { form: "tinanungan", use: "Asked (someone) — past",                      example: "Tinanungan niya ang guro. — He asked the teacher." },
          progressive:  { form: "tinatanguan", use: "Asking (someone) — ongoing",                  example: "Tinatanguan niya ang mga bata. — He is asking the children." },
          contemplated: { form: "tatanungan", use: "Will ask (someone)",                          example: "Tatanungan niya ang nanay. — He will ask the mother." }
        }
      }
    }
  },

  sagot: {
    root: "sagot",
    meaning: "to answer",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The answerer is the focus.",
        forms: {
          infinitive:   { form: "magsagot",     use: "To answer",                                  example: "Magsagot ka ng maayos. — Answer properly." },
          complete:     { form: "nagsagot",     use: "Answered — past",                            example: "Nagsagot siya agad. — He answered immediately." },
          progressive:  { form: "nagsasagot",   use: "Currently answering",                        example: "Nagsasagot siya ngayon. — He is answering now." },
          contemplated: { form: "magsasagot",   use: "Will answer",                                example: "Magsasagot siya bukas. — He will answer tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The question/answer being addressed is the focus.",
        forms: {
          infinitive:   { form: "sagutin",     use: "To answer (something)",                       example: "Sagutin mo ang tanong. — Answer the question." },
          complete:     { form: "sinagot",     use: "Answered (something) — past",                example: "Sinagot niya ang tanong. — He answered the question." },
          progressive:  { form: "sinasagot",   use: "Answering (something) — ongoing",            example: "Sinasagot niya ang mga tanong. — He is answering the questions." },
          contemplated: { form: "sasagutin",   use: "Will answer (something)",                    example: "Sasagutin niya bukas. — He will answer it tomorrow." }
        }
      }
    }
  },

  isip: {
    root: "isip",
    meaning: "to think",
    notes: "Takes both um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The thinker is the focus.",
        forms: {
          infinitive:   { form: "umisip",    use: "To think",                                     example: "Umisip ka munang mabuti. — Think carefully first." },
          complete:     { form: "umisip",    use: "Thought — past",                                example: "Umisip siya bago sumagot. — He thought before answering." },
          progressive:  { form: "umiisip",   use: "Currently thinking",                            example: "Umiisip siya ngayon. — He is thinking now." },
          contemplated: { form: "iisip",     use: "Will think",                                    example: "Iisip ko pa. — I will think about it." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Alternative focus for thinking.",
        forms: {
          infinitive:   { form: "mag-isip",     use: "To think",                                  example: "Mag-isip ka muna. — Think first." },
          complete:     { form: "nag-isip",     use: "Thought — past",                             example: "Nag-isip siya nang malalim. — He thought deeply." },
          progressive:  { form: "nagiisip",     use: "Currently thinking",                        example: "Nagiisip siya ngayon. — He is thinking now." },
          contemplated: { form: "mag-iisip",    use: "Will think",                                example: "Mag-iisip ako bukas. — I will think tomorrow." }
        }
      }
    }
  },

  // ============== MOVEMENT / TRANSFER ==============
  sundo: {
    root: "sundo",
    meaning: "to fetch / to pick up (someone)",
    notes: "Takes -in and -an",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person fetching is the focus.",
        forms: {
          infinitive:   { form: "magsundo",     use: "To fetch / pick up",                        example: "Magsundo ka ng bata. — Fetch the child." },
          complete:     { form: "nagsundo",     use: "Fetched — past",                             example: "Nagsundo siya ng bata. — He fetched the child." },
          progressive:  { form: "nagsusundo",   use: "Currently fetching",                        example: "Nagsusundo siya ngayon. — He is fetching now." },
          contemplated: { form: "magsusundo",   use: "Will fetch",                                example: "Magsusundo siya bukas. — He will fetch tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The person being fetched is the focus.",
        forms: {
          infinitive:   { form: "sundin",     use: "To fetch (someone)",                          example: "Sundin mo siya. — Fetch him/her." },
          complete:     { form: "sinundo",    use: "Fetched (someone) — past",                   example: "Sinundo niya ang bata. — He fetched the child." },
          progressive:  { form: "sinusundo",  use: "Fetching (someone) — ongoing",               example: "Sinusundo niya ang nanay. — He is fetching his mom." },
          contemplated: { form: "susundin",   use: "Will fetch (someone)",                        example: "Susundin niya ang kaibigan. — He will fetch the friend." }
        }
      },
      "Locative/Benefactive (-an)": {
        focus: "Locative / Benefactive Focus",
        description: "Fetching AT a place or FOR someone.",
        forms: {
          infinitive:   { form: "sundan",     use: "To fetch at / for",                          example: "Sundan mo siya sa school. — Fetch her at school." },
          complete:     { form: "sinundan",   use: "Fetched at/for — past",                      example: "Sinundan niya ang bata sa school. — He fetched the child at school." },
          progressive:  { form: "sinusundan", use: "Fetching at/for — ongoing",                   example: "Sinusundan niya ang bata. — He is fetching for the child." },
          contemplated: { form: "susundan",   use: "Will fetch at/for",                          example: "Susundan niya ang nanay. — He will fetch for the mom." }
        }
      }
    }
  },

  dala: {
    root: "dala",
    meaning: "to bring / to carry",
    notes: "Takes both um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The carrier is the focus.",
        forms: {
          infinitive:   { form: "magdala",     use: "To bring / carry",                          example: "Magdala ka ng payong. — Bring an umbrella." },
          complete:     { form: "nagdala",     use: "Brought — past",                            example: "Nagdala siya ng regalo. — She brought a gift." },
          progressive:  { form: "nagdala",     use: "Currently bringing",                       example: "Nagdala siya ngayon. — She is bringing now." },
          contemplated: { form: "magdadala",   use: "Will bring",                                example: "Magdadala siya ng pagkain. — She will bring food." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The thing being brought is the focus.",
        forms: {
          infinitive:   { form: "dalhin",     use: "To bring (something)",                       example: "Dalhin mo ang payong. — Bring the umbrella." },
          complete:     { form: "dinala",     use: "Brought (something) — past",                 example: "Dinala niya ang regalo. — He brought the gift." },
          progressive:  { form: "dinadala",   use: "Bringing (something) — ongoing",            example: "Dinadala niya ang bayong. — He is bringing the basket." },
          contemplated: { form: "dadalhin",   use: "Will bring (something)",                     example: "Dadalhin niya ang pagkain. — He will bring the food." }
        }
      }
    }
  },

  iwan: {
    root: "iwan",
    meaning: "to leave (behind)",
    notes: "Takes i- focus for 'leave something behind'",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person leaving is the focus.",
        forms: {
          infinitive:   { form: "magiwan",     use: "To leave (someone/something behind)",        example: "Magiwan ka ng mensahe. — Leave a message." },
          complete:     { form: "nagiwan",     use: "Left — past",                                example: "Nagiwan siya ng sulat. — He left a letter." },
          progressive:  { form: "nagiwiwan",   use: "Currently leaving (something) behind",       example: "Nagiwiwan siya ng mensahe. — He is leaving messages." },
          contemplated: { form: "magiwiwan",   use: "Will leave behind",                          example: "Magiwiwan siya ng pagkain. — He will leave food." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "The thing being left behind is the focus.",
        forms: {
          infinitive:   { form: "iwan",     use: "To leave (something) behind",                example: "Iwan mo ang susi. — Leave the key." },
          complete:     { form: "iniwan",   use: "Left (something) behind — past",             example: "Iniwan niya ang pera. — He left the money." },
          progressive:  { form: "iniiwan",  use: "Leaving (something) behind — ongoing",       example: "Iniiwan niya ang pagkain. — He is leaving the food." },
          contemplated: { form: "iiwan",    use: "Will leave (something) behind",              example: "Iiwan niya ang regalo. — He will leave the gift." }
        }
      }
    }
  },

  balik: {
    root: "balik",
    meaning: "to return (to a place)",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The person returning is the focus.",
        forms: {
          infinitive:   { form: "bumalik",    use: "To return (infinitive)",                    example: "Bumalik ka na. — Come back now." },
          complete:     { form: "bumalik",    use: "Returned — past",                            example: "Bumalik siya kagabi. — He returned last night." },
          progressive:  { form: "bumabalik",  use: "Currently returning",                        example: "Bumabalik siya ngayon. — He is returning now." },
          contemplated: { form: "babalik",    use: "Will return",                                example: "Babalik ako bukas. — I will return tomorrow." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Alternative focus for returning.",
        forms: {
          infinitive:   { form: "magbalik",     use: "To return",                                 example: "Magbalik ka na. — Return now." },
          complete:     { form: "nagbalik",     use: "Returned — past",                           example: "Nagbalik siya sa bahay. — She returned home." },
          progressive:  { form: "nagbabalik",   use: "Currently returning",                       example: "Nagbabalik siya ngayon. — She is returning now." },
          contemplated: { form: "magbabalik",   use: "Will return",                               example: "Magbabalik ako bukas. — I will return tomorrow." }
        }
      }
    }
  },

  // ============== EMOTIONS / STATES ==============
  tawa: {
    root: "tawa",
    meaning: "to laugh",
    notes: "Takes both um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The laugher is the focus.",
        forms: {
          infinitive:   { form: "tumawa",    use: "To laugh",                                    example: "Tumawa ka naman. — Laugh a little." },
          complete:     { form: "tumawa",    use: "Laughed — past",                               example: "Tumawa siya sa biro. — He laughed at the joke." },
          progressive:  { form: "tumatawa",  use: "Currently laughing",                           example: "Tumatawa siya ngayon. — He is laughing now." },
          contemplated: { form: "tatawa",    use: "Will laugh",                                   example: "Tatawa siya pag nalaman. — He will laugh when he finds out." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Alternative focus for laughing.",
        forms: {
          infinitive:   { form: "magtawa",     use: "To laugh",                                  example: "Magtawa ka sa kalokohan. — Laugh at the nonsense." },
          complete:     { form: "nagtawa",     use: "Laughed — past",                            example: "Nagtawa siya kagabi. — He laughed last night." },
          progressive:  { form: "nagtatawa",   use: "Currently laughing",                        example: "Nagtatawa sila ngayon. — They are laughing now." },
          contemplated: { form: "magtatawa",   use: "Will laugh",                                example: "Magtatawa sila bukas. — They will laugh tomorrow." }
        }
      }
    }
  },

  iyak: {
    root: "iyak",
    meaning: "to cry",
    notes: "Takes both um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The crier is the focus.",
        forms: {
          infinitive:   { form: "umiyak",    use: "To cry",                                      example: "Umiyak ang bata. — The child cried." },
          complete:     { form: "umiyak",    use: "Cried — past",                                example: "Umiyak siya kagabi. — She cried last night." },
          progressive:  { form: "umiiyak",   use: "Currently crying",                            example: "Umiiyak siya ngayon. — She is crying now." },
          contemplated: { form: "iiyak",     use: "Will cry",                                    example: "Iiyak siya kapag umalis ka. — She will cry when you leave." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Alternative focus for crying.",
        forms: {
          infinitive:   { form: "mag-iyak",     use: "To cry",                                   example: "Mag-iyak ka kung gusto mo. — Cry if you want." },
          complete:     { form: "nag-iyak",     use: "Cried — past",                             example: "Nag-iyak siya kagabi. — He cried last night." },
          progressive:  { form: "nagiyak",      use: "Currently crying",                        example: "Nagiyak siya ngayon. — He is crying now." },
          contemplated: { form: "mag-iiyak",    use: "Will cry",                                example: "Mag-iiyak siya bukas. — He will cry tomorrow." }
        }
      }
    }
  },

  takot: {
    root: "takot",
    meaning: "to fear / to be afraid",
    notes: "Stative (ma-) focus — expresses a state of fear",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of fear is the focus.",
        forms: {
          infinitive:   { form: "matakot",    use: "To become afraid",                            example: "Matakot ka sa dilim. — You'll be afraid of the dark." },
          complete:     { form: "natakot",    use: "Was/became afraid — past",                    example: "Natakot siya sa aso. — He was afraid of the dog." },
          progressive:  { form: "natatakot",  use: "Currently afraid",                            example: "Natatakot siya ngayon. — He is afraid now." },
          contemplated: { form: "matatakot",  use: "Will become afraid",                          example: "Matatakot siya pag nalaman. — He will become afraid when he finds out." }
        }
      }
    }
  },

  galit: {
    root: "galit",
    meaning: "to be angry",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of anger is the focus.",
        forms: {
          infinitive:   { form: "magalit",    use: "To become angry",                             example: "Magalit ka ba? — Will you get angry?" },
          complete:     { form: "nagalit",    use: "Became angry — past",                         example: "Nagalit siya sa akin. — He got angry at me." },
          progressive:  { form: "nagagalit",  use: "Currently angry",                             example: "Nagagalit siya ngayon. — He is angry now." },
          contemplated: { form: "magagalit",  use: "Will become angry",                           example: "Magagalit siya pag nalaman. — He will get angry when he finds out." }
        }
      }
    }
  },

  // ============== COMMON DAILY VERBS ==============
  gawa: {
    root: "gawa",
    meaning: "to make / to do",
    notes: "Takes both um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The maker / doer is the focus.",
        forms: {
          infinitive:   { form: "magawa",     use: "To make / do",                              example: "Magawa ka ng assignment. — Do your assignment." },
          complete:     { form: "nagawa",     use: "Made / did — past",                          example: "Nagawa niya ang cake. — She made the cake." },
          progressive:  { form: "naggawa",    use: "Currently making / doing",                   example: "Naggawa siya ng bahay. — He is building a house." },
          contemplated: { form: "magagawa",   use: "Will make / do",                             example: "Magagawa niya bukas. — He will do it tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The thing being made is the focus.",
        forms: {
          infinitive:   { form: "gawin",     use: "To make / do (something)",                    example: "Gawin mo ng maayos. — Do it properly." },
          complete:     { form: "ginawa",    use: "Made / did (something) — past",               example: "Ginawa niya ang cake. — He made the cake." },
          progressive:  { form: "ginagawa",  use: "Making / doing (something) — ongoing",       example: "Ginagawa niya ang bahay. — He is making the house." },
          contemplated: { form: "gagawin",   use: "Will make / do (something)",                  example: "Gagawin niya bukas. — He will do it tomorrow." }
        }
      }
    }
  },

  hanap: {
    root: "hanap",
    meaning: "to search / to look for",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The searcher is the focus.",
        forms: {
          infinitive:   { form: "maghanap",     use: "To search / look for",                     example: "Maghanap ka ng trabaho. — Look for a job." },
          complete:     { form: "naghanap",     use: "Searched — past",                           example: "Naghanap siya ng pera. — He looked for money." },
          progressive:  { form: "naghahanap",   use: "Currently searching",                      example: "Naghahanap siya ngayon. — He is looking now." },
          contemplated: { form: "maghahanap",   use: "Will search",                              example: "Maghahanap siya bukas. — He will look tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The thing being searched for is the focus.",
        forms: {
          infinitive:   { form: "hanapin",     use: "To search for (something)",                  example: "Hanapin mo ang susi. — Look for the key." },
          complete:     { form: "hinanap",     use: "Searched for (something) — past",            example: "Hinanap niya ang pera. — He searched for the money." },
          progressive:  { form: "hinahanap",   use: "Searching for (something) — ongoing",       example: "Hinahanap niya ang libro. — He is looking for the book." },
          contemplated: { form: "hahanapin",   use: "Will search for (something)",               example: "Hahanapin niya ang susi. — He will look for the key." }
        }
      }
    }
  },

  bayad: {
    root: "bayad",
    meaning: "to pay",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The payer is the focus.",
        forms: {
          infinitive:   { form: "magbayad",     use: "To pay",                                  example: "Magbayad ka ng utang. — Pay your debt." },
          complete:     { form: "nagbayad",     use: "Paid — past",                              example: "Nagbayad siya ng bayad. — He paid the bill." },
          progressive:  { form: "nagbabayad",   use: "Currently paying",                         example: "Nagbabayad siya ngayon. — He is paying now." },
          contemplated: { form: "magbabayad",   use: "Will pay",                                 example: "Magbabayad siya bukas. — He will pay tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The bill / amount being paid is the focus.",
        forms: {
          infinitive:   { form: "bayaran",     use: "To pay (a bill / someone)",                 example: "Bayaran mo ang utang. — Pay the debt." },
          complete:     { form: "binayaran",   use: "Paid (something) — past",                   example: "Binayaran niya ang bayad. — He paid the bill." },
          progressive:  { form: "binabayaran", use: "Paying (something) — ongoing",              example: "Binabayaran niya ang upa. — He is paying the rent." },
          contemplated: { form: "babayaran",   use: "Will pay (something)",                      example: "Babayaran niya ang tuition. — He will pay tuition." }
        }
      }
    }
  },

  trabaho: {
    root: "trabaho",
    meaning: "to work",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The worker is the focus.",
        forms: {
          infinitive:   { form: "magtrabaho",     use: "To work",                                example: "Magtrabaho ka nang mabuti. — Work hard." },
          complete:     { form: "nagtrabaho",     use: "Worked — past",                          example: "Nagtrabaho siya kagabi. — She worked last night." },
          progressive:  { form: "nagtatrabaho",   use: "Currently working",                      example: "Nagtatrabaho siya ngayon. — She is working now." },
          contemplated: { form: "magtatrabaho",   use: "Will work",                              example: "Magtatrabaho siya bukas. — She will work tomorrow." }
        }
      }
    }
  },

  // ============== POSITION / POSTURE ==============
  upo: {
    root: "upo",
    meaning: "to sit",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The sitter is the focus.",
        forms: {
          infinitive:   { form: "umupo",    use: "To sit",                                      example: "Umupo ka sa silya. — Sit in the chair." },
          complete:     { form: "umupo",    use: "Sat — past",                                   example: "Umupo siya sa sahig. — She sat on the floor." },
          progressive:  { form: "umuupo",   use: "Currently sitting",                            example: "Umuupo siya ngayon. — She is sitting now." },
          contemplated: { form: "uupo",     use: "Will sit",                                     example: "Uupo siya mamaya. — She will sit later." }
        }
      }
    }
  },

  tayo: {
    root: "tayo",
    meaning: "to stand",
    notes: "Takes -um-",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The stander is the focus. Note: 'tayo' is also the inclusive 'we' pronoun — context disambiguates.",
        forms: {
          infinitive:   { form: "tumayo",    use: "To stand",                                   example: "Tumayo ka. — Stand up." },
          complete:     { form: "tumayo",    use: "Stood — past",                                example: "Tumayo siya sa may Pinto. — He stood by the door." },
          progressive:  { form: "tumitayo",  use: "Currently standing",                          example: "Tumitayo siya ngayon. — He is standing now." },
          contemplated: { form: "tatayo",    use: "Will stand",                                  example: "Tatayo siya bukas. — He will stand tomorrow." }
        }
      }
    }
  },

  higa: {
    root: "higa",
    meaning: "to lie down",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person lying down is the focus.",
        forms: {
          infinitive:   { form: "maghinga",   use: "To lie down (informal) / to rest",          example: "Maghinga ka muna. — Rest a bit first." },
          complete:     { form: "naghinga",   use: "Lay down / rested — past",                   example: "Naghinga siya kagabi. — She lay down last night." },
          progressive:  { form: "naghihinga", use: "Currently lying down / resting",             example: "Naghihinga siya ngayon. — She is resting now." },
          contemplated: { form: "maghihinga", use: "Will lie down / rest",                       example: "Maghihinga siya bukas. — She will rest tomorrow." }
        }
      }
    }
  },

  // ============== WAKING ==============
  gising: {
    root: "gising",
    meaning: "to wake up",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The waker is the focus.",
        forms: {
          infinitive:   { form: "maggising",     use: "To wake up (intentional)",                example: "Maggising ka ng maaga. — Wake up early." },
          complete:     { form: "naggising",     use: "Woke up — past",                          example: "Naggising siya ng 6. — He woke up at 6." },
          progressive:  { form: "naggigising",   use: "Currently waking up",                     example: "Naggigising siya ngayon. — He is waking up now." },
          contemplated: { form: "maggigising",   use: "Will wake up",                            example: "Maggigising siya bukas. — He will wake up tomorrow." }
        }
      },
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — to be awake)",
        description: "Stative form — being awake.",
        forms: {
          infinitive:   { form: "magising",    use: "To wake up (stative)",                      example: "Magising ka sa alarm. — Wake up to the alarm." },
          complete:     { form: "nagising",    use: "Woke up — past",                            example: "Nagising siya kagabi. — He woke up last night." },
          progressive:  { form: "nagigising",  use: "Currently awake / waking up",               example: "Nagigising siya ngayon. — He is waking up now." },
          contemplated: { form: "magigising",  use: "Will be awake",                             example: "Magigising siya bukas. — He will be awake tomorrow." }
        }
      }
    }
  },

  // ============== DIRECTION / MOVEMENT ==============
  pasok: {
    root: "pasok",
    meaning: "to enter / to go in",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The person entering is the focus.",
        forms: {
          infinitive:   { form: "pumasok",   use: "To enter",                                   example: "Pumasok ka sa bahay. — Enter the house." },
          complete:     { form: "pumasok",   use: "Entered — past",                              example: "Pumasok siya sa kwarto. — He entered the room." },
          progressive:  { form: "pumapasok", use: "Currently entering",                          example: "Pumapasok siya ngayon. — He is entering now." },
          contemplated: { form: "pasok",     use: "Will enter",                                  example: "Pasok siya bukas. — He will enter tomorrow." }
        }
      }
    }
  },

  labas: {
    root: "labas",
    meaning: "to go out / to exit",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The person going out is the focus.",
        forms: {
          infinitive:   { form: "lumabas",   use: "To go out / exit",                            example: "Lumabas ka ng bahay. — Go out of the house." },
          complete:     { form: "lumabas",   use: "Went out — past",                              example: "Lumabas siya kagabi. — She went out last night." },
          progressive:  { form: "lumabas",   use: "Currently going out",                          example: "Lumabas siya ngayon. — She is going out now." },
          contemplated: { form: "lalabas",   use: "Will go out",                                  example: "Lalabas siya bukas. — She will go out tomorrow." }
        }
      }
    }
  },

  akyat: {
    root: "akyat",
    meaning: "to go up / to climb",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The climber is the focus.",
        forms: {
          infinitive:   { form: "umakyat",   use: "To go up / climb",                            example: "Umakyat ka sa bubong. — Climb up to the roof." },
          complete:     { form: "umakyat",   use: "Went up — past",                               example: "Umakyat siya sa hagdan. — She went up the stairs." },
          progressive:  { form: "umaakyat",  use: "Currently going up",                           example: "Umaakyat siya ngayon. — She is going up now." },
          contemplated: { form: "aakyat",    use: "Will go up",                                   example: "Aakyat siya bukas. — She will go up tomorrow." }
        }
      }
    }
  },

  baba: {
    root: "baba",
    meaning: "to go down / to descend",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The person going down is the focus.",
        forms: {
          infinitive:   { form: "bumaba",    use: "To go down / descend",                        example: "Bumaba ka ng hagdan. — Go down the stairs." },
          complete:     { form: "bumaba",    use: "Went down — past",                            example: "Bumaba siya kagabi. — He went down last night." },
          progressive:  { form: "bumababa",  use: "Currently going down",                         example: "Bumababa siya ngayon. — He is going down now." },
          contemplated: { form: "bababa",    use: "Will go down",                                 example: "Bababa siya bukas. — He will go down tomorrow." }
        }
      }
    }
  },

  // ============== COMMUNICATION (more) ==============
  tawag: {
    root: "tawag",
    meaning: "to call",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The caller is the focus.",
        forms: {
          infinitive:   { form: "tumawag",   use: "To call (phone)",                             example: "Tumawag ka sa akin. — Call me." },
          complete:     { form: "tumawag",   use: "Called — past",                                example: "Tumawag siya kagabi. — He called last night." },
          progressive:  { form: "tumatawag", use: "Currently calling",                            example: "Tumatawag siya ngayon. — He is calling now." },
          contemplated: { form: "tatawag",   use: "Will call",                                    example: "Tatawag siya bukas. — He will call tomorrow." }
        }
      }
    }
  },

  // ============== DAILY ACTIONS ==============
  hatid: {
    root: "hatid",
    meaning: "to deliver / to drop off / to escort",
    notes: "Takes i- focus",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The deliverer / escort is the focus.",
        forms: {
          infinitive:   { form: "maghatid",     use: "To deliver / drop off / escort",          example: "Maghatid ka ng bata. — Drop off the child." },
          complete:     { form: "naghatid",     use: "Delivered / dropped off — past",            example: "Naghatid siya ng bata. — She dropped off the child." },
          progressive:  { form: "naghahatid",   use: "Currently delivering",                     example: "Naghahatid siya ngayon. — She is delivering now." },
          contemplated: { form: "maghahatid",   use: "Will deliver",                              example: "Maghahatid siya bukas. — She will deliver tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "The thing being delivered is the focus.",
        forms: {
          infinitive:   { form: "ihatid",     use: "To deliver (something) / to drop (someone) off", example: "Ihatid mo ang bata. — Drop off the child." },
          complete:     { form: "inihatid",   use: "Delivered (something) — past",               example: "Inihatid niya ang bata. — She dropped off the child." },
          progressive:  { form: "inihahatid", use: "Delivering (something) — ongoing",           example: "Inihahatid niya ang package. — She is delivering the package." },
          contemplated: { form: "ihahatid",   use: "Will deliver (something)",                   example: "Ihahatid niya ang regalo. — She will deliver the gift." }
        }
      }
    }
  },

  usap: {
    root: "usap",
    meaning: "to talk / to discuss / to chat",
    notes: "Takes -um- and mag-. Reciprocal: mag-usapan (talk to each other)",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The talker is the focus.",
        forms: {
          infinitive:   { form: "usap",     use: "To talk / discuss (colloquial)",              example: "Usap tayo mamaya. — Let's talk later." },
          complete:     { form: "usap",     use: "Talked / discussed — past",                   example: "Usap nila kagabi. — They talked last night." },
          progressive:  { form: "uusap",    use: "Currently talking",                           example: "Uusap sila ngayon. — They are talking now." },
          contemplated: { form: "uusap",    use: "Will talk",                                   example: "Uusap sila bukas. — They will talk tomorrow." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "Alternative focus for talking.",
        forms: {
          infinitive:   { form: "mag-usap",     use: "To talk / discuss",                        example: "Mag-usap tayo. — Let's talk." },
          complete:     { form: "nag-usap",     use: "Talked / discussed — past",                example: "Nag-usap sila kagabi. — They talked last night." },
          progressive:  { form: "naguusap",     use: "Currently talking",                       example: "Naguusap sila ngayon. — They are talking now." },
          contemplated: { form: "maguusap",     use: "Will talk",                               example: "Maguusap sila bukas. — They will talk tomorrow." }
        }
      },
      "Reciprocal (mag-...-an)": {
        focus: "Reciprocal / Mutual Focus",
        description: "Talking to each other (mutual). Common for group discussions and negotiations.",
        forms: {
          infinitive:   { form: "mag-usapan",     use: "To talk to each other (infinitive)",    example: "Mag-usapan tayo mamaya. — Let's talk to each other later." },
          complete:     { form: "nag-usapan",     use: "Talked to each other — past",            example: "Nag-usapan sila. — They talked to each other." },
          progressive:  { form: "naguusapan",     use: "Talking to each other (ongoing)",        example: "Naguusapan sila ngayon. — They are talking to each other now." },
          contemplated: { form: "maguusapan",     use: "Will talk to each other",                example: "Maguusapan sila bukas. — They will talk to each other tomorrow." }
        }
      }
    }
  },

  // ============== MORE COMMUNICATION ==============
  paalam: {
    root: "paalam",
    meaning: "to say goodbye",
    notes: "Often used as 'magpaalam' (to say goodbye formally) or 'paalam na' (goodbye now)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person saying goodbye is the focus.",
        forms: {
          infinitive:   { form: "magpaalam",     use: "To say goodbye",                          example: "Magpaalam ka na. — Say goodbye now." },
          complete:     { form: "nagpaalam",     use: "Said goodbye — past",                     example: "Nagpaalam siya kagabi. — He said goodbye last night." },
          progressive:  { form: "nagpapaalam",   use: "Currently saying goodbye",                example: "Nagpapaalam siya ngayon. — He is saying goodbye now." },
          contemplated: { form: "magpapaalam",   use: "Will say goodbye",                        example: "Magpapaalam siya bukas. — He will say goodbye tomorrow." }
        }
      }
    }
  },

  tawad: {
    root: "tawad",
    meaning: "to forgive / to reduce (price)",
    notes: "Polymorphic: AF=forgive, OF=reduce price",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The forgiver is the focus.",
        forms: {
          infinitive:   { form: "magtawad",     use: "To forgive / to reduce",                  example: "Magtawad ka sa kanya. — Forgive him/her." },
          complete:     { form: "nagtawad",     use: "Forgave — past",                          example: "Nagtawad siya sa kanya. — He forgave him." },
          progressive:  { form: "nagtatawad",   use: "Currently forgiving",                     example: "Nagtatawad siya ngayon. — He is forgiving now." },
          contemplated: { form: "magtatawad",   use: "Will forgive",                            example: "Magtatawad siya bukas. — He will forgive tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The person/sin being forgiven is the focus.",
        forms: {
          infinitive:   { form: "tawirin",     use: "To forgive (someone/something)",           example: "Tawirin mo siya. — Forgive him/her." },
          complete:     { form: "tinawad",     use: "Forgave (someone) — past",                example: "Tinawad niya ang kasalanan. — He forgave the sin." },
          progressive:  { form: "tinatawad",   use: "Forgiving (someone) — ongoing",           example: "Tinatawad niya ang mga kasalanan. — He is forgiving the sins." },
          contemplated: { form: "tatatawad",   use: "Will forgive (someone)",                  example: "Tatatawad niya ang lahat. — He will forgive all." }
        }
      }
    }
  },

  amin: {
    root: "amin",
    meaning: "to admit / to confess",
    notes: "Polymorphic",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The confessor is the focus.",
        forms: {
          infinitive:   { form: "umamin",    use: "To admit / confess",                          example: "Umamin ka sa katotohanan. — Admit the truth." },
          complete:     { form: "umamin",    use: "Admitted — past",                              example: "Umamin siya sa ginawa niya. — He admitted what he did." },
          progressive:  { form: "umaamin",   use: "Currently admitting",                          example: "Umaamin siya ngayon. — He is admitting now." },
          contemplated: { form: "aamin",     use: "Will admit",                                   example: "Aamin siya bukas. — He will admit tomorrow." }
        }
      }
    }
  },

  // ============== EMOTIONS / STATES ==============
  tuwa: {
    root: "tuwa",
    meaning: "to be happy / to be glad",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of happiness is the focus.",
        forms: {
          infinitive:   { form: "matuwa",    use: "To become happy / glad",                       example: "Matuwa ka sa regalo. — You'll be happy with the gift." },
          complete:     { form: "natuwa",    use: "Was happy — past",                             example: "Natuwa siya sa sorpresa. — He was happy with the surprise." },
          progressive:  { form: "natutuwa",  use: "Currently happy",                               example: "Natutuwa siya ngayon. — He is happy now." },
          contemplated: { form: "matutuwa",  use: "Will become happy",                             example: "Matutuwa siya pag nalaman. — He will become happy when he finds out." }
        }
      }
    }
  },

  pagod: {
    root: "pagod",
    meaning: "to be tired",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of tiredness is the focus.",
        forms: {
          infinitive:   { form: "mapagod",    use: "To become tired",                             example: "Mapagod ka sa trabaho. — You'll get tired from work." },
          complete:     { form: "napagod",    use: "Got tired — past",                            example: "Napagod siya kagabi. — He got tired last night." },
          progressive:  { form: "napapagod",  use: "Getting tired (ongoing)",                     example: "Napapagod siya ngayon. — He is getting tired now." },
          contemplated: { form: "mapapagod",  use: "Will get tired",                               example: "Mapapagod siya bukas. — He will get tired tomorrow." }
        }
      }
    }
  },

  gutom: {
    root: "gutom",
    meaning: "to be hungry",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of hunger is the focus.",
        forms: {
          infinitive:   { form: "magutom",    use: "To become hungry",                            example: "Magutom ka kapag hindi ka kumain. — You'll get hungry if you don't eat." },
          complete:     { form: "nagutom",    use: "Got hungry — past",                           example: "Nagutom siya kagabi. — He got hungry last night." },
          progressive:  { form: "nagugutom",  use: "Getting hungry (ongoing)",                    example: "Nagugutom na siya. — He is getting hungry now." },
          contemplated: { form: "magugutom",  use: "Will get hungry",                             example: "Magugutom siya bukas. — He will get hungry tomorrow." }
        }
      }
    }
  },

  uhaw: {
    root: "uhaw",
    meaning: "to be thirsty",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of thirst is the focus.",
        forms: {
          infinitive:   { form: "mauhaw",     use: "To become thirsty",                           example: "Mauhaw ka sa init. — You'll get thirsty in the heat." },
          complete:     { form: "nauhaw",     use: "Got thirsty — past",                          example: "Nauhaw siya kagabi. — He got thirsty last night." },
          progressive:  { form: "nauuhaw",    use: "Getting thirsty (ongoing)",                   example: "Nauuhaw siya ngayon. — He is getting thirsty now." },
          contemplated: { form: "mauuhaw",    use: "Will get thirsty",                            example: "Mauuhaw siya bukas. — He will get thirsty tomorrow." }
        }
      }
    }
  },

  // ============== DAILY VERBS ==============
  hingi: {
    root: "hingi",
    meaning: "to ask for / to beg",
    notes: "Takes -in and -an",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The asker/requester is the focus.",
        forms: {
          infinitive:   { form: "maghingi",     use: "To ask for / to beg",                        example: "Maghingi ka ng tulong. — Ask for help." },
          complete:     { form: "naghingi",     use: "Asked for — past",                           example: "Naghingi siya ng pera. — He asked for money." },
          progressive:  { form: "naghihingi",   use: "Currently asking",                           example: "Naghihingi siya ngayon. — He is asking now." },
          contemplated: { form: "maghihingi",   use: "Will ask for",                                example: "Maghihingi siya bukas. — He will ask tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "The thing being asked for is the focus.",
        forms: {
          infinitive:   { form: "hingin",     use: "To ask for (something)",                       example: "Hingin mo ang payong. — Ask for the umbrella." },
          complete:     { form: "hiningi",    use: "Asked for (something) — past",                 example: "Hiningi niya ang payong. — He asked for the umbrella." },
          progressive:  { form: "hinihingi",  use: "Asking for (something) — ongoing",             example: "Hinihingi niya ang tulong. — He is asking for help." },
          contemplated: { form: "hihingin",   use: "Will ask for (something)",                    example: "Hihingin niya ang payong. — He will ask for the umbrella." }
        }
      }
    }
  },

  tanggap: {
    root: "tanggap",
    meaning: "to receive / to accept",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The receiver is the focus.",
        forms: {
          infinitive:   { form: "tumanggap",   use: "To receive / accept",                         example: "Tumanggap ka ng regalo. — Accept the gift." },
          complete:     { form: "tumanggap",   use: "Received / accepted — past",                  example: "Tumanggap siya ng award. — He received an award." },
          progressive:  { form: "tumantanggap", use: "Currently receiving",                         example: "Tumantanggap siya ngayon. — He is receiving now." },
          contemplated: { form: "tatanggap",   use: "Will receive",                                example: "Tatanggap siya bukas. — He will receive tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "The thing being received is the focus.",
        forms: {
          infinitive:   { form: "itanggap",   use: "To accept (something)",                        example: "Itanggap mo ang regalo. — Accept the gift." },
          complete:     { form: "itinanggap", use: "Accepted (something) — past",                  example: "Itinanggap niya ang offer. — He accepted the offer." },
          progressive:  { form: "itinantanggap", use: "Accepting (something) — ongoing",            example: "Itinantanggap niya ang tulong. — He is accepting the help." },
          contemplated: { form: "itatanggap", use: "Will accept (something)",                       example: "Itatanggap niya ang alok. — He will accept the offer." }
        }
      }
    }
  },

  // ============== TRANSFER / MOVE ==============
  lipat: {
    root: "lipat",
    meaning: "to transfer / to move",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The mover is the focus.",
        forms: {
          infinitive:   { form: "maglipat",     use: "To transfer / move",                         example: "Maglipat ka ng bahay. — Move house." },
          complete:     { form: "naglipat",     use: "Transferred / moved — past",                  example: "Naglipat siya ng bahay. — He moved house." },
          progressive:  { form: "naglilipat",   use: "Currently moving",                            example: "Naglilipat siya ngayon. — He is moving now." },
          contemplated: { form: "maglilipat",   use: "Will move",                                   example: "Maglilipat siya bukas. — He will move tomorrow." }
        }
      }
    }
  },

  // ============== STATES (adjectival verbs) ==============
  dumi: {
    root: "dumi",
    meaning: "to be dirty",
    notes: "Stative (ma-) focus; related to cleaning",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The thing in the state of being dirty.",
        forms: {
          infinitive:   { form: "madumi",    use: "To become dirty",                              example: "Madumi ang damit. — The clothes will get dirty." },
          complete:     { form: "nadumi",    use: "Got dirty — past",                              example: "Nadumi ang damit. — The clothes got dirty." },
          progressive:  { form: "nadudumi",  use: "Getting dirty (ongoing)",                       example: "Nadudumi ang sahig. — The floor is getting dirty." },
          contemplated: { form: "madudumi",  use: "Will get dirty",                                example: "Madudumi ang damit. — The clothes will get dirty." }
        }
      }
    }
  },

  ingat: {
    root: "ingat",
    meaning: "to be careful / to remember",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The careful person is the focus.",
        forms: {
          infinitive:   { form: "umingat",    use: "To be careful / to watch out",                 example: "Umingat ka sa daan. — Be careful on the road." },
          complete:     { form: "umingat",    use: "Was careful — past",                            example: "Umingat siya sa daan. — He was careful on the road." },
          progressive:  { form: "umiingat",   use: "Being careful (ongoing)",                        example: "Umiingat siya ngayon. — He is being careful now." },
          contemplated: { form: "iingat",     use: "Will be careful",                               example: "Iingat siya bukas. — He will be careful tomorrow." }
        }
      }
    }
  },

  // ============== MORE ACTIONS ==============
  ayus: {
    root: "ayus",
    meaning: "to fix / to arrange / to be in order",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person fixing/arranging is the focus.",
        forms: {
          infinitive:   { form: "mag-ayos",     use: "To fix / arrange",                            example: "Mag-ayos ka ng kwarto. — Fix the room." },
          complete:     { form: "nag-ayos",     use: "Fixed / arranged — past",                     example: "Nag-ayos siya ng kwarto. — He fixed the room." },
          progressive:  { form: "nagaayos",     use: "Currently fixing",                            example: "Nagaayos siya ngayon. — He is fixing now." },
          contemplated: { form: "mag-aayos",    use: "Will fix",                                    example: "Mag-aayos siya bukas. — He will fix tomorrow." }
        }
      }
    }
  },

  // ============== BORROWING / FINANCE ==============
  hiram: {
    root: "hiram",
    meaning: "to borrow",
    notes: "Takes -in and -an",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The borrower is the focus.",
        forms: {
          infinitive:   { form: "umhiram",    use: "To borrow",                                    example: "Umhiram ka ng libro. — Borrow a book." },
          complete:     { form: "umhiram",    use: "Borrowed — past",                               example: "Umhiram siya ng libro. — He borrowed a book." },
          progressive:  { form: "umhihiram",  use: "Currently borrowing",                           example: "Umhihiram siya ngayon. — He is borrowing now." },
          contemplated: { form: "ihihiram",   use: "Will borrow",                                   example: "Ihihiram niya ang libro. — He will borrow the book." }
        }
      }
    }
  },

  upa: {
    root: "upa",
    meaning: "to rent",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The renter is the focus.",
        forms: {
          infinitive:   { form: "mag-upa",     use: "To rent",                                      example: "Mag-upa ka ng bahay. — Rent a house." },
          complete:     { form: "nag-upa",     use: "Rented — past",                                example: "Nag-upa siya ng bahay. — He rented a house." },
          progressive:  { form: "naguupa",     use: "Currently renting",                            example: "Naguupa siya ngayon. — He is renting now." },
          contemplated: { form: "mag-uupa",    use: "Will rent",                                    example: "Mag-uupa siya bukas. — He will rent tomorrow." }
        }
      }
    }
  },

  // ============== HEALTH / BODY ==============
  sipon: {
    root: "sipon",
    meaning: "to have a cold (illness)",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — illness)",
        description: "The person who has a cold is the focus.",
        forms: {
          infinitive:   { form: "masipon",    use: "To get a cold",                                 example: "Masipon ka sa ulan. — You'll catch a cold from the rain." },
          complete:     { form: "nasipon",    use: "Got a cold — past",                             example: "Nasipon siya kagabi. — He caught a cold last night." },
          progressive:  { form: "nasasipon",  use: "Getting a cold (ongoing)",                      example: "Nasasipon siya ngayon. — He is getting a cold now." },
          contemplated: { form: "masasipon",  use: "Will get a cold",                               example: "Masasipon siya bukas. — He will catch a cold tomorrow." }
        }
      }
    }
  },

  lagnat: {
    root: "lagnat",
    meaning: "to have a fever",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — illness)",
        description: "The person with a fever is the focus.",
        forms: {
          infinitive:   { form: "malagnat",   use: "To get a fever",                                example: "Malagnat ka sa init. — You'll get a fever from the heat." },
          complete:     { form: "nalagnat",   use: "Got a fever — past",                            example: "Nalagnat siya kagabi. — He got a fever last night." },
          progressive:  { form: "nalalagnat", use: "Having a fever (ongoing)",                      example: "Nalalagnat siya ngayon. — He has a fever now." },
          contemplated: { form: "malalagnat", use: "Will get a fever",                              example: "Malalagnat siya bukas. — He will get a fever tomorrow." }
        }
      }
    }
  },

  sakit: {
    root: "sakit",
    meaning: "to hurt / to be sick / to feel pain",
    notes: "Stative (ma-) focus. Also: 'masakit' = painful, 'may sakit' = sick person",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — pain/illness)",
        description: "The person/thing experiencing pain or illness.",
        forms: {
          infinitive:   { form: "masakit",    use: "To feel pain / to become sick",                  example: "Masakit ang ulo ko. — My head hurts. / I'll get sick." },
          complete:     { form: "nasakit",    use: "Felt pain / got sick — past",                    example: "Nasakit ang likod niya. — His back hurt." },
          progressive:  { form: "nasasakit",  use: "Hurting (ongoing)",                              example: "Nasasakit ang tiyan ko. — My stomach is hurting." },
          contemplated: { form: "masasakit",  use: "Will hurt / will get sick",                      example: "Masasakit ang ulo mo. — Your head will hurt." }
        }
      }
    }
  },

  hilik: {
    root: "hilik",
    meaning: "to snore",
    notes: "Takes -um- and nag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The snorer is the focus.",
        forms: {
          infinitive:   { form: "humilik",   use: "To snore",                                       example: "Humilik ka tuwing gabi. — You snore every night." },
          complete:     { form: "humilik",   use: "Snored — past",                                   example: "Humilik siya kagabi. — He snored last night." },
          progressive:  { form: "humihilik", use: "Currently snoring",                               example: "Humihilik siya ngayon. — He is snoring now." },
          contemplated: { form: "hihilik",   use: "Will snore",                                      example: "Hihilik siya mamaya. — He will snore later." }
        }
      }
    }
  },

  ngiti: {
    root: "ngiti",
    meaning: "to smile",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (um-)": {
        focus: "Actor Focus",
        description: "The smiler is the focus.",
        forms: {
          infinitive:   { form: "umngiti",    use: "To smile",                                       example: "Umngiti ka naman. — Smile a little." },
          complete:     { form: "umngiti",    use: "Smiled — past",                                  example: "Umngiti siya sa akin. — He smiled at me." },
          progressive:  { form: "umangiti",  use: "Currently smiling",                              example: "Umangiti siya ngayon. — He is smiling now." },
          contemplated: { form: "angiti",    use: "Will smile",                                     example: "Angiti siya pag nalaman. — He will smile when he finds out." }
        }
      }
    }
  },

  hinga: {
    root: "hinga",
    meaning: "to breathe",
    notes: "Takes -um- and mag-. Often 'humihinga' (to take a breath).",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The breather is the focus.",
        forms: {
          infinitive:   { form: "huminga",   use: "To breathe",                                     example: "Huminga ka nang malalim. — Breathe deeply." },
          complete:     { form: "huminga",   use: "Breathed — past",                                example: "Huminga siya nang malalim. — He breathed deeply." },
          progressive:  { form: "humihinga", use: "Currently breathing",                            example: "Humihinga siya ngayon. — He is breathing now." },
          contemplated: { form: "hihinga",   use: "Will breathe",                                   example: "Hihinga siya bukas. — He will breathe tomorrow." }
        }
      }
    }
  },

  // ============== FAMILY ==============
  asawa: {
    root: "asawa",
    meaning: "to get married (to each other)",
    notes: "Reciprocal: 'mag-asawa' (to get married to each other)",
    conjugations: {
      "Reciprocal (mag-...-an)": {
        focus: "Reciprocal / Mutual Focus",
        description: "Marrying each other. Common for engagement and wedding announcements.",
        forms: {
          infinitive:   { form: "mag-asawa",     use: "To get married (to each other)",             example: "Mag-aasawa na sila. — They will get married (to each other)." },
          complete:     { form: "nag-asawa",     use: "Got married — past",                        example: "Nag-asawa sila noong 2020. — They got married in 2020." },
          progressive:  { form: "nag-aasawa",   use: "In the process of getting married",          example: "Nag-aasawa sila ngayon. — They are getting married now." },
          contemplated: { form: "mag-aasawa",   use: "Will get married",                          example: "Mag-aasawa sila sa Hunyo. — They will get married in June." }
        }
      }
    }
  },

  // ============== MONEY ==============
  ipon: {
    root: "ipon",
    meaning: "to save (money)",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The saver is the focus.",
        forms: {
          infinitive:   { form: "mag-ipon",     use: "To save (money)",                            example: "Mag-ipon ka ng pera. — Save money." },
          complete:     { form: "nag-ipon",     use: "Saved — past",                                example: "Nag-ipon siya ng pera. — He saved money." },
          progressive:  { form: "nagiipon",     use: "Currently saving",                            example: "Nagiipon siya ngayon. — He is saving now." },
          contemplated: { form: "mag-iipon",    use: "Will save",                                   example: "Mag-iipon siya bukas. — He will save tomorrow." }
        }
      }
    }
  },

  utang: {
    root: "utang",
    meaning: "to borrow (money) / to owe",
    notes: "Takes -um-",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The borrower/debtor is the focus.",
        forms: {
          infinitive:   { form: "umutang",    use: "To borrow money / to owe",                     example: "Umutang ka sa kaibigan. — Borrow from a friend." },
          complete:     { form: "umutang",    use: "Borrowed / owed — past",                       example: "Umutang siya ng pera. — He borrowed money." },
          progressive:  { form: "umutang",    use: "Currently borrowing",                         example: "Umutang siya ngayon. — He is borrowing now." },
          contemplated: { form: "utang",      use: "Will borrow",                                  example: "Utang siya bukas. — He will borrow tomorrow." }
        }
      }
    }
  },

  taas: {
    root: "taas",
    meaning: "to rise / to go up (price, level)",
    notes: "Takes -um- (inchoative — becoming high)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — becoming high)",
        description: "The thing that is rising in level/price.",
        forms: {
          infinitive:   { form: "mataas",     use: "To become high (price/level rising)",          example: "Mataas ang presyo. — The price is/will be high." },
          complete:     { form: "nataas",     use: "Became high / rose — past",                    example: "Nataas ang presyo. — The price rose." },
          progressive:  { form: "nataas",     use: "Rising (ongoing)",                              example: "Nataas ang presyo ngayon. — The price is rising now." },
          contemplated: { form: "mataas",     use: "Will rise / will be high",                      example: "Mataas ang presyo bukas. — The price will be high tomorrow." }
        }
      }
    }
  },

  // ============== HOUSEHOLD CHORES ==============
  laba: {
    root: "laba",
    meaning: "to do laundry / to wash clothes",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person doing laundry is the focus.",
        forms: {
          infinitive:   { form: "maglaba",     use: "To do laundry",                              example: "Maglaba ka ng damit. — Do the laundry." },
          complete:     { form: "naglaba",     use: "Did laundry — past",                          example: "Naglaba siya kagabi. — She did laundry last night." },
          progressive:  { form: "naglalaba",   use: "Currently doing laundry",                     example: "Naglalaba siya ngayon. — She is doing laundry now." },
          contemplated: { form: "maglalaba",   use: "Will do laundry",                            example: "Maglalaba siya bukas. — She will do laundry tomorrow." }
        }
      }
    }
  },

  plantsa: {
    root: "plantsa",
    meaning: "to iron clothes",
    notes: "Takes mag- (borrowed from Spanish 'plancha')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person ironing is the focus.",
        forms: {
          infinitive:   { form: "magplantsa",     use: "To iron (clothes)",                          example: "Magplantsa ka ng damit. — Iron the clothes." },
          complete:     { form: "nagplantsa",     use: "Ironed — past",                              example: "Nagplantsa siya kagabi. — He ironed last night." },
          progressive:  { form: "nagpaplantsa",   use: "Currently ironing",                          example: "Nagpaplantsa siya ngayon. — He is ironing now." },
          contemplated: { form: "magpaplantsa",   use: "Will iron",                                  example: "Magpaplantsa siya bukas. — He will iron tomorrow." }
        }
      }
    }
  },

  walis: {
    root: "walis",
    meaning: "to sweep",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The sweeper is the focus.",
        forms: {
          infinitive:   { form: "magwalis",     use: "To sweep",                                   example: "Magwalis ka ng sahig. — Sweep the floor." },
          complete:     { form: "nagwalis",     use: "Swept — past",                                example: "Nagwalis siya kagabi. — He swept last night." },
          progressive:  { form: "nagwawalis",   use: "Currently sweeping",                          example: "Nagwawalis siya ngayon. — He is sweeping now." },
          contemplated: { form: "magwawalis",   use: "Will sweep",                                  example: "Magwawalis siya bukas. — He will sweep tomorrow." }
        }
      }
    }
  },

  tiklop: {
    root: "tiklop",
    meaning: "to fold (clothes / paper)",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The folder is the focus.",
        forms: {
          infinitive:   { form: "magtiklop",     use: "To fold",                                    example: "Magtiklop ka ng damit. — Fold the clothes." },
          complete:     { form: "nagtiklop",     use: "Folded — past",                              example: "Nagtiklop siya ng damit. — He folded the clothes." },
          progressive:  { form: "nagtitiklop",   use: "Currently folding",                          example: "Nagtitiklop siya ngayon. — He is folding now." },
          contemplated: { form: "magtitiklop",   use: "Will fold",                                  example: "Magtitiklop siya bukas. — He will fold tomorrow." }
        }
      }
    }
  },

  // ============== TRANSPORTATION ==============
  sakay: {
    root: "sakay",
    meaning: "to ride (a vehicle)",
    notes: "Takes -um- and sumakay",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The rider is the focus.",
        forms: {
          infinitive:   { form: "sumakay",    use: "To ride (a vehicle)",                          example: "Sumakay ka ng bus. — Ride the bus." },
          complete:     { form: "sumakay",    use: "Rode — past",                                  example: "Sumakay siya ng bus. — He rode the bus." },
          progressive:  { form: "sumasakay",  use: "Currently riding",                              example: "Sumasakay siya ngayon. — He is riding now." },
          contemplated: { form: "sasakay",    use: "Will ride",                                     example: "Sasakay siya bukas. — He will ride tomorrow." }
        }
      }
    }
  },

  maneho: {
    root: "maneho",
    meaning: "to drive",
    notes: "Takes mag- (borrowed from Spanish 'manejar')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The driver is the focus.",
        forms: {
          infinitive:   { form: "magmaneho",     use: "To drive",                                  example: "Magmaneho ka nang maingat. — Drive carefully." },
          complete:     { form: "nagmaneho",     use: "Drove — past",                              example: "Nagmaneho siya kagabi. — He drove last night." },
          progressive:  { form: "nagmamaneho",   use: "Currently driving",                          example: "Nagmamaneho siya ngayon. — He is driving now." },
          contemplated: { form: "magmamaneho",   use: "Will drive",                                 example: "Magmamaneho siya bukas. — He will drive tomorrow." }
        }
      }
    }
  },

  lipad: {
    root: "lipad",
    meaning: "to fly",
    notes: "Takes -um- and lumipad",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The flyer (bird, plane, person) is the focus.",
        forms: {
          infinitive:   { form: "lumipad",   use: "To fly",                                       example: "Lumipad ang ibon. — The bird flew." },
          complete:     { form: "lumipad",   use: "Flew — past",                                  example: "Lumipad ang eroplano. — The plane flew." },
          progressive:  { form: "lumilipad", use: "Currently flying",                              example: "Lumilipad ang ibon ngayon. — The bird is flying now." },
          contemplated: { form: "lilipad",   use: "Will fly",                                      example: "Lilipad siya bukas. — He/she will fly tomorrow." }
        }
      }
    }
  },

  biyahe: {
    root: "biyahe",
    meaning: "to travel / to take a trip",
    notes: "Takes mag- (borrowed from Spanish 'viaje')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The traveler is the focus.",
        forms: {
          infinitive:   { form: "magbiyahe",     use: "To travel",                                example: "Magbiyahe tayo sa Baguio. — Let's travel to Baguio." },
          complete:     { form: "nagbiyahe",     use: "Traveled — past",                          example: "Nagbiyahe siya kagabi. — He traveled last night." },
          progressive:  { form: "nagbabiyahe",   use: "Currently traveling",                       example: "Nagbabiyahe siya ngayon. — He is traveling now." },
          contemplated: { form: "magbabiyahe",   use: "Will travel",                              example: "Magbabiyahe siya bukas. — He will travel tomorrow." }
        }
      }
    }
  },

  // ============== MEALS ==============
  almusal: {
    root: "almusal",
    meaning: "to have breakfast",
    notes: "Takes mag- (from Spanish 'almorzar')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The breakfast-eater is the focus.",
        forms: {
          infinitive:   { form: "mag-almusal",     use: "To have breakfast",                       example: "Mag-almusal ka na ba? — Have you had breakfast yet?" },
          complete:     { form: "nag-almusal",     use: "Had breakfast — past",                    example: "Nag-almusal siya kagabi. — He had breakfast last night." },
          progressive:  { form: "nagaalmusal",     use: "Currently having breakfast",              example: "Nagaalmusal siya ngayon. — He is having breakfast now." },
          contemplated: { form: "mag-aalmusal",    use: "Will have breakfast",                     example: "Mag-aalmusal siya bukas. — He will have breakfast tomorrow." }
        }
      }
    }
  },

  hapunan: {
    root: "hapunan",
    meaning: "to have dinner",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The dinner-eater is the focus.",
        forms: {
          infinitive:   { form: "maghapunan",     use: "To have dinner",                          example: "Maghapunan tayo mamaya. — Let's have dinner later." },
          complete:     { form: "naghapunan",     use: "Had dinner — past",                       example: "Naghapunan siya kagabi. — He had dinner last night." },
          progressive:  { form: "naghahapunan",   use: "Currently having dinner",                  example: "Naghahapunan siya ngayon. — He is having dinner now." },
          contemplated: { form: "maghahapunan",   use: "Will have dinner",                        example: "Maghahapunan siya bukas. — He will have dinner tomorrow." }
        }
      }
    }
  },

  prito: {
    root: "prito",
    meaning: "to fry (food)",
    notes: "Takes mag- (from Spanish 'freír' / 'frito')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person frying food is the focus.",
        forms: {
          infinitive:   { form: "magprito",     use: "To fry",                                  example: "Magprito ka ng isda. — Fry the fish." },
          complete:     { form: "nagprito",     use: "Fried — past",                              example: "Nagprito siya ng isda. — She fried fish." },
          progressive:  { form: "nagpiprito",   use: "Currently frying",                          example: "Nagpiprito siya ngayon. — She is frying now." },
          contemplated: { form: "magpiprito",   use: "Will fry",                                 example: "Magpiprito siya bukas. — She will fry tomorrow." }
        }
      }
    }
  },

  // ============== DAILY ==============
  pahinga: {
    root: "pahinga",
    meaning: "to rest / to take a break",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person resting is the focus.",
        forms: {
          infinitive:   { form: "magpahinga",     use: "To rest / take a break",                  example: "Magpahinga ka muna. — Rest first." },
          complete:     { form: "nagpahinga",     use: "Rested — past",                            example: "Nagpahinga siya kagabi. — He rested last night." },
          progressive:  { form: "nagpapahinga",   use: "Currently resting",                        example: "Nagpapahinga siya ngayon. — He is resting now." },
          contemplated: { form: "magpapahinga",   use: "Will rest",                                example: "Magpapahinga siya bukas. — He will rest tomorrow." }
        }
      }
    }
  },

  bisikleta: {
    root: "bisikleta",
    meaning: "to ride a bike",
    notes: "Takes mag- (from Spanish 'bicicleta')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person riding a bike is the focus.",
        forms: {
          infinitive:   { form: "magbisikleta",     use: "To ride a bike",                          example: "Magbisikleta ka sa park. — Bike to the park." },
          complete:     { form: "nagbisikleta",     use: "Biked — past",                            example: "Nagbisikleta siya kagabi. — He biked last night." },
          progressive:  { form: "nagbibisikleta",   use: "Currently biking",                        example: "Nagbibisikleta siya ngayon. — He is biking now." },
          contemplated: { form: "magbibisikleta",   use: "Will bike",                                example: "Magbibisikleta siya bukas. — He will bike tomorrow." }
        }
      }
    }
  },

  // ============== RELIGION / SPIRITUAL ==============
  dasal: {
    root: "dasal",
    meaning: "to pray",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person praying is the focus.",
        forms: {
          infinitive:   { form: "magdasal",     use: "To pray",                                    example: "Magdasal ka bago matulog. — Pray before sleeping." },
          complete:     { form: "nagdasal",     use: "Prayed — past",                              example: "Nagdasal siya kagabi. — He prayed last night." },
          progressive:  { form: "nagdadasal",   use: "Currently praying",                          example: "Nagdadasal siya ngayon. — He is praying now." },
          contemplated: { form: "magdadasal",   use: "Will pray",                                  example: "Magdadasal siya bukas. — He will pray tomorrow." }
        }
      }
    }
  },

  simba: {
    root: "simba",
    meaning: "to go to church / to worship",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The churchgoer is the focus.",
        forms: {
          infinitive:   { form: "magsimba",     use: "To go to church",                            example: "Magsimba tayo sa Linggo. — Let's go to church on Sunday." },
          complete:     { form: "nagsimba",     use: "Went to church — past",                     example: "Nagsimba siya kagabi. — He went to church last night." },
          progressive:  { form: "nagsisisimba", use: "Currently at church",                       example: "Nagsisisimba siya ngayon. — He is at church now." },
          contemplated: { form: "magsisisimba", use: "Will go to church",                         example: "Magsisisimba siya bukas. — He will go to church tomorrow." }
        }
      }
    }
  },

  // ============== STATES (adjectival verbs) ==============
  masaya: {
    root: "masaya",
    meaning: "to be happy",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person/thing in the state of being happy.",
        forms: {
          infinitive:   { form: "masaya",    use: "To be happy / to become happy",                 example: "Masaya siya ngayon. — He is happy now." },
          complete:     { form: "nasaya",    use: "Became happy — past",                          example: "Nasaya siya kagabi. — He became happy last night." },
          progressive:  { form: "nasasaya",  use: "Being happy (ongoing)",                        example: "Nasasaya siya ngayon. — He is being happy now." },
          contemplated: { form: "masasaya",  use: "Will be happy",                                example: "Masasaya siya bukas. — He will be happy tomorrow." }
        }
      }
    }
  },

  lungkot: {
    root: "lungkot",
    meaning: "to be sad",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person/thing in the state of being sad.",
        forms: {
          infinitive:   { form: "malungkot",   use: "To be sad / to become sad",                 example: "Malungkot siya ngayon. — He is sad now." },
          complete:     { form: "nalungkot",   use: "Became sad — past",                         example: "Nalungkot siya kagabi. — He became sad last night." },
          progressive:  { form: "nalulungkot", use: "Being sad (ongoing)",                        example: "Nalulungkot siya ngayon. — He is being sad now." },
          contemplated: { form: "malulungkot", use: "Will be sad",                                example: "Malulungkot siya bukas. — He will be sad tomorrow." }
        }
      }
    }
  },

  lamig: {
    root: "lamig",
    meaning: "to be cold (weather / temperature)",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — weather/temperature)",
        description: "The person/thing in the state of being cold.",
        forms: {
          infinitive:   { form: "malamig",     use: "To be cold / to become cold",                  example: "Malamig ngayon. — It's cold now." },
          complete:     { form: "nalamig",     use: "Became cold — past",                            example: "Nalamig kagabi. — It got cold last night." },
          progressive:  { form: "nalamlamig",  use: "Getting cold (ongoing)",                       example: "Nalamlamig na. — It's getting cold." },
          contemplated: { form: "malamlamig",  use: "Will be cold / will get cold",                  example: "Malamlamig bukas. — It will be cold tomorrow." }
        }
      }
    }
  },

  init: {
    root: "init",
    meaning: "to be hot (weather / temperature)",
    notes: "Stative (ma-) focus. Distinct from 'mainit' as adjective.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — weather/temperature)",
        description: "The person/thing in the state of being hot.",
        forms: {
          infinitive:   { form: "mainit",      use: "To be hot / to become hot",                   example: "Mainit ngayon. — It's hot now." },
          complete:     { form: "nainit",      use: "Became hot — past",                            example: "Nainit kagabi. — It got hot last night." },
          progressive:  { form: "naininit",    use: "Getting hot (ongoing)",                        example: "Naininit na. — It's getting hot." },
          contemplated: { form: "maininit",    use: "Will be hot / will get hot",                   example: "Maininit bukas. — It will be hot tomorrow." }
        }
      }
    }
  },

  // ============== MORE DAILY ==============
  text: {
    root: "text",
    meaning: "to text (send a text message)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The texter is the focus.",
        forms: {
          infinitive:   { form: "mag-text",     use: "To text",                                  example: "Mag-text ka sa akin. — Text me." },
          complete:     { form: "nag-text",     use: "Texted — past",                            example: "Nag-text siya kagabi. — He texted last night." },
          progressive:  { form: "nagte-text",   use: "Currently texting",                        example: "Nagte-text siya ngayon. — He is texting now." },
          contemplated: { form: "magte-text",   use: "Will text",                                 example: "Magte-text siya bukas. — He will text tomorrow." }
        }
      }
    }
  },

  // ============== TRAVEL ==============
  umaga: {
    root: "umaga",
    meaning: "morning (as a verb: 'to become morning')",
    notes: "Stative; often used as 'umaga na' (it's morning now)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — time of day)",
        description: "The morning state — used to say 'it's morning'.",
        forms: {
          infinitive:   { form: "umaga",     use: "To be morning / to become morning",            example: "Umaga na. — It's morning now." },
          complete:     { form: "umaga",     use: "Was morning — past",                          example: "Umaga na noon. — It was already morning then." },
          progressive:  { form: "umaga",     use: "Currently morning",                            example: "Umaga pa. — It's still morning." },
          contemplated: { form: "umaga",     use: "Will be morning",                              example: "Umaga na bukas. — It will be morning tomorrow." }
        }
      }
    }
  },

  // ============== HELP / KINDNESS ==============
  // tulong (already in database)
  // bigay (already)
  // ============== OTHER USEFUL ==============
  asa: {
    root: "asa",
    meaning: "to hope / to expect",
    notes: "Takes -um-",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person who hopes/expects is the focus.",
        forms: {
          infinitive:   { form: "umasa",     use: "To hope / to expect",                         example: "Umasa ka sa Diyos. — Hope in God." },
          complete:     { form: "umasa",     use: "Hoped / expected — past",                      example: "Umasa siya sa akin. — He hoped in me." },
          progressive:  { form: "umaasa",   use: "Currently hoping",                              example: "Umaasa siya ngayon. — He is hoping now." },
          contemplated: { form: "aasa",     use: "Will hope",                                     example: "Aasa siya bukas. — He will hope tomorrow." }
        }
      }
    }
  },

  // ============== AVOID ==============
  iwas: {
    root: "iwas",
    meaning: "to avoid",
    notes: "Takes -um- and umiwas",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person avoiding something is the focus.",
        forms: {
          infinitive:   { form: "umiwas",    use: "To avoid",                                     example: "Umiwas ka sa masamang tao. — Avoid bad people." },
          complete:     { form: "umiwas",    use: "Avoided — past",                                example: "Umiwas siya sa akin. — He avoided me." },
          progressive:  { form: "umiiwas",  use: "Currently avoiding",                            example: "Umiiwas siya ngayon. — He is avoiding now." },
          contemplated: { form: "iiwas",    use: "Will avoid",                                     example: "Iiwas siya bukas. — He will avoid tomorrow." }
        }
      }
    }
  },

  // ============== ABILITY / MANAGING ==============
  // kaya (already in some form via 'mag-')
  // ============== COMMUNICATION (more) ==============
  kwento: {
    root: "kwento",
    meaning: "to tell a story / to chat / to narrate",
    notes: "Takes mag- (from Spanish 'cuento')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The storyteller is the focus.",
        forms: {
          infinitive:   { form: "magkwento",     use: "To tell a story / to chat",                example: "Magkwento ka ng kuwento. — Tell a story." },
          complete:     { form: "nagkwento",     use: "Told a story — past",                      example: "Nagkwento siya kagabi. — He told a story last night." },
          progressive:  { form: "nagkukwento",   use: "Currently telling a story",                example: "Nagkukwento siya ngayon. — He is telling a story now." },
          contemplated: { form: "magkukwento",   use: "Will tell a story",                        example: "Magkukwento siya bukas. — He will tell a story tomorrow." }
        }
      }
    }
  },

  // ============== BATCH 4: 30 more everyday verbs ==============
  // BODY NEEDS
  ihi: {
    root: "ihi",
    meaning: "to urinate",
    notes: "Takes -um-",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person urinating is the focus.",
        forms: {
          infinitive:   { form: "umihi",    use: "To urinate",                                    example: "Umihi ka muna. — Urinate first." },
          complete:     { form: "umihi",    use: "Urinated — past",                                example: "Umihi siya kagabi. — He urinated last night." },
          progressive:  { form: "umiiihi",  use: "Currently urinating",                            example: "Umiiihi siya ngayon. — He is urinating now." },
          contemplated: { form: "iihi",     use: "Will urinate",                                   example: "Iihi siya bukas. — He will urinate tomorrow." }
        }
      }
    }
  },

  dumi: {
    root: "dumi",
    meaning: "to defecate",
    notes: "Takes -um-. (Note: 'dumi' also means 'dirt' as a noun, but this entry is for the verb.)",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person defecating is the focus.",
        forms: {
          infinitive:   { form: "dumumi",   use: "To defecate",                                    example: "Dumumi muna siya. — He defecated first." },
          complete:     { form: "dumumi",   use: "Defecated — past",                                example: "Dumumi siya kagabi. — He defecated last night." },
          progressive:  { form: "dumudumi", use: "Currently defecating",                            example: "Dumudumi siya ngayon. — He is defecating now." },
          contemplated: { form: "dudumi",   use: "Will defecate",                                   example: "Dudumi siya bukas. — He will defecate tomorrow." }
        }
      }
    }
  },

  ubo: {
    root: "ubo",
    meaning: "to cough",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person coughing is the focus.",
        forms: {
          infinitive:   { form: "mag-ubo",     use: "To cough",                                     example: "Mag-ubo ka nang marahan. — Cough gently." },
          complete:     { form: "nag-ubo",     use: "Coughed — past",                                example: "Nag-ubo siya kagabi. — He coughed last night." },
          progressive:  { form: "naguubo",     use: "Currently coughing",                            example: "Naguubo siya ngayon. — He is coughing now." },
          contemplated: { form: "mag-uubo",    use: "Will cough",                                    example: "Mag-uubo siya bukas. — He will cough tomorrow." }
        }
      }
    }
  },

  sipilyo: {
    root: "sipilyo",
    meaning: "to brush teeth",
    notes: "Takes mag- (from Spanish 'cepillo')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person brushing teeth is the focus.",
        forms: {
          infinitive:   { form: "magsipilyo",     use: "To brush teeth",                              example: "Magsipilyo ka tuwing umaga. — Brush your teeth every morning." },
          complete:     { form: "nagsipilyo",     use: "Brushed teeth — past",                        example: "Nagsipilyo siya kagabi. — He brushed teeth last night." },
          progressive:  { form: "nagsisipilyo",   use: "Currently brushing teeth",                    example: "Nagsisipilyo siya ngayon. — He is brushing now." },
          contemplated: { form: "magsisipilyo",   use: "Will brush teeth",                            example: "Magsisipilyo siya bukas. — He will brush tomorrow." }
        }
      }
    }
  },

  hilam: {
    root: "hilam",
    meaning: "to yawn",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person yawning is the focus.",
        forms: {
          infinitive:   { form: "maghilam",     use: "To yawn",                                      example: "Maghilam ka nang marahan. — Yawn gently." },
          complete:     { form: "naghilam",     use: "Yawned — past",                                example: "Naghilam siya kagabi. — He yawned last night." },
          progressive:  { form: "naghihilam",   use: "Currently yawning",                            example: "Naghihilam siya ngayon. — He is yawning now." },
          contemplated: { form: "maghihilam",   use: "Will yawn",                                    example: "Maghihilam siya bukas. — He will yawn tomorrow." }
        }
      }
    }
  },

  // TIME / START / FINISH
  umpisa: {
    root: "umpisa",
    meaning: "to start / to begin",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person starting something is the focus.",
        forms: {
          infinitive:   { form: "mag-umpisa",     use: "To start / to begin",                        example: "Mag-umpisa na tayo. — Let's start." },
          complete:     { form: "nag-umpisa",     use: "Started — past",                              example: "Nag-umpisa siya kagabi. — He started last night." },
          progressive:  { form: "naguumpisa",     use: "Currently starting",                          example: "Naguumpisa siya ngayon. — He is starting now." },
          contemplated: { form: "mag-uumpisa",    use: "Will start",                                  example: "Mag-uumpisa siya bukas. — He will start tomorrow." }
        }
      }
    }
  },

  tapos: {
    root: "tapos",
    meaning: "to finish / to end / to graduate",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person finishing something is the focus.",
        forms: {
          infinitive:   { form: "magtapos",     use: "To finish / to end / to graduate",            example: "Magtapos ka na ba? — Are you done yet?" },
          complete:     { form: "nagtapos",     use: "Finished — past",                              example: "Nagtapos siya kagabi. — He finished last night." },
          progressive:  { form: "nagtatapos",   use: "Currently finishing",                          example: "Nagtatapos siya ngayon. — He is finishing now." },
          contemplated: { form: "magtatapos",   use: "Will finish",                                  example: "Magtatapos siya bukas. — He will finish tomorrow." }
        }
      }
    }
  },

  dating: {
    root: "dating",
    meaning: "to arrive",
    notes: "Takes -um- (dumating)",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person arriving is the focus.",
        forms: {
          infinitive:   { form: "dumating",   use: "To arrive",                                     example: "Dumating ka na. — You've arrived." },
          complete:     { form: "dumating",   use: "Arrived — past",                                example: "Dumating siya kagabi. — He arrived last night." },
          progressive:  { form: "dumarating", use: "Currently arriving",                            example: "Dumarating siya ngayon. — He is arriving now." },
          contemplated: { form: "darating",   use: "Will arrive",                                   example: "Darating siya bukas. — He will arrive tomorrow." }
        }
      }
    }
  },

  uwi: {
    root: "uwi",
    meaning: "to go home / to return home",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person going home is the focus.",
        forms: {
          infinitive:   { form: "maguwi",     use: "To go home",                                   example: "Maguwi ka na. — Go home now." },
          complete:     { form: "naguwi",     use: "Went home — past",                              example: "Naguwi siya kagabi. — He went home last night." },
          progressive:  { form: "naguuwi",    use: "Currently going home",                          example: "Naguuwi siya ngayon. — He is going home now." },
          contemplated: { form: "mag-uuwi",   use: "Will go home",                                  example: "Mag-uuwi siya bukas. — He will go home tomorrow." }
        }
      }
    }
  },

  // SEND / RECEIVE
  padala: {
    root: "padala",
    meaning: "to send",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The sender is the focus.",
        forms: {
          infinitive:   { form: "magpadala",     use: "To send",                                    example: "Magpadala ka ng liham. — Send a letter." },
          complete:     { form: "nagpadala",     use: "Sent — past",                                example: "Nagpadala siya ng liham. — He sent a letter." },
          progressive:  { form: "nagpapadala",   use: "Currently sending",                           example: "Nagpapadala siya ngayon. — He is sending now." },
          contemplated: { form: "magpapadala",   use: "Will send",                                   example: "Magpapadala siya bukas. — He will send tomorrow." }
        }
      }
    }
  },

  // TRAVEL / LEISURE
  bakasyon: {
    root: "bakasyon",
    meaning: "to take a vacation",
    notes: "Takes mag- (from Spanish 'vacación')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The vacationer is the focus.",
        forms: {
          infinitive:   { form: "magbakasyon",     use: "To take a vacation",                        example: "Magbakasyon tayo sa summer. — Let's vacation in the summer." },
          complete:     { form: "nagbakasyon",     use: "Took a vacation — past",                    example: "Nagbakasyon siya noong summer. — He vacationed last summer." },
          progressive:  { form: "nagbabakasyon",   use: "Currently on vacation",                      example: "Nagbabakasyon siya ngayon. — He is on vacation now." },
          contemplated: { form: "magbabakasyon",   use: "Will take a vacation",                       example: "Magbabakasyon siya sa susunod. — He will vacation next." }
        }
      }
    }
  },

  // SPORTS / RECREATION
  basketball: {
    root: "basketball",
    meaning: "to play basketball",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The basketball player is the focus.",
        forms: {
          infinitive:   { form: "magbasketball",     use: "To play basketball",                      example: "Magbasketball tayo mamaya. — Let's play basketball later." },
          complete:     { form: "nagbasketball",     use: "Played basketball — past",                 example: "Nagbasketball siya kagabi. — He played basketball last night." },
          progressive:  { form: "nagbabasketball",   use: "Currently playing basketball",             example: "Nagbabasketball siya ngayon. — He is playing basketball now." },
          contemplated: { form: "magbabasketball",   use: "Will play basketball",                      example: "Magbabasketball siya bukas. — He will play tomorrow." }
        }
      }
    }
  },

  jog: {
    root: "jog",
    meaning: "to jog",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The jogger is the focus.",
        forms: {
          infinitive:   { form: "mag-jog",     use: "To jog",                                      example: "Mag-jog ka tuwing umaga. — Jog every morning." },
          complete:     { form: "nag-jog",     use: "Jogged — past",                                example: "Nag-jog siya kagabi. — He jogged last night." },
          progressive:  { form: "nagjijog",    use: "Currently jogging",                            example: "Nagjijog siya ngayon. — He is jogging now." },
          contemplated: { form: "magjijog",    use: "Will jog",                                     example: "Magjijog siya bukas. — He will jog tomorrow." }
        }
      }
    }
  },

  karaoke: {
    root: "karaoke",
    meaning: "to do karaoke / to sing karaoke",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The karaoke singer is the focus.",
        forms: {
          infinitive:   { form: "mag-karaoke",     use: "To do karaoke",                             example: "Mag-karaoke tayo sa gabi. — Let's karaoke tonight." },
          complete:     { form: "nag-karaoke",     use: "Did karaoke — past",                         example: "Nag-karaoke sila kagabi. — They did karaoke last night." },
          progressive:  { form: "nagkakaraoke",    use: "Currently doing karaoke",                    example: "Nagkakaraoke sila ngayon. — They are doing karaoke now." },
          contemplated: { form: "magkakaraoke",    use: "Will do karaoke",                            example: "Magkakaraoke sila bukas. — They will karaoke tomorrow." }
        }
      }
    }
  },

  // WORK / BUSINESS
  benta: {
    root: "benta",
    meaning: "to sell",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The seller is the focus.",
        forms: {
          infinitive:   { form: "magbenta",     use: "To sell",                                    example: "Magbenta ka ng pagkain. — Sell food." },
          complete:     { form: "nagbenta",     use: "Sold — past",                                  example: "Nagbenta siya ng tinapay. — He sold bread." },
          progressive:  { form: "nagbebenta",   use: "Currently selling",                            example: "Nagbebenta siya ngayon. — He is selling now." },
          contemplated: { form: "magbebenta",   use: "Will sell",                                    example: "Magbebenta siya bukas. — He will sell tomorrow." }
        }
      }
    }
  },

  negosyo: {
    root: "negosyo",
    meaning: "to do business / to run a business",
    notes: "Takes mag- (from Spanish 'negocio')",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The businessperson is the focus.",
        forms: {
          infinitive:   { form: "magnegosyo",     use: "To do business",                            example: "Magnegosyo siya ngayon. — He does business now." },
          complete:     { form: "nagnegosyo",     use: "Did business — past",                        example: "Nagnegosyo siya kagabi. — He did business last night." },
          progressive:  { form: "nagnenegosyo",   use: "Currently doing business",                  example: "Nagnenegosyo siya ngayon. — He is doing business now." },
          contemplated: { form: "magnenegosyo",   use: "Will do business",                          example: "Magnenegosyo siya bukas. — He will do business tomorrow." }
        }
      }
    }
  },

  // AGRICULTURE
  ani: {
    root: "ani",
    meaning: "to harvest",
    notes: "Takes mag- and -um-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The harvester is the focus.",
        forms: {
          infinitive:   { form: "mag-ani",     use: "To harvest",                                 example: "Mag-ani tayo ng palay. — Let's harvest rice." },
          complete:     { form: "nag-ani",     use: "Harvested — past",                            example: "Nag-ani sila kagabi. — They harvested last night." },
          progressive:  { form: "nagaani",     use: "Currently harvesting",                        example: "Nagaani sila ngayon. — They are harvesting now." },
          contemplated: { form: "mag-aani",    use: "Will harvest",                                example: "Mag-aani sila bukas. — They will harvest tomorrow." }
        }
      }
    }
  },

  tanim: {
    root: "tanim",
    meaning: "to plant",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The planter is the focus.",
        forms: {
          infinitive:   { form: "magtanim",     use: "To plant",                                  example: "Magtanim ka ng gulay. — Plant vegetables." },
          complete:     { form: "nagtanim",     use: "Planted — past",                             example: "Nagtanim siya kagabi. — He planted last night." },
          progressive:  { form: "nagtatanim",   use: "Currently planting",                         example: "Nagtatanim siya ngayon. — He is planting now." },
          contemplated: { form: "magtatanim",   use: "Will plant",                                  example: "Magtatanim siya bukas. — He will plant tomorrow." }
        }
      }
    }
  },

  // COUNTING / MEASURING
  bilang: {
    root: "bilang",
    meaning: "to count / to consider",
    notes: "Takes mag- and -in",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The counter is the focus.",
        forms: {
          infinitive:   { form: "magbilang",     use: "To count",                                  example: "Magbilang ka ng pera. — Count the money." },
          complete:     { form: "nagbilang",     use: "Counted — past",                             example: "Nagbilang siya kagabi. — He counted last night." },
          progressive:  { form: "nagbibilang",   use: "Currently counting",                          example: "Nagbibilang siya ngayon. — He is counting now." },
          contemplated: { form: "magbibilang",   use: "Will count",                                  example: "Magbibilang siya bukas. — He will count tomorrow." }
        }
      }
    }
  },

  // COOKING (more)
  gisa: {
    root: "gisa",
    meaning: "to sauté / to stir-fry",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person sautéing is the focus.",
        forms: {
          infinitive:   { form: "maggisa",     use: "To sauté",                                    example: "Maggisa ka ng sibuyas. — Sauté onions." },
          complete:     { form: "naggisa",     use: "Sautéed — past",                               example: "Naggisa siya kagabi. — He sautéed last night." },
          progressive:  { form: "naggigisa",   use: "Currently sautéing",                           example: "Naggigisa siya ngayon. — He is sautéing now." },
          contemplated: { form: "maggigisa",   use: "Will sauté",                                    example: "Maggigisa siya bukas. — He will sauté tomorrow." }
        }
      }
    }
  },

  buhos: {
    root: "buhos",
    meaning: "to pour",
    notes: "Takes mag- and -um-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person pouring is the focus.",
        forms: {
          infinitive:   { form: "magbuhos",     use: "To pour",                                    example: "Magbuhos ka ng tubig. — Pour water." },
          complete:     { form: "nagbuhos",     use: "Poured — past",                                example: "Nagbuhos siya ng tubig. — He poured water." },
          progressive:  { form: "nagbubuhos",   use: "Currently pouring",                            example: "Nagbubuhos siya ngayon. — He is pouring now." },
          contemplated: { form: "magbubuhos",   use: "Will pour",                                    example: "Magbubuhos siya bukas. — He will pour tomorrow." }
        }
      }
    }
  },

  // EMOTIONS / STATE (more)
  selos: {
    root: "selos",
    meaning: "to be jealous",
    notes: "Stative (ma-) focus. (from Spanish 'celos')",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "The person in the state of jealousy is the focus.",
        forms: {
          infinitive:   { form: "maselan",   use: "To become jealous", /* note: actual word is 'magselos' but 'maselan' is stative */ example: "Magseselos siya. — He will be jealous." },
          complete:     { form: "naselan",   use: "Became jealous — past",                       example: "Nagseselos siya kagabi. — He was jealous last night." },
          progressive:  { form: "naseselan", use: "Being jealous (ongoing)",                     example: "Naseselan siya ngayon. — He is being jealous now." },
          contemplated: { form: "maseselan", use: "Will become jealous",                          example: "Maseselan siya bukas. — He will become jealous tomorrow." }
        }
      },
      "Actor (mag-)": {
        focus: "Actor Focus (mag- variant)",
        description: "The jealous person performing the action of being jealous.",
        forms: {
          infinitive:   { form: "magselos",     use: "To be jealous (action)",                    example: "Magselos siya sa kapatid. — He is jealous of his sibling." },
          complete:     { form: "nagselos",     use: "Was jealous — past",                        example: "Nagselos siya kagabi. — He was jealous last night." },
          progressive:  { form: "nagseselos",   use: "Currently being jealous",                    example: "Nagseselos siya ngayon. — He is being jealous now." },
          contemplated: { form: "magseselos",   use: "Will be jealous",                           example: "Magseselos siya bukas. — He will be jealous tomorrow." }
        }
      }
    }
  },

  // OTHER COMMON
  kita: {
    root: "kita",
    meaning: "to meet / to see each other",
    notes: "Reciprocal: 'magkita' (to meet each other). Also: 'kita' = earnings (noun)",
    conjugations: {
      "Reciprocal (mag-...-an)": {
        focus: "Reciprocal / Mutual Focus",
        description: "Meeting each other (appointments, dates, reunions).",
        forms: {
          infinitive:   { form: "magkita",     use: "To meet each other (infinitive)",          example: "Magkita tayo mamaya. — Let's meet later." },
          complete:     { form: "nagkita",     use: "Met each other — past",                    example: "Nagkita sila kagabi. — They met each other last night." },
          progressive:  { form: "nagkikita",   use: "Currently meeting each other",             example: "Nagkikita sila ngayon. — They are meeting each other now." },
          contemplated: { form: "magkikita",   use: "Will meet each other",                      example: "Magkikita sila bukas. — They will meet each other tomorrow." }
        }
      }
    }
  },

  // TIME OF DAY
  gabi: {
    root: "gabi",
    meaning: "to become night / evening",
    notes: "Stative; often 'Gabi na' (It's already night)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — time)",
        description: "The evening/night state.",
        forms: {
          infinitive:   { form: "magabi",   use: "To become evening/night",                     example: "Magabi na. — It's getting night." },
          complete:     { form: "nagabi",   use: "Became evening/night — past",                  example: "Nagabi kagabi. — It became night last night." },
          progressive:  { form: "nagagabi", use: "Getting evening/night (ongoing)",              example: "Nagagabi na. — It's getting night now." },
          contemplated: { form: "magagabi", use: "Will become evening/night",                    example: "Magagabi na bukas. — It will be night tomorrow." }
        }
      }
    }
  },

  // TYPING / TEXTING
  type: {
    root: "type",
    meaning: "to type",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person typing is the focus.",
        forms: {
          infinitive:   { form: "mag-type",     use: "To type",                                    example: "Mag-type ka ng mensahe. — Type a message." },
          complete:     { form: "nag-type",     use: "Typed — past",                                example: "Nag-type siya kagabi. — He typed last night." },
          progressive:  { form: "nagtitype",    use: "Currently typing",                            example: "Nagtitype siya ngayon. — He is typing now." },
          contemplated: { form: "magtitype",    use: "Will type",                                    example: "Magtitype siya bukas. — He will type tomorrow." }
        }
      }
    }
  },

  // COMMUNICATION (more)
  chat: {
    root: "chat",
    meaning: "to chat / to message",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person chatting is the focus.",
        forms: {
          infinitive:   { form: "mag-chat",     use: "To chat / to message",                     example: "Mag-chat ka sa kanya. — Chat with him/her." },
          complete:     { form: "nag-chat",     use: "Chatted — past",                            example: "Nag-chat sila kagabi. — They chatted last night." },
          progressive:  { form: "nagchachat",   use: "Currently chatting",                          example: "Nagchachat sila ngayon. — They are chatting now." },
          contemplated: { form: "magchachat",   use: "Will chat",                                    example: "Magchachat sila bukas. — They will chat tomorrow." }
        }
      }
    }
  },

  // DAILY ACTIONS
  hilamos: {
    root: "hilamos",
    meaning: "to wash (face / body)",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person washing (face/body) is the focus.",
        forms: {
          infinitive:   { form: "maghilamos",     use: "To wash (face/body)",                     example: "Maghilamos ka tuwing umaga. — Wash (your face) every morning." },
          complete:     { form: "naghilamos",     use: "Washed — past",                            example: "Naghilamos siya kagabi. — He washed last night." },
          progressive:  { form: "naghihilamos",   use: "Currently washing",                         example: "Naghihilamos siya ngayon. — He is washing now." },
          contemplated: { form: "maghihilamos",   use: "Will wash",                                  example: "Maghihilamos siya bukas. — He will wash tomorrow." }
        }
      }
    }
  },

  // RECEIVE
  // tanggap (already in db)
  // buhay (life) as state
  buhay: {
    root: "buhay",
    meaning: "to live / to be alive",
    notes: "Takes -um- and mag-",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "The person living is the focus.",
        forms: {
          infinitive:   { form: "mabuhay",   use: "To live / to be alive",                       example: "Mabuhay ka! — Long live! / Be alive!" },
          complete:     { form: "nabuhay",   use: "Lived — past",                                  example: "Nabuhay siya nang mahaba. — He lived a long life." },
          progressive:  { form: "nabubuhay", use: "Currently living",                             example: "Nabubuhay siya ngayon. — He is living now." },
          contemplated: { form: "mabubuhay", use: "Will live",                                     example: "Mabubuhay siya nang mahaba. — He will live long." }
        }
      }
    }
  },

  // MORE USEFUL
  kainin: {
    root: "kainin",
    meaning: "to eat (something specific) — emphasis on -in form",
    notes: "This is just the -in focus of 'kain' but listed separately for emphasis. Already in 'kain' but distinct usage in food order contexts.",
    conjugations: {
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focus on what is being eaten (becomes the subject).",
        forms: {
          infinitive:   { form: "kainin",   use: "To eat (something specific)",                example: "Kainin mo ang gulay. — Eat the vegetables." },
          complete:     { form: "kinain",   use: "Ate (something) — past",                     example: "Kinain niya ang gulay. — He/she ate the vegetables." },
          progressive:  { form: "kinakain", use: "Eating (something) — ongoing",                example: "Kinakain niya ang gulay. — He/she is eating the vegetables." },
          contemplated: { form: "kakainin", use: "Will eat (something)",                        example: "Kakainin niya ang gulay. — He/she will eat the vegetables." }
        }
      }
    }
  },

  // ============== BATCH 5: 40 more verbs - adjectives, weather, more ==============
  // ADJECTIVES (stative - very common in everyday speech)
  bigat: {
    root: "bigat",
    meaning: "to be heavy",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being heavy.",
        forms: {
          infinitive:   { form: "mabigat",   use: "To be heavy / to become heavy",               example: "Mabigat ang bag. — The bag is heavy." },
          complete:     { form: "nabigat",   use: "Became heavy — past",                          example: "Nabigat ang bag. — The bag got heavy." },
          progressive:  { form: "nagbibigat", use: "Getting heavy (ongoing)",                      example: "Nagbibigat ang bag. — The bag is getting heavy." },
          contemplated: { form: "mabibigat", use: "Will be heavy",                                 example: "Mabibigat ang bag. — The bag will be heavy." }
        }
      }
    }
  },

  gaan: {
    root: "gaan",
    meaning: "to be light (weight)",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being light.",
        forms: {
          infinitive:   { form: "magaan",   use: "To be light / to become light",                example: "Magaan ang bag. — The bag is light." },
          complete:     { form: "nagaan",   use: "Became light — past",                           example: "Nagaan ang bag. — The bag got light." },
          progressive:  { form: "naggagaan", use: "Getting light (ongoing)",                       example: "Naggagaan ang bag. — The bag is getting light." },
          contemplated: { form: "magagaan", use: "Will be light",                                  example: "Magagaan ang bag. — The bag will be light." }
        }
      }
    }
  },

  haba: {
    root: "haba",
    meaning: "to be long",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being long.",
        forms: {
          infinitive:   { form: "mahaba",   use: "To be long / to become long",                  example: "Mahaba ang buhok ko. — My hair is long." },
          complete:     { form: "nahaba",   use: "Became long — past",                           example: "Nahaba ang buhok ko. — My hair got long." },
          progressive:  { form: "nahahaba", use: "Getting long (ongoing)",                        example: "Nahahaba ang buhok ko. — My hair is getting long." },
          contemplated: { form: "mahahaba", use: "Will be long",                                  example: "Mahahaba ang buhok ko. — My hair will be long." }
        }
      }
    }
  },

  ikli: {
    root: "ikli",
    meaning: "to be short (length / time)",
    notes: "Stative (ma-) focus. Also: 'maikli' (short)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being short.",
        forms: {
          infinitive:   { form: "maikli",   use: "To be short / to become short",                example: "Maikli ang oras. — The time is short." },
          complete:     { form: "naikli",   use: "Became short — past",                          example: "Naikli ang oras. — The time got short." },
          progressive:  { form: "naiikli",  use: "Getting short (ongoing)",                       example: "Naiikli ang oras. — The time is getting short." },
          contemplated: { form: "maiikli",  use: "Will be short",                                 example: "Maiikli ang oras. — The time will be short." }
        }
      }
    }
  },

  baba: {
    root: "baba",
    meaning: "to be low / to go down (height/level)",
    notes: "Stative (ma-) focus. (Different meaning from 'baba' = to descend)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being low.",
        forms: {
          infinitive:   { form: "mababa",   use: "To be low / to become low",                    example: "Mababa ang mesa. — The table is low." },
          complete:     { form: "nababa",   use: "Became low — past",                             example: "Nababa ang mesa. — The table got low." },
          progressive:  { form: "nagbababa", use: "Getting low (ongoing)",                         example: "Nagbababa ang presyo. — The price is getting low." },
          contemplated: { form: "mabababa", use: "Will be low",                                    example: "Mabababa ang presyo. — The price will be low." }
        }
      }
    }
  },

  bilis: {
    root: "bilis",
    meaning: "to be fast / to be quick",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being fast.",
        forms: {
          infinitive:   { form: "mabilis",  use: "To be fast / to become fast",                  example: "Mabilis ang kotse. — The car is fast." },
          complete:     { form: "nabilis",  use: "Became fast — past",                             example: "Nabilis ang kotse. — The car got fast." },
          progressive:  { form: "nagmamabilis", use: "Getting fast (ongoing)",                       example: "Nagmamabilis ang kotse. — The car is getting fast." },
          contemplated: { form: "mamabilis", use: "Will be fast",                                  example: "Mamabilis ang kotse. — The car will be fast." }
        }
      }
    }
  },

  bagal: {
    root: "bagal",
    meaning: "to be slow",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being slow.",
        forms: {
          infinitive:   { form: "mabagal",  use: "To be slow / to become slow",                  example: "Mabagal ang bus. — The bus is slow." },
          complete:     { form: "nabagal",  use: "Became slow — past",                             example: "Nabagal ang bus. — The bus got slow." },
          progressive:  { form: "nagmamabagal", use: "Getting slow (ongoing)",                       example: "Nagmamabagal ang bus. — The bus is getting slow." },
          contemplated: { form: "mamabagal", use: "Will be slow",                                  example: "Mamabagal ang bus. — The bus will be slow." }
        }
      }
    }
  },

  mura: {
    root: "mura",
    meaning: "to be cheap",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being cheap.",
        forms: {
          infinitive:   { form: "mamura",   use: "To be cheap / to become cheap",                example: "Mamura ito. — This is cheap." },
          complete:     { form: "namura",   use: "Became cheap — past",                           example: "Namura ito. — This got cheap." },
          progressive:  { form: "nagmamura", use: "Getting cheap (ongoing)",                       example: "Nagmamura ang bilihin. — Things are getting cheap." },
          contemplated: { form: "mamamura", use: "Will be cheap",                                  example: "Mamamura ang bilihin. — Things will be cheap." }
        }
      }
    }
  },

  mahal: {
    root: "mahal",
    meaning: "to be expensive",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being expensive.",
        forms: {
          infinitive:   { form: "mamahal",  use: "To be expensive / to become expensive",         example: "Mamahal ito. — This is/will be expensive." },
          complete:     { form: "namahal",  use: "Became expensive — past",                        example: "Namahal ito. — This got expensive." },
          progressive:  { form: "nagmamahal", use: "Getting expensive (ongoing)",                    example: "Nagmamahal ang bilihin. — Things are getting expensive." },
          contemplated: { form: "mamamahal", use: "Will be expensive",                              example: "Mamamahal ang bilihin. — Things will be expensive." }
        }
      }
    }
  },

  laki: {
    root: "laki",
    meaning: "to be big / to grow (in size)",
    notes: "Stative (ma-) focus for adjective / mag- for the action",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being big.",
        forms: {
          infinitive:   { form: "malaki",   use: "To be big / to become big",                    example: "Malaki ang bahay. — The house is big." },
          complete:     { form: "nalaki",   use: "Became big — past",                             example: "Nalaki ang bata. — The child got big." },
          progressive:  { form: "naglalaki", use: "Getting big (ongoing)",                         example: "Naglalaki ang bata. — The child is getting big." },
          contemplated: { form: "malalaki", use: "Will be big",                                    example: "Malalaki ang bata. — The child will be big." }
        }
      }
    }
  },

  liit: {
    root: "liit",
    meaning: "to be small",
    notes: "Stative (ma-) focus. (Note: 'liit' as verb; noun is 'liitan' or use 'maliit')",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being small.",
        forms: {
          infinitive:   { form: "maliit",   use: "To be small / to become small",                example: "Maliit ang bahay. — The house is small." },
          complete:     { form: "naliit",   use: "Became small — past",                            example: "Naliit ang kuwarto. — The room got small." },
          progressive:  { form: "nagliliit", use: "Getting small (ongoing)",                       example: "Nagliliit ang bahay. — The house is getting small." },
          contemplated: { form: "maliit",   use: "Will be small",                                  example: "Maliit ang bahay. — The house will be small." }
        }
      }
    }
  },

  ganda: {
    root: "ganda",
    meaning: "to be beautiful / pretty",
    notes: "Stative (ma-) focus. (Note: 'maganda' for 'beautiful' is more common as an adjective; 'ganda' as a verb is the action of becoming beautiful)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being beautiful.",
        forms: {
          infinitive:   { form: "maganda",  use: "To be beautiful / to become beautiful",        example: "Maganda siya. — She is beautiful." },
          complete:     { form: "naganda",  use: "Became beautiful — past",                       example: "Naganda siya. — She became beautiful." },
          progressive:  { form: "nagiganda", use: "Getting beautiful (ongoing)",                  example: "Nagiganda siya ngayon. — She is getting beautiful now." },
          contemplated: { form: "magiganda", use: "Will be beautiful",                            example: "Magiganda siya bukas. — She will be beautiful tomorrow." }
        }
      }
    }
  },

  pangit: {
    root: "pangit",
    meaning: "to be ugly",
    notes: "Stative (ma-) focus. ('Mapangit' is sometimes used)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being ugly.",
        forms: {
          infinitive:   { form: "mapangit", use: "To be ugly / to become ugly",                  example: "Mapangit ito. — This is ugly." },
          complete:     { form: "napangit", use: "Became ugly — past",                            example: "Napangit ito. — This got ugly." },
          progressive:  { form: "nagmamapangit", use: "Getting ugly (ongoing)",                     example: "Nagmamapangit ito. — This is getting ugly." },
          contemplated: { form: "mamapangit", use: "Will be ugly",                                  example: "Mamapangit ito. — This will be ugly." }
        }
      }
    }
  },

  bago: {
    root: "bago",
    meaning: "to be new",
    notes: "Stative (ma-) focus. ('Bago' can also be 'before' as a conjunction)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being new.",
        forms: {
          infinitive:   { form: "mabago",   use: "To be new / to become new",                    example: "Mabago ang kotse. — The car is new." },
          complete:     { form: "nabago",   use: "Became new — past",                             example: "Nabago ang kotse. — The car got new." },
          progressive:  { form: "nagbabago", use: "Becoming new / changing (ongoing)",              example: "Nagbabago ang kotse. — The car is getting new." },
          contemplated: { form: "mababago", use: "Will be new",                                    example: "Mababago ang kotse. — The car will be new." }
        }
      }
    }
  },

  luma: {
    root: "luma",
    meaning: "to be old / aged",
    notes: "Stative (ma-) focus. (Different from 'luma' as noun)",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — adjective)",
        description: "The thing in the state of being old.",
        forms: {
          infinitive:   { form: "maluma",   use: "To be old / to become old",                    example: "Maluma na ang bahay. — The house is old now." },
          complete:     { form: "naluma",   use: "Became old — past",                             example: "Naluma ang bahay. — The house got old." },
          progressive:  { form: "naglulumaluma", use: "Getting old (ongoing)",                       example: "Naglulumaluma ang bahay. — The house is getting old." },
          contemplated: { form: "malulumaluma", use: "Will be old",                                  example: "Malulumaluma ang bahay. — The house will be old." }
        }
      }
    }
  },

  // WEATHER
  ulan: {
    root: "ulan",
    meaning: "to rain",
    notes: "Takes -um- (umuulan — impersonal 'it is raining')",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus (Impersonal)",
        description: "The rain is the focus — the natural phenomenon. Often used impersonally.",
        forms: {
          infinitive:   { form: "umulan",   use: "To rain",                                       example: "Umuulan ngayon. — It's raining now." },
          complete:     { form: "umulan",   use: "Rained — past",                                  example: "Umuulan kagabi. — It rained last night." },
          progressive:  { form: "umuulan",  use: "Currently raining",                              example: "Umuulan ngayon. — It is raining now." },
          contemplated: { form: "ulan",     use: "Will rain",                                      example: "Uulan bukas. — It will rain tomorrow." }
        }
      }
    }
  },

  // EMOTIONS / MENTAL
  alala: {
    root: "alala",
    meaning: "to remember / to recall",
    notes: "Stative (ma-) focus for the state. Mag- for the action.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — remembering)",
        description: "The person in the state of remembering.",
        forms: {
          infinitive:   { form: "maalala",  use: "To remember",                                  example: "Maalala mo ba ako? — Do you remember me?" },
          complete:     { form: "naalala",  use: "Remembered — past",                             example: "Naalala ko siya. — I remembered him/her." },
          progressive:  { form: "naaalala", use: "Remembering (ongoing)",                          example: "Naaalala ko siya. — I am remembering him/her." },
          contemplated: { form: "maaalala", use: "Will remember",                                  example: "Maaalala ko siya bukas. — I will remember him/her." }
        }
      }
    }
  },

  limot: {
    root: "limot",
    meaning: "to forget",
    notes: "Stative (ma-) focus for the state. Mag- for the action.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — forgetting)",
        description: "The person in the state of forgetting.",
        forms: {
          infinitive:   { form: "makalimot",  use: "To forget",                                  example: "Makalimot ka. — You will forget." },
          complete:     { form: "nakalimot",  use: "Forgot — past",                              example: "Nakalimot siya. — He forgot." },
          progressive:  { form: "nakakalimot", use: "Forgetting (ongoing)",                       example: "Nakakalimot siya. — He is forgetting." },
          contemplated: { form: "makakalimot", use: "Will forget",                                example: "Makakalimot siya bukas. — He will forget." }
        }
      }
    }
  },

  sisi: {
    root: "sisi",
    meaning: "to regret / to feel sorry",
    notes: "Stative (ma-) focus for state. Mag- for the action.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus (Action — regretting)",
        description: "The person actively feeling regret.",
        forms: {
          infinitive:   { form: "magsisi",   use: "To regret / to feel sorry",                  example: "Magsisi ka. — You will regret it." },
          complete:     { form: "nagsisi",   use: "Regretted — past",                             example: "Nagsisi siya. — He regretted it." },
          progressive:  { form: "nagsisisi", use: "Currently regretting",                          example: "Nagsisisi siya ngayon. — He is regretting it now." },
          contemplated: { form: "magsisisi", use: "Will regret",                                   example: "Magsisisi siya bukas. — He will regret it tomorrow." }
        }
      }
    }
  },

  bigo: {
    root: "bigo",
    meaning: "to fail / to be disappointed",
    notes: "Stative (ma-) focus",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative — failure/disappointment)",
        description: "The person in the state of having failed.",
        forms: {
          infinitive:   { form: "mabigo",   use: "To fail / to become disappointed",            example: "Mabigo siya. — He will fail." },
          complete:     { form: "nabigo",   use: "Failed — past",                                example: "Nabigo siya sa exam. — He failed the exam." },
          progressive:  { form: "nagbebigo", use: "Currently failing",                            example: "Nagbebigo siya sa exam. — He is failing the exam." },
          contemplated: { form: "mabibigo", use: "Will fail",                                     example: "Mabibigo siya sa exam. — He will fail the exam." }
        }
      }
    }
  },

  // BODY / HYGIENE
  ligo: {
    root: "ligo",
    meaning: "to bathe / to take a bath / to swim",
    notes: "Takes mag- (also used for swimming)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The bather/swimmer is the focus.",
        forms: {
          infinitive:   { form: "magligo",   use: "To bathe / to swim",                        example: "Magligo ka na. — Bathe now." },
          complete:     { form: "nagligo",   use: "Bathed / swam — past",                       example: "Nagligo siya kagabi. — He bathed last night." },
          progressive:  { form: "naglilig",  use: "Currently bathing",                           example: "Naglilig siya ngayon. — He is bathing now." },
          contemplated: { form: "maglilig",  use: "Will bathe",                                  example: "Maglilig siya bukas. — He will bathe tomorrow." }
        }
      }
    }
  },

  ahit: {
    root: "ahit",
    meaning: "to shave",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person shaving is the focus.",
        forms: {
          infinitive:   { form: "mag-ahit",   use: "To shave",                                 example: "Mag-ahit ka tuwing umaga. — Shave every morning." },
          complete:     { form: "nag-ahit",   use: "Shaved — past",                            example: "Nag-ahit siya kagabi. — He shaved last night." },
          progressive:  { form: "nagaahit",   use: "Currently shaving",                         example: "Nagaahit siya ngayon. — He is shaving now." },
          contemplated: { form: "mag-aahit",  use: "Will shave",                                example: "Mag-aahit siya bukas. — He will shave tomorrow." }
        }
      }
    }
  },

  // SPORTS (more)
  badminton: {
    root: "badminton",
    meaning: "to play badminton",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The badminton player is the focus.",
        forms: {
          infinitive:   { form: "magbadminton",  use: "To play badminton",                       example: "Magbadminton tayo sa hapon. — Let's play badminton in the afternoon." },
          complete:     { form: "nagbadminton",  use: "Played badminton — past",                 example: "Nagbadminton siya kagabi. — He played badminton last night." },
          progressive:  { form: "nagbabdminton", use: "Currently playing badminton",             example: "Nagbabdminton siya ngayon. — He is playing badminton now." },
          contemplated: { form: "magbabdminton", use: "Will play badminton",                      example: "Magbabdminton siya bukas. — He will play badminton tomorrow." }
        }
      }
    }
  },

  volleyball: {
    root: "volleyball",
    meaning: "to play volleyball",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The volleyball player is the focus.",
        forms: {
          infinitive:   { form: "magvolleyball",  use: "To play volleyball",                   example: "Magvolleyball tayo sa Sabado. — Let's play volleyball on Saturday." },
          complete:     { form: "nagvolleyball",  use: "Played volleyball — past",              example: "Nagvolleyball siya kagabi. — He played volleyball last night." },
          progressive:  { form: "nagbovolleyball", use: "Currently playing volleyball",         example: "Nagbovolleyball siya ngayon. — He is playing volleyball now." },
          contemplated: { form: "magbovolleyball", use: "Will play volleyball",                  example: "Magbovolleyball siya bukas. — He will play volleyball tomorrow." }
        }
      }
    }
  },

  // COOKING (more)
  boil: {
    root: "boil",
    meaning: "to boil (cook by boiling)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person boiling food is the focus.",
        forms: {
          infinitive:   { form: "magboil",   use: "To boil",                                   example: "Magboil ka ng tubig. — Boil water." },
          complete:     { form: "nagboil",   use: "Boiled — past",                              example: "Nagboil siya ng tubig. — He boiled water." },
          progressive:  { form: "nagboboil", use: "Currently boiling",                          example: "Nagboboil siya ngayon. — He is boiling now." },
          contemplated: { form: "magboboil", use: "Will boil",                                   example: "Magboboil siya bukas. — He will boil tomorrow." }
        }
      }
    }
  },

  grill: {
    root: "grill",
    meaning: "to grill (cook on a grill)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person grilling is the focus.",
        forms: {
          infinitive:   { form: "maggrill",   use: "To grill",                                 example: "Maggrill ka ng isda. — Grill the fish." },
          complete:     { form: "naggrill",   use: "Grilled — past",                             example: "Naggrill siya ng isda. — He grilled fish." },
          progressive:  { form: "naggrigrill", use: "Currently grilling",                         example: "Naggrigrill siya ngayon. — He is grilling now." },
          contemplated: { form: "maggrigrill", use: "Will grill",                                 example: "Maggrigrill siya bukas. — He will grill tomorrow." }
        }
      }
    }
  },

  bake: {
    root: "bake",
    meaning: "to bake (cook in oven)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person baking is the focus.",
        forms: {
          infinitive:   { form: "magbake",    use: "To bake",                                 example: "Magbake ka ng cake. — Bake a cake." },
          complete:     { form: "nagbake",    use: "Baked — past",                              example: "Nagbake siya ng cake. — He baked a cake." },
          progressive:  { form: "nagbabake",  use: "Currently baking",                           example: "Nagbabake siya ngayon. — He is baking now." },
          contemplated: { form: "magbabake",  use: "Will bake",                                   example: "Magbabake siya bukas. — He will bake tomorrow." }
        }
      }
    }
  },

  // WORK (more)
  resign: {
    root: "resign",
    meaning: "to resign (quit a job)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person resigning is the focus.",
        forms: {
          infinitive:   { form: "magresign",   use: "To resign",                                example: "Magresign siya sa trabaho. — He will resign from work." },
          complete:     { form: "nagresign",   use: "Resigned — past",                            example: "Nagresign siya sa trabaho. — He resigned from work." },
          progressive:  { form: "nagresign",   use: "Currently resigning",                       example: "Nagresign siya ngayon. — He is resigning now." },
          contemplated: { form: "magresign",   use: "Will resign",                                example: "Magresign siya bukas. — He will resign tomorrow." }
        }
      }
    }
  },

  // MONEY (more)
  withdraw: {
    root: "withdraw",
    meaning: "to withdraw (money from bank)",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The person withdrawing money is the focus.",
        forms: {
          infinitive:   { form: "mag-withdraw",  use: "To withdraw (money)",                   example: "Mag-withdraw ka ng pera. — Withdraw money." },
          complete:     { form: "nag-withdraw",  use: "Withdrew — past",                       example: "Nag-withdraw siya ng pera. — He withdrew money." },
          progressive:  { form: "nagwiwithdraw", use: "Currently withdrawing",                 example: "Nagwiwithdraw siya ngayon. — He is withdrawing now." },
          contemplated: { form: "magwiwithdraw", use: "Will withdraw",                          example: "Magwiwithdraw siya bukas. — He will withdraw tomorrow." }
        }
      }
    }
  },

  // COMMUNICATION (more)
  email: {
    root: "email",
    meaning: "to email",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The emailer is the focus.",
        forms: {
          infinitive:   { form: "mag-email",   use: "To email",                              example: "Mag-email ka sa kanya. — Email him/her." },
          complete:     { form: "nag-email",   use: "Emailed — past",                         example: "Nag-email siya kagabi. — He emailed last night." },
          progressive:  { form: "nag-eemail",  use: "Currently emailing",                      example: "Nag-eemail siya ngayon. — He is emailing now." },
          contemplated: { form: "mag-eemail",  use: "Will email",                              example: "Mag-eemail siya bukas. — He will email tomorrow." }
        }
      }
    }
  },

  share: {
    root: "share",
    meaning: "to share",
    notes: "Takes mag- (English loanword)",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The sharer is the focus.",
        forms: {
          infinitive:   { form: "mag-share",  use: "To share",                               example: "Mag-share ka ng kwento. — Share a story." },
          complete:     { form: "nag-share",  use: "Shared — past",                           example: "Nag-share siya ng kwento. — He shared a story." },
          progressive:  { form: "nagsha-share", use: "Currently sharing",                      example: "Nagsha-share siya ngayon. — He is sharing now." },
          contemplated: { form: "magsha-share", use: "Will share",                              example: "Magsha-share siya bukas. — He will share tomorrow." }
        }
      }
    }
  },

  // BECOMING
  maging: {
    root: "maging",
    meaning: "to become",
    notes: "Takes mag-",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "The transformation — the subject is becoming something.",
        forms: {
          infinitive:   { form: "maging",     use: "To become",                                example: "Maging doktor siya. — He will become a doctor." },
          complete:     { form: "naging",     use: "Became — past",                            example: "Naging doktor siya. — He became a doctor." },
          progressive:  { form: "nagmimithi", use: "Currently becoming",                       example: "Nagmimithi siya nang mas mabuti. — He is becoming better." },
          contemplated: { form: "magiging",   use: "Will become",                              example: "Magiging doktor siya. — He will become a doctor." }
        }
      }
    }
  },

  // ============== 20 NEW CURATED VERBS ==============
  gawa: {
    root: "gawa",
    meaning: "to make / to do",
    notes: "Polymorphic: takes both -um- and mag- forms. The -um- form focuses on the result; mag- focuses on the action.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one making/doing something. Most common form for active making/doing.",
        forms: {
          infinitive:   { form: "gawa",     use: "To do / to make (infinitive)",                  example: "Gawa tayo ng proyekto. — Let's make a project." },
          complete:     { form: "gawa",     use: "Did / made — past",                              example: "Gawa niya ng cake kagabi. — She made a cake last night." },
          progressive:  { form: "gagawa",   use: "Currently making / doing",                       example: "Gagawa siya ng assignment ngayon. — She is doing homework now." },
          contemplated: { form: "gagawa",   use: "Will make / will do",                            example: "Gagawa siya ng cake bukas. — She will make a cake tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being made.",
        forms: {
          infinitive:   { form: "gawin",     use: "To make (something specific)",                  example: "Gawin mo ang assignment. — Do the assignment." },
          complete:     { form: "ginawa",    use: "Made (something) — past",                       example: "Ginawa niya ang assignment kagabi. — He did the assignment last night." },
          progressive:  { form: "ginagawa",  use: "Making (something) — ongoing",                  example: "Ginagawa niya ngayon ang assignment. — He is doing the assignment now." },
          contemplated: { form: "gagawin",    use: "Will make (something)",                         example: "Gagawin niya bukas ang report. — He will do the report tomorrow." }
        }
      },
      "Locative (-an)": {
        focus: "Locative Focus",
        description: "Focuses on the place where the work is done.",
        forms: {
          infinitive:   { form: "gawan",     use: "To make at (a place)",                          example: "Gawan mo ng cake ang kusina. — Make a cake in the kitchen." },
          complete:     { form: "ginawan",   use: "Worked at (a place) — past",                    example: "Ginawan niya ng bahay ang lote. — He built a house on the lot." },
          progressive:  { form: "ginagawa",  use: "Working at (a place) — ongoing",                example: "Ginagawa niya ang opisina ngayon. — He is working on the office now." },
          contemplated: { form: "gagawaan",  use: "Will work at (a place)",                        example: "Gagawaan niya bukas ang bagong kwarto. — He will work on the new room tomorrow." }
        }
      }
    }
  },

  sabi: {
    root: "sabi",
    meaning: "to say / to tell",
    notes: "Takes mag- for active saying. The conjugated form 'sabi' itself is the root word as a noun ('saying') too.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one saying something. Very common in everyday speech.",
        forms: {
          infinitive:   { form: "sabi",     use: "To say / to tell (infinitive)",                 example: "Sabi mo sa kanya ang totoo. — Tell him the truth." },
          complete:     { form: "nagsabi",  use: "Said / told — past",                              example: "Nagsabi siya ng totoo kagabi. — She told the truth last night." },
          progressive:  { form: "nagsasabi",use: "Currently saying / telling",                     example: "Nagsasabi siya ng kwento ngayon. — She is telling a story now." },
          contemplated: { form: "magsasabi",use: "Will say / will tell",                            example: "Magsasabi siya ng plano bukas. — He will tell the plan tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being said.",
        forms: {
          infinitive:   { form: "sabihin",   use: "To say (something specific)",                  example: "Sabihin mo ang totoo. — Say the truth." },
          complete:     { form: "sinabi",    use: "Said (something) — past",                       example: "Sinabi niya ang totoo kagabi. — He said the truth last night." },
          progressive:  { form: "sinabi",    use: "Saying (something) — ongoing",                  example: "Sinabi niya ang plano ngayon. — He is saying the plan now." },
          contemplated: { form: "sasabihin", use: "Will say (something)",                          example: "Sasabihin niya bukas ang plano. — He will say the plan tomorrow." }
        }
      }
    }
  },

  hanap: {
    root: "hanap",
    meaning: "to search / to look for",
    notes: "Takes mag- actor focus. The noun 'hanap' = 'search / quest'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one searching. Common for looking for lost items, opportunities.",
        forms: {
          infinitive:   { form: "hanap",     use: "To search / to look for (infinitive)",          example: "Hanap tayo ng magandang lugar. — Let's look for a nice place." },
          complete:     { form: "naghanap",  use: "Searched — past",                                example: "Naghanap siya ng trabaho kagabi. — She looked for a job last night." },
          progressive:  { form: "naghahanap",use: "Currently searching",                            example: "Naghahanap sila ng apartment ngayon. — They are looking for an apartment now." },
          contemplated: { form: "maghahanap",use: "Will search",                                    example: "Maghahanap sila ng bahay bukas. — They will look for a house tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being searched for.",
        forms: {
          infinitive:   { form: "hanapin",   use: "To search for (something specific)",           example: "Hanapin mo ang susi. — Look for the key." },
          complete:     { form: "hinanap",   use: "Searched for (something) — past",                example: "Hinanap niya ang kuwintas kagabi. — She searched for the necklace last night." },
          progressive:  { form: "hinahanap", use: "Searching for (something) — ongoing",           example: "Hinahanap niya ngayon ang wallet. — He is looking for the wallet now." },
          contemplated: { form: "hahanapin", use: "Will search for (something)",                   example: "Hahanapin niya bukas ang libro. — He will look for the book tomorrow." }
        }
      }
    }
  },

  tanggap: {
    root: "tanggap",
    meaning: "to receive / to accept",
    notes: "Takes both -um- and mag- forms.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one receiving. Common for gifts, news, requests.",
        forms: {
          infinitive:   { form: "tanggap",   use: "To receive / to accept (infinitive)",          example: "Tanggap natin ang regalo. — Let's accept the gift." },
          complete:     { form: "nagtanggap",use: "Received / accepted — past",                    example: "Nagtanggap siya ng bulaklak kagabi. — She received flowers last night." },
          progressive:  { form: "nagtatanggap",use: "Currently receiving",                         example: "Nagtatanggap siya ng bisita ngayon. — He is receiving visitors now." },
          contemplated: { form: "magtatatanggap",use: "Will receive",                              example: "Magtatatanggap siya ng award bukas. — He will receive an award tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being received.",
        forms: {
          infinitive:   { form: "tanggapin", use: "To receive (something specific)",              example: "Tanggapin mo ang bulaklak. — Accept the flowers." },
          complete:     { form: "tinanggap", use: "Received (something) — past",                  example: "Tinanggap niya ang bulaklak kagabi. — He received the flowers last night." },
          progressive:  { form: "tinatanggap",use: "Receiving (something) — ongoing",              example: "Tinatanggap niya ang order ngayon. — He is accepting the order now." },
          contemplated: { form: "tatanggapin",use: "Will receive (something)",                     example: "Tatanggapin niya bukas ang parsela. — He will receive the parcel tomorrow." }
        }
      }
    }
  },

  pasa: {
    root: "pasa",
    meaning: "to pass (something to someone)",
    notes: "Takes mag- actor focus and i- object focus.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one passing something.",
        forms: {
          infinitive:   { form: "pasa",      use: "To pass (infinitive)",                          example: "Pasa mo sa kanya ang bola. — Pass him the ball." },
          complete:     { form: "nagpasa",   use: "Passed — past",                                 example: "Nagpasa siya ng sulat kagabi. — She passed a letter last night." },
          progressive:  { form: "nagpapasa", use: "Currently passing",                             example: "Nagpapasa siya ng papeles ngayon. — He is passing papers now." },
          contemplated: { form: "magpapasa", use: "Will pass",                                      example: "Magpapasa siya ng bayad bukas. — He will pass the payment tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focuses on the thing being passed (the object being transferred).",
        forms: {
          infinitive:   { form: "ipasa",     use: "To pass (something) [to someone]",             example: "Ipasa mo ang ballpen sa akin. — Pass the ballpen to me." },
          complete:     { form: "ipinasa",   use: "Passed (something) — past",                    example: "Ipinasa niya ang ballpen kagabi. — He passed the ballpen last night." },
          progressive:  { form: "ipinapasa", use: "Passing (something) — ongoing",                example: "Ipinapasa niya ngayon ang assignment. — He is passing the assignment now." },
          contemplated: { form: "ipapasa",   use: "Will pass (something)",                        example: "Ipapasa niya bukas ang report. — He will pass the report tomorrow." }
        }
      }
    }
  },

  tigil: {
    root: "tigil",
    meaning: "to stop (transitive: to stop something)",
    notes: "Takes mag- for the transitive sense (stopping something). For intransitive, use 'huminto' or 'tumigil'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one stopping something. Common in 'stop the car', 'stop the noise'.",
        forms: {
          infinitive:   { form: "tigil",     use: "To stop (infinitive)",                         example: "Tigil mo ang kotse. — Stop the car." },
          complete:     { form: "nagtigil",  use: "Stopped — past",                                example: "Nagtigil siya ng kotse kagabi. — She stopped the car last night." },
          progressive:  { form: "nagtitigil",use: "Currently stopping",                            example: "Nagtitigil siya ng awto ngayon. — He is stopping the car now." },
          contemplated: { form: "magtitigil",use: "Will stop",                                      example: "Magtitigil siya ng bus bukas. — He will stop the bus tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being stopped.",
        forms: {
          infinitive:   { form: "igilin",    use: "To stop (something specific)",                 example: "Igilin mo ang gulong. — Stop the wheel." },
          complete:     { form: "itinigil",  use: "Stopped (something) — past",                   example: "Itinigil niya ang kotse kagabi. — He stopped the car last night." },
          progressive:  { form: "itinitigil",use: "Stopping (something) — ongoing",               example: "Itinitigil niya ang bus ngayon. — He is stopping the bus now." },
          contemplated: { form: "ititigil",  use: "Will stop (something)",                        example: "Ititigil niya bukas ang bus. — He will stop the bus tomorrow." }
        }
      }
    }
  },

  hintay: {
    root: "hintay",
    meaning: "to wait",
    notes: "Takes mag- actor focus. Common in everyday conversation.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one waiting. The most common way to say 'wait'.",
        forms: {
          infinitive:   { form: "hintay",    use: "To wait (infinitive)",                         example: "Hintay mo ako. — Wait for me." },
          complete:     { form: "naghintay", use: "Waited — past",                                 example: "Naghintay siya ng oras kagabi. — She waited for an hour last night." },
          progressive:  { form: "naghihintay",use: "Currently waiting",                            example: "Naghihintay sila ngayon sa labas. — They are waiting outside now." },
          contemplated: { form: "maghihintay",use: "Will wait",                                     example: "Maghihintay sila bukas sa terminal. — They will wait at the terminal tomorrow." }
        }
      }
    }
  },

  simula: {
    root: "simula",
    meaning: "to begin / to start",
    notes: "Takes mag- actor focus. Common in 'start the meeting', 'begin the game'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one beginning something.",
        forms: {
          infinitive:   { form: "simula",    use: "To begin / to start (infinitive)",              example: "Simula na natin ang klase. — Let's start the class." },
          complete:     { form: "nagsimula", use: "Began / started — past",                        example: "Nagsimula siya ng proyekto kagabi. — He started the project last night." },
          progressive:  { form: "nagsisimula",use: "Currently beginning / starting",               example: "Nagsisimula sila ngayon ng laro. — They are starting the game now." },
          contemplated: { form: "magsisimula",use: "Will begin / will start",                      example: "Magsisimula sila bukas ng negosyo. — They will start a business tomorrow." }
        }
      }
    }
  },

  tapos: {
    root: "tapos",
    meaning: "to finish / to be done",
    notes: "Takes mag- actor focus. Also used as 'done already' ('Tapos na.' = 'It's done.').",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one finishing something.",
        forms: {
          infinitive:   { form: "tapos",     use: "To finish (infinitive)",                       example: "Tapos na natin ang report. — Let's finish the report." },
          complete:     { form: "nagtapos",  use: "Finished — past",                               example: "Nagtapos siya ng trabaho kagabi. — She finished the work last night." },
          progressive:  { form: "nagtatapos",use: "Currently finishing",                          example: "Nagtatapos siya ngayon ng homework. — He is finishing homework now." },
          contemplated: { form: "magtatapos",use: "Will finish",                                   example: "Magtatapos siya bukas ng thesis. — He will finish the thesis tomorrow." }
        }
      }
    }
  },

  tuloy: {
    root: "tuloy",
    meaning: "to continue / to proceed",
    notes: "Takes mag- for active continuing. Also common as a particle ('Tuloy!' = 'Come in!').",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one continuing something.",
        forms: {
          infinitive:   { form: "tuloy",     use: "To continue / to proceed (infinitive)",        example: "Tuloy natin ang usapan. — Let's continue the conversation." },
          complete:     { form: "nagtuloy",  use: "Continued — past",                              example: "Nagtuloy siya sa pag-aaral kagabi. — He continued studying last night." },
          progressive:  { form: "nagtutuloy",use: "Currently continuing",                         example: "Nagtutuloy siya ngayon ng trabaho. — He is continuing work now." },
          contemplated: { form: "magtutuloy",use: "Will continue",                                 example: "Magtutuloy siya bukas sa negosyo. — He will continue the business tomorrow." }
        }
      }
    }
  },

  alis: {
    root: "alis",
    meaning: "to leave / to remove",
    notes: "Takes mag- actor focus. Common in 'leave the house' and 'remove the stain'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one leaving or removing.",
        forms: {
          infinitive:   { form: "alis",      use: "To leave / to remove (infinitive)",            example: "Alis na tayo. — Let's leave now." },
          complete:     { form: "nag-alis",  use: "Left / removed — past",                        example: "Nag-alis siya ng bahay kagabi. — He left the house last night." },
          progressive:  { form: "nag-aalis", use: "Currently leaving / removing",                example: "Nag-aalis siya ngayon ng dumi. — He is removing dirt now." },
          contemplated: { form: "mag-aalis", use: "Will leave / will remove",                     example: "Mag-aalis siya bukas ng mantsa. — He will remove the stain tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being removed.",
        forms: {
          infinitive:   { form: "alisin",    use: "To remove (something specific)",              example: "Alisin mo ang mantsa. — Remove the stain." },
          complete:     { form: "inalis",    use: "Removed (something) — past",                   example: "Inalis niya ang mantsa kagabi. — He removed the stain last night." },
          progressive:  { form: "inialis",   use: "Removing (something) — ongoing",              example: "Inaalis niya ngayon ang mantsa. — He is removing the stain now." },
          contemplated: { form: "aalisin",   use: "Will remove (something)",                     example: "Aalisin niya bukas ang mantsa. — He will remove the stain tomorrow." }
        }
      }
    }
  },

  dating: {
    root: "dating",
    meaning: "to arrive",
    notes: "Takes mag- actor focus. Common in 'arrive at the office', 'arrive home'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one arriving.",
        forms: {
          infinitive:   { form: "dating",    use: "To arrive (infinitive)",                       example: "Dating tayo sa party. — Let's arrive at the party." },
          complete:     { form: "nagdating",  use: "Arrived — past",                                example: "Nagdating siya sa opisina kagabi. — She arrived at the office last night." },
          progressive:  { form: "nagdadating",use: "Currently arriving",                            example: "Nagdadating ang mga bisita ngayon. — The guests are arriving now." },
          contemplated: { form: "magdadating",use: "Will arrive",                                   example: "Magdadating ang bisita bukas. — The guests will arrive tomorrow." }
        }
      }
    }
  },

  kuha: {
    root: "kuha",
    meaning: "to take / to get",
    notes: "Takes mag- for active taking and -in for object focus.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one taking or getting something.",
        forms: {
          infinitive:   { form: "kuha",      use: "To take / to get (infinitive)",                example: "Kuha mo ang libro. — Get the book." },
          complete:     { form: "nagkuha",   use: "Took / got — past",                             example: "Nagkuha siya ng tickets kagabi. — She got tickets last night." },
          progressive:  { form: "nagkukuha", use: "Currently taking / getting",                   example: "Nagkukuha siya ngayon ng tubig. — He is getting water now." },
          contemplated: { form: "magkukuha", use: "Will take / will get",                          example: "Magkukuha siya bukas ng payong. — He will get an umbrella tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being taken or gotten.",
        forms: {
          infinitive:   { form: "kunin",     use: "To take (something specific)",                 example: "Kunin mo ang payong. — Get the umbrella." },
          complete:     { form: "kinuha",    use: "Took (something) — past",                      example: "Kinuha niya ang payong kagabi. — He got the umbrella last night." },
          progressive:  { form: "kinukuha",  use: "Taking (something) — ongoing",                example: "Kinukuha niya ngayon ang tubig. — He is getting the water now." },
          contemplated: { form: "kukuha",    use: "Will take (something)",                       example: "Kukuha niya bukas ang payong. — He will get the umbrella tomorrow." }
        }
      }
    }
  },

  taya: {
    root: "taya",
    meaning: "to bet / to guess",
    notes: "Takes mag- actor focus.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one betting or guessing.",
        forms: {
          infinitive:   { form: "taya",      use: "To bet / to guess (infinitive)",               example: "Taya mo sa lotto. — Bet on the lotto." },
          complete:     { form: "nagtaya",   use: "Bet / guessed — past",                          example: "Nagtaya siya ng pera kagabi. — He bet money last night." },
          progressive:  { form: "nagtataya", use: "Currently betting / guessing",                  example: "Nagtataya siya ngayon sa palaro. — He is betting on the game now." },
          contemplated: { form: "magtataya", use: "Will bet / will guess",                         example: "Magtataya sila bukas sa karera. — They will bet on the race tomorrow." }
        }
      }
    }
  },

  suklay: {
    root: "suklay",
    meaning: "to comb (hair)",
    notes: "Takes mag- actor focus.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one combing.",
        forms: {
          infinitive:   { form: "suklay",    use: "To comb (infinitive)",                         example: "Suklay mo ang buhok mo. — Comb your hair." },
          complete:     { form: "nagsuklay", use: "Combed — past",                                 example: "Nagsuklay siya ng buhok kagabi. — She combed her hair last night." },
          progressive:  { form: "nagsusuklay",use: "Currently combing",                            example: "Nagsusuklay siya ngayon. — He is combing now." },
          contemplated: { form: "magsusuklay",use: "Will comb",                                     example: "Magsusuklay siya bukas bago party. — He will comb before the party tomorrow." }
        }
      }
    }
  },

  yuko: {
    root: "yuko",
    meaning: "to bow / to bend down",
    notes: "Takes -um- actor focus.",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the one bowing or bending down. Common for picking things up or showing respect.",
        forms: {
          infinitive:   { form: "yumuko",    use: "To bow / to bend down (infinitive)",           example: "Yumuko ka at mag-simba. — Bow down and pray." },
          complete:     { form: "yumuko",    use: "Bowed / bent down — past",                      example: "Yumuko siya kagabi para mag-pickup. — He bent down to pick it up last night." },
          progressive:  { form: "yumuyuko",  use: "Currently bowing / bending down",              example: "Yumuyuko siya ngayon para maglinis. — He is bending down to clean now." },
          contemplated: { form: "yuyuko",    use: "Will bow / will bend down",                    example: "Yuyuko siya bukas sa altar. — He will bow at the altar tomorrow." }
        }
      }
    }
  },

  lipat: {
    root: "lipat",
    meaning: "to move / to transfer",
    notes: "Takes mag- and -um- forms. Also 'maglipat' for moving house.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one moving or transferring.",
        forms: {
          infinitive:   { form: "lipat",     use: "To move / to transfer (infinitive)",           example: "Lipat tayo ng bahay. — Let's move houses." },
          complete:     { form: "naglipat",  use: "Moved / transferred — past",                   example: "Naglipat siya ng bahay kagabi. — She moved houses last night." },
          progressive:  { form: "naglilipat",use: "Currently moving / transferring",              example: "Naglilipat siya ngayon ng gamit. — He is moving his things now." },
          contemplated: { form: "maglilipat",use: "Will move / will transfer",                    example: "Maglilipat siya bukas ng opisina. — He will move offices tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focuses on the thing being moved or transferred.",
        forms: {
          infinitive:   { form: "ilipat",    use: "To move (something) [somewhere]",              example: "Ilipat mo ang libro sa mesa. — Move the book to the table." },
          complete:     { form: "inilipat",  use: "Moved (something) — past",                    example: "Inilipat niya ang libro kagabi. — He moved the book last night." },
          progressive:  { form: "inililipat",use: "Moving (something) — ongoing",                example: "Inililipat niya ngayon ang libro. — He is moving the book now." },
          contemplated: { form: "ililipat",  use: "Will move (something)",                       example: "Ililipat niya bukas ang libro. — He will move the book tomorrow." }
        }
      }
    }
  },

  hugot: {
    root: "hugot",
    meaning: "to pull out / to draw out",
    notes: "Takes mag- actor focus. Also 'hugot' as a noun ('pickup line' in modern slang).",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one pulling out something.",
        forms: {
          infinitive:   { form: "hugot",     use: "To pull out / to draw (infinitive)",           example: "Hugot mo ang baril. — Pull out the gun." },
          complete:     { form: "naghugot",  use: "Pulled out — past",                             example: "Naghugot siya ng pera kagabi. — He pulled out money last night." },
          progressive:  { form: "naghuhugot",use: "Currently pulling out",                        example: "Naghuhugot siya ngayon ng baril. — He is pulling out a gun now." },
          contemplated: { form: "maghuhugot",use: "Will pull out",                                example: "Maghuhugot siya bukas ng baril. — He will pull out a gun tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being pulled out.",
        forms: {
          infinitive:   { form: "hugutin",   use: "To pull out (something)",                      example: "Hugutin mo ang baril. — Pull out the gun." },
          complete:     { form: "hinugot",   use: "Pulled out (something) — past",                example: "Hinugot niya ang baril kagabi. — He pulled out the gun last night." },
          progressive:  { form: "hinuhugot", use: "Pulling out (something) — ongoing",            example: "Hinuhugot niya ngayon ang baril. — He is pulling out the gun now." },
          contemplated: { form: "huhugutin", use: "Will pull out (something)",                   example: "Huhugutin niya bukas ang baril. — He will pull out the gun tomorrow." }
        }
      }
    }
  },

  tulak: {
    root: "tulak",
    meaning: "to push",
    notes: "Takes mag- actor focus.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one pushing something.",
        forms: {
          infinitive:   { form: "tulak",     use: "To push (infinitive)",                         example: "Tulak mo ang pinto. — Push the door." },
          complete:     { form: "nagtulak",  use: "Pushed — past",                                 example: "Nagtulak siya ng kama kagabi. — He pushed the bed last night." },
          progressive:  { form: "nagtutulak",use: "Currently pushing",                            example: "Nagtutulak siya ngayon ng cart. — He is pushing a cart now." },
          contemplated: { form: "magtutulak",use: "Will push",                                     example: "Magtutulak siya bukas ng kotse. — He will push the car tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being pushed.",
        forms: {
          infinitive:   { form: "tulakin",   use: "To push (something)",                          example: "Tulakin mo ang pinto. — Push the door." },
          complete:     { form: "tinulak",   use: "Pushed (something) — past",                    example: "Tinulak niya ang pinto kagabi. — He pushed the door last night." },
          progressive:  { form: "tinutulak", use: "Pushing (something) — ongoing",                example: "Tinutulak niya ngayon ang cart. — He is pushing the cart now." },
          contemplated: { form: "tutulakin", use: "Will push (something)",                       example: "Tutulakin niya bukas ang pinto. — He will push the door tomorrow." }
        }
      }
    }
  },

  salpak: {
    root: "salpak",
    meaning: "to smash / to throw down",
    notes: "Takes mag- actor focus. Common in 'throw the ball hard', 'slam the door'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one smashing or throwing down something.",
        forms: {
          infinitive:   { form: "salpak",    use: "To smash / to throw down (infinitive)",        example: "Salpak mo ang bola. — Throw down the ball." },
          complete:     { form: "nagsalpak", use: "Smashed / threw down — past",                  example: "Nagsalpak siya ng bola kagabi. — He threw down the ball last night." },
          progressive:  { form: "nagsasalpak",use: "Currently smashing",                          example: "Nagsasalpak siya ngayon ng pinggan. — He is smashing plates now." },
          contemplated: { form: "magsasalpak",use: "Will smash",                                   example: "Magsasalpak siya bukas ng bola. — He will smash the ball tomorrow." }
        }
      }
    }
  },

  // ============== 20 NEW VERBS (ROUND 3) ==============
  hatid: {
    root: "hatid",
    meaning: "to deliver / to accompany someone home",
    notes: "Takes mag- for active delivering/accompanying. Common in 'ihatid sa' = drop off at.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one delivering or accompanying.",
        forms: {
          infinitive:   { form: "hatid",     use: "To deliver / to accompany (infinitive)",        example: "Hatid mo siya sa bahay. — Accompany her home." },
          complete:     { form: "naghatid",  use: "Delivered / accompanied — past",               example: "Naghatid siya ng bulaklak kagabi. — She delivered flowers last night." },
          progressive:  { form: "naghatid",  use: "Delivering / accompanying",                     example: "Naghatid siya ngayon ng bata. — She is accompanying a child now." },
          contemplated: { form: "maghahatid",use: "Will deliver / will accompany",                 example: "Maghahatid siya bukas ng kapatid. — He will drop off his sibling tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focuses on the thing or person being delivered/accompanied.",
        forms: {
          infinitive:   { form: "ihatid",    use: "To deliver / to accompany (someone/something)",example: "Ihatid mo siya sa terminal. — Drop him off at the terminal." },
          complete:     { form: "inihatid",  use: "Delivered / accompanied — past",               example: "Inihatid niya ang bata kagabi. — He dropped off the child last night." },
          progressive:  { form: "inihahatid",use: "Delivering / accompanying (ongoing)",          example: "Inihahatid niya ngayon ang bulaklak. — He is delivering the flowers now." },
          contemplated: { form: "ihahatid",  use: "Will deliver / will accompany",                example: "Ihahatid niya bukas ang pasahero. — He will drop off the passenger tomorrow." }
        }
      }
    }
  },

  pili: {
    root: "pili",
    meaning: "to choose / to select",
    notes: "Takes mag- for the active choosing. The noun 'pili' = 'choice'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one choosing. Common in everyday decision-making.",
        forms: {
          infinitive:   { form: "pili",      use: "To choose / to select (infinitive)",          example: "Pili tayo ng regalo. — Let's choose a gift." },
          complete:     { form: "nagpili",   use: "Chose / selected — past",                      example: "Nagpili siya ng damit kagabi. — She chose clothes last night." },
          progressive:  { form: "nagpipili", use: "Currently choosing",                           example: "Nagpipili siya ngayon ng bahay. — He is choosing a house now." },
          contemplated: { form: "magpipili", use: "Will choose",                                   example: "Magpipili siya bukas ng kotse. — He will choose a car tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being chosen.",
        forms: {
          infinitive:   { form: "piliin",    use: "To choose (something specific)",              example: "Piliin mo ang pinakamagandang bulaklak. — Choose the most beautiful flower." },
          complete:     { form: "pinili",    use: "Chose (something) — past",                    example: "Pinili niya ang pulang bulaklak kagabi. — She chose the red flower last night." },
          progressive:  { form: "pinipili",  use: "Choosing (something) — ongoing",              example: "Pinipili niya ngayon ang pinakamurang bilihin. — He is choosing the cheapest item now." },
          contemplated: { form: "pipiliin",  use: "Will choose (something)",                     example: "Pipiliin niya bukas ang pinakamagandang kotse. — He will choose the best car tomorrow." }
        }
      }
    }
  },

  tinda: {
    root: "tinda",
    meaning: "to sell (retail / small-scale)",
    notes: "Takes mag- for retail selling. 'Magtinda' = to sell things in small quantities. Contrast with 'magbenta' (commercial sales).",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one selling. Common in market and sari-sari store context.",
        forms: {
          infinitive:   { form: "tinda",     use: "To sell (retail, infinitive)",                 example: "Tinda tayo ng pagkain sa palengke. — Let's sell food at the market." },
          complete:     { form: "nagtinda",  use: "Sold (retail) — past",                          example: "Nagtinda siya ng isda kagabi. — She sold fish last night." },
          progressive:  { form: "nagtitinda",use: "Currently selling",                            example: "Nagtitinda siya ngayon ng prutas. — She is selling fruit now." },
          contemplated: { form: "magtitinda",use: "Will sell (retail)",                            example: "Magtitinda siya bukas ng damit. — He will sell clothes tomorrow." }
        }
      }
    }
  },

  sukat: {
    root: "sukat",
    meaning: "to try on / to measure",
    notes: "Takes mag- for both 'try on (clothes)' and 'measure'. Context clarifies which.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one trying on or measuring. Common when shopping for clothes.",
        forms: {
          infinitive:   { form: "sukat",     use: "To try on / to measure (infinitive)",          example: "Sukat mo ang damit. — Try on the dress." },
          complete:     { form: "nagsukat",  use: "Tried on / measured — past",                   example: "Nagsukat siya ng sapatos kagabi. — She tried on shoes last night." },
          progressive:  { form: "nagsusukat",use: "Currently trying on / measuring",              example: "Nagsusukat siya ngayon ng pantalon. — He is trying on pants now." },
          contemplated: { form: "magsusukat",use: "Will try on / will measure",                    example: "Magsusukat siya bukas ng bagong damit. — She will try on new clothes tomorrow." }
        }
      },
      "Object (-in)": {
        focus: "Object Focus",
        description: "Focuses on what is being tried on or measured.",
        forms: {
          infinitive:   { form: "sukatin",   use: "To try on / to measure (something)",           example: "Sukatin mo ang damit. — Try on / measure the dress." },
          complete:     { form: "sinukat",   use: "Tried on / measured (something) — past",      example: "Sinukat niya ang sapatos kagabi. — He tried on the shoes last night." },
          progressive:  { form: "sinusukat", use: "Trying on / measuring (something) — ongoing",example: "Sinusukat niya ngayon ang pantalon. — He is trying on the pants now." },
          contemplated: { form: "susukatin", use: "Will try on / will measure (something)",      example: "Susukatin niya bukas ang bagong sapatos. — He will try on the new shoes tomorrow." }
        }
      }
    }
  },

  timbang: {
    root: "timbang",
    meaning: "to weigh",
    notes: "Takes mag- for active weighing. The noun 'timbang' = 'weight'.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one weighing.",
        forms: {
          infinitive:   { form: "timbang",   use: "To weigh (infinitive)",                        example: "Timbang mo ang prutas. — Weigh the fruit." },
          complete:     { form: "nagtimbang",use: "Weighed — past",                               example: "Nagtimbang siya ng bigas kagabi. — She weighed rice last night." },
          progressive:  { form: "nagtitimbang",use: "Currently weighing",                         example: "Nagtitimbang siya ngayon ng isda. — He is weighing fish now." },
          contemplated: { form: "magtitimbang",use: "Will weigh",                                  example: "Magtitimbang siya bukas ng mga prutas. — He will weigh the fruits tomorrow." }
        }
      }
    }
  },

  sali: {
    root: "sali",
    meaning: "to join",
    notes: "Takes mag- or sumali for active joining. Common in 'sumali sa laro' = join the game.",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the one joining. The -um- form is the most common.",
        forms: {
          infinitive:   { form: "sumali",    use: "To join (infinitive)",                         example: "Sumali ka sa laro. — Join the game." },
          complete:     { form: "sumali",    use: "Joined — past",                                example: "Sumali siya sa laro kagabi. — He joined the game last night." },
          progressive:  { form: "sumasali",  use: "Currently joining",                            example: "Sumasali siya ngayon sa palaro. — He is joining the game now." },
          contemplated: { form: "sasali",    use: "Will join",                                    example: "Sasali siya bukas sa torneo. — He will join the tournament tomorrow." }
        }
      }
    }
  },

  abot: {
    root: "abot",
    meaning: "to reach",
    notes: "Takes mag- for active reaching. Common in 'maabot' = to be able to reach (potential).",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one reaching.",
        forms: {
          infinitive:   { form: "abot",      use: "To reach (infinitive)",                        example: "Abot mo ang libro. — Reach the book." },
          complete:     { form: "nag-abot",  use: "Reached — past",                                example: "Nag-abot siya ng kendi kagabi. — He reached for candy last night." },
          progressive:  { form: "nag-aabot", use: "Currently reaching",                            example: "Nag-aabot siya ngayon ng pera. — He is reaching for money now." },
          contemplated: { form: "mag-aabot", use: "Will reach",                                     example: "Mag-aabot siya bukas ng ulap. — He will reach the cloud tomorrow." }
        }
      }
    }
  },

  tawid: {
    root: "tawid",
    meaning: "to cross",
    notes: "Takes mag- for active crossing (a street, a river).",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one crossing. Common in 'tumawid sa kalsada' = cross the street.",
        forms: {
          infinitive:   { form: "tawid",     use: "To cross (infinitive)",                        example: "Tawid mo ang kalsada. — Cross the street." },
          complete:     { form: "tumawid",  use: "Crossed — past",                                example: "Tumawid siya sa tulay kagabi. — He crossed the bridge last night." },
          progressive:  { form: "tumatawid", use: "Currently crossing",                            example: "Tumatawid siya ngayon sa daan. — He is crossing the road now." },
          contemplated: { form: "tatawid",   use: "Will cross",                                     example: "Tatawid siya bukas sa ilog. — He will cross the river tomorrow." }
        }
      }
    }
  },

  talon: {
    root: "talon",
    meaning: "to jump",
    notes: "Takes mag- for active jumping. Common in 'tumalon' = jumped.",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the one jumping.",
        forms: {
          infinitive:   { form: "tumalon",   use: "To jump (infinitive)",                         example: "Tumalon ka sa tubig. — Jump into the water." },
          complete:     { form: "tumalon",   use: "Jumped — past",                                 example: "Tumalon siya sa pool kagabi. — He jumped into the pool last night." },
          progressive:  { form: "tumatalon", use: "Currently jumping",                             example: "Tumatalon siya ngayon sa trampoline. — He is jumping on the trampoline now." },
          contemplated: { form: "tatalon",   use: "Will jump",                                      example: "Tatalon siya bukas sa bangko. — He will jump on the bench tomorrow." }
        }
      }
    }
  },

  langoy: {
    root: "langoy",
    meaning: "to swim",
    notes: "Takes mag- for active swimming.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one swimming.",
        forms: {
          infinitive:   { form: "langoy",    use: "To swim (infinitive)",                         example: "Langoy tayo sa dagat. — Let's swim in the sea." },
          complete:     { form: "naglangoy", use: "Swam — past",                                   example: "Naglangoy siya sa pool kagabi. — She swam in the pool last night." },
          progressive:  { form: "naglalangoy",use: "Currently swimming",                          example: "Naglalangoy siya ngayon sa beach. — She is swimming at the beach now." },
          contemplated: { form: "maglalangoy",use: "Will swim",                                    example: "Maglalangoy siya bukas sa ilog. — He will swim in the river tomorrow." }
        }
      }
    }
  },

  lupa: {
    root: "lupa",
    meaning: "to kneel down / to bow to the ground",
    notes: "Takes mag- for active kneeling. Common in religious contexts.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one kneeling down.",
        forms: {
          infinitive:   { form: "lupa",      use: "To kneel down (infinitive)",                  example: "Lupa tayo at magdasal. — Let's kneel down and pray." },
          complete:     { form: "naglu-pa",  use: "Knelt down — past",                             example: "Naglu-pa siya sa altar kagabi. — He knelt at the altar last night." },
          progressive:  { form: "naglulu-pa",use: "Currently kneeling",                            example: "Naglulu-pa siya ngayon sa simbahan. — He is kneeling at the church now." },
          contemplated: { form: "maglulu-pa",use: "Will kneel down",                               example: "Maglulu-pa siya bukas sa simbahan. — He will kneel at the church tomorrow." }
        }
      }
    }
  },

  tago: {
    root: "tago",
    meaning: "to hide",
    notes: "Takes mag- for active hiding. The -in form 'itago' is the object focus (hide it).",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one hiding.",
        forms: {
          infinitive:   { form: "tago",      use: "To hide (infinitive)",                        example: "Tago mo ang regalo. — Hide the gift." },
          complete:     { form: "nagtago",   use: "Hid — past",                                    example: "Nagtago siya ng pera kagabi. — She hid money last night." },
          progressive:  { form: "nagtatago", use: "Currently hiding",                              example: "Nagtatago siya ngayon ng key. — He is hiding the key now." },
          contemplated: { form: "magtatago", use: "Will hide",                                     example: "Magtatago siya bukas ng cellphone. — He will hide the cellphone tomorrow." }
        }
      },
      "Object (i-)": {
        focus: "Object Focus",
        description: "Focuses on what is being hidden.",
        forms: {
          infinitive:   { form: "itago",     use: "To hide (something)",                         example: "Itago mo ang pera. — Hide the money." },
          complete:     { form: "itinago",   use: "Hid (something) — past",                       example: "Itinago niya ang pera kagabi. — He hid the money last night." },
          progressive:  { form: "itinatago", use: "Hiding (something) — ongoing",                example: "Itinatago niya ngayon ang cellphone. — He is hiding the cellphone now." },
          contemplated: { form: "itatago",   use: "Will hide (something)",                       example: "Itatago niya bukas ang regalo. — He will hide the gift tomorrow." }
        }
      }
    }
  },

  iwas: {
    root: "iwas",
    meaning: "to avoid",
    notes: "Takes mag- or umiwas for active avoiding.",
    conjugations: {
      "Actor (-um-)": {
        focus: "Actor Focus",
        description: "Focuses on the one avoiding.",
        forms: {
          infinitive:   { form: "umiwas",    use: "To avoid (infinitive)",                        example: "Umiwas ka sa masamang tao. — Avoid bad people." },
          complete:     { form: "umiwas",    use: "Avoided — past",                                example: "Umiwas siya sa kalsada kagabi. — He avoided the street last night." },
          progressive:  { form: "umiiwas",   use: "Currently avoiding",                            example: "Umiiwas siya ngayon sa aso. — He is avoiding the dog now." },
          contemplated: { form: "iiwas",     use: "Will avoid",                                     example: "Iiwas siya bukas sa maingay na lugar. — He will avoid the noisy place tomorrow." }
        }
      }
    }
  },

  ayaw: {
    root: "ayaw",
    meaning: "to not want / to refuse",
    notes: "Takes mag- in some forms. 'Ayaw' is more commonly a modal/auxiliary ('Ayaw ko.' = 'I don't want.').",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one refusing. Note: 'ayaw' is more often used as a modal than as a conjugated verb.",
        forms: {
          infinitive:   { form: "mag-ayaw",  use: "To refuse (infinitive)",                       example: "Mag-ayaw ka sa bisyo. — Refuse the vice." },
          complete:     { form: "nag-ayaw",  use: "Refused — past",                                example: "Nag-ayaw siya sa alak kagabi. — He refused alcohol last night." },
          progressive:  { form: "nag-aayaw", use: "Currently refusing",                            example: "Nag-aayaw siya ngayon sa kanyang trabaho. — He is refusing his work now." },
          contemplated: { form: "mag-aayaw", use: "Will refuse",                                    example: "Mag-aayaw siya bukas sa pagkain. — He will refuse the food tomorrow." }
        }
      }
    }
  },

  ibig: {
    root: "ibig",
    meaning: "to want / to love",
    notes: "Takes mag- for the active 'wanting' or 'loving'. Common in 'Ibig kong...' = 'I want/like...'",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one wanting or loving.",
        forms: {
          infinitive:   { form: "ibig",      use: "To want / to love (infinitive)",              example: "Ibig kong matulog. — I want to sleep." },
          complete:     { form: "nag-ibig",  use: "Wanted / loved — past",                        example: "Nag-ibig siya ng kendi kagabi. — She wanted candy last night." },
          progressive:  { form: "nag-iibig", use: "Currently wanting / loving",                   example: "Nag-iibig siya ngayon ng bagong kotse. — He is wanting a new car now." },
          contemplated: { form: "mag-iibig", use: "Will want / will love",                         example: "Mag-iibig siya bukas ng libro. — He will want a book tomorrow." }
        }
      }
    }
  },

  lungkot: {
    root: "lungkot",
    meaning: "to be sad",
    notes: "Takes ma- for the stative sense. The noun 'lungkot' = 'sadness'.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Focuses on the state of being sad. The stative form for emotions.",
        forms: {
          infinitive:   { form: "malungkot", use: "To be sad (infinitive)",                       example: "Huwag kang malungkot. — Don't be sad." },
          complete:     { form: "nalungkot", use: "Became sad — past",                              example: "Nalungkot siya nang umalis ang kaibigan. — She became sad when her friend left." },
          progressive:  { form: "nalulungkot",use: "Being sad (ongoing)",                          example: "Nalulungkot siya ngayon. — She is being sad now." },
          contemplated: { form: "malulungkot",use: "Will be sad",                                   example: "Malulungkot siya bukas kapag umalis ka. — He will be sad tomorrow if you leave." }
        }
      }
    }
  },

  hiya: {
    root: "hiya",
    meaning: "to be ashamed / to feel shame",
    notes: "Takes ma- for the stative sense. The noun 'hiya' = 'shame'.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Focuses on the state of being ashamed. The stative form for emotional states.",
        forms: {
          infinitive:   { form: "mahihya",   use: "To be ashamed (infinitive)",                   example: "Mahihya ka sa ginagawa mo. — You'll be ashamed of what you're doing." },
          complete:     { form: "nahiya",    use: "Was ashamed — past",                            example: "Nahiya siya sa pagkakamali. — He was ashamed of the mistake." },
          progressive:  { form: "nahihiya",  use: "Being ashamed (ongoing)",                        example: "Nahihiya siya ngayon sa kanyang damit. — She is being ashamed of her clothes now." },
          contemplated: { form: "mahihiya",  use: "Will be ashamed",                               example: "Mahihiya siya bukas kapag nalaman. — He will be ashamed tomorrow when found out." }
        }
      }
    }
  },

  inis: {
    root: "inis",
    meaning: "to be annoyed / to be irritated",
    notes: "Takes ma- for the stative sense. The noun 'inis' = 'annoyance'.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Focuses on the state of being annoyed. The stative form for emotional states.",
        forms: {
          infinitive:   { form: "mainis",    use: "To be annoyed (infinitive)",                   example: "Mainis ka sa ingay. — You'll be annoyed by the noise." },
          complete:     { form: "nainis",    use: "Became annoyed — past",                          example: "Nainis siya sa mabagal na trapiko. — She became annoyed at the slow traffic." },
          progressive:  { form: "naiinpis",  use: "Being annoyed (ongoing)",                        example: "Naiinpis siya ngayon sa kanyang kapatid. — He is being annoyed by his sibling now." },
          contemplated: { form: "maiinpis",  use: "Will be annoyed",                                example: "Maiinpis siya bukas kapag hindi ka sumipot. — He will be annoyed tomorrow if you don't show up." }
        }
      }
    }
  },

  antok: {
    root: "antok",
    meaning: "to be sleepy / to be drowsy",
    notes: "Takes ma- for the stative sense. The noun 'antok' = 'sleepiness'.",
    conjugations: {
      "Actor (ma-)": {
        focus: "Actor Focus (Stative)",
        description: "Focuses on the state of being sleepy.",
        forms: {
          infinitive:   { form: "maantok",   use: "To be sleepy (infinitive)",                    example: "Maantok ka kung walang tulog. — You'll be sleepy without sleep." },
          complete:     { form: "naantok",   use: "Became sleepy — past",                           example: "Naantok siya sa klase kagabi. — She became sleepy in class last night." },
          progressive:  { form: "naaantok",  use: "Being sleepy (ongoing)",                         example: "Naaantok siya ngayon sa opisina. — He is being sleepy at the office now." },
          contemplated: { form: "maaantok",  use: "Will be sleepy",                                example: "Maaantok siya bukas sa byahe. — He will be sleepy on the trip tomorrow." }
        }
      }
    }
  },

  usisa: {
    root: "usisa",
    meaning: "to investigate / to pry / to inquire",
    notes: "Takes mag- for active investigation. Common in 'mag-usisa tungkol sa' = to inquire about.",
    conjugations: {
      "Actor (mag-)": {
        focus: "Actor Focus",
        description: "Focuses on the one investigating or inquiring.",
        forms: {
          infinitive:   { form: "usisa",     use: "To investigate / to inquire (infinitive)",    example: "Usisa mo ang katotohanan. — Investigate the truth." },
          complete:     { form: "nag-usisa", use: "Investigated / inquired — past",                example: "Nag-usisa siya tungkol sa krimen kagabi. — He inquired about the crime last night." },
          progressive:  { form: "naguusisa",use: "Currently investigating",                       example: "Naguusisa siya ngayon sa nawawalang bata. — He is investigating the missing child now." },
          contemplated: { form: "maguusisa",use: "Will investigate",                              example: "Maguusisa siya bukas sa bagong kaso. — He will investigate the new case tomorrow." }
        }
      }
    }
  }
};

// Quick lookup map from conjugated form → root + structure hint
// This lets the app detect a conjugated input and find its root
const CONJUGATED_LOOKUP = {
  // kain conjugations
  "kumain":      { root: "kain", affix: "um",  aspect: "complete" },
  "kumakain":    { root: "kain", affix: "um",  aspect: "progressive" },
  "kakain":      { root: "kain", affix: "um",  aspect: "contemplated" },
  "kainin":      { root: "kain", affix: "in",  aspect: "infinitive" },
  "kinain":      { root: "kain", affix: "in",  aspect: "complete" },
  "kinakain":    { root: "kain", affix: "in",  aspect: "progressive" },
  "kakainin":    { root: "kain", affix: "in",  aspect: "contemplated" },
  // inom conjugations
  "uminom":      { root: "inom", affix: "um",  aspect: "complete" },
  "umiinom":     { root: "inom", affix: "um",  aspect: "progressive" },
  "iinom":       { root: "inom", affix: "um",  aspect: "contemplated" },
  "inumin":      { root: "inom", affix: "in",  aspect: "infinitive" },
  "ininom":      { root: "inom", affix: "in",  aspect: "complete" },
  "iniinom":     { root: "inom", affix: "in",  aspect: "progressive" },
  "iinumin":     { root: "inom", affix: "in",  aspect: "contemplated" },
  // luto conjugations
  "magluto":     { root: "luto", affix: "mag", aspect: "infinitive" },
  "nagluto":     { root: "luto", affix: "mag", aspect: "complete" },
  "nagluluto":   { root: "luto", affix: "mag", aspect: "progressive" },
  "magluluto":   { root: "luto", affix: "mag", aspect: "contemplated" },
  "lutuin":      { root: "luto", affix: "in",  aspect: "infinitive" },
  "niluto":      { root: "luto", affix: "in",  aspect: "complete" },
  "niluluto":    { root: "luto", affix: "in",  aspect: "progressive" },
  "lulutuin":    { root: "luto", affix: "in",  aspect: "contemplated" },
  // tapon conjugations
  "magtapon":    { root: "tapon", affix: "mag", aspect: "infinitive" },
  "nagtapon":    { root: "tapon", affix: "mag", aspect: "complete" },
  "nagtatapon":  { root: "tapon", affix: "mag", aspect: "progressive" },
  "magtatapon":  { root: "tapon", affix: "mag", aspect: "contemplated" },
  "tumapon":     { root: "tapon", affix: "um",  aspect: "complete" },
  "tumatapon":   { root: "tapon", affix: "um",  aspect: "progressive" },
  "tatapon":     { root: "tapon", affix: "um",  aspect: "contemplated" },
  "itapon":      { root: "tapon", affix: "in",  aspect: "infinitive" },
  "itinapon":    { root: "tapon", affix: "in",  aspect: "complete" },
  "tatapunan":   { root: "tapon", affix: "an",  aspect: "contemplated" },
  // bili
  "magbili":     { root: "bili", affix: "mag", aspect: "infinitive" },
  "nagbili":     { root: "bili", affix: "mag", aspect: "complete" },
  "nagbibili":   { root: "bili", affix: "mag", aspect: "progressive" },
  "magbibili":   { root: "bili", affix: "mag", aspect: "contemplated" },
  "bilhin":      { root: "bili", affix: "in",  aspect: "infinitive" },
  "binili":      { root: "bili", affix: "in",  aspect: "complete" },
  "binibili":    { root: "bili", affix: "in",  aspect: "progressive" },
  "bibilhin":    { root: "bili", affix: "in",  aspect: "contemplated" },
  "bilhan":      { root: "bili", affix: "an",  aspect: "infinitive" },
  "binilhan":    { root: "bili", affix: "an",  aspect: "complete" },
  "binibilhan":  { root: "bili", affix: "an",  aspect: "progressive" },
  "bibilhan":    { root: "bili", affix: "an",  aspect: "contemplated" },
  "ibili":       { root: "bili", affix: "i",   aspect: "infinitive" },
  "ibinili":     { root: "bili", affix: "i",   aspect: "complete" },
  "ibinibili":   { root: "bili", affix: "i",   aspect: "progressive" },
  "ibibili":     { root: "bili", affix: "i",   aspect: "contemplated" },
  // lakad
  "maglakad":    { root: "lakad", affix: "mag", aspect: "infinitive" },
  "naglakad":    { root: "lakad", affix: "mag", aspect: "complete" },
  "naglalakad":  { root: "lakad", affix: "mag", aspect: "progressive" },
  "maglalakad":  { root: "lakad", affix: "mag", aspect: "contemplated" },
  "lumakad":     { root: "lakad", affix: "um",  aspect: "complete" },
  "lumalakad":   { root: "lakad", affix: "um",  aspect: "progressive" },
  "lalakad":     { root: "lakad", affix: "um",  aspect: "contemplated" },
  "lakaran":     { root: "lakad", affix: "an",  aspect: "infinitive" },
  "nilakaran":   { root: "lakad", affix: "an",  aspect: "complete" },
  "nilalakaran": { root: "lakad", affix: "an",  aspect: "progressive" },
  "lalakaran":   { root: "lakad", affix: "an",  aspect: "contemplated" },
  // punta
  "magpunta":    { root: "punta", affix: "mag", aspect: "infinitive" },
  "nagpunta":    { root: "punta", affix: "mag", aspect: "complete" },
  "nagpupunta":  { root: "punta", affix: "mag", aspect: "progressive" },
  "magpupunta":  { root: "punta", affix: "mag", aspect: "contemplated" },
  "pumunta":     { root: "punta", affix: "um",  aspect: "complete" },
  "pumupunta":   { root: "punta", affix: "um",  aspect: "progressive" },
  "pupunta":     { root: "punta", affix: "um",  aspect: "contemplated" },
  "puntahan":    { root: "punta", affix: "an",  aspect: "infinitive" },
  "pinuntahan":  { root: "punta", affix: "an",  aspect: "complete" },
  "pinupuntahan":{ root: "punta", affix: "an",  aspect: "progressive" },
  "pupuntahan":  { root: "punta", affix: "an",  aspect: "contemplated" },
  // tulog
  "matulog":     { root: "tulog", affix: "ma",  aspect: "infinitive" },
  "natulog":     { root: "tulog", affix: "ma",  aspect: "complete" },
  "natutulog":   { root: "tulog", affix: "ma",  aspect: "progressive" },
  "matutulog":   { root: "tulog", affix: "ma",  aspect: "contemplated" },
  "itulog":      { root: "tulog", affix: "i",   aspect: "infinitive" },
  "itinulog":    { root: "tulog", affix: "i",   aspect: "complete" },
  "itinutulog":  { root: "tulog", affix: "i",   aspect: "progressive" },
  "itutulog":    { root: "tulog", affix: "i",   aspect: "contemplated" },
  // sabi
  "magsabi":     { root: "sabi", affix: "mag", aspect: "infinitive" },
  "nagsabi":     { root: "sabi", affix: "mag", aspect: "complete" },
  "nagsasabi":   { root: "sabi", affix: "mag", aspect: "progressive" },
  "magsasabi":   { root: "sabi", affix: "mag", aspect: "contemplated" },
  "isabi":       { root: "sabi", affix: "i",   aspect: "infinitive" },
  "inasabi":     { root: "sabi", affix: "i",   aspect: "complete" },
  "inasasabi":   { root: "sabi", affix: "i",   aspect: "progressive" },
  "isasabi":     { root: "sabi", affix: "i",   aspect: "contemplated" },
  "sabihan":     { root: "sabi", affix: "pagan", aspect: "infinitive" },
  "sinabihan":   { root: "sabi", affix: "pagan", aspect: "complete" },
  "sinasabihan": { root: "sabi", affix: "pagan", aspect: "progressive" },
  "sasabihan":   { root: "sabi", affix: "pagan", aspect: "contemplated" },
  // sulat
  "magsulat":    { root: "sulat", affix: "mag", aspect: "infinitive" },
  "nagsulat":    { root: "sulat", affix: "mag", aspect: "complete" },
  "nagsusulat":  { root: "sulat", affix: "mag", aspect: "progressive" },
  "magsusulat":  { root: "sulat", affix: "mag", aspect: "contemplated" },
  "sumulat":     { root: "sulat", affix: "um",  aspect: "complete" },
  "sumusulat":   { root: "sulat", affix: "um",  aspect: "progressive" },
  "susulat":     { root: "sulat", affix: "um",  aspect: "contemplated" },
  "isulat":      { root: "sulat", affix: "i",   aspect: "infinitive" },
  "isinulat":    { root: "sulat", affix: "i",   aspect: "complete" },
  "isinusulat":  { root: "sulat", affix: "i",   aspect: "progressive" },
  "isusulat":    { root: "sulat", affix: "i",   aspect: "contemplated" },
  // basa
  "magbasa":     { root: "basa", affix: "mag", aspect: "infinitive" },
  "nagbasa":     { root: "basa", affix: "mag", aspect: "complete" },
  "nagbabasa":   { root: "basa", affix: "mag", aspect: "progressive" },
  "magbabasa":   { root: "basa", affix: "mag", aspect: "contemplated" },
  "basahin":     { root: "basa", affix: "in",  aspect: "infinitive" },
  "binasa":      { root: "basa", affix: "in",  aspect: "complete" },
  "binabasa":    { root: "basa", affix: "in",  aspect: "progressive" },
  "babasa?in":   { root: "basa", affix: "in",  aspect: "contemplated" },
  // linis
  "maglinis":    { root: "linis", affix: "mag", aspect: "infinitive" },
  "naglinis":    { root: "linis", affix: "mag", aspect: "complete" },
  "naglilinis":  { root: "linis", affix: "mag", aspect: "progressive" },
  "maglilinis":  { root: "linis", affix: "mag", aspect: "contemplated" },
  "linisin":     { root: "linis", affix: "in",  aspect: "infinitive" },
  "nilinis":     { root: "linis", affix: "in",  aspect: "complete" },
  "nililinis":   { root: "linis", affix: "in",  aspect: "progressive" },
  "lilinisin":   { root: "linis", affix: "in",  aspect: "contemplated" },
  // aral
  "mag-aral":    { root: "aral", affix: "mag", aspect: "infinitive" },
  "nag-aral":    { root: "aral", affix: "mag", aspect: "complete" },
  "nagaaral":    { root: "aral", affix: "mag", aspect: "progressive" },
  "mag-aaral":   { root: "aral", affix: "mag", aspect: "contemplated" },
  "aralin":      { root: "aral", affix: "in",  aspect: "infinitive" },
  "inaral":      { root: "aral", affix: "in",  aspect: "complete" },
  "inaaral":     { root: "aral", affix: "in",  aspect: "progressive" },
  "aaralin":     { root: "aral", affix: "in",  aspect: "contemplated" },
  // bigay
  "magbigay":    { root: "bigay", affix: "mag", aspect: "infinitive" },
  "nagbigay":    { root: "bigay", affix: "mag", aspect: "complete" },
  "nagbibigay":  { root: "bigay", affix: "mag", aspect: "progressive" },
  "magbibigay":  { root: "bigay", affix: "mag", aspect: "contemplated" },
  "bigyan":      { root: "bigay", affix: "an",  aspect: "infinitive" },
  "binigyan":    { root: "bigay", affix: "an",  aspect: "complete" },
  "binibigyan":  { root: "bigay", affix: "an",  aspect: "progressive" },
  "bibigyan":    { root: "bigay", affix: "an",  aspect: "contemplated" },
  "ibigay":      { root: "bigay", affix: "i",   aspect: "infinitive" },
  "ibinigay":    { root: "bigay", affix: "i",   aspect: "complete" },
  "ibinibigay":  { root: "bigay", affix: "i",   aspect: "progressive" },
  "ibibigay":    { root: "bigay", affix: "i",   aspect: "contemplated" },
  // kuha
  "kumuha":      { root: "kuha", affix: "um",  aspect: "complete" },
  "kumukuha":    { root: "kuha", affix: "um",  aspect: "progressive" },
  "kukuha":      { root: "kuha", affix: "um",  aspect: "contemplated" },
  "kunin":       { root: "kuha", affix: "in",  aspect: "infinitive" },
  "kinuha":      { root: "kuha", affix: "in",  aspect: "complete" },
  "kinukuha":    { root: "kuha", affix: "in",  aspect: "progressive" },
  "kukunin":     { root: "kuha", affix: "in",  aspect: "contemplated" },
  "ikuha":       { root: "kuha", affix: "i",   aspect: "infinitive" },
  "ikinuha":     { root: "kuha", affix: "i",   aspect: "complete" },
  "ikinukuha":   { root: "kuha", affix: "i",   aspect: "progressive" },
  "ikukuha":     { root: "kuha", affix: "i",   aspect: "contemplated" },
  // kita
  "kumita":      { root: "kita", affix: "um",  aspect: "complete" },
  "kumikita":    { root: "kita", affix: "um",  aspect: "progressive" },
  "kikita":      { root: "kita", affix: "um",  aspect: "contemplated" },
  "nakakita":    { root: "kita", affix: "maka", aspect: "complete" },
  "makakita":    { root: "kita", affix: "maka", aspect: "infinitive" },
  "kitain":      { root: "kita", affix: "in",  aspect: "infinitive" },
  "kinita":      { root: "kita", affix: "in",  aspect: "complete" },
  "kinikita":    { root: "kita", affix: "in",  aspect: "progressive" },
  // rinig
  "marinig":     { root: "rinig", affix: "ma",  aspect: "infinitive" },
  "narinig":     { root: "rinig", affix: "ma",  aspect: "complete" },
  "naririnig":   { root: "rinig", affix: "ma",  aspect: "progressive" },
  "maririnig":   { root: "rinig", affix: "ma",  aspect: "contemplated" },
  // takbo
  "tumakbo":     { root: "takbo", affix: "um",  aspect: "complete" },
  "tumutakbo":   { root: "takbo", affix: "um",  aspect: "progressive" },
  "tatakbo":     { root: "takbo", affix: "um",  aspect: "contemplated" },
  "magtakbo":    { root: "takbo", affix: "mag", aspect: "infinitive" },
  "nagtakbo":    { root: "takbo", affix: "mag", aspect: "complete" },
  "nagtatakbo":  { root: "takbo", affix: "mag", aspect: "progressive" },
  "magtatakbo":  { root: "takbo", affix: "mag", aspect: "contemplated" },
  // awit
  "umawit":      { root: "awit", affix: "um",  aspect: "complete" },
  "umaawit":     { root: "awit", affix: "um",  aspect: "progressive" },
  "aawit":       { root: "awit", affix: "um",  aspect: "contemplated" },
  "mag-awit":    { root: "awit", affix: "mag", aspect: "infinitive" },
  "nag-awit":    { root: "awit", affix: "mag", aspect: "complete" },
  "nagaawit":    { root: "awit", affix: "mag", aspect: "progressive" },
  "mag-aawit":   { root: "awit", affix: "mag", aspect: "contemplated" },
  // sayaw
  "sumayaw":     { root: "sayaw", affix: "um",  aspect: "complete" },
  "sumasayaw":   { root: "sayaw", affix: "um",  aspect: "progressive" },
  "sasayaw":     { root: "sayaw", affix: "um",  aspect: "contemplated" },
  "magsayaw":    { root: "sayaw", affix: "mag", aspect: "infinitive" },
  "nagsayaw":    { root: "sayaw", affix: "mag", aspect: "complete" },
  "nagsasayaw":  { root: "sayaw", affix: "mag", aspect: "progressive" },
  "magsasayaw":  { root: "sayaw", affix: "mag", aspect: "contemplated" },
  // bukas
  "magbukas":    { root: "bukas", affix: "mag", aspect: "infinitive" },
  "nagbukas":    { root: "bukas", affix: "mag", aspect: "complete" },
  "nagbubukas":  { root: "bukas", affix: "mag", aspect: "progressive" },
  "magbubukas":  { root: "bukas", affix: "mag", aspect: "contemplated" },
  "buksan":      { root: "bukas", affix: "in",  aspect: "infinitive" },
  "binuksan":    { root: "bukas", affix: "in",  aspect: "complete" },
  "binubuksan":  { root: "bukas", affix: "in",  aspect: "progressive" },
  "bubuksan":    { root: "bukas", affix: "in",  aspect: "contemplated" },
  // sara
  "sumara":      { root: "sara", affix: "um",  aspect: "complete" },
  "sumasara":    { root: "sara", affix: "um",  aspect: "progressive" },
  "sasara":      { root: "sara", affix: "um",  aspect: "contemplated" },
  "sarhin":      { root: "sara", affix: "in",  aspect: "infinitive" },
  "sinara":      { root: "sara", affix: "in",  aspect: "complete" },
  "sinasara":    { root: "sara", affix: "in",  aspect: "progressive" },
  "sasarhin":    { root: "sara", affix: "in",  aspect: "contemplated" },
  // laro
  "maglaro":     { root: "laro", affix: "mag", aspect: "infinitive" },
  "naglaro":     { root: "laro", affix: "mag", aspect: "complete" },
  "naglalaro":   { root: "laro", affix: "mag", aspect: "progressive" },
  "maglalaro":   { root: "laro", affix: "mag", aspect: "contemplated" },
  "lumaro":      { root: "laro", affix: "um",  aspect: "complete" },
  "lumalaro":    { root: "laro", affix: "um",  aspect: "progressive" },
  "lalaro":      { root: "laro", affix: "um",  aspect: "contemplated" },
  // langoy
  "lumangoy":    { root: "langoy", affix: "um",  aspect: "complete" },
  "lumalangoy":  { root: "langoy", affix: "um",  aspect: "progressive" },
  "lalangoy":    { root: "langoy", affix: "um",  aspect: "contemplated" },
  "maglangoy":   { root: "langoy", affix: "mag", aspect: "infinitive" },
  "naglangoy":   { root: "langoy", affix: "mag", aspect: "complete" },
  "naglalangoy": { root: "langoy", affix: "mag", aspect: "progressive" },
  "maglalangoy": { root: "langoy", affix: "mag", aspect: "contemplated" },
  // turo
  "magturo":     { root: "turo", affix: "mag", aspect: "infinitive" },
  "nagturo":     { root: "turo", affix: "mag", aspect: "complete" },
  "nagtuturo":   { root: "turo", affix: "mag", aspect: "progressive" },
  "magtuturo":   { root: "turo", affix: "mag", aspect: "contemplated" },
  "turuin":      { root: "turo", affix: "in",  aspect: "infinitive" },
  "tinuro":      { root: "turo", affix: "in",  aspect: "complete" },
  "tinuturo":    { root: "turo", affix: "in",  aspect: "progressive" },
  "tuturuin":    { root: "turo", affix: "in",  aspect: "contemplated" },
  // tulong
  "tumulong":    { root: "tulong", affix: "um",  aspect: "complete" },
  "tumutulong":  { root: "tulong", affix: "um",  aspect: "progressive" },
  "tutulong":    { root: "tulong", affix: "um",  aspect: "contemplated" },
  "magtulong":   { root: "tulong", affix: "mag", aspect: "infinitive" },
  "nagtulong":   { root: "tulong", affix: "mag", aspect: "complete" },
  "nagtutulong": { root: "tulong", affix: "mag", aspect: "progressive" },
  "magtutulong": { root: "tulong", affix: "mag", aspect: "contemplated" },
  "itulong":     { root: "tulong", affix: "i",   aspect: "infinitive" },
  "itinulong":   { root: "tulong", affix: "i",   aspect: "complete" },
  "itinutulong": { root: "tulong", affix: "i",   aspect: "progressive" },
  "itutulong":   { root: "tulong", affix: "i",   aspect: "contemplated" },
  // huli
  "humuli":      { root: "huli", affix: "um",  aspect: "complete" },
  "humuhuli":    { root: "huli", affix: "um",  aspect: "progressive" },
  "huhuli":      { root: "huli", affix: "um",  aspect: "contemplated" },
  "hulihin":     { root: "huli", affix: "in",  aspect: "infinitive" },
  "hinuli":      { root: "huli", affix: "in",  aspect: "complete" },
  "hinuhuli":    { root: "huli", affix: "in",  aspect: "progressive" },
  "huhulihin":   { root: "huli", affix: "in",  aspect: "contemplated" },
  // lagay
  "maglagay":    { root: "lagay", affix: "mag", aspect: "infinitive" },
  "naglagay":    { root: "lagay", affix: "mag", aspect: "complete" },
  "naglalagay":  { root: "lagay", affix: "mag", aspect: "progressive" },
  "maglalagay":  { root: "lagay", affix: "mag", aspect: "contemplated" },
  "ilagay":      { root: "lagay", affix: "i",   aspect: "infinitive" },
  "inilagay":    { root: "lagay", affix: "i",   aspect: "complete" },
  "inilalagay":  { root: "lagay", affix: "i",   aspect: "progressive" },
  "ilalagay":    { root: "lagay", affix: "i",   aspect: "contemplated" },
  "lagyan":      { root: "lagay", affix: "an",  aspect: "infinitive" },
  "nilagyan":    { root: "lagay", affix: "an",  aspect: "complete" },
  "nilalagyan":  { root: "lagay", affix: "an",  aspect: "progressive" },
  "lalagyan":    { root: "lagay", affix: "an",  aspect: "contemplated" },
  // alis
  "umalis":      { root: "alis", affix: "um",  aspect: "complete" },
  "umaalis":     { root: "alis", affix: "um",  aspect: "progressive" },
  "aalis":       { root: "alis", affix: "um",  aspect: "contemplated" },
  "alisin":      { root: "alis", affix: "in",  aspect: "infinitive" },
  "inalis":      { root: "alis", affix: "in",  aspect: "complete" },
  "inaalis":     { root: "alis", affix: "in",  aspect: "progressive" },
  "aalisin":     { root: "alis", affix: "in",  aspect: "contemplated" },
  // salita
  "magsalita":   { root: "salita", affix: "mag", aspect: "infinitive" },
  "nagsalita":   { root: "salita", affix: "mag", aspect: "complete" },
  "nagsasalita": { root: "salita", affix: "mag", aspect: "progressive" },
  "magsasalita": { root: "salita", affix: "mag", aspect: "contemplated" },
  "sumalita":    { root: "salita", affix: "um",  aspect: "complete" },
  "sumasalita":  { root: "salita", affix: "um",  aspect: "progressive" },
  "sasalita":    { root: "salita", affix: "um",  aspect: "contemplated" },
  "isalita":     { root: "salita", affix: "i",   aspect: "infinitive" },
  "inasalita":   { root: "salita", affix: "i",   aspect: "complete" },
  "inasasalita": { root: "salita", affix: "i",   aspect: "progressive" },
  "isasalita":   { root: "salita", affix: "i",   aspect: "contemplated" },
  // hintay
  "humintay":    { root: "hintay", affix: "um",  aspect: "complete" },
  "humihintay":  { root: "hintay", affix: "um",  aspect: "progressive" },
  "hihintay":    { root: "hintay", affix: "um",  aspect: "contemplated" },
  "maghintay":   { root: "hintay", affix: "mag", aspect: "infinitive" },
  "naghintay":   { root: "hintay", affix: "mag", aspect: "complete" },
  "naghihintay": { root: "hintay", affix: "mag", aspect: "progressive" },
  "maghihintay": { root: "hintay", affix: "mag", aspect: "contemplated" },
  // hugas
  "maghugas":    { root: "hugas", affix: "mag", aspect: "infinitive" },
  "naghugas":    { root: "hugas", affix: "mag", aspect: "complete" },
  "naghuhugas":  { root: "hugas", affix: "mag", aspect: "progressive" },
  "maghuhugas":  { root: "hugas", affix: "mag", aspect: "contemplated" },
  "hugasan":     { root: "hugas", affix: "an",  aspect: "infinitive" },
  "hinugasan":   { root: "hugas", affix: "an",  aspect: "complete" },
  "hinuhugasan": { root: "hugas", affix: "an",  aspect: "progressive" },
  "huhugasan":   { root: "hugas", affix: "an",  aspect: "contemplated" },
  // away
  "mag-away":    { root: "away", affix: "mag", aspect: "infinitive" },
  "nag-away":    { root: "away", affix: "mag", aspect: "complete" },
  "nagaaway":    { root: "away", affix: "mag", aspect: "progressive" },
  "mag-aaway":   { root: "away", affix: "mag", aspect: "contemplated" },
  // maka- forms
  "makakain":    { root: "kain", affix: "maka", aspect: "infinitive" },
  "nakakain":    { root: "kain", affix: "maka", aspect: "complete" },
  "nakakakain":  { root: "kain", affix: "maka", aspect: "progressive" },
  "makakakain":  { root: "kain", affix: "maka", aspect: "contemplated" },
  "makakita":    { root: "kita", affix: "maka", aspect: "infinitive" },
  "nakakita":    { root: "kita", affix: "maka", aspect: "complete" },
  "nakakakita":  { root: "kita", affix: "maka", aspect: "progressive" },
  "makakakita":  { root: "kita", affix: "maka", aspect: "contemplated" },
  // mang- forms
  "mamili":      { root: "bili", affix: "mang", aspect: "infinitive" },
  "namili":      { root: "bili", affix: "mang", aspect: "complete" },
  "namimili":    { root: "bili", affix: "mang", aspect: "progressive" },
  "mamimili":    { root: "bili", affix: "mang", aspect: "contemplated" },
  "manghuli":    { root: "huli", affix: "mangh", aspect: "infinitive" },
  "nanghuli":    { root: "huli", affix: "mangh", aspect: "complete" },
  "nanghuhuli":  { root: "huli", affix: "mangh", aspect: "progressive" },
  "manghuhuli":  { root: "huli", affix: "mangh", aspect: "contemplated" },
  // magpa- forms (causative)
  "magpatulog":  { root: "tulog", affix: "magpa", aspect: "infinitive" },
  "nagpatulog":  { root: "tulog", affix: "magpa", aspect: "complete" },
  "nagpapatulog":{ root: "tulog", affix: "magpa", aspect: "progressive" },
  "magpapatulog":{ root: "tulog", affix: "magpa", aspect: "contemplated" },
  // magka- forms
  "magkaroon":   { root: "roon", affix: "magka", aspect: "infinitive" },
  "nagkaroon":   { root: "roon", affix: "magka", aspect: "complete" },
  "nagkakaroon": { root: "roon", affix: "magka", aspect: "progressive" },
  "magkakaroon": { root: "roon", affix: "magka", aspect: "contemplated" },
  // tanong
  "magtanong":   { root: "tanong", affix: "mag", aspect: "infinitive" },
  "nagtanong":   { root: "tanong", affix: "mag", aspect: "complete" },
  "nagtatanong": { root: "tanong", affix: "mag", aspect: "progressive" },
  "magtatanong": { root: "tanong", affix: "mag", aspect: "contemplated" },
  "tanungin":    { root: "tanong", affix: "in",  aspect: "infinitive" },
  "tinanong":    { root: "tanong", affix: "in",  aspect: "complete" },
  "tinanungan":  { root: "tanong", affix: "an",  aspect: "complete" },
  // sagot
  "magsagot":    { root: "sagot", affix: "mag", aspect: "infinitive" },
  "nagsagot":    { root: "sagot", affix: "mag", aspect: "complete" },
  "sagutin":     { root: "sagot", affix: "in",  aspect: "infinitive" },
  "sinagot":     { root: "sagot", affix: "in",  aspect: "complete" },
  // sundo
  "magsundo":    { root: "sundo", affix: "mag", aspect: "infinitive" },
  "nagsundo":    { root: "sundo", affix: "mag", aspect: "complete" },
  "sundin":      { root: "sundo", affix: "in",  aspect: "infinitive" },
  "sinundo":     { root: "sundo", affix: "in",  aspect: "complete" },
  // dala
  "magdala":     { root: "dala", affix: "mag", aspect: "infinitive" },
  "nagdala":     { root: "dala", affix: "mag", aspect: "complete" },
  "dalhin":      { root: "dala", affix: "in",  aspect: "infinitive" },
  "dinala":      { root: "dala", affix: "in",  aspect: "complete" },
  // balik
  "bumalik":     { root: "balik", affix: "um",  aspect: "complete" },
  "bumabalik":   { root: "balik", affix: "um",  aspect: "progressive" },
  "babalik":     { root: "balik", affix: "um",  aspect: "contemplated" },
  // tawa
  "tumawa":      { root: "tawa", affix: "um",  aspect: "complete" },
  "tumatawa":    { root: "tawa", affix: "um",  aspect: "progressive" },
  "tatawa":      { root: "tawa", affix: "um",  aspect: "contemplated" },
  // iyak
  "umiyak":      { root: "iyak", affix: "um",  aspect: "complete" },
  "umiiyak":     { root: "iyak", affix: "um",  aspect: "progressive" },
  "iiyak":       { root: "iyak", affix: "um",  aspect: "contemplated" },
  // pasok / labas
  "pumasok":     { root: "pasok", affix: "um",  aspect: "complete" },
  "pumapasok":   { root: "pasok", affix: "um",  aspect: "progressive" },
  "lumabas":     { root: "labas", affix: "um",  aspect: "complete" },
  "lalabas":     { root: "labas", affix: "um",  aspect: "contemplated" },
  // gawa
  "magawa":      { root: "gawa", affix: "mag", aspect: "infinitive" },
  "nagawa":      { root: "gawa", affix: "mag", aspect: "complete" },
  "gawin":       { root: "gawa", affix: "in",  aspect: "infinitive" },
  "ginawa":      { root: "gawa", affix: "in",  aspect: "complete" },
  // usap
  "mag-usap":    { root: "usap", affix: "mag", aspect: "infinitive" },
  "nag-usap":    { root: "usap", affix: "mag", aspect: "complete" },
  "naguusap":    { root: "usap", affix: "mag", aspect: "progressive" },
  "maguusap":    { root: "usap", affix: "mag", aspect: "contemplated" },
  "mag-usapan":  { root: "usap", affix: "mag-an", aspect: "infinitive" },
  // hatid
  "maghatid":    { root: "hatid", affix: "mag", aspect: "infinitive" },
  "naghatid":    { root: "hatid", affix: "mag", aspect: "complete" },
  "ihatid":      { root: "hatid", affix: "i",   aspect: "infinitive" },
  "inihatid":    { root: "hatid", affix: "i",   aspect: "complete" },
  // takot / galit
  "natakot":     { root: "takot", affix: "ma",  aspect: "complete" },
  "nagalit":     { root: "galit", affix: "ma",  aspect: "complete" },

  // ============== MORE COMMUNICATION ==============
  // reklamo (complain)
  // paalam (goodbye)
  // tawad (forgive)
  // sumbat (reprimand)
  // amin (admit)
  // tanggi (deny)
  // ============== MORE EMOTIONS / STATES ==============
  // tuwa (be happy)
  // inis (be annoyed)
  // hiya (be ashamed)
  // pagod (be tired)
  // gutom (be hungry)
  // uhaw (be thirsty)
  // ============== MORE DAILY ==============
  // hiram (borrow)
  // upa (rent)
  // tawag (already)
  // hingi (ask for / beg)
  // bili (already)
  // tanggap (receive)
  // bilis (be fast / hurry)
  // dumi (be dirty)
  // linis (already - clean)
  // ayus (fix / arrange)
  // lipat (move / transfer)
  // ============== MORE VERBS ==============
  // ingat (be careful / remember)
  // tulong (already)
  // hintay (already)
  // upo (already)
  // lakad (already)
  // paalam
  "magpaalam":     { root: "paalam", affix: "mag", aspect: "infinitive" },
  "nagpaalam":     { root: "paalam", affix: "mag", aspect: "complete" },
  "nagpapaalam":   { root: "paalam", affix: "mag", aspect: "progressive" },
  "magpapaalam":   { root: "paalam", affix: "mag", aspect: "contemplated" },
  // tawad
  "magtawad":      { root: "tawad", affix: "mag", aspect: "infinitive" },
  "nagtawad":      { root: "tawad", affix: "mag", aspect: "complete" },
  "tawirin":       { root: "tawad", affix: "in",  aspect: "infinitive" },
  "tinawad":       { root: "tawad", affix: "in",  aspect: "complete" },
  // amin
  "umamin":        { root: "amin",  affix: "um",  aspect: "complete" },
  "umaamin":       { root: "amin",  affix: "um",  aspect: "progressive" },
  "aamin":         { root: "amin",  affix: "um",  aspect: "contemplated" },
  // tuwa
  "matuwa":        { root: "tuwa",  affix: "ma",  aspect: "infinitive" },
  "natuwa":        { root: "tuwa",  affix: "ma",  aspect: "complete" },
  "natutuwa":      { root: "tuwa",  affix: "ma",  aspect: "progressive" },
  "matutuwa":      { root: "tuwa",  affix: "ma",  aspect: "contemplated" },
  // pagod
  "mapagod":       { root: "pagod", affix: "ma",  aspect: "infinitive" },
  "napagod":       { root: "pagod", affix: "ma",  aspect: "complete" },
  // gutom
  "magutom":       { root: "gutom", affix: "ma",  aspect: "infinitive" },
  "nagutom":       { root: "gutom", affix: "ma",  aspect: "complete" },
  // uhaw
  "mauhaw":        { root: "uhaw",  affix: "ma",  aspect: "infinitive" },
  "nauhaw":        { root: "uhaw",  affix: "ma",  aspect: "complete" },
  // hingi
  "maghingi":      { root: "hingi", affix: "mag", aspect: "infinitive" },
  "naghingi":      { root: "hingi", affix: "mag", aspect: "complete" },
  "hingin":        { root: "hingi", affix: "in",  aspect: "infinitive" },
  "hiningi":       { root: "hingi", affix: "in",  aspect: "complete" },
  // tanggap
  "tumanggap":     { root: "tanggap", affix: "um",  aspect: "complete" },
  "tatanggap":     { root: "tanggap", affix: "um",  aspect: "contemplated" },
  "itanggap":      { root: "tanggap", affix: "i",   aspect: "infinitive" },
  "itinanggap":    { root: "tanggap", affix: "i",   aspect: "complete" },
  // lipat
  "maglipat":      { root: "lipat", affix: "mag", aspect: "infinitive" },
  "naglipat":      { root: "lipat", affix: "mag", aspect: "complete" },
  // ingat
  "umingat":       { root: "ingat", affix: "um",  aspect: "complete" },
  "umiingat":      { root: "ingat", affix: "um",  aspect: "progressive" },
  // ayus
  "mag-ayos":      { root: "ayus",  affix: "mag", aspect: "infinitive" },
  "nag-ayos":      { root: "ayus",  affix: "mag", aspect: "complete" },
  // hiram
  "umhiram":       { root: "hiram", affix: "um",  aspect: "complete" },
  "umhihiram":     { root: "hiram", affix: "um",  aspect: "progressive" },
  // ===== BATCH 3: 30 more common everyday verbs =====
  // health / body
  "masipon":       { root: "sipon", affix: "ma",  aspect: "infinitive" },
  "nasipon":       { root: "sipon", affix: "ma",  aspect: "complete" },
  "malagnat":      { root: "lagnat", affix: "ma",  aspect: "infinitive" },
  "nalagnat":      { root: "lagnat", affix: "ma",  aspect: "complete" },
  "masakit":       { root: "sakit", affix: "ma",  aspect: "infinitive" },
  "nasakit":       { root: "sakit", affix: "ma",  aspect: "complete" },
  "humilik":       { root: "hilik", affix: "um",  aspect: "complete" },
  "humihilik":     { root: "hilik", affix: "um",  aspect: "progressive" },
  "umngiti":       { root: "ngiti", affix: "um",  aspect: "complete" },
  "umangiti":      { root: "ngiti", affix: "um",  aspect: "progressive" },
  "huminga":       { root: "hinga", affix: "um",  aspect: "complete" },
  "humihinga":     { root: "hinga", affix: "um",  aspect: "progressive" },
  // family
  "nag-asawa":     { root: "asawa", affix: "mag", aspect: "complete" },
  "mag-aasawa":    { root: "asawa", affix: "mag", aspect: "infinitive" },
  "nag-aasawa":    { root: "asawa", affix: "mag", aspect: "progressive" },
  // money
  "mag-ipon":      { root: "ipon", affix: "mag", aspect: "infinitive" },
  "nag-ipon":      { root: "ipon", affix: "mag", aspect: "complete" },
  "umutang":       { root: "utang", affix: "um",  aspect: "complete" },
  // household
  "maglaba":       { root: "laba", affix: "mag", aspect: "infinitive" },
  "naglaba":       { root: "laba", affix: "mag", aspect: "complete" },
  "naglalaba":     { root: "laba", affix: "mag", aspect: "progressive" },
  "magplantsa":    { root: "plantsa", affix: "mag", aspect: "infinitive" },
  "nagplantsa":    { root: "plantsa", affix: "mag", aspect: "complete" },
  "magwalis":      { root: "walis", affix: "mag", aspect: "infinitive" },
  "nagwalis":      { root: "walis", affix: "mag", aspect: "complete" },
  "nagwawalis":    { root: "walis", affix: "mag", aspect: "progressive" },
  "magtiklop":     { root: "tiklop", affix: "mag", aspect: "infinitive" },
  "nagtiklop":     { root: "tiklop", affix: "mag", aspect: "complete" },
  // transport
  "sumakay":       { root: "sakay", affix: "um",  aspect: "complete" },
  "sumasakay":     { root: "sakay", affix: "um",  aspect: "progressive" },
  "sasakay":       { root: "sakay", affix: "um",  aspect: "contemplated" },
  "magmaneho":     { root: "maneho", affix: "mag", aspect: "infinitive" },
  "nagmaneho":     { root: "maneho", affix: "mag", aspect: "complete" },
  "lumipad":       { root: "lipad", affix: "um",  aspect: "complete" },
  "lumilipad":     { root: "lipad", affix: "um",  aspect: "progressive" },
  "lilipad":       { root: "lipad", affix: "um",  aspect: "contemplated" },
  "magbiyahe":     { root: "biyahe", affix: "mag", aspect: "infinitive" },
  "nagbiyahe":     { root: "biyahe", affix: "mag", aspect: "complete" },
  // meals
  "mag-almusal":   { root: "almusal", affix: "mag", aspect: "infinitive" },
  "nag-almusal":   { root: "almusal", affix: "mag", aspect: "complete" },
  "maghapunan":    { root: "hapunan", affix: "mag", aspect: "infinitive" },
  "naghapunan":    { root: "hapunan", affix: "mag", aspect: "complete" },
  "magprito":      { root: "prito", affix: "mag", aspect: "infinitive" },
  "nagprito":      { root: "prito", affix: "mag", aspect: "complete" },
  // daily
  "magpahinga":    { root: "pahinga", affix: "mag", aspect: "infinitive" },
  "nagpahinga":    { root: "pahinga", affix: "mag", aspect: "complete" },
  "magbisikleta":  { root: "bisikleta", affix: "mag", aspect: "infinitive" },
  "nagbisikleta":  { root: "bisikleta", affix: "mag", aspect: "complete" },
  // spiritual
  "magdasal":      { root: "dasal", affix: "mag", aspect: "infinitive" },
  "nagdasal":      { root: "dasal", affix: "mag", aspect: "complete" },
  "magsimba":      { root: "simba", affix: "mag", aspect: "infinitive" },
  "nagsimba":      { root: "simba", affix: "mag", aspect: "complete" },
  // states
  "nasaya":        { root: "masaya", affix: "ma",  aspect: "complete" },
  "nasasaya":      { root: "masaya", affix: "ma",  aspect: "progressive" },
  "masasaya":      { root: "masaya", affix: "ma",  aspect: "contemplated" },
  "malungkot":     { root: "lungkot", affix: "ma",  aspect: "infinitive" },
  "nalungkot":     { root: "lungkot", affix: "ma",  aspect: "complete" },
  "malamig":       { root: "lamig", affix: "ma",  aspect: "infinitive" },
  "nalamig":       { root: "lamig", affix: "ma",  aspect: "complete" },
  "mainit":        { root: "init",  affix: "ma",  aspect: "infinitive" },
  "nainit":        { root: "init",  affix: "ma",  aspect: "complete" },
  // communication
  "mag-text":      { root: "text", affix: "mag", aspect: "infinitive" },
  "nag-text":      { root: "text", affix: "mag", aspect: "complete" },
  "magkwento":     { root: "kwento", affix: "mag", aspect: "infinitive" },
  "nagkwento":     { root: "kwento", affix: "mag", aspect: "complete" },
  // emotions / states
  "umaasa":        { root: "asa", affix: "um",  aspect: "progressive" },
  "umiwas":        { root: "iwas", affix: "um",  aspect: "complete" },
  "umiiwas":       { root: "iwas", affix: "um",  aspect: "progressive" },
  // ===== BATCH 4: 30 more common everyday verbs =====
  // body needs
  "umihi":         { root: "ihi", affix: "um",  aspect: "complete" },
  "umiiihi":       { root: "ihi", affix: "um",  aspect: "progressive" },
  "iihi":          { root: "ihi", affix: "um",  aspect: "contemplated" },
  "dumumi":        { root: "dumi", affix: "um",  aspect: "complete" },
  "dumudumi":      { root: "dumi", affix: "um",  aspect: "progressive" },
  "dudumi":        { root: "dumi", affix: "um",  aspect: "contemplated" },
  "mag-ubo":       { root: "ubo", affix: "mag", aspect: "infinitive" },
  "nag-ubo":       { root: "ubo", affix: "mag", aspect: "complete" },
  "naguubo":       { root: "ubo", affix: "mag", aspect: "progressive" },
  "mag-uubo":      { root: "ubo", affix: "mag", aspect: "contemplated" },
  "magsipilyo":    { root: "sipilyo", affix: "mag", aspect: "infinitive" },
  "nagsipilyo":    { root: "sipilyo", affix: "mag", aspect: "complete" },
  "nagsisipilyo":  { root: "sipilyo", affix: "mag", aspect: "progressive" },
  "magsisipilyo":  { root: "sipilyo", affix: "mag", aspect: "contemplated" },
  "maghilam":      { root: "hilam", affix: "mag", aspect: "infinitive" },
  "naghilam":      { root: "hilam", affix: "mag", aspect: "complete" },
  "naghihilam":    { root: "hilam", affix: "mag", aspect: "progressive" },
  "maghihilam":    { root: "hilam", affix: "mag", aspect: "contemplated" },
  // time
  "mag-umpisa":    { root: "umpisa", affix: "mag", aspect: "infinitive" },
  "nag-umpisa":    { root: "umpisa", affix: "mag", aspect: "complete" },
  "magtapos":      { root: "tapos", affix: "mag", aspect: "infinitive" },
  "nagtapos":      { root: "tapos", affix: "mag", aspect: "complete" },
  "nagtatapos":    { root: "tapos", affix: "mag", aspect: "progressive" },
  "magtatapos":    { root: "tapos", affix: "mag", aspect: "contemplated" },
  "dumating":      { root: "dating", affix: "um",  aspect: "complete" },
  "dumarating":    { root: "dating", affix: "um",  aspect: "progressive" },
  "darating":      { root: "dating", affix: "um",  aspect: "contemplated" },
  "maguwi":        { root: "uwi", affix: "mag", aspect: "infinitive" },
  "naguwi":        { root: "uwi", affix: "mag", aspect: "complete" },
  // send
  "magpadala":     { root: "padala", affix: "mag", aspect: "infinitive" },
  "nagpadala":     { root: "padala", affix: "mag", aspect: "complete" },
  "nagpapadala":   { root: "padala", affix: "mag", aspect: "progressive" },
  // travel
  "magbakasyon":   { root: "bakasyon", affix: "mag", aspect: "infinitive" },
  "nagbakasyon":   { root: "bakasyon", affix: "mag", aspect: "complete" },
  "nagbabakasyon": { root: "bakasyon", affix: "mag", aspect: "progressive" },
  // sports
  "magbasketball": { root: "basketball", affix: "mag", aspect: "infinitive" },
  "nagbasketball": { root: "basketball", affix: "mag", aspect: "complete" },
  "nagbabasketball": { root: "basketball", affix: "mag", aspect: "progressive" },
  "mag-jog":       { root: "jog", affix: "mag", aspect: "infinitive" },
  "nag-jog":       { root: "jog", affix: "mag", aspect: "complete" },
  "nagjijog":      { root: "jog", affix: "mag", aspect: "progressive" },
  "mag-karaoke":   { root: "karaoke", affix: "mag", aspect: "infinitive" },
  "nag-karaoke":   { root: "karaoke", affix: "mag", aspect: "complete" },
  "nagkakaraoke":  { root: "karaoke", affix: "mag", aspect: "progressive" },
  // work
  "magbenta":      { root: "benta", affix: "mag", aspect: "infinitive" },
  "nagbenta":      { root: "benta", affix: "mag", aspect: "complete" },
  "nagbebenta":    { root: "benta", affix: "mag", aspect: "progressive" },
  "magnegosyo":    { root: "negosyo", affix: "mag", aspect: "infinitive" },
  "nagnegosyo":    { root: "negosyo", affix: "mag", aspect: "complete" },
  "nagnenegosyo":  { root: "negosyo", affix: "mag", aspect: "progressive" },
  // agriculture
  "mag-ani":       { root: "ani", affix: "mag", aspect: "infinitive" },
  "nag-ani":       { root: "ani", affix: "mag", aspect: "complete" },
  "magtanim":      { root: "tanim", affix: "mag", aspect: "infinitive" },
  "nagtanim":      { root: "tanim", affix: "mag", aspect: "complete" },
  "nagtatanim":    { root: "tanim", affix: "mag", aspect: "progressive" },
  // counting
  "magbilang":     { root: "bilang", affix: "mag", aspect: "infinitive" },
  "nagbilang":     { root: "bilang", affix: "mag", aspect: "complete" },
  "nagbibilang":   { root: "bilang", affix: "mag", aspect: "progressive" },
  // cooking more
  "maggisa":       { root: "gisa", affix: "mag", aspect: "infinitive" },
  "naggisa":       { root: "gisa", affix: "mag", aspect: "complete" },
  "naggigisa":     { root: "gisa", affix: "mag", aspect: "progressive" },
  "magbuhos":      { root: "buhos", affix: "mag", aspect: "infinitive" },
  "nagbuhos":      { root: "buhos", affix: "mag", aspect: "complete" },
  "nagbubuhos":    { root: "buhos", affix: "mag", aspect: "progressive" },
  // emotion
  "magselos":      { root: "selos", affix: "mag", aspect: "infinitive" },
  "nagselos":      { root: "selos", affix: "mag", aspect: "complete" },
  "nagseselos":    { root: "selos", affix: "mag", aspect: "progressive" },
  "magseselos":    { root: "selos", affix: "mag", aspect: "contemplated" },
  // reciprocal
  "magkita":       { root: "kita", affix: "mag", aspect: "infinitive" },
  "nagkita":       { root: "kita", affix: "mag", aspect: "complete" },
  "nagkikita":     { root: "kita", affix: "mag", aspect: "progressive" },
  "magkikita":     { root: "kita", affix: "mag", aspect: "contemplated" },
  // time of day
  "magabi":        { root: "gabi", affix: "ma",  aspect: "infinitive" },
  "nagabi":        { root: "gabi", affix: "ma",  aspect: "complete" },
  "nagagabi":      { root: "gabi", affix: "ma",  aspect: "progressive" },
  "magagabi":      { root: "gabi", affix: "ma",  aspect: "contemplated" },
  // typing / communication
  "mag-type":      { root: "type", affix: "mag", aspect: "infinitive" },
  "nag-type":      { root: "type", affix: "mag", aspect: "complete" },
  "nagtitype":     { root: "type", affix: "mag", aspect: "progressive" },
  "mag-chat":      { root: "chat", affix: "mag", aspect: "infinitive" },
  "nag-chat":      { root: "chat", affix: "mag", aspect: "complete" },
  "nagchachat":    { root: "chat", affix: "mag", aspect: "progressive" },
  // daily washing
  "maghilamos":    { root: "hilamos", affix: "mag", aspect: "infinitive" },
  "naghilamos":    { root: "hilamos", affix: "mag", aspect: "complete" },
  "naghihilamos":  { root: "hilamos", affix: "mag", aspect: "progressive" },
  // buhay (live)
  "mabuhay":       { root: "buhay", affix: "ma",  aspect: "infinitive" },
  "nabuhay":       { root: "buhay", affix: "ma",  aspect: "complete" },
  "nabubuhay":     { root: "buhay", affix: "ma",  aspect: "progressive" },
  "mabubuhay":     { root: "buhay", affix: "ma",  aspect: "contemplated" },
  // ===== BATCH 5: 40 more common everyday verbs =====
  // ADJECTIVES (stative)
  "mabigat":       { root: "bigat", affix: "ma",  aspect: "infinitive" },
  "nabigat":       { root: "bigat", affix: "ma",  aspect: "complete" },
  "magaan":        { root: "gaan", affix: "ma",  aspect: "infinitive" },
  "nagaan":        { root: "gaan", affix: "ma",  aspect: "complete" },
  "mahaba":        { root: "haba", affix: "ma",  aspect: "infinitive" },
  "nahaba":        { root: "haba", affix: "ma",  aspect: "complete" },
  "maikli":        { root: "ikli", affix: "ma",  aspect: "infinitive" },
  "naikli":        { root: "ikli", affix: "ma",  aspect: "complete" },
  "mababa":        { root: "baba", affix: "ma",  aspect: "infinitive" },
  "nababa":        { root: "baba", affix: "ma",  aspect: "complete" },
  "mabilis":       { root: "bilis", affix: "ma",  aspect: "infinitive" },
  "nabilis":       { root: "bilis", affix: "ma",  aspect: "complete" },
  "mabagal":       { root: "bagal", affix: "ma",  aspect: "infinitive" },
  "nabagal":       { root: "bagal", affix: "ma",  aspect: "complete" },
  "mamura":        { root: "mura", affix: "ma",  aspect: "infinitive" },
  "namura":        { root: "mura", affix: "ma",  aspect: "complete" },
  "mamahal":       { root: "mahal", affix: "ma",  aspect: "infinitive" },
  "namahal":       { root: "mahal", affix: "ma",  aspect: "complete" },
  "malaki":        { root: "laki", affix: "ma",  aspect: "infinitive" },
  "nalaki":        { root: "laki", affix: "ma",  aspect: "complete" },
  "maliit":        { root: "liit", affix: "ma",  aspect: "infinitive" },
  "naliit":        { root: "liit", affix: "ma",  aspect: "complete" },
  "maganda":       { root: "ganda", affix: "ma",  aspect: "infinitive" },
  "naganda":       { root: "ganda", affix: "ma",  aspect: "complete" },
  "mapangit":      { root: "pangit", affix: "ma",  aspect: "infinitive" },
  "napangit":      { root: "pangit", affix: "ma",  aspect: "complete" },
  "mabago":        { root: "bago", affix: "ma",  aspect: "infinitive" },
  "nabago":        { root: "bago", affix: "ma",  aspect: "complete" },
  "maluma":        { root: "luma", affix: "ma",  aspect: "infinitive" },
  "naluma":        { root: "luma", affix: "ma",  aspect: "complete" },
  // weather
  "umulan":        { root: "ulan", affix: "um",  aspect: "complete" },
  "umuulan":       { root: "ulan", affix: "um",  aspect: "progressive" },
  "ulan":          { root: "ulan", affix: "um",  aspect: "contemplated" },
  // emotions / mental
  "maalala":       { root: "alala", affix: "ma",  aspect: "infinitive" },
  "naalala":       { root: "alala", affix: "ma",  aspect: "complete" },
  "naaalala":      { root: "alala", affix: "ma",  aspect: "progressive" },
  "makalimot":     { root: "limot", affix: "ma",  aspect: "infinitive" },
  "nakalimot":     { root: "limot", affix: "ma",  aspect: "complete" },
  "magsisi":       { root: "sisi", affix: "mag", aspect: "infinitive" },
  "nagsisi":       { root: "sisi", affix: "mag", aspect: "complete" },
  "nagsisisi":     { root: "sisi", affix: "mag", aspect: "progressive" },
  "magsisisi":     { root: "sisi", affix: "mag", aspect: "contemplated" },
  "mabigo":        { root: "bigo", affix: "ma",  aspect: "infinitive" },
  "nabigo":        { root: "bigo", affix: "ma",  aspect: "complete" },
  // body / hygiene
  "magligo":       { root: "ligo", affix: "mag", aspect: "infinitive" },
  "nagligo":       { root: "ligo", affix: "mag", aspect: "complete" },
  "naglilig":      { root: "ligo", affix: "mag", aspect: "progressive" },
  "maglilig":      { root: "ligo", affix: "mag", aspect: "contemplated" },
  "mag-ahit":      { root: "ahit", affix: "mag", aspect: "infinitive" },
  "nag-ahit":      { root: "ahit", affix: "mag", aspect: "complete" },
  "nagaahit":      { root: "ahit", affix: "mag", aspect: "progressive" },
  "mag-aahit":     { root: "ahit", affix: "mag", aspect: "contemplated" },
  // sports
  "magbadminton":  { root: "badminton", affix: "mag", aspect: "infinitive" },
  "nagbadminton":  { root: "badminton", affix: "mag", aspect: "complete" },
  "nagbabdminton": { root: "badminton", affix: "mag", aspect: "progressive" },
  "magvolleyball": { root: "volleyball", affix: "mag", aspect: "infinitive" },
  "nagvolleyball": { root: "volleyball", affix: "mag", aspect: "complete" },
  "nagbovolleyball": { root: "volleyball", affix: "mag", aspect: "progressive" },
  // cooking more
  "magboil":       { root: "boil", affix: "mag", aspect: "infinitive" },
  "nagboil":       { root: "boil", affix: "mag", aspect: "complete" },
  "nagboboil":     { root: "boil", affix: "mag", aspect: "progressive" },
  "maggrill":      { root: "grill", affix: "mag", aspect: "infinitive" },
  "naggrill":      { root: "grill", affix: "mag", aspect: "complete" },
  "naggrigrill":   { root: "grill", affix: "mag", aspect: "progressive" },
  "magbake":       { root: "bake", affix: "mag", aspect: "infinitive" },
  "nagbake":       { root: "bake", affix: "mag", aspect: "complete" },
  "nagbabake":     { root: "bake", affix: "mag", aspect: "progressive" },
  // work
  "magresign":     { root: "resign", affix: "mag", aspect: "infinitive" },
  "nagresign":     { root: "resign", affix: "mag", aspect: "complete" },
  // money
  "mag-withdraw":  { root: "withdraw", affix: "mag", aspect: "infinitive" },
  "nag-withdraw":  { root: "withdraw", affix: "mag", aspect: "complete" },
  "nagwiwithdraw": { root: "withdraw", affix: "mag", aspect: "progressive" },
  // communication
  "mag-email":     { root: "email", affix: "mag", aspect: "infinitive" },
  "nag-email":     { root: "email", affix: "mag", aspect: "complete" },
  "nag-eemail":    { root: "email", affix: "mag", aspect: "progressive" },
  "mag-share":     { root: "share", affix: "mag", aspect: "infinitive" },
  "nag-share":     { root: "share", affix: "mag", aspect: "complete" },
  "nagsha-share":  { root: "share", affix: "mag", aspect: "progressive" },
  // becoming
  "maging":        { root: "maging", affix: "mag", aspect: "infinitive" },
  "naging":        { root: "maging", affix: "mag", aspect: "complete" },
  "magiging":      { root: "maging", affix: "mag", aspect: "contemplated" },

  // 20 NEW VERBS - CONJUGATED LOOKUP
  // gawa
  "gumawa":     { root: "gawa", affix: "um",  aspect: "complete" },
  "gumagawa":   { root: "gawa", affix: "um",  aspect: "progressive" },
  "gagawin":    { root: "gawa", affix: "in",  aspect: "contemplated" },
  "gawin":      { root: "gawa", affix: "in",  aspect: "infinitive" },
  "ginawa":     { root: "gawa", affix: "in",  aspect: "complete" },
  "ginagawa":   { root: "gawa", affix: "in",  aspect: "progressive" },
  // sabi
  "magsabi":    { root: "sabi", affix: "mag", aspect: "infinitive" },
  "nagsabi":    { root: "sabi", affix: "mag", aspect: "complete" },
  "nagsasabi":  { root: "sabi", affix: "mag", aspect: "progressive" },
  "magsasabi":  { root: "sabi", affix: "mag", aspect: "contemplated" },
  "sabihin":    { root: "sabi", affix: "in",  aspect: "infinitive" },
  "sinabi":     { root: "sabi", affix: "in",  aspect: "complete" },
  "sasabihin":  { root: "sabi", affix: "in",  aspect: "contemplated" },
  // hanap
  "maghanap":   { root: "hanap", affix: "mag", aspect: "infinitive" },
  "naghanap":   { root: "hanap", affix: "mag", aspect: "complete" },
  "naghahanap": { root: "hanap", affix: "mag", aspect: "progressive" },
  "maghahanap": { root: "hanap", affix: "mag", aspect: "contemplated" },
  "hanapin":    { root: "hanap", affix: "in",  aspect: "infinitive" },
  "hinanap":    { root: "hanap", affix: "in",  aspect: "complete" },
  "hinahanap":  { root: "hanap", affix: "in",  aspect: "progressive" },
  "hahanapin":  { root: "hanap", affix: "in",  aspect: "contemplated" },
  // tanggap
  "tumanggap":  { root: "tanggap", affix: "um",  aspect: "complete" },
  "tumtanggap": { root: "tanggap", affix: "um",  aspect: "progressive" },
  "tatanggap":  { root: "tanggap", affix: "um",  aspect: "contemplated" },
  "tanggapin":  { root: "tanggap", affix: "in",  aspect: "infinitive" },
  "tinanggap":  { root: "tanggap", affix: "in",  aspect: "complete" },
  "tinatanggap":{ root: "tanggap", affix: "in",  aspect: "progressive" },
  "tatanggapin":{ root: "tanggap", affix: "in",  aspect: "contemplated" },
  // pasa
  "magpasa":    { root: "pasa", affix: "mag", aspect: "infinitive" },
  "nagpasa":    { root: "pasa", affix: "mag", aspect: "complete" },
  "nagpapasa":  { root: "pasa", affix: "mag", aspect: "progressive" },
  "magpapasa":  { root: "pasa", affix: "mag", aspect: "contemplated" },
  "ipasa":      { root: "pasa", affix: "i",   aspect: "infinitive" },
  "ipinasa":    { root: "pasa", affix: "i",   aspect: "complete" },
  "ipapasa":    { root: "pasa", affix: "i",   aspect: "contemplated" },
  // tigil
  "magtigil":   { root: "tigil", affix: "mag", aspect: "infinitive" },
  "nagtigil":   { root: "tigil", affix: "mag", aspect: "complete" },
  "nagtitigil": { root: "tigil", affix: "mag", aspect: "progressive" },
  "magtitigil": { root: "tigil", affix: "mag", aspect: "contemplated" },
  "itinigil":   { root: "tigil", affix: "in",  aspect: "complete" },
  // hintay
  "maghintay":  { root: "hintay", affix: "mag", aspect: "infinitive" },
  "naghintay":  { root: "hintay", affix: "mag", aspect: "complete" },
  "naghihintay":{ root: "hintay", affix: "mag", aspect: "progressive" },
  "maghihintay":{ root: "hintay", affix: "mag", aspect: "contemplated" },
  // simula
  "magsimula":  { root: "simula", affix: "mag", aspect: "infinitive" },
  "nagsimula":  { root: "simula", affix: "mag", aspect: "complete" },
  "nagsisimula":{ root: "simula", affix: "mag", aspect: "progressive" },
  "magsisimula":{ root: "simula", affix: "mag", aspect: "contemplated" },
  // tapos
  "magtapos":   { root: "tapos", affix: "mag", aspect: "infinitive" },
  "nagtapos":   { root: "tapos", affix: "mag", aspect: "complete" },
  "nagtatapos": { root: "tapos", affix: "mag", aspect: "progressive" },
  "magtatapos": { root: "tapos", affix: "mag", aspect: "contemplated" },
  // tuloy
  "magtuloy":   { root: "tuloy", affix: "mag", aspect: "infinitive" },
  "nagtuloy":   { root: "tuloy", affix: "mag", aspect: "complete" },
  "nagtutuloy": { root: "tuloy", affix: "mag", aspect: "progressive" },
  "magtutuloy": { root: "tuloy", affix: "mag", aspect: "contemplated" },
  // alis
  "mag-alis":   { root: "alis", affix: "mag", aspect: "infinitive" },
  "nag-alis":   { root: "alis", affix: "mag", aspect: "complete" },
  "nag-aalis":  { root: "alis", affix: "mag", aspect: "progressive" },
  "mag-aalis":  { root: "alis", affix: "mag", aspect: "contemplated" },
  "alisin":     { root: "alis", affix: "in",  aspect: "infinitive" },
  "inalis":     { root: "alis", affix: "in",  aspect: "complete" },
  "inaalis":    { root: "alis", affix: "in",  aspect: "progressive" },
  "aalisin":    { root: "alis", affix: "in",  aspect: "contemplated" },
  // dating
  "magdating":  { root: "dating", affix: "mag", aspect: "infinitive" },
  "nagdating":  { root: "dating", affix: "mag", aspect: "complete" },
  "nagdadating":{ root: "dating", affix: "mag", aspect: "progressive" },
  "magdadating":{ root: "dating", affix: "mag", aspect: "contemplated" },
  // kuha
  "kumuha":     { root: "kuha", affix: "um",  aspect: "complete" },
  "kumukuha":   { root: "kuha", affix: "um",  aspect: "progressive" },
  "kukuha":     { root: "kuha", affix: "um",  aspect: "contemplated" },
  "kunin":      { root: "kuha", affix: "in",  aspect: "infinitive" },
  "kinuha":     { root: "kuha", affix: "in",  aspect: "complete" },
  "kinukuha":   { root: "kuha", affix: "in",  aspect: "progressive" },
  // taya
  "magtaya":    { root: "taya", affix: "mag", aspect: "infinitive" },
  "nagtaya":    { root: "taya", affix: "mag", aspect: "complete" },
  "nagtataya":  { root: "taya", affix: "mag", aspect: "progressive" },
  "magtataya":  { root: "taya", affix: "mag", aspect: "contemplated" },
  // suklay
  "magsuklay":  { root: "suklay", affix: "mag", aspect: "infinitive" },
  "nagsuklay":  { root: "suklay", affix: "mag", aspect: "complete" },
  "nagsusuklay":{ root: "suklay", affix: "mag", aspect: "progressive" },
  "magsusuklay":{ root: "suklay", affix: "mag", aspect: "contemplated" },
  // yuko
  "yumuko":     { root: "yuko", affix: "um",  aspect: "infinitive" },
  "yumuyuko":   { root: "yuko", affix: "um",  aspect: "progressive" },
  "yuyuko":     { root: "yuko", affix: "um",  aspect: "contemplated" },
  // lipat
  "maglipat":   { root: "lipat", affix: "mag", aspect: "infinitive" },
  "naglipat":   { root: "lipat", affix: "mag", aspect: "complete" },
  "naglilipat": { root: "lipat", affix: "mag", aspect: "progressive" },
  "maglilipat": { root: "lipat", affix: "mag", aspect: "contemplated" },
  "ilipat":     { root: "lipat", affix: "i",   aspect: "infinitive" },
  "inilipat":   { root: "lipat", affix: "i",   aspect: "complete" },
  "inililipat": { root: "lipat", affix: "i",   aspect: "progressive" },
  "ililipat":   { root: "lipat", affix: "i",   aspect: "contemplated" },
  // hugot
  "maghugot":   { root: "hugot", affix: "mag", aspect: "infinitive" },
  "naghugot":   { root: "hugot", affix: "mag", aspect: "complete" },
  "naghuhugot": { root: "hugot", affix: "mag", aspect: "progressive" },
  "maghuhugot": { root: "hugot", affix: "mag", aspect: "contemplated" },
  "hugutin":    { root: "hugot", affix: "in",  aspect: "infinitive" },
  "hinugot":    { root: "hugot", affix: "in",  aspect: "complete" },
  "hinuhugot":  { root: "hugot", affix: "in",  aspect: "progressive" },
  "huhugutin":  { root: "hugot", affix: "in",  aspect: "contemplated" },
  // tulak
  "magtulak":   { root: "tulak", affix: "mag", aspect: "infinitive" },
  "nagtulak":   { root: "tulak", affix: "mag", aspect: "complete" },
  "nagtutulak": { root: "tulak", affix: "mag", aspect: "progressive" },
  "magtutulak": { root: "tulak", affix: "mag", aspect: "contemplated" },
  "tulakin":    { root: "tulak", affix: "in",  aspect: "infinitive" },
  "tinulak":    { root: "tulak", affix: "in",  aspect: "complete" },
  "tinutulak":  { root: "tulak", affix: "in",  aspect: "progressive" },
  "tutulakin":  { root: "tulak", affix: "in",  aspect: "contemplated" },
  // salpak
  "magsalpak":  { root: "salpak", affix: "mag", aspect: "infinitive" },
  "nagsalpak":  { root: "salpak", affix: "mag", aspect: "complete" },
  "nagsasalpak":{ root: "salpak", affix: "mag", aspect: "progressive" },
  "magsasalpak":{ root: "salpak", affix: "mag", aspect: "contemplated" },
  // 20 NEW VERBS (ROUND 3) - CONJUGATED LOOKUP
  // hatid
  "maghatid":    { root: "hatid", affix: "mag", aspect: "infinitive" },
  "naghatid":    { root: "hatid", affix: "mag", aspect: "complete" },
  "maghahatid":  { root: "hatid", affix: "mag", aspect: "contemplated" },
  "ihatid":      { root: "hatid", affix: "i",   aspect: "infinitive" },
  "inihatid":    { root: "hatid", affix: "i",   aspect: "complete" },
  "ihahatid":    { root: "hatid", affix: "i",   aspect: "contemplated" },
  // pili
  "magpili":     { root: "pili", affix: "mag", aspect: "infinitive" },
  "nagpili":     { root: "pili", affix: "mag", aspect: "complete" },
  "nagpipili":   { root: "pili", affix: "mag", aspect: "progressive" },
  "magpipili":   { root: "pili", affix: "mag", aspect: "contemplated" },
  "piliin":      { root: "pili", affix: "in",  aspect: "infinitive" },
  "pinili":      { root: "pili", affix: "in",  aspect: "complete" },
  "pinipili":    { root: "pili", affix: "in",  aspect: "progressive" },
  "pipiliin":    { root: "pili", affix: "in",  aspect: "contemplated" },
  // tinda
  "magtinda":    { root: "tinda", affix: "mag", aspect: "infinitive" },
  "nagtinda":    { root: "tinda", affix: "mag", aspect: "complete" },
  "nagtitinda":  { root: "tinda", affix: "mag", aspect: "progressive" },
  "magtitinda":  { root: "tinda", affix: "mag", aspect: "contemplated" },
  // sukat
  "magsukat":    { root: "sukat", affix: "mag", aspect: "infinitive" },
  "nagsukat":    { root: "sukat", affix: "mag", aspect: "complete" },
  "nagsusukat":  { root: "sukat", affix: "mag", aspect: "progressive" },
  "magsusukat":  { root: "sukat", affix: "mag", aspect: "contemplated" },
  "sukatin":     { root: "sukat", affix: "in",  aspect: "infinitive" },
  "sinukat":     { root: "sukat", affix: "in",  aspect: "complete" },
  "sinusukat":   { root: "sukat", affix: "in",  aspect: "progressive" },
  "susukatin":   { root: "sukat", affix: "in",  aspect: "contemplated" },
  // timbang
  "magtimbang":  { root: "timbang", affix: "mag", aspect: "infinitive" },
  "nagtimbang":  { root: "timbang", affix: "mag", aspect: "complete" },
  "nagtitimbang":{ root: "timbang", affix: "mag", aspect: "progressive" },
  "magtitimbang":{ root: "timbang", affix: "mag", aspect: "contemplated" },
  // sali
  "sumali":      { root: "sali", affix: "um",  aspect: "infinitive" },
  "sumasali":    { root: "sali", affix: "um",  aspect: "progressive" },
  "sasali":      { root: "sali", affix: "um",  aspect: "contemplated" },
  // abot
  "mag-abot":    { root: "abot", affix: "mag", aspect: "infinitive" },
  "nag-abot":    { root: "abot", affix: "mag", aspect: "complete" },
  "nag-aabot":   { root: "abot", affix: "mag", aspect: "progressive" },
  "mag-aabot":   { root: "abot", affix: "mag", aspect: "contemplated" },
  // tawid
  "tumawid":     { root: "tawid", affix: "um",  aspect: "infinitive" },
  "tumatawid":   { root: "tawid", affix: "um",  aspect: "progressive" },
  "tatawid":     { root: "tawid", affix: "um",  aspect: "contemplated" },
  // talon
  "tumalon":     { root: "talon", affix: "um",  aspect: "infinitive" },
  "tumatalon":   { root: "talon", affix: "um",  aspect: "progressive" },
  "tatalon":     { root: "talon", affix: "um",  aspect: "contemplated" },
  // langoy
  "maglangoy":   { root: "langoy", affix: "mag", aspect: "infinitive" },
  "naglangoy":   { root: "langoy", affix: "mag", aspect: "complete" },
  "naglalangoy": { root: "langoy", affix: "mag", aspect: "progressive" },
  "maglalangoy": { root: "langoy", affix: "mag", aspect: "contemplated" },
  // lupa
  "maglu-pa":    { root: "lupa", affix: "mag", aspect: "infinitive" },
  "naglu-pa":    { root: "lupa", affix: "mag", aspect: "complete" },
  "naglulu-pa":  { root: "lupa", affix: "mag", aspect: "progressive" },
  "maglulu-pa":  { root: "lupa", affix: "mag", aspect: "contemplated" },
  // tago
  "magtago":     { root: "tago", affix: "mag", aspect: "infinitive" },
  "nagtago":     { root: "tago", affix: "mag", aspect: "complete" },
  "nagtatago":   { root: "tago", affix: "mag", aspect: "progressive" },
  "magtatago":   { root: "tago", affix: "mag", aspect: "contemplated" },
  "itago":       { root: "tago", affix: "i",   aspect: "infinitive" },
  "itinago":     { root: "tago", affix: "i",   aspect: "complete" },
  "itinatago":   { root: "tago", affix: "i",   aspect: "progressive" },
  "itatago":     { root: "tago", affix: "i",   aspect: "contemplated" },
  // iwas
  "umiwas":      { root: "iwas", affix: "um",  aspect: "infinitive" },
  "umiiwas":     { root: "iwas", affix: "um",  aspect: "progressive" },
  "iiwas":       { root: "iwas", affix: "um",  aspect: "contemplated" },
  // ayaw
  "mag-ayaw":    { root: "ayaw", affix: "mag", aspect: "infinitive" },
  "nag-ayaw":    { root: "ayaw", affix: "mag", aspect: "complete" },
  "nag-aayaw":   { root: "ayaw", affix: "mag", aspect: "progressive" },
  "mag-aayaw":   { root: "ayaw", affix: "mag", aspect: "contemplated" },
  // ibig
  "mag-ibig":    { root: "ibig", affix: "mag", aspect: "infinitive" },
  "nag-ibig":    { root: "ibig", affix: "mag", aspect: "complete" },
  "nag-iibig":   { root: "ibig", affix: "mag", aspect: "progressive" },
  "mag-iibig":   { root: "ibig", affix: "mag", aspect: "contemplated" },
  // lungkot
  "malungkot":   { root: "lungkot", affix: "ma",  aspect: "infinitive" },
  "nalungkot":   { root: "lungkot", affix: "ma",  aspect: "complete" },
  "nalulungkot": { root: "lungkot", affix: "ma",  aspect: "progressive" },
  "malulungkot": { root: "lungkot", affix: "ma",  aspect: "contemplated" },
  // hiya
  "mahihya":     { root: "hiya", affix: "ma",  aspect: "infinitive" },
  "nahiya":      { root: "hiya", affix: "ma",  aspect: "complete" },
  "nahihiya":    { root: "hiya", affix: "ma",  aspect: "progressive" },
  "mahihiya":    { root: "hiya", affix: "ma",  aspect: "contemplated" },
  // inis
  "mainis":      { root: "inis", affix: "ma",  aspect: "infinitive" },
  "nainis":      { root: "inis", affix: "ma",  aspect: "complete" },
  "naiinpis":    { root: "inis", affix: "ma",  aspect: "progressive" },
  "maiinpis":    { root: "inis", affix: "ma",  aspect: "contemplated" },
  // antok
  "maantok":     { root: "antok", affix: "ma",  aspect: "infinitive" },
  "naantok":     { root: "antok", affix: "ma",  aspect: "complete" },
  "naaantok":    { root: "antok", affix: "ma",  aspect: "progressive" },
  "maaantok":    { root: "antok", affix: "ma",  aspect: "contemplated" },
  // usisa
  "mag-usisa":   { root: "usisa", affix: "mag", aspect: "infinitive" },
  "nag-usisa":   { root: "usisa", affix: "mag", aspect: "complete" },
  "naguusisa":   { root: "usisa", affix: "mag", aspect: "progressive" },
  "maguusisa":   { root: "usisa", affix: "mag", aspect: "contemplated" }
};

// Export to window so other scripts can use it
if (typeof window !== "undefined") {
  window.VERB_DATABASE = VERB_DATABASE;
  window.CONJUGATED_LOOKUP = CONJUGATED_LOOKUP;
}
