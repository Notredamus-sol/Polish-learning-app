/* Two more A1 units (ids 34–35), added after an audit against the adult A1
   standard: it requires noun and adjective declension in the singular AND
   plural, which the course only had as reference tables. */
const NEW_UNITS_A1B = [
{
  id: 34, pl: "W sklepach, z kolegami", en: "In shops, with friends", tag: "plcases", tagLabel: "Plural cases",
  focus: "liczba mnoga · plural cases",
  vocab: [
    ["z przyjaciółmi", "with friends", "przyjaciele → z przyjaciółmi (irregular)"], ["z ludźmi", "with people", "ludzie → z ludźmi"], ["z dziećmi", "with the children", "dzieci → z dziećmi"],
    ["z rodzicami", "with my parents"], ["rodzicom", "to / for my parents (dative)"], ["w sklepach", "in shops"],
    ["na zakupach", "(out) shopping", "Byłam na zakupach."], ["o wakacjach", "about the holidays"], ["w górach", "in the mountains"], ["nad jeziorami", "by the lakes"],
    ["na zajęciach", "in class"], ["po zajęciach", "after class"], ["przed świętami", "before the holidays (Christmas, Easter)"], ["w Niemczech", "in Germany", "Niemcy is plural"],
    ["we Włoszech", "in Italy"], ["na Węgrzech", "in Hungary"], ["w Czechach", "in the Czech Republic"], ["na Mazurach", "in Masuria (the lake district)"],
    ["w Tatrach", "in the Tatra mountains"], ["turyści", "tourists"], ["mieszkańcy", "residents"],
    ["podwórko", "courtyard, yard"], ["schronisko górskie", "mountain hostel"], ["pamiątki", "souvenirs"], ["konkurs", "competition"], ["nagroda", "prize, reward"],
    ["dorosły / dorośli", "adult / adults"], ["wszyscy razem", "all together"]
  ],
  grammar: {
    title: "Plural cases: -om, -ami, -ach",
    html: `<p>Good news: in the plural, three cases have <b>the same endings for every gender</b>:</p>
<ul><li>dative <b>-om</b>: kolegom, siostrom, dzieciom — <b>Kupiłam prezenty dzieciom.</b></li>
<li>instrumental <b>-ami</b>: z kolegami, z siostrami, przed lekcjami — <b>Mieszkam z rodzicami.</b></li>
<li>locative <b>-ach</b>: w sklepach, o wakacjach, na zajęciach — <b>Rozmawiamy o wakacjach.</b></li></ul>
<p>A few common words have <b>-mi</b> in the instrumental: <b>z ludźmi, z dziećmi, z przyjaciółmi, z gośćmi, z pieniędzmi</b>.</p>
<p>The <b>accusative plural</b> is the same as the nominative (<b>Mam dwa koty. Lubię te książki.</b>), except for <b>men</b>, where it's the same as the genitive: <b>Znam tych studentów. Mam dwóch braci.</b></p>
<p>Adjectives follow along: <b>-ych / -ich</b> (genitive, locative), <b>-ym / -im</b> (dative), <b>-ymi / -imi</b> (instrumental): <b>w dużych miastach, z nowymi kolegami, moim przyjaciołom</b>.</p>
<p>Some country names are plural, so they take <b>-ach</b> too: <b>w Niemczech, we Włoszech, na Węgrzech, w Czechach</b>.</p>`,
    table: { head: ["case", "ending", "examples"], rows: [
      ["mianownik", "-y / -i / -e / -a", "koty, siostry, okna, studenci"], ["dopełniacz", "-ów / – / -i", "kotów, sióstr, okien, studentów"],
      ["celownik", "-om", "kotom, siostrom, dzieciom"], ["biernik", "= mianownik (men: = dopełniacz)", "Mam koty. Znam tych studentów."],
      ["narzędnik", "-ami (-mi)", "z kotami, z siostrami, z ludźmi"], ["miejscownik", "-ach", "o kotach, w sklepach, w oknach"]
    ], pl: [1, 2] }
  },
  quiz: [
    { t: "fill", q: "Mieszkam z ___.", h: "koledzy", a: ["kolegami"], en: "I live with friends." },
    { t: "fill", q: "Lubię robić zakupy w małych ___.", h: "sklepy", a: ["sklepach"], en: "I like shopping in small shops." },
    { t: "fill", q: "Rozmawiamy o ___.", h: "wakacje", a: ["wakacjach"], en: "We're talking about the holidays." },
    { t: "fill", q: "Kupiłam prezenty ___.", h: "dzieci (dative)", a: ["dzieciom"], en: "I bought presents for the children." },
    { t: "fill", q: "W lipcu byliśmy w ___.", h: "góry", a: ["górach"], en: "In July we were in the mountains." },
    { t: "fill", q: "Lubię rozmawiać z ___.", h: "ludzie", a: ["ludźmi"], en: "I like talking to people." },
    { t: "choice", q: "Pomagam ___ w ogrodzie.", o: ["rodzicom", "rodzicami", "rodzicach"], a: 0 },
    { t: "choice", q: "Znam tych ___.", o: ["studentów", "studenci", "studentach"], a: 0 },
    { t: "choice", q: "Mieszkałem w ___ miastach.", o: ["dużych", "duże", "dużymi"], a: 0 },
    { t: "choice", q: "Moja siostra mieszka ___.", o: ["w Niemczech", "w Niemcach", "w Niemcy"], a: 0 },
    { t: "order", a: "W weekendy spotykam się z przyjaciółmi", en: "At weekends I meet up with friends." },
    { t: "order", a: "Moi rodzice mieszkają we Włoszech", en: "My parents live in Italy." }
  ],
  dialogue: [
    ["Ola", "Co robiłeś w weekend?", "What did you do at the weekend?"],
    ["Marek", "Byłem z przyjaciółmi w górach. Spaliśmy w schroniskach.", "I was in the mountains with friends. We slept in mountain hostels."],
    ["Ola", "Super! A ja byłam z rodzicami na zakupach w nowych sklepach w centrum.", "Great! And I went shopping with my parents in the new shops in the centre."],
    ["Marek", "Kupiłaś coś?", "Did you buy anything?"],
    ["Ola", "Tak, prezenty dla dzieci. Dzieciom kupiłam książki, a sąsiadom kwiaty.", "Yes, presents for the children. I bought the children books, and the neighbours flowers."],
    ["Marek", "A wieczorem?", "And in the evening?"],
    ["Ola", "Rozmawialiśmy o wakacjach. W lipcu jedziemy z kolegami na Mazury, nad jeziora.", "We talked about the holidays. In July we're going with friends to Masuria, to the lakes."]
  ],
  partner: "Marek",
  scenario: "Marek asks who you spend your free time with, where you like to shop and what you talk about with friends. Use plural forms: z przyjaciółmi, w sklepach, o wakacjach.",
  writing: { prompt: "Write about the people you spend time with: who, where you meet and what you talk about (4–5 sentences with plural forms).", model: "W weekendy spotykam się z przyjaciółmi. Często chodzimy do małych kawiarni w centrum. Rozmawiamy o pracy, o filmach i o wakacjach. Z rodzicami rozmawiam przez telefon w niedziele. Lubię też pomagać sąsiadom." },
  read: { kind: "notice", title: "Ogłoszenie dla mieszkańców", body: ["Drodzy Mieszkańcy!", "W sobotę o 10:00 sprzątamy razem podwórko. Prosimy o pomoc dorosłych i dzieci.", "Dla dzieci będą konkursy z nagrodami, a dla dorosłych – kawa i ciasto.", "Po sprzątaniu porozmawiamy o nowych miejscach parkingowych.", "Administracja"],
    q: [{ q: "Who is asked to help?", o: ["adults and children", "only children", "only the administration"], a: 0 }, { q: "What's planned for the children?", o: ["competitions with prizes", "a film", "a trip"], a: 0 }, { q: "What will they talk about afterwards?", o: ["new parking spaces", "a new playground", "the rent"], a: 0 }] },
  cloze: "W wakacje byłam z {{rodzicami|rodzice|rodziców}} w {{górach|góry|górami}}. Codziennie chodziliśmy po {{lasach|lasy|lasami}} i rozmawialiśmy z {{ludźmi|ludzie|ludzi}} w schroniskach. Kupiłam pamiątki {{dzieciom|dzieci|dziećmi}}."
},
{
  id: 35, pl: "Mam nowego kolegę", en: "I've got a new colleague", tag: "adjcases", tagLabel: "Adjectives and 'this' in every case",
  focus: "przymiotniki · adjectives in every case",
  vocab: [
    ["ten / ta / to", "this (m / f / n)", "tego, tę, tym…"], ["jeden / jedna / jedno", "one (m / f / n)", "jeden bilet, jedna kawa, jedno piwo"],
    ["nowy kolega", "a new colleague"], ["Mam starszego brata.", "I have an older brother."], ["z młodszą siostrą", "with my younger sister"],
    ["w dużym mieście", "in a big city"], ["w małej wsi", "in a small village"], ["na ostatnim piętrze", "on the top floor"], ["do tego sklepu", "to this shop"],
    ["w tym tygodniu", "this week"], ["w tym roku", "this year"], ["tego dnia", "that day"], ["o tej porze", "at this time (of day)"],
    ["ten sam / ta sama / to samo", "the same"], ["każdego dnia", "every day"], ["cały / cała / całe", "whole, all", "cały dzień, całą noc"],
    ["przez cały tydzień", "all week"], ["szczekać", "to bark"], ["zgubić", "to lose"], ["zginąć", "to go missing; to die"], ["obroża", "(dog) collar"],
    ["łapa", "paw"], ["ulubiony kolor", "favourite colour"], ["najbliższy", "nearest"], ["na końcu ulicy", "at the end of the street"],
    ["wyjątkowy", "special, exceptional"], ["zwykły", "ordinary"], ["prawdziwy przyjaciel", "a true friend"]
  ],
  grammar: {
    title: "Adjectives, ten and jeden in every case",
    html: `<p>Adjectives, <b>ten / ta / to</b> (this) and <b>jeden / jedna / jedno</b> (one) always take <b>the same case as their noun</b>. Learn the endings once and they work for all of them:</p>
<ul><li>masculine and neuter: genitive <b>-ego</b>, dative <b>-emu</b>, instrumental and locative <b>-ym</b> (<b>-im</b> after k, g): <b>w dużym mieście, do tego sklepu</b></li>
<li>feminine: genitive, dative and locative <b>-ej</b>, accusative and instrumental <b>-ą</b>: <b>w małej wsi, z młodszą siostrą</b></li></ul>
<p>Two traps: the feminine accusative of <b>ta</b> is <b>tę</b> (<b>Poproszę tę kawę</b>), but its instrumental is <b>tą</b>. And a masculine adjective in the accusative is like the genitive for <b>people and animals</b> (<b>Mam starszego brata, dużego psa</b>) but stays the same for things (<b>Mam nowy telefon</b>).</p>
<p><b>jeden</b> agrees with the noun: <b>jeden bilet, jedna kawa, jedno piwo</b>, and declines like <b>ten</b>: <b>jednego, jednej, jedną, jednym</b>.</p>`,
    table: { head: ["case", "masculine", "feminine", "neuter"], rows: [
      ["mianownik", "ten nowy", "ta nowa", "to nowe"], ["dopełniacz", "tego nowego", "tej nowej", "tego nowego"], ["celownik", "temu nowemu", "tej nowej", "temu nowemu"],
      ["biernik", "ten nowy / tego nowego*", "tę nową", "to nowe"], ["narzędnik", "tym nowym", "tą nową", "tym nowym"], ["miejscownik", "tym nowym", "tej nowej", "tym nowym"]
    ], pl: [1, 2, 3] }
  },
  quiz: [
    { t: "fill", q: "Mam ___ brata.", h: "starszy", a: ["starszego"], en: "I have an older brother." },
    { t: "fill", q: "Mieszkam w ___ mieście.", h: "duży", a: ["dużym"], en: "I live in a big city." },
    { t: "fill", q: "Idę do kina z ___ siostrą.", h: "młodsza", a: ["młodszą"], en: "I'm going to the cinema with my younger sister." },
    { t: "fill", q: "Poproszę ___ kawę.", h: "ta", a: ["tę"], en: "This coffee, please." },
    { t: "fill", q: "Pracuję w ___ sklepie.", h: "ten", a: ["tym"], en: "I work in this shop." },
    { t: "fill", q: "Mieszkamy w ___ wsi.", h: "mała", a: ["małej"], en: "We live in a small village." },
    { t: "choice", q: "Nie znam ___ pana.", o: ["tego", "ten", "tym"], a: 0 },
    { t: "choice", q: "Mieszkamy na ___ piętrze.", o: ["ostatnim", "ostatni", "ostatniego"], a: 0 },
    { t: "choice", q: "Mam ___ psa.", o: ["dużego", "duży", "dużym"], a: 0 },
    { t: "choice", q: "Kupiłem ___ bilet do Krakowa.", o: ["jeden", "jednego", "jedną"], a: 0 },
    { t: "order", a: "W tym roku mam nowego szefa", en: "This year I have a new boss." },
    { t: "order", a: "Codziennie rozmawiam z tą miłą sąsiadką", en: "Every day I talk to this nice neighbour." }
  ],
  dialogue: [
    ["Kasia", "Masz nowego sąsiada?", "Have you got a new neighbour?"],
    ["Tomek", "Tak, od tego tygodnia obok nas mieszka młody Ukrainiec z małym psem.", "Yes, since this week a young Ukrainian with a small dog has been living next to us."],
    ["Kasia", "Jaki on jest?", "What's he like?"],
    ["Tomek", "Bardzo miły. Pracuje w tym dużym szpitalu na końcu ulicy.", "Very nice. He works in that big hospital at the end of the street."],
    ["Kasia", "A ten mały pies?", "And the little dog?"],
    ["Tomek", "Jest głośny! Szczeka całą noc, ale lubię tego psa.", "It's loud! It barks all night, but I like that dog."]
  ],
  partner: "Kasia",
  scenario: "Kasia asks about your neighbours, colleagues and family: who they are, where they live and work, what they have. Use adjectives in different cases: mam starszego brata, w dużym mieście, z tą miłą panią.",
  writing: { prompt: "Describe someone in your family: who they live with, where they live and work, and what they have (4–5 sentences, adjectives in different cases).", model: "Mam starszego brata, Marka. Mieszka z żoną w dużym mieszkaniu w centrum. Pracuje w nowym biurze przy tej długiej ulicy. Ma małego, wesołego psa. Często dzwonię do mojego brata w niedzielę." },
  read: { kind: "notice", title: "ZAGINĄŁ PIES!", body: ["Zginął mały, czarny pies z białą łapą.", "Ma czerwoną obrożę i nazywa się Bobik.", "Ostatnio widziany w tym tygodniu w dużym parku przy ulicy Długiej.", "Jest bardzo przyjazny i boi się samochodów.", "Nagroda! Tel. 600 222 333"],
    q: [{ q: "What does the dog look like?", o: ["small and black, with a white paw", "big and white", "brown, with a black collar"], a: 0 }, { q: "Where was it last seen?", o: ["in the big park on Długa Street", "at the station", "in a shop"], a: 0 }, { q: "What is the dog afraid of?", o: ["cars", "children", "other dogs"], a: 0 }] },
  cloze: "Mam {{starszego|starszy|starszym}} brata i {{młodszą|młodsza|młodszej}} siostrę. Brat mieszka w {{dużym|duży|dużego}} mieście, a siostra pracuje w {{tej|ta|tę}} nowej kawiarni na rogu."
}
];
