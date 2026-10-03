/* New A1 units (ids 21–28), added to match the adult A1 standard in
   Dz.U. 2025 poz. 217, załącznik nr 1, część II C. */
const NEW_UNITS_A1 = [
{
  id: 21, pl: "Skąd jesteś?", en: "Where are you from?", tag: "origin", tagLabel: "Countries, nationalities & personal details",
  focus: "narodowość · where you're from",
  vocab: [
    ["Skąd jesteś?", "Where are you from?"], ["Jestem z Polski.", "I'm from Poland.", "z + genitive: z Anglii, z Niemiec"], ["kraj", "country"],
    ["Anglia", "England"], ["Niemcy", "Germany", "plural only: z Niemiec, w Niemczech"], ["Francja", "France"],
    ["Hiszpania", "Spain"], ["Włochy", "Italy", "plural only: z Włoch"], ["Stany Zjednoczone", "the United States", "ze Stanów Zjednoczonych"],
    ["Ukraina", "Ukraine"], ["Serbia", "Serbia"], ["Chorwacja", "Croatia"], ["Polak / Polka", "Pole (m / f)"],
    ["Anglik / Angielka", "Englishman / Englishwoman"], ["Niemiec / Niemka", "German (m / f)"], ["Serb / Serbka", "Serb (m / f)"],
    ["Ukrainiec / Ukrainka", "Ukrainian (m / f)"], ["Amerykanin / Amerykanka", "American (m / f)"], ["narodowość", "nationality"],
    ["obywatelstwo", "citizenship", "on forms: obywatelstwo polskie, serbskie…"], ["język", "language"], ["Jakie znasz języki?", "What languages do you know?"],
    ["imię", "first name", "neuter: to imię"], ["nazwisko", "surname"], ["adres", "address"], ["ulica", "street", "ul. on addresses"],
    ["numer telefonu", "phone number"], ["data urodzenia", "date of birth"], ["miejsce urodzenia", "place of birth"], ["płeć", "sex (on forms)"],
    ["podpis", "signature"], ["formularz", "form"], ["Proszę przeliterować.", "Please spell it."]
  ],
  grammar: {
    title: "Where from? z + genitive, nationalities and languages",
    html: `<p>To say where you're from, use <b>z</b> + the genitive: <b>Jestem z Polski</b>, <b>z Anglii</b>, <b>z Serbii</b>, <b>z Ukrainy</b>. Countries that are plural in Polish end in nothing: <b>z Niemiec</b>, <b>z Włoch</b>. Before some consonant clusters <b>z</b> becomes <b>ze</b>: <b>ze Stanów Zjednoczonych</b>.</p>
<p>Nationality nouns have a male and a female form and are written with a <b>capital letter</b>: <b>Polak / Polka</b>, <b>Serb / Serbka</b>. Learn <b>Jestem Polakiem / Polką</b> as a phrase for now; the ending is the instrumental case, which comes in a later unit.</p>
<p>Languages are written with a <b>small letter</b>: <b>polski, angielski, serbski</b>. You <b>speak</b> <b>po polsku</b>, but you <b>know</b> or <b>learn</b> a language: <b>Znam angielski</b>, <b>Uczę się polskiego</b>.</p>
<p>On forms, citizenship is an adjective agreeing with <i>obywatelstwo</i> (neuter): <b>obywatelstwo polskie / serbskie / niemieckie</b>.</p>`,
    table: { head: ["kraj", "z…", "on", "ona"], rows: [
      ["Polska", "z Polski", "Polak", "Polka"], ["Anglia", "z Anglii", "Anglik", "Angielka"], ["Niemcy", "z Niemiec", "Niemiec", "Niemka"],
      ["Serbia", "z Serbii", "Serb", "Serbka"], ["Ukraina", "z Ukrainy", "Ukrainiec", "Ukrainka"], ["Stany Zjednoczone", "ze Stanów Zjednoczonych", "Amerykanin", "Amerykanka"]
    ] }
  },
  quiz: [
    { t: "fill", q: "Jestem z ___.", h: "Polska", a: ["Polski"], en: "I'm from Poland." },
    { t: "fill", q: "On jest z ___.", h: "Anglia", a: ["Anglii"], en: "He's from England." },
    { t: "fill", q: "Ona jest z ___.", h: "Niemcy", a: ["Niemiec"], en: "She's from Germany." },
    { t: "fill", q: "Jesteśmy z ___.", h: "Ukraina", a: ["Ukrainy"], en: "We're from Ukraine." },
    { t: "fill", q: "Proszę podać ___ i nazwisko.", h: "first name", a: ["imię"], en: "Please give your first name and surname." },
    { t: "choice", q: "Anna jest z Polski. Ona jest ___.", o: ["Polką", "Polak", "Polską"], a: 0 },
    { t: "choice", q: "Which word is written with a capital letter?", o: ["Polak (a Pole)", "polski (the language)", "angielski (the language)"], a: 0 },
    { t: "choice", q: "Mówię ___ angielsku.", o: ["po", "w", "z"], a: 0 },
    { t: "order", a: "Skąd pan jest", en: "Where are you from, sir?" },
    { t: "order", a: "Mówię po polsku i po angielsku", en: "I speak Polish and English." }
  ],
  dialogue: [
    ["Recepcjonistka", "Dzień dobry. Pana nazwisko?", "Hello. Your surname, sir?"],
    ["Gość", "Dzień dobry. Nazywam się Novak. Mam rezerwację.", "Hello. My name is Novak. I have a reservation."],
    ["Recepcjonistka", "Proszę przeliterować.", "Please spell it."],
    ["Gość", "N, O, V, A, K.", "N, O, V, A, K."],
    ["Recepcjonistka", "Dziękuję. Skąd pan jest?", "Thank you. Where are you from?"],
    ["Gość", "Jestem z Serbii, ale mieszkam w Niemczech.", "I'm from Serbia, but I live in Germany."],
    ["Recepcjonistka", "Proszę wypełnić formularz: adres, data urodzenia i podpis.", "Please fill in the form: address, date of birth and signature."]
  ],
  partner: "Recepcjonistka",
  scenario: "You're checking in at a hotel in Kraków. The receptionist (recepcjonistka) asks for your personal details: name, nationality, address, date of birth and languages.",
  writing: {
    prompt: "Fill in this hotel registration form in Polish. You can invent the details.",
    form: ["Imię", "Nazwisko", "Obywatelstwo", "Data urodzenia", "Miejsce urodzenia", "Adres", "Numer telefonu", "Znajomość języków"],
    model: "Imię: Marko · Nazwisko: Novak · Obywatelstwo: serbskie · Data urodzenia: 12.05.1995 · Miejsce urodzenia: Belgrad · Adres: ul. Długa 5, Kraków · Numer telefonu: 600 123 456 · Znajomość języków: serbski, angielski, trochę polski"
  },
  read: { kind: "form", title: "KARTA MELDUNKOWA · Hotel „Wawel”", body: ["Imię i nazwisko: Anna Kowalska", "Obywatelstwo: polskie", "Data urodzenia: 03.04.1990", "Adres: ul. Krótka 7/2, 00-950 Warszawa", "Telefon: 501 234 567", "Przyjazd: 10.10 · Wyjazd: 12.10", "Podpis: A. Kowalska"],
    q: [{ q: "What is the guest's surname?", o: ["Kowalska", "Krótka", "Wawel"], a: 0 }, { q: "Where does she live?", o: ["in Warsaw", "in Kraków", "in the hotel"], a: 0 }, { q: "How many nights is she staying?", o: ["2", "10", "12"], a: 0 }] },
  cloze: "Dzień dobry! Mam na imię Ivan. Jestem {{z|w|na}} Ukrainy, ale teraz mieszkam {{w|z|do}} Polsce. Mówię po ukraińsku, po angielsku i trochę {{po|w|z}} polsku. Moja żona jest {{Polką|Polska|Polskę}}."
},
{
  id: 22, pl: "Jak wygląda? Jaki jest?", en: "What do they look like?", tag: "looks", tagLabel: "Appearance, character & clothes",
  focus: "wygląd · describing people",
  vocab: [
    ["wysoki", "tall"], ["niski", "short (person)"], ["szczupły", "slim"], ["gruby", "fat", "can sound rude about people"], ["młody", "young"],
    ["włosy", "hair", "always plural: włosy są…"], ["oczy", "eyes", "singular: oko"], ["krótkie / długie włosy", "short / long hair"],
    ["blondyn / blondynka", "blond man / woman"], ["brunet / brunetka", "dark-haired man / woman"], ["broda", "beard"], ["okulary", "glasses", "plural only"],
    ["miły", "nice, kind"], ["sympatyczny", "likeable"], ["wesoły", "cheerful"], ["smutny", "sad"], ["spokojny", "calm"], ["nerwowy", "nervous"],
    ["mądry", "wise, clever"], ["leniwy", "lazy"], ["pracowity", "hard-working"], ["ubranie", "clothes, an outfit"], ["spodnie", "trousers", "plural only"],
    ["koszula", "shirt"], ["sukienka", "dress"], ["sweter", "jumper, sweater"], ["buty", "shoes"], ["czapka", "cap, woolly hat"], ["płaszcz", "coat"],
    ["dżinsy", "jeans"], ["nosić", "to wear (usually)", "noszę, nosisz"], ["mieć na sobie", "to be wearing (now)"], ["Jak on wygląda?", "What does he look like?"]
  ],
  grammar: {
    title: "Describing people: jak wygląda? jaki jest?",
    html: `<p><b>Jak wygląda?</b> asks about looks; <b>Jaki jest? / Jaka jest?</b> asks about character. Adjectives after <b>jest</b> agree with the person: <b>On jest wysoki</b>, <b>Ona jest wysoka</b>.</p>
<p>After <b>ma</b> (has) and <b>nosi / ma na sobie</b> (wears), the clothes or features are the object, so the adjective goes into the <b>accusative</b>:</p>
<ul><li>feminine: <b>-ą</b> — <b>czerwoną sukienkę</b>, <b>białą koszulę</b></li><li>masculine things and neuter: no change — <b>czarny płaszcz</b>, <b>nowe ubranie</b></li><li>plural (not men): <b>-e</b> — <b>długie włosy</b>, <b>niebieskie oczy</b>, <b>czarne buty</b></li></ul>
<p>Useful opposites: <b>wysoki – niski</b>, <b>szczupły – gruby</b>, <b>młody – stary</b>, <b>wesoły – smutny</b>, <b>pracowity – leniwy</b>.</p>`,
    table: { head: ["noun", "Ona ma / nosi…", "rule"], rows: [
      ["sukienka (f)", "czerwoną sukienkę", "-a → -ą / -ę"], ["koszula (f)", "białą koszulę", "-a → -ą / -ę"], ["płaszcz (m)", "czarny płaszcz", "no change"],
      ["spodnie (pl)", "niebieskie spodnie", "-e"], ["włosy (pl)", "długie włosy", "-e"], ["oczy (pl)", "zielone oczy", "-e"]
    ] }
  },
  quiz: [
    { t: "fill", q: "Ona ma ___ włosy.", h: "długi", a: ["długie"], en: "She has long hair." },
    { t: "fill", q: "Moja siostra jest ___ i szczupła.", h: "wysoki", a: ["wysoka"], en: "My sister is tall and slim." },
    { t: "fill", q: "On nosi ___ okulary.", h: "czarny", a: ["czarne"], en: "He wears black glasses." },
    { t: "fill", q: "Ona ma na sobie ___ sukienkę.", h: "czerwony", a: ["czerwoną"], en: "She's wearing a red dress." },
    { t: "fill", q: "Mój syn ma ___ oczy.", h: "niebieski", a: ["niebieskie"], en: "My son has blue eyes." },
    { t: "choice", q: "The opposite of „wysoki”:", o: ["niski", "młody", "miły"], a: 0 },
    { t: "choice", q: "The opposite of „wesoły”:", o: ["smutny", "spokojny", "sympatyczny"], a: 0 },
    { t: "choice", q: "„Spodnie” is…", o: ["plural only", "feminine singular", "neuter singular"], a: 0 },
    { t: "order", a: "Jak wygląda twój brat", en: "What does your brother look like?" },
    { t: "order", a: "Ona jest miła i bardzo pracowita", en: "She is nice and very hard-working." }
  ],
  dialogue: [
    ["Ewa", "Jutro na dworcu czeka na ciebie mój brat, Paweł.", "Tomorrow my brother Paweł will be waiting for you at the station."],
    ["Tom", "Jak on wygląda?", "What does he look like?"],
    ["Ewa", "Jest wysoki i szczupły. Ma krótkie, ciemne włosy i brodę.", "He's tall and slim. He has short dark hair and a beard."],
    ["Tom", "Nosi okulary?", "Does he wear glasses?"],
    ["Ewa", "Tak. I zwykle nosi zielony płaszcz.", "Yes. And he usually wears a green coat."],
    ["Tom", "A jaki jest?", "And what's he like?"],
    ["Ewa", "Bardzo miły i wesoły. Na pewno go polubisz!", "Very nice and cheerful. You'll definitely like him!"]
  ],
  partner: "Ewa",
  scenario: "Ewa asks you to describe your best friend or someone in your family: what they look like, what they usually wear and what they're like.",
  writing: { prompt: "Describe a person you know: appearance, clothes and character (4–5 sentences).", model: "Moja przyjaciółka ma na imię Ola. Jest niska i szczupła. Ma długie, jasne włosy i zielone oczy. Zwykle nosi dżinsy i sweter. Jest bardzo miła i wesoła." },
  read: { kind: "sms", title: "SMS od Oli", body: ["Cześć! Czekam w kawiarni przy oknie.", "Mam na sobie czerwony sweter i czarne spodnie.", "Mam krótkie włosy i okulary. :)", "Do zobaczenia! Ola"],
    q: [{ q: "Where is Ola waiting?", o: ["in a café by the window", "at the station", "at home"], a: 0 }, { q: "What is she wearing?", o: ["a red jumper and black trousers", "a black dress", "a green coat"], a: 0 }, { q: "Which is true?", o: ["She has short hair and glasses", "She has long hair", "She has a beard"], a: 0 }] },
  cloze: "Mój kolega Marek jest {{wysoki|wysoka|wysokie}} i ma {{krótkie|krótki|krótką}} włosy. Dzisiaj ma na sobie {{niebieską|niebieski|niebieskie}} koszulę i czarne spodnie. Jest bardzo {{miły|miła|miłe}}."
},
{
  id: 23, pl: "Nie ma…", en: "There isn't any…", tag: "gen", tagLabel: "The genitive (dopełniacz)",
  focus: "dopełniacz · of, without, there isn't",
  vocab: [
    ["Nie ma…", "There isn't / there's no…"], ["nie było…", "there wasn't…"], ["potrzebować", "to need (+ genitive)", "potrzebuję"], ["szukać", "to look for (+ genitive)"],
    ["u", "at someone's place (+ genitive)", "u mamy, u lekarza"], ["bez", "without (+ genitive)"], ["dla", "for (+ genitive)"], ["od", "from someone, since (+ genitive)"],
    ["obok", "next to (+ genitive)"], ["koło", "near (+ genitive)"], ["ani", "nor, (not) … or", "Nie ma chleba ani masła."], ["pasta do zębów", "toothpaste"],
    ["szczoteczka do zębów", "toothbrush"], ["mydło", "soap"], ["szampon", "shampoo"], ["krem", "cream"], ["papier toaletowy", "toilet paper"],
    ["ręcznik", "towel"], ["sól", "salt", "feminine: tej soli"], ["cukier", "sugar", "genitive: cukru"], ["ryż", "rice"], ["masło", "butter"], ["ser", "cheese"],
    ["jajko", "egg"], ["kawałek", "a piece"], ["opakowanie", "a packet"], ["puszka", "a can, a tin"], ["słoik", "a jar"], ["drogeria", "chemist's, drugstore"],
    ["lista zakupów", "shopping list"], ["brakuje…", "… is missing / we're short of…", "Brakuje cukru."]
  ],
  grammar: {
    title: "The genitive (dopełniacz)",
    html: `<p>The genitive answers <b>kogo? czego?</b> (of whom? of what?). It's the most used case after the nominative. You need it:</p>
<ul><li>for <b>"of"</b> and possession: <b>brat Ewy</b> (Ewa's brother), <b>kilogram ryżu</b>, <b>butelka wody</b>, <b>kawałek sera</b></li>
<li>after <b>nie ma / nie było</b>: <b>Nie ma mleka.</b> <b>Siostry nie ma w domu.</b> <b>Koleżanki nie było w pracy.</b></li>
<li>after some verbs: <b>szukać, potrzebować, słuchać, uczyć się</b> — <b>Szukam pasty do zębów.</b></li>
<li>after <b>do, z</b> (from), <b>bez, u, dla, od, obok, koło</b>: <b>u mamy</b>, <b>bez cukru</b>, <b>dla ciebie</b>, <b>obok sklepu</b></li></ul>
<p>Singular endings: masculine <b>-a</b> (people, animals and many things: <b>brata, psa, sera, chleba</b>) or <b>-u</b> (many things: <b>ryżu, cukru, soku</b>); feminine <b>-y / -i</b> (<b>wody, kawy, soli</b>); neuter <b>-a</b> (<b>mleka, masła, mydła</b>).</p>`,
    table: { head: ["noun", "genitive", "example"], rows: [
      ["brat", "brata", "samochód brata"], ["ser", "sera", "kawałek sera"], ["ryż", "ryżu", "kilogram ryżu"], ["woda", "wody", "butelka wody"],
      ["sól", "soli", "bez soli"], ["mleko", "mleka", "Nie ma mleka."], ["mama", "mamy", "Jestem u mamy."]
    ] }
  },
  quiz: [
    { t: "fill", q: "Nie ma ___.", h: "mleko", a: ["mleka"], en: "There's no milk." },
    { t: "fill", q: "To jest samochód ___.", h: "brat", a: ["brata"], en: "This is my brother's car." },
    { t: "fill", q: "Poproszę kilogram ___.", h: "ryż", a: ["ryżu"], en: "A kilo of rice, please." },
    { t: "fill", q: "Szukam ___ do zębów.", h: "pasta", a: ["pasty"], en: "I'm looking for toothpaste." },
    { t: "fill", q: "Potrzebuję ___.", h: "szampon", a: ["szamponu"], en: "I need shampoo." },
    { t: "fill", q: "Jestem teraz u ___.", h: "mama", a: ["mamy"], en: "I'm at mum's now." },
    { t: "choice", q: "Siostry ___ w domu.", o: ["nie ma", "nie jest", "nie mam"], a: 0 },
    { t: "choice", q: "To prezent ___ ciebie.", o: ["dla", "do", "u"], a: 0 },
    { t: "order", a: "W domu nie ma chleba", en: "There's no bread at home." },
    { t: "order", a: "Poproszę butelkę wody i kawałek sera", en: "A bottle of water and a piece of cheese, please." }
  ],
  dialogue: [
    ["Marek", "Co kupujemy?", "What are we buying?"],
    ["Ania", "Nie ma chleba ani mleka. Potrzebuję też masła.", "There's no bread or milk. I also need butter."],
    ["Marek", "A w łazience?", "And in the bathroom?"],
    ["Ania", "Nie ma pasty do zębów ani mydła.", "There's no toothpaste or soap."],
    ["Marek", "Dobrze. Idę do drogerii i do sklepu.", "OK. I'm going to the chemist's and the shop."],
    ["Ania", "Weź listę zakupów!", "Take the shopping list!"]
  ],
  partner: "Sprzedawczyni",
  scenario: "You're in a small shop and some things you need have run out. Ask the shop assistant (sprzedawczyni) for things; sometimes she says there aren't any.",
  writing: { prompt: "Write a note for your flatmate: what's missing at home and what you need from the shop.", model: "Nie ma chleba, masła i sera. Potrzebuję też szamponu i pasty do zębów. Kup proszę kilogram ryżu i butelkę wody!" },
  read: { kind: "notice", title: "Sklep spożywczy „U Basi”", body: ["Czynne: pon.–pt. 7:00–20:00", "sob. 8:00–14:00", "niedziela: nieczynne", "Dzisiaj brak chleba razowego!", "Promocja: 2 kg cukru – 7 zł"],
    q: [{ q: "When is the shop closed?", o: ["on Sunday", "on Saturday", "every evening"], a: 0 }, { q: "What's missing today?", o: ["wholemeal bread", "sugar", "milk"], a: 0 }, { q: "How much do 2 kg of sugar cost?", o: ["7 zł", "2 zł", "14 zł"], a: 0 }] },
  cloze: "W lodówce nie ma {{mleka|mleko|mlekiem}} ani {{masła|masło|masłem}}. Idę do {{sklepu|sklep|sklepie}}. Kupię kilogram {{cukru|cukier|cukrem}} i butelkę {{wody|woda|wodę}}."
},
{
  id: 24, pl: "Pory roku i święta", en: "Seasons and holidays", tag: "dates", tagLabel: "Months, dates & holidays",
  focus: "daty · months, dates, weather",
  vocab: [
    ["styczeń", "January"], ["luty", "February"], ["marzec", "March"], ["kwiecień", "April"], ["maj", "May"], ["czerwiec", "June"],
    ["lipiec", "July"], ["sierpień", "August"], ["wrzesień", "September"], ["październik", "October"], ["listopad", "November"], ["grudzień", "December"],
    ["wiosna", "spring"], ["lato", "summer"], ["jesień", "autumn"], ["zima", "winter"], ["Jaka jest pogoda?", "What's the weather like?"],
    ["słońce", "sun"], ["deszcz", "rain"], ["śnieg", "snow"], ["wiatr", "wind"], ["Pada deszcz.", "It's raining."], ["Jest ciepło / zimno.", "It's warm / cold."],
    ["stopień", "degree", "Jest dwadzieścia stopni."], ["imieniny", "name day", "plural only"], ["święto", "holiday, festival"], ["Boże Narodzenie", "Christmas"],
    ["Wielkanoc", "Easter"], ["Nowy Rok", "New Year's Day"], ["sylwester", "New Year's Eve"], ["Wszystkiego najlepszego!", "All the best! (wishes)"],
    ["Wesołych Świąt!", "Merry Christmas! / Happy Easter!"], ["Kiedy masz urodziny?", "When is your birthday?"], ["pierwszy, drugi, trzeci", "first, second, third"]
  ],
  grammar: {
    title: "Months, dates and ordinal numbers",
    html: `<p>Dates use <b>ordinal numbers</b> (first, second…), which behave like adjectives: <b>pierwszy, drugi, trzeci, czwarty, piąty</b>… <b>dwudziesty</b>, <b>dwudziesty pierwszy</b>, <b>trzydziesty</b>.</p>
<ul><li><b>What's the date?</b> The day is in the nominative, the month in the genitive: <b>Dzisiaj jest trzeci maja.</b></li>
<li><b>On a date:</b> both go into the genitive: <b>trzeciego maja</b> (on 3 May), <b>jedenastego listopada</b>.</li>
<li><b>In a month:</b> <b>w</b> + locative: <b>w maju, w lipcu, we wrześniu, w grudniu</b>.</li>
<li><b>In a season:</b> <b>wiosną, latem, jesienią, zimą</b>.</li></ul>
<p>Weather: <b>Jest ciepło / zimno / słonecznie.</b> <b>Pada deszcz / śnieg.</b> <b>Świeci słońce.</b> <b>Wieje wiatr.</b> <b>Jest dwadzieścia stopni.</b></p>
<p>Public holidays you should know: <b>3 Maja</b> (Constitution Day) and <b>11 Listopada</b> (Independence Day).</p>`,
    table: { head: ["month", "on the … of", "in …"], rows: [
      ["styczeń", "stycznia", "w styczniu"], ["luty", "lutego", "w lutym"], ["marzec", "marca", "w marcu"], ["maj", "maja", "w maju"],
      ["wrzesień", "września", "we wrześniu"], ["listopad", "listopada", "w listopadzie"], ["grudzień", "grudnia", "w grudniu"]
    ] }
  },
  quiz: [
    { t: "fill", q: "Mam urodziny w ___.", h: "maj", a: ["maju"], en: "My birthday is in May." },
    { t: "fill", q: "Dzisiaj jest pierwszy ___.", h: "listopad", a: ["listopada"], en: "Today is the first of November." },
    { t: "fill", q: "Wigilia jest dwudziestego czwartego ___.", h: "grudzień", a: ["grudnia"], en: "Christmas Eve is on 24 December." },
    { t: "fill", q: "Święto Niepodległości jest ___ listopada.", h: "11th, on", a: ["jedenastego"], en: "Independence Day is on 11 November." },
    { t: "fill", q: "___ jest bardzo gorąco.", h: "lato, in summer", a: ["latem"], en: "In summer it's very hot." },
    { t: "choice", q: "Zimą często pada ___.", o: ["śnieg", "słońce", "wiatr"], a: 0 },
    { t: "choice", q: "Which month comes after „kwiecień”?", o: ["maj", "marzec", "czerwiec"], a: 0 },
    { t: "choice", q: "Name day or birthday wishes:", o: ["Wszystkiego najlepszego!", "Smacznego!", "Na zdrowie!"], a: 0 },
    { t: "order", a: "Kiedy masz urodziny", en: "When is your birthday?" },
    { t: "order", a: "Dzisiaj jest zimno i pada deszcz", en: "Today it's cold and raining." }
  ],
  dialogue: [
    ["Kasia", "Kiedy masz urodziny?", "When is your birthday?"],
    ["Ben", "Piętnastego marca. A ty?", "On the fifteenth of March. And you?"],
    ["Kasia", "W sierpniu, ale w Polsce ważne są też imieniny. Moje są dwudziestego piątego listopada.", "In August, but in Poland name days matter too. Mine is on the twenty-fifth of November."],
    ["Ben", "Jaka jest wtedy pogoda?", "What's the weather like then?"],
    ["Kasia", "Zwykle jest zimno i często pada deszcz. Ale w domu jest ciepło i jest tort!", "It's usually cold and it often rains. But it's warm at home and there's cake!"]
  ],
  partner: "Kasia",
  scenario: "Talk with Kasia about your favourite season, the weather where you live, and when you celebrate birthdays, name days and holidays.",
  writing: { prompt: "Write a short message with name day or birthday wishes for a friend, and say what the weather is like today.", model: "Droga Kasiu! Wszystkiego najlepszego z okazji imienin! Dużo zdrowia i szczęścia. U nas dzisiaj jest zimno i pada deszcz. Ściskam, Ben" },
  read: { kind: "notice", title: "Prognoza pogody na weekend", body: ["Sobota, 14 października: słonecznie, 15°C", "Niedziela, 15 października: pada deszcz, wieje wiatr, 9°C", "W górach w nocy możliwy śnieg."],
    q: [{ q: "What will Saturday be like?", o: ["sunny, 15°C", "rainy, 9°C", "snowy"], a: 0 }, { q: "When will it be windy?", o: ["on Sunday", "on Saturday", "both days"], a: 0 }, { q: "Where might it snow?", o: ["in the mountains at night", "in the city", "nowhere"], a: 0 }] },
  cloze: "Moje urodziny są {{dwunastego|dwunasty|dwunastym}} maja. {{W maju|W maj|Maja}} jest zwykle ciepło i świeci {{słońce|słońca|słońcem}}. Zimą lubię, kiedy pada {{śnieg|śniegu|śniegiem}}."
},
{
  id: 25, pl: "Mój dom", en: "My home", tag: "home", tagLabel: "Rooms, furniture & where things are",
  focus: "przyimki · where things are",
  vocab: [
    ["łazienka", "bathroom"], ["sypialnia", "bedroom"], ["salon", "living room"], ["przedpokój", "hall"], ["balkon", "balcony"],
    ["piętro", "floor, storey", "na pierwszym piętrze"], ["parter", "ground floor"], ["winda", "lift"], ["schody", "stairs", "plural only"],
    ["stół", "table"], ["łóżko", "bed"], ["szafa", "wardrobe"], ["półka", "shelf"], ["biurko", "desk"], ["fotel", "armchair"], ["kanapa", "sofa"],
    ["lampa", "lamp"], ["dywan", "rug"], ["obraz", "picture, painting"], ["lodówka", "fridge"], ["kuchenka", "cooker"], ["pralka", "washing machine"],
    ["telewizor", "TV set"], ["komputer", "computer"], ["klucze", "keys"], ["na", "on (+ locative)"], ["pod", "under (+ instrumental)"],
    ["nad", "above (+ instrumental)"], ["za", "behind (+ instrumental)"], ["przed", "in front of (+ instrumental)"], ["między", "between (+ instrumental)"],
    ["w rogu", "in the corner"], ["na ścianie", "on the wall"]
  ],
  grammar: {
    title: "Where is it? Location words",
    html: `<p>To say where something is, the preposition decides the case:</p>
<ul><li><b>w</b> (in) and <b>na</b> (on) + <b>locative</b>: <b>w szafie</b>, <b>na stole</b>, <b>na półce</b></li>
<li><b>pod</b> (under), <b>nad</b> (above), <b>za</b> (behind), <b>przed</b> (in front of), <b>między</b> (between) + <b>instrumental</b>: <b>pod łóżkiem</b>, <b>nad biurkiem</b>, <b>za drzwiami</b>, <b>przed domem</b>, <b>między oknem a szafą</b></li>
<li><b>obok</b> (next to) and <b>koło</b> (near) + <b>genitive</b>: <b>obok okna</b></li></ul>
<p>Instrumental reminder: masculine and neuter <b>-em</b> (<b>stołem, łóżkiem</b>), feminine <b>-ą</b> (<b>szafą, lampą</b>), plural <b>-ami</b> (<b>drzwiami</b>).</p>
<p>Furniture usually <b>stoi</b> (stands), pictures and lamps <b>wiszą</b> (hang), and things <b>leżą</b> (lie): <b>Klucze leżą na stole.</b></p>`,
    table: { head: ["preposition", "case", "example"], rows: [
      ["na", "locative", "Książka jest na stole."], ["w", "locative", "Ubrania są w szafie."], ["pod", "instrumental", "Kot śpi pod łóżkiem."],
      ["nad", "instrumental", "Lampa wisi nad biurkiem."], ["za", "instrumental", "Rower stoi za drzwiami."], ["przed", "instrumental", "Samochód stoi przed domem."],
      ["między", "instrumental", "Fotel stoi między oknem a szafą."]
    ] }
  },
  quiz: [
    { t: "fill", q: "Kot śpi pod ___.", h: "łóżko", a: ["łóżkiem"], en: "The cat sleeps under the bed." },
    { t: "fill", q: "Lampa wisi nad ___.", h: "biurko", a: ["biurkiem"], en: "The lamp hangs above the desk." },
    { t: "fill", q: "Książki są na ___.", h: "półka", a: ["półce"], en: "The books are on the shelf." },
    { t: "fill", q: "Samochód stoi przed ___.", h: "dom", a: ["domem"], en: "The car is in front of the house." },
    { t: "fill", q: "Ubrania są w ___.", h: "szafa", a: ["szafie"], en: "The clothes are in the wardrobe." },
    { t: "choice", q: "Fotel stoi między oknem a ___.", o: ["szafą", "szafie", "szafa"], a: 0 },
    { t: "choice", q: "„pod” takes the…", o: ["instrumental", "locative", "genitive"], a: 0 },
    { t: "choice", q: "You wash clothes in the…", o: ["pralka", "lodówka", "kuchenka"], a: 0 },
    { t: "order", a: "W mieszkaniu są dwa pokoje i łazienka", en: "There are two rooms and a bathroom in the flat." },
    { t: "order", a: "Klucze leżą na stole w kuchni", en: "The keys are on the table in the kitchen." }
  ],
  dialogue: [
    ["Ania", "Gdzie są moje klucze?", "Where are my keys?"],
    ["Tomek", "Nie wiem. Może na stole w kuchni?", "I don't know. Maybe on the table in the kitchen?"],
    ["Ania", "Nie, tam ich nie ma.", "No, they're not there."],
    ["Tomek", "A pod kanapą w salonie? Albo w płaszczu?", "Under the sofa in the living room, then? Or in your coat?"],
    ["Ania", "Mam! Były na półce nad biurkiem.", "Got them! They were on the shelf above the desk."]
  ],
  partner: "Tomek",
  scenario: "Tomek is helping you furnish a new flat. Discuss what furniture you need and where to put each thing.",
  writing: { prompt: "Describe your home: the rooms and where the main furniture is.", model: "Mieszkam w małym mieszkaniu na drugim piętrze. Mam salon, sypialnię, kuchnię i łazienkę. W salonie kanapa stoi pod oknem, a telewizor wisi na ścianie. W sypialni jest duże łóżko i szafa." },
  read: { kind: "ad", title: "SPRZEDAM", body: ["Kanapa (szara) – 400 zł", "Biurko + krzesło – 250 zł", "Lodówka, 2 lata – 600 zł", "Odbiór: Kraków, ul. Długa 12, III piętro (bez windy)", "tel. 600 123 456 (po 17:00)"],
    q: [{ q: "How much are the desk and chair?", o: ["250 zł", "400 zł", "600 zł"], a: 0 }, { q: "Which is true?", o: ["There's no lift in the building", "The fridge is new", "The sofa is green"], a: 0 }, { q: "When should you phone?", o: ["after 5 p.m.", "before 5 p.m.", "only on Sundays"], a: 0 }] },
  cloze: "Moja sypialnia jest mała. Łóżko stoi pod {{oknem|okno|oknie}}, a szafa obok {{drzwi|drzwiami|drzwiach}}. Nad {{biurkiem|biurko|biurku}} wisi lampa. Na {{ścianie|ściana|ścianą}} jest obraz."
},
{
  id: 26, pl: "Na dworcu i na lotnisku", en: "At the station and the airport", tag: "travel", tagLabel: "Stations, tickets & timetables",
  focus: "podróż · getting around",
  vocab: [
    ["dworzec kolejowy", "train station"], ["dworzec autobusowy", "bus station"], ["lotnisko", "airport"], ["peron", "platform"], ["tor", "track"],
    ["kasa biletowa", "ticket office"], ["bilet", "ticket"], ["bilet w jedną stronę", "one-way ticket"], ["bilet powrotny", "return ticket"],
    ["normalny / ulgowy", "full fare / reduced fare"], ["miejscówka", "seat reservation"], ["odjazd", "departure (train, bus)"], ["przyjazd", "arrival (train, bus)"],
    ["odlot / przylot", "departure / arrival (plane)"], ["samolot", "plane"], ["lot", "flight"], ["opóźnienie", "delay"], ["odwołany", "cancelled"],
    ["rozkład jazdy", "timetable"], ["bagaż", "luggage"], ["walizka", "suitcase"], ["plecak", "rucksack"], ["paszport", "passport"],
    ["przesiadka", "change, connection"], ["wagon", "carriage"], ["odjeżdżać", "to depart", "odjeżdża"], ["przyjeżdżać", "to arrive", "przyjeżdża"],
    ["Z którego peronu odjeżdża…?", "Which platform does … leave from?"], ["Ile kosztuje bilet do…?", "How much is a ticket to…?"],
    ["Pociąg jest opóźniony.", "The train is delayed."], ["Kiedy jest następny autobus?", "When's the next bus?"]
  ],
  grammar: {
    title: "Travel questions: do, z, o and times",
    html: `<p>Where to and where from both take the <b>genitive</b>: <b>pociąg do Gdańska</b>, <b>autobus z Warszawy</b>, <b>z peronu drugiego</b>.</p>
<p>Times on timetables use the 24-hour clock with <b>o</b> + locative of the ordinal: <b>o siódmej czterdzieści</b> (7:40), <b>o czternastej dwadzieścia</b> (14:20), <b>o dziesiątej piętnaście</b> (10:15).</p>
<p>Two key verbs: <b>odjeżdżać</b> (to depart) and <b>przyjeżdżać</b> (to arrive): <b>Pociąg odjeżdża o 8:05 i przyjeżdża o 11:30.</b> For planes: <b>odlot / przylot</b>.</p>
<p>At the ticket office: <b>Poproszę bilet do Krakowa, normalny, w jedną stronę.</b></p>`,
    table: { head: ["question", "answer"], rows: [
      ["Skąd odjeżdża pociąg?", "Z peronu drugiego."], ["Dokąd jedzie ten autobus?", "Do centrum."], ["O której odjeżdża?", "O siódmej czterdzieści."],
      ["O której przyjeżdża?", "O dziesiątej dwadzieścia."], ["Ile kosztuje bilet?", "Czterdzieści dwa złote."]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "Poproszę bilet do ___.", h: "Kraków", a: ["Krakowa"], en: "A ticket to Kraków, please." },
    { t: "fill", q: "Pociąg z ___ jest opóźniony.", h: "Warszawa", a: ["Warszawy"], en: "The train from Warsaw is delayed." },
    { t: "fill", q: "Autobus ___ o ósmej.", h: "odjeżdżać", a: ["odjeżdża"], en: "The bus leaves at eight." },
    { t: "fill", q: "Odjazd jest ___ siódmej trzydzieści.", h: "at", a: ["o"], en: "The departure is at 7:30." },
    { t: "choice", q: "A return ticket:", o: ["bilet powrotny", "bilet w jedną stronę", "miejscówka"], a: 0 },
    { t: "choice", q: "„Opóźnienie” means…", o: ["delay", "departure", "platform"], a: 0 },
    { t: "choice", q: "Z którego ___ odjeżdża pociąg?", o: ["peronu", "peron", "peronie"], a: 0 },
    { t: "choice", q: "For a plane, departure is…", o: ["odlot", "odjazd", "przyjazd"], a: 0 },
    { t: "order", a: "Ile kosztuje bilet do Gdańska", en: "How much is a ticket to Gdańsk?" },
    { t: "order", a: "Pociąg odjeżdża z peronu trzeciego", en: "The train leaves from platform three." }
  ],
  dialogue: [
    ["Kasjerka", "Dzień dobry, słucham?", "Hello, can I help you?"],
    ["Podróżny", "Poproszę bilet do Gdańska na pociąg o dziesiątej piętnaście.", "A ticket to Gdańsk for the 10:15 train, please."],
    ["Kasjerka", "W jedną stronę czy powrotny?", "One-way or return?"],
    ["Podróżny", "Powrotny, normalny. Z którego peronu odjeżdża?", "Return, full fare. Which platform does it leave from?"],
    ["Kasjerka", "Z peronu drugiego. Ale uwaga, pociąg ma dziesięć minut opóźnienia.", "Platform two. But note, the train is ten minutes late."],
    ["Podróżny", "O której przyjeżdża do Gdańska?", "What time does it arrive in Gdańsk?"],
    ["Kasjerka", "O czternastej dwadzieścia.", "At 14:20."]
  ],
  partner: "Kasjerka",
  scenario: "You're at the ticket office at Kraków Główny station. Buy a train ticket, then ask about the platform, departure and arrival times and any delay.",
  writing: { prompt: "Send a text message to a friend: which train or bus you're taking, when it leaves and when you arrive.", model: "Cześć! Jadę pociągiem do Gdańska. Odjazd o 10:15 z peronu drugiego, przyjazd o 14:20. Pociąg ma 10 minut opóźnienia. Do zobaczenia na dworcu!" },
  read: { kind: "timetable", title: "ODJAZDY · Kraków Główny", body: ["Godz. | Do | Peron | Uwagi", "08:05 | Warszawa Centralna | 3 | —", "08:40 | Gdańsk Główny | 2 | opóźnienie 15 min", "09:15 | Zakopane | 1 | —", "10:00 | Wrocław Główny | 4 | odwołany"],
    q: [{ q: "Which train is late?", o: ["the 08:40 to Gdańsk", "the 08:05 to Warsaw", "the 09:15 to Zakopane"], a: 0 }, { q: "Which platform for Zakopane?", o: ["1", "2", "4"], a: 0 }, { q: "What does „odwołany” mean for the Wrocław train?", o: ["cancelled", "15 minutes late", "on time"], a: 0 }] },
  cloze: "Jutro jadę {{do|z|na}} Wrocławia. Pociąg odjeżdża {{o|w|na}} ósmej z peronu {{trzeciego|trzeci|trzecim}}. Mam bilet {{powrotny|powrotna|powrotnym}}, bo w niedzielę wracam."
},
{
  id: 27, pl: "U lekarza i w aptece", en: "At the doctor's and the pharmacy", tag: "health", tagLabel: "Body, health & the doctor",
  focus: "zdrowie · at the doctor's",
  vocab: [
    ["głowa", "head"], ["gardło", "throat"], ["brzuch", "stomach, belly"], ["plecy", "back", "plural only"], ["ręka", "hand, arm", "plural: ręce"],
    ["noga", "leg, foot"], ["oko", "eye", "plural: oczy"], ["ucho", "ear", "plural: uszy"], ["ząb", "tooth"], ["serce", "heart"],
    ["Boli mnie…", "My … hurts"], ["Bolą mnie…", "My … hurt (plural)"], ["Jak się czujesz?", "How do you feel?"], ["Czuję się źle.", "I feel unwell."],
    ["chory / chora", "ill (m / f)"], ["zdrowy", "healthy"], ["gorączka", "fever, temperature"], ["kaszel", "cough"], ["katar", "runny nose"],
    ["przeziębienie", "a cold"], ["grypa", "flu"], ["przychodnia", "clinic, health centre"], ["wizyta", "appointment, visit"], ["recepta", "prescription"],
    ["apteka", "pharmacy"], ["lek / lekarstwo", "medicine"], ["tabletka", "tablet, pill"], ["syrop", "syrup"], ["Co panu / pani dolega?", "What's the matter? (doctor)"],
    ["leżeć w łóżku", "to stay in bed"], ["Wracaj do zdrowia!", "Get well soon!"]
  ],
  grammar: {
    title: "Boli mnie… — saying what hurts",
    html: `<p>In Polish the <b>body part</b> is the subject and <b>you</b> are the object: <b>Boli mnie głowa</b> (literally "the head hurts me"). The person is in the accusative: <b>mnie, cię, go, ją, nas</b>.</p>
<p>With a plural body part the verb is plural: <b>Bolą mnie plecy.</b> <b>Bolą ją nogi.</b></p>
<p>Symptoms you <b>have</b> go into the accusative: <b>Mam gorączkę / kaszel / katar.</b> How you feel uses <b>czuć się</b>: <b>Czuję się dobrze / źle / lepiej.</b></p>
<p>Medicine "for" something takes <b>od</b> + genitive: <b>tabletki od bólu głowy</b>, <b>syrop od kaszlu</b>.</p>`,
    table: { head: ["person", "boli…", "example"], rows: [
      ["ja", "mnie", "Boli mnie głowa."], ["ty", "cię", "Co cię boli?"], ["on", "go", "Boli go ząb."], ["ona", "ją", "Bolą ją plecy."], ["my", "nas", "Bolą nas nogi."]
    ] }
  },
  quiz: [
    { t: "fill", q: "Boli ___ głowa.", h: "ja", a: ["mnie"], en: "I have a headache." },
    { t: "fill", q: "Co ___ boli?", h: "ty", a: ["cię"], en: "What hurts?" },
    { t: "fill", q: "___ mnie plecy.", h: "boleć, plural", a: ["bolą"], en: "My back hurts." },
    { t: "fill", q: "Mam ___ i katar.", h: "gorączka", a: ["gorączkę"], en: "I have a temperature and a runny nose." },
    { t: "fill", q: "Poproszę tabletki od bólu ___.", h: "gardło", a: ["gardła"], en: "Some sore-throat tablets, please." },
    { t: "choice", q: "I feel unwell:", o: ["Czuję się źle.", "Jestem źle.", "Mam źle."], a: 0 },
    { t: "choice", q: "Where do you buy medicine?", o: ["w aptece", "w przychodni", "na poczcie"], a: 0 },
    { t: "choice", q: "The doctor gives you a…", o: ["recepta", "rachunek", "bilet"], a: 0 },
    { t: "order", a: "Muszę iść do lekarza", en: "I have to go to the doctor." },
    { t: "order", a: "Od wczoraj boli mnie gardło", en: "My throat has been sore since yesterday." }
  ],
  dialogue: [
    ["Lekarka", "Dzień dobry. Co panu dolega?", "Hello. What's the matter?"],
    ["Pacjent", "Od wczoraj boli mnie gardło. Mam też katar.", "My throat has been sore since yesterday. I also have a runny nose."],
    ["Lekarka", "Ma pan gorączkę?", "Do you have a temperature?"],
    ["Pacjent", "Tak, trzydzieści osiem stopni.", "Yes, thirty-eight degrees."],
    ["Lekarka", "To przeziębienie. Proszę leżeć w łóżku i pić dużo herbaty. Tu jest recepta.", "It's a cold. Stay in bed and drink lots of tea. Here's a prescription."],
    ["Pacjent", "Dziękuję. Gdzie jest najbliższa apteka?", "Thank you. Where's the nearest pharmacy?"]
  ],
  partner: "Lekarka",
  scenario: "You're at a clinic (przychodnia). The doctor (lekarka) asks what's wrong. Describe your symptoms, ask what you should do and where the pharmacy is.",
  writing: { prompt: "Text your boss or teacher: you're ill and can't come today. Say what hurts.", model: "Dzień dobry, niestety jestem chory. Boli mnie gardło i mam gorączkę. Dzisiaj nie mogę przyjść do pracy. Jutro idę do lekarza. Przepraszam, Marko" },
  read: { kind: "notice", title: "Przychodnia „Zdrowie” · godziny przyjęć", body: ["Lekarz rodzinny: pon.–pt. 8:00–18:00", "Pediatra: wt., czw. 10:00–14:00", "Rejestracja telefoniczna: 12 345 67 89", "Apteka na parterze czynna codziennie 8:00–22:00", "W sobotę i w niedzielę przychodnia nieczynna."],
    q: [{ q: "When can you see the family doctor?", o: ["Monday to Friday, 8:00–18:00", "only on Tuesday", "every day"], a: 0 }, { q: "Where is the pharmacy?", o: ["on the ground floor", "next to the station", "there isn't one"], a: 0 }, { q: "Which is true?", o: ["The clinic is closed at the weekend", "The pharmacy closes at 18:00", "The paediatrician works on Mondays"], a: 0 }] },
  cloze: "Od rana boli {{mnie|ja|mi}} gardło. Mam {{gorączkę|gorączka|gorączki}}. Muszę iść do {{lekarza|lekarz|lekarzem}}, a potem do {{apteki|apteka|aptece}}."
},
{
  id: 28, pl: "Dlaczego? Bo…", en: "Why? Because…", tag: "link", tagLabel: "Linking sentences",
  focus: "spójniki · and, but, so, because",
  vocab: [
    ["i", "and"], ["a", "and, while (contrast)"], ["lub", "or"], ["więc", "so"], ["bo", "because"], ["dlatego że", "because (more formal)"],
    ["że", "that", "Wiem, że…"], ["kiedy", "when"], ["dlaczego?", "why?"], ["później", "later"], ["w południe", "at noon"], ["po południu", "in the afternoon"],
    ["w nocy", "at night"], ["zawsze", "always"], ["czasami", "sometimes"], ["nigdy", "never", "Nigdy nie…"], ["zaczynać / kończyć", "to start / to finish"],
    ["przerwa", "a break"], ["zmęczony", "tired"], ["wolny czas", "free time"], ["spotkanie", "meeting"], ["zakupy", "shopping"], ["odpoczywać", "to rest"],
    ["sprzątać", "to clean, tidy up"], ["wiadomość", "message"], ["list", "letter"], ["Pozdrawiam", "Best wishes (end of a message)"],
    ["Do usłyszenia!", "Talk soon! (on the phone)"], ["Ściskam", "Hugs (informal sign-off)"]
  ],
  grammar: {
    title: "Joining sentences",
    html: `<p>Linking words turn short sentences into real ones. At A1 you need:</p>
<ul><li><b>i</b> (and), <b>a</b> (and / while, for contrast), <b>ale</b> (but), <b>lub</b> (or), <b>więc</b> (so)</li>
<li><b>że</b> (that), <b>bo / dlatego że</b> (because), <b>kiedy</b> (when)</li></ul>
<p><b>Commas:</b> Polish puts a comma <b>before a, ale, więc, bo, że, kiedy, dlatego że</b>: <b>Jestem zmęczony, ale szczęśliwy.</b> There's normally <b>no comma before i or lub</b>: <b>Pracuję i uczę się polskiego.</b></p>
<p><b>a</b> vs <b>i</b>: use <b>a</b> when you compare or contrast two people or things: <b>Ja piję kawę, a ona herbatę.</b></p>`,
    table: { head: ["word", "meaning", "example"], rows: [
      ["i", "and", "Pracuję i uczę się polskiego."], ["a", "and / while", "Ja piję kawę, a ona herbatę."], ["ale", "but", "Jestem zmęczony, ale szczęśliwy."],
      ["lub", "or", "W weekend czytam lub oglądam filmy."], ["więc", "so", "Pada deszcz, więc zostaję w domu."], ["bo", "because", "Nie przyszedłem, bo byłem chory."],
      ["że", "that", "Myślę, że to dobry pomysł."], ["kiedy", "when", "Kiedy mam czas, czytam książki."]
    ], pl: [0, 2] }
  },
  quiz: [
    { t: "choice", q: "Pada deszcz, ___ zostaję w domu.", o: ["więc", "bo", "że"], a: 0 },
    { t: "choice", q: "Nie idę do pracy, ___ jestem chory.", o: ["bo", "więc", "a"], a: 0 },
    { t: "choice", q: "Ja piję kawę, ___ ona herbatę.", o: ["a", "i", "lub"], a: 0 },
    { t: "choice", q: "Myślę, ___ to dobry pomysł.", o: ["że", "bo", "kiedy"], a: 0 },
    { t: "choice", q: "Which sentence is punctuated correctly?", o: ["Jestem zmęczony, ale szczęśliwy.", "Pracuję, i uczę się.", "Myślę że to dobry pomysł."], a: 0 },
    { t: "fill", q: "___ mam czas, czytam książki.", h: "when", a: ["kiedy"], en: "When I have time, I read books." },
    { t: "fill", q: "Uczę się polskiego, dlatego ___ mieszkam w Krakowie.", h: "dlatego …", a: ["że"], en: "I'm learning Polish because I live in Kraków." },
    { t: "fill", q: "Nigdy ___ piję kawy wieczorem.", h: "not", a: ["nie"], en: "I never drink coffee in the evening." },
    { t: "order", a: "Wstaję o siódmej i najpierw piję kawę", en: "I get up at seven and first drink coffee." },
    { t: "order", a: "Wieczorem jestem zmęczony więc odpoczywam", en: "In the evening I'm tired, so I rest." }
  ],
  dialogue: [
    ["Ola", "Dlaczego nie byłeś wczoraj na spotkaniu?", "Why weren't you at the meeting yesterday?"],
    ["Marek", "Bo byłem chory. Bolała mnie głowa, więc zostałem w domu.", "Because I was ill. I had a headache, so I stayed at home."],
    ["Ola", "Szkoda! A dzisiaj jak się czujesz?", "Pity! And how do you feel today?"],
    ["Marek", "Lepiej, ale jestem trochę zmęczony.", "Better, but I'm a bit tired."],
    ["Ola", "To odpoczywaj! Kiedy będziesz zdrowy, pójdziemy do kina.", "Then rest! When you're well, we'll go to the cinema."]
  ],
  partner: "Ola",
  scenario: "Ola asks about your typical day and why you do things the way you do. Answer in full sentences with i, a, ale, więc, bo, że and kiedy.",
  writing: { prompt: "Write a short essay „Mój dzień” (My day): 5–6 sentences with linking words (i, ale, więc, bo, kiedy). Mind the commas.", model: "Zwykle wstaję o siódmej, bo zaczynam pracę o dziewiątej. Najpierw piję kawę i jem śniadanie. Pracuję do piątej, a potem robię zakupy. Kiedy mam czas, czytam albo oglądam film. Wieczorem jestem zmęczony, więc idę spać o jedenastej." },
  read: { kind: "email", title: "Od: Marta · Temat: Sobota", body: ["Cześć Kasiu!", "W sobotę nie mogę iść do kina, bo jadę do mamy. Ona ma imieniny, więc cała rodzina będzie u niej.", "Może w niedzielę? Kiedy wracam, mam czas po południu.", "Pozdrawiam,", "Marta"],
    q: [{ q: "Why can't Marta go to the cinema on Saturday?", o: ["She's going to her mum's", "She's ill", "She has to work"], a: 0 }, { q: "What's happening at her mum's?", o: ["a name day", "a wedding", "a birthday"], a: 0 }, { q: "What does Marta suggest?", o: ["Sunday afternoon", "Saturday evening", "next week"], a: 0 }] },
  cloze: "Lubię poniedziałki, {{bo|więc|ale}} w poniedziałek mam wolne popołudnie. Rano pracuję, {{a|i|lub}} po południu chodzę na basen. Wieczorem jestem zmęczony, {{więc|bo|że}} wcześnie idę spać. Myślę, {{że|bo|kiedy}} to dobry plan."
}
];
