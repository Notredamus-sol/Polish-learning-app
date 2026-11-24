/* ================================================================
   PRZYPADKI: case trainer, mistake notebook, case mastery map and commute mode.
   Everything here works offline: drills come from course and Tatoeba sentences,
   answers are checked against the Wiktionary forms table. Claude only adds a short
   personal explanation to notebook mistakes when you're online (saved for offline).
   S.progress.cases    = { k: {code: stat}, g: {governor: stat}, seen: {itemId: day}, commute }
   S.progress.mistakes = { id: mistake }
   ================================================================ */
const CASE_EN = { N: "nominative", G: "genitive", D: "dative", A: "accusative", I: "instrumental", L: "locative", V: "vocative" };
const CASE_PLN = { N: "mianownik", G: "dopełniacz", D: "celownik", A: "biernik", I: "narzędnik", L: "miejscownik", V: "wołacz" };
const caseName = code => CASE_EN[code[0]] + (code[1] === "p" ? " plural" : "");
/* why a case is needed: what each preposition takes */
const PREP_RULES = {
  do: "do + genitive: to, into (a place)", od: "od + genitive: from", bez: "bez + genitive: without", dla: "dla + genitive: for",
  u: "u + genitive: at someone's place", obok: "obok + genitive: next to", koło: "koło + genitive: near", około: "około + genitive: about",
  podczas: "podczas + genitive: during", według: "według + genitive: according to", zamiast: "zamiast + genitive: instead of",
  oprócz: "oprócz + genitive: apart from", wśród: "wśród + genitive: among", naprzeciwko: "naprzeciwko + genitive: opposite",
  spod: "spod + genitive: from under", zza: "zza + genitive: from behind", sprzed: "sprzed + genitive: from in front of",
  dzięki: "dzięki + dative: thanks to", przeciw: "przeciw + dative: against", ku: "ku + dative: towards",
  przez: "przez + accusative: through, across, for (a time)", przy: "przy + locative: by, at",
  w: "w + locative: in (where?) · w + accusative: into, on (days of the week)", we: "we = w (before some consonant groups)",
  na: "na + locative: on, at (where?) · na + accusative: onto, to (where to?), for", o: "o + locative: about · o + accusative: for (ask for)",
  po: "po + locative: after, around · po + accusative: to fetch", z: "z + genitive: from, out of · z + instrumental: with",
  ze: "ze = z (before some consonant groups)", za: "za + instrumental: behind · za + accusative: for, in (a time)",
  pod: "pod + instrumental: under (where?) · pod + accusative: under (where to?)", nad: "nad + instrumental: above, by (the sea) · nad + accusative: to (the sea, a lake)",
  przed: "przed + instrumental: in front of, before", między: "między + instrumental: between"
};
/* verbs that take a fixed case for their object (the noun right after them) */
const VERB_GOV = {
  G: { szukać: "look for", potrzebować: "need", "bać się": "be afraid of", słuchać: "listen to", uczyć: "teach / learn", używać: "use", życzyć: "wish", spodziewać: "expect", pilnować: "watch over", unikać: "avoid", brakować: "be missing" },
  D: { pomagać: "help", pomóc: "help", dziękować: "thank", podziękować: "thank", ufać: "trust", wierzyć: "believe", podobać: "please (podoba mi się)", przyglądać: "look closely at", przeszkadzać: "disturb", dawać: "give (to someone)", dać: "give (to someone)" },
  I: { interesować: "be interested in", zajmować: "deal with", zostać: "become", jechać: "go by (transport)", jeździć: "go by (transport)", opiekować: "look after", martwić: "worry about", cieszyć: "enjoy" },
  A: { mieć: "have", lubić: "like", znać: "know", widzieć: "see", zobaczyć: "see", kochać: "love", kupić: "buy", kupować: "buy", jeść: "eat", zjeść: "eat", pić: "drink", wypić: "drink", czytać: "read", przeczytać: "read", pisać: "write", napisać: "write", robić: "make", zrobić: "make", oglądać: "watch", obejrzeć: "watch", mieć: "have", odwiedzać: "visit", odwiedzić: "visit", zamawiać: "order", zamówić: "order", brać: "take", wziąć: "take", prosić: "ask for", poprosić: "ask for", rozumieć: "understand", pamiętać: "remember", kochać: "love", gotować: "cook", nosić: "wear, carry", sprzedawać: "sell", sprzedać: "sell", płacić: "pay (for)", szanować: "respect", spotkać: "meet", wybrać: "choose", otworzyć: "open", zamknąć: "close" }
};
const NOT_NOUNS = new Set(["ja", "ty", "on", "ona", "ono", "my", "wy", "oni", "one", "się", "siebie", "ten", "ta", "to", "tamten", "mój", "twój", "swój", "nasz", "wasz", "jego", "jej", "ich", "jaki", "który", "czyj", "kto", "co", "nic", "nikt", "ktoś", "coś", "każdy", "wszystko", "wszyscy", "sam", "ile", "jeden", "dwa", "trzy", "cztery", "pan", "pani", "państwo", "inny", "żaden", "taki", "cały", "dużo", "mało", "wiele", "kilka", "trochę"]);
function isNoun(lemma) {
  const l = String(lemma).toLocaleLowerCase("pl");
  if (NOT_NOUNS.has(l) || /ć$/.test(l)) return false;
  const e = dictByWord().get(l);
  if (e && e.g) return /^(m|f|n|pl)\b/.test(e.g);
  const fs = formsOf(lemma);
  if (/[yi]$/.test(l) && (fs.has(l.slice(0, -1) + "ego") || fs.has(l + "ego"))) return false;   /* an adjective */
  return true;
}
/* the governor at token i: a preposition, a verb with a fixed case, or nie + a verb (genitive) */
function governorAt(toks, i) {
  const lt = toks[i].w.toLocaleLowerCase("pl");
  if (PREP_CASES[lt]) return { word: lt, kind: "prep", cases: PREP_CASES[lt], rule: PREP_RULES[lt] || `${lt} + ${PREP_CASES[lt].split("").map(c => CASE_EN[c]).join(" / ")}` };
  const rs = lemmasOf(lt);
  for (const [lemma, codes] of rs) {
    if (!codes || !/^(f?[123][sp]|past|inf|imp|cond)/.test(codes)) continue;
    const neg = i > 0 && toks[i - 1].w.toLocaleLowerCase("pl") === "nie";
    if (neg && VERB_GOV.A[lemma]) return { word: "nie " + lemma, kind: "neg", cases: "G", rule: `nie + ${lemma}: after a negated verb the object goes into the genitive (Serbian keeps the accusative)` };
    for (const c of ["G", "D", "I", "A"]) if (VERB_GOV[c][lemma]) return { word: lemma, kind: "verb", cases: c, rule: `${lemma} (${VERB_GOV[c][lemma]}) + ${CASE_EN[c]}` };
  }
  if (lt === "ma" && i > 0 && toks[i - 1].w.toLocaleLowerCase("pl") === "nie") return { word: "nie ma", kind: "neg", cases: "G", rule: "nie ma + genitive: there isn't any…" };
  return null;
}
const hashStr = s => { let x = 5381; for (const ch of String(s)) x = ((x << 5) + x + ch.codePointAt(0)) | 0; return (x >>> 0).toString(36); };
/* one drill slot per sentence: the first noun governed by a preposition or verb */
function caseSlot(s) {
  const toks = []; const re = /\p{L}+/gu; let m;
  while ((m = re.exec(s.pl))) toks.push({ w: m[0], i: m.index });
  for (let i = 0; i < toks.length - 1; i++) {
    const g = governorAt(toks, i);
    if (!g) continue;
    for (let j = i + 1; j <= Math.min(i + 3, toks.length - 1); j++) {
      const t = toks[j], lt = t.w.toLocaleLowerCase("pl");
      if (lt === "się" || lt === "nie") continue;
      if (PREP_CASES[lt]) break;   /* a preposition in between decides the case itself */
      if (t.w[0] !== lt[0] && j > 0) break;   /* a name */
      const hits = lemmasOf(lt).filter(([l]) => isNoun(l));
      const fit = hits.map(([l, c]) => [l, String(c).split("/").filter(x => /^[GDAIL][sp]$/.test(x) && g.cases.includes(x[0]))]).filter(([, c]) => c.length);
      if (!fit.length) { if (hits.length) break; continue; }   /* adjectives/pronouns in between are skipped */
      const [lemma, codes] = fit[0];
      if (lemma.toLocaleLowerCase("pl") === lt) break;   /* the base form: nothing to practise */
      const code = codes.sort((a, b) => g.cases.indexOf(a[0]) - g.cases.indexOf(b[0]) || (a[1] === "s" ? -1 : 1))[0];
      return { id: hashStr(s.pl + "|" + t.i), pl: s.pl, en: s.en || "", before: s.pl.slice(0, t.i), tok: t.w, after: s.pl.slice(t.i + t.w.length), lemma, code, gov: g, src: s.src, tid: s.tid, unit: s.unit };
    }
  }
  return null;
}
let _casePool = null;
function casePool() {
  if (_casePool) return _casePool;
  exData();
  const src = sentencePool().map(s => ({ pl: s.pl, en: s.en, unit: s.unit, src: "course" })).concat(_exSent.map(s => ({ pl: s.pl, en: s.en, tid: s.tid, src: "tatoeba" })));
  const seen = new Set();
  _casePool = [];
  for (const s of src) { if (seen.has(s.pl)) continue; seen.add(s.pl); const it = caseSlot(s); if (it) _casePool.push(it); }
  return _casePool;
}
const casesUnlocked = () => reached(3);   /* the accusative unit: before it there's only the nominative */
/* items you can do now: grammar you've reached, nouns you've met first */
function caseItemsNow() {
  return casePool().filter(it => (it.unit === undefined || reached(it.unit)) && formAllowed(it.code) && sentenceAllowed(it.pl));
}
function caseState() {
  const P = S.progress;
  P.cases = P.cases && typeof P.cases === "object" ? P.cases : {};
  for (const k of ["k", "g", "seen"]) if (!P.cases[k] || typeof P.cases[k] !== "object") P.cases[k] = {};
  return P.cases;
}
const statOf = (map, key) => map[key] || (map[key] = { n: 0, ok: 0, choice: 0, ending: 0, s: 0.5, t: 0 });
/* pick n drill items, leaning on your weakest cases and governors, nothing seen in the last 3 days */
function pickCaseItems(n) {
  const all = caseItemsNow(), st = caseState(), today = TODAY();
  const met = id => { const k = courseIndex().get(dictKey(id)); return k && S.srs.cards[k]; };
  const score = it => {
    const k = st.k[it.code], g = st.g[it.gov.word];
    const weak = (1 - (k ? k.s : 0.5)) * 2 + (1 - (g ? g.s : 0.5));
    const fresh = st.seen[it.id] && today - st.seen[it.id] < 3 ? -3 : 0;
    return weak + fresh + (met(it.lemma) ? 0.6 : 0) + (it.src === "course" ? 0.3 : 0) + Math.random() * 1.2;
  };
  const ranked = all.map(it => [score(it), it]).sort((a, b) => b[0] - a[0]).map(([, it]) => it);
  /* variety: at most 3 items per case per set */
  const out = [], per = {};
  for (const it of ranked) { if (out.length >= n) break; if ((per[it.code] = (per[it.code] || 0) + 1) > 3) continue; out.push(it); }
  return out;
}
/* what went wrong: ok, accents, wrong case, right case but wrong number, or a form that doesn't exist */
function diagnoseCase(it, typed) {
  const a = norm(typed), b = norm(it.tok), lem = it.lemma.toLocaleLowerCase("pl");
  if (!a) return { kind: "empty" };
  if (a === b) return { kind: "ok" };
  if (strip(a) === strip(b)) return { kind: "accents" };
  let codes = a === lem ? "Ns" : (lemmasOf(a).find(([l]) => l.toLocaleLowerCase("pl") === lem) || [])[1];
  if (!codes) { for (const f of formsOf(it.lemma)) if (strip(f) === strip(a)) { codes = (lemmasOf(f).find(([l]) => l.toLocaleLowerCase("pl") === lem) || [])[1]; break; } }
  if (codes) {
    const cs = String(codes || "Ns").split("/").filter(x => /^[NGDAILV][sp]$/.test(x));
    if (cs.some(x => x[0] === it.code[0])) return { kind: "number", used: cs.find(x => x[0] === it.code[0]) };
    if (cs.length) return { kind: "case", used: cs[0] };
  }
  return { kind: "ending" };
}
/* mistakes Serbian speakers make: accusative after a negation, Serbian endings */
function serbianTrap(it, typed, d) {
  const t = norm(typed), r = norm(it.tok);
  if (d.kind === "case" && it.gov.kind === "neg" && d.used[0] === "A") return "Serbian keeps the accusative after a negation; Polish needs the genitive.";
  if (/u$/.test(t) && /ę$/.test(r)) return "Serbian accusative -u; Polish feminine accusative is -ę.";
  if (/om$/.test(t) && /(em|ą)$/.test(r)) return "Serbian instrumental -om; Polish uses -em (masc./neut.) or -ą (fem.).";
  if (/ima$|ama$/.test(t) && /(ami|ach|om)$/.test(r)) return "Serbian plural -ima/-ama; Polish has -om, -ami, -ach.";
  return null;
}
function recordCase(it, kind) {
  const st = caseState(), ok = kind === "ok" || kind === "accents";
  for (const [map, key] of [[st.k, it.code], [st.g, it.gov.word]]) {
    const x = statOf(map, key);
    x.n++; if (ok) x.ok++; if (kind === "case") x.choice++; if (kind === "ending" || kind === "number") x.ending++;
    x.s = Math.round((x.s * 0.75 + (ok ? 1 : 0) * 0.25) * 1000) / 1000; x.t = Date.now();
  }
  st.seen[it.id] = TODAY();
  if (Object.keys(st.seen).length > 3000) { const cut = TODAY() - 30; for (const [k, d] of Object.entries(st.seen)) if (d < cut) delete st.seen[k]; }
}
/* the ending, split from the stem: sklep → sklep|u */
function endingSplit(lemma, form) {
  let k = 0; while (k < lemma.length && k < form.length && lemma[k] === form[k]) k++;
  return [form.slice(0, k), form.slice(k)];
}
function caseFeedback(it, typed, d) {
  const [stem, end] = endingSplit(it.lemma.toLocaleLowerCase("pl"), it.tok.toLocaleLowerCase("pl"));
  const right = h("b", { class: "pl" }, it.tok.slice(0, stem.length), h("mark", { class: "chg" }, it.tok.slice(stem.length) || "∅"));
  const why = h("div", { class: "small" }, "Why: ", it.gov.rule);
  if (d.kind === "ok") return [h("strong", null, "Dobrze! Correct."), h("div", { class: "small muted" }, `${caseName(it.code)} after „${it.gov.word}”`)];
  if (d.kind === "accents") return [h("strong", null, "Correct, but mind the Polish letters: "), right];
  const head = d.kind === "case" ? `Wrong case: you used the ${caseName(d.used)}.`
    : d.kind === "number" ? `Right case, but ${d.used[1] === "p" ? "plural" : "singular"}: this one is ${it.code[1] === "p" ? "plural" : "singular"}.`
    : `Right idea, wrong ending.`;
  return [h("strong", null, head), h("div", null, `${caseName(it.code)} (${CASE_PLN[it.code[0]]}): `, right, h("span", { class: "muted" }, ` (from ${it.lemma})`)), why];
}

/* ---------- the mistake notebook ---------- */
function mistakes() {
  const P = S.progress;
  if (!P.mistakes || typeof P.mistakes !== "object") P.mistakes = {};
  return P.mistakes;
}
function addMistake(m) {
  const all = mistakes();
  const id = m.id || (m.kind + "-" + hashStr((m.pl || m.q || "") + "|" + m.right));
  const o = all[id];
  all[id] = Object.assign({}, o || { day: localKey(), wrongs: 0 }, m, { id, t: Date.now(), hits: [], done: false, wrongs: ((o && o.wrongs) || 0) + 1, expl: (o && o.expl) || m.expl || "" });
  /* keep the notebook at a sensible size: oldest finished ones go first */
  const ids = Object.keys(all);
  if (ids.length > 400) ids.filter(k => all[k].done).sort((a, b) => all[a].t - all[b].t).slice(0, ids.length - 400).forEach(k => delete all[k]);
  return id;
}
const openMistakes = () => Object.values(mistakes()).filter(m => !m.done && !m.del);
const dueMistakes = () => openMistakes().filter(m => !(m.hits || []).includes(localKey())).sort((a, b) => (a.lastTry || 0) - (b.lastTry || 0));
function markMistake(id, ok) {
  const m = mistakes()[id]; if (!m) return;
  const k = localKey();
  m.lastTry = Date.now(); m.t = Date.now();
  if (ok) { m.hits = [...new Set([...(m.hits || []), k])]; if (m.hits.length >= 3) m.done = true; }
  else { m.hits = []; m.wrongs = (m.wrongs || 0) + 1; }
}
/* online: Claude adds a short personal explanation, saved for offline */
let _explaining = false;
async function explainMistakes() {
  if (_explaining || !aiOn()) return;
  const need = openMistakes().filter(m => !m.expl).slice(0, 8);
  if (!need.length) return;
  _explaining = true;
  try {
    const r = await sample.json(`You are a kind, precise Polish teacher. For each mistake below, explain in 1–2 short English sentences why the right form is needed, for this learner. Where it helps, compare with Serbian (Latin script).
${learnerContext(curUnit())}
Mistakes:
${need.map(m => `- id ${m.id}: sentence "${m.pl || m.q}"; learner wrote "${m.wrote || "(no answer)"}"; correct "${m.right}"${m.rule ? "; rule: " + m.rule : ""}`).join("\n")}
Reply with only JSON: {"items":[{"id":"…","explanation":"…"}]}`, { cache: false, modelTier: "quick" });
    for (const x of (r && r.items) || []) { const m = mistakes()[x.id]; if (m && x.explanation) { m.expl = String(x.explanation).slice(0, 400); m.t = Date.now(); } }
    persist("progress");
  } catch (e) {}
  finally { _explaining = false; }
}

/* ---------- running drills ---------- */
const caseMode = () => settings().caseMode === "tap" ? "tap" : "type";
const caseAudio = () => settings().caseAudio !== false;
/* four forms of the same noun for tap mode: the right one and three other cases */
function caseOptions(it) {
  formsIndex();
  const lem = it.lemma.toLocaleLowerCase("pl"), num = it.code[1];
  const byCase = {};
  for (const f of formsOf(it.lemma)) {
    const c = (lemmasOf(f).find(([l]) => l.toLocaleLowerCase("pl") === lem) || [])[1];
    for (const x of String(c || (f === lem ? "Ns" : "")).split("/")) if (/^[NGDAIL][sp]$/.test(x) && x[1] === num && !byCase[x]) byCase[x] = f;
  }
  const right = it.tok.toLocaleLowerCase("pl");
  const others = shuffle(Object.values(byCase).filter(f => f !== right && !(lemmasOf(f).find(([l]) => l.toLocaleLowerCase("pl") === lem) || ["", ""])[1].includes(it.code)));
  const opts = [...new Set([right, ...others])].slice(0, 4);
  return shuffle(opts.length >= 2 ? opts : [right, lem]);
}
/* one drill question; resolves {kind, typed} after Continue */
function caseExercise(host, it, meta = {}) {
  return new Promise(resolve => {
    const box = h("div", { class: "card stack case-ex" });
    const fb = h("div");
    let done = false, typed = "";
    const mode = meta.mode || caseMode();
    const finish = val => {
      if (done) return;
      typed = val; const d = diagnoseCase(it, typed);
      if (d.kind === "empty") return;
      done = true;
      const ok = d.kind === "ok" || d.kind === "accents";
      const serb = ok ? null : serbianTrap(it, typed, d);
      box.querySelectorAll("input, .opt").forEach(x => { x.disabled = true; });
      if (mode === "tap") box.querySelectorAll(".opt").forEach(x => { if (norm(x.textContent) === norm(it.tok)) x.classList.add("right"); else if (norm(x.textContent) === norm(typed)) x.classList.add("wrong"); });
      gap.replaceChildren(h("b", { class: ok ? "ok-word" : "bad-word" }, it.tok));
      fb.replaceChildren(h("div", { class: "feedback " + (ok ? "ok" : "no") }, ...caseFeedback(it, typed, d),
        !ok && typed ? h("div", { class: "small muted" }, `You wrote: ${typed}`) : null,
        serb ? h("div", { class: "small" }, h("span", { class: "chip gold" }, "Serbian trap"), " ", serb) : null,
        h("div", { class: "row", style: "margin-top:6px" },
          h("button", { class: "btn primary sm", id: "case-continue", onclick: () => resolve({ kind: d.kind, typed, ok, serb, d }) }, "Continue →"),
          sayBtn(it.pl) || null,
          h("button", { class: "btn ghost sm", onclick: () => openSheet("Case tables", refBody(REF.find(r => r.id === "all-cases"))) }, "▦ Tables"))));
      if (caseAudio()) speak(it.pl);
      setTimeout(() => { const b = $("#case-continue"); b && b.focus(); }, 30);
      keyHandler = (k, typing) => { if (!typing && (k === "Enter" || k === " ")) { $("#case-continue")?.click(); return true; } };
    };
    const gap = h("span", { class: "case-gap" }, h("span", { class: "blank" }, "?"), h("small", null, it.lemma));
    if (meta.counter) box.append(h("div", { class: "spread" }, h("span", { class: "eyebrow" }, meta.counter), h("span", { class: "chip" }, meta.label || "Which form?")));
    box.append(h("div", { class: "ex-q pl case-q" }, it.before, gap, it.after));
    if (it.en) box.append(h("div", { class: "small muted" }, it.en));
    const meaning = (dictByWord().get(it.lemma.toLocaleLowerCase("pl")) || {}).en;
    box.append(h("div", { class: "hint" }, "Put ", h("b", { class: "pl" }, it.lemma), meaning ? ` (${meaning})` : "", " in the right form."));
    if (mode === "tap") {
      const opts = h("div", { class: "options" }, caseOptions(it).map((f, i) => h("button", { class: "opt pl", onclick: () => finish(f) }, h("span", { class: "key-hint" }, String(i + 1)), f)));
      box.append(opts, fb);
      keyHandler = (k, typing) => { const n = +k; if (!typing && !done && n >= 1 && n <= opts.children.length) { opts.children[n - 1].click(); return true; } };
    } else {
      const inp = h("input", { type: "text", id: "case-input", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "The form of " + it.lemma });
      inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); if (!done) finish(inp.value); else $("#case-continue")?.click(); } });
      box.append(h("div", { class: "type-row" }, inp, h("button", { class: "btn primary", onclick: () => finish(inp.value) }, "Check")), keypad(inp),
        h("div", { class: "row" }, h("button", { class: "btn ghost sm", onclick: () => { if (!done) { typed = ""; finishUnknown(); } } }, "I don't know")), fb);
      setTimeout(() => inp.focus(), 30);
      keyHandler = null;
    }
    function finishUnknown() {
      done = false; const d = { kind: "ending" };
      done = true;
      box.querySelectorAll("input, .opt, button.btn.primary").forEach(x => { x.disabled = true; });
      gap.replaceChildren(h("b", { class: "bad-word" }, it.tok));
      fb.replaceChildren(h("div", { class: "feedback no" }, h("strong", null, "Here's the answer."), h("div", null, `${caseName(it.code)}: `, h("b", { class: "pl" }, it.tok)), h("div", { class: "small" }, "Why: ", it.gov.rule),
        h("div", { class: "row", style: "margin-top:6px" }, h("button", { class: "btn primary sm", id: "case-continue", onclick: () => resolve({ kind: "ending", typed: "", ok: false, d }) }, "Continue →"), sayBtn(it.pl) || null)));
      if (caseAudio()) speak(it.pl);
      setTimeout(() => { const b = $("#case-continue"); b && b.focus(); }, 30);
      keyHandler = (k, typing) => { if (!typing && (k === "Enter" || k === " ")) { $("#case-continue")?.click(); return true; } };
    }
    host.replaceChildren(box);
  });
}
/* a set of drills: records stats and notebook entries after every answer, so stopping loses nothing */
async function runCaseSet(host, items, { until = 0, label } = {}) {
  let ok = 0, n = 0;
  for (let i = 0; i < items.length; i++) {
    if (until && Date.now() > until) break;
    const it = items[i];
    const r = await caseExercise(host, it, { counter: `${i + 1} / ${items.length}`, label: label || "Which form?" });
    n++; if (r.ok) ok++;
    recordCase(it, r.kind);
    if (!r.ok) addMistake({ kind: "case", item: it, pl: it.before + "___" + it.after, en: it.en, right: it.tok, wrote: r.typed, lemma: it.lemma, code: it.code, rule: it.gov.rule,
      diag: r.kind === "case" ? `wrong case (${caseName(r.d.used)} instead of ${caseName(it.code)})` : r.kind === "number" ? "right case, wrong number" : "wrong ending", serb: r.serb || "" });
    persist("progress");
  }
  keyHandler = null;
  host.replaceChildren();
  return { ok, n };
}
/* notebook practice: each open mistake asked again, in its own format */
async function runNotebook(host, list, { until = 0 } = {}) {
  let ok = 0, n = 0;
  for (let i = 0; i < list.length; i++) {
    if (until && Date.now() > until) break;
    const m = list[i];
    let good;
    if (m.item && m.kind === "case") {
      const r = await caseExercise(host, m.item, { counter: `${i + 1} / ${list.length}`, label: "Notebook" });
      good = r.ok; recordCase(m.item, r.kind);
    } else if (m.item) {
      const r = await exercise(host, m.item, { counter: `${i + 1} / ${list.length}`, label: "Notebook" });
      good = r.correct;
    } else {
      /* a flashcard typing mistake: the sentence with its gap again */
      const it = { id: m.id, pl: m.full || m.pl.replace("___", m.right), en: m.en || "", before: m.pl.split("___")[0], tok: m.right, after: m.pl.split("___")[1] || "", lemma: m.lemma || m.right, code: m.code || "Ns", gov: { word: "", kind: "card", cases: "", rule: m.rule || (m.code ? caseName(m.code) : "the form in this sentence") } };
      const r = await caseExercise(host, it, { counter: `${i + 1} / ${list.length}`, label: "Notebook · flashcard" });
      good = r.ok;
    }
    n++; if (good) ok++;
    markMistake(m.id, good);
    persist("progress");
  }
  keyHandler = null;
  host.replaceChildren();
  return { ok, n };
}

/* ---------- the daily-plan step ---------- */
async function runCasesStep(body) {
  if (!casesUnlocked()) { body.append(h("div", { class: "card stack" }, h("p", null, "Case practice starts once you reach the accusative (unit 5).")), ); finishStep("cases", body); return; }
  const host = h("div");
  const notes = dueMistakes().slice(0, 2);
  body.append(h("p", { class: "muted" }, "Put each noun in the right form. The preposition or verb before it decides the case."), host);
  const items = pickCaseItems(8);
  if (!items.length) { finishStep("cases", body, "No practice sentences for your level yet."); return; }
  const r = await runCaseSet(host, items);
  let extra = "";
  if (notes.length) { const r2 = await runNotebook(host, notes); extra = ` Notebook: ${r2.ok} of ${r2.n}.`; }
  addXP(r.ok * 4);
  explainMistakes();
  finishStep("cases", body, `${r.ok} of ${r.n} right.${extra}`);
}

/* ---------- the mastery map ---------- */
const MAP_CODES = ["As", "Ls", "Gs", "Is", "Ds", "Np", "Gp", "Ap", "Lp", "Ip", "Dp"];
function masteryMap() {
  const st = caseState();
  const rows = MAP_CODES.filter(c => codeAllowed(c)).map(c => {
    const x = st.k[c];
    const pct = x && x.n ? Math.round(x.s * 100) : null;
    return h("div", { class: "mm-row" },
      h("div", { class: "mm-name" }, h("b", null, caseName(c)), h("span", { class: "muted small pl" }, " " + CASE_PLN[c[0]])),
      h("div", { class: "mm-bar", role: "img", "aria-label": pct === null ? "not practised yet" : `${pct}% strength` }, h("span", { style: `width:${pct === null ? 0 : pct}%`, class: pct === null ? "" : pct < 50 ? "low" : pct < 75 ? "mid" : "hi" })),
      h("div", { class: "mm-num small muted" }, pct === null ? "new" : `${pct}%`),
      x && (x.choice || x.ending) ? h("div", { class: "mm-split small muted" }, x.choice ? `${x.choice} wrong case` : "", x.choice && x.ending ? " · " : "", x.ending ? `${x.ending} wrong ending` : "") : null);
  });
  const govs = Object.entries(st.g).filter(([, x]) => x.n >= 2).sort((a, b) => a[1].s - b[1].s).slice(0, 6);
  const verdict = (() => {
    const tot = Object.values(st.k).reduce((a, x) => ({ c: a.c + x.choice, e: a.e + x.ending }), { c: 0, e: 0 });
    if (tot.c + tot.e < 4) return "Do a few drills and this map shows where you lose points.";
    return tot.c > tot.e * 1.3 ? "Most of your mistakes are choosing the wrong case: look at which preposition or verb comes first, and at the rules under each answer."
      : tot.e > tot.c * 1.3 ? "You usually pick the right case but the ending slips: the case tables (▦) and the letter changes list help most."
      : "Your mistakes are split between choosing the case and the ending.";
  })();
  return h("section", { class: "card stack" },
    h("h3", null, "Mapa przypadków · case mastery"),
    h("p", { class: "small muted" }, verdict),
    h("div", { class: "mm" }, rows),
    govs.length ? h("div", { class: "stack", style: "gap:4px" }, h("span", { class: "eyebrow" }, "Hardest prepositions and verbs"),
      h("div", { class: "row" }, govs.map(([w, x]) => h("span", { class: "chip" + (x.s < 0.5 ? " red" : " gold"), title: PREP_RULES[w] || w }, `${w} · ${Math.round(x.s * 100)}%`)))) : null);
}
function notebookSection() {
  const open = openMistakes().sort((a, b) => b.t - a.t), due = dueMistakes();
  const fixed = Object.values(mistakes()).filter(m => m.done).length;
  const list = h("div", { class: "nb-list" }, open.slice(0, 40).map(m => h("div", { class: "nb" },
    h("div", { class: "pl" }, String(m.pl || m.q || "").split("___").flatMap((p, i, a) => i < a.length - 1 ? [p, h("b", { class: "ok-word" }, m.right)] : [p])),
    h("div", { class: "small" }, m.wrote ? h("span", { class: "bad-word" }, m.wrote) : h("span", { class: "muted" }, "no answer"), " → ", h("b", { class: "pl" }, m.right), m.diag ? h("span", { class: "muted" }, " · " + m.diag) : null),
    m.rule ? h("div", { class: "small muted" }, m.rule) : null,
    m.serb ? h("div", { class: "small" }, h("span", { class: "chip gold" }, "Serbian trap"), " ", m.serb) : null,
    m.expl ? h("div", { class: "small nb-expl" }, m.expl) : null,
    h("div", { class: "small muted" }, `${(m.hits || []).length} of 3 days right` + (m.wrongs > 1 ? ` · missed ${m.wrongs}×` : "")))));
  return h("section", { class: "card stack", id: "notebook" },
    h("div", { class: "spread" }, h("h3", null, `Zeszyt błędów · mistake notebook (${open.length})`),
      h("button", { class: "btn primary sm", disabled: !due.length, onclick: () => startCases("notebook") }, due.length ? `Practise ${Math.min(due.length, 15)}` : "Nothing due today")),
    h("p", { class: "small muted" }, "Mistakes from case drills, tests and flashcard typing. Each comes back until you get it right on 3 different days.", fixed ? ` ${fixed} fixed so far.` : "",
      aiOn() ? "" : " Claude adds a short explanation to each one the next time you're online."),
    open.length ? list : h("p", { class: "muted" }, "No open mistakes. Nice."));
}

/* ---------- the Przypadki page ---------- */
function renderCases() {
  explainMistakes().then(() => { if (view === "cases" && !inSession) { const nb = document.getElementById("notebook"); if (nb) nb.replaceWith(notebookSection()); } });
  const modeSeg = h("div", { class: "seg", role: "group", "aria-label": "Answer by" }, [["type", "Type"], ["tap", "Tap"]].map(([k, l]) =>
    h("button", { class: caseMode() === k ? "on" : "", "aria-pressed": caseMode() === k ? "true" : "false", onclick: () => { setSetting("caseMode", k); renderCases(); } }, l)));
  const audio = h("label", { class: "row small" }, h("input", { type: "checkbox", checked: caseAudio() ? true : null, onchange: e => setSetting("caseAudio", e.target.checked) }), " Read the sentence aloud after each answer");
  const n = casesUnlocked() ? caseItemsNow().length : 0;
  app.replaceChildren(h("div", { class: "stack-lg" },
    h("div", { class: "stack" }, h("span", { class: "eyebrow" }, "Case trainer"), h("h1", { class: "pl" }, "Przypadki")),
    commuteCard(),
    h("section", { class: "card stack" },
      h("div", { class: "spread" }, h("h3", null, "Ćwiczenie · case drill"), modeSeg),
      casesUnlocked() ? h("p", { class: "small muted" }, `Real sentences with one noun to put in the right form. ${n.toLocaleString("en")} sentences fit your lessons so far; more unlock as you go. The drill leans on your weakest cases.`)
        : h("p", { class: "small muted" }, "Case practice starts at the accusative (unit 5)."),
      audio,
      h("div", { class: "row" }, h("button", { class: "btn primary", disabled: !n, onclick: () => startCases("drill") }, "Start 10 sentences"),
        h("button", { class: "btn ghost", onclick: () => setView("tables") }, "▦ Case tables"))),
    masteryMap(),
    notebookSection()));
}
function startCases(kind) {
  inSession = true;
  const body = h("div", { class: "stack-lg" });
  const host = h("div");
  app.replaceChildren(h("div", null, h("div", { class: "session-head" }, h("button", { class: "btn ghost sm", onclick: () => setView("cases") }, "← Przypadki")),
    h("div", { class: "stack", style: "margin-bottom:18px" }, h("span", { class: "eyebrow" }, kind === "notebook" ? "Mistake notebook" : "Case drill"), h("h1", { class: "pl" }, kind === "notebook" ? "Zeszyt błędów" : "Przypadki")), body));
  body.append(host);
  const end = (msg) => { body.append(h("div", { class: "card stack" }, h("h2", null, "Gotowe!"), h("p", null, msg), h("button", { class: "btn primary", onclick: () => setView("cases") }, "Back to Przypadki"))); explainMistakes(); };
  if (kind === "notebook") runNotebook(host, dueMistakes().slice(0, 15)).then(r => { addXP(r.ok * 4); end(`${r.ok} of ${r.n} right. Mistakes you got right on 3 different days leave the notebook.`); });
  else runCaseSet(host, pickCaseItems(10)).then(r => { addXP(r.ok * 4); end(`${r.ok} of ${r.n} right.`); });
}

/* ---------- commute mode: one tap, ~30 minutes, fully offline ---------- */
const COMMUTE_STAGES = [
  { id: "cards", label: "Flashcards", min: 12 },
  { id: "cases", label: "Case drill", min: 10 },
  { id: "notebook", label: "Mistake notebook", min: 8 }
];
function commuteToday() { const c = caseState().commute; return c && c.day === localKey() ? c : null; }
function commuteCard() {
  const c = commuteToday();
  const doneAll = c && c.stage >= COMMUTE_STAGES.length;
  return h("section", { class: "card stack commute" },
    h("div", { class: "spread" }, h("div", null, h("span", { class: "eyebrow" }, "Offline · about 30 minutes"), h("h3", { style: "margin:2px 0 0" }, "Commute session")),
      h("button", { class: "btn primary", disabled: doneAll ? true : null, onclick: () => startCommute() }, doneAll ? "Done today ✓" : c ? "Continue →" : "Start →")),
    h("p", { class: "small muted" }, "Due flashcards (12 min), then case drills on your weakest points (10 min), then your mistake notebook (8 min). Everything is saved after each answer, so you can stop at your stop.",
      c && !doneAll ? ` You're on part ${c.stage + 1} of 3: ${COMMUTE_STAGES[c.stage].label}.` : ""));
}
function startCommute() {
  const st = caseState();
  if (!commuteToday()) st.commute = { day: localKey(), stage: 0 };
  persist("progress");
  inSession = true;
  const body = h("div", { class: "stack-lg" });
  const bar = h("div", { class: "row small" });
  app.replaceChildren(h("div", null, h("div", { class: "session-head" }, h("button", { class: "btn ghost sm", onclick: () => setView("cases") }, "← Stop here"), bar),
    h("div", { class: "stack", style: "margin-bottom:18px" }, h("span", { class: "eyebrow" }, "Commute session"), h("h1", { class: "pl" }, "W drodze")), body));
  session = { stepId: "commute", opts: {}, ctl: null };
  const drawBar = () => { const c = commuteToday(); bar.replaceChildren(...COMMUTE_STAGES.map((s, i) => h("span", { class: "chip" + (i < c.stage ? " green" : i === c.stage ? " gold" : "") }, (i < c.stage ? "✓ " : "") + s.label))); };
  const next = () => {
    const c = commuteToday();
    drawBar();
    if (c.stage >= COMMUTE_STAGES.length) {
      body.replaceChildren(h("div", { class: "card stack" }, h("h2", null, "Gotowe! Commute done."), h("p", null, "Flashcards, case drills and your notebook are all saved. They sync the next time you're online."), h("button", { class: "btn primary", onclick: () => setView("today") }, "Back to today")));
      explainMistakes();
      return;
    }
    const stg = COMMUTE_STAGES[c.stage], until = Date.now() + stg.min * 60000;
    const host = h("div");
    body.replaceChildren(h("p", { class: "muted" }, `Part ${c.stage + 1} of 3 · ${stg.label} · about ${stg.min} minutes`), host);
    const advance = () => { c.stage++; persist("progress"); next(); };
    if (stg.id === "cards") runReview(host, { until, onDone: () => { if (!todayRec().steps.review) markStep("review"); advance(); } });
    else if (stg.id === "cases") {
      if (!casesUnlocked()) return advance();
      runCaseSet(host, pickCaseItems(15), { until }).then(r => { addXP(r.ok * 4); if (!todayRec().steps.cases) markStep("cases"); advance(); });
    } else runNotebook(host, dueMistakes().slice(0, 12), { until }).then(r => { addXP(r.ok * 4); advance(); });
  };
  next();
}
