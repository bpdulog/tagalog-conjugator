/* ============================================================
   Extended everyday-verb catalog

   This 269-root extension is the first portion of the expanded learner catalog.
   Each
   record supplies one conservative, high-utility actor-focus family; it
   deliberately does not infer every productive focus for the root. The
   original core and legacy records retain their more detailed, hand-curated
   paradigms.
   ============================================================ */

const EVERYDAY_VERB_EXPANSION = Object.freeze([
  ["bihis", "get dressed", "mag"], ["bangon", "get up", "um"], ["basag", "break", "ma"], ["bawas", "reduce"], ["bawi", "take back"],
  ["biro", "joke"], ["buga", "blow out", "um"], ["bulong", "whisper", "um"], ["bura", "erase"], ["dalaw", "visit"],
  ["dampot", "pick up", "um"], ["dapa", "lie face down", "um"], ["dikit", "stick to", "um"], ["dukot", "pickpocket", "um"], ["dura", "spit", "um"],
  ["durog", "be crushed", "ma"], ["galaw", "move", "um"], ["gala", "go around"], ["ganti", "take revenge"], ["gapang", "crawl", "um"],
  ["gabay", "guide"], ["gastos", "spend"], ["guhit", "draw"], ["gulong", "roll", "um"], ["gupit", "cut hair"],
  ["habol", "chase", "um"], ["hagod", "stroke"], ["halik", "kiss", "um"], ["halo", "mix"], ["harap", "face", "um"],
  ["hati", "divide"], ["hatak", "pull", "um"], ["hila", "pull"], ["hipo", "touch", "um"], ["hithit", "inhale", "um"],
  ["hulog", "fall", "ma"], ["huni", "chirp", "um"], ["imbak", "store"], ["imbita", "invite"], ["ipit", "be trapped", "ma"],
  ["isda", "fish", "mang"], ["iyaw", "howl", "um"], ["kaladkad", "drag"], ["kalat", "scatter"], ["kalas", "take apart"],
  ["kalkal", "rummage"], ["kalma", "calm down"], ["kalmot", "scratch", "um"], ["kapa", "feel around", "um"], ["kapit", "hold on", "um"],

  ["kaskas", "scrub"], ["kawag", "wave"], ["kembot", "wiggle"], ["kiskis", "rub"], ["kopya", "copy"],
  ["kumbida", "invite"], ["kumpas", "gesture"], ["kumpirma", "confirm"], ["kunot", "wrinkle", "um"], ["kulay", "color"],
  ["kulo", "boil", "um"], ["kulong", "be imprisoned", "um"], ["kurot", "pinch", "um"], ["laban", "fight", "um"], ["laglag", "fall", "um"],
  ["lamas", "knead"], ["langhap", "inhale", "um"], ["lapit", "approach", "um"], ["lathala", "publish"], ["layag", "sail"],
  ["libang", "have fun"], ["libot", "go around", "um"], ["ligaw", "court", "um"], ["likha", "create"], ["liko", "turn", "um"],
  ["limas", "clear out"], ["linang", "develop"], ["lisan", "leave", "um"], ["lubog", "sink", "um"], ["lunas", "treat"],
  ["lutas", "solve"], ["maniobra", "maneuver"], ["maniwala", "believe"], ["masahe", "massage"], ["masdan", "observe"],
  ["nganga", "open the mouth", "um"], ["ngatngat", "gnaw", "um"], ["nguso", "pout", "um"], ["pahid", "wipe"], ["palakpak", "clap", "um"],
  ["paligo", "bathe someone"], ["palit", "change"], ["palo", "hit", "um"], ["pamaypay", "fan oneself"], ["pansin", "notice"],
  ["pasalamat", "give thanks"], ["patawad", "forgive"], ["patak", "drip", "um"], ["patay", "die", "ma"], ["piga", "squeeze"],

  ["pigil", "restrain", "um"], ["pihit", "turn"], ["pinta", "paint"], ["pitas", "pick", "um"], ["punit", "tear", "um"],
  ["pusta", "bet"], ["putok", "explode", "um"], ["rehistro", "register"], ["reklamo", "complain"], ["relax", "relax"],
  ["reserba", "reserve"], ["sabay", "go together"], ["sagip", "rescue", "um"], ["saksak", "stab", "um"], ["salo", "catch", "um"],
  ["sampal", "slap", "um"], ["sampay", "hang laundry"], ["sapak", "punch", "um"], ["selyo", "seal"], ["sibat", "leave suddenly", "um"],
  ["sigaw", "shout", "um"], ["sikip", "be tight", "ma"], ["silip", "peek", "um"], ["sindi", "light"], ["sipa", "kick", "um"],
  ["sipol", "whistle", "um"], ["sisid", "dive", "um"], ["siyasat", "investigate"], ["sumbong", "report", "um"], ["sugod", "charge", "um"],
  ["sunod", "follow", "um"], ["sunog", "burn"], ["suri", "examine"], ["tabas", "trim"], ["tabon", "cover"],
  ["tagay", "drink a toast"], ["tahi", "sew"], ["takas", "escape", "um"], ["talak", "rant"], ["tali", "tie"],
  ["tampal", "slap", "um"], ["tikim", "taste", "um"], ["timpla", "mix"], ["tingala", "look up", "um"], ["titig", "stare", "um"],
  ["tupi", "fold"], ["tusok", "pierce", "um"], ["ubos", "run out", "ma"], ["udyok", "urge"], ["ukit", "carve"],

  ["ulit", "repeat", "um"], ["unawa", "understand", "um"], ["urong", "retreat", "um"], ["usig", "persecute", "um"], ["yakap", "hug", "um"],
  ["yaya", "invite"], ["yupi", "be dented", "ma"], ["yugyog", "shake"], ["abuso", "abuse"], ["adjust", "adjust"],
  ["ambag", "contribute"], ["angkat", "import"], ["anunsyo", "announce"], ["apela", "appeal"], ["aplay", "apply"],
  ["apruba", "approve"], ["aruga", "care for"], ["asikaso", "attend to"], ["atake", "attack", "um"], ["atras", "move back", "um"],
  ["balak", "plan"], ["balot", "wrap"], ["bangga", "collide", "um"], ["banlaw", "rinse"], ["baril", "shoot", "um"],
  ["batak", "pull hard", "um"], ["bilad", "dry in the sun"], ["bintang", "accuse"], ["bomba", "bomb"], ["boto", "vote", "um"],
  ["bunot", "pull out", "um"], ["damay", "join in", "um"], ["daya", "cheat"], ["deklara", "declare"], ["demanda", "sue"],
  ["depensa", "defend"], ["dilig", "water plants"], ["diskarte", "make a plan"], ["duda", "doubt"], ["dugtong", "connect"],
  ["dungaw", "look out", "um"], ["ehersisyo", "exercise"], ["ensayo", "rehearse"], ["gaya", "imitate"], ["habi", "weave"],
  ["halal", "elect"], ["harang", "block"], ["higop", "sip", "um"], ["import", "import"], ["kandado", "lock"],

  ["kasal", "get married"], ["katok", "knock", "um"], ["kondena", "condemn"], ["konekta", "connect"], ["kontrol", "control"],
  ["kuwenta", "calculate"], ["labag", "violate"], ["lakip", "attach"], ["lakwatsa", "go out for fun"], ["lambing", "be affectionate"],
  ["lapat", "apply"], ["lasap", "savor"], ["linya", "line up"], ["nilay", "reflect"], ["pakialam", "interfere"],
  ["pakyaw", "buy wholesale"], ["arap", "dream", "mang"], ["panday", "craft"], ["sumpa", "swear", "um"], ["parada", "parade"],
  ["parinig", "make a pointed remark"], ["parusa", "punish"], ["preno", "brake"], ["proseso", "process"], ["puwersa", "force"],
  ["pulong", "hold a meeting"], ["pirma", "sign"], ["puna", "criticize"], ["puri", "praise"], ["radyo", "broadcast"],
  ["regalo", "give a gift"], ["renta", "rent"], ["report", "report"], ["retrato", "take a photo"], ["ronda", "make rounds"],
  ["salamat", "say thank you"], ["sangla", "pawn"], ["serbisyo", "serve"], ["sign", "sign"], ["singil", "collect payment", "mang"],
  ["sponsor", "sponsor"], ["subaybay", "follow closely"], ["suntok", "punch", "um"], ["suporta", "support"], ["surpresa", "surprise"],
  ["tagumpay", "succeed"], ["tapik", "pat", "um"], ["tatag", "strengthen"], ["tibay", "become strong", "um"], ["tumpak", "be exact", "um"],
  ["tumba", "fall over", "um"], ["tuligsa", "criticize"], ["tungo", "head toward", "um"], ["tukso", "tempt"], ["tutok", "focus"],
  ["tuon", "focus attention"], ["ubra", "work"], ["ugoy", "sway"], ["ugat", "take root", "um"], ["ugali", "make a habit"],
  ["unat", "stretch"], ["unlad", "develop", "um"], ["utos", "give an order"], ["wagi", "win"], ["wakas", "end"],
  ["wasto", "correct"], ["yaman", "become rich", "um"], ["yurak", "trample"], ["agaw", "grab", "um"]
]);

// A second, separately reviewable set of everyday roots. As with the first
// extension, each entry approves only its primary actor-focus family; this
// avoids presenting speculative productive focuses as learner recommendations.
const ADDITIONAL_EVERYDAY_VERB_CANDIDATES = Object.freeze([
  ["abala", "keep busy"], ["abante", "move forward"], ["abangan", "wait for"], ["abot", "reach"], ["absent", "be absent"],
  ["abutin", "catch up with"], ["adya", "visit"], ["agapay", "support"], ["agaw-buhay", "struggle for life"], ["agihan", "pass by"],
  ["aglay", "carry"], ["agwat", "separate"], ["akyat-baba", "go up and down"], ["alaga", "care for"], ["alalay", "assist"],
  ["alimpuyo", "whirl"], ["alindog", "charm"], ["alisto", "stay alert"], ["alitan", "quarrel"], ["alpas", "break free"],
  ["alsa", "rise up"], ["alumin", "search for"], ["alunignig", "resound"], ["ambon", "drizzle"], ["ambush", "ambush"],
  ["aminin", "admit"], ["ampat", "stop"], ["angkin", "claim"], ["angkop", "adapt"], ["angus", "make a face"],
  ["ani", "harvest"], ["antabay", "stand by"], ["antig", "move"], ["antok", "be sleepy", "ma"], ["apaw", "overflow", "um"],
  ["apoy", "set on fire"], ["aprende", "learn"], ["aral", "study"], ["araro", "plow"], ["aruga", "nurture"],
  ["asa", "hope"], ["asinta", "aim"], ["asik", "tease"], ["asikaso", "take care of"], ["asinta", "aim"],
  ["asinta", "aim"], ["aswang", "act like a monster"], ["atras-abante", "go back and forth"], ["atubili", "hesitate"], ["awat", "stop"],

  ["awayin", "argue with"], ["ayuda", "give aid"], ["ayuno", "fast"], ["baba", "go down"], ["babad", "soak"],
  ["baga", "warn"], ["bagabag", "worry"], ["bagay", "suit"], ["bagwis", "flap wings"], ["bahagi", "share"],
  ["bahay", "house"], ["bahin", "sneeze"], ["bakas", "trace"], ["bakod", "fence in"], ["baklas", "dismantle"],
  ["bakuna", "vaccinate"], ["balanse", "balance"], ["balangkas", "outline"], ["balang", "threaten"], ["balisa", "be anxious"],
  ["baluktot", "bend"], ["banting", "slam"], ["bantog", "be famous"], ["banyaga", "go abroad"], ["basa", "read"],
  ["basbas", "bless"], ["basura", "throw away"], ["bata", "treat as a child"], ["batid", "know"], ["batikos", "criticize"],
  ["batya", "wash in a basin"], ["bayad", "pay"], ["baybay", "spell"], ["baybayin", "travel by boat"], ["bayoneta", "use a bayonet"],
  ["benta", "sell"], ["bentilador", "fan"], ["beripika", "verify"], ["bida", "star"], ["bihag", "capture"],
  ["bigo", "fail"], ["bigkas", "pronounce"], ["bigti", "hang oneself"], ["bihira", "be rare"], ["bilib", "be impressed"],
  ["bilang", "count"], ["bilhin", "buy"], ["binalot", "wrap"], ["bingwit", "fish with a hook"], ["bintang", "accuse"],

  ["bintana", "open a window"], ["birohin", "joke with"], ["bisyo", "develop a vice"], ["biyaya", "bless"], ["biyak", "split"],
  ["biyahe", "travel"], ["blangko", "leave blank"], ["blok", "block"], ["bomba", "pump"], ["boto", "vote"],
  ["braso", "arm wrestle"], ["bugbog", "beat up"], ["bugso", "surge"], ["bukas", "open"], ["bukid", "farm"],
  ["buklat", "turn pages"], ["buklod", "bind"], ["buktot", "hunch"], ["bulabog", "disturb"], ["bulag", "be blinded", "ma"],
  ["bulalas", "exclaim"], ["bulid", "bury"], ["bulok", "rot", "ma"], ["bulsar", "burst"], ["bumangon", "rise"],
  ["bunga", "bear fruit"], ["bunggo", "bump into"], ["bungkal", "dig up"], ["bungkos", "bundle"], ["bungo", "hit the head"],
  ["bunot", "pull out"], ["bunsod", "cause"], ["buntis", "become pregnant", "ma"], ["buntot", "follow"], ["bura", "erase"],
  ["burda", "embroider"], ["burdol", "make fun of"], ["busisi", "inspect closely"], ["busog", "be full", "ma"], ["buwag", "dissolve"],
  ["buwis", "pay tax"], ["daanan", "pass through"], ["dagsa", "stream in"], ["dahak", "cough up phlegm"], ["dahilan", "give a reason"],
  ["daig", "outdo"], ["dalisay", "purify"], ["dalita", "suffer"], ["dalo", "attend"], ["damba", "leap"],
  ["damdamin", "feel"], ["damit", "dress"], ["dampa", "rest"], ["dangal", "honor"], ["dantay", "lean on"],

  ["dapit", "go toward"], ["daramdam", "feel"], ["dating", "arrive"], ["dayalogo", "hold a dialogue"], ["dayo", "visit"],
  ["digma", "fight"], ["dikit", "attach"], ["dilim", "get dark", "um"], ["dilig", "water plants"], ["dinig", "hear"],
  ["dipa", "spread arms"], ["direkta", "go straight"], ["diskarga", "unload"], ["distract", "distract"], ["dito", "come here"],
  ["dokumenta", "document"], ["dumi", "become dirty", "ma"], ["dungis", "soil"], ["dunggol", "lean close"], ["dusa", "punish"],
  ["duster", "dust"], ["dulo", "go to the end"], ["durugtong", "join"], ["dusa", "suffer"], ["dyaket", "wear a jacket"],
  ["ehemplo", "give an example"], ["eksamen", "take an examination"], ["eksport", "export"], ["eksplika", "explain"], ["empleyo", "employ"],
  ["ensayo", "rehearse"], ["entrada", "enter"], ["eroplano", "fly by plane"], ["eskape", "escape"], ["eskedyul", "schedule"],
  ["eskrima", "fence"], ["espesyal", "specialize"], ["estudyante", "study"], ["ewan", "be uncertain"], ["galang", "respect"],
  ["galit", "get angry", "ma"], ["gambala", "disturb"], ["gamit", "use"], ["ganap", "perform"], ["gapi", "defeat"],
  ["garantiya", "guarantee"], ["gawa", "make"], ["gawad", "award"], ["gawi", "make a habit"], ["gigil", "be eager"],
  ["giling", "grind"], ["gimbal", "swing"], ["gising", "wake"], ["gitgit", "tear apart"], ["giyera", "wage war"],

  ["gugol", "spend"], ["gulat", "be startled", "ma"], ["gulo", "make trouble"], ["gupit", "cut"], ["gusto", "want"],
  ["habang", "wait"], ["habol", "pursue"], ["hadas", "suffer hardship"], ["hagis", "throw"], ["hagkan", "kiss"],
  ["hagupit", "whip"], ["halakhak", "laugh loudly"], ["halata", "be obvious"], ["halaw", "extract"], ["haligi", "support"],
  ["halina", "come along"], ["halughog", "search thoroughly"], ["halukay", "dig"], ["halumigmig", "be humid"], ["hamak", "despise"],
  ["hamon", "challenge"], ["hamuni", "sing"], ["hanap", "look for"], ["handa", "prepare"], ["hango", "derive"],
  ["hapdi", "sting"], ["hapis", "be sad"], ["harap", "face"], ["harbor", "harbor"], ["haring", "reign"],
  ["harot", "flirt"], ["hataw", "strike"], ["hatid", "deliver"], ["hawi", "part"], ["hawak", "hold"],
  ["haya", "let"], ["hayag", "reveal"], ["higanti", "take revenge"], ["higop", "sip"], ["higpit", "tighten"],
  ["hila", "pull"], ["hilera", "line up"], ["hilom", "heal"], ["himagsik", "rebel"], ["himas", "caress"],
  ["himlay", "rest"], ["himpil", "stop"], ["hinala", "suspect"], ["hinga", "breathe"], ["hintay", "wait"],
  ["hiram", "borrow"], ["hirang", "choose"], ["hirit", "request"], ["hiya", "feel shy"], ["hiyas", "adorn"],

  ["hiyaw", "shout"], ["hiyang", "agree with"], ["hila-hila", "drag"], ["hugas", "wash"], ["hugis", "shape"],
  ["hugot", "pull out"], ["huli", "catch"], ["hupa", "subside"], ["hurno", "bake"], ["iba", "change"],
  ["ibig", "love"], ["ihi", "urinate"], ["ihaw", "grill"], ["ikot", "turn"], ["ilag", "avoid"],
  ["ilaw", "light"], ["ilog", "flow"], ["imbento", "invent"], ["imbot", "desire"], ["importa", "import"],
  ["ina", "mother"], ["inda", "endure"], ["ingat", "take care"], ["inis", "be annoyed"], ["inom", "drink"],
  ["inspeksyon", "inspect"], ["ipon", "save"], ["isa", "make one"], ["isda", "fish"], ["isip", "think"],
  ["iwas", "avoid"], ["iyak", "cry"], ["kaagapay", "support"], ["kaibigan", "befriend"], ["kaisa", "unite"],
  ["kalahati", "halve"], ["kalat", "scatter"], ["kalbo", "shave"], ["kaldag", "shake"], ["kalimot", "forget"],
  ["kaliskis", "scale"], ["kalmado", "calm"], ["kalso", "wedge"], ["kambyo", "shift gears"], ["kampana", "ring a bell"],
  ["kanin", "eat rice"], ["kanta", "sing"], ["kapa", "feel around"], ["kapal", "thicken"], ["kapantay", "equalize"],
  ["kapit", "hold on"], ["kapos", "fall short"], ["karga", "carry"], ["karera", "race"], ["karamay", "sympathize"],
  ["kaskas", "scrape"], ["kasya", "fit"], ["kasundo", "agree"], ["kaswal", "dress casually"], ["katalo", "defeat"],

  ["katay", "slaughter"], ["katok", "knock"], ["kawit", "hook"], ["kaya", "be able"], ["kembot", "wiggle"],
  ["kibit", "shrug"], ["kilos", "move"], ["kimbot", "grab"], ["kinalabasan", "turn out"], ["kinang", "shine"],
  ["kinig", "listen"], ["kintal", "imprint"], ["kintab", "polish"], ["kiskis", "rub"], ["kita", "see"],
  ["kitil", "take a life"], ["kiwal", "twist"], ["kodigo", "code"], ["kola", "glue"], ["komento", "comment"],
  ["kompara", "compare"], ["kompleto", "complete"], ["kompromiso", "compromise"], ["komunikasyon", "communicate"], ["konseho", "advise"],
  ["konserba", "preserve"], ["konsulta", "consult"], ["konsumo", "consume"], ["kopya", "copy"], ["koreo", "mail"],
  ["korona", "crown"], ["korte", "cut"], ["koto", "bend"], ["kuhang-singaw", "mildew"], ["kuha", "get"],
  ["kulang", "lack"], ["kulay", "color"], ["kulob", "be stuffy"], ["kumpol", "gather"], ["kumpuni", "repair"],
  ["kumpisal", "confess"], ["kumusta", "ask how someone is"], ["kundi", "exclude"], ["kuro", "think"], ["kurso", "take a course"],
  ["kurtina", "draw curtains"], ["kusina", "cook"], ["kuso", "rub with a spoon"], ["kutsara", "spoon"], ["kuwento", "tell a story"],
  ["labag", "violate"], ["laban", "fight"], ["labas", "go out"], ["labi", "exceed"], ["labi-labi", "multiply"],

  ["laga", "boil"], ["lagay", "put"], ["lagim", "be frightening"], ["laglag", "drop"], ["lago", "grow"],
  ["lagos", "penetrate"], ["lagot", "break"], ["lagpas", "pass"], ["lagyan", "put in"], ["lahad", "present"],
  ["lahok", "participate"], ["lakas", "strengthen"], ["lakbay", "travel"], ["lakip", "include"], ["laklak", "drink greedily"],
  ["lakom", "gather"], ["lakot", "crumple"], ["laktaw", "skip"], ["lakwatsa", "go out"], ["lambat", "catch with a net"],
  ["lambing", "be affectionate"], ["lamig", "cool"], ["lamon", "devour"], ["lampa", "limp"], ["lansag", "dismantle"],
  ["lansangan", "take to the street"], ["lapag", "place down"], ["lapit", "approach"], ["lapat", "apply"], ["lapatin", "apply"],
  ["larawan", "photograph"], ["laro", "play"], ["lasa", "taste"], ["lason", "poison"], ["lata", "can"],
  ["latigo", "whip"], ["lawak", "expand"], ["layo", "move away"], ["ligaya", "enjoy"], ["ligaw", "court"],
  ["liham", "write a letter"], ["lihis", "deviate"], ["liit", "shrink"], ["likas", "be natural"], ["likha", "create"],
  ["liko", "turn"], ["limit", "limit"], ["limot", "forget"], ["linang", "cultivate"], ["linis", "clean"],
  ["linlang", "deceive"], ["linya", "line up"], ["lipad", "fly"], ["lipat", "move"], ["lipol", "wipe out"],
  ["lisan", "leave"], ["litson", "roast"], ["liwanag", "brighten"], ["lobo", "inflate"], ["lugar", "place"],

  ["lugit", "draw"], ["luhod", "kneel"], ["luma", "grow old"], ["lunas", "heal"], ["lunod", "drown"],
  ["lupa", "land"], ["lupig", "conquer"], ["lupit", "be cruel"], ["lupong", "coil"], ["lutas", "solve"],
  ["luwag", "loosen"], ["luwal", "give birth"], ["maaga", "be early"], ["maaari", "be possible"], ["maayos", "improve"],
  ["mabuhay", "live"], ["madali", "hurry"], ["madapa", "fall down"], ["madulas", "slip"], ["magbalik", "return"],
  ["magdamag", "stay up all night"], ["magdusa", "suffer"], ["maglayag", "sail"], ["magmana", "inherit"], ["magpatawad", "forgive"],
  ["magpakilala", "introduce oneself"], ["magpasya", "decide"], ["magtipid", "save"], ["mahal", "love"], ["mahirap", "struggle"],
  ["maiba", "differ"], ["mainis", "get annoyed"], ["makipagkita", "meet"], ["mali", "make a mistake"], ["mamagitan", "mediate"],
  ["mangailangan", "need"], ["mangamba", "worry"], ["mangarap", "dream"], ["mangibabaw", "prevail"], ["manligaw", "court"],
  ["manood", "watch"], ["manumbalik", "return"], ["manumbat", "reproach"], ["mapagod", "get tired"], ["mapansin", "notice"],
  ["mapuno", "be filled"], ["maramdaman", "feel"], ["marating", "reach"], ["marunong", "know how"], ["masaya", "be happy"],
  ["masdan", "observe"], ["masinsin", "be thorough"], ["matauhan", "come to one's senses"], ["matulog", "sleep"], ["matuwa", "be pleased"],
  ["maupo", "sit down"], ["mauwi", "go home"], ["meryenda", "have a snack"], ["minsa", "wait a while"], ["mithi", "aspire"],

  ["mukha", "face"], ["mura", "curse"], ["musmos", "act young"], ["nail", "file"], ["nais", "wish"],
  ["nakinabang", "benefit"], ["nana", "fester"], ["nasa", "be located"], ["ngiti", "smile"], ["nguso", "pout"],
  ["nguso-nguso", "mutter"], ["nguso", "pout"], ["nguyngoy", "whimper"], ["nina", "nurture"], ["nobela", "write a novel"],
  ["nood", "watch"], ["nuno", "honor ancestors"], ["obra", "work"], ["obserba", "observe"], ["okupa", "occupy"],
  ["online", "go online"], ["opera", "operate"], ["orden", "order"], ["orihinal", "originate"], ["pababa", "go down"],
  ["pabango", "apply perfume"], ["pabigat", "become a burden"], ["pabukas", "open later"], ["pabulong", "whisper"], ["padyak", "pedal"],
  ["pagandahin", "improve"], ["pagaan", "lighten"], ["pagaling", "recover"], ["pagaspas", "flutter"], ["pagbawal", "forbid"],
  ["pagitan", "separate"], ["paglaban", "fight"], ["pagmasdan", "watch"], ["pagpigil", "hold back"], ["pag-uwi", "go home"],
  ["pahaba", "lengthen"], ["pahamak", "endanger"], ["pahinga", "rest"], ["pahiwatig", "hint"], ["pahid", "wipe"],
  ["pahilaga", "go north"], ["pahirap", "make difficult"], ["pahayag", "announce"], ["pala", "dig"], ["palagay", "suppose"],
  ["palakas", "strengthen"], ["palamig", "cool"], ["palapag", "land"], ["palay", "harvest rice"], ["palibot", "go around"],
  ["paligo", "bathe"], ["palis", "remove"], ["palit", "change"], ["palo", "hit"], ["palubog", "sink"],
  ["palusot", "make an excuse"], ["pamagat", "title"], ["pamana", "inherit"], ["pamagitan", "mediate"], ["pamili", "shop"],

  ["pamilya", "start a family"], ["pampalasa", "season"], ["pana", "shoot an arrow"], ["panaginip", "dream"], ["panalo", "win"],
  ["panata", "make a vow"], ["panday", "forge"], ["panganib", "endanger"], ["pangarap", "dream"], ["pangasiwa", "manage"],
  ["panginig", "tremble"], ["pangit", "become ugly"], ["panibago", "renew"], ["panindigan", "stand by"], ["panimula", "begin"],
  ["panlaban", "fight back"], ["pansin", "notice"], ["pantal", "be rash"], ["pantalon", "wear trousers"], ["pantasya", "fantasize"],
  ["pantas", "be wise"], ["panyo", "wipe with a handkerchief"], ["papel", "write on paper"], ["paraan", "make a way"], ["parada", "parade"],
  ["paramdam", "make oneself known"], ["parangal", "honor"], ["parinig", "make a pointed remark"], ["parusa", "punish"], ["pasa", "pass"],
  ["pasabog", "explode"], ["pasak", "plug"], ["pasalamat", "give thanks"], ["pasanin", "carry a burden"], ["paseo", "stroll"],
  ["pasigaw", "shout"], ["pasok", "enter"], ["paspas", "hurry"], ["pasya", "decide"], ["patahimik", "quiet"],
  ["patalon", "jump"], ["patama", "make a pointed remark"], ["patay", "die"], ["patibay", "strengthen"], ["patigil", "stop"],
  ["patiwakal", "commit suicide"], ["patnubay", "guide"], ["patong", "stack"], ["patuloy", "continue"], ["pautang", "lend"],
  ["pawi", "erase"], ["payag", "agree"], ["payo", "advise"], ["peke", "fake"], ["petsa", "date"],
  ["pigil", "restrain"], ["pili", "choose"], ["pindot", "press"], ["pinta", "paint"], ["pirma", "sign"],
  ["pitas", "pick"], ["plano", "plan"], ["plantsa", "iron"], ["porma", "style"], ["prangka", "be frank"],

  ["prito", "fry"], ["proseso", "process"], ["proteksyon", "protect"], ["pugay", "salute"], ["pugon", "bake"],
  ["pula", "turn red"], ["pulot", "pick up"], ["pulong", "meet"], ["punit", "tear"], ["puno", "fill"],
  ["puri", "praise"], ["pusta", "bet"], ["putol", "cut"], ["putong", "crown"], ["puwesto", "position"],
  ["puyat", "stay awake"], ["rabaho", "work"], ["radar", "track"], ["rampa", "ramp"], ["ranggo", "rank"],
  ["rebyu", "review"], ["regla", "set rules"], ["rehabilita", "rehabilitate"], ["rekluta", "recruit"], ["relasyon", "relate"],
  ["remedyo", "remedy"], ["remit", "send money"], ["responde", "respond"], ["respeto", "respect"], ["restawran", "eat at a restaurant"],
  ["resulta", "result"], ["retrato", "photograph"], ["reunion", "hold a reunion"], ["reyd", "raid"], ["riles", "travel by rail"],
  ["ripa", "rip"], ["ritwal", "perform a ritual"], ["rolyo", "roll"], ["romansa", "romance"], ["ronda", "make rounds"],
  ["rurok", "reach the peak"], ["sabi", "say"], ["sabik", "be eager"], ["sabon", "soap"], ["sagabal", "obstruct"],
  ["sagip", "rescue"], ["saglit", "pause"], ["sagupa", "meet"], ["sahod", "receive pay"], ["sakit", "hurt"],
  ["sakim", "be greedy"], ["saklaw", "cover"], ["sakop", "occupy"], ["sakuna", "cause disaster"], ["salansan", "stack"],
  ["salat", "touch"], ["salba", "save"], ["salin", "translate"], ["salita", "speak"], ["salubong", "meet"],
  ["sama", "join"], ["sampal", "slap"], ["sampay", "hang"], ["sana", "hope"], ["sandal", "lean"],

  ["sangkap", "include"], ["sangla", "pawn"], ["sang-ayon", "agree"], ["sapit", "arrive"], ["sara", "close"],
  ["sarap", "enjoy"], ["sariwa", "freshen"], ["sasa", "rely on"], ["saya", "enjoy"], ["sayang", "waste"],
  ["saysay", "explain"], ["seguro", "ensure"], ["sela", "interrupt"], ["selos", "be jealous"], ["semana", "spend a week"],
  ["sermon", "give a sermon"], ["serye", "serialize"], ["siga", "act tough"], ["sigaw", "shout"], ["sikip", "tighten"],
  ["siklot", "twist"], ["sikmura", "feel nauseated"], ["sikreto", "keep secret"], ["sila", "shine"], ["silid", "enter a room"],
  ["silip", "peek"], ["simbahan", "go to church"], ["simula", "start"], ["sindi", "light"], ["sining", "create art"],
  ["sipa", "kick"], ["sipag", "work hard"], ["sipilyo", "brush"], ["sipon", "catch a cold"], ["sira", "break"],
  ["sirena", "sound a siren"], ["sisi", "blame"], ["siyasat", "investigate"], ["sobra", "overdo"], ["sugatan", "wound"],
  ["sugat", "injure"], ["sugod", "rush"], ["sukal", "clear brush"], ["sukat", "measure"], ["sukli", "return change"],
  ["suklay", "comb"], ["suko", "surrender"], ["sulat", "write"], ["sulong", "advance"], ["sumbat", "reproach"],
  ["sumbong", "report"], ["sumpa", "curse"], ["sumpong", "have a fit"], ["sumunod", "follow"], ["sundo", "pick up"],
  ["suntok", "punch"], ["supak", "oppose"], ["suplay", "supply"], ["suporta", "support"], ["suri", "examine"],
  ["surpresa", "surprise"], ["susog", "amend"], ["susukat", "fit"], ["sustento", "support financially"], ["suyod", "comb through"],
  ["suyuan", "court"], ["tabi", "move aside"], ["tabon", "cover"], ["taboy", "drive away"], ["tabas", "trim"],
  ["tahak", "take a path"], ["tahan", "stop crying"], ["tahi", "sew"], ["tahimik", "be quiet"], ["takas", "escape"],

  ["takbo", "run"], ["takip", "cover"], ["takot", "fear"], ["talaga", "make certain"], ["talak", "rant"],
  ["talas", "sharpen"], ["talento", "develop talent"], ["talikod", "turn away"], ["talim", "sharpen"], ["talon", "jump"],
  ["talo", "lose"], ["tama", "hit"], ["tambay", "hang out"], ["tanim", "plant"], ["tantiya", "estimate"],
  ["tapon", "throw away"], ["tapik", "pat"], ["tapos", "finish"], ["tara", "go"], ["taranta", "panic"],
  ["tasa", "raise"], ["tawad", "bargain"], ["tawag", "call"], ["tawa", "laugh"], ["tawid", "cross"],
  ["teks", "text"], ["tibag", "demolish"], ["tibay", "strengthen"], ["tigil", "stop"], ["tigib", "fill"],
  ["tikim", "taste"], ["tiklop", "fold"], ["timbang", "weigh"], ["timpla", "mix"], ["tingin", "look"],
  ["tingkad", "brighten"], ["tipid", "save"], ["tipon", "gather"], ["tira", "stay"], ["tiwala", "trust"],
  ["tiyaga", "persevere"], ["tiyak", "make certain"], ["tulak", "push"], ["tulog", "sleep"], ["tulong", "help"],
  ["tuloy", "continue"], ["tumba", "fall"], ["tungo", "head toward"], ["tupi", "fold"], ["turo", "teach"],
  ["turok", "inject"], ["tusok", "pierce"], ["tuwa", "rejoice"], ["tuwid", "straighten"], ["ubos", "use up"],
  ["ugat", "take root"], ["ugoy", "sway"], ["uhaw", "be thirsty"], ["ukol", "allocate"], ["ukit", "carve"],
  ["ulit", "repeat"], ["ulol", "go crazy"], ["unawa", "understand"], ["unlad", "develop"], ["unli", "make unlimited"],
  ["unsub", "unsubscribe"], ["upo", "sit"], ["usap", "talk"], ["usig", "prosecute"], ["usisa", "investigate"],
  ["uso", "be fashionable"], ["utos", "order"], ["uwi", "go home"], ["uwing", "return"], ["uwian", "go home"],

  ["uyam", "mock"], ["uyon", "agree"], ["wagi", "win"], ["wakas", "end"], ["walis", "sweep"],
  ["wasto", "correct"], ["wika", "say"], ["yabang", "boast"], ["yakap", "hug"], ["yaman", "become rich"],
  ["yuko", "bow"], ["yugyog", "shake"], ["yurak", "trample"], ["yugto", "reach a stage"], ["yuko-yuko", "bow repeatedly"]
]);

const EXISTING_LEARNER_ROOTS = new Set([
  ...Object.keys(VERB_DATABASE),
  ...Object.keys(CURATED_LEXICON_ENTRIES),
  ...EVERYDAY_VERB_EXPANSION.map(([root]) => root)
]);
// These are already conjugated surface forms rather than roots. Keeping them
// out prevents corpus pattern metadata for their underlying roots from being
// applied to a second, malformed paradigm.
const EXCLUDED_ADDITIONAL_ROOTS = new Set(["magbalik", "matulog"]);
const ADDITIONAL_EVERYDAY_VERB_EXPANSION = Object.freeze(
  ADDITIONAL_EVERYDAY_VERB_CANDIDATES.filter(([root]) => {
    if (EXISTING_LEARNER_ROOTS.has(root) || EXCLUDED_ADDITIONAL_ROOTS.has(root)) return false;
    EXISTING_LEARNER_ROOTS.add(root);
    return true;
  }).slice(0, 500)
);

if (ADDITIONAL_EVERYDAY_VERB_EXPANSION.length !== 500) {
  throw new Error("The 1,000-root catalog requires 500 additional unique roots.");
}

const ALL_EVERYDAY_VERB_EXPANSIONS = Object.freeze([
  ...EVERYDAY_VERB_EXPANSION,
  ...ADDITIONAL_EVERYDAY_VERB_EXPANSION
]);

const EXPANDED_EVERYDAY_ENTRIES = Object.freeze(Object.fromEntries(
  ALL_EVERYDAY_VERB_EXPANSIONS.map(([root, english, pattern = "mag"]) => [root, Object.freeze({
    root,
    meanings: [`to ${english}`],
    allowedPatterns: [pattern],
    overrides: {},
    examples: [],
    status: "curated",
    sources: [
      { title: "Pinhok: Basic Tagalog Verbs", url: "https://www.pinhok.com/kb/tagalog/301/tagalog-verbs/" },
      { title: "Learning Tagalog: Course Book 1 sample", url: "https://learningtagalog.com/downloads/learning_tagalog_course_book_1_color_sample.pdf" }
    ],
    notes: "Extended 1,000-root learner catalog; the approved pattern is limited to the primary everyday actor-focus family."
  })])
));
