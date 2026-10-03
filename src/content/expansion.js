/* Extra vocabulary, reading texts and gap-fills for the original 21 units,
   so every unit has a real-life text (signs, menus, timetables, ads, forms,
   emails) and a gap-fill text, as tested in the exam. */
const EXTRA_VOCAB = {
  0: [["Na razie!", "See you! (casual)"], ["Do zobaczenia!", "See you later!"], ["Dobranoc!", "Good night!"], ["Witam!", "Hello! (semi-formal)"],
      ["Jak się pan ma?", "How are you? (to a man)"], ["Jak się pani ma?", "How are you? (to a woman)"], ["Świetnie!", "Great!"], ["Nieźle.", "Not bad."],
      ["Tak sobie.", "So-so."], ["źle", "badly, bad"], ["pan / pani", "Mr, sir / Mrs, madam"], ["Nie rozumiem.", "I don't understand."],
      ["Proszę powtórzyć.", "Please repeat."], ["Proszę mówić wolniej.", "Please speak more slowly."], ["Jak to się mówi po polsku?", "How do you say that in Polish?"],
      ["Co to znaczy?", "What does that mean?"], ["Nie wiem.", "I don't know."]],
  1: [["rodzice", "parents"], ["dziadek", "grandfather"], ["babcia", "grandmother"], ["wnuk / wnuczka", "grandson / granddaughter"], ["wujek", "uncle"],
      ["ciocia", "aunt"], ["kuzyn / kuzynka", "cousin (m / f)"], ["chłopak", "boy; boyfriend"], ["dziewczyna", "girl; girlfriend"], ["narzeczony / narzeczona", "fiancé / fiancée"],
      ["rodzeństwo", "siblings"], ["jedynak / jedynaczka", "only child (m / f)"], ["żonaty", "married (of a man)"], ["zamężna", "married (of a woman)"],
      ["rozwiedziony", "divorced"], ["nasz / nasza / nasze", "our (m / f / n)"], ["jego / jej", "his / her"]],
  2: [["trzynaście", "13"], ["czternaście", "14"], ["szesnaście", "16"], ["siedemnaście", "17"], ["osiemnaście", "18"], ["dziewiętnaście", "19"],
      ["rok", "year"], ["lata / lat", "years (2–4 / 5+)"], ["numer", "number"], ["Jaki masz numer telefonu?", "What's your phone number?"], ["rower", "bicycle"],
      ["pół", "half"], ["około", "about, approximately"], ["więcej / mniej", "more / less"], ["dorosły", "adult, grown-up"]],
  3: [["lody", "ice cream", "plural"], ["sernik", "cheesecake"], ["szarlotka", "apple pie"], ["tort", "gateau, birthday cake"], ["jajecznica", "scrambled eggs"],
      ["bułka", "bread roll"], ["dżem", "jam"], ["na miejscu", "to eat in"], ["na wynos", "to take away"], ["Dla mnie…", "For me…"], ["gorący", "hot"],
      ["zimny", "cold"], ["z lodem", "with ice"], ["z cytryną", "with lemon"], ["Czy to miejsce jest wolne?", "Is this seat free?"], ["Gdzie jest toaleta?", "Where's the toilet?"]],
  4: [["pisać", "to write", "piszę, piszesz"], ["oglądać", "to watch"], ["uczyć", "to teach"], ["studiować", "to study (at university)"], ["grać", "to play"],
      ["śpiewać", "to sing"], ["tańczyć", "to dance"], ["pływać", "to swim"], ["biegać", "to run, jog"], ["jeździć na rowerze", "to cycle"], ["czekać", "to wait"],
      ["pamiętać", "to remember"], ["myśleć", "to think", "myślę"], ["wiedzieć", "to know (a fact)", "wiem, wiesz, wiedzą"], ["otwierać / zamykać", "to open / to close"]],
  5: [["centrum", "city centre"], ["plac", "square"], ["most", "bridge"], ["teatr", "theatre"], ["uniwersytet", "university"], ["szpital", "hospital"],
      ["hotel", "hotel"], ["basen", "swimming pool"], ["siłownia", "gym"], ["stadion", "stadium"], ["kawiarnia", "café"], ["ogród", "garden"],
      ["na wsi", "in the countryside"], ["parking", "car park"], ["biblioteka", "library"]],
  6: [["owoce", "fruit"], ["warzywa", "vegetables"], ["banan", "banana"], ["pomarańcza", "orange"], ["truskawki", "strawberries"], ["ziemniaki", "potatoes"],
      ["kurczak", "chicken"], ["makaron", "pasta"], ["sałatka", "salad"], ["pizza", "pizza"], ["piłka nożna", "football"], ["koszykówka", "basketball"],
      ["gotowanie", "cooking"], ["podróże", "travelling"], ["gry komputerowe", "video games"], ["nienawidzić", "to hate", "+ genitive"]],
  7: [["przed południem", "in the morning (before noon)"], ["minuta", "minute"], ["godzina", "hour"], ["kwadrans", "a quarter of an hour"],
      ["wpół do…", "half past… (wpół do ósmej = 7:30)"], ["za pięć ósma", "five to eight"], ["pięć po ósmej", "five past eight"], ["dzień", "day"],
      ["miesiąc", "month"], ["przedwczoraj", "the day before yesterday"], ["spóźnić się", "to be late"], ["punktualnie", "on time"], ["zegarek", "watch"],
      ["kalendarz", "calendar"], ["Ile czasu?", "How much time?"], ["o północy", "at midnight"]],
  8: [["żółty", "yellow"], ["brązowy", "brown"], ["szary", "grey"], ["różowy", "pink"], ["pomarańczowy", "orange (colour)"], ["fioletowy", "purple"],
      ["kolorowy", "colourful"], ["jasny / ciemny", "light / dark"], ["nudny", "boring"], ["ciężki / lekki", "heavy / light"], ["szeroki / wąski", "wide / narrow"],
      ["długi / krótki", "long / short"], ["piękny", "beautiful"], ["brzydki", "ugly"], ["wygodny", "comfortable"], ["modny", "fashionable"]],
  9: [["metro", "underground, metro"], ["taksówka", "taxi"], ["statek", "ship"], ["wsiadać / wysiadać", "to get on / to get off"], ["skrzyżowanie", "crossroads"],
      ["światła", "traffic lights"], ["na rogu", "on the corner"], ["naprzeciwko", "opposite (+ genitive)"], ["przejście dla pieszych", "pedestrian crossing"],
      ["rondo", "roundabout"], ["mapa", "map"], ["zgubić się", "to get lost"], ["Jak dojść do…?", "How do I get to… (on foot)?"],
      ["Jak dojechać do…?", "How do I get to… (by transport)?"], ["chodzić", "to go, walk (regularly)", "Chodzę do pracy pieszo."], ["jeździć", "to go, ride (regularly)", "Jeżdżę do pracy autobusem."]],
  10: [["sześćdziesiąt", "60"], ["siedemdziesiąt", "70"], ["osiemdziesiąt", "80"], ["dziewięćdziesiąt", "90"], ["dwieście", "200"], ["tysiąc", "1,000"],
       ["grosz", "grosz (1/100 of a złoty)"], ["reszta", "change (money back)"], ["paragon", "receipt"], ["cena", "price"], ["promocja", "special offer"],
       ["rozmiar", "size"], ["przymierzyć", "to try on"], ["kasa", "till, checkout"], ["litr", "litre"], ["deko", "10 grams", "dwadzieścia deko sera"]],
  11: [["poszedłem / poszłam", "I went (on foot, m / f)"], ["jadłem / jadłam", "I ate (m / f)"], ["piłem / piłam", "I drank (m / f)"], ["widziałem / widziałam", "I saw (m / f)"],
       ["kupiłem / kupiłam", "I bought (m / f)"], ["miałem / miałam", "I had (m / f)"], ["chciałem / chciałam", "I wanted (m / f)"], ["mogłem / mogłam", "I could (m / f)"],
       ["w zeszłym tygodniu", "last week"], ["w zeszłym miesiącu", "last month"], ["koncert", "concert"], ["było fajnie", "it was great"], ["było nudno", "it was boring"],
       ["spacer", "a walk"], ["zrobić zakupy", "to do the shopping"]],
  12: [["kucharz / kucharka", "cook (m / f)"], ["pielęgniarz / pielęgniarka", "nurse (m / f)"], ["policjant / policjantka", "police officer (m / f)"],
       ["sprzedawca / sprzedawczyni", "shop assistant (m / f)"], ["prawnik / prawniczka", "lawyer (m / f)"], ["księgowy / księgowa", "accountant (m / f)"],
       ["dziennikarz / dziennikarka", "journalist (m / f)"], ["aktor / aktorka", "actor / actress"], ["architekt", "architect"], ["mechanik", "mechanic"],
       ["rolnik", "farmer"], ["emeryt / emerytka", "pensioner (m / f)"], ["bezrobotny", "unemployed"], ["pracownik", "employee"], ["zarabiać", "to earn"], ["fabryka", "factory"]],
  13: [["powinienem / powinnam", "I should (m / f)"], ["warto", "it's worth it"], ["spróbować", "to try"], ["prowadzić samochód", "to drive a car"], ["zdążyć", "to make it in time"],
       ["pozwolić", "to allow"], ["Czy mogę…?", "May I…?"], ["Czy można…?", "Is it possible / allowed to…?"], ["zakaz", "ban, no…"], ["Palenie wzbronione", "No smoking (sign)"],
       ["Wstęp wolny", "Free entry"], ["Nie dotykać", "Do not touch"], ["Pchać / Ciągnąć", "Push / Pull (on doors)"], ["Wejście / Wyjście", "Entrance / Exit"],
       ["Czynne / Nieczynne", "Open / Closed"], ["Zajęte", "Occupied"]],
  14: [["para", "a pair"], ["sztuka", "a piece, an item", "dwie sztuki"], ["kilkanaście", "a dozen or so"], ["żaden / żadna / żadne", "no, none"],
       ["ci / te", "these (men / other)"], ["tamten / tamta / tamto", "that (over there)"], ["rzecz / rzeczy", "thing / things"], ["noc / noce", "night / nights"],
       ["dzieci", "children"], ["bracia", "brothers"], ["tygodnie", "weeks"], ["pieniądze", "money", "plural only"], ["garaż", "garage"], ["piwnica", "cellar"], ["ogrzewanie", "heating"]],
  15: [["kąpać się", "to have a bath"], ["brać prysznic", "to take a shower"], ["czesać się", "to comb your hair"], ["golić się", "to shave"], ["malować się", "to put on make-up"],
       ["myć zęby", "to brush your teeth"], ["śpieszyć się", "to be in a hurry"], ["kłaść się spać", "to go to bed"], ["zasypiać", "to fall asleep"], ["prać", "to do the washing"],
       ["prasować", "to iron"], ["zmywać naczynia", "to wash the dishes"], ["wynosić śmieci", "to take out the rubbish"], ["budzik", "alarm clock"],
       ["relaksować się", "to relax"], ["nudzić się", "to be bored"]],
  16: [["namiot", "tent"], ["kemping", "campsite"], ["pensjonat", "guesthouse"], ["rezerwacja", "booking, reservation"], ["wyjazd", "trip away, departure"], ["plan", "plan"],
       ["marzyć", "to dream (of)"], ["zostać w domu", "to stay at home"], ["za rok", "in a year's time"], ["w przyszły weekend", "next weekend"], ["jutro rano", "tomorrow morning"],
       ["za godzinę", "in an hour"], ["prognoza pogody", "weather forecast"], ["spakować się", "to pack"]],
  17: [["wstawać / wstać", "to get up"], ["zaczynać / zacząć", "to begin"], ["kończyć / skończyć", "to finish"], ["uczyć się / nauczyć się", "to learn"],
       ["otwierać / otworzyć", "to open"], ["zamykać / zamknąć", "to close"], ["sprzedawać / sprzedać", "to sell"], ["wysyłać / wysłać", "to send"],
       ["dzwonić / zadzwonić", "to call, phone"], ["spotykać / spotkać", "to meet"], ["odpowiadać / odpowiedzieć", "to answer"], ["pytać / zapytać", "to ask"],
       ["płacić / zapłacić", "to pay"], ["wracać / wrócić", "to come back"], ["przychodzić / przyjść", "to come (on foot)"], ["wychodzić / wyjść", "to go out, leave"]],
  18: [["podarować", "to give (as a gift)"], ["życzyć", "to wish (+ dative)"], ["pożyczyć", "to lend, to borrow"], ["oddać", "to give back"], ["przynieść", "to bring"],
       ["obiecać", "to promise"], ["wierzyć", "to believe (+ dative)"], ["ufać", "to trust (+ dative)"], ["Wszystko mi jedno.", "I don't mind."], ["Przykro mi.", "I'm sorry (sympathy)."],
       ["Gorąco mi.", "I'm hot."], ["Nudno mi.", "I'm bored."], ["Daj spokój!", "Come on! / Leave it!"], ["niespodzianka", "surprise"], ["bukiet", "bouquet"], ["kartka", "card"]],
  19: [["pokroić", "to slice, cut"], ["dodać", "to add"], ["wymieszać", "to mix, stir"], ["ugotować", "to cook, boil"], ["usmażyć", "to fry"], ["upiec", "to bake"],
       ["nalać", "to pour"], ["przepis", "recipe"], ["garnek", "pot, saucepan"], ["patelnia", "frying pan"], ["piekarnik", "oven"], ["sól i pieprz", "salt and pepper"],
       ["cebula", "onion"], ["Niech pan wejdzie.", "Please come in (to a man)."], ["Zostaw to!", "Leave it!"], ["Pospiesz się!", "Hurry up!"]],
  20: [["najbardziej", "the most"], ["gorzej", "worse (adverb)"], ["dłuższy", "longer"], ["krótszy", "shorter (length)"], ["starszy", "older"], ["młodszy", "younger"],
       ["wyższy", "taller"], ["niższy", "shorter (height)"], ["taki sam", "the same"], ["inny", "different, other"], ["podobny", "similar"], ["Moim zdaniem…", "In my opinion…"],
       ["zgadzać się", "to agree"], ["Masz rację.", "You're right."], ["Nie zgadzam się.", "I disagree."]]
};

const UNIT_READS = {
  0: { read: { kind: "sms", title: "SMS od Kasi", body: ["Cześć! Tu Kasia, przyjaciółka Ani.", "Jestem tutaj, w kawiarni.", "Jak się masz?", "Do zobaczenia!"],
       q: [{ q: "Who is writing?", o: ["Kasia, Ania's friend", "Ania", "Ania's sister"], a: 0 }, { q: "Where is Kasia?", o: ["in a café", "at home", "at work"], a: 0 }, { q: "What does she ask?", o: ["how you are", "your name", "where you live"], a: 0 }] },
       cloze: "Dzień dobry! {{Mam|Jestem|Masz}} na imię Tom. {{Jestem|Jest|Są}} tutaj pierwszy raz. – Miło {{mi|mnie|ja}}! Ja {{jestem|jest|jesteś}} Ola." },
  1: { read: { kind: "email", title: "Zdjęcie rodziny", body: ["Cześć Olu!", "To jest zdjęcie mojej rodziny. Po lewej jest mój tata, a obok moja mama.", "To dziecko to mój syn, Adam. Ma pięć lat.", "A to jest moja siostra i jej mąż.", "Pozdrawiam, Marek"],
       q: [{ q: "Who is on the left?", o: ["Marek's dad", "Marek's mum", "Marek's son"], a: 0 }, { q: "Who is Adam?", o: ["Marek's son", "Marek's brother", "Marek's sister's husband"], a: 0 }, { q: "How old is Adam?", o: ["5", "15", "25"], a: 0 }] },
       cloze: "To jest {{moja|mój|moje}} mama, a to {{mój|moja|moje}} tata. A to jest {{moje|mój|moja}} dziecko. Kto to jest? To {{twoja|twój|twoje}} siostra?" },
  2: { read: { kind: "form", title: "Karta biblioteczna", body: ["Imię: Ola", "Nazwisko: Nowak", "Wiek: 22 lata", "Telefon: 600 123 456", "Wypożyczone książki: 3"],
       q: [{ q: "How old is Ola?", o: ["22", "12", "20"], a: 0 }, { q: "How many books has she borrowed?", o: ["3", "6", "22"], a: 0 }, { q: "What's her surname?", o: ["Nowak", "Ola", "Telefon"], a: 0 }] },
       cloze: "Mam dwadzieścia {{lat|lata|rok}}. Mój brat ma dwanaście {{lat|lata|rok}}, a siostra ma trzy {{lata|lat|rok}}. My {{mamy|mają|macie}} też dom." },
  3: { read: { kind: "menu", title: "Kawiarnia „Pod Wawelem”", body: ["Kawa czarna | 9 zł", "Kawa z mlekiem | 11 zł", "Herbata | 8 zł", "Sok pomarańczowy | 10 zł", "Ciastko | 7 zł", "Kanapka z serem | 14 zł"],
       q: [{ q: "How much is a coffee with milk?", o: ["11 zł", "9 zł", "8 zł"], a: 0 }, { q: "What's the cheapest thing?", o: ["a cake", "tea", "juice"], a: 0 }, { q: "What's in the sandwich?", o: ["cheese", "ham", "egg"], a: 0 }] },
       cloze: "Dzień dobry! Poproszę {{kawę|kawa|kawy}} z mlekiem i {{kanapkę|kanapka|kanapki}}. A dla syna {{sok|soku|soki}}. Poproszę też {{rachunek|rachunku|rachunki}}." },
  4: { read: { kind: "notice", title: "Szukam partnera do rozmowy!", body: ["Mam na imię Emma. Mieszkam w Krakowie i pracuję w szkole.", "Mówię po angielsku i trochę po polsku.", "Szukam osoby, która mówi po polsku i chce mówić po angielsku.", "Tel. 500 111 222"],
       q: [{ q: "Where does Emma work?", o: ["in a school", "in a bank", "in an office"], a: 0 }, { q: "Which languages does she speak?", o: ["English and a little Polish", "only Polish", "Polish and German"], a: 0 }, { q: "What is she looking for?", o: ["a conversation partner", "a flat", "a job"], a: 0 }] },
       cloze: "Ja {{mieszkam|mieszka|mieszkają}} w Warszawie. Mój brat {{pracuje|pracuję|pracujesz}} w banku. My często {{czytamy|czytają|czytam}} książki. Czy ty {{mówisz|mówię|mówi}} po polsku?" },
  5: { read: { kind: "sms", title: "SMS od Ani", body: ["Jestem jeszcze w pracy.", "Potem jestem na poczcie i w sklepie.", "Wieczorem jestem w domu.", "Kino jutro?"],
       q: [{ q: "Where is Ania now?", o: ["at work", "at home", "at the post office"], a: 0 }, { q: "Where will she be in the evening?", o: ["at home", "at the cinema", "in the shop"], a: 0 }, { q: "What does she suggest?", o: ["the cinema tomorrow", "the park today", "dinner now"], a: 0 }] },
       cloze: "Mieszkam w {{Polsce|Polska|Polskę}}. Teraz jestem w {{parku|park|parkiem}}. Potem jestem na {{poczcie|poczta|pocztę}}, a wieczorem w {{domu|dom|domem}}." },
  6: { read: { kind: "ad", title: "Szukam współlokatora", body: ["Mam 25 lat, lubię sport i muzykę.", "Nie lubię hałasu i nie palę.", "Bardzo lubię gotować – lubisz pizzę?", "Nie mam kota ani psa.", "tel. 600 700 800"],
       q: [{ q: "What does the writer like?", o: ["sport, music and cooking", "noise", "cats"], a: 0 }, { q: "Which is true?", o: ["The writer doesn't smoke", "The writer has a dog", "The writer is 52"], a: 0 }, { q: "Which food is mentioned?", o: ["pizza", "fish", "chocolate"], a: 0 }] },
       cloze: "Lubię {{muzykę|muzyka|muzyki}} i sport. Nie lubię {{kawy|kawa|kawę}}. Mój brat lubi {{rybę|ryba|ryby}}, ale nie lubi {{mięsa|mięso|mięsem}}." },
  7: { read: { kind: "notice", title: "Basen miejski · godziny otwarcia", body: ["pon.–pt. 6:00–22:00", "sobota 8:00–20:00", "niedziela 9:00–15:00", "We wtorek od 10:00 do 12:00 basen nieczynny."],
       q: [{ q: "When does the pool open on Saturday?", o: ["at 8:00", "at 6:00", "at 9:00"], a: 0 }, { q: "When is it closed?", o: ["Tuesday, 10:00–12:00", "all day Sunday", "every evening"], a: 0 }, { q: "Until when is it open on Sunday?", o: ["15:00", "20:00", "22:00"], a: 0 }] },
       cloze: "{{W|We|O}} poniedziałek pracuję. {{We|W|O}} wtorek mam czas. Spotkanie jest {{o|w|we}} ósmej. W {{sobotę|sobota|sobocie}} jestem w domu." },
  8: { read: { kind: "ad", title: "SPRZEDAM", body: ["Kurtka zimowa, czarna, rozmiar M – 120 zł", "Sukienka czerwona, nowa – 80 zł", "Buty sportowe, białe – 60 zł", "Wszystko w bardzo dobrym stanie.", "tel. 511 222 333"],
       q: [{ q: "What colour is the dress?", o: ["red", "black", "white"], a: 0 }, { q: "How much is the jacket?", o: ["120 zł", "80 zł", "60 zł"], a: 0 }, { q: "Which is true?", o: ["Everything is in very good condition", "The shoes are black", "The jacket is size L"], a: 0 }] },
       cloze: "To jest {{nowy|nowa|nowe}} dom. Mam {{czerwone|czerwony|czerwona}} auto. Ta kurtka jest bardzo {{droga|drogi|drogie}}, ale {{ładna|ładny|ładne}}." },
  9: { read: { kind: "notice", title: "Jak do nas dojechać?", body: ["Szkoła Języka Polskiego, ul. Floriańska 10", "Z dworca: idź prosto 10 minut albo jedź tramwajem nr 4 (dwa przystanki).", "Przystanek: Teatr Słowackiego. Potem w lewo.", "Parking obok szkoły."],
       q: [{ q: "How long is the walk from the station?", o: ["10 minutes", "4 minutes", "2 minutes"], a: 0 }, { q: "Which tram?", o: ["number 4", "number 10", "number 2"], a: 0 }, { q: "Where is the car park?", o: ["next to the school", "at the station", "there isn't one"], a: 0 }] },
       cloze: "Rano {{idę|jadę|idzie}} do pracy pieszo. Mój brat {{jedzie|idzie|jadę}} do pracy autobusem. W sobotę jedziemy do {{Krakowa|Kraków|Krakowie}}. Idziesz do {{sklepu|sklep|sklepie}}?" },
  10: { read: { kind: "menu", title: "Paragon · sklep „Zielony Koszyk”", body: ["Jabłka 2 kg | 9,98 zł", "Mleko 1 l | 3,49 zł", "Chleb | 4,99 zł", "Woda 1,5 l | 1,99 zł", "RAZEM | 20,45 zł", "Płatność: karta"],
       q: [{ q: "How much was the bread?", o: ["4,99 zł", "3,49 zł", "9,98 zł"], a: 0 }, { q: "What was the total?", o: ["20,45 zł", "9,98 zł", "45,20 zł"], a: 0 }, { q: "How did the customer pay?", o: ["by card", "in cash", "by phone"], a: 0 }] },
       cloze: "To kosztuje dwa {{złote|złoty|złotych}}. Te jabłka kosztują pięć {{złotych|złote|złoty}}. Poproszę litr {{mleka|mleko|mlekiem}} i butelkę {{wody|woda|wodę}}." },
  11: { read: { kind: "email", title: "Weekend", body: ["Cześć Marto!", "W sobotę byłam w Krakowie. Najpierw byłam na rynku, potem w muzeum.", "Wieczorem jadłam pierogi w restauracji – były super!", "W niedzielę spałam cały dzień. :)", "Ala"],
       q: [{ q: "Where was Ala on Saturday?", o: ["in Kraków", "at home", "in Warsaw"], a: 0 }, { q: "What did she eat?", o: ["pierogi", "pizza", "fish"], a: 0 }, { q: "What did she do on Sunday?", o: ["slept all day", "went to a museum", "worked"], a: 0 }] },
       cloze: "Wczoraj Tomek {{był|była|byłem}} w kinie. Moja siostra {{była|był|byłam}} w pracy. My {{byliśmy|byli|był}} na kolacji, a oni {{czytali|czytał|czytałam}} w domu." },
  12: { read: { kind: "ad", title: "PRACA", body: ["Restauracja „Pod Lipą” szuka kucharza i kelnerki.", "Praca od poniedziałku do piątku, 10:00–18:00.", "Wymagany język polski (komunikatywny).", "CV: praca@podlipa.pl"],
       q: [{ q: "Who is the restaurant looking for?", o: ["a cook and a waitress", "a driver", "a doctor"], a: 0 }, { q: "What are the hours?", o: ["Mon–Fri, 10:00–18:00", "weekends only", "nights"], a: 0 }, { q: "What's required?", o: ["communicative Polish", "a car", "English"], a: 0 }] },
       cloze: "Jestem {{nauczycielem|nauczyciel|nauczyciela}}. Moja żona jest {{lekarką|lekarka|lekarkę}}. Idę do kina z {{bratem|brat|brata}}. Interesuję się {{muzyką|muzyka|muzykę}}." },
  13: { read: { kind: "sign", title: "Muzeum Narodowe", body: ["Wejście / Wyjście", "Pchać", "Palenie wzbronione", "Nie dotykać eksponatów!", "Wstęp wolny w czwartki"],
       q: [{ q: "What mustn't you do?", o: ["smoke or touch the exhibits", "go in", "buy tickets"], a: 0 }, { q: "When is entry free?", o: ["on Thursdays", "on Mondays", "every day"], a: 0 }, { q: "„Pchać” on a door means…", o: ["push", "pull", "closed"], a: 0 }] },
       cloze: "Przepraszam, {{muszę|musi|musisz}} już iść. Czy {{może|mogę|możesz}} pan mi pomóc? Oni {{chcą|chce|chcę}} jechać do Krakowa. Tu nie {{wolno|musi|umie}} palić." },
  14: { read: { kind: "ad", title: "SPRZEDAM DOM", body: ["Dom na wsi, 120 m²", "5 pokoi, 2 łazienki, duża kuchnia", "Ogród i garaż na dwa samochody", "Cena: 650 000 zł", "tel. 602 333 444"],
       q: [{ q: "How many rooms?", o: ["5", "2", "120"], a: 0 }, { q: "How many cars fit in the garage?", o: ["two", "one", "five"], a: 0 }, { q: "Where is the house?", o: ["in the countryside", "in the city centre", "by the sea"], a: 0 }] },
       cloze: "W mieszkaniu są trzy {{pokoje|pokój|pokoi}}. Mam dwa {{koty|kot|kotów}} i pięć {{książek|książki|książka}}. W parku jest dużo {{ludzi|ludzie|człowiek}}." },
  15: { read: { kind: "timetable", title: "Plan dnia – Ania", body: ["Godzina | Co robię?", "6:30 | budzę się", "7:00 | myję się i ubieram się", "7:30 | śniadanie", "8:00–16:00 | praca", "18:00 | uczę się polskiego", "23:00 | idę spać"],
       q: [{ q: "What does Ania do at 18:00?", o: ["she studies Polish", "she has breakfast", "she works"], a: 0 }, { q: "When does she wake up?", o: ["6:30", "7:00", "8:00"], a: 0 }, { q: "How long does she work?", o: ["8 hours", "6 hours", "10 hours"], a: 0 }] },
       cloze: "Codziennie budzę {{się|sobie|siebie}} o siódmej. Potem {{myję|myje|myjesz}} się i ubieram się. Jak się {{nazywasz|nazywam|nazywa}}? Ten film bardzo mi się {{podoba|lubi|podobam}}." },
  16: { read: { kind: "email", title: "Plany na wakacje", body: ["Cześć Zosiu!", "W lipcu pojadę nad morze, do Gdańska. Będę tam dwa tygodnie.", "Będę pływać i odpoczywać na plaży. W sierpniu odwiedzę babcię w górach.", "A ty? Co będziesz robić?", "Michał"],
       q: [{ q: "Where will Michał go in July?", o: ["to the seaside (Gdańsk)", "to the mountains", "abroad"], a: 0 }, { q: "How long will he stay?", o: ["two weeks", "one week", "a month"], a: 0 }, { q: "Who will he visit in August?", o: ["his grandma", "his sister", "Zosia"], a: 0 }] },
       cloze: "Jutro {{będę|jestem|byłem}} w domu. W weekend {{pojadę|pojechałem|pojechali}} do Krakowa – już mam bilet. Co {{będziesz|będzie|będę}} robić w sobotę? Oni {{będą|będzie|będę}} pracować." },
  17: { read: { kind: "sms", title: "SMS od mamy", body: ["Kuba, zrobiłeś już zakupy?", "Kup jeszcze chleb i mleko.", "Ja wrócę o szóstej, a potem zjemy obiad.", "Nie zapomnij zadzwonić do babci!"],
       q: [{ q: "What does mum ask first?", o: ["if Kuba has done the shopping", "what time it is", "where Kuba is"], a: 0 }, { q: "When will mum be back?", o: ["at six", "at seven", "at noon"], a: 0 }, { q: "What mustn't Kuba forget?", o: ["to call grandma", "to cook", "to buy a cake"], a: 0 }] },
       cloze: "Codziennie {{czytam|przeczytam|przeczytałem}} gazetę. Wczoraj {{przeczytałem|przeczytam|czytam}} całą książkę. Jutro {{napiszę|piszę|pisałem}} list do mamy. Długo {{oglądałem|obejrzę|obejrzałem}} telewizję." },
  18: { read: { kind: "sms", title: "Kartka urodzinowa", body: ["Droga Mamo!", "Dziękuję Ci za wszystko.", "Życzę Ci dużo zdrowia i szczęścia!", "Kupiłem Ci kwiaty i książkę – mam nadzieję, że Ci się spodobają.", "Twój syn, Kuba"],
       q: [{ q: "Who is the card for?", o: ["Kuba's mum", "Kuba's sister", "a friend"], a: 0 }, { q: "What did Kuba buy?", o: ["flowers and a book", "perfume", "a cake"], a: 0 }, { q: "What does he wish her?", o: ["health and happiness", "a good trip", "luck in an exam"], a: 0 }] },
       cloze: "Dziękuję {{ci|cię|ty}} za prezent! Kupię {{mamie|mama|mamę}} kwiaty. Daj {{mi|mnie|ja}} to, proszę. Zimno {{mi|mnie|ja}}." },
  19: { read: { kind: "notice", title: "Przepis: jajecznica", body: ["Składniki: 3 jajka, masło, sól, pieprz", "1. Rozgrzej masło na patelni.", "2. Dodaj jajka i wymieszaj.", "3. Smaż 2–3 minuty.", "4. Dodaj sól i pieprz. Smacznego!"],
       q: [{ q: "How many eggs?", o: ["3", "2", "4"], a: 0 }, { q: "What do you heat first?", o: ["butter", "water", "oil"], a: 0 }, { q: "How long do you fry the eggs?", o: ["2–3 minutes", "10 minutes", "30 seconds"], a: 0 }] },
       cloze: "{{Chodź|Chodzić|Chodzisz}} tutaj, szybko! Dzieci, {{słuchajcie|słuchaj|słuchają}}! Proszę {{usiąść|usiądź|usiadł}}. Nie {{martw|martwić|martwisz}} się!" },
  20: { read: { kind: "ad", title: "Porównaj telefony", body: ["Model A: 1200 zł, ekran 6,1″, bateria 1 dzień", "Model B: 1800 zł, ekran 6,7″, bateria 2 dni", "Model C: 900 zł, ekran 5,8″, bateria 1 dzień", "Najlepszy wybór: Model B – największy ekran i najlepsza bateria!"],
       q: [{ q: "Which is the cheapest?", o: ["Model C", "Model A", "Model B"], a: 0 }, { q: "Which has the biggest screen?", o: ["Model B", "Model A", "Model C"], a: 0 }, { q: "Why is B the best choice, according to the ad?", o: ["biggest screen and best battery", "lowest price", "smallest size"], a: 0 }] },
       cloze: "Kraków jest {{mniejszy|mały|najmniejszy}} niż Warszawa. Ta kawa jest {{lepsza|dobra|najlepsza}} niż tamta. To jest {{najlepsza|lepszy|najlepszy}} restauracja w mieście. Mówisz po polsku coraz {{lepiej|lepszy|dobrze}}!" }
};

/* Can-do statements for the new units (ids 21–33) */
const NEW_CAN_DO = {
  21: ["Say where you're from and which languages you speak", "Give your personal details and fill in a hotel form"],
  22: ["Describe what someone looks like and what they're wearing", "Say what someone is like as a person"],
  23: ["Say what there isn't or what's run out", "Ask for quantities and everyday household things"],
  24: ["Name the months and seasons and talk about the weather", "Say dates and give birthday and holiday wishes"],
  25: ["Describe your flat or house, room by room", "Say where things are: on, under, above, behind, between"],
  26: ["Buy a ticket and ask about platforms, departures and arrivals", "Read a departure board and a timetable"],
  27: ["Say what hurts and how you feel", "See a doctor and buy medicine at a pharmacy"],
  28: ["Join sentences with and, but, so, because, that and when", "Write a text message, a short email and a „Mój dzień” essay"],
  29: ["Order in a restaurant politely with 'would'", "Say what you would like to do"],
  30: ["Talk about groups of men and mixed groups correctly", "Address people politely and start formal and informal letters"],
  31: ["Make and answer simple phone calls", "Invite people, accept and decline, and say why"],
  32: ["Deal with a bank, a post office and simple official matters", "Rent a flat and fill in forms and applications"],
  33: ["Talk about trips, sights and nature", "Say how long, since when and how long ago things happened"]
};

/* Course order. The original units keep their ids (0–20) so saved progress,
   flashcards and test scores stay attached; new units (21–33) are placed where
   they belong. The first 25 positions are A1, the rest A2. */
const COURSE_ORDER = [0, 1, 21, 2, 3, 4, 5, 6, 23, 7, 24, 8, 22, 9, 26, 10, 11, 12, 25, 13, 27, 14, 15, 16, 28,
                      17, 29, 18, 30, 19, 31, 32, 20, 33];
const A1_COUNT = 25;

/* Extra grammar reminder tables */
const NEW_REF = [
{
  id: "dates", pl: "Miesiące i daty", en: "Months, dates & ordinal numbers", units: [24, 26, 32],
  note: "Today's date: the day in the nominative + the month in the genitive (Dzisiaj jest trzeci maja). On a date: both in the genitive (trzeciego maja).",
  tables: [
    { caption: "Months", head: ["month", "on the … of", "in …"], rows: [
      ["styczeń", "stycznia", "w styczniu"], ["luty", "lutego", "w lutym"], ["marzec", "marca", "w marcu"], ["kwiecień", "kwietnia", "w kwietniu"],
      ["maj", "maja", "w maju"], ["czerwiec", "czerwca", "w czerwcu"], ["lipiec", "lipca", "w lipcu"], ["sierpień", "sierpnia", "w sierpniu"],
      ["wrzesień", "września", "we wrześniu"], ["październik", "października", "w październiku"], ["listopad", "listopada", "w listopadzie"], ["grudzień", "grudnia", "w grudniu"]
    ] },
    { caption: "Ordinal numbers (the day: … is / on the …)", head: ["", "Dzisiaj jest…", "…-ego (on)"], pl: [1, 2], rows: [
      ["1", "pierwszy", "pierwszego"], ["2", "drugi", "drugiego"], ["3", "trzeci", "trzeciego"], ["4", "czwarty", "czwartego"], ["5", "piąty", "piątego"],
      ["6", "szósty", "szóstego"], ["7", "siódmy", "siódmego"], ["8", "ósmy", "ósmego"], ["9", "dziewiąty", "dziewiątego"], ["10", "dziesiąty", "dziesiątego"],
      ["11", "jedenasty", "jedenastego"], ["12", "dwunasty", "dwunastego"], ["15", "piętnasty", "piętnastego"], ["20", "dwudziesty", "dwudziestego"],
      ["21", "dwudziesty pierwszy", "dwudziestego pierwszego"], ["30", "trzydziesty", "trzydziestego"], ["31", "trzydziesty pierwszy", "trzydziestego pierwszego"]
    ] }
  ]
},
{
  id: "conditional", pl: "Tryb przypuszczający", en: "The conditional (would)", units: [29, 31, 32],
  note: "Past-tense form + -by- + ending. Polite requests (Chciałbym…, Czy mógłby pan…?), wishes and suggestions.",
  tables: [
    { head: ["", "chcieć (m)", "chcieć (f)", "móc (m)", "móc (f)"], rows: [
      ["ja", "chciałbym", "chciałabym", "mógłbym", "mogłabym"], ["ty", "chciałbyś", "chciałabyś", "mógłbyś", "mogłabyś"], ["on / ona", "chciałby", "chciałaby", "mógłby", "mogłaby"],
      ["my", "chcielibyśmy", "chciałybyśmy", "moglibyśmy", "mogłybyśmy"], ["wy", "chcielibyście", "chciałybyście", "moglibyście", "mogłybyście"], ["oni / one", "chcieliby", "chciałyby", "mogliby", "mogłyby"]
    ] }
  ]
},
{
  id: "vocative", pl: "Wołacz", en: "Calling people (vocative)", units: [30],
  note: "Used when you call or write to someone: Panie Marku!, Droga Ewo!",
  tables: [
    { head: ["name / title", "vocative"], pl: [0, 1], rows: [
      ["pan", "Panie!"], ["pani", "Pani!"], ["Marek", "Marku!"], ["Piotr", "Piotrze!"], ["Tomek", "Tomku!"], ["Adam", "Adamie!"], ["Ewa", "Ewo!"], ["Ania", "Aniu!"],
      ["Kasia", "Kasiu!"], ["Marta", "Marto!"], ["profesor", "profesorze!"], ["kolega", "kolego!"], ["mama", "mamo!"], ["tata", "tato!"]
    ] }
  ]
},
{
  id: "men-plural", pl: "Rodzaj męskoosobowy", en: "Men and mixed groups", units: [30, 14],
  note: "Groups with at least one man use special plural forms for nouns, adjectives, numbers and past-tense verbs.",
  tables: [
    { head: ["singular", "men / mixed", "women / things"], rows: [
      ["student / studentka", "studenci", "studentki"], ["Polak / Polka", "Polacy", "Polki"], ["kolega / koleżanka", "koledzy", "koleżanki"],
      ["pan / pani", "panowie", "panie"], ["nowy", "nowi", "nowe"], ["dobry", "dobrzy", "dobre"], ["był / była", "byli", "były"],
      ["dwa / dwie", "dwaj (+ nom.) / dwóch (+ gen.)", "dwa / dwie"], ["trzy", "trzej / trzech", "trzy"], ["pięć", "pięciu (+ gen.)", "pięć"]
    ] }
  ]
},
{
  id: "linking", pl: "Spójniki", en: "Linking words", units: [28, 31],
  note: "Commas go before a, ale, więc, bo, że, kiedy, gdy, żeby, dlatego (że) — but normally not before i, lub, albo.",
  tables: [
    { head: ["word", "meaning", "level"], pl: [0], rows: [
      ["i", "and", "A1"], ["a", "and / while", "A1"], ["ale", "but", "A1"], ["lub", "or", "A1"], ["więc", "so", "A1"], ["że", "that", "A1"],
      ["bo / dlatego że", "because", "A1"], ["kiedy", "when", "A1"], ["albo / czy", "or", "A2"], ["a także", "and also", "A2"], ["dlatego", "that's why", "A2"],
      ["gdy", "when", "A2"], ["żeby", "in order to, so that", "A2"]
    ] }
  ]
}
];
/* New units also use some existing tables */
const REF_EXTRA_UNITS = { cases: [23], "nouns-sg": [23], prepositions: [23, 25, 33], numbers: [24, 32], adjectives: [22], pronouns: [27], past: [33], softening: [25], questions: [26] };
