/* Ten more A2 units (ids 36–45). They cover the A2 requirements the audit
   found missing (research/standards_audit.md): relative clauses, prefixed
   verbs of movement, media and reported speech, health and advice, complaints
   and services, nature and if-sentences, telling a story, culture and years,
   school and verbs with fixed cases, and describing people / explaining words. */
const NEW_UNITS_A2B = [
{
  id: 36, pl: "W pracy", en: "At work", tag: "ktory", tagLabel: "który: the one who / which",
  focus: "który · the one who, which",
  vocab: [
    ["stanowisko", "position, post"], ["ogłoszenie o pracy", "job advert"], ["wymagania", "requirements"], ["obowiązki", "duties"], ["wykształcenie", "education (level)"],
    ["wyższe wykształcenie", "university degree"], ["znajomość języków", "knowledge of languages"], ["umowa o pracę", "employment contract"], ["okres próbny", "probation period"],
    ["wynagrodzenie", "pay, salary (formal)"], ["premia", "bonus"], ["godziny pracy", "working hours"], ["pracować zmianowo", "to work shifts"], 
    ["kierownik / kierowniczka", "manager (m / f)"], ["dział", "department"], ["kadry", "HR (department)", "w kadrach"], ["list motywacyjny", "cover letter"],
    ["w załączniku", "attached (in an email)"], ["awans", "promotion"], ["księgowość", "accounting"], ["opieka medyczna", "medical care (benefit)"],
    ["który / która / które", "which, who (relative)", "Kolega, który pracuje ze mną…"], ["Szukamy osoby, która…", "We're looking for someone who…"],
    ["w sprawie", "regarding, about (formal)", "Piszę w sprawie ogłoszenia."], ["doświadczenie zawodowe", "work experience"], ["zacząć pracę", "to start work"]
  ],
  grammar: {
    title: "który: the one who, the one which",
    html: `<p><b>który</b> joins a description to a noun, like "who / which / that". It takes the <b>gender and number</b> of the noun it describes, and its <b>case</b> from its job in its own part of the sentence:</p>
<ul><li><b>To jest kolega, który pracuje ze mną.</b> (he works → nominative)</li>
<li><b>Mam szefową, którą bardzo lubię.</b> (I like her → accusative)</li>
<li><b>To jest firma, w której pracuję.</b> (w + locative)</li>
<li><b>Ludzie, z którymi pracuję, są mili.</b> (z + instrumental, plural)</li></ul>
<p>Polish always puts a <b>comma</b> before <b>który</b>. Men and mixed groups use <b>którzy</b>; all other plurals use <b>które</b>.</p>`,
    table: { head: ["case", "m", "f", "n", "pl. men", "pl. other"], rows: [
      ["mianownik", "który", "która", "które", "którzy", "które"], ["dopełniacz", "którego", "której", "którego", "których", "których"],
      ["celownik", "któremu", "której", "któremu", "którym", "którym"], ["biernik", "który / którego*", "którą", "które", "których", "które"],
      ["narzędnik", "którym", "którą", "którym", "którymi", "którymi"], ["miejscownik", "którym", "której", "którym", "których", "których"]
    ], pl: [1, 2, 3, 4, 5] }
  },
  quiz: [
    { t: "fill", q: "To jest kolega, ___ pracuje ze mną.", h: "który", a: ["który"], en: "This is the colleague who works with me." },
    { t: "fill", q: "To jest firma, w ___ pracuję.", h: "która", a: ["której"], en: "This is the company I work for." },
    { t: "fill", q: "Ludzie, z ___ pracuję, są bardzo mili.", h: "którzy", a: ["którymi"], en: "The people I work with are very nice." },
    { t: "fill", q: "Mam szefową, ___ bardzo lubię.", h: "która", a: ["którą"], en: "I have a boss whom I like very much." },
    { t: "fill", q: "Mam wyższe ___.", h: "education", a: ["wykształcenie"], en: "I have a university degree." },
    { t: "choice", q: "Szukamy osoby, ___ zna angielski.", o: ["która", "którą", "której"], a: 0 },
    { t: "choice", q: "To są studenci, ___ będą u nas na praktykach.", o: ["którzy", "które", "którym"], a: 0 },
    { t: "choice", q: "Mieszkanie, w ___ mieszkam, jest małe.", o: ["którym", "które", "którego"], a: 0 },
    { t: "choice", q: "Starting a formal email to a company:", o: ["Szanowni Państwo,", "Cześć!", "Hej, szefie!"], a: 0 },
    { t: "choice", q: "Piszę ___ ogłoszenia o pracy.", o: ["w sprawie", "o sprawie", "na sprawę"], a: 0 },
    { t: "order", a: "Szukam pracy która jest blisko domu", en: "I'm looking for a job that's close to home." },
    { t: "order", a: "Wysłałem CV do firmy w której chcę pracować", en: "I sent my CV to the company I want to work for." }
  ],
  dialogue: [
    ["Pani Nowak", "Dzień dobry. Proszę usiąść. Dlaczego chce pan pracować w naszej firmie?", "Hello. Please sit down. Why do you want to work for our company?"],
    ["Marko", "Bo szukam pracy, która jest ciekawa i blisko domu. Państwa biuro jest dwie ulice ode mnie.", "Because I'm looking for a job that's interesting and close to home. Your office is two streets from me."],
    ["Pani Nowak", "Jakie ma pan doświadczenie?", "What experience do you have?"],
    ["Marko", "Przez trzy lata pracowałem jako księgowy w firmie, która sprzedawała meble.", "For three years I worked as an accountant in a company that sold furniture."],
    ["Pani Nowak", "Zna pan języki?", "Do you know any languages?"],
    ["Marko", "Serbski, angielski i polski. Ludzie, z którymi pracowałem, mówili po angielsku.", "Serbian, English and Polish. The people I worked with spoke English."],
    ["Pani Nowak", "Dobrze. Na początku jest trzymiesięczny okres próbny. Kiedy mógłby pan zacząć?", "Good. At the start there's a three-month probation. When could you start?"],
    ["Marko", "Od pierwszego marca.", "From the first of March."]
  ],
  partner: "Pani Nowak",
  scenario: "Pani Nowak, a manager, interviews you for a job: why you want it, your education and experience, languages and when you can start. Use który in at least two answers.",
  writing: { prompt: "Write a short formal email applying for a job from an advert: which job, your education and experience, your languages and when you could start (5–6 sentences).",
    model: "Szanowni Państwo,\npiszę w sprawie ogłoszenia o pracy na stanowisku księgowego. Mam wyższe wykształcenie i trzy lata doświadczenia w firmie, która sprzedawała meble. Znam język serbski, angielski i polski. Mogę zacząć pracę od pierwszego marca. W załączniku przesyłam CV.\nZ poważaniem,\nMarko Jović" },
  read: { kind: "ad", title: "PRACA · Trans-Pol", body: ["Firma transportowa „Trans-Pol” szuka osoby, która:", "– ma doświadczenie w księgowości,", "– zna język angielski,", "– ma prawo jazdy kategorii B.", "Oferujemy: umowę o pracę, pracę od poniedziałku do piątku, 8:00–16:00, prywatną opiekę medyczną.", "CV i list motywacyjny prosimy wysyłać do 30 kwietnia: praca@transpol.pl"],
    q: [{ q: "What kind of company is it?", o: ["a transport company", "a furniture shop", "a bank"], a: 0 }, { q: "What must candidates have?", o: ["a driving licence", "their own car", "a university degree"], a: 0 }, { q: "By when should you apply?", o: ["30 April", "1 March", "next Monday"], a: 0 }] },
  cloze: "Pracuję w firmie, {{która|który|które}} produkuje meble. Mam szefa, {{którego|który|którym}} bardzo lubię. Ludzie, z {{którymi|którzy|których}} pracuję, są mili. Biuro, w {{którym|które|którego}} siedzę, jest duże i jasne."
},
{
  id: 37, pl: "Wchodzę, wychodzę", en: "In and out", tag: "motionpref", tagLabel: "Verbs of movement with prefixes",
  focus: "przedrostki · go in, out, across, arrive",
  vocab: [
    ["przyjść / przychodzić", "to come, arrive (on foot)"],
    ["odejść / odchodzić", "to walk away, leave"], ["wjechać / wjeżdżać", "to drive in"], ["odjechać / odjeżdżać", "to drive off, depart"], ["przejechać / przejeżdżać", "to drive across, through"],
    ["przesiąść się", "to change (trains, buses)", "przesiadam się"], ["wsiąść / wysiąść", "to get on / to get off (perf.)"], ["wpaść do kogoś", "to drop in on someone"],
    ["zawrócić", "to turn back"], ["wejście główne", "main entrance"], ["wyjście ewakuacyjne", "emergency exit"], ["wjazd / wyjazd", "way in / way out (for cars)"],
    ["przejście podziemne", "underpass"], ["na górę / na dół", "upstairs / downstairs (direction)"], ["schodami", "by the stairs"], ["windą", "by lift"],
    ["tędy", "this way"], ["którędy?", "which way?"], ["po cichu", "quietly"], ["w drodze do pracy", "on the way to work"], ["z domu", "from home, out of the house"],
    ["za pięć minut", "in five minutes"], ["za wcześnie", "too early"]
  ],
  grammar: {
    title: "Going in, out and across: prefixes on iść and jechać",
    html: `<p>Prefixes add a direction to <b>iść</b> (on foot) and <b>jechać</b> (by vehicle). The prefixed verbs come in aspect pairs: <b>-jść</b> is perfective (one action), <b>-chodzić</b> is imperfective (process or habit): <b>Wczoraj wyszedłem o siódmej. Codziennie wychodzę o siódmej.</b></p>
<ul><li><b>w-</b> in: <b>wejść do sklepu</b>, <b>wjechać na parking</b></li><li><b>wy-</b> out, leave: <b>wyjść z domu</b>, <b>wyjechać z miasta</b></li>
<li><b>przy-</b> come, arrive: <b>przyjść do pracy</b>, <b>przyjechać do Krakowa</b></li><li><b>od-</b> away: <b>odejść od okna</b>, <b>Pociąg odjeżdża.</b></li>
<li><b>do-</b> reach: <b>dojść do dworca</b>, <b>dojechać do centrum</b></li><li><b>prze-</b> across, through: <b>przejść przez ulicę</b>, <b>przejechać przez most</b></li>
<li><b>po-</b> set off: <b>pójść</b>, <b>pojechać</b></li></ul>
<p>The past of the <b>-jść</b> verbs is irregular: <b>wyszedłem / wyszłam, przyszedł / przyszła, weszli</b>. The future: <b>wyjdę, przyjdziesz, wejdzie</b>.</p>`,
    table: { head: ["prefix", "meaning", "on foot", "by vehicle"], rows: [
      ["w-", "in", "wejść / wchodzić", "wjechać / wjeżdżać"], ["wy-", "out, leave", "wyjść / wychodzić", "wyjechać / wyjeżdżać"], ["przy-", "come, arrive", "przyjść / przychodzić", "przyjechać / przyjeżdżać"],
      ["od-", "away", "odejść / odchodzić", "odjechać / odjeżdżać"], ["do-", "reach", "dojść / dochodzić", "dojechać / dojeżdżać"], ["prze-", "across", "przejść / przechodzić", "przejechać / przejeżdżać"], ["po-", "set off", "pójść", "pojechać"]
    ], pl: [2, 3] }
  },
  quiz: [
    { t: "fill", q: "Wczoraj ___ z domu o siódmej.", h: "wyjść (I, m, past)", a: ["wyszedłem"], en: "Yesterday I left home at seven." },
    { t: "fill", q: "Jutro ___ do ciebie o piątej.", h: "przyjść (I, future)", a: ["przyjdę"], en: "Tomorrow I'll come to you at five." },
    { t: "fill", q: "W piątek ___ na wakacje.", h: "wyjechać (we, future)", a: ["wyjedziemy"], en: "On Friday we'll leave on holiday." },
    { t: "fill", q: "Musimy ___ się w Poznaniu.", h: "change (trains)", a: ["przesiąść"], en: "We have to change in Poznań." },
    { t: "choice", q: "Codziennie ___ z pracy o szesnastej.", o: ["wychodzę", "wyjdę", "wyszedłem"], a: 0 },
    { t: "choice", q: "Proszę ___ przez most i skręcić w lewo.", o: ["przejść", "wejść", "wyjść"], a: 0 },
    { t: "choice", q: "Pociąg ___ do Krakowa o 10:30.", o: ["przyjeżdża", "wyjeżdża", "odchodzi"], a: 0 },
    { t: "choice", q: "Przepraszam, jak ___ do dworca?", o: ["dojść", "wyjść", "odejść"], a: 0 },
    { t: "choice", q: "Ewa ___ do biura o dziewiątej.", o: ["przyszła", "przyszedł", "przyszli"], a: 0 },
    { t: "choice", q: "Samochody ___ na parking od ulicy Krótkiej.", o: ["wjeżdżają", "wchodzą", "przychodzą"], a: 0 },
    { t: "order", a: "Wyszedłem z domu i poszedłem na przystanek", en: "I left home and went to the stop." },
    { t: "order", a: "Przejdź przez ulicę i wejdź do sklepu", en: "Cross the street and go into the shop." }
  ],
  dialogue: [
    ["Ola", "Gdzie jesteś? Film zaczyna się za dziesięć minut!", "Where are you? The film starts in ten minutes!"],
    ["Tomek", "Już jestem w drodze. Wyszedłem z domu późno, bo szukałem kluczy.", "I'm on my way. I left home late because I was looking for my keys."],
    ["Ola", "Przyjedziesz tramwajem?", "Are you coming by tram?"],
    ["Tomek", "Tak, ale muszę się przesiąść przy rondzie. Za pięć minut dojadę do kina.", "Yes, but I have to change at the roundabout. I'll get to the cinema in five minutes."],
    ["Ola", "Dobrze. Jak przyjdziesz, wejdź głównym wejściem. Czekam przy kasie.", "OK. When you get here, come in through the main entrance. I'm waiting by the ticket desk."],
    ["Tomek", "A jeśli film już się zacznie?", "And if the film has already started?"],
    ["Ola", "To wejdziemy po cichu!", "Then we'll go in quietly!"]
  ],
  partner: "Ola",
  scenario: "Ola is waiting for you at the cinema and calls to ask where you are. Explain your way: when you left, where you change, when you'll arrive and which entrance you'll use.",
  writing: { prompt: "Describe your way to work or school today: when you left, how you got there, where you changed and when you arrived (5 sentences).",
    model: "Dzisiaj wyszedłem z domu o siódmej trzydzieści. Poszedłem na przystanek i wsiadłem do tramwaju. W centrum przesiadłem się do autobusu. Wysiadłem przed biurem i przeszedłem przez ulicę. Do pracy przyszedłem dziesięć minut za wcześnie." },
  read: { kind: "sign", title: "Centrum handlowe „Galeria”", body: ["Wejście główne – od ulicy Długiej", "Wjazd na parking – poziom −1", "Wyjazd z parkingu – ulica Krótka", "Przejście do dworca – tunel, poziom 0", "Wyjście ewakuacyjne"],
    q: [{ q: "Where is the main entrance?", o: ["on Długa Street", "on Krótka Street", "in the tunnel"], a: 0 }, { q: "How do you get to the station?", o: ["through the tunnel on level 0", "through the car park", "via the main entrance"], a: 0 }, { q: "Where do cars leave the car park?", o: ["on Krótka Street", "on Długa Street", "on level −1"], a: 0 }] },
  cloze: "Rano {{wyszedłem|wszedłem|przyszedłem}} z domu o siódmej. Na przystanku {{wsiadłem|wysiadłem|przesiadłem}} do tramwaju. W centrum musiałem {{przejść|wejść|wyjść}} przez most. Do biura {{przyszedłem|wyszedłem|odszedłem}} punktualnie o ósmej."
},
{
  id: 38, pl: "Media i internet", en: "Media and the internet", tag: "media", tagLabel: "Media, and reporting what someone said",
  focus: "mowa zależna · he says that…",
  vocab: [
    ["artykuł", "article"], ["czasopismo", "magazine"], ["tygodnik", "weekly (magazine)"], ["prasa", "the press"], ["portal informacyjny", "news website"], ["nagłówek", "headline"],
    ["redakcja", "editorial office, newsroom"], ["kanał", "channel"], ["audycja", "radio programme"], ["podcast", "podcast"], ["na żywo", "live"], ["transmisja", "broadcast"],
    ["w radiu", "on the radio"], ["w telewizji", "on TV"], ["w gazecie", "in the paper"], ["w internecie", "online"], ["komentarz", "comment"], ["polubić", "to like (a post)"],
    ["udostępnić", "to share (a post)"], ["wpis", "post (online)"], ["obserwować", "to follow; to observe"], ["źródło", "source"], ["fałszywa wiadomość", "fake news"],
    ["rzecznik", "spokesperson"], ["potwierdzić", "to confirm"], ["zdrożeć", "to go up in price"], ["mówi, że…", "says that…"], ["pyta, czy…", "asks whether…"], ["prosi, żeby…", "asks (someone) to…"]
  ],
  grammar: {
    title: "Reporting: mówi, że… / pyta, czy… / prosi, żeby…",
    html: `<p>To pass on what someone said, Polish keeps <b>the original tense</b> and changes only the person:</p>
<ul><li>statements: <b>że</b> — Marek: „Jestem zmęczony.” → <b>Marek mówi, że jest zmęczony.</b></li>
<li>yes / no questions: <b>czy</b> — „Masz czas?” → <b>Pyta, czy mam czas.</b></li>
<li>other questions keep their question word — „Gdzie mieszkasz?” → <b>Pyta, gdzie mieszkam.</b></li>
<li>requests: <b>żeby</b> + past form — „Zadzwoń jutro!” → <b>Prosi, żebym zadzwonił / zadzwoniła jutro.</b></li></ul>
<p>Unlike English, the tense doesn't shift back: <b>Powiedział, że jest zmęczony</b> = He said he <i>was</i> tired.</p>
<p>Topics take <b>o</b> + locative: <b>artykuł o polityce</b>, <b>program o zwierzętach</b>. Where: <b>w radiu, w telewizji, w gazecie, w internecie</b>.</p>`,
    table: { head: ["what they said", "reported"], rows: [
      ["„Jestem zmęczony.”", "Mówi, że jest zmęczony."], ["„Czy masz czas?”", "Pyta, czy mam czas."], ["„Gdzie mieszkasz?”", "Pyta, gdzie mieszkam."],
      ["„Zadzwoń jutro!”", "Prosi, żebym zadzwonił jutro."], ["„Będzie padać.”", "W radiu mówią, że będzie padać."]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "Marek mówi, ___ jest zmęczony.", h: "that", a: ["że"], en: "Marek says that he's tired." },
    { t: "fill", q: "Ola pyta, ___ mam czas.", h: "whether", a: ["czy"], en: "Ola is asking whether I have time." },
    { t: "fill", q: "Mama prosi, ___ zadzwonił wieczorem.", h: "(that) I", a: ["żebym"], en: "Mum is asking me to call in the evening." },
    { t: "fill", q: "Oglądam mecz na ___.", h: "live", a: ["żywo"], en: "I'm watching the match live." },
    { t: "choice", q: "„Gdzie mieszkasz?” → Pyta, ___.", o: ["gdzie mieszkam", "gdzie mieszkasz", "czy mieszkam"], a: 0 },
    { t: "choice", q: "Ewa: „Jestem w domu.” → Ewa mówi, że ___ w domu.", o: ["jest", "była", "jestem"], a: 0 },
    { t: "choice", q: "Czytałem artykuł o ___.", o: ["polityce", "polityka", "polityką"], a: 0 },
    { t: "choice", q: "W ___ mówili, że jutro będzie padać.", o: ["radiu", "radio", "radiem"], a: 0 },
    { t: "choice", q: "A magazine that comes out every week:", o: ["tygodnik", "dziennik", "nagłówek"], a: 0 },
    { t: "choice", q: "Before you share a story, check the…", o: ["źródło", "kanał", "wpis"], a: 0 },
    { t: "order", a: "W internecie piszą że koncert jest odwołany", en: "Online they say the concert is cancelled." },
    { t: "order", a: "Szef pyta czy możemy przyjść wcześniej", en: "The boss is asking whether we can come earlier." }
  ],
  dialogue: [
    ["Ewa", "Czytałeś dzisiaj wiadomości?", "Have you read the news today?"],
    ["Marek", "Tylko nagłówki na portalu. Co się stało?", "Only the headlines on a news site. What's happened?"],
    ["Ewa", "Piszą, że od marca bilety na tramwaj będą droższe.", "They say that from March tram tickets will be more expensive."],
    ["Marek", "Naprawdę? A w radiu mówili, że ceny się nie zmienią.", "Really? On the radio they said prices wouldn't change."],
    ["Ewa", "Sprawdź źródło. Artykuł jest w „Gazecie Krakowskiej”, a rzecznik miasta to potwierdził.", "Check the source. The article is in the Gazeta Krakowska, and the city spokesperson confirmed it."],
    ["Marek", "Szkoda. A pytałaś szefa, czy firma płaci za bilety?", "Pity. Did you ask the boss whether the company pays for tickets?"],
    ["Ewa", "Tak. Powiedział, że zapyta w kadrach.", "Yes. He said he'd ask HR."]
  ],
  partner: "Ewa",
  scenario: "Ewa tells you some news. Ask where she read it, say what you heard elsewhere, and report what other people said or asked (mówi, że…; pyta, czy…; prosi, żeby…).",
  writing: { prompt: "Write a short message to a friend passing on some news you read or heard: what happened, where you read or heard it, what people say and what you think (4–5 sentences).",
    model: "Cześć! Czytałem w internecie, że od marca bilety będą droższe. W radiu mówili, że bilet jednorazowy będzie kosztował sześć złotych. Myślę, że to za dużo. Pytałem szefa, czy firma płaci za bilety, ale jeszcze nie wiem. Pozdrawiam!" },
  read: { kind: "press", title: "Gazeta Krakowska · Miasto", body: ["Od marca droższe bilety", "Od 1 marca bilet jednorazowy w Krakowie będzie kosztował 6 złotych, a nie 4,60 zł. Bilet miesięczny zdrożeje o 10 złotych.", "Studenci i emeryci nadal będą mieli 50 procent zniżki.", "Jak mówi rzecznik MPK, pieniądze pójdą na nowe tramwaje."],
    q: [{ q: "How much will a single ticket cost?", o: ["6 zł", "4,60 zł", "10 zł"], a: 0 }, { q: "Who will still have a discount?", o: ["students and pensioners", "children only", "nobody"], a: 0 }, { q: "What will the money pay for?", o: ["new trams", "new buses", "cheaper monthly tickets"], a: 0 }] },
  cloze: "W telewizji mówili, {{że|czy|żeby}} jutro będzie ładna pogoda. Mama pyta, {{czy|że|żeby}} przyjdę na obiad. Szef prosi, {{żebym|że|czy}} przyszedł wcześniej. Czytam ciekawy artykuł o {{zdrowiu|zdrowie|zdrowiem}}."
},
{
  id: 39, pl: "Zdrowy styl życia", en: "A healthy lifestyle", tag: "lifestyle", tagLabel: "Advice, and comparing how you do things",
  focus: "powinieneś · zdrowiej, częściej",
  vocab: [
    ["zdrowy styl życia", "a healthy lifestyle"], ["odżywiać się", "to eat (nutrition)", "zdrowo się odżywiać"], ["fast food", "fast food"], ["ćwiczenia", "exercise(s)"],
    ["joga", "yoga"], ["rozciąganie", "stretching"], ["kontuzja", "injury"], ["skręcić kostkę", "to sprain an ankle"], ["odpoczynek", "rest"], ["stres", "stress"],
    ["wysypiać się", "to get enough sleep", "perf. wyspać się"], ["nawyk", "habit"], ["ruszać się", "to move, be active"], ["krok / kroki", "step / steps"],
    ["powinieneś / powinnaś", "you should (m / f)"], ["Lepiej nie…", "Better not…"], ["za dużo", "too much"], ["za mało", "too little"],
    ["zdrowiej", "more healthily"], ["częściej", "more often"], ["rzadziej", "less often"], ["dłużej", "longer"], ["regularnie", "regularly"], ["ulotka", "leaflet"],
    ["dawkowanie", "dosage"], ["na czczo", "on an empty stomach"], ["przed jedzeniem / po jedzeniu", "before / after meals"], ["na dobę", "per day (24 h)"]
  ],
  grammar: {
    title: "Advice: powinieneś… and comparing how: zdrowiej, częściej",
    html: `<p><b>powinien</b> (should) has its own personal forms and is followed by an infinitive: <b>Powinieneś więcej spać. Powinnam pić więcej wody.</b></p>
<p>Impersonal advice works for everyone: <b>trzeba</b> (one must), <b>warto</b> (it's worth), <b>lepiej</b> (better) + infinitive: <b>Lepiej nie jeść wieczorem. Warto spacerować codziennie.</b></p>
<p>To compare <b>how</b> you do something, adverbs change like adjectives: <b>zdrowo → zdrowiej</b>, <b>często → częściej</b>, <b>rzadko → rzadziej</b>, <b>długo → dłużej</b>, <b>szybko → szybciej</b>, and the irregular <b>dobrze → lepiej</b>, <b>dużo → więcej</b>, <b>mało → mniej</b>. Long adverbs use <b>bardziej</b>: <b>bardziej regularnie</b>.</p>
<p><b>za</b> + adverb means too much: <b>Pracujesz za dużo. Śpisz za mało.</b></p>`,
    table: { head: ["", "man", "woman"], rows: [
      ["ja", "powinienem", "powinnam"], ["ty", "powinieneś", "powinnaś"], ["on / ona / pan / pani", "powinien", "powinna"],
      ["my", "powinniśmy", "powinnyśmy"], ["wy", "powinniście", "powinnyście"], ["oni / one", "powinni", "powinny"]
    ], pl: [1, 2] }
  },
  quiz: [
    { t: "fill", q: "Jesteś zmęczona. ___ wcześniej chodzić spać.", h: "you should (f)", a: ["Powinnaś", "powinnaś"], en: "You're tired. You should go to bed earlier." },
    { t: "fill", q: "On ___ rzucić palenie.", h: "should", a: ["powinien"], en: "He should give up smoking." },
    { t: "fill", q: "Teraz jem ___ niż kiedyś.", h: "zdrowo (more)", a: ["zdrowiej"], en: "Now I eat more healthily than before." },
    { t: "fill", q: "Chodzę na siłownię coraz ___.", h: "często (more)", a: ["częściej"], en: "I go to the gym more and more often." },
    { t: "fill", q: "Skręciłem ___ i nie mogę chodzić.", h: "ankle", a: ["kostkę"], en: "I sprained my ankle and can't walk." },
    { t: "choice", q: "(a woman about herself) Lekarz mówi, że ___ pić więcej wody.", o: ["powinnam", "powinnaś", "powinien"], a: 0 },
    { t: "choice", q: "Śpię za mało. Powinienem spać ___.", o: ["dłużej", "długi", "dłuższy"], a: 0 },
    { t: "choice", q: "___ nie jeść słodyczy wieczorem.", o: ["Lepiej", "Lepszy", "Dobry"], a: 0 },
    { t: "choice", q: "Tabletki trzeba brać ___ jedzeniu.", o: ["po", "za", "od"], a: 0 },
    { t: "choice", q: "Pracujesz ___ dużo! Odpocznij trochę.", o: ["za", "bardzo", "coraz"], a: 0 },
    { t: "order", a: "Powinnaś jeść więcej warzyw i owoców", en: "You should eat more vegetables and fruit." },
    { t: "order", a: "Teraz biegam częściej niż rok temu", en: "Now I run more often than a year ago." }
  ],
  dialogue: [
    ["Tomek", "Ostatnio ciągle jestem zmęczony.", "Lately I'm always tired."],
    ["Kasia", "Ile śpisz?", "How much do you sleep?"],
    ["Tomek", "Pięć, sześć godzin. Pracuję do późna i piję dużo kawy.", "Five, six hours. I work late and drink a lot of coffee."],
    ["Kasia", "To za mało! Powinieneś spać dłużej i pić mniej kawy.", "That's too little! You should sleep longer and drink less coffee."],
    ["Tomek", "Wiem. Lekarz powiedział, że powinienem też więcej się ruszać.", "I know. The doctor said I should also move more."],
    ["Kasia", "Chodź ze mną na jogę! Ja ćwiczę trzy razy w tygodniu i czuję się dużo lepiej.", "Come to yoga with me! I exercise three times a week and feel much better."],
    ["Tomek", "Dobrze, ale najpierw muszę się wyspać!", "OK, but first I need a good sleep!"]
  ],
  partner: "Kasia",
  scenario: "Kasia is a fitness trainer. Tell her about your habits (sleep, food, sport, stress); she gives advice, and you compare how things are now: jem zdrowiej, śpię dłużej, ćwiczę częściej.",
  writing: { prompt: "Write advice for a friend who is always tired and stressed: what he or she should and shouldn't do (5 sentences with powinieneś / powinnaś and comparative adverbs).",
    model: "Powinnaś spać dłużej, przynajmniej siedem godzin. Lepiej nie pić kawy wieczorem. Powinnaś częściej chodzić na spacery i jeść więcej warzyw. Warto też zacząć ćwiczyć jogę. Zobaczysz, że będziesz się czuła lepiej!" },
  read: { kind: "leaflet", title: "Ulotka: Bólex 200 mg · Dawkowanie", body: ["💊 Dorośli: 1–2 tabletki co 6 godzin.", "⏱️ Nie więcej niż 6 tabletek na dobę.", "🍽️ Przyjmować po jedzeniu, popijając wodą.", "🚫 Nie stosować u dzieci poniżej 12 lat.", "🚗 Lek nie wpływa na prowadzenie samochodu."],
    q: [{ q: "How often can an adult take it?", o: ["every 6 hours", "once a day", "every 2 hours"], a: 0 }, { q: "When should you take it?", o: ["after meals", "on an empty stomach", "before bed"], a: 0 }, { q: "Who mustn't take it?", o: ["children under 12", "drivers", "adults"], a: 0 }] },
  cloze: "Ja {{powinienem|powinien|powinni}} więcej się ruszać. Teraz biegam {{częściej|często|najczęściej}} niż kiedyś i jem {{zdrowiej|zdrowo|zdrowy}}. Śpię też {{dłużej|długo|dłuższy}}, bo chodzę spać przed jedenastą."
},
{
  id: 40, pl: "Reklamacja", en: "Making a complaint", tag: "complaint", tagLabel: "Complaints, services and żeby",
  focus: "żeby · I want you to…",
  vocab: [
    ["złożyć reklamację", "to make a complaint (about a product)"], ["gwarancja", "guarantee, warranty"], ["zepsuty", "broken"], ["uszkodzony", "damaged"], ["zniszczony", "ruined, worn out"],
    ["wymiana", "exchange"], ["wymienić", "to exchange, replace"], ["zwrot pieniędzy", "refund"], ["zwrócić", "to return, give back"], ["naprawić", "to repair"], ["serwis", "service centre"],
    ["zakład fotograficzny", "photo studio"], ["zdjęcie do paszportu", "passport photo"], ["zatankować", "to fill up (the car)"], ["szewc", "shoemaker, cobbler"], ["krawiec", "tailor", "u krawca"],
    ["skrócić", "to shorten"], ["ściąć włosy", "to have a haircut / cut hair"], ["niezadowolony", "dissatisfied"], ["rozczarowany", "disappointed"], ["Jestem niezadowolony z…", "I'm not happy with… (+ gen.)"],
    ["Proszę o zwrot pieniędzy.", "I'd like a refund, please."], ["To nie moja wina.", "It's not my fault."], ["Przepraszamy za kłopot.", "We apologise for the trouble."], ["kierownik sklepu", "store manager"],
    ["Biuro Obsługi Klienta", "customer service desk"], ["w ciągu 14 dni", "within 14 days"], ["czajnik", "kettle"], ["towar", "goods"], ["sklep internetowy", "online shop"]
  ],
  grammar: {
    title: "żeby + past form: I want you to…",
    html: `<p>When you want <b>someone else</b> to do something, use <b>żeby</b> + the past form of the verb. The person ending goes on <b>żeby</b>:</p>
<ul><li><b>Chcę, żebyś mi pomógł.</b> (I want you to help me.)</li><li><b>Proszę, żeby pan to naprawił.</b> (Please repair it, sir.)</li>
<li><b>Szef chce, żebym przyszła wcześniej.</b> (The boss wants me to come earlier.)</li><li><b>Prosimy, żeby Państwo wymienili towar.</b></li></ul>
<p>If it's the <b>same person</b>, use the infinitive: <b>Chcę oddać buty</b> (I want to return the shoes).</p>
<p>Complaining politely: <b>Chciałbym złożyć reklamację. Jestem niezadowolony z tej usługi. Proszę o wymianę / o zwrot pieniędzy.</b></p>`,
    table: { head: ["", "żeby + past", "example"], rows: [
      ["ja", "żebym zrobił(a)", "Szef chce, żebym przyszedł wcześniej."], ["ty", "żebyś zrobił(a)", "Chcę, żebyś mi pomógł."], ["on / ona / pan / pani", "żeby zrobił(a)", "Proszę, żeby pan to naprawił."],
      ["my", "żebyśmy zrobili", "Chcą, żebyśmy poczekali."], ["wy", "żebyście zrobili", "Prosimy, żebyście nie palili."], ["oni / Państwo", "żeby zrobili", "Proszę, żeby Państwo oddali pieniądze."]
    ], pl: [1, 2] }
  },
  quiz: [
    { t: "fill", q: "Proszę, ___ pan to naprawił.", h: "żeby", a: ["żeby"], en: "Please repair it." },
    { t: "fill", q: "Szef chce, ___ przyszedł wcześniej.", h: "(that) I", a: ["żebym"], en: "The boss wants me to come earlier." },
    { t: "fill", q: "Chcę, ___ mi pomogła.", h: "(that) you", a: ["żebyś"], en: "I want you to help me." },
    { t: "fill", q: "Proszę o ___ pieniędzy.", h: "refund", a: ["zwrot"], en: "I'd like a refund, please." },
    { t: "choice", q: "Chciałbym ___ reklamację.", o: ["złożyć", "zrobić", "dać"], a: 0 },
    { t: "choice", q: "Te buty są ___ – podeszwa się odkleiła.", o: ["uszkodzone", "uszkodzony", "uszkodzona"], a: 0 },
    { t: "choice", q: "Where do you get your trousers shortened?", o: ["u krawca", "u szewca", "w pralni"], a: 0 },
    { t: "choice", q: "Where do you fill up the car?", o: ["na stacji benzynowej", "w zakładzie fotograficznym", "u fryzjera"], a: 0 },
    { t: "choice", q: "Klient chce, żeby sklep ___ pieniądze.", o: ["zwrócił", "zwróci", "zwrócić"], a: 0 },
    { t: "choice", q: "Jestem niezadowolony ___ tej usługi.", o: ["z", "o", "na"], a: 0 },
    { t: "order", a: "Proszę żeby pan wymienił ten telefon", en: "Please exchange this phone." },
    { t: "order", a: "Chcę oddać te buty bo są zniszczone", en: "I want to return these shoes because they're worn out." }
  ],
  dialogue: [
    ["Marko", "Dzień dobry. Chciałbym złożyć reklamację. Kupiłem ten czajnik tydzień temu i już nie działa.", "Hello. I'd like to make a complaint. I bought this kettle a week ago and it already doesn't work."],
    ["Pani Kowalska", "Ma pan paragon?", "Do you have the receipt?"],
    ["Marko", "Tak, proszę. Czajnik ma dwa lata gwarancji.", "Yes, here. The kettle has a two-year guarantee."],
    ["Pani Kowalska", "Możemy go wysłać do serwisu. Naprawa trwa około dwóch tygodni.", "We can send it to the service centre. A repair takes about two weeks."],
    ["Marko", "Dwa tygodnie? Wolałbym, żeby pani wymieniła go na nowy albo zwróciła pieniądze.", "Two weeks? I'd rather you exchanged it for a new one or gave me a refund."],
    ["Pani Kowalska", "Zapytam kierownika… Kierownik się zgadza. Wymienimy go od razu.", "I'll ask the manager… The manager agrees. We'll exchange it straight away."],
    ["Marko", "Dziękuję bardzo!", "Thank you very much!"]
  ],
  partner: "Pani Kowalska",
  scenario: "You bought something that broke after a week. Pani Kowalska is the shop assistant. Explain the problem, show the receipt and say what you want them to do (Proszę, żeby…). Stay polite but firm.",
  writing: { prompt: "Write a formal complaint email: what you bought or ordered and when, what's wrong, and what you want the company to do (use żeby; 5–6 sentences).",
    model: "Szanowni Państwo,\n15 marca kupiłem w Państwa sklepie pralkę. Po tygodniu pralka przestała działać. Serwis powiedział, że naprawa potrwa miesiąc. Proszę, żeby Państwo wymienili pralkę na nową albo zwrócili pieniądze. W załączniku przesyłam paragon.\nZ poważaniem,\nMarko Jović" },
  read: { kind: "email", title: "Reklamacja – zamówienie nr 4512", body: ["Szanowni Państwo,", "10 maja zamówiłam w Państwa sklepie internetowym niebieską sukienkę w rozmiarze M.", "Wczoraj dostałam sukienkę w kolorze czerwonym i w rozmiarze L.", "Proszę, żeby Państwo wymienili towar albo zwrócili pieniądze.", "Z poważaniem,", "Ana Petrović"],
    q: [{ q: "What did Ana order?", o: ["a blue dress, size M", "a red dress, size L", "a blue dress, size L"], a: 0 }, { q: "What did she receive?", o: ["a red dress, size L", "nothing", "the right dress"], a: 0 }, { q: "What does she want?", o: ["an exchange or a refund", "a discount", "a second dress"], a: 0 }] },
  cloze: "Kupiłem buty, które po tygodniu były {{zniszczone|zniszczony|zniszczona}}. Poszedłem do sklepu, żeby złożyć {{reklamację|reklamacja|reklamacji}}. Poprosiłem, żeby sprzedawca {{zwrócił|zwróci|zwrócić}} mi pieniądze. Kierownik powiedział, że {{wymienią|wymieni|wymienić}} buty na nowe."
},
{
  id: 41, pl: "Przyroda", en: "Nature", tag: "nature", tagLabel: "Nature, and if-sentences",
  focus: "jeśli / gdyby · if",
  vocab: [
    ["roślina", "plant"], ["róża", "rose"], ["tulipan", "tulip"], ["trawa", "grass"], ["liść", "leaf", "⚠ SR list = leaf; Polish list = letter"], ["krzak", "bush"],
    ["grzyb", "mushroom", "zbierać grzyby"], ["sosna", "pine"], ["świerk", "spruce"], ["dąb", "oak"], ["brzoza", "birch"], ["chomik", "hamster"], ["papuga", "parrot"],
    ["królik", "rabbit"], ["kura", "hen"], ["sarna", "roe deer"], ["niedźwiedź", "bear"], ["wilk", "wolf"], ["lis", "fox"], ["bocian", "stork"], ["dolina", "valley"],
    ["wzgórze", "hill"], ["szczyt", "peak, summit"], ["brzeg", "shore, bank"], ["staw", "pond"], ["wodospad", "waterfall"], ["skała", "rock"], ["tęcza", "rainbow"],
    ["sadzić", "to plant"], ["podlewać", "to water (plants)"], ["jeśli", "if (real)"], ["gdyby", "if (imagined)", "Gdybym miał czas…"]
  ],
  grammar: {
    title: "If: jeśli (real) and gdyby (imagined)",
    html: `<p><b>jeśli / jeżeli</b> is for <b>real</b> possibilities. Use normal tenses: <b>Jeśli jutro będzie ładnie, pojedziemy nad jezioro.</b> <b>Jeśli zobaczysz sarnę, zrób zdjęcie!</b></p>
<p><b>gdyby</b> is for <b>imagined</b> situations. It works like <b>żeby</b>: the person ending goes on <b>gdyby</b> and the verb is in the past form; the other half is in the conditional (<b>-bym</b>): <b>Gdybym miał czas, pojechałbym w góry.</b> <b>Gdyby było cieplej, poszlibyśmy na spacer.</b></p>`,
    table: { head: ["real (jeśli)", "imagined (gdyby)"], rows: [
      ["Jeśli będzie ładnie, pójdziemy na spacer.", "Gdyby było ładnie, poszlibyśmy na spacer."], ["Jeśli mam czas, pracuję w ogrodzie.", "Gdybym miał ogród, sadziłbym róże."],
      ["Jeśli pojedziesz w góry, zobaczysz wodospad.", "Gdybyś mieszkał na wsi, miałbyś psa?"]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "Jeśli jutro ___ ładna pogoda, pojedziemy nad jezioro.", h: "być (future)", a: ["będzie"], en: "If the weather is nice tomorrow, we'll go to the lake." },
    { t: "fill", q: "___ miał czas, pojechałbym w góry.", h: "if I (imagined)", a: ["Gdybym", "gdybym"], en: "If I had time, I'd go to the mountains." },
    { t: "fill", q: "Gdybyś mieszkał na wsi, ___ psa?", h: "mieć (would you, m)", a: ["miałbyś"], en: "If you lived in the country, would you have a dog?" },
    { t: "fill", q: "Jesienią zbieramy ___ w lesie.", h: "mushrooms", a: ["grzyby"], en: "In autumn we pick mushrooms in the forest." },
    { t: "choice", q: "Gdyby było ciepło, ___ na spacer.", o: ["poszlibyśmy", "pójdziemy", "idziemy"], a: 0 },
    { t: "choice", q: "___ będzie padać, zostaniemy w domu.", o: ["Jeśli", "Gdyby", "Żeby"], a: 0 },
    { t: "choice", q: "Which one is a tree?", o: ["brzoza", "tulipan", "grzyb"], a: 0 },
    { t: "choice", q: "The bird that comes back to Poland every spring:", o: ["bocian", "wilk", "lis"], a: 0 },
    { t: "choice", q: "Po deszczu na niebie była ___.", o: ["tęcza", "trawa", "skała"], a: 0 },
    { t: "choice", q: "Codziennie ___ kwiaty w ogrodzie.", o: ["podlewam", "sadzę się", "zbieram się"], a: 0 },
    { t: "order", a: "Gdybym miał ogród sadziłbym róże", en: "If I had a garden, I'd plant roses." },
    { t: "order", a: "Jeśli zobaczysz sarnę zrób zdjęcie", en: "If you see a deer, take a photo." }
  ],
  dialogue: [
    ["Tomek", "Jeśli w sobotę będzie ładnie, pojedziemy do Ojcowa?", "If it's nice on Saturday, shall we go to Ojców?"],
    ["Ola", "Chętnie! Są tam piękne doliny i skały. A w lasach obok parku można zbierać grzyby.", "Gladly! There are beautiful valleys and rocks. And you can pick mushrooms in the forests next to the park."],
    ["Tomek", "Prognoza mówi, że rano będzie mgła, ale po południu słonecznie.", "The forecast says it'll be foggy in the morning but sunny in the afternoon."],
    ["Ola", "Super. Gdybym miała więcej czasu, zostałabym tam na cały weekend.", "Great. If I had more time, I'd stay there the whole weekend."],
    ["Tomek", "Ja też. Gdybyśmy mieli samochód, pojechalibyśmy jeszcze nad jezioro.", "Me too. If we had a car, we'd go on to a lake too."],
    ["Ola", "Następnym razem! Weźmy kanapki i aparat.", "Next time! Let's take sandwiches and a camera."]
  ],
  partner: "Tomek",
  scenario: "Tomek is planning a trip to the countryside. Talk about the forecast, the plants and animals you might see, and what you'd do: Jeśli będzie ładnie, … / Gdybyśmy mieli czas, …",
  writing: { prompt: "Describe a place in nature you like (where it is, what you can see there, which animals and plants live there) and say what you would do if you had a free week there (5–6 sentences).",
    model: "Bardzo lubię Tatry. Są tam wysokie szczyty, zielone doliny i czyste jeziora. W lasach rosną sosny i świerki, a czasem można zobaczyć sarnę albo nawet niedźwiedzia. Gdybym miał wolny tydzień, codziennie chodziłbym po górach. Wieczorem odpoczywałbym w schronisku." },
  read: { kind: "sign", title: "Ojcowski Park Narodowy · Regulamin", body: ["🚶 Chodzimy tylko po oznakowanych szlakach.", "🐕 Psy tylko na smyczy.", "🔥 Zakaz rozpalania ognisk.", "🍄 Zbieranie roślin i grzybów jest zabronione.", "🗑️ Śmieci zabieramy ze sobą."],
    q: [{ q: "What may you NOT do in the park?", o: ["pick plants and mushrooms", "walk on marked trails", "bring a dog"], a: 0 }, { q: "Dogs must…", o: ["be on a lead", "stay at home", "be small"], a: 0 }, { q: "What do you do with your rubbish?", o: ["take it with you", "burn it", "leave it in a bin on the trail"], a: 0 }] },
  cloze: "{{Jeśli|Gdyby|Żeby}} jutro będzie padać, zostaniemy w domu. {{Gdybym|Jeśli|Żebym}} mieszkał na wsi, miałbym psa i {{kury|kur|kurami}}. Wiosną w naszym ogrodzie kwitną {{tulipany|tulipanów|tulipanami}}."
},
{
  id: 42, pl: "Opowiadam historię", en: "Telling a story", tag: "story", tagLabel: "Telling a story",
  focus: "opowiadanie · first, then, suddenly",
  vocab: [
    ["nagle", "suddenly"], ["na szczęście", "luckily"], ["po chwili", "after a moment"], ["następnie", "next, then"], ["w tym momencie", "at that moment"], ["wydarzenie", "event"],
    ["przygoda", "adventure"], ["ukraść", "to steal", "ukradł, ukradła"], ["złodziej", "thief"], ["kradzież", "theft"], ["zgłosić", "to report (to the police)"], ["świadek", "witness"],
    ["zauważyć", "to notice"], ["okazać się", "to turn out", "Okazało się, że…"], ["przestraszyć się", "to get scared"], ["zdziwić się", "to be surprised"], ["ucieszyć się", "to be pleased"],
    ["zdenerwować się", "to get upset"], ["krzyknąć", "to shout (once)"], ["schować się", "to hide"], ["zanieść", "to take (somewhere, carrying)"], ["tłok", "crowd, crush"],
    ["Wyobraź sobie…", "Imagine…"], ["Co się stało?", "What happened?"], ["opowiadać / opowiedzieć", "to tell (a story)"], ["śmieszna historia", "a funny story"], ["na koniec", "at the end"]
  ],
  grammar: {
    title: "Telling a story: scene and events",
    html: `<p>A story needs both aspects. The <b>imperfective</b> sets the scene: what was going on, the weather, how long (<b>padał deszcz, było ciemno, czekaliśmy długo</b>). The <b>perfective</b> moves the story on: each new event (<b>wysiadłem, zauważyłem, zadzwoniłem</b>).</p>
<p>A typical pattern: <b>Kiedy szedłem do pracy</b> (scene), <b>nagle zobaczyłem…</b> (event).</p>
<p>Words that organise a story: <b>najpierw, potem, następnie, nagle, po chwili, w tym momencie, na szczęście, niestety, w końcu, na koniec</b>. And to keep a listener interested: <b>Wyobraź sobie…</b> <b>Okazało się, że…</b></p>`,
    table: { head: ["scene (imperfective)", "event (perfective)"], rows: [
      ["Kiedy szedłem do pracy,", "spotkałem kolegę."], ["Padał deszcz,", "więc wziąłem parasol."], ["Czekaliśmy godzinę,", "a potem autobus w końcu przyjechał."], ["Kiedy jadłam kolację,", "ktoś zadzwonił do drzwi."]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "___ zobaczyłem, że nie mam portfela.", h: "suddenly", a: ["Nagle", "nagle"], en: "Suddenly I saw I didn't have my wallet." },
    { t: "fill", q: "Na ___ policjant znalazł mój portfel.", h: "luckily", a: ["szczęście"], en: "Luckily, a policeman found my wallet." },
    { t: "fill", q: "Złodziej ___ mi telefon w tramwaju.", h: "ukraść (past, he)", a: ["ukradł"], en: "A thief stole my phone on the tram." },
    { t: "choice", q: "Kiedy ___ do domu, zaczął padać deszcz.", o: ["szedłem", "poszedłem", "pójdę"], a: 0 },
    { t: "choice", q: "Czekaliśmy długo, a potem autobus w końcu ___.", o: ["przyjechał", "przyjeżdżał", "przyjeżdża"], a: 0 },
    { t: "choice", q: "Kiedy jadłam kolację, ktoś ___ do drzwi.", o: ["zadzwonił", "dzwonił", "dzwoni"], a: 0 },
    { t: "choice", q: "\"It turned out that…\"", o: ["Okazało się, że…", "Zdarzyło się, że…", "Wyobraź się, że…"], a: 0 },
    { t: "choice", q: "Someone who saw what happened:", o: ["świadek", "złodziej", "kierowca"], a: 0 },
    { t: "choice", q: "Najpierw poszliśmy do kina, ___ do restauracji.", o: ["potem", "nagle", "wcześniej"], a: 0 },
    { t: "choice", q: "Kiedy ___ na autobus, zaczął padać deszcz.", o: ["czekałem", "poczekałem", "zaczekam"], a: 0 },
    { t: "order", a: "Kiedy wracałem do domu spotkałem starego kolegę", en: "As I was coming home, I met an old friend." },
    { t: "order", a: "Na szczęście wszystko skończyło się dobrze", en: "Luckily, everything ended well." }
  ],
  dialogue: [
    ["Ewa", "Co się stało? Wyglądasz na zdenerwowanego.", "What happened? You look upset."],
    ["Marek", "Wyobraź sobie, wczoraj, kiedy jechałem tramwajem, ktoś ukradł mi portfel!", "Imagine, yesterday, while I was on the tram, someone stole my wallet!"],
    ["Ewa", "Nie! Jak to się stało?", "No! How did it happen?"],
    ["Marek", "Był tłok, wszyscy stali blisko. Kiedy wysiadłem, nagle zauważyłem, że nie mam portfela.", "It was crowded, everyone was standing close. When I got off, I suddenly noticed I didn't have my wallet."],
    ["Ewa", "Zgłosiłeś to na policję?", "Did you report it to the police?"],
    ["Marek", "Tak, od razu. A wieczorem zadzwonił policjant. Okazało się, że ktoś znalazł portfel na przystanku!", "Yes, straight away. And in the evening a policeman called. It turned out someone had found the wallet at a tram stop!"],
    ["Ewa", "Na szczęście! A pieniądze?", "Luckily! And the money?"],
    ["Marek", "Niestety pieniędzy już nie było, ale dokumenty były w środku.", "Unfortunately the money was gone, but the documents were inside."]
  ],
  partner: "Ewa",
  scenario: "Ewa wants to hear a story: tell her about something unusual that happened to you (a lost thing, a surprise, a funny situation). Use najpierw, potem, nagle, na szczęście and both aspects.",
  writing: { prompt: "Describe a situation (opis sytuacji): something surprising that happened to you or someone you know. Say where and when, what was going on, what happened next and how it ended (7–8 sentences).",
    model: "W zeszłym roku pojechałem z kolegą w góry. Kiedy szliśmy szlakiem, nagle zaczęła się burza. Było ciemno i mocno padał deszcz. Najpierw schowaliśmy się pod drzewem, ale potem zobaczyliśmy małe schronisko. Weszliśmy do środka i okazało się, że właścicielka jest bardzo miła. Zrobiła nam herbatę i zupę. Po godzinie burza się skończyła. Na szczęście wszystko skończyło się dobrze!" },
  read: { kind: "press", title: "Kronika policyjna", body: ["Złodziej złapany po pięciu minutach", "Wczoraj około 18:00 w tramwaju linii 8 mężczyzna ukradł pasażerce telefon. Kiedy tramwaj stał na przystanku, złodziej wybiegł.", "Na szczęście świadek zauważył, w którą stronę uciekł, i zadzwonił na policję.", "Po chwili policjanci zatrzymali złodzieja w parku. Telefon wrócił do właścicielki."],
    q: [{ q: "What was stolen?", o: ["a phone", "a wallet", "a bag"], a: 0 }, { q: "Who helped catch the thief?", o: ["a witness", "the tram driver", "the woman herself"], a: 0 }, { q: "Where was the thief caught?", o: ["in a park", "on the tram", "at the station"], a: 0 }] },
  cloze: "Wczoraj, kiedy {{szłam|poszłam|pójdę}} do pracy, padał deszcz. Nagle {{zobaczyłam|widziałam|widzę}} na chodniku portfel. W środku {{były|był|było}} dokumenty i pieniądze. Od razu {{zaniosłam|nosiłam|niosę}} go na policję."
},
{
  id: 43, pl: "Kultura", en: "Culture", tag: "culture", tagLabel: "Culture, years and opinions",
  focus: "rok i wiek · in 1989, in the 19th century",
  vocab: [
    ["kultura", "culture"], ["sztuka", "art; a play (theatre)", "a different meaning from sztuka = item"], ["reżyser", "(film) director"], ["rola", "role"], ["komedia", "comedy"], ["dramat", "drama"], ["horror", "horror film"],
    ["film dokumentalny", "documentary"], ["powieść", "novel"], ["pisarz / pisarka", "writer (m / f)"], ["wiersz", "poem"], ["poeta / poetka", "poet (m / f)"], ["kompozytor", "composer"],
    ["malarz / malarka", "painter (m / f)"], ["galeria", "gallery"], ["opera", "opera"], ["balet", "ballet"], ["spektakl", "performance, show"], ["premiera", "premiere"],
    ["widz / widzowie", "viewer / audience"], ["recenzja", "review"], ["wzruszający", "moving, touching"], ["wiek", "century; age", "w XIX wieku"], ["repertuar", "what's on (programme)"],
    ["Jak ci się podobał?", "How did you like it? (m)"], ["Warto zobaczyć.", "It's worth seeing."]
  ],
  grammar: {
    title: "Years and centuries: w 1989 roku, w XIX wieku",
    html: `<p>"In (a year)" is <b>w</b> + locative + <b>roku</b>. Only the <b>last number</b> is an ordinal that declines; the rest stays as it is: <b>w 1989 roku</b> = <b>w tysiąc dziewięćset osiemdziesiątym dziewiątym roku</b>, <b>w 2025 roku</b> = <b>w dwa tysiące dwudziestym piątym roku</b>.</p>
<p>A full date uses the genitive: <b>siódmego listopada tysiąc osiemset sześćdziesiątego siódmego roku</b> (7 November 1867). "Since" is <b>od</b> + genitive: <b>od 1999 roku</b>.</p>
<p>Centuries are written in Roman numerals: <b>w XIX wieku</b> = w dziewiętnastym wieku.</p>
<p>Giving an opinion: <b>Moim zdaniem… Podobał mi się, bo… Nie podobało mi się, że… Polecam, bo… Warto zobaczyć / przeczytać.</b></p>`,
    table: { head: ["written", "said"], rows: [
      ["w 1989 roku", "w tysiąc dziewięćset osiemdziesiątym dziewiątym roku"], ["w 2004 roku", "w dwa tysiące czwartym roku"], ["w 2025 roku", "w dwa tysiące dwudziestym piątym roku"],
      ["od 1999 roku", "od tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku"], ["w XIX wieku", "w dziewiętnastym wieku"], ["7.11.1867", "siódmego listopada tysiąc osiemset sześćdziesiątego siódmego roku"]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "Chopin urodził się w 1810 ___.", h: "year", a: ["roku"], en: "Chopin was born in 1810." },
    { t: "fill", q: "Ten film bardzo mi się ___.", h: "podobać (past, he)", a: ["podobał"], en: "I liked this film a lot." },
    { t: "fill", q: "___ zdaniem to najlepsza polska komedia.", h: "In my", a: ["Moim", "moim"], en: "In my opinion it's the best Polish comedy." },
    { t: "choice", q: "w 1989 roku =", o: ["w tysiąc dziewięćset osiemdziesiątym dziewiątym roku", "w tysiąc dziewięćset osiemdziesiąt dziewięć roku", "w tysiącu dziewięćset osiemdziesiątym dziewiątym roku"], a: 0 },
    { t: "choice", q: "w XIX wieku =", o: ["w dziewiętnastym wieku", "w dziewiętnaście wieku", "w dziewiętnastu wiekach"], a: 0 },
    { t: "choice", q: "Maria Skłodowska-Curie urodziła się ___ listopada 1867 roku.", o: ["siódmego", "siódmy", "siódmym"], a: 0 },
    { t: "choice", q: "Someone who writes novels:", o: ["pisarz", "malarz", "reżyser"], a: 0 },
    { t: "choice", q: "Someone who directs films:", o: ["reżyser", "aktor", "widz"], a: 0 },
    { t: "choice", q: "Warto zobaczyć ten spektakl, ___ aktorzy grają świetnie.", o: ["bo", "żeby", "czy"], a: 0 },
    { t: "choice", q: "Polecam tę ___ – jest bardzo wzruszająca.", o: ["książkę", "książka", "książki"], a: 0 },
    { t: "order", a: "Ten film podobał mi się bo był zabawny", en: "I liked this film because it was funny." },
    { t: "order", a: "Moim zdaniem warto przeczytać tę powieść", en: "In my opinion this novel is worth reading." }
  ],
  dialogue: [
    ["Kasia", "Jak ci się podobał film?", "How did you like the film?"],
    ["Marek", "Bardzo! Moim zdaniem to najlepszy polski film w tym roku. Aktorzy grali świetnie.", "A lot! In my opinion it's the best Polish film this year. The actors were excellent."],
    ["Kasia", "Mnie trochę mniej. Był za długi i na początku trochę nudny.", "I liked it a bit less. It was too long and a bit boring at the start."],
    ["Marek", "Ale koniec był wzruszający! Ten reżyser zrobił też film o Chopinie w dwa tysiące dziesiątym roku.", "But the ending was moving! That director also made a film about Chopin in 2010."],
    ["Kasia", "Nie widziałam go. Warto?", "I haven't seen it. Is it worth it?"],
    ["Marek", "Warto, szczególnie jeśli lubisz muzykę. A w sobotę idziemy na wystawę obrazów Wyspiańskiego?", "Yes, especially if you like music. And are we going to the Wyspiański exhibition on Saturday?"],
    ["Kasia", "Chętnie! Wyspiański to mój ulubiony malarz.", "Gladly! Wyspiański is my favourite painter."]
  ],
  partner: "Kasia",
  scenario: "You've just seen a film or an exhibition with Kasia. Give your opinion with reasons, disagree politely, and talk about famous Poles and when they lived (w XIX wieku, w 1867 roku).",
  writing: { prompt: "Write a short review (opinia) of a film, book or concert: what it is, when and where you saw or read it, what you liked or didn't, and whether you recommend it and why (5–6 sentences).",
    model: "W zeszłym tygodniu obejrzałem w kinie nowy polski film „Ostatni dzwonek”. To komedia o nauczycielu, który wygrywa na loterii. Aktorzy grali bardzo dobrze, a muzyka była świetna. Moim zdaniem początek był trochę nudny, ale koniec był wzruszający. Polecam ten film, bo jest zabawny i mądry." },
  read: { kind: "timetable", title: "Teatr im. Juliusza Słowackiego · Repertuar", body: ["Data | Spektakl | Godzina", "pt. 14.03 | „Wesele” – premiera | 19:00", "sob. 15.03 | „Wesele” | 19:00", "ndz. 16.03 | Balet „Dziadek do orzechów” | 17:00", "wt. 18.03 | „Pan Tadeusz” – dla szkół | 11:00"],
    q: [{ q: "When is the premiere of „Wesele”?", o: ["Friday 14 March", "Saturday 15 March", "Sunday 16 March"], a: 0 }, { q: "What's on on Sunday?", o: ["a ballet", "an opera", "„Wesele”"], a: 0 }, { q: "Who is the Tuesday show for?", o: ["school groups", "children under 5", "everyone"], a: 0 }] },
  cloze: "Fryderyk Chopin urodził się w {{tysiąc|tysiącu|tysiąca}} osiemset dziesiątym roku. W {{dziewiętnastym|dziewiętnaście|dziewiętnastu}} wieku był najsłynniejszym polskim {{kompozytorem|kompozytor|kompozytora}}. Jego muzyka bardzo mi się {{podoba|podobam|lubi}}."
},
{
  id: 44, pl: "Szkoła i nauka", en: "School and studying", tag: "school", tagLabel: "School, and verbs with fixed cases",
  focus: "rekcja · uczyć się czego, interesować się czym",
  vocab: [
    ["przedmiot", "(school) subject"], ["matematyka", "maths"], ["fizyka", "physics"], ["chemia", "chemistry"], ["biologia", "biology"], ["geografia", "geography"],
    ["wychowanie fizyczne (WF)", "PE"], ["informatyka", "IT, computer science"], ["ocena", "mark, grade"], ["szóstka", "a 6 (top mark)"], ["piątka", "a 5 (very good)"],
    ["trójka", "a 3 (satisfactory)"], ["jedynka", "a 1 (fail)"], ["świadectwo", "school report"], ["sprawdzian", "test"], ["praca domowa", "homework"], 
    ["dzwonek", "bell"], ["szkoła podstawowa", "primary school"], ["liceum", "secondary school"], ["wykład", "lecture"], ["stypendium", "scholarship"], ["kurs", "course"],
    ["zapisać się na", "to sign up for (+ acc.)"], ["przygotowywać się do", "to prepare for (+ gen.)"], ["zdać egzamin", "to pass an exam"], ["oblać", "to fail (an exam, colloquial)"],
    ["zajmować się", "to deal with, work in (+ instr.)"], ["wymagający", "demanding"], ["legitymacja studencka", "student ID"]
  ],
  grammar: {
    title: "Verbs and their cases (rekcja)",
    html: `<p>Every verb takes a fixed case, so learn verbs with their question word:</p>
<ul><li><b>uczyć się</b> czego? (genitive): <b>Uczę się polskiego.</b> · <b>uczyć</b> kogo? czego?: <b>Uczę dzieci matematyki.</b></li>
<li><b>interesować się</b>, <b>zajmować się</b> czym? (instrumental): <b>Interesuję się historią. Zajmuję się marketingiem.</b></li>
<li><b>przygotowywać się do</b> czego?: <b>Przygotowuję się do egzaminu.</b> · <b>zdać egzamin z</b> czego?: <b>Zdałem egzamin z fizyki.</b></li>
<li><b>studiować</b> co? (accusative): <b>Studiuję prawo.</b> · <b>zapisać się na</b> co?: <b>Zapisałam się na kurs.</b></li></ul>
<p>Polish school grades go from <b>1 to 6</b>: 6 celujący (<b>szóstka</b>), 5 bardzo dobry (<b>piątka</b>), 4 dobry (<b>czwórka</b>), 3 dostateczny (<b>trójka</b>), 2 dopuszczający (<b>dwójka</b>), 1 niedostateczny (<b>jedynka</b>). "A 5 in maths" is <b>piątka z matematyki</b>.</p>`,
    table: { head: ["verb", "question", "example"], rows: [
      ["uczyć się", "czego?", "Uczę się polskiego."], ["uczyć", "kogo? czego?", "Uczę dzieci matematyki."], ["interesować się", "czym?", "Interesuję się historią."], ["zajmować się", "czym?", "Zajmuję się marketingiem."],
      ["przygotowywać się do", "czego?", "Przygotowuję się do egzaminu."], ["zdać egzamin z", "czego?", "Zdałem egzamin z fizyki."], ["studiować", "co?", "Studiuję prawo."], ["zapisać się na", "co?", "Zapisałam się na kurs."]
    ], pl: [0, 2] }
  },
  quiz: [
    { t: "fill", q: "Uczę się ___.", h: "język polski", a: ["języka polskiego", "polskiego"], en: "I'm learning Polish." },
    { t: "fill", q: "Interesuję się ___.", h: "historia", a: ["historią"], en: "I'm interested in history." },
    { t: "fill", q: "Przygotowuję się do ___.", h: "egzamin", a: ["egzaminu"], en: "I'm preparing for the exam." },
    { t: "fill", q: "Zdałem egzamin z ___.", h: "fizyka", a: ["fizyki"], en: "I passed the physics exam." },
    { t: "choice", q: "Moja żona uczy dzieci ___.", o: ["matematyki", "matematykę", "matematyką"], a: 0 },
    { t: "choice", q: "Zapisałam się ___ kurs tańca.", o: ["na", "do", "w"], a: 0 },
    { t: "choice", q: "Studiuję ___.", o: ["prawo", "prawa", "prawem"], a: 0 },
    { t: "choice", q: "The best mark in a Polish school:", o: ["szóstka (6)", "jedynka (1)", "piątka (5)"], a: 0 },
    { t: "choice", q: "The document you get at the end of the school year:", o: ["świadectwo", "sprawdzian", "wykład"], a: 0 },
    { t: "choice", q: "Zajmuję się ___ w dużej firmie.", o: ["marketingiem", "marketing", "marketingu"], a: 0 },
    { t: "order", a: "Mój syn dostał szóstkę z matematyki", en: "My son got a 6 in maths." },
    { t: "order", a: "Uczę się polskiego żeby studiować w Krakowie", en: "I'm learning Polish so that I can study in Kraków." }
  ],
  dialogue: [
    ["Ewa", "Kuba przyniósł dzisiaj świadectwo.", "Kuba brought his school report home today."],
    ["Marek", "I jak? Jakie ma oceny?", "And? What marks has he got?"],
    ["Ewa", "Z matematyki i z fizyki ma piątki, a z historii szóstkę!", "He has 5s in maths and physics, and a 6 in history!"],
    ["Marek", "Brawo! A z angielskiego?", "Well done! And in English?"],
    ["Ewa", "Niestety tylko trójkę. Mówi, że nauczycielka jest bardzo wymagająca.", "Unfortunately only a 3. He says the teacher is very demanding."],
    ["Marek", "Może zapiszemy go na kurs angielskiego w wakacje?", "Shall we sign him up for an English course in the holidays?"],
    ["Ewa", "Dobry pomysł. I tak interesuje się filmami po angielsku.", "Good idea. He's interested in English-language films anyway."]
  ],
  partner: "Ewa",
  scenario: "Ewa asks about your school days and studies: favourite and least favourite subjects, your marks, what you studied and what you're learning now. Use verbs with their cases: uczyć się czego, interesować się czym.",
  writing: { prompt: "Fill in this course questionnaire about yourself.",
    form: ["Imię i nazwisko", "Wiek", "Wykształcenie", "Zawód", "Od kiedy uczy się Pan / Pani polskiego?", "Dlaczego uczy się Pan / Pani polskiego?", "Co jest dla Pana / Pani najtrudniejsze?", "Ulubiony przedmiot w szkole"],
    model: "Imię i nazwisko: Marko Jović · Wiek: 32 · Wykształcenie: wyższe, ekonomia · Zawód: księgowy · Od kiedy uczy się Pan / Pani polskiego?: od września · Dlaczego uczy się Pan / Pani polskiego?: bo mieszkam w Krakowie i chcę zdać egzamin · Co jest dla Pana / Pani najtrudniejsze?: aspekt i wymowa · Ulubiony przedmiot w szkole: historia" },
  read: { kind: "form", title: "ANKIETA · Kurs języka polskiego", body: ["Imię i nazwisko: Ivan Petrović", "Wiek: 34", "Wykształcenie: wyższe (inżynier)", "Od kiedy uczy się Pan polskiego?: od roku", "Cel nauki: praca w Polsce, egzamin B1", "Co sprawia Panu największą trudność?: przypadki, wymowa", "Ocena kursu (1–6): 5"],
    q: [{ q: "Why is Ivan learning Polish?", o: ["for work and the B1 exam", "for his studies", "for holidays"], a: 0 }, { q: "What does he find hardest?", o: ["cases and pronunciation", "vocabulary", "writing"], a: 0 }, { q: "What mark does he give the course?", o: ["5 – very good", "6 – excellent", "3 – satisfactory"], a: 0 }] },
  cloze: "Mój brat studiuje {{prawo|prawa|prawem}} na Uniwersytecie Warszawskim. Interesuje się {{historią|historia|historii}} i polityką. Teraz przygotowuje się do {{egzaminu|egzamin|egzaminem}}. Wczoraj dostał piątkę z {{ekonomii|ekonomia|ekonomię}}."
},
{
  id: 45, pl: "Ludzie i relacje", en: "People and relationships", tag: "people", tagLabel: "Describing people and explaining words",
  focus: "ktoś, kto… · someone who, something you…",
  vocab: [
    ["przyjaźń", "friendship"], ["zakochać się w", "to fall in love with (+ loc.)"], ["chodzić z kimś", "to go out with someone"], ["rozstać się", "to break up"],
    ["pokłócić się", "to have an argument"], ["pogodzić się", "to make up"], ["zaufanie", "trust"], ["szanować", "to respect"], ["wspierać", "to support"], ["zazdrosny", "jealous"],
    ["wierny", "faithful, loyal"], ["egoista / egoistka", "selfish person (m / f)"], ["życzliwy", "kind, friendly"], ["szczery", "sincere, honest"], ["uparty", "stubborn"],
    ["towarzyski", "sociable"], ["rozmowny", "talkative"], ["bałaganiarz", "messy person"], ["humor", "mood; humour", "mieć dobry humor"], ["ktoś, kto…", "someone who…"],
    ["coś, czym…", "something (that) you … with"], ["miejsce, gdzie…", "a place where…"], ["to samo co", "the same as"], ["przeciwieństwo", "the opposite"],
    ["Jak to się nazywa?", "What's it called?"], ["korkociąg", "corkscrew"], ["współlokator / współlokatorka", "flatmate (m / f)"]
  ],
  grammar: {
    title: "Explaining a word you don't know",
    html: `<p>When you don't know a word, describe it. These patterns use <b>kto</b> and <b>co</b>, which decline like the question words:</p>
<ul><li><b>To jest ktoś, kto…</b> (someone who): <b>To jest ktoś, kto naprawia samochody.</b> (mechanik) · <b>ktoś, kogo…</b> (someone whom): <b>ktoś, kogo bardzo lubię</b></li>
<li><b>To jest coś, czym…</b> (something you … with): <b>To jest coś, czym kroimy chleb.</b> (nóż) · <b>coś, w czym…</b>: <b>coś, w czym gotujemy zupę</b> (garnek)</li>
<li><b>To jest miejsce, gdzie…</b>: <b>miejsce, gdzie można pożyczyć książki</b> (biblioteka)</li>
<li>synonyms and opposites: <b>„Sympatyczny” to to samo co „miły”. „Wesoły” to przeciwieństwo „smutnego”.</b></li></ul>
<p>A good character portrait (<b>charakterystyka</b>) goes: appearance → character traits → an example for each trait (<b>Jest cierpliwy: nigdy się nie denerwuje.</b>) → why the person matters to you.</p>`,
    table: { head: ["pattern", "example", "word"], rows: [
      ["ktoś, kto…", "To jest ktoś, kto naprawia samochody.", "mechanik"], ["coś, czym…", "To jest coś, czym kroimy chleb.", "nóż"], ["coś, w czym…", "To jest coś, w czym gotujemy zupę.", "garnek"],
      ["miejsce, gdzie…", "To jest miejsce, gdzie można pożyczyć książki.", "biblioteka"], ["to samo co", "„Sympatyczny” to to samo co „miły”.", "synonim"], ["przeciwieństwo", "„Wesoły” to przeciwieństwo „smutnego”.", "antonim"]
    ], pl: [0, 1, 2] }
  },
  quiz: [
    { t: "fill", q: "To jest ktoś, ___ uczy dzieci.", h: "who", a: ["kto"], en: "It's someone who teaches children." },
    { t: "fill", q: "To jest coś, ___ kroimy chleb.", h: "with which", a: ["czym"], en: "It's something we cut bread with." },
    { t: "fill", q: "To jest miejsce, ___ można kupić leki.", h: "where", a: ["gdzie"], en: "It's a place where you can buy medicine." },
    { t: "fill", q: "Ona jest bardzo ___ – zawsze mówi prawdę.", h: "sincere", a: ["szczera"], en: "She's very sincere – she always tells the truth." },
    { t: "choice", q: "„Sympatyczny” to to samo co…", o: ["miły", "smutny", "leniwy"], a: 0 },
    { t: "choice", q: "The opposite of „towarzyski” (sociable):", o: ["nieśmiały", "życzliwy", "rozmowny"], a: 0 },
    { t: "choice", q: "Pokłócili się, ale potem się ___.", o: ["pogodzili", "rozstali", "zakochali"], a: 0 },
    { t: "choice", q: "Zakochał się ___ koleżance z pracy.", o: ["w", "na", "do"], a: 0 },
    { t: "choice", q: "To jest ktoś, ___ bardzo lubię.", o: ["kogo", "kto", "komu"], a: 0 },
    { t: "choice", q: "To jest osoba, ___ mogę wszystko powiedzieć.", o: ["której", "którą", "która"], a: 0 },
    { t: "order", a: "To jest ktoś kto naprawia samochody", en: "It's someone who repairs cars." },
    { t: "order", a: "Mój najlepszy przyjaciel jest szczery i życzliwy", en: "My best friend is sincere and kind." }
  ],
  dialogue: [
    ["Marko", "Jak to się nazywa po polsku… To jest coś, czym się otwiera wino.", "What's it called in Polish… It's something you open wine with."],
    ["Ola", "Korkociąg!", "A corkscrew!"],
    ["Marko", "Tak, korkociąg. A ktoś, kto zawsze się uśmiecha i chętnie pomaga, jest… życzliwy?", "Yes, a corkscrew. And someone who always smiles and is happy to help is… życzliwy?"],
    ["Ola", "Tak, życzliwy albo sympatyczny. To prawie to samo.", "Yes, życzliwy or sympatyczny. They're almost the same."],
    ["Marko", "A jak się mówi o kimś, kto zawsze chce mieć rację?", "And what do you call someone who always wants to be right?"],
    ["Ola", "Że jest uparty. Jak mój brat! Ale to dobry człowiek: szczery i zawsze pomaga przyjaciołom.", "That they're stubborn. Like my brother! But he's a good person: honest and always helps his friends."]
  ],
  partner: "Ola",
  scenario: "Ola helps you practise explaining words you don't know: describe objects, places and people with ktoś, kto… / coś, czym… / miejsce, gdzie…, and then describe a good friend's character with examples.",
  writing: { prompt: "Write a character portrait (charakterystyka) of a friend or relative: appearance, character with an example for each trait, what you do together and why the person is important to you (7–8 sentences).",
    model: "Moim najlepszym przyjacielem jest Nikola. Jest wysoki, ma krótkie ciemne włosy i zawsze się uśmiecha. Jest bardzo towarzyski: zna wszystkich w naszej dzielnicy. Jest też szczery – zawsze mówi, co myśli, nawet kiedy to nie jest miłe. Czasem jest uparty i trudno z nim wygrać dyskusję. Kiedy mam problem, zawsze mi pomaga. Razem gramy w piłkę i oglądamy mecze. Jest dla mnie ważny, bo jest jak brat." },
  read: { kind: "email", title: "Od: Ania · Temat: Mój nowy współlokator", body: ["Cześć Kasiu!", "Od miesiąca mieszkam z Piotrem. To ktoś, kto zawsze ma dobry humor i dużo mówi – jest bardzo towarzyski.", "Ma tylko jedną wadę: jest okropnym bałaganiarzem! Zostawia brudne naczynia w kuchni.", "Ale jest życzliwy: kiedy byłam chora, robił mi zakupy i gotował zupę.", "Myślę, że zostaniemy przyjaciółmi. Ściskam, Ania"],
    q: [{ q: "What is Piotr like?", o: ["sociable and talkative", "shy and quiet", "always sad"], a: 0 }, { q: "What's his fault?", o: ["he's very messy", "he's selfish", "he never talks"], a: 0 }, { q: "What did he do when Ania was ill?", o: ["did her shopping and made soup", "called a doctor", "nothing"], a: 0 }] },
  cloze: "Moja przyjaciółka to ktoś, {{kto|co|który}} zawsze mi pomaga. Jest bardzo {{szczera|szczery|szczere}} i nigdy nie kłamie. Czasem się {{kłócimy|kłócić|kłóci}}, ale szybko się godzimy. To osoba, {{której|którą|która}} mogę wszystko powiedzieć."
}
];

const NEW_CAN_DO_A2B = {
  36: ["Understand job adverts and talk about your experience in an interview", "Say which person or thing you mean with który (the one who / which)"],
  37: ["Say how you get in, out, across and to places, on foot or by vehicle", "Describe a journey: leaving, changing and arriving"],
  38: ["Talk about news, the press, TV and the internet", "Report what someone said or asked: mówi, że…; pyta, czy…"],
  39: ["Talk about a healthy lifestyle, sport and minor injuries; read a medicine leaflet", "Give advice with powinieneś / powinnaś and compare how you do things: zdrowiej, częściej"],
  40: ["Complain about a product or service and ask for a repair, exchange or refund", "Say what you want someone else to do: Proszę, żeby pan…"],
  41: ["Name common plants, animals and features of the landscape", "Say what will happen if… (jeśli) and what would happen if… (gdyby)"],
  42: ["Tell the story of something that happened: the scene, the events and the ending", "Organise a story with najpierw, potem, nagle, na szczęście, w końcu"],
  43: ["Talk about films, books, music and art, and give your opinion with reasons", "Say years and centuries: w 1989 roku, w XIX wieku"],
  44: ["Talk about school, studies, subjects and marks; fill in a questionnaire", "Use common verbs with the right case: uczyć się czego, interesować się czym"],
  45: ["Describe someone's character in detail, with examples (charakterystyka)", "Explain a word you don't know: ktoś, kto… / coś, czym… / miejsce, gdzie…"]
};
const NEW_CAN_DO_A1B = {
  34: ["Talk about groups: with friends, in shops, about the holidays (plural cases)", "Say where people live in countries with plural names: w Niemczech, we Włoszech"],
  35: ["Use adjectives, ten and jeden in every case: mam starszego brata, w dużym mieście", "Understand a lost-and-found notice"]
};
const SR_NOTES_2 = {
  34: `<p>Plural endings are close to Serbian: <i>-ima / -ama</i> → <b>-ami</b> (<i>sa prijateljima</i> → <b>z przyjaciółmi</b>), and the locative <i>u prodavnicama</i> → <b>w sklepach</b>. The big difference is the dative: Serbian uses the same <i>-ima</i>, Polish has its own <b>-om</b>: <b>dzieciom, rodzicom</b>.</p>`,
  35: `<p>Adjective endings map neatly onto Serbian long forms: <i>-og</i> → <b>-ego</b> (<i>starijeg brata</i> → <b>starszego brata</b>), <i>-om</i> → <b>-ym / -ej</b> (<i>u velikom gradu</i> → <b>w dużym mieście</b>, <i>u maloj kući</i> → <b>w małym domu</b>). Watch the feminine accusative of "this": <b>tę</b>, not <i>tu</i>.</p>`,
  36: `<p><b>który</b> = <i>koji</i>, and it declines the same way: <i>firma u kojoj radim</i> → <b>firma, w której pracuję</b>. Polish always puts a comma before it. Use <b>który</b>, not <b>co</b>, in writing: <b>człowiek, który…</b></p>`,
  37: `<p>Serbian puts the same prefixes on <i>ići</i>: <i>ući, izaći, doći, otići, proći</i>. Polish also splits them by walking or riding: <b>wejść / wjechać</b>, <b>wyjść / wyjechać</b>. Map the prefixes: <i>u-</i> → <b>w-</b>, <i>iz-</i> → <b>wy-</b>, <i>do-</i> (come) → <b>przy-</b>. Polish <b>dojść</b> means to <b>reach</b> a place.</p>`,
  38: `<p>Reporting works as in Serbian: <i>Kaže da je umoran</i> → <b>Mówi, że jest zmęczony</b>, and the tense doesn't shift. But Serbian <i>da</i> becomes <b>że</b> for statements, <b>czy</b> for yes / no questions (<i>pita da li…</i> → <b>pyta, czy…</b>) and <b>żeby</b> for requests (<i>moli da dođem</i> → <b>prosi, żebym przyszedł</b>).</p>`,
  39: `<p><b>powinieneś</b> = <i>trebalo bi da…</i>, but Polish uses a personal form + infinitive: <i>Treba da spavaš više</i> → <b>Powinieneś więcej spać</b>. Comparative adverbs end in <b>-iej / -ej</b> where Serbian has <i>-ije / -e</i>: <i>zdravije</i> → <b>zdrowiej</b>, <i>češće</i> → <b>częściej</b>, <i>duže</i> → <b>dłużej</b>.</p>`,
  40: `<p>Serbian <i>da</i> + present (<i>Hoću da mi pomogneš</i>) becomes <b>żeby</b> + past form: <b>Chcę, żebyś mi pomógł</b>. The person ending goes on <b>żeby</b>: <b>żebym, żebyś</b>. Same person? Use the infinitive: <b>Chcę oddać buty</b>.</p>`,
  41: `<p><b>jeśli</b> = <i>ako</i>; <b>gdyby</b> = <i>kad bi / ako bi</i>: <i>Kad bih imao vremena, išao bih</i> → <b>Gdybym miał czas, poszedłbym</b>. The endings go on <b>gdyby</b> (gdyby<b>m</b>, gdyby<b>ś</b>), as on żeby. False friend: <b>liść</b> is a leaf; a Polish <b>list</b> is a letter.</p>`,
  42: `<p>Storytelling works like Serbian: imperfective for the scene (<i>padala je kiša</i> → <b>padał deszcz</b>), perfective for events (<i>odjednom sam primetio</i> → <b>nagle zauważyłem</b>). Polish has no aorist or pluperfect in everyday speech: one past tense does it all. <b>Okazało się, że…</b> = <i>ispostavilo se da…</i></p>`,
  43: `<p>As in Serbian, only the last number of a year is an ordinal: <i>1989. godine</i> → <b>w 1989 roku</b>. Polish adds the preposition <b>w</b> + locative, where Serbian uses the genitive alone. Centuries: <i>u XIX veku</i> → <b>w XIX wieku</b>.</p>`,
  44: `<p>Watch the cases: Serbian <i>učim srpski</i> uses the accusative, but Polish <b>uczyć się</b> takes the genitive: <b>uczę się polskiego</b>. <i>interesovati se za</i> + accusative → <b>interesować się</b> + instrumental: <b>historią</b>. Polish school marks go <b>1–6</b>, with 6 the best; Serbian schools use 1–5.</p>`,
  45: `<p><b>ktoś, kto</b> = <i>neko ko</i>; <b>coś, czym</b> = <i>nešto čime</i>: <i>nešto čime se otvara vino</i> → <b>coś, czym się otwiera wino</b>. Careful with <b>uważny</b> (careful, attentive) — it has nothing to do with <i>uvažavati</i> (to respect).</p>`
};
const LISTEN_Q_2 = {
  36: [["Why does Marko want this job?", "it's interesting and close to home", "the pay is good", "a friend works there"], ["What did he do before?", "he was an accountant at a furniture company", "he was a driver", "he sold furniture in a shop"], ["When could he start?", "on 1 March", "next week", "in three months"]],
  37: [["Why is Tomek late?", "he left home late, looking for his keys", "the tram broke down", "he was at work"], ["Where does he have to change?", "at the roundabout", "at the station", "in the centre"], ["Where will Ola be waiting?", "by the ticket desk", "outside", "in her seat"]],
  38: [["What's the news about?", "tram tickets will be more expensive", "a new tram line", "a strike"], ["What did Marek hear on the radio?", "that prices wouldn't change", "the same news", "nothing"], ["Who will ask HR about tickets?", "the boss", "Ewa", "Marek"]],
  39: [["What's Tomek's problem?", "he's always tired", "he has a headache", "he can't find work"], ["How long does he sleep?", "five or six hours", "eight hours", "ten hours"], ["What does Kasia invite him to?", "yoga", "the gym", "running"]],
  40: [["What's wrong with the kettle?", "it doesn't work", "it's the wrong colour", "it's too small"], ["How long would a repair take?", "about two weeks", "one day", "a month"], ["What happens in the end?", "they exchange it straight away", "they send it for repair", "he gets a refund"]],
  41: [["Where do they want to go on Saturday?", "to Ojców", "to the seaside", "to Kraków"], ["What will the weather be like?", "foggy in the morning, sunny in the afternoon", "rain all day", "snow"], ["What would Ola do if she had more time?", "stay there all weekend", "go to the lake", "stay at home"]],
  42: [["What happened to Marek?", "his wallet was stolen on a tram", "he lost his keys", "he had an accident"], ["Where was the wallet found?", "at a tram stop", "in a park", "on the tram"], ["What was missing from the wallet?", "the money", "the documents", "nothing"]],
  43: [["What did Marek think of the film?", "the best Polish film this year", "boring", "too short"], ["What didn't Kasia like?", "it was too long and slow at the start", "the ending", "the actors"], ["What are they doing on Saturday?", "going to an exhibition of Wyspiański's paintings", "going to the cinema again", "going to a concert"]],
  44: [["What did Kuba bring home?", "his school report", "a test", "a book"], ["What mark did he get in history?", "6", "5", "3"], ["What do they plan for the holidays?", "an English course", "a trip abroad", "a history camp"]],
  45: [["What is Marko describing first?", "a corkscrew", "a knife", "a bottle"], ["How does Ola describe her brother?", "stubborn, but honest and helpful", "lazy", "shy"], ["Which word means almost the same as „życzliwy”?", "sympatyczny", "uparty", "szczery"]]
};
