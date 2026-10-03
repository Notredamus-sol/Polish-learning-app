/* New A2 units (ids 29–33), added to match the adult A2 standard in
   Dz.U. 2025 poz. 217, załącznik nr 1, część II D. */
const NEW_UNITS_A2 = [
{
  id: 29, pl: "Chciałbym…", en: "I'd like…", tag: "cond", tagLabel: "The conditional (tryb przypuszczający)",
  focus: "tryb przypuszczający · would",
  vocab: [
    ["chciałbym / chciałabym", "I'd like (m / f)"], ["mógłbym / mogłabym", "I could (m / f)"], ["wolałbym / wolałabym", "I'd prefer (m / f)"],
    ["Czy mógłby pan…?", "Could you… (to a man)?"], ["Czy mogłaby pani…?", "Could you… (to a woman)?"], ["Co by pani poleciła?", "What would you recommend? (to a woman)"],
    ["karta", "menu"], ["przystawka", "starter"], ["zupa", "soup"], ["danie główne", "main course"], ["deser", "dessert"], ["napój", "drink"],
    ["talerz", "plate"], ["widelec", "fork"], ["nóż", "knife"], ["łyżka", "spoon"], ["łyżeczka", "teaspoon"], ["szklanka", "glass (for water)"],
    ["kieliszek", "wine glass"], ["serwetka", "napkin"], ["kelner / kelnerka", "waiter / waitress"], ["stolik", "table (in a restaurant)"],
    ["zarezerwować", "to book, reserve"], ["zamówić", "to order"], ["napiwek", "tip"], ["smaczny", "tasty"], ["słony", "salty"], ["ostry", "spicy"],
    ["wegetariański", "vegetarian"], ["mieć nadzieję", "to hope", "Mam nadzieję, że…"], ["Smacznego!", "Enjoy your meal!"]
  ],
  grammar: {
    title: "The conditional: would",
    html: `<p>The conditional is built from the <b>past tense</b> (the he / she form) + <b>-by-</b> + a personal ending:</p>
<ul><li><b>chciał</b> → <b>chciałbym</b> (I'd like, man), <b>chciała</b> → <b>chciałabym</b> (I'd like, woman)</li>
<li><b>mógł</b> → <b>mógłbym</b>, <b>mogła</b> → <b>mogłabym</b> (I could)</li></ul>
<p>Use it to be <b>polite</b>: <b>Chciałbym zamówić…</b>, <b>Czy mógłby pan podać sól?</b>; for <b>wishes</b>: <b>Chciałabym pojechać do Paryża</b>; and for <b>suggestions</b>: <b>Moglibyśmy pójść do kina.</b></p>
<p>In the plural, <b>-li-</b> is for groups with at least one man and <b>-ły-</b> for other groups: <b>chcielibyśmy</b> / <b>chciałybyśmy</b>.</p>`,
    table: { head: ["", "man / mixed", "woman / other"], rows: [
      ["ja", "chciałbym", "chciałabym"], ["ty", "chciałbyś", "chciałabyś"], ["on / ona", "chciałby", "chciałaby"],
      ["my", "chcielibyśmy", "chciałybyśmy"], ["wy", "chcielibyście", "chciałybyście"], ["oni / one", "chcieliby", "chciałyby"]
    ] }
  },
  quiz: [
    { t: "fill", q: "___ zarezerwować stolik na dwie osoby.", h: "chcieć · ja, man", a: ["chciałbym"], en: "I'd like to book a table for two." },
    { t: "fill", q: "___ zamówić zupę pomidorową.", h: "chcieć · ja, woman", a: ["chciałabym"], en: "I'd like to order tomato soup." },
    { t: "fill", q: "Czy ___ pan podać sól?", h: "móc", a: ["mógłby"], en: "Could you pass the salt?" },
    { t: "fill", q: "My ___ usiąść przy oknie.", h: "chcieć · my, mixed group", a: ["chcielibyśmy"], en: "We'd like to sit by the window." },
    { t: "fill", q: "Co ___ zjeść?", h: "chcieć · ty, woman", a: ["chciałabyś"], en: "What would you like to eat?" },
    { t: "choice", q: "A polite request to a waitress:", o: ["Czy mogłaby pani przynieść rachunek?", "Daj rachunek!", "Chcę rachunek."], a: 0 },
    { t: "choice", q: "You eat soup with a…", o: ["łyżka", "widelec", "nóż"], a: 0 },
    { t: "choice", q: "Ona ___ pojechać do Paryża.", o: ["chciałaby", "chciałby", "chciałabym"], a: 0 },
    { t: "order", a: "Chciałbym zamówić danie wegetariańskie", en: "I'd like to order a vegetarian dish." },
    { t: "order", a: "Czy mógłby pan przynieść kartę", en: "Could you bring the menu, please?" }
  ],
  dialogue: [
    ["Kelnerka", "Dobry wieczór. Czy mają państwo rezerwację?", "Good evening. Do you have a reservation?"],
    ["Gość", "Tak, na nazwisko Novak. Chcielibyśmy stolik przy oknie.", "Yes, in the name of Novak. We'd like a table by the window."],
    ["Kelnerka", "Proszę bardzo. Oto karta. Co podać do picia?", "Of course. Here's the menu. What can I get you to drink?"],
    ["Gość", "Ja poproszę wodę, a żona chciałaby kieliszek białego wina.", "Water for me, and my wife would like a glass of white wine."],
    ["Kelnerka", "A na danie główne?", "And for the main course?"],
    ["Gość", "Wolałbym coś wegetariańskiego. Co by pani poleciła?", "I'd prefer something vegetarian. What would you recommend?"],
    ["Kelnerka", "Pierogi ruskie są bardzo smaczne.", "The pierogi ruskie are very good."]
  ],
  partner: "Kelnerka",
  scenario: "You're at a restaurant in Kraków. Ask for a table, then politely order a starter, main course, drink and dessert with chciałbym / czy mogłaby pani, and ask for the bill.",
  writing: { prompt: "Write what you would like to do next year and where you'd like to travel (4–5 sentences with the conditional).", model: "W przyszłym roku chciałbym pojechać do Polski na dwa tygodnie. Chciałbym zobaczyć Kraków i Gdańsk. Mógłbym też pojechać w góry. Moja żona wolałaby odpocząć nad morzem. Bardzo chcielibyśmy zjeść prawdziwe pierogi!" },
  read: { kind: "menu", title: "Restauracja „Pod Lipą” · KARTA DAŃ", body: ["ZUPY | żurek | 18 zł", "ZUPY | pomidorowa z ryżem | 14 zł", "DANIA GŁÓWNE | pierogi ruskie (wegetariańskie) | 29 zł", "DANIA GŁÓWNE | kotlet schabowy z ziemniakami | 39 zł", "DESERY | sernik | 16 zł", "NAPOJE | kompot | 8 zł", "Obiad dnia (pon.–pt., 12:00–16:00): zupa + danie główne – 35 zł"],
    q: [{ q: "Which main course is vegetarian?", o: ["pierogi ruskie", "kotlet schabowy", "żurek"], a: 0 }, { q: "How much is the lunch of the day?", o: ["35 zł", "39 zł", "29 zł"], a: 0 }, { q: "When can you order the lunch of the day?", o: ["weekdays, 12:00–16:00", "every evening", "only at weekends"], a: 0 }] },
  cloze: "Dzień dobry, {{chciałbym|chciałabyś|chcieliby}} zarezerwować stolik na sobotę. Czy {{mógłby|mógłbym|mogliby}} pan powiedzieć, o której jest wolny stolik? Moja żona {{chciałaby|chciałby|chciałbym}} usiąść przy oknie. My {{chcielibyśmy|chcielibyście|chciałbym}} też zamówić tort."
},
{
  id: 30, pl: "Panowie i panie", en: "Ladies and gentlemen", tag: "mpers", tagLabel: "Men's plurals & the vocative",
  focus: "męskoosobowe · groups of men, calling people",
  vocab: [
    ["panowie", "gentlemen"], ["panie", "ladies"], ["państwo", "ladies and gentlemen; Mr and Mrs", "państwo Kowalscy"], ["Proszę państwa!", "Ladies and gentlemen!"],
    ["koledzy", "colleagues (men or mixed)"], ["koleżanki", "colleagues (women)"], ["studenci", "students (men or mixed)"], ["Polacy", "Poles (men or mixed)"],
    ["lekarze", "doctors (men or mixed)"], ["nauczyciele", "teachers (men or mixed)"], ["sąsiad / sąsiedzi", "neighbour / neighbours"],
    ["dwaj / trzej / czterej", "two / three / four (men)", "+ nominative: dwaj studenci"], ["dwóch / trzech / czterech", "two / three / four (men)", "+ genitive: dwóch studentów"],
    ["pięciu", "five (men)", "+ genitive: pięciu panów"], ["wszyscy", "everyone, all (men or mixed)"], ["wszystkie", "all (women, things)"],
    ["dyrektor", "director, manager"], ["profesor", "professor"], ["zespół", "team"], ["pracownik / pracownica", "employee (m / f)"],
    ["Drogi… / Droga…", "Dear… (informal letter, m / f)"], ["Szanowny Panie / Szanowna Pani", "Dear Sir / Dear Madam"], ["Szanowni Państwo", "Dear Sir or Madam (to a group)"],
    ["Z poważaniem", "Yours sincerely"], ["Panie Marku!", "Marek! (polite, to a man)"], ["Pani Ewo!", "Ewa! (polite, to a woman)"],
    ["swój / swoja / swoje", "one's own"], ["mili", "nice (men or mixed)"], ["zdolni", "talented (men or mixed)"], ["charakter", "character, personality"]
  ],
  grammar: {
    title: "Groups of men, and calling people by name",
    html: `<p><b>Men and mixed groups</b> have their own plural forms (rodzaj męskoosobowy). The noun, adjective and past-tense verb all change:</p>
<ul><li>nouns: <b>student → studenci</b>, <b>Polak → Polacy</b>, <b>kolega → koledzy</b>, <b>pan → panowie</b>, <b>sąsiad → sąsiedzi</b></li>
<li>adjectives: <b>mili, dobrzy, zdolni, nowi</b> (other groups: <b>miłe, dobre, zdolne, nowe</b>)</li>
<li>past tense: <b>byli, mieli</b> (other groups: <b>były, miały</b>)</li></ul>
<p><b>Counting men:</b> <b>dwaj / trzej / czterej</b> + nominative (<b>dwaj studenci</b>), or <b>dwóch / trzech / czterech / pięciu</b> + genitive (<b>dwóch studentów, pięciu panów</b>). Other groups: <b>dwie studentki, cztery stoły</b>.</p>
<p><b>Calling someone</b> uses the vocative: <b>Panie Marku!</b>, <b>Pani Ewo!</b>, <b>Aniu!</b>, <b>Panie profesorze!</b> Letters start with it too: <b>Drogi Marku!</b>, <b>Szanowna Pani!</b></p>
<p><b>swój</b> means "my / your / his own" when it refers back to the subject: <b>Mam swój pokój.</b> <b>Oni przedstawią swoje projekty.</b></p>`,
    table: { head: ["men / mixed", "women / things"], rows: [
      ["Oni są mili.", "One są miłe."], ["dwaj studenci / dwóch studentów", "dwie studentki"], ["Koledzy byli w pracy.", "Koleżanki były w pracy."],
      ["Wszyscy przyszli.", "Wszystkie przyszły."], ["nowi nauczyciele", "nowe nauczycielki"]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "To są moi ___.", h: "kolega", a: ["koledzy"], en: "These are my colleagues." },
    { t: "fill", q: "W pokoju są dwaj ___.", h: "student", a: ["studenci"], en: "There are two students in the room." },
    { t: "fill", q: "Na spotkaniu było pięciu ___.", h: "pan", a: ["panów"], en: "There were five men at the meeting." },
    { t: "fill", q: "Nasi sąsiedzi są bardzo ___.", h: "miły", a: ["mili"], en: "Our neighbours are very nice." },
    { t: "fill", q: "Dzień dobry, panie ___!", h: "Marek, calling him", a: ["Marku"], en: "Good morning, Marek!" },
    { t: "choice", q: "Women only: Koleżanki ___ w pracy.", o: ["były", "byli", "był"], a: 0 },
    { t: "choice", q: "Starting a formal email to a woman:", o: ["Szanowna Pani,", "Cześć Ewa,", "Drogi Panie,"], a: 0 },
    { t: "choice", q: "Proszę ___! (speaking to an audience)", o: ["państwa", "panów", "panie"], a: 0 },
    { t: "order", a: "Wszyscy studenci są dzisiaj na zajęciach", en: "All the students are in class today." },
    { t: "order", a: "Droga Ewo dziękuję za list", en: "Dear Ewa, thank you for the letter." }
  ],
  dialogue: [
    ["Dyrektor", "Proszę państwa, to jest nasz nowy kolega, pan Tom.", "Ladies and gentlemen, this is our new colleague, Tom."],
    ["Ewa", "Witamy! Jestem Ewa, a to są Marek i Piotr. Oni są programistami.", "Welcome! I'm Ewa, and this is Marek and Piotr. They're programmers."],
    ["Tom", "Miło mi. Czy wszyscy pracują w tym biurze?", "Nice to meet you. Does everyone work in this office?"],
    ["Ewa", "Prawie. Dwaj koledzy pracują z domu, a trzy koleżanki są dzisiaj na urlopie.", "Almost. Two colleagues work from home, and three of our female colleagues are on leave today."],
    ["Tom", "Panie Marku, gdzie jest moje biurko?", "Marek, where's my desk?"],
    ["Marek", "Obok mojego. Ale najpierw kawa – mamy tu swój ekspres!", "Next to mine. But coffee first – we have our own coffee machine here!"]
  ],
  partner: "Ewa",
  scenario: "It's your first day in a new office. Ewa introduces the team; ask about your new colleagues and address people politely (Panie…, Pani…).",
  writing: { prompt: "Write a short letter or email to a friend about the people at your work or course: describe two or three of them.", model: "Drogi Marku! W pracy mam bardzo miłych kolegów. Piotr i Adam są programistami. Są zdolni i zawsze pomagają. Moja szefowa, pani Ewa, jest spokojna i bardzo pracowita. Pozdrawiam, Tom" },
  read: { kind: "email", title: "Od: Dział kadr · Temat: Spotkanie zespołu", body: ["Szanowni Państwo,", "w piątek o 10:00 w sali 12 odbędzie się spotkanie zespołu. Wszyscy pracownicy proszeni są o obecność.", "Nowi koledzy, pan Tom Novak i pan Luka Horvat, przedstawią swoje projekty.", "Z poważaniem,", "Anna Wiśniewska"],
    q: [{ q: "When is the meeting?", o: ["Friday at 10:00", "Monday at 12:00", "Friday at 12:00"], a: 0 }, { q: "Who should come?", o: ["all employees", "only the new colleagues", "only managers"], a: 0 }, { q: "What will Tom and Luka do?", o: ["present their projects", "organise the meeting", "work from home"], a: 0 }] },
  cloze: "Moi koledzy z pracy są bardzo {{mili|miłe|miły}}. {{Dwaj|Dwie|Dwa}} z nich mieszkają w Krakowie. Wczoraj wszyscy {{byli|były|był}} na kolacji. Panie {{Piotrze|Piotr|Piotra}}, dziękuję za zaproszenie!"
},
{
  id: 31, pl: "Halo? Zapraszam!", en: "Hello? You're invited!", tag: "invite", tagLabel: "Phone calls, invitations & żeby",
  focus: "telefon i zaproszenia · calls and invitations",
  vocab: [
    ["Halo?", "Hello? (answering the phone)"], ["Słucham.", "Hello. (lit. I'm listening)"], ["Mówi…", "… speaking"], ["Czy mogę rozmawiać z…?", "Can I speak to…?"],
    ["Proszę chwilę poczekać.", "Please hold on a moment."], ["Oddzwonię.", "I'll call back."], ["dzwonić", "to call, phone"], ["komórka", "mobile phone"],
    ["zapraszać / zaprosić", "to invite"], ["zaproszenie", "invitation"], ["impreza", "party"], ["Masz ochotę…?", "Do you feel like…?"], ["Chętnie!", "I'd love to!"],
    ["Z przyjemnością.", "With pleasure."], ["Niestety nie dam rady.", "Sorry, I can't make it."], ["Może innym razem.", "Maybe another time."],
    ["Pasuje ci…?", "Does … suit you?"], ["chyba", "probably, I think"], ["możliwe / niemożliwe", "possible / impossible"], ["raczej nie", "probably not"],
    ["żeby", "in order to, so that"], ["gdy", "when (= kiedy)"], ["albo", "or"], ["dlatego", "that's why"], ["a także", "and also"],
    ["Internet", "the internet"], ["strona internetowa", "website"], ["mejl", "email (informal)"], ["telewizja", "television"], ["gazeta", "newspaper"],
    ["radio", "radio"], ["serial", "TV series"], ["wiadomości", "the news"]
  ],
  grammar: {
    title: "Phone calls, invitations and żeby",
    html: `<p><b>żeby</b> + infinitive means <b>in order to</b>: <b>Dzwonię, żeby zaprosić cię na imprezę.</b> <b>Uczę się polskiego, żeby rozmawiać z rodziną.</b></p>
<p>More A2 linking words: <b>gdy</b> (= kiedy, when), <b>albo</b> (or), <b>dlatego</b> (that's why), <b>a także</b> (and also): <b>Jestem chory, dlatego nie przyjdę.</b></p>
<p><b>Inviting:</b> <b>Zapraszam cię na kolację</b> (na + accusative), <b>Masz ochotę pójść do kina?</b> <b>Accepting:</b> <b>Chętnie! Z przyjemnością!</b> <b>Declining:</b> <b>Niestety nie mogę, bo…</b>, <b>Może innym razem.</b></p>
<p><b>How sure are you?</b> <b>na pewno</b> (definitely), <b>chyba</b> (probably), <b>może</b> (maybe), <b>raczej nie</b> (probably not).</p>
<p><b>On the phone:</b> answer with <b>Halo?</b> or <b>Słucham.</b>; say who's calling with <b>Mówi Tom.</b>; finish with <b>Do usłyszenia!</b></p>`,
    table: { head: ["word", "meaning", "example"], rows: [
      ["żeby", "in order to", "Dzwonię, żeby cię zaprosić."], ["gdy", "when", "Gdy mam czas, oglądam seriale."], ["albo", "or", "Spotkajmy się w piątek albo w sobotę."],
      ["dlatego", "that's why", "Jestem chory, dlatego nie przyjdę."], ["a także", "and also", "Czytam gazety, a także słucham radia."], ["chyba", "probably", "Chyba będzie padać."]
    ], pl: [0, 2] }
  },
  quiz: [
    { t: "choice", q: "Dzwonię, ___ zaprosić cię na imprezę.", o: ["żeby", "że", "bo"], a: 0 },
    { t: "choice", q: "Jestem chory, ___ nie przyjdę.", o: ["dlatego", "bo", "żeby"], a: 0 },
    { t: "choice", q: "Accepting an invitation:", o: ["Chętnie!", "Niestety nie dam rady.", "Może innym razem."], a: 0 },
    { t: "choice", q: "On the phone, to say who's calling:", o: ["Mówi Tom.", "Słucha Tom.", "To jest telefon Tom."], a: 0 },
    { t: "fill", q: "Zapraszam cię ___ kolację.", h: "to (an event)", a: ["na"], en: "I'm inviting you to dinner." },
    { t: "fill", q: "Spotkajmy się w piątek ___ w sobotę.", h: "or", a: ["albo", "lub"], en: "Let's meet on Friday or Saturday." },
    { t: "fill", q: "Uczę się polskiego, ___ rozmawiać z sąsiadami.", h: "in order to", a: ["żeby"], en: "I'm learning Polish so I can talk to my neighbours." },
    { t: "fill", q: "___ mam czas, oglądam seriale.", h: "when (A2 word, not kiedy)", a: ["gdy"], en: "When I have time, I watch series." },
    { t: "order", a: "Czy mogę rozmawiać z panią Ewą", en: "Can I speak to Ewa, please?" },
    { t: "order", a: "Niestety w sobotę nie mogę bo pracuję", en: "Unfortunately I can't on Saturday because I'm working." }
  ],
  dialogue: [
    ["Kasia", "Halo?", "Hello?"],
    ["Tom", "Cześć Kasiu, mówi Tom. Dzwonię, żeby zaprosić cię na imprezę w sobotę.", "Hi Kasia, it's Tom. I'm calling to invite you to a party on Saturday."],
    ["Kasia", "Dzięki! O której?", "Thanks! What time?"],
    ["Tom", "O ósmej wieczorem, u mnie. Będą też Ola i Marek.", "At eight in the evening, at my place. Ola and Marek are coming too."],
    ["Kasia", "Chętnie przyjdę, ale chyba trochę później, bo do siódmej pracuję.", "I'd love to come, but probably a bit later, because I work until seven."],
    ["Tom", "Nie ma problemu. Do zobaczenia w sobotę!", "No problem. See you on Saturday!"]
  ],
  partner: "Tomek",
  scenario: "Tomek phones you. Answer the phone; he invites you to two things. Accept one, decline the other politely with a reason, and suggest another time.",
  writing: { prompt: "Write two text messages: one inviting a friend to something, and one politely declining an invitation with a reason.", model: "Cześć Ola! Zapraszam cię na moje urodziny w sobotę o 19:00. Będzie tort! Daj znać, czy przyjdziesz. — Cześć Marek, dziękuję za zaproszenie, ale niestety nie mogę, bo jadę do rodziców. Może innym razem?" },
  read: { kind: "ad", title: "Kino „Nowe Horyzonty” zaprasza!", body: ["Wieczór Filmu Polskiego", "Piątek, 20 października, godz. 19:00", "Program: dwa filmy z angielskimi napisami", "Bilety: 25 zł, studenci 18 zł", "Rezerwacja: tel. 12 345 00 00 albo na naszej stronie internetowej."],
    q: [{ q: "What is the event?", o: ["an evening of Polish films", "a concert", "a party"], a: 0 }, { q: "How much do students pay?", o: ["18 zł", "25 zł", "nothing"], a: 0 }, { q: "How can you book?", o: ["by phone or on the website", "only at the cinema", "only by email"], a: 0 }] },
  cloze: "Halo? {{Mówi|Słucha|Dzwoni}} Marek. Dzwonię, {{żeby|że|bo}} zapytać, czy masz czas w sobotę. Idziemy do kina {{albo|ale|więc}} do teatru. Daj znać, {{czy|że|żeby}} przyjdziesz!"
},
{
  id: 32, pl: "Załatwiam sprawy", en: "Running errands", tag: "errands", tagLabel: "Bank, post office & renting a flat",
  focus: "urzędy i usługi · running errands",
  vocab: [
    ["bank", "bank"], ["konto", "bank account"], ["karta płatnicza", "bank card"], ["wypłacić / wpłacić pieniądze", "to withdraw / deposit money"],
    ["bankomat", "cash machine, ATM"], ["przelew", "bank transfer"], ["list polecony", "registered letter"], ["znaczek", "stamp"], ["koperta", "envelope"],
    ["nadać", "to send (at the post office)", "nadać paczkę"], ["urząd", "(government) office"], ["wniosek", "application form"], ["dowód osobisty", "ID card"],
    ["okienko", "counter, window"], ["numerek", "queue ticket"], ["kolejka", "queue"], ["pralnia", "laundry, dry cleaner's"], ["fryzjer", "hairdresser"],
    ["stacja benzynowa", "petrol station"], ["wynająć / wynajmować", "to rent"], ["mieszkanie do wynajęcia", "flat for rent"], ["właściciel / właścicielka", "owner, landlord / landlady"],
    ["najemca", "tenant"], ["czynsz", "rent"], ["kaucja", "deposit"], ["umowa", "contract"], ["opłaty", "bills, charges"], ["umeblowany", "furnished"],
    ["wprowadzić się", "to move in"], ["Od kiedy?", "Since when? / From when?"], ["Na jak długo?", "For how long?"], ["Ile wynosi…?", "How much is… (an amount)?"]
  ],
  grammar: {
    title: "Official situations: from when, for how long, how much",
    html: `<p>Running errands means a lot of <b>time</b> questions:</p>
<ul><li><b>Od kiedy?</b> (from / since when?) + genitive: <b>od pierwszego listopada</b>, <b>od poniedziałku</b>, <b>od roku</b></li>
<li><b>Do kiedy?</b> (until when?) + genitive: <b>do końca miesiąca</b>, <b>do piątku</b></li>
<li><b>Na jak długo?</b> (for how long — planned) + accusative: <b>na rok</b>, <b>na dwa tygodnie</b></li>
<li><b>Jak długo?</b> (how long — it lasted) + accusative without a preposition: <b>Mieszkałem tam rok.</b> <b>Czekałam godzinę.</b></li></ul>
<p>Amounts: <b>Ile wynosi czynsz?</b> — <b>Czynsz wynosi dwa tysiące złotych.</b> (<b>tysiąc, dwa tysiące, pięć tysięcy</b>)</p>
<p>In offices, use the polite conditional from the previous units: <b>Chciałbym otworzyć konto.</b> <b>Czy mogłaby pani mi pomóc wypełnić wniosek?</b></p>`,
    table: { head: ["question", "answer"], rows: [
      ["Od kiedy?", "Od pierwszego listopada. / Od roku."], ["Do kiedy?", "Do końca miesiąca."], ["Na jak długo?", "Na rok. / Na dwa tygodnie."],
      ["Jak długo?", "Dwa lata. / Tydzień."], ["Ile wynosi czynsz?", "Dwa tysiące złotych miesięcznie."]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "choice", q: "Chciałbym ___ konto.", o: ["otworzyć", "otwieram", "otworzyłem"], a: 0 },
    { t: "fill", q: "Mieszkanie jest wolne od ___ listopada.", h: "pierwszy", a: ["pierwszego"], en: "The flat is available from 1 November." },
    { t: "fill", q: "Chcę wynająć mieszkanie na dwa ___.", h: "rok", a: ["lata"], en: "I want to rent a flat for two years." },
    { t: "fill", q: "Poproszę trzy ___ na list do Serbii.", h: "znaczek", a: ["znaczki"], en: "Three stamps for a letter to Serbia, please." },
    { t: "fill", q: "Muszę wypłacić pieniądze z ___.", h: "bankomat", a: ["bankomatu"], en: "I need to take money out of the cash machine." },
    { t: "choice", q: "The money you pay every month for a flat:", o: ["czynsz", "kaucja", "przelew"], a: 0 },
    { t: "choice", q: "Jak długo mieszkałeś w Krakowie? – ___", o: ["Dwa lata.", "Od dwóch lat.", "Za dwa lata."], a: 0 },
    { t: "choice", q: "To send a registered letter, you go…", o: ["na pocztę", "do pralni", "do fryzjera"], a: 0 },
    { t: "order", a: "Od kiedy mieszkanie jest wolne", en: "When is the flat available from?" },
    { t: "order", a: "Proszę wypełnić wniosek i podpisać umowę", en: "Please fill in the application and sign the contract." }
  ],
  dialogue: [
    ["Tom", "Dzień dobry, dzwonię w sprawie mieszkania do wynajęcia.", "Hello, I'm calling about the flat for rent."],
    ["Właścicielka", "Dzień dobry. Tak, jest jeszcze wolne.", "Hello. Yes, it's still available."],
    ["Tom", "Od kiedy można się wprowadzić i ile wynosi czynsz?", "From when can I move in, and how much is the rent?"],
    ["Właścicielka", "Od pierwszego listopada. Czynsz to dwa tysiące złotych plus opłaty, a kaucja – jeden czynsz.", "From the first of November. The rent is 2,000 złoty plus bills, and the deposit is one month's rent."],
    ["Tom", "Czy mieszkanie jest umeblowane?", "Is the flat furnished?"],
    ["Właścicielka", "Tak, jest kuchnia, pralka i meble. Umowa na rok. Kiedy chciałby pan je obejrzeć?", "Yes, there's a kitchen, a washing machine and furniture. The contract is for a year. When would you like to see it?"]
  ],
  partner: "Właścicielka",
  scenario: "You're phoning a landlady (właścicielka) about a flat for rent. Ask about the rent, deposit, bills, furniture, when it's free and how long the contract is, then arrange a viewing.",
  writing: {
    prompt: "Fill in this application to open a bank account. You can invent the details.",
    form: ["Imię i nazwisko", "Data urodzenia", "Obywatelstwo", "Numer dokumentu (paszport / dowód)", "Adres zamieszkania", "Telefon / e-mail", "Rodzaj konta (osobiste / firmowe)", "Podpis"],
    model: "Imię i nazwisko: Tom Novak · Data urodzenia: 12.05.1995 · Obywatelstwo: serbskie · Numer dokumentu: paszport 123456789 · Adres zamieszkania: ul. Długa 5/3, 31-147 Kraków · Telefon / e-mail: 600 123 456, tom.novak@mail.com · Rodzaj konta: osobiste · Podpis: T. Novak"
  },
  read: { kind: "ad", title: "WYNAJMĘ", body: ["Mieszkanie 2-pokojowe, 48 m², Kraków-Podgórze", "III piętro, winda, balkon, umeblowane", "Czynsz: 2400 zł + opłaty (ok. 500 zł)", "Kaucja: 2400 zł · umowa na min. 12 miesięcy", "Wolne od 1 listopada. Bez zwierząt.", "Kontakt: 601 234 567 (po 16:00)"],
    q: [{ q: "How much is the rent without bills?", o: ["2400 zł", "500 zł", "2900 zł"], a: 0 }, { q: "Which is true?", o: ["Pets aren't allowed", "It's on the ground floor", "It's unfurnished"], a: 0 }, { q: "What's the minimum contract?", o: ["12 months", "1 month", "6 months"], a: 0 }] },
  cloze: "Chciałbym {{wynająć|wynajmę|wynajął}} mieszkanie w centrum. Szukam {{mieszkania|mieszkanie|mieszkaniem}} na rok, od {{pierwszego|pierwszy|pierwszym}} grudnia. Czynsz nie może być wyższy niż dwa {{tysiące|tysiąc|tysięcy}} złotych."
},
{
  id: 33, pl: "Podróże i zabytki", en: "Trips and sights", tag: "trip", tagLabel: "Travel stories & time expressions",
  focus: "podróże · telling what happened",
  vocab: [
    ["zabytek", "historic site, monument"], ["zamek", "castle"], ["kościół", "church"], ["rynek", "market square"], ["Stare Miasto", "Old Town"],
    ["muzeum", "museum", "doesn't change in the singular: w muzeum"], ["galeria sztuki", "art gallery"], ["pomnik", "monument, statue"], ["wycieczka", "trip, excursion"],
    ["przewodnik", "guide, guidebook"], ["biuro podróży", "travel agency"], ["nocleg", "place to stay, overnight stay"], ["las", "forest"], ["jezioro", "lake"],
    ["rzeka", "river"], ["góra / góry", "mountain / mountains"], ["plaża", "beach"], ["pole", "field"], ["kwiat", "flower"], ["drzewo", "tree"],
    ["zwierzęta domowe", "pets"], ["krajobraz", "landscape"], ["Jak długo?", "How long?"], ["przez tydzień", "for a week"],
    ["dwa dni temu", "two days ago"], ["ostatnio", "recently"], ["w zeszłym roku", "last year"], ["nigdy nie…", "never…", "Nigdy nie byłem w Gdańsku."],
    ["kiedyś", "once, at some point; some day"], ["zwiedzić", "to visit, see (sights) — perfective", "zwiedziłem"]
  ],
  grammar: {
    title: "Telling what happened: since, for, ago, never",
    html: `<p>To tell the story of a trip, you need time expressions:</p>
<ul><li><b>od</b> + genitive — since: <b>Mieszkam w Polsce od roku / od września.</b></li>
<li><b>przez</b> + accusative, or the accusative alone — for (duration): <b>Byłem tam przez tydzień.</b> <b>Byłem tam tydzień.</b></li>
<li><b>temu</b> — ago: <b>dwa dni temu</b>, <b>rok temu</b></li>
<li><b>nigdy nie</b> + verb — never: <b>Nigdy nie byłem w Gdańsku.</b> (a negated object goes into the genitive: <b>Nigdy nie widziałem morza.</b>)</li>
<li><b>już / jeszcze nie</b> — already / not yet: <b>Widziałeś już Wawel? – Jeszcze nie.</b></li></ul>
<p>Use <b>perfective</b> verbs for what you did and finished (<b>zwiedziliśmy, zobaczyłem, pojechaliśmy</b>) and <b>imperfective</b> for background and how long (<b>padał deszcz, spacerowaliśmy cały dzień</b>).</p>`,
    table: { head: ["question", "answer"], rows: [
      ["Od kiedy uczysz się polskiego?", "Od roku. / Od września."], ["Jak długo byłeś w Zakopanem?", "Tydzień. / Przez tydzień."], ["Kiedy tam byłeś?", "Dwa lata temu. / W zeszłym roku."],
      ["Byłeś kiedyś w Gdańsku?", "Nie, nigdy nie byłem w Gdańsku."], ["Widziałeś już Wawel?", "Tak, już widziałem. / Jeszcze nie."]
    ], pl: [0, 1] }
  },
  quiz: [
    { t: "fill", q: "Uczę się polskiego od ___.", h: "rok", a: ["roku"], en: "I've been learning Polish for a year." },
    { t: "fill", q: "Byłem w Krakowie dwa lata ___.", h: "ago", a: ["temu"], en: "I was in Kraków two years ago." },
    { t: "fill", q: "Nigdy nie ___ w Gdańsku.", h: "być · ja, man", a: ["byłem"], en: "I've never been to Gdańsk." },
    { t: "fill", q: "Zwiedzaliśmy ___ Miasto przez cały dzień.", h: "stary", a: ["Stare"], en: "We explored the Old Town all day." },
    { t: "fill", q: "Mieszkam w Polsce od ___.", h: "wrzesień", a: ["września"], en: "I've lived in Poland since September." },
    { t: "choice", q: "Jak długo byłaś nad morzem? – ___", o: ["Tydzień.", "Od tygodnia.", "Tydzień temu."], a: 0 },
    { t: "choice", q: "A castle:", o: ["zamek", "kościół", "rynek"], a: 0 },
    { t: "choice", q: "Which words describe nature?", o: ["jezioro, las, rzeka", "rynek, pomnik, zamek", "bilet, peron, lot"], a: 0 },
    { t: "order", a: "W zeszłym roku zwiedziliśmy Kraków i Zakopane", en: "Last year we visited Kraków and Zakopane." },
    { t: "order", a: "Od kiedy mieszkasz w Polsce", en: "How long have you lived in Poland?" }
  ],
  dialogue: [
    ["Ola", "Jak było na wakacjach?", "How was your holiday?"],
    ["Ben", "Super! Byliśmy tydzień w Krakowie. Zwiedziliśmy Wawel, Stare Miasto i kopalnię soli w Wieliczce.", "Great! We spent a week in Kraków. We saw Wawel, the Old Town and the salt mine in Wieliczka."],
    ["Ola", "Byliście też w górach?", "Did you go to the mountains too?"],
    ["Ben", "Tak, przez dwa dni w Zakopanem. Krajobraz był piękny, ale ciągle padał deszcz.", "Yes, two days in Zakopane. The landscape was beautiful, but it rained the whole time."],
    ["Ola", "A nad morzem?", "And the seaside?"],
    ["Ben", "Nigdy nie byłem nad Bałtykiem. Może w przyszłym roku!", "I've never been to the Baltic. Maybe next year!"]
  ],
  partner: "Ola",
  scenario: "Tell Ola about a trip you took: where you went, how long you stayed, what you saw and what the weather was like. Then ask about her travels.",
  writing: { prompt: "Write a postcard or email from a trip: where you are, since when, what you've seen and the weather.", model: "Cześć Marta! Pozdrawiam z Gdańska! Jestem tu od poniedziałku. Wczoraj zwiedziłem Stare Miasto i muzeum. Dzisiaj idę na plażę, bo jest ciepło i świeci słońce. Wracam w sobotę. Ściskam, Ben" },
  read: { kind: "ad", title: "Biuro Podróży „Wakacje”", body: ["Wycieczka: Kraków i Wieliczka · 3 dni", "Termin: 10–12 maja", "Cena: 890 zł/os. (nocleg w hotelu ***, śniadania, przewodnik)", "Program: Wawel, Stare Miasto, Kazimierz, Kopalnia Soli „Wieliczka”", "Bilety wstępu do muzeów nie są wliczone w cenę.", "Zapisy do 30 kwietnia."],
    q: [{ q: "How long is the trip?", o: ["3 days", "10 days", "a week"], a: 0 }, { q: "What is NOT included in the price?", o: ["museum tickets", "the hotel", "breakfast"], a: 0 }, { q: "When must you sign up by?", o: ["30 April", "10 May", "12 May"], a: 0 }] },
  cloze: "W zeszłym {{roku|rok|rokiem}} byłem w Polsce przez dwa {{tygodnie|tydzień|tygodni}}. Najpierw zwiedziłem Kraków, a potem pojechałem nad {{morze|morzu|morza}}. Nigdy wcześniej nie {{byłem|był|byłam}} w tak pięknym miejscu!"
}
];
