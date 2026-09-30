/* Prints every Polish text the app can speak, grouped by audio file (u0…u20, extra).
   It must pick the same strings the app passes to speak(): vocab, dialogue lines,
   quiz sentences (fullSentence), writing models and culture phrases. */
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/polski.html", "utf8");
const grab = (start, end) => { const a = html.indexOf(start); const b = html.indexOf(end, a); return html.slice(a, b + end.length); };
const code = grab("const UNITS = [", "\n];") + "\n" + grab("const CULTURE = [", "\n];");
const { UNITS, CULTURE } = new Function(code + "; return { UNITS, CULTURE };")();
const full = q => q.t === "fill" ? q.q.replace("___", q.a[0]) : q.t === "order" ? q.a : q.t === "choice" && /___/.test(q.q) ? q.q.replace("___", q.o[q.a]) : "";
const out = [];
UNITS.forEach(u => {
  const f = "u" + u.id, add = t => t && /[a-ząćęłńóśźż]/i.test(t) && out.push({ file: f, text: t });
  u.vocab.forEach(v => add(v[0]));
  u.dialogue.forEach(d => add(d[1]));
  u.quiz.forEach(q => add(full(q)));
  add(u.writing.model);
});
CULTURE.forEach(c => out.push({ file: "extra", text: c.pl }));
process.stdout.write(JSON.stringify(out));
