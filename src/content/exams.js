/* Practice exams. The A2 mock follows the official A2 sample test of the
   Państwowa Komisja ds. Poświadczania Znajomości Języka Polskiego jako Obcego
   (task order, task types, item counts, points, timing, marking criteria),
   with new texts. Pictures are replaced by emoji, recordings by the device's
   Polish voice. The A1 checkpoint is a shorter test in the same style that
   uses only A1 grammar and words: it is not an official A1 format.

   Task kinds:
   mc      – items {audio?|text?|sign?, q, o[], a}         (a = index of the right option)
   tf      – one recording or text, items {q, a: true|false}
   match   – options {L: label}, items {label, audio?, a: "L"}; extra options are unused
   numbers – one recording, items {q with ___, a: "digits"}
   forms   – text with {{right|wrong|wrong}} gaps
   bank    – text with [[gap]] words + box (extra words included)
   fill    – a text and a form: fields {label, any?:[], all?:[], exact?:[]} (checked without accents)
   Audio scripts are [speaker, line] pairs. */
const EXAMS = {
  a2: {
    id: "a2", level: "A2", pl: "Egzamin próbny A2", en: "A2 mock exam", official: true,
    note: "Same parts, task types, points and timing as the official A2 sample test, with new texts.",
    sections: [
      { id: "listen", pl: "Rozumienie ze słuchu", en: "Listening", minutes: 25, max: 30, tasks: [
        { kind: "mc", pl: "Proszę słuchać i zaznaczać poprawne odpowiedzi.", en: "Listen and choose the right answer.", pts: 1, groups: ["KTO TO MÓWI?", "GDZIE ONI TO MÓWIĄ?"], items: [
          { g: 0, audio: [["K", "Dzień dobry, czym mogę służyć? Dzisiaj polecam rybę i zupę pomidorową. Co podać do picia?"]], o: ["kelner", "kucharz", "klient"], a: 0 },
          { g: 0, audio: [["L", "Proszę otworzyć usta i powiedzieć „a”. Gardło jest czerwone. Napiszę pani receptę na antybiotyk."]], o: ["pacjentka", "lekarz", "farmaceuta"], a: 1 },
          { g: 0, audio: [["K", "Bilety do kontroli, proszę. Pani ma bilet ulgowy. Czy ma pani legitymację studencką?"]], o: ["pasażer", "kierowca", "konduktor"], a: 2 },
          { g: 0, audio: [["N", "Proszę państwa, dzisiaj piszemy test z gramatyki. Macie czterdzieści pięć minut. Proszę nie rozmawiać!"]], o: ["nauczycielka", "uczennica", "sprzedawczyni"], a: 0 },
          { g: 0, audio: [["K", "Dzień dobry, chciałbym otworzyć konto. Mam paszport i umowę o pracę. Czy to wystarczy?"]], o: ["urzędnik", "klient", "kasjer"], a: 1 },
          { g: 1, audio: [["G", "Uwaga! Pociąg pospieszny z Warszawy do Krakowa wjedzie na tor drugi przy peronie trzecim."]], o: ["na lotnisku", "w autobusie", "na dworcu"], a: 2 },
          { g: 1, audio: [["K", "Poproszę dwa bilety na film o osiemnastej. Najlepiej miejsca w środku sali."]], o: ["w kinie", "w muzeum", "w restauracji"], a: 0 },
          { g: 1, audio: [["K", "Chciałabym wysłać tę paczkę do Serbii. Priorytetem, proszę. Ile to będzie kosztować?"]], o: ["w banku", "na poczcie", "w sklepie"], a: 1 },
          { g: 1, audio: [["R", "Ma pan rezerwację? Dobrze. Pokój dwieście dwanaście, drugie piętro. Śniadanie jest od siódmej do dziesiątej."]], o: ["w szpitalu", "w restauracji", "w hotelu"], a: 2 },
          { g: 1, audio: [["K", "Poproszę chleb razowy i sześć bułek. Czy te rogaliki są dzisiejsze?"]], o: ["w piekarni", "w kawiarni", "w kwiaciarni"], a: 0 }
        ] },
        { kind: "tf", pl: "Proszę słuchać informacji radiowej i zaznaczać, czy zdania są prawdziwe – P, czy fałszywe – F.", en: "Listen to the radio announcement: true (P) or false (F)?", pts: 1,
          audio: [["R", "Dzień dobry, tu Radio Kraków. Od pierwszego lipca do końca sierpnia na Bulwarach Wiślanych działa letnie kino plenerowe. Filmy są pokazywane w każdy piątek i w każdą sobotę, zawsze o dwudziestej pierwszej, kiedy jest już ciemno. Wstęp jest bezpłatny, ale trzeba mieć swój koc albo leżak. W tym roku zobaczymy głównie polskie komedie. Kiedy pada deszcz, seans przenosimy do kina „Pod Baranami”. Zapraszamy!"]],
          items: [
            { q: "Kino plenerowe działa latem.", a: true },
            { q: "Filmy są pokazywane codziennie.", a: false },
            { q: "Seanse zaczynają się o dziewiątej wieczorem.", a: true },
            { q: "Za bilet trzeba zapłacić.", a: false },
            { q: "Kiedy pada deszcz, seanse są odwołane.", a: false }
          ] },
        { kind: "match", pl: "Kasia i Tomek rozmawiają o ostatnim weekendzie. Proszę słuchać i wybrać ilustrację. Uwaga! Dwie ilustracje są niepotrzebne.", en: "Who did what at the weekend? Two pictures are not used.", pts: 1,
          audio: [["Kasia", "Cześć, Tomek! Jak minął weekend?"], ["Tomek", "Super! W sobotę rano byłem na basenie, a potem odpoczywałem w domu. A ty?"],
            ["Kasia", "Ja jeździłam na rowerze nad Wisłą, prawie trzydzieści kilometrów!"], ["Tomek", "Brawo! A twój brat Michał?"],
            ["Kasia", "Michał jak zwykle grał w piłkę z kolegami. A co robiła twoja siostra?"], ["Tomek", "Ania? Ona teraz dużo biega. W niedzielę biegała w parku przez godzinę."],
            ["Kasia", "A Paweł był z wami?"], ["Tomek", "Nie, Paweł pojechał z tatą nad jezioro łowić ryby."],
            ["Kasia", "A Zosia? Słyszałam, że zaczęła się wspinać."], ["Tomek", "Tak, w sobotę pierwszy raz była na ściance wspinaczkowej. Mówi, że jest zmęczona, ale szczęśliwa."]],
          options: { A: "🚴", B: "🏊", C: "🎾", D: "🎣", E: "🧗", F: "🏃", G: "⚽", H: "🎳" }, example: ["Tomek", "B"],
          items: [{ label: "Kasia", a: "A" }, { label: "Michał", a: "G" }, { label: "Ania", a: "F" }, { label: "Paweł", a: "D" }, { label: "Zosia", a: "E" }] },
        { kind: "match", pl: "Proszę słuchać nagranych wiadomości i połączyć informacje. Jedna informacja jest niepotrzebna.", en: "Listen to the voicemails and match each caller to what they say. One option is not used.", pts: 1,
          options: { A: "spóźni się na spotkanie.", B: "zaprasza na ciasto.", C: "chce kupić bilet na mecz.", D: "odwołuje wizytę u lekarza.", E: "zaprasza na koncert.", F: "mówi, że można odebrać komputer." },
          items: [
            { label: "Kuba", audio: [["Kuba", "Cześć, tu Kuba. Mam dwa bilety na koncert w sobotę. Chcesz iść ze mną? Oddzwoń!"]], a: "E" },
            { label: "Anna Nowak", audio: [["Anna", "Dzień dobry, mówi Anna Nowak z przychodni „Zdrowie”. Pani wizyta u doktora Kowalskiego w czwartek jest odwołana. Proszę zadzwonić, żeby umówić nowy termin."]], a: "D" },
            { label: "Babcia", audio: [["Babcia", "Kochanie, tu babcia. Upiekłam sernik. Przyjdź jutro po południu na kawę, dobrze?"]], a: "B" },
            { label: "Serwis „Komputer-Plus”", audio: [["Serwis", "Dzień dobry, serwis „Komputer-Plus”. Pana laptop jest już naprawiony. Można go odebrać od poniedziałku do piątku do osiemnastej."]], a: "F" },
            { label: "Ewa", audio: [["Ewa", "Hej, tu Ewa. Spóźnię się dwadzieścia minut, bo jest duży korek. Przepraszam!"]], a: "A" }
          ] },
        { kind: "numbers", pl: "Proszę słuchać informacji o Festiwalu Pierogów i wpisywać liczby.", en: "Listen and write the numbers (in digits).", pts: 1,
          audio: [["R", "Już w ten weekend, w piątek dwunastego sierpnia, na Małym Rynku w Krakowie zaczyna się Festiwal Pierogów. W tym roku przyjedzie aż czterdzieści pięć restauracji z całej Polski. Festiwal będzie otwarty codziennie od dziesiątej do dwudziestej drugiej. Porcja pierogów kosztuje osiemnaście złotych. Pierwszy festiwal odbył się w dwa tysiące trzecim roku."]],
          items: [
            { q: "Festiwal zaczyna się w piątek, ___ sierpnia.", a: "12" },
            { q: "Na festiwal przyjedzie ___ restauracji.", a: "45" },
            { q: "Festiwal jest otwarty do godziny ___.", a: "22" },
            { q: "Porcja pierogów kosztuje ___ zł.", a: "18" },
            { q: "Pierwszy festiwal był w ___ roku.", a: "2003" }
          ] }
      ] },
      { id: "read", pl: "Rozumienie tekstów pisanych z rozpoznawaniem struktur gramatycznych", en: "Reading and grammar", minutes: 45, max: 30, tasks: [
        { kind: "forms", pl: "Proszę wybrać poprawną formę.", en: "Choose the correct form.", pts: 0.5,
          text: "Kopalnia Soli „Wieliczka” to jedna z {{najsłynniejszych|najsłynniejsze|najsłynniejszymi}} atrakcji turystycznych w {{Polsce|Polska|Polskę}}. Co roku przyjeżdża tu ponad milion {{turystów|turyści|turystami}} z całego świata. Trasa turystyczna ma prawie trzy {{kilometry|kilometrów|kilometr}} i prowadzi 135 metrów pod {{ziemią|ziemia|ziemię}}. Najpiękniejszym miejscem jest Kaplica Świętej Kingi. Ściany, podłoga i lampy są tam zrobione {{z soli|z sól|z solą}}. Zwiedzanie {{trwa|trwają|trwam}} około trzech godzin. Warto {{zabrać|zabrał|zabiorę}} ciepłą kurtkę, bo pod ziemią jest tylko 14 stopni. W 1978 roku kopalnia {{została|został|zostały}} wpisana na listę UNESCO. Latem jest tu bardzo dużo {{ludzi|ludzie|człowiek}}, więc bilety najlepiej kupić wcześniej." },
        { kind: "bank", pl: "Proszę uzupełnić tekst wyrazami z ramki. Dwa wyrazy są niepotrzebne.", en: "Complete the text with words from the box. Two words are not used.", pts: 0.5,
          box: ["Warszawie", "firmie", "tramwajem", "siłownię", "kolegami", "egzamin", "przyjaciół", "kuchnię", "miesiącu", "samolotem", "pociągu", "kuchnia"],
          text: "Marko jest z Serbii, ale od roku mieszka w [[Warszawie]]. Pracuje jako programista w dużej [[firmie]]. Codziennie jeździ do pracy [[tramwajem]], bo nie ma samochodu. Po pracy często chodzi na [[siłownię]] albo spotyka się z [[kolegami]]. W weekendy uczy się polskiego, bo chce zdać [[egzamin]] w czerwcu. Ma już dużo polskich [[przyjaciół]]. Najbardziej lubi polską [[kuchnię]], szczególnie pierogi i żurek. W przyszłym [[miesiącu]] jego rodzice przylecą do Polski [[samolotem]]." },
        { kind: "mc", pl: "Proszę przeczytać napisy i wybrać poprawną odpowiedź.", en: "Read the signs and choose the right answer.", pts: 1, items: [
          { sign: "Wstęp tylko z biletem", q: "Ten napis oznacza, że", o: ["bez biletu nie można wejść.", "bilety są za darmo.", "tu można kupić bilet."], a: 0 },
          { sign: "Remont. Wejście od ulicy Długiej.", q: "Ten napis oznacza, że", o: ["budynek jest zamknięty na zawsze.", "remont jest na ulicy Długiej.", "trzeba wejść z innej strony."], a: 2 },
          { sign: "Przymierzalnia", q: "Ten napis można przeczytać", o: ["w aptece.", "w sklepie z ubraniami.", "na poczcie."], a: 1 },
          { sign: "Nie dotykać – świeżo malowane!", q: "Ten napis oznacza, że", o: ["farba jest jeszcze mokra.", "można tu usiąść.", "tu sprzedają farby."], a: 0 },
          { sign: "Zakaz wprowadzania psów", q: "Ten napis oznacza, że", o: ["psy muszą być na smyczy.", "tu można kupić psa.", "psy nie mogą tu wejść."], a: 2 }
        ] },
        { kind: "mc", pl: "Proszę przeczytać teksty i zaznaczyć poprawną odpowiedź.", en: "Read the texts and choose the right answer.", pts: 1, items: [
          { text: "Apteka „Pod Orłem” – czynna całą dobę. W niedziele i święta obowiązuje dodatkowa opłata za obsługę.", q: "W tej aptece", o: ["w niedziele leki są tańsze.", "można kupić leki w nocy.", "nie można kupić leków w święta."], a: 1 },
          { text: "Szukam opiekunki do pięcioletniego syna, od poniedziałku do piątku, 15:00–19:00. Wymagany język polski i angielski.", q: "Ta osoba będzie", o: ["pracować w weekendy.", "uczyć dziecko angielskiego.", "opiekować się dzieckiem po południu."], a: 2 },
          { text: "Marek, jestem u dentysty. Obiad jest w lodówce – trzeba go tylko podgrzać. Wrócę koło siódmej. Mama", q: "Z tej wiadomości wiemy, że", o: ["Marek musi podgrzać obiad.", "mama gotuje teraz obiad.", "mama jest w pracy."], a: 0 },
          { text: "Od 1 marca Biblioteka Miejska jest otwarta także w soboty, od 9:00 do 14:00. Książki można też oddawać do specjalnej skrzynki przed wejściem.", q: "Z tego ogłoszenia wiemy, że", o: ["w soboty biblioteka jest nieczynna.", "książki można oddać, kiedy biblioteka jest zamknięta.", "biblioteka jest czynna w soboty po południu."], a: 1 },
          { text: "Wycieczka do Zakopanego: wyjazd w sobotę o 6:00 sprzed dworca, powrót w niedzielę wieczorem. Cena: 350 zł (nocleg i kolacja). Obiady we własnym zakresie.", q: "Uczestnicy wycieczki", o: ["mają w cenie śniadanie i obiad.", "sami płacą za obiady.", "wracają w sobotę wieczorem."], a: 1 }
        ] },
        { kind: "fill", pl: "Proszę na podstawie tekstu wypełnić formularz zgłoszeniowy szkoły językowej „Lingwa”.", en: "Fill in the language-school application form using the text. A word or two is enough.", pts: 0.5,
          text: "Nazywam się Milica Petrović. Mam 27 lat. Urodziłam się w Nowym Sadzie, w Serbii, ale studiowałam w Belgradzie – skończyłam ekonomię. Od dwóch lat mieszkam w Gdańsku i pracuję jako księgowa w firmie transportowej. Jestem mężatką, mój mąż jest kucharzem. Nie mamy jeszcze dzieci, ale mamy psa. W wolnym czasie dużo pływam i czytam kryminały. Po polsku mówię dość dobrze, ale chcę poprawić gramatykę, dlatego zapisuję się na kurs. Mogę chodzić na zajęcia tylko we wtorki i czwartki wieczorem.",
          fields: [
            { label: "miejsce urodzenia", any: ["nowy sad", "nowym sadzie", "novi sad"], show: "Nowy Sad" },
            { label: "miejsce zamieszkania", any: ["gdansk"], show: "Gdańsk" },
            { label: "kierunek studiów", any: ["ekonom"], show: "ekonomia" },
            { label: "zawód", any: ["ksiegow"], show: "księgowa" },
            { label: "stan cywilny", any: ["mezatk", "zamezn", "w zwiazku malzenskim"], show: "mężatka" },
            { label: "zawód męża", any: ["kucharz"], show: "kucharz" },
            { label: "dzieci (tak / nie)", exact: ["nie", "brak", "0", "nie ma", "nie mam", "nie mamy"], show: "nie" },
            { label: "sport", any: ["plyw", "basen"], show: "pływanie" },
            { label: "cel kursu", any: ["gramatyk"], show: "gramatyka" },
            { label: "dni zajęć", all: ["wtor", "czwart"], show: "wtorek i czwartek" }
          ] },
        { kind: "match", pl: "Proszę połączyć ilustracje z opisami. Jeden opis jest niepotrzebny.", en: "Match the pictures to the descriptions. One description is not used.", pts: 1,
          options: { A: "Mam gorączkę i idę do lekarza.", B: "Dzisiaj są moje urodziny!", C: "Pada deszcz, a ja nie mam parasola.", D: "Jadę na wakacje pociągiem.", E: "Robię zakupy na kolację.", F: "Gram w piłkę z synem." },
          items: [{ label: "☔🏙️🙍", a: "C" }, { label: "🎂🕯️🎉", a: "B" }, { label: "🚆🧳🏖️", a: "D" }, { label: "🤒🌡️🩺", a: "A" }, { label: "🛒🍅🥖", a: "E" }] }
      ] },
      { id: "write", pl: "Pisanie", en: "Writing", minutes: 45, max: 20, kindW: "writing", sets: [
        { a: { pl: "Nie może Pani / Pan przyjść na imieniny koleżanki. Proszę napisać do niej SMS: przeprosić, podać powód i złożyć życzenia.", en: "You can't go to a friend's name-day party. Text her: apologise, give a reason and send your wishes.", words: 20 },
          b: { pl: "Proszę opisać swoje mieszkanie lub dom: gdzie jest, ile ma pokoi, jakie są meble, co Pani / Pan w nim lubi, a czego brakuje.", en: "Describe your flat or house: where it is, how many rooms, the furniture, what you like about it and what's missing.", words: 80 },
          model: "a) Cześć Ewa! Bardzo przepraszam, ale nie mogę przyjść na twoje imieniny, bo jestem chory. Wszystkiego najlepszego! Marko\nb) Mieszkam w Krakowie, niedaleko centrum. Moje mieszkanie jest małe, ale wygodne. Ma dwa pokoje, kuchnię i łazienkę. W salonie jest duża szara kanapa, stół i cztery krzesła. W sypialni mam łóżko, szafę i biurko, bo czasem pracuję w domu. Najbardziej lubię balkon, bo latem piję tam kawę i patrzę na park. Niestety w mieszkaniu nie ma windy, a ja mieszkam na czwartym piętrze. Brakuje mi też zmywarki." },
        { a: { pl: "Chce Pani / Pan zjeść obiad z kolegą z pracy. Proszę napisać do niego krótki e-mail: zaproponować dzień, godzinę i miejsce.", en: "Write a short email to a colleague suggesting lunch: day, time and place.", words: 20 },
          b: { pl: "Proszę opisać swój zwykły dzień: rano, w pracy lub na studiach, po południu i wieczorem.", en: "Describe your usual day: morning, at work or university, afternoon and evening.", words: 90 },
          model: "a) Cześć Piotr! Może zjemy razem obiad w piątek o trzynastej? Proponuję restaurację „Pod Lipą” obok biura. Pozdrawiam, Marko\nb) Zwykle wstaję o szóstej trzydzieści. Najpierw biorę prysznic, potem jem śniadanie i piję kawę. O siódmej trzydzieści jadę do pracy tramwajem. Pracuję w biurze jako programista od ósmej do szesnastej. W pracy mam dużo spotkań i piszę dużo e-maili. Po pracy często chodzę na siłownię albo na spacer. Wieczorem gotuję kolację, rozmawiam z rodziną przez telefon i uczę się polskiego. Czasem oglądam film. Kładę się spać o jedenastej, bo jestem zmęczony." }
      ] },
      { id: "speak", pl: "Mówienie (ćwiczenie)", en: "Speaking (practice)", minutes: 10, max: 40, kindW: "speaking", optional: true,
        tasks: [
          { pl: "Proszę odpowiedzieć na pytania egzaminatora.", en: "Answer the examiner's questions (a few sentences each).", pts: 4,
            qs: ["Jak się Pani / Pan nazywa i skąd Pani / Pan jest?", "Gdzie Pani / Pan mieszka i z kim?", "Co Pani / Pan robi? Pracuje Pani / Pan czy studiuje?", "Co Pani / Pan lubi robić w wolnym czasie?"] },
          { pl: "Na podstawie ilustracji proszę scharakteryzować osobę z fotografii.", en: "Describe the person in the picture: appearance, clothes, what they're doing, what they might be like.", pts: 10,
            picture: "👴🏻🌳🐕", scene: "An older man with a grey beard and glasses, in a green jumper, working in his garden. His dog sits next to him. He's smiling." },
          { pl: "Proszę zaprosić koleżankę lub kolegę na swoje urodziny: podać datę, godzinę i miejsce, powiedzieć, co będzie, i zapytać, czy przyjdzie.", en: "Invite a friend to your birthday party: date, time, place, what's planned, and ask if they'll come.", pts: 10 }
        ],
        model: "1) Nazywam się Marko Jović, jestem z Serbii, z Belgradu. Mieszkam w Krakowie z żoną. Pracuję jako programista. W wolnym czasie lubię biegać i czytać książki.\n2) Na zdjęciu jest starszy pan. Ma siwą brodę i okulary. Ma na sobie zielony sweter. Pracuje w ogrodzie, a obok niego siedzi pies. Pan się uśmiecha, chyba jest wesoły i spokojny. Myślę, że jest na emeryturze i lubi przyrodę.\n3) Cześć Ania! W sobotę, piętnastego czerwca, mam urodziny. Zapraszam cię na imprezę o siódmej wieczorem do mnie do domu, na ulicę Długą pięć. Będzie pizza, tort i muzyka. Przyjdziesz?" }
    ]
  },
  a1: {
    id: "a1", level: "A1", pl: "Sprawdzian A1", en: "A1 checkpoint", official: false,
    note: "A shorter test in the style of the A2 exam, using only A1 grammar and words. It is not the official A1 exam format.",
    sections: [
      { id: "listen", pl: "Rozumienie ze słuchu", en: "Listening", minutes: 10, max: 10, tasks: [
        { kind: "mc", pl: "Proszę słuchać i zaznaczać poprawne odpowiedzi.", en: "Listen and choose the right answer.", pts: 1, groups: ["KTO TO MÓWI?", "GDZIE ONI SĄ?"], items: [
          { g: 0, audio: [["K", "Dzień dobry! Co podać? Kawa, herbata?"]], o: ["lekarz", "kelner", "nauczyciel"], a: 1 },
          { g: 0, audio: [["D", "Mam na imię Kasia. Mam siedem lat i chodzę do szkoły."]], o: ["dziewczynka", "babcia", "nauczycielka"], a: 0 },
          { g: 0, audio: [["K", "Bilety do kontroli, proszę! Dokąd pan jedzie?"]], o: ["kucharz", "student", "konduktor"], a: 2 },
          { g: 1, audio: [["K", "Poproszę chleb i masło. Ile płacę?"]], o: ["w sklepie", "w szkole", "w kinie"], a: 0 },
          { g: 1, audio: [["R", "Proszę, to jest pana pokój. Numer dwanaście. Śniadanie jest o ósmej."]], o: ["w banku", "w hotelu", "na poczcie"], a: 1 },
          { g: 1, audio: [["P", "Boli mnie głowa i mam gorączkę. Co mam robić, panie doktorze?"]], o: ["w restauracji", "w parku", "u lekarza"], a: 2 }
        ] },
        { kind: "numbers", pl: "Proszę słuchać wiadomości od Oli i wpisywać liczby.", en: "Listen to Ola's message and write the numbers (in digits).", pts: 1,
          audio: [["Ola", "Cześć, tu Ola! Zapraszam cię na urodziny. Impreza jest w sobotę, piętnastego maja, o osiemnastej. Mój adres: ulica Długa siedem, mieszkanie dwadzieścia. Do zobaczenia!"]],
          items: [{ q: "Urodziny są ___ maja.", a: "15" }, { q: "Impreza zaczyna się o godzinie ___.", a: "18" }, { q: "Ola mieszka na ulicy Długiej ___,", a: "7" }, { q: "mieszkanie numer ___.", a: "20" }] }
      ] },
      { id: "read", pl: "Czytanie i gramatyka", en: "Reading and grammar", minutes: 25, max: 15, tasks: [
        { kind: "forms", pl: "Proszę wybrać poprawną formę.", en: "Choose the correct form.", pts: 0.5,
          text: "Mam na imię Ana i {{jestem|jest|są}} z Serbii. Teraz mieszkam w {{Krakowie|Kraków|Krakowa}}. Mam {{brata|brat|bratem}} i siostrę. Mój brat ma dwadzieścia {{lat|lata|rok}}. Codziennie piję {{kawę|kawa|kawy}} i jem kanapkę. Nie lubię {{mleka|mleko|mlekiem}}. W sobotę {{idę|idziesz|idą}} do kina z koleżanką. Bardzo lubię {{czytać|czytam|czyta}} książki." },
        { kind: "mc", pl: "Proszę przeczytać napisy i wybrać poprawną odpowiedź.", en: "Read the signs and choose the right answer.", pts: 1, items: [
          { sign: "Kasa", q: "Ten napis można przeczytać", o: ["w parku.", "w sklepie.", "w domu."], a: 1 },
          { sign: "Nie palić", q: "Ten napis oznacza, że", o: ["tu nie wolno palić.", "tu można palić.", "tu sprzedają papierosy."], a: 0 },
          { sign: "Wyjście", q: "Ten napis oznacza, że", o: ["tędy można wejść.", "to jest okno.", "tędy można wyjść."], a: 2 }
        ] },
        { kind: "mc", pl: "Proszę przeczytać teksty i zaznaczyć poprawną odpowiedź.", en: "Read the texts and choose the right answer.", pts: 1, items: [
          { text: "Sklep czynny: pon.–pt. 8:00–20:00, sobota 9:00–14:00, niedziela nieczynne.", q: "W niedzielę sklep", o: ["jest otwarty do 14:00.", "jest zamknięty.", "jest otwarty cały dzień."], a: 1 },
          { text: "Jestem w kawiarni „Mała”. Czekam na ciebie! Kasia", q: "Kasia", o: ["czeka w kawiarni.", "jest w domu.", "jest w pracy."], a: 0 },
          { text: "Sprzedam rower, czerwony, 300 zł. Tel. 600 100 200", q: "Rower", o: ["jest niebieski.", "kosztuje 600 zł.", "jest czerwony."], a: 2 }
        ] },
        { kind: "fill", pl: "Proszę na podstawie tekstu wypełnić formularz.", en: "Fill in the form using the text.", pts: 0.5,
          text: "Nazywam się Jovan Ilić. Jestem z Serbii. Mam 35 lat. Jestem lekarzem. Mieszkam w Łodzi. Mówię po serbsku, po angielsku i trochę po polsku.",
          fields: [
            { label: "imię", any: ["jovan"], show: "Jovan" }, { label: "kraj", any: ["serb"], show: "Serbia" }, { label: "wiek", exact: ["35", "35 lat", "trzydziesci piec"], show: "35" },
            { label: "zawód", any: ["lekarz"], show: "lekarz" }, { label: "miasto", any: ["lodz"], show: "Łódź" }, { label: "języki", all: ["serb", "angiel", "pols"], show: "serbski, angielski, polski" }
          ] }
      ] },
      { id: "write", pl: "Pisanie", en: "Writing", minutes: 20, max: 10, kindW: "writing", sets: [
        { a: { pl: "Jest Pani / Pan w kawiarni i czeka na kolegę. Proszę napisać do niego SMS.", en: "You're in a café waiting for a friend. Text him.", words: 10 },
          b: { pl: "Proszę napisać o sobie: jak się Pani / Pan nazywa, skąd jest, gdzie mieszka, co robi i co lubi.", en: "Write about yourself: name, where you're from, where you live, what you do and what you like.", words: 40 },
          model: "a) Cześć Tomek! Jestem w kawiarni „Mała”. Czekam na ciebie. Marko\nb) Nazywam się Marko. Jestem z Serbii, z Belgradu. Teraz mieszkam w Krakowie. Jestem programistą i pracuję w biurze. Lubię kawę, muzykę i sport. W weekend często gram w piłkę z kolegami." }
      ] }
    ]
  }
};
