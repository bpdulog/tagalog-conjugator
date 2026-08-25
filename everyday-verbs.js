/* ============================================================
   Extended everyday-verb catalog

   This 269-root extension brings the learner catalog to 500 roots. Each
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

const EXPANDED_EVERYDAY_ENTRIES = Object.freeze(Object.fromEntries(
  EVERYDAY_VERB_EXPANSION.map(([root, english, pattern = "mag"]) => [root, Object.freeze({
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
    notes: "Extended 500-root learner catalog; the approved pattern is limited to the primary everyday actor-focus family."
  })])
));
