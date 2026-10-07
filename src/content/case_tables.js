/* ================================================================
   Full declension tables: all 7 cases, singular and plural, for every
   noun type, with the letters that change in the stem marked [like this]
   (the table renderer turns [..] into a highlight).
   A dropped vowel is shown by marking the letters that now touch
   (pies → [ps]a); an added or swapped vowel is marked itself.
   ================================================================ */
const CASE_ROWS = ["mianownik", "dopełniacz", "celownik", "biernik", "narzędnik", "miejscownik", "wołacz"];
/* cols: one array of 7 singular forms (or 7 plural forms) per word */
const caseTable = (caption, words, cols) => ({ caption, head: ["", ...words], pl: words.map((_, i) => i + 1),
  rows: CASE_ROWS.map((label, r) => [label, ...cols.map(c => c[r])]) });

const CASE_REF = [{
  id: "all-cases", pl: "Pełna odmiana rzeczowników", en: "All 7 cases: full noun tables", units: [3, 5, 6, 12, 14, 18, 34],
  note: "Every case, singular and plural, for each kind of noun. Highlighted letters change in the stem: a consonant softens, a vowel swaps, or a vowel drops out. In the plural, the vocative is always the same as the nominative. The question words for each case are in “The 7 cases at a glance”.",
  tables: [
    caseTable("Masculine, people · singular", ["student", "Polak", "chłopiec", "nauczyciel"], [
      ["student", "studenta", "studentowi", "studenta", "studentem", "studen[ci]e", "studen[ci]e!"],
      ["Polak", "Polaka", "Polakowi", "Polaka", "Polak[i]em", "Polaku", "Polaku!"],
      ["chłopiec", "chło[pc]a", "chło[pc]u", "chło[pc]a", "chło[pc]em", "chło[pc]u", "chło[pcz]e!"],
      ["nauczyciel", "nauczyciela", "nauczycielowi", "nauczyciela", "nauczycielem", "nauczycielu", "nauczycielu!"]]),
    caseTable("Masculine, people · plural", ["student", "Polak", "chłopiec", "nauczyciel"], [
      ["studen[ci]", "studentów", "studentom", "studentów", "studentami", "studentach", "studen[ci]!"],
      ["Pola[c]y", "Polaków", "Polakom", "Polaków", "Polakami", "Polakach", "Pola[c]y!"],
      ["chło[pc]y", "chło[pc]ów", "chło[pc]om", "chło[pc]ów", "chło[pc]ami", "chło[pc]ach", "chło[pc]y!"],
      ["nauczyciele", "nauczycieli", "nauczycielom", "nauczycieli", "nauczycielami", "nauczycielach", "nauczyciele!"]]),
    caseTable("Masculine, animals and things · singular", ["pies", "stół", "ogród", "dzień"], [
      ["pies", "[ps]a", "[ps]u", "[ps]a", "[ps]em", "[psi]e", "[psi]e!"],
      ["stół", "st[o]łu", "st[o]łowi", "stół", "st[o]łem", "st[ol]e", "st[ol]e!"],
      ["ogród", "ogr[o]du", "ogr[o]dowi", "ogród", "ogr[o]dem", "ogr[odzi]e", "ogr[odzi]e!"],
      ["dzień", "[dn]ia", "[dn]iowi", "dzień", "[dn]iem", "[dn]iu", "[dn]iu!"]]),
    caseTable("Masculine, animals and things · plural", ["pies", "stół", "ogród", "dzień"], [
      ["[ps]y", "[ps]ów", "[ps]om", "[ps]y", "[ps]ami", "[ps]ach", "[ps]y!"],
      ["st[o]ły", "st[o]łów", "st[o]łom", "st[o]ły", "st[o]łami", "st[o]łach", "st[o]ły!"],
      ["ogr[o]dy", "ogr[o]dów", "ogr[o]dom", "ogr[o]dy", "ogr[o]dami", "ogr[o]dach", "ogr[o]dy!"],
      ["[dn]i", "[dn]i", "[dn]iom", "[dn]i", "[dn]iami", "[dn]iach", "[dn]i!"]]),
    caseTable("Feminine in -a, hard stems · singular", ["kobieta", "ręka", "siostra", "szkoła"], [
      ["kobieta", "kobiety", "kobie[ci]e", "kobietę", "kobietą", "kobie[ci]e", "kobieto!"],
      ["ręka", "ręk[i]", "rę[c]e", "rękę", "ręką", "rę[c]e", "ręko!"],
      ["siostra", "siostry", "siost[rz]e", "siostrę", "siostrą", "siost[rz]e", "siostro!"],
      ["szkoła", "szkoły", "szko[l]e", "szkołę", "szkołą", "szko[l]e", "szkoło!"]]),
    caseTable("Feminine in -a, hard stems · plural", ["kobieta", "ręka", "siostra", "szkoła"], [
      ["kobiety", "kobiet", "kobietom", "kobiety", "kobietami", "kobietach", "kobiety!"],
      ["rę[c]e", "r[ą]k", "rękom", "rę[c]e", "rękami", "rękach", "rę[c]e!"],
      ["siostry", "si[ó]str", "siostrom", "siostry", "siostrami", "siostrach", "siostry!"],
      ["szkoły", "szk[ó]ł", "szkołom", "szkoły", "szkołami", "szkołach", "szkoły!"]]),
    caseTable("Feminine: more stems · singular", ["noga", "mucha", "ulica", "noc"], [
      ["noga", "nog[i]", "no[dz]e", "nogę", "nogą", "no[dz]e", "nogo!"],
      ["mucha", "muchy", "mu[sz]e", "muchę", "muchą", "mu[sz]e", "mucho!"],
      ["ulica", "ulicy", "ulicy", "ulicę", "ulicą", "ulicy", "ulico!"],
      ["noc", "nocy", "nocy", "noc", "nocą", "nocy", "nocy!"]]),
    caseTable("Feminine: more stems · plural", ["noga", "mucha", "ulica", "noc"], [
      ["nog[i]", "n[ó]g", "nogom", "nog[i]", "nogami", "nogach", "nog[i]!"],
      ["muchy", "much", "muchom", "muchy", "muchami", "muchach", "muchy!"],
      ["ulice", "ulic", "ulicom", "ulice", "ulicami", "ulicach", "ulice!"],
      ["noce", "nocy", "nocom", "noce", "nocami", "nocach", "noce!"]]),
    caseTable("Neuter · singular", ["okno", "miasto", "morze", "imię"], [
      ["okno", "okna", "oknu", "okno", "oknem", "ok[ni]e", "okno!"],
      ["miasto", "miasta", "miastu", "miasto", "miastem", "m[ieści]e", "miasto!"],
      ["morze", "morza", "morzu", "morze", "morzem", "morzu", "morze!"],
      ["imię", "imi[eni]a", "imi[eni]u", "imię", "imi[eni]em", "imi[eni]u", "imię!"]]),
    caseTable("Neuter · plural", ["okno", "miasto", "morze", "imię"], [
      ["okna", "ok[ie]n", "oknom", "okna", "oknami", "oknach", "okna!"],
      ["miasta", "miast", "miastom", "miasta", "miastami", "miastach", "miasta!"],
      ["morza", "m[ó]rz", "morzom", "morza", "morzami", "morzach", "morza!"],
      ["imi[on]a", "imi[on]", "imi[on]om", "imi[on]a", "imi[on]ami", "imi[on]ach", "imi[on]a!"]]),
    { caption: "Irregular plurals: learn these as pairs", head: ["word", "genitive sg.", "plural", "genitive pl.", "instrumental pl."], pl: [0, 1, 2, 3, 4], rows: [
      ["człowiek", "człowieka", "[ludzie]", "[ludzi]", "[ludźmi]"],
      ["dziecko", "dziecka", "dzie[ci]", "dzie[ci]", "dzie[ćmi]"],
      ["brat", "brata", "bra[cia]", "bra[ci]", "bra[ćmi]"],
      ["przyjaciel", "przyjaciela", "przyjaciele", "przyjaci[ół]", "przyjaci[ół]mi"],
      ["rok", "roku", "[lata]", "[lat]", "[latami]"],
      ["tydzień", "ty[go]dnia", "ty[go]dnie", "ty[go]dni", "ty[go]dniami"],
      ["oko", "oka", "o[cz]y", "o[cz]u", "o[cz]ami"],
      ["ucho", "ucha", "u[sz]y", "u[sz]u", "u[sz]ami"],
      ["ręka", "ręki", "rę[c]e", "r[ą]k", "rękami"],
      ["pieniądz", "pieniądza", "pieniądze", "pieni[ę]dzy", "pieni[ę]dzmi"]
    ] }
  ],
  foot: "Masculine people and animals: the accusative singular is the same as the genitive (widzę studenta, psa). Men in the plural: the accusative plural is the same as the genitive plural (widzę studentów). Things keep the nominative (widzę stół, stoły)."
}];

/* The letter changes, all in one list: replaces the old "Consonant changes before -e" table (same id, so lesson links keep working). */
const LETTER_CHANGES = {
  pl: "Wymiany głosek", en: "Letter changes in all cases",
  note: "Polish changes letters in the stem when an ending is added. Most changes happen before -e (the locative, the feminine dative and the vocative) and in the plural of nouns for men. The highlighted letters are the ones that change.",
  tables: [
    { caption: "Consonants before -e: locative, feminine dative, vocative", head: ["change", "example", "the form"], pl: [1, 2], rows: [
      ["k → c", "Polska, ręka", "w Pol[c]e, w rę[c]e"], ["g → dz", "Praga, noga", "w Pra[dz]e, na no[dz]e"], ["ch → sz", "mucha", "o mu[sz]e"],
      ["r → rz", "siostra, teatr", "o siost[rz]e, w teat[rz]e"], ["t → ci", "poczta, student", "na pocz[ci]e, studen[ci]e!"],
      ["d → dzi", "woda, ogród", "w wo[dzi]e, w ogro[dzi]e"], ["st → ści", "most, miasto", "na mo[ści]e, w mie[ści]e"],
      ["zd → ździ", "gwiazda, zjazd", "na gwie[ździ]e, na zje[ździ]e"], ["ł → l", "szkoła, stół", "w szko[l]e, na sto[l]e"],
      ["s → si, z → zi", "autobus, wóz", "w autobu[si]e, na wo[zi]e"], ["n → ni", "kino, okno", "w ki[ni]e, w ok[ni]e"],
      ["p, b, m, w, f → pi, bi, mi, wi, fi", "sklep, klub, mama, Warszawa, szafa", "w skle[pi]e, w klu[bi]e, o ma[mi]e, w Warsza[wi]e, w sza[fi]e"],
      ["no change: -u instead of -e", "park, dach, pokój; and dom, syn, pan", "w parku, na dachu, w pokoju; w domu, o synu, o panu"]
    ] },
    { caption: "Men in the plural (nominative): -i / -y softens the consonant", head: ["change", "singular", "plural"], pl: [1, 2], rows: [
      ["t → ci", "student", "studen[ci]"], ["d → dzi", "Szwed", "Szwe[dzi]"], ["r → rz", "doktor", "dokto[rz]y"],
      ["k → c", "Polak", "Pola[c]y"], ["g → dz", "kolega", "kole[dz]y"], ["ch → si", "Czech", "Cze[si]"],
      ["z → zi", "Francuz", "Francu[zi]"], ["st → ści", "turysta", "tury[ści]"]
    ] },
    { caption: "Vowels that change", head: ["change", "when", "example"], pl: [2], rows: [
      ["ó → o", "an ending is added", "stół → st[o]łu, Kraków → w Krak[o]wie, pokój → pok[o]ju"],
      ["o → ó", "genitive plural (no ending)", "szkoła → szk[ó]ł, noga → n[ó]g, morze → m[ó]rz"],
      ["ą → ę", "an ending is added", "ząb → z[ę]ba, mąż → m[ę]ża"],
      ["ę → ą", "genitive plural (no ending)", "ręka → r[ą]k, święto → św[ią]t"],
      ["a → e, o → e", "before a softened consonant", "miasto → w m[ie]ście, las → w l[e]sie, świat → na św[ie]cie, kościół → w kości[e]le"],
      ["e drops out", "an ending is added", "pies → [ps]a, chłopiec → chło[pc]a, dzień → [dn]ia, Marek → Ma[rk]a"],
      ["e appears", "genitive plural (no ending)", "okno → ok[ie]n, matka → mat[e]k, jabłko → jabł[e]k"],
      ["k, g + i", "before -e in the instrumental, and the genitive", "Polak → Polak[i]em, noga → nog[i], ręka → ręk[i]"]
    ] }
  ],
  foot: "Serbian does some of the same: ruka → ruci, noga → nozi, knjiga → knjizi. Polish does it more often, and also before -i in the plural for men."
};
