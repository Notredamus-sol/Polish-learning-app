/* For a Serbian-speaking learner: a short comparison with Serbian for every
   unit, false friends, and drills on the mistakes Serbian speakers typically
   make in Polish (formal address, kod vs u/do, nie + genitive, "da" clauses…).
   Serbian is written in Latin script here. Keys are unit ids. */
const SR_NOTES = {
  0: `<p><b>być</b> works like <b>biti</b>, but Polish has only the full forms: <b>jestem, jesteś, jest, jesteśmy, jesteście, są</b> (no short <i>sam, si, je</i>). The verb can open a sentence: <b>Jestem Marko.</b></p>
<p>Formal "you" is the biggest trap. Serbian uses <i>Vi</i> + plural verb; Polish uses <b>pan / pani</b> + the <b>he / she</b> form: <b>Jak się pan ma?</b> (not <i>Jak się pan macie?</i>). <b>Wy</b> is only for several people.</p>`,
  1: `<p>Genders work as in Serbian: consonant = masculine, <b>-a</b> = feminine, <b>-o / -e</b> = neuter, and <b>tata, kolega</b> are masculine as in Serbian. <b>mój / moja / moje</b> = <i>moj / moja / moje</i>.</p>
<p>Watch the neuter adjective: Polish <b>moje nowe auto</b> ends in <b>-e</b>, not <i>-o</i> as in <i>moje novo auto</i>.</p>`,
  21: `<p>Serbian <i>iz</i> + genitive is Polish <b>z</b> + genitive: <i>Ja sam iz Srbije</i> → <b>Jestem z Serbii</b>.</p>
<p>Languages: <i>govorim srpski</i> → <b>mówię po serbsku</b> (po + -sku), but <b>znam serbski</b>, <b>uczę się polskiego</b>. A Serb is <b>Serb / Serbka</b>, and citizenship on forms is <b>obywatelstwo serbskie</b> (<i>državljanstvo</i>).</p>`,
  2: `<p><b>mieć</b> = <i>imati</i>: <b>mam, masz, ma, mamy, macie, mają</b>.</p>
<p>Age: <i>Imam 30 godina</i> → <b>Mam 30 lat</b>. Never <i>godzin</i>: <b>godzina</b> means <b>hour</b>. The 2–4 / 5+ split is the same as <i>godine / godina</i>: <b>dwa lata, pięć lat</b>.</p>`,
  3: `<p>The accusative is used as in Serbian, but the feminine ending is <b>-ę</b>, not <i>-u</i>: <i>kafu</i> → <b>kawę</b>, <i>vodu</i> → <b>wodę</b>.</p>
<p>Masculine people and animals take the genitive form, just like Serbian: <i>vidim brata</i> → <b>widzę brata</b>. To order, say <b>Poproszę…</b> (<i>molim vas…</i>), not <i>Daj mi…</i>.</p>`,
  4: `<p>Endings look different but map neatly: <i>-em / -eš</i> → <b>-ę / -esz</b> (<i>pišem</i> → <b>piszę</b>, <i>pišeš</i> → <b>piszesz</b>), and 3rd plural <i>-u</i> → <b>-ą</b> (<i>pišu</i> → <b>piszą</b>). <b>czytam / czytasz</b> works like <i>čitam / čitaš</i>.</p>`,
  5: `<p>Serbian <i>u</i> + locative is Polish <b>w</b> + locative: <i>u Beogradu</i> → <b>w Belgradzie</b>, <i>u parku</i> → <b>w parku</b>. <b>na</b> is the same: <i>na pošti</i> → <b>na poczcie</b>.</p>
<p>Polish <b>u</b> means "at someone's place", like Serbian <i>kod</i>: <b>u mamy, u lekarza</b>.</p>`,
  6: `<p><b>lubić</b> = <i>voleti</i> (for things you like). The big trap: after a negated verb Polish needs the <b>genitive</b>, where Serbian keeps the accusative: <i>Ne volim kafu</i> → <b>Nie lubię kawy</b>, <i>Nemam vremena</i> stays genitive: <b>Nie mam czasu</b>.</p>`,
  23: `<p>Good news: <b>Nie ma mleka</b> = <i>Nema mleka</i>, and <b>dużo / mało</b> + genitive = <i>mnogo / malo</i> + genitive.</p>
<p>Differences: masculine nouns often take <b>-u</b> (<b>cukru, sera</b>, but <b>chleba</b>), where Serbian always has <i>-a</i>. And Polish <b>u</b> + genitive = <i>kod</i>: <b>u Marka</b> = <i>kod Marka</i>.</p>`,
  7: `<p>Days are close relatives: <b>poniedziałek</b> (<i>ponedeljak</i>), <b>wtorek</b> (<i>utorak</i>), <b>środa</b> (<i>sreda</i>), <b>czwartek</b>, <b>piątek</b>, <b>sobota</b>, <b>niedziela</b> (<i>nedelja</i>). "On Monday" = <b>w poniedziałek</b> (<i>u ponedeljak</i>).</p>
<p>Clock time uses feminine ordinals: <i>u osam</i> → <b>o ósmej</b> (at the eighth [hour]).</p>`,
  24: `<p>Month names have to be learned from scratch: Polish uses old Slavic names (<b>styczeń, luty…</b>), not <i>januar, februar</i>. <b>listopad</b> is November (in Croatian <i>studeni</i>).</p>
<p>The date pattern is the same as Serbian: <i>trećeg maja</i> → <b>trzeciego maja</b>.</p>`,
  8: `<p>Agreement is the same idea as Serbian, but Polish has only one (long) form: <b>dobry, dobra, dobre</b> (no <i>dobar</i>). Neuter ends in <b>-e</b>: <b>nowe mieszkanie</b>, not <i>novo</i>.</p>`,
  22: `<p><b>Jak wygląda?</b> = <i>Kako izgleda?</i> Polish <b>jak</b> means "how" (Serbian <i>jak</i> = strong). <b>mieć na sobie</b> = <i>imati na sebi</i>.</p>`,
  9: `<p>Polish must choose: <b>iść</b> (on foot) or <b>jechać</b> (by vehicle); Serbian <i>ići</i> covers both. And "to a place" is <b>do</b> + genitive, where Serbian uses <i>u</i> + accusative: <i>idem u školu</i> → <b>idę do szkoły</b>, <i>idem kod lekara</i> → <b>idę do lekarza</b>.</p>`,
  26: `<p>A ticket is <b>bilet</b>; Polish <b>karta</b> is a (bank) card or a map. A train is <b>pociąg</b> (<i>voz</i>), a station <b>dworzec</b> (<i>stanica</i>), a platform <b>peron</b>.</p>`,
  10: `<p><b>Ile to kosztuje?</b> = <i>Koliko to košta?</i> Prices follow the same 1 / 2–4 / 5+ pattern as <i>dinar, dinara, dinara</i>: <b>złoty, złote, złotych</b>.</p>`,
  11: `<p>The past tense uses endings glued to the verb instead of <i>sam / si</i>: <i>bio sam</i> → <b>byłem</b>, <i>bila si</i> → <b>byłaś</b>. Never add <i>jestem</i>. Gender works as in Serbian: <b>byłem / byłam</b>, <b>byli / były</b>.</p>`,
  12: `<p>Serbian says <i>Ja sam lekar</i> (nominative); Polish needs the <b>instrumental</b> after być + noun: <b>Jestem lekarzem / nauczycielką</b>. "With" is instrumental in both: <i>sa bratom</i> → <b>z bratem</b>. Endings: <i>-om</i> → <b>-em / -ą</b>.</p>`,
  25: `<p>Location words take the instrumental as in Serbian: <b>nad, pod, przed, za, między</b> = <i>nad, pod, pred, za, između</i>. <b>Na stole</b> = <i>na stolu</i>. A room is <b>pokój</b> (<i>soba</i>).</p>`,
  13: `<p>Polish uses a plain <b>infinitive</b> after these verbs, never a <i>da</i> clause: <i>Hoću da idem</i> → <b>Chcę iść</b>, <i>Moram da radim</i> → <b>Muszę pracować</b>. <b>chcę</b> never makes a future (Serbian <i>hoću</i> / <i>-ću</i> does).</p>`,
  27: `<p><b>Boli mnie głowa</b> = <i>Boli me glava</i>, an exact match. The doctor: going is <b>do lekarza</b>, being there is <b>u lekarza</b> (Serbian <i>kod lekara</i> for both). Never <i>jestem do lekarza</i>.</p>`,
  14: `<p>With 2, 3, 4 Polish uses the ordinary <b>plural</b>: <b>dwa koty</b>, <b>trzy książki</b>. Serbian uses a special form there (<i>dve mačke, dva psa</i>). From 5: genitive plural in both: <b>pięć kotów</b> = <i>pet mačaka</i>.</p>`,
  15: `<p><b>się</b> = <i>se</i>: <b>Nazywam się</b> = <i>Zovem se</i>. It is less strict about position than <i>se</i>, but the usual place is after the verb: <b>Myję się</b>, <b>Jak się masz?</b></p>`,
  16: `<p>No <i>-ću</i> in Polish. Imperfective future: <b>będę + infinitive</b> (<b>będę pracować</b> = <i>radiću</i>). Perfective verbs make the future with present endings: <b>zrobię</b> = <i>uradiću</i>, <b>pojadę</b> = <i>otputovaću</i>.</p>`,
  28: `<p>Serbian <i>da</i> splits into three Polish words: <b>że</b> for "that" (<i>Mislim da…</i> → <b>Myślę, że…</b>), <b>żeby</b> for "in order to / so that" (<b>…, żeby pracować</b>), and nothing before an infinitive (<b>Chcę iść</b>). <b>bo</b> = <i>jer</i>, <b>więc</b> = <i>pa, dakle</i>, <b>ale</b> = <i>ali</i>.</p>`,
  17: `<p>Aspect is the same system as Serbian, and many pairs look alike: <b>pisać / napisać</b> = <i>pisati / napisati</i>, <b>robić / zrobić</b> = <i>raditi / uraditi</i>. One difference: a perfective present is a normal future on its own: <b>Zrobię to jutro</b> (<i>Uradiću to sutra</i>).</p>`,
  29: `<p>The conditional is glued together: <b>chciał-by-m</b> = <i>hteo bih</i>. Polite requests again use pan / pani + 3rd person: <b>Czy mógłby mi pan pomóc?</b> (<i>Da li biste mogli da mi pomognete?</i>).</p>`,
  18: `<p>The dative is used as in Serbian, and the short pronouns are nearly the same: <b>mi, ci, mu, jej, nam, wam, im</b> (<i>joj</i> → <b>jej</b>). <b>Daj mi to!</b> is identical. <b>Dziękuję ci / panu</b> = <i>hvala ti / vam</i>.</p>`,
  30: `<p>Like <i>bili / bile</i>, Polish splits the plural, but by <b>men</b>, not by masculine gender: <b>byli</b> only for groups with a man, <b>były</b> for everything else, including masculine things: <b>Stoły były nowe</b>.</p>
<p>Polish has a vocative too: <b>Marku! Aniu! Panie doktorze!</b> (<i>Marko! Anja! Doktore!</i>).</p>`,
  19: `<p>Imperative endings: <i>-te</i> → <b>-cie</b>: <i>čitajte</i> → <b>czytajcie</b>. To a stranger don't use a bare command: say <b>Proszę</b> + infinitive: <b>Proszę usiąść</b> (<i>Izvolite, sedite</i>).</p>`,
  31: `<p><b>Halo?</b> as in Serbian; <i>Ovde Marko</i> → <b>Tu Marko</b>. <b>Zapraszam</b> = <i>pozivam</i>. Purpose "da" is <b>żeby</b>: <b>Dzwonię, żeby zapytać…</b></p>`,
  32: `<p><b>Od kiedy? Do kiedy? Na jak długo?</b> = <i>Od kada? Do kada? Na koliko dugo?</i> PESEL is the Polish <i>JMBG</i>, and <b>meldunek</b> is <i>prijava boravka</i>. An office is <b>urząd</b>.</p>`,
  20: `<p><b>naj-</b> is the same as <i>naj-</i>: <b>najlepszy</b> = <i>najbolji</i>. The comparative ends in <b>-szy</b> where Serbian has <i>-ji</i>: <i>bolji</i> → <b>lepszy</b>, <i>veći</i> → <b>większy</b>. "Than" is <b>niż</b> (<i>nego / od</i>).</p>`,
  33: `<p>"Ago" comes <b>after</b> the time: <i>pre dve godine</i> → <b>dwa lata temu</b>. "For a week" is <b>przez tydzień</b> or just <b>tydzień</b> (<i>nedelju dana</i>). Double negation works as in Serbian: <b>Nigdy nie byłem</b> = <i>Nikad nisam bio</i>.</p>`
};

/* Drills on typical Serbian-speaker mistakes, added to each unit's question pool */
const SR_QUIZ = {
  0: [{ t: "choice", q: "To a man you don't know: 'How are you?'", o: ["Jak się pan ma?", "Jak się pan macie?", "Jak się wy macie?"], a: 0, sr: 1 },
      { t: "choice", q: "To a woman, politely: 'Are you from Kraków?'", o: ["Czy pani jest z Krakowa?", "Czy pani jesteście z Krakowa?", "Czy wy jesteście z Krakowa?"], a: 0, sr: 1 }],
  21: [{ t: "choice", q: "I'm from Serbia.", o: ["Jestem z Serbii.", "Jestem iz Serbii.", "Jestem od Serbii."], a: 0, sr: 1 },
       { t: "choice", q: "I speak Serbian.", o: ["Mówię po serbsku.", "Mówię serbski.", "Mówię srpski."], a: 0, sr: 1 }],
  2: [{ t: "fill", q: "Mam trzydzieści ___.", h: "years", a: ["lat"], en: "I'm thirty (years old).", sr: 1 }],
  3: [{ t: "choice", q: "Poproszę ___ i wodę.", o: ["kawę", "kawu", "kawa"], a: 0, sr: 1 }],
  6: [{ t: "choice", q: "I don't like coffee.", o: ["Nie lubię kawy.", "Nie lubię kawę.", "Nie lubię kawa."], a: 0, sr: 1 },
      { t: "choice", q: "I don't have a car.", o: ["Nie mam samochodu.", "Nie mam samochód.", "Nie mam samochodem."], a: 0, sr: 1 }],
  9: [{ t: "choice", q: "I'm going to school (on foot).", o: ["Idę do szkoły.", "Idę w szkołę.", "Idę u szkołę."], a: 0, sr: 1 },
      { t: "choice", q: "I'm going to Kraków by train.", o: ["Jadę do Krakowa pociągiem.", "Idę u Kraków pociągiem.", "Idę do Krakowa pociągiem."], a: 0, sr: 1 }],
  7: [{ t: "choice", q: "Which word means 'morning'?", o: ["rano", "jutro", "godzina"], a: 0, sr: 1 }],
  12: [{ t: "choice", q: "I'm a doctor.", o: ["Jestem lekarzem.", "Jestem lekarz.", "Ja jestem lekar."], a: 0, sr: 1 }],
  13: [{ t: "choice", q: "I want to go to the cinema.", o: ["Chcę iść do kina.", "Chcę, że idę do kina.", "Chcę da idę do kina."], a: 0, sr: 1 },
       { t: "choice", q: "I must work today.", o: ["Muszę dziś pracować.", "Muszę, żeby pracuję dziś.", "Muszę da pracuję dziś."], a: 0, sr: 1 }],
  14: [{ t: "choice", q: "two cats", o: ["dwa koty", "dwa kota", "dwa kotów"], a: 0, sr: 1 }],
  27: [{ t: "choice", q: "I'm at the doctor's now.", o: ["Jestem teraz u lekarza.", "Jestem teraz do lekarza.", "Jestem teraz kod lekarza."], a: 0, sr: 1 },
       { t: "choice", q: "Tomorrow I'm going to the doctor.", o: ["Jutro idę do lekarza.", "Jutro idę u lekarza.", "Jutro idę kod lekarza."], a: 0, sr: 1 }],
  28: [{ t: "choice", q: "I think that it's a good idea.", o: ["Myślę, że to dobry pomysł.", "Myślę, żeby to dobry pomysł.", "Myślę, da to dobry pomysł."], a: 0, sr: 1 },
       { t: "choice", q: "I'm learning Polish in order to work in Poland.", o: ["Uczę się polskiego, żeby pracować w Polsce.", "Uczę się polskiego, że pracować w Polsce.", "Uczę się polskiego, da pracuję w Polsce."], a: 0, sr: 1 }],
  16: [{ t: "choice", q: "I'll work tomorrow.", o: ["Jutro będę pracować.", "Jutro pracować będzie.", "Jutro chcę pracować."], a: 0, sr: 1 }],
  29: [{ t: "choice", q: "To a man: 'Could you help me?'", o: ["Czy mógłby mi pan pomóc?", "Czy moglibyście mi pan pomóc?", "Czy mógłbyś mi pan pomóc?"], a: 0, sr: 1 }],
  30: [{ t: "choice", q: "The tables were new.", o: ["Stoły były nowe.", "Stoły byli nowi.", "Stoły były nowi."], a: 0, sr: 1 }],
  19: [{ t: "choice", q: "To a stranger: 'Please sit down.'", o: ["Proszę usiąść.", "Siadaj!", "Sjednite."], a: 0, sr: 1 }],
  20: [{ t: "choice", q: "My flat is bigger than yours.", o: ["Moje mieszkanie jest większe niż twoje.", "Moje mieszkanie jest veće niż twoje.", "Moje mieszkanie jest więcej niż twoje."], a: 0, sr: 1 }],
  33: [{ t: "choice", q: "two years ago", o: ["dwa lata temu", "temu dwa lata", "przed dwa lata"], a: 0, sr: 1 }]
};

/* False friends: [Polish, what it means, Serbian look-alike, what that means] */
const FALSE_FRIENDS = [
  ["jutro", "tomorrow", "jutro", "morning (PL rano)"],
  ["godzina", "hour", "godina", "year (PL rok)"],
  ["słowo", "word", "slovo", "letter of the alphabet (PL litera)"],
  ["prawo", "law; right (w prawo = to the right)", "pravo", "straight on (PL prosto)"],
  ["droga", "road; expensive (f.)", "droga", "drug (PL narkotyk)"],
  ["baba", "rude: old woman", "baba", "grandmother (PL babcia)"],
  ["jak", "how", "jak", "strong (PL silny)"],
  ["kraj", "country", "kraj", "end (PL koniec)"],
  ["miasto", "town, city", "mesto", "place (PL miejsce)"],
  ["grad", "hail", "grad", "city (PL miasto)"],
  ["stolica", "capital city", "stolica", "chair (PL krzesło)"],
  ["sad", "orchard", "sad", "now (PL teraz)"],
  ["czas", "time", "čas", "lesson; hour (PL lekcja, godzina)"],
  ["zakon", "religious order", "zakon", "law (PL prawo, ustawa)"],
  ["zawód", "profession", "zavod", "institute (PL instytut, zakład)"],
  ["uważać", "to be careful; to think", "uvažavati", "to respect (PL szanować)"],
  ["ręka", "hand", "reka", "river (PL rzeka)"],
  ["list", "letter (post)", "list", "leaf; sheet (PL liść, kartka)"],
  ["pas", "belt; strip", "pas", "dog (PL pies)"],
  ["puszka", "tin, can", "puška", "rifle (PL karabin)"],
  ["jagoda", "blueberry, berry", "jagoda", "strawberry (PL truskawka)"],
  ["dynia", "pumpkin", "dinja", "melon (PL melon)"],
  ["czerstwy", "stale (bread)", "čvrst", "firm, solid (PL twardy)"],
  ["zapomnieć", "to forget", "zapamtiti", "to remember (PL zapamiętać)"],
  ["trudna", "difficult (f.)", "trudna", "pregnant (PL w ciąży)"],
  ["obraz", "picture, painting", "obraz", "cheek; honour (PL policzek, honor)"],
  ["pokój", "room; peace", "pokoj", "(eternal) rest (PL spokój)"],
  ["karta", "card; map", "karta", "ticket (PL bilet)"],
  ["wesele", "wedding reception", "veselje", "joy, party (PL radość, impreza)"]
];

/* Warnings shown on flashcards for words a Serbian speaker easily misreads */
const SR_CARD_NOTES = {
  "jutro": "⚠ SR jutro = morning. Polish 'morning' is rano.",
  "godzina": "⚠ Not 'year' (SR godina). Year = rok.",
  "rok": "SR godina. Polish godzina = hour!",
  "prosto": "SR pravo. Polish prawo = right / law.",
  "w prawo": "⚠ SR pravo = straight on. Here: to the right.",
  "droga": "⚠ Not 'drug' (SR droga). A road; also 'expensive' (f.).",
  "słowo": "⚠ SR slovo = letter. Here: a word.",
  "miasto": "⚠ SR mesto = place. Here: a town.",
  "kraj": "⚠ SR kraj = end. Here: a country.",
  "czas": "⚠ SR čas = lesson / hour. Here: time.",
  "pokój": "SR soba. (Also 'peace'.)",
  "bilet": "SR karta. Polish karta = a card or map.",
  "rano": "SR jutro. Polish jutro = tomorrow!",
  "ręka": "⚠ SR reka = river. Here: hand.",
  "babcia": "Use babcia for grandma: Polish baba is rude.",
  "list": "⚠ A letter (post). SR list = leaf.",
  "jak": "⚠ SR jak = strong. Here: how."
};
