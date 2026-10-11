# Offline translation (Polish → English)

The installed app can translate sentences on the device, with no internet, using
Bergamot, the engine behind Firefox's built-in translation.

- `translator.js`, `worker/`: @browsermt/bergamot-translator 0.4.9 (MPL-2.0),
  https://github.com/browsermt/bergamot-translator
- `models/`: Mozilla's Polish → English model (firefox-translations-models, MPL-2.0),
  from https://storage.googleapis.com/bergamot-models-sandbox/0.3.3/plen/ (checksums in registry.json).

Nothing here is downloaded until the learner turns offline translation on.
