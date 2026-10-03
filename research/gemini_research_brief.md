# Research brief: bringing a Polish A1–A2 course up to standard

## How to use this brief

- **Running the research:** paste the "Ground rules" section, plus one or more research tracks, into Gemini Deep Research. Run the tracks one at a time if the answers get too long.
- **Files to attach:**
  - `current_vocab.csv`: the app's 1,055 flashcards
  - `course_outline.md`: the 34 units with their grammar, can-do statements, reading and writing tasks
  - the Dz.U. 2025 poz. 217 PDF
- **Bringing results back:** give the results back to Claude as files. Keep the CSV and JSON outputs exactly as Gemini produced them.

---

## Ground rules (include these with every track)

You are researching for a self-study app that teaches Polish to an adult beginner from A1 to A2. The app needs to be as good as a classroom course aligned with:
- the Polish state certificate exams (Państwowa Komisja do spraw Poświadczania Znajomości Języka Polskiego jako Obcego)
- the adult standard in Dz.U. 2025 poz. 217
- the CEFR Companion Volume (2020)

The learner can read Polish and knows the pronunciation, but has a small vocabulary. Their native language is: **[FILL IN — English? Serbian? other]**.

1. **Cite a source for every claim.** Give the title, author or institution, year and URL or ISBN. Mark anything you couldn't verify as **UNVERIFIED**.
2. **Never invent numbers.** That includes word counts, frequency ranks, pass marks and percentages. If a figure doesn't exist in the sources, say so.
3. **Keep the data in exactly the requested format** (CSV with the given header, or JSON). No commentary inside data blocks. Put notes in a separate section after the data.
4. **Split long outputs into numbered parts** rather than shortening them.
5. **Prefer primary sources:**
   - the certification commission (certyfikatpolski.pl)
   - the Council of Europe
   - Polish university centres for Polish as a foreign language (UJ Centrum Języka i Kultury Polskiej, UW Polonicum, UŁ, UMCS, UWr Studium Języka Polskiego dla Cudzoziemców)
   - corpora (NKJP, SUBTLEX-PL)
   - peer-reviewed second-language-acquisition (SLA) research
6. **Polish words are exact.** Polish text must use correct diacritics (ą ć ę ł ń ó ś ź ż), and every form must be checked.

---

## Track 1: The benchmarks: what exactly must an A1 and A2 learner know?

1. **Exam formats.** For the state certificate exams at A1, A2 and B1, give the current format:
   - sections (listening, reading, grammar or "poprawność gramatyczna", writing, speaking)
   - task types in each section, with an example of each
   - timing and number of items
   - points per section and the pass thresholds
   - the official sample tests and where to download them
   - any changes made since 2024
2. **Official rubrics.** Find the official criteria for marking writing and speaking at A1 and A2. List each criterion, its score bands and what each band means. These will be used to make the app's AI marking match the exam.
3. **Janowska et al.** The book *Programy nauczania języka polskiego jako obcego. Poziomy A1–C2* (Janowska, Lipińska, Rabiej, Seretny, Turek; 2011, revised editions) defines the inventories for each level. For A1 and A2, extract:
   - **(a)** the topic list
   - **(b)** the grammar inventory, case by case and tense by tense
   - **(c)** functions and notions
   - **(d)** text types the learner should understand and produce
   - **(e)** any lexical inventory or word list
4. **Lexical minimum.** Is there a published lexical minimum for Polish as a foreign language, with words tagged by level? For example, Anna Seretny's work, the "Słownik minimum" or the "A1/A2 lexical profile". If it exists, reproduce or summarise it with its source. If it doesn't, say so.
5. **CEFR Companion Volume 2020.** List every A1, A2 and A2+ descriptor that a self-study app could practise. Cover reception, production, interaction, mediation, online interaction and phonological control. Mark the ones that need speaking or listening hardware.
6. **The adult standard.** Compare Dz.U. 2025 poz. 217 (the attached PDF) with Janowska et al. and with the exam specifications. Where do they disagree, or where does one require something the others don't?

**Output:**
- **Exam formats** as a JSON object, one entry per level.
- **Rubrics** as tables.
- **Inventories** as one CSV: `level,category,item,example_pl,example_en,source`

---

## Track 2: Vocabulary: a frequency-checked core list (the biggest job)

**Goal:** about 2,000 lemmas covering A1 and A2, each with its key forms, so that the app can teach and test inflection, not just the base form.

1. **Frequency sources.** Use SUBTLEX-PL (Mandera et al., 2015; good for spoken, everyday Polish) and the NKJP frequency lists. Build a list of the most frequent lemmas, leaving out proper names.
2. **Level tags.** Tag each lemma A1, A2 or B1+. Use any level-tagged source from Track 1 first, and frequency plus topic relevance second. Say which method you used for each word.
3. **Coverage.** Make sure the list covers every A1 and A2 topic in Dz.U. 2025/217, even when a topic word isn't high-frequency (for example "recepta", "peron", "meldunek").
4. **Columns:**

   `lemma,pos,level,topic,english,gender,gen_sg,nom_pl,gen_pl,aspect,aspect_partner,pres_1sg,pres_3pl,past_3sg_m,governs_case,example_pl,example_en,freq_rank_subtlex,freq_source,level_source`

   Leave a field empty when it doesn't apply to that part of speech.
5. **Diff against the app.** Compare the list with the attached `current_vocab.csv` and produce three lists:
   - **(a)** high-priority words the app is missing
   - **(b)** words in the app that are rare or above A2 and could be demoted
   - **(c)** words in the app with wrong or unnatural translations
6. **Fixed phrases.** Separately, list about 300 high-frequency fixed phrases and collocations at A1/A2. Examples: "mieć ochotę na", "nie ma sprawy", "w porządku", "zależy od", "na pewno".

   Columns: `phrase,english,level,situation,example_pl,source`

---

## Track 3: Grammar sequencing and coverage

1. **Textbook sequences.** Compare the A1–A2 grammar sequence in the most-used textbooks for adults:
   - *Hurra!!! Po polsku 1–2*
   - *Polski, krok po kroku 1–2*
   - *Start / Start 2*
   - *Miło mi panią poznać*
   - *Język polski à la carte 1–2*
   - *Witaj, Polsko!*
   - *Polish in 4 Weeks*
   - *Colloquial Polish*

   For each topic (each case, aspect, motion verbs, the past, future and conditional, the imperative, numerals, the men's plural forms, reflexives), give the order and the level at which each book introduces it.
2. **Compare with the app.** Compare those sequences with the attached `course_outline.md`. Flag:
   - topics the app introduces too early or too late
   - topics it's missing
   - topics that are taught in one go but should be spread over several units
3. **Easy and hard pieces.** For each case and each verb conjugation class, list the forms and endings that are usually taught first because they're high-frequency, and the ones that are deferred to B1.
4. **Motion verbs and aspect.** Give the exact A2 scope:
   - which iść/chodzić and jechać/jeździć forms
   - which prefixed motion verbs
   - which 50–80 aspect pairs are expected at A2

**Output:** a CSV with `topic,subtopic,book,unit_or_chapter,level,notes,source`, followed by a short list of recommended changes.

---

## Track 4: Typical learner mistakes

1. **Common mistakes.** List the most common, best-documented mistakes made by learners of Polish whose native language is **[the learner's native language]** at A1–A2. Cover:
   - grammar
   - word order
   - aspect
   - cases after prepositions and verbs
   - the men's plural forms (rodzaj męskoosobowy)
   - false friends
   - spelling and diacritics
   - pronunciation
2. **Exercises for each mistake.** For each mistake, give:
   - one example of the wrong form and the correct form
   - why it happens
   - one exercise type that targets it
3. **False friends.** List false friends between Polish and the native language, plus English.
4. **Learner corpora.** Is there a Polish learner corpus (for example, one from UJ or UW) with error statistics? Summarise what it shows for A1–A2.

**Output:** CSV with `error_id,category,level,wrong_pl,correct_pl,explanation_en,frequency_evidence,drill_idea,source`

---

## Track 5: How people learn best (evidence for how the app should work)

Give actionable parameters, not general advice. Cite meta-analyses where possible.

1. **Spaced repetition.**
   - How does FSRS compare with SM-2 and Leitner boxes?
   - What retention target and intervals are optimal?
   - How many new cards per day suit 30–45 minutes of study?
   - Should cards be recognition (Polish to English) or production (English to Polish), and in what mix?
   - Should cards present words in sentences (cloze cards) or on their own?
2. **Retrieval practice, interleaving and the testing effect.** How should a daily session be ordered? How much review should there be compared with new material?
3. **Input and output.**
   - How much reading and listening at what difficulty (the "98% known words" research)?
   - How should extensive reading be added to a beginner course?
4. **Feedback.** Which kinds of corrective feedback work best for written and spoken mistakes? For example, recasts versus explicit correction, and immediate versus delayed.
5. **Explicit grammar.** How much explicit grammar instruction helps adults with an inflected language? Is there research on teaching case systems specifically, for example in Slavic or Finnish?
6. **Motivation.** What evidence is there that streaks, XP, goals and daily reminders help long-term retention? Which features backfire?
7. **Speaking practice without a teacher.** What does the evidence say about shadowing, speaking with an AI partner, and pronunciation feedback?

**Output:** a list of recommendations, each with the parameter value, the strength of evidence and the source.

---

## Track 6: Listening, audio and pronunciation

1. **Free and openly licensed audio of Polish words and sentences.** Check Lingua Libre (Wikimedia Commons), Tatoeba audio, Forvo (and its licence), Common Voice Polish, and others. For each, give:
   - the licence and whether it may be used in a free app
   - coverage (how many words or sentences)
   - recording quality
   - how to download
2. **Text-to-speech.** Which good-quality Polish text-to-speech voices can run offline or in a browser? Give their licences.
3. **Pronunciation difficulties.** What are the main Polish pronunciation difficulties for **[the learner's native language]** speakers? Include minimal pairs, for example sz/ś/ś, cz/ć, ż/ź, nasal vowels, and devoicing. Give a list of about 60 minimal pairs.

   Columns: `pair_a,pair_b,contrast,english_a,english_b`

---

## Track 7: Authentic texts, reading and writing tasks

1. **Text types.** List the text types that appear in A1/A2 exam reading and listening. Examples include notices, adverts, SMS, emails, timetables, forms, menus, announcements and short articles. For each, give 2–3 realistic example texts written to exam level, with 3 questions each.
2. **Writing tasks.** List the A1/A2 writing tasks used in the exams, such as forms, postcards, SMS, short emails, invitations, complaints and descriptions. Give word limits and the marking criteria.
3. **Speaking tasks.** List the A1/A2 speaking tasks, such as self-presentation, describing a picture, role-plays and expressing an opinion. Give the typical role-play situations (aim for 40 or more), which an AI conversation partner could play.

**Output:** JSON as below.

```
[{"kind":"notice|ad|sms|email|timetable|form|menu|announcement|article","level":"A1|A2","topic":"","title":"","body":["line","line"],"questions":[{"q":"English question","options":["correct","wrong","wrong"],"answer":0}]}]
```

Speaking situations:

```
[{"level":"","situation":"","learner_role":"","partner_role":"","goal":"","useful_phrases_pl":[]}]
```

---

## Track 8: Culture and politeness

1. **Address and politeness.**
   - pan/pani + 3rd person, and when to switch to "ty"
   - titles (Panie doktorze, Pani profesor)
   - letter and email openings and closings by formality
   - how to make polite requests
   - how to refuse politely
2. **Everyday culture an A2 learner is expected to know.**
   - holidays
   - name days
   - office hours and queues
   - offices such as PESEL, meldunek and the urząd
   - healthcare (NFZ, przychodnia)
   - public transport tickets
   - tipping
   - shopping
3. **Spoken versus written.** Which spoken forms differ from written textbook Polish at A2? For example, "no", "spoko", "dzięki" and dropped pronouns.

**Output:** CSV with `topic,fact_en,phrase_pl,phrase_en,level,source`

---

## Track 9: What other apps and courses do

1. **Polish coverage of other apps.** Compare Duolingo (Polish for English speakers), Babbel, Memrise, Clozemaster, Pimsleur, PolishPod101, Lingvist, Mondly, and the best Anki decks. For each, give:
   - its word count
   - its grammar coverage
   - whether it explains cases explicitly
   - the CEFR level it claims, compared with independent assessments
   - common complaints in reviews and on Reddit (r/learnpolish)
2. **Features learners rate highest** for an inflected language, and the most common reasons they quit.

**Output:** a comparison table, followed by "features worth copying" and "mistakes to avoid".

---

## Track 10: Level and placement testing

1. **Placement test.** How should a 20–30-minute adaptive placement test for A1–B1 Polish be built? Include item types, how to estimate difficulty, and where to stop.
2. **Mock exams.** How should practice tests that mirror the state exam be built? Give the section weights and how to convert a score into a predicted pass or fail.

**Output:** a test blueprint as a table: `section,skill,item_type,count,level,points`
