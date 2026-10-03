/* Fixes from the audit against the adult standard (research/standards_audit.md):
   extra grammar for existing units, changed writing tasks, and listening-
   comprehension questions for every unit's dialogue. Quiz items and words are
   only appended, so saved progress and flashcards stay attached. */
const GRAMMAR_ADD = {
  9: `<h4>Where to? or where? (dokąd? / gdzie?)</h4>
<p>Some prepositions take one case for <b>movement</b> and another for <b>location</b>. The question tells you which:</p>
<ul><li><b>na</b>: dokąd? + accusative (<b>Idę na pocztę, na koncert</b>) · gdzie? + locative (<b>Jestem na poczcie, na koncercie</b>)</li>
<li><b>w</b>: dokąd? + accusative for mountains and some regions (<b>Jadę w góry</b>) · gdzie? + locative (<b>Jestem w górach</b>)</li>
<li><b>nad, pod, za</b>: dokąd? + accusative (<b>Jedziemy nad morze, za granicę</b>) · gdzie? + instrumental (<b>Jesteśmy nad morzem, za granicą</b>)</li></ul>
<p>Places you go <b>do</b> (do sklepu, do domu) are places you are <b>w</b> (w sklepie, w domu). People: <b>do lekarza</b> (going) → <b>u lekarza</b> (being there).</p>`,
  3: `<h4>Verbs with na, o, za + accusative</h4>
<p>Some verbs always take a preposition, followed by the accusative: <b>czekać na</b> (wait for): <b>Czekam na autobus</b>; <b>patrzeć na</b> (look at); <b>pytać o</b> (ask about): <b>Pytam o drogę</b>; <b>prosić o</b> (ask for): <b>Proszę o rachunek</b>; <b>płacić za</b> (pay for), <b>dziękować za</b> (thank for): <b>Dziękuję za kawę</b>.</p>`,
  5: `<h4>Talking about, walking around: o and po + locative</h4>
<p>Two more prepositions take the locative: <b>o</b> = about (<b>rozmawiać o pracy, myśleć o wakacjach, książka o Polsce</b>) and <b>po</b> = around / after (<b>spacerować po parku, po mieście; po pracy, po obiedzie</b>). <b>przy</b> = by, next to: <b>przy oknie</b>.</p>`,
  23: `<h4>Disappearing e</h4>
<p>In many masculine nouns the <b>e</b> of the last syllable drops out when an ending is added: <b>pies → psa, chłopiec → chłopca, uczeń → ucznia, ołówek → ołówka, cukierek → cukierka, domek → domku, Marek → Marka</b>. Learn the genitive with the word.</p>
<p><b>pani</b> is irregular: genitive, dative and locative <b>pani</b>, accusative and instrumental <b>panią</b>: <b>Nie ma pani Ewy. Znam panią Ewę.</b></p>`
};
const QUIZ_ADD = {
  9: [
    { t: "choice", q: "Wieczorem idę ___.", o: ["na koncert", "na koncercie", "w koncert"], a: 0 },
    { t: "choice", q: "W sierpniu jesteśmy ___.", o: ["nad morzem", "nad morze", "na morze"], a: 0 },
    { t: "choice", q: "W lipcu jedziemy ___.", o: ["w góry", "w górach", "do górach"], a: 0 },
    { t: "fill", q: "Jestem teraz na ___.", h: "poczta (where?)", a: ["poczcie"], en: "I'm at the post office now." },
    { t: "fill", q: "Idę na ___.", h: "poczta (where to?)", a: ["pocztę"], en: "I'm going to the post office." }
  ],
  3: [
    { t: "fill", q: "Czekam na ___.", h: "autobus", a: ["autobus"], en: "I'm waiting for the bus." },
    { t: "fill", q: "Proszę o ___.", h: "rachunek", a: ["rachunek"], en: "The bill, please." },
    { t: "choice", q: "Dziękuję ___ kawę!", o: ["za", "na", "o"], a: 0 },
    { t: "choice", q: "Przepraszam, pytam ___ drogę do dworca.", o: ["o", "na", "za"], a: 0 }
  ],
  5: [
    { t: "fill", q: "Często rozmawiamy o ___.", h: "praca", a: ["pracy"], en: "We often talk about work." },
    { t: "fill", q: "Lubię spacerować po ___.", h: "park", a: ["parku"], en: "I like walking around the park." },
    { t: "choice", q: "Po ___ idę na siłownię.", o: ["pracy", "praca", "pracę"], a: 0 }
  ],
  23: [
    { t: "fill", q: "Mam dużego ___.", h: "pies", a: ["psa"], en: "I have a big dog." },
    { t: "fill", q: "To jest książka tego ___.", h: "chłopiec", a: ["chłopca"], en: "This is that boy's book." },
    { t: "choice", q: "Znam ___ Ewę.", o: ["panią", "pani", "panie"], a: 0 },
    { t: "choice", q: "Nie ma tu ___ Ewy.", o: ["pani", "panią", "panem"], a: 0 }
  ]
};
/* words for the new grammar above */
const EXTRA_VOCAB_3 = {
  9: [["nad morze / nad morzem", "to the seaside / at the seaside"], ["w góry / w górach", "to the mountains / in the mountains"], ["za granicę / za granicą", "abroad (going / being)"],
      ["na koncert / na koncercie", "to a concert / at a concert"], ["Dokąd jedziesz na wakacje?", "Where are you going on holiday?"]],
  3: [["czekać na", "to wait for (+ accusative)"], ["patrzeć na", "to look at (+ accusative)"], ["pytać o", "to ask about (+ accusative)"], ["prosić o", "to ask for (+ accusative)"],
      ["płacić za", "to pay for (+ accusative)"], ["dziękować za", "to thank for (+ accusative)"]],
  5: [["rozmawiać o", "to talk about (+ locative)"], ["myśleć o", "to think about (+ locative)"], ["spacerować po", "to walk around (+ locative)"], ["po pracy", "after work"],
      ["przy oknie", "by the window"]],
  23: [["uczeń / uczennica", "pupil (m / f)", "gen. ucznia"], ["ołówek", "pencil", "gen. ołówka"], ["cukierek", "sweet, candy", "gen. cukierka"]]
};
/* A1 writing types the standard requires: an informal letter and holiday greetings */
const WRITING_SET = {
  11: { prompt: "Write an email to a friend about your weekend: a greeting, what you did on Saturday and Sunday, and a goodbye (5–6 sentences).",
        model: "Cześć Ola!\nW sobotę byłem u brata w Krakowie. Zwiedzaliśmy Stare Miasto i jedliśmy pierogi. W niedzielę odpoczywałem w domu i czytałem książkę. Wieczorem oglądałem film. A co ty robiłaś w weekend?\nPozdrawiam,\nMarko" },
  24: { prompt: "Write a holiday postcard to a friend: greetings from where you are, the weather, what you do every day and a goodbye.",
        model: "Pozdrowienia z Zakopanego!\nJestem tu z rodziną od soboty. Pogoda jest piękna, świeci słońce, ale w nocy jest zimno. Codziennie chodzimy po górach i jemy oscypki. Wracamy w piątek.\nŚciskam,\nMarko" }
};
/* Reference table for movement vs location */
const NEW_REF_2 = [{
  id: "where-whereto", pl: "Gdzie? Dokąd?", en: "Where? and where to?", units: [9, 3, 5],
  note: "Movement (dokąd?) and location (gdzie?) often use different prepositions or cases.",
  tables: [{ head: ["dokąd? (going)", "gdzie? (being)"], pl: [0, 1], rows: [
    ["do sklepu", "w sklepie"], ["do domu", "w domu"], ["do Polski", "w Polsce"], ["do lekarza", "u lekarza"], ["na pocztę", "na poczcie"], ["na koncert", "na koncercie"],
    ["w góry", "w górach"], ["nad morze", "nad morzem"], ["nad jezioro", "nad jeziorem"], ["za granicę", "za granicą"], ["na Mazury", "na Mazurach"]
  ] }, { caption: "Verbs with a fixed preposition", head: ["verb", "case", "example"], pl: [0, 2], rows: [
    ["czekać na", "biernik", "Czekam na autobus."], ["patrzeć na", "biernik", "Patrzę na zdjęcie."], ["pytać o", "biernik", "Pytam o drogę."], ["prosić o", "biernik", "Proszę o rachunek."],
    ["płacić za", "biernik", "Płacę za bilet."], ["dziękować za", "biernik", "Dziękuję za pomoc."], ["rozmawiać o", "miejscownik", "Rozmawiamy o pracy."], ["myśleć o", "miejscownik", "Myślę o tobie."],
    ["spacerować po", "miejscownik", "Spacerujemy po parku."], ["interesować się", "narzędnik", "Interesuję się sportem."], ["szukać", "dopełniacz", "Szukam pracy."], ["pomagać", "celownik", "Pomagam mamie."]
  ] }]
}];

/* Listening comprehension: three questions on each unit's dialogue, asked
   after hearing it without the text (first option is the right one) */
const LISTEN_Q = {
  0: [["What's the man's name?", "Tom", "Tomek", "Kasia"], ["How is Tom?", "well", "not great", "ill"], ["How do they talk to each other?", "informally", "formally", "on the phone"]],
  1: [["Who is Ania?", "the speaker's sister", "his wife", "his mother"], ["Who else is in the picture?", "his brother and his wife", "his parents", "a friend"], ["Whose house is it?", "the speaker's", "the brother's", "Ania's"]],
  21: [["Where does this conversation take place?", "at a hotel reception", "at a bank", "at a station"], ["Where is Mr Novak from?", "Serbia", "Germany", "Poland"], ["Where does he live now?", "in Germany", "in Serbia", "in Kraków"]],
  2: [["How old is the first person who answers?", "25", "22", "20"], ["How old is the other speaker?", "22", "25", "32"], ["What siblings does that person have?", "a brother and two sisters", "two brothers", "none"]],
  3: [["What does the customer order?", "coffee with milk and a cake", "tea and a sandwich", "juice"], ["Does he want anything else?", "no", "yes, a sandwich", "yes, water"], ["How much does he pay?", "20 zł", "12 zł", "2 zł"]],
  4: [["How much Polish does the second speaker speak?", "a little, but understands a lot", "a lot", "none"], ["Where does the second speaker live?", "Kraków", "Warsaw", "Gdańsk"], ["Where does the first speaker work?", "in a bank in Warsaw", "in a shop in Kraków", "at home"]],
  5: [["Where is the person who answers the phone?", "in a shop", "at work", "at home"], ["Where is the caller?", "still at work", "at home", "at the station"], ["Where will the caller be in the evening?", "at home", "at the cinema", "at work"]],
  6: [["What does the second speaker like doing?", "reading and listening to music", "sport", "cooking"], ["What does the second speaker prefer to sport?", "films", "music", "fish"], ["What doesn't the first speaker like?", "fish", "sport", "films"]],
  23: [["What's missing in the kitchen?", "bread and milk", "coffee", "cheese"], ["What's missing in the bathroom?", "toothpaste and soap", "shampoo", "towels"], ["Where is the speaker going?", "to the drugstore and the shop", "to the market", "to the pharmacy"]],
  7: [["Why can't they meet on Friday?", "one of them works", "the cinema is closed", "it's raining"], ["When do they meet?", "Saturday at seven", "Friday at five", "Sunday"], ["What time is it now?", "five o'clock", "seven o'clock", "eight o'clock"]],
  24: [["When is the second speaker's birthday?", "15 March", "25 November", "in August"], ["When is the first speaker's name day?", "25 November", "15 March", "in August"], ["What's the weather usually like then?", "cold and rainy", "sunny", "snowy"]],
  8: [["What's wrong with the first jacket?", "it's expensive", "it's small", "it's ugly"], ["What's wrong with the black one?", "it's small", "it's expensive", "it's old"], ["Which one does the speaker prefer in the end?", "the blue one", "the black one", "the first one"]],
  22: [["Where will Paweł be waiting?", "at the station", "at the airport", "at home"], ["What does Paweł look like?", "tall and slim, with a beard", "short, with long hair", "tall, with no hair"], ["What will he probably be wearing?", "a green coat", "a black jacket", "a red jumper"]],
  9: [["Where is the first speaker going?", "to the shop", "to work", "home"], ["How is the second speaker getting to work?", "by tram", "by bus", "on foot"], ["Where is the tram stop?", "nearby", "far away", "at the station"]],
  26: [["What ticket does the passenger buy?", "a full-price return", "a reduced one-way", "a full-price one-way"], ["Which platform does the train leave from?", "2", "3", "10"], ["When does the train arrive in Gdańsk?", "at 14:20", "at 10:15", "at 10:25"]],
  10: [["How much are the apples?", "5 zł a kilo", "13 zł a kilo", "2 zł a kilo"], ["What else does she buy?", "a bottle of water", "bread", "milk"], ["How does she pay?", "by card", "in cash", "by phone"]],
  11: [["Where was the woman on Saturday?", "at her mum's, then in Kraków", "at the cinema", "at work"], ["What did the man do on Saturday?", "he went to the cinema", "he slept", "he visited his mum"], ["What did he do on Sunday?", "he slept all day", "he worked", "he went to Kraków"]],
  12: [["What does the man do?", "he's a programmer", "he's a teacher", "he's a doctor"], ["What does the woman teach?", "English", "Polish", "music"], ["What else is the woman interested in?", "music, she plays the guitar", "sport", "cooking"]],
  35: [["Who is the new neighbour?", "a young Ukrainian", "an old Pole", "a student from Serbia"], ["Where does he work?", "in the big hospital at the end of the street", "in a school", "in a shop"], ["What's the problem with the dog?", "it barks all night", "it's big", "it bites"]],
  25: [["What is the person looking for?", "keys", "a phone", "glasses"], ["Where weren't they?", "on the kitchen table", "on the shelf", "in the living room"], ["Where were they in the end?", "on the shelf above the desk", "under the sofa", "in a coat"]],
  13: [["Why can't the invited person go tonight?", "they have to work", "they're ill", "they have no money"], ["When will they go?", "tomorrow at seven", "tonight at ten", "on Saturday"], ["What does the person who invited need to do tomorrow?", "be back before ten", "work late", "buy tickets"]],
  27: [["What's the patient's problem?", "a sore throat and a runny nose", "a stomach ache", "a broken leg"], ["What's his temperature?", "38 degrees", "36 degrees", "40 degrees"], ["What does the doctor recommend?", "staying in bed and drinking tea", "going to hospital", "doing sport"]],
  14: [["How many rooms does the flat have?", "three", "two", "five"], ["How many windows does the living room have?", "two", "three", "one"], ["Can he live there with his cats?", "yes", "no", "only with one cat"]],
  34: [["Where was Marek at the weekend?", "in the mountains with friends", "at home", "shopping with his parents"], ["What did Ola buy the children?", "books", "flowers", "sweets"], ["Where are they going in July?", "to the lakes in Masuria", "to the seaside", "to the mountains"]],
  15: [["When does she wake up?", "at six", "at seven", "at eight"], ["When does she get up?", "at seven", "at six", "at nine"], ["What does she do after breakfast?", "she studies Polish", "she goes to work", "she goes back to bed"]],
  16: [["Where is the first speaker going on holiday?", "to the mountains", "to the seaside", "abroad"], ["For how long?", "a whole week", "two days", "a month"], ["Who will the second speaker visit?", "a friend in Gdańsk", "her parents", "a friend in Kraków"]],
  28: [["Why wasn't Marek at the meeting?", "he was ill", "he forgot", "he was at work"], ["How does he feel today?", "better, but a bit tired", "very ill", "great"], ["What will they do when he's well?", "go to the cinema", "go to a meeting", "go shopping"]],
  17: [["Has he finished the task?", "not yet, he's doing it now", "yes, yesterday", "he won't do it"], ["How long has he been doing it?", "an hour", "all day", "ten minutes"], ["What will they do afterwards?", "have dinner", "go to the cinema", "go to sleep"]],
  29: [["Where do they want to sit?", "by the window", "outside", "near the bar"], ["What does his wife want to drink?", "a glass of white wine", "water", "red wine"], ["What does the waitress recommend?", "pierogi ruskie", "fish", "soup"]],
  18: [["What is one speaker buying mum?", "flowers and a book", "perfume", "a cake"], ["What is the other one giving her?", "perfume", "flowers", "a book"], ["What will dad do?", "make her dinner", "buy her flowers", "nothing"]],
  30: [["What do Marek and Piotr do?", "they're programmers", "they're teachers", "they're managers"], ["Where are three of the colleagues today?", "on leave", "working from home", "at a meeting"], ["What does Tom ask about?", "where his desk is", "where the coffee is", "when lunch is"]],
  19: [["Where does the person want to go?", "to the station", "to the bridge", "to a café"], ["How far is it?", "five minutes", "half an hour", "very far"], ["What does the person have to cross?", "a bridge", "a park", "a square"]],
  31: [["Why is Tom calling?", "to invite Kasia to a party", "to cancel a meeting", "to ask for help"], ["What time does the party start?", "at eight in the evening", "at seven", "at six"], ["Why will Kasia come later?", "she works until seven", "she has another party", "she's ill"]],
  32: [["From when is the flat available?", "1 November", "1 December", "now"], ["How much is the deposit?", "one month's rent", "two thousand plus bills", "nothing"], ["How long is the contract?", "one year", "six months", "two years"]],
  20: [["Why does the first speaker prefer Kraków?", "it's smaller but prettier", "it's bigger", "it's more modern"], ["What is Warsaw like, according to them?", "bigger and more modern", "smaller and cheaper", "older and prettier"], ["Where are the best pierogi?", "at grandma's", "in Warsaw", "in a restaurant in Kraków"]],
  33: [["How long were they in Kraków?", "a week", "two days", "a month"], ["What was the weather like in Zakopane?", "it kept raining", "sunny and hot", "snowy"], ["Where hasn't the speaker been yet?", "to the Baltic Sea", "to the mountains", "to Kraków"]]
};
