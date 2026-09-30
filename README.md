# Polski Codziennie

A daily Polish course, from beginner (A1) to A2. It has 21 units, spaced-repetition flashcards, grammar reminder tables, dialogues, conversation and writing practice, and a daily test.

It comes in two versions that share your progress:

| | Where | Needs internet | AI practice |
|---|---|---|---|
| **Online** | [claude.ai page](https://claude.ai/artifact/XNpaomYqCPYKvh1kxXyBjN) | yes | yes: dialogues, conversation, writing feedback |
| **Installed app** | https://notredamus-sol.github.io/Polish-learning-app/ | no | offline pack made on claude.ai |

## Install

- **Windows:** open the app link in Chrome or Edge and click **Install** (the icon at the right of the address bar).
- **Android:** open the app link in Chrome and tap **⋮ → Install app** (or **Add to Home screen**).

## Sync

- **App → claude.ai:** in the app, go to Postępy → **Sync with claude.ai**.
- **claude.ai → app:** on claude.ai, go to Postępy → **Prepare sync for the app** → **Open the installed app**. You can include an offline pack of new AI dialogues and a drill.
- **If a link doesn't open the right place:** use **Copy code** on one side and **Paste a code** on the other.

Progress is merged, so work done on either side is kept.

## Files

- `src/polski.html`: the whole app (content, logic and styles). This is the only file to edit.
- `src/build.py`: builds `docs/` (the installable app) and `dist/artifact.html` (the claude.ai page).
- `src/sw.template.js`: the service worker that makes the app work offline.
- `docs/`: the built app, served by GitHub Pages. Don't edit it by hand.
