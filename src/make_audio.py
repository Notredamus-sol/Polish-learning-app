"""Records every Polish text in the course with Piper TTS (voice pl-mls_6892-low,
CC BY 4.0) into docs/audio/<file>.json = {key: base64 mp3}, and writes
src/audio_index.json = {file: "key key ..."} for the build.
Needs: pip install piper-tts lameenc, node, and the voice model:
  https://github.com/rhasspy/piper/releases/download/v0.0.2/voice-pl-mls_6892-low.tar.gz
Usage (from the repo root): python3 src/make_audio.py path/to/pl-mls_6892-low.onnx
"""
import sys, json, re, base64, subprocess, unicodedata, io, wave, os
import lameenc
from piper import PiperVoice

def audio_key(text):
    s = unicodedata.normalize("NFC", text).lower()
    s = re.sub(r"[^\w ]|_", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    h = 0x811c9dc5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    digits = "0123456789abcdefghijklmnopqrstuvwxyz"
    out = ""
    while True:
        h, r = divmod(h, 36)
        out = digits[r] + out
        if h == 0:
            return out

NASAL = {"ą": "o", "ę": "e", "Ą": "O", "Ę": "E"}
def denasalise(t):
    """This voice has no nasal-vowel sound, so ą/ę are spelled the way they are
    pronounced: om/em before p b, o/e before l ł, oń/eń before ć dź ci dzi,
    on/en before other consonants; word-final ę is e and word-final ą is om."""
    out = []
    for i, ch in enumerate(t):
        if ch not in NASAL:
            out.append(ch)
            continue
        v, rest = NASAL[ch], t[i + 1:i + 4].lower()
        nxt = rest[:1]
        if not nxt or not nxt.isalpha():
            out.append(v + ("" if ch in "ęĘ" else "m"))
        elif nxt in "pb":
            out.append(v + "m")
        elif nxt in "lł":
            out.append(v)
        elif rest.startswith(("ć", "dź", "ci", "dzi")):
            out.append(v + "ń")
        else:
            out.append(v + "n")
    return "".join(out)

def speech_text(t):
    t = re.sub(r"\([^)]*\)", " ", t).replace("…", "").replace("+", " ")
    t = re.sub(r"\s*/\s*", ", ", t)
    return denasalise(re.sub(r"\s+", " ", t).strip())

voice = PiperVoice.load(sys.argv[1])
items = json.loads(subprocess.check_output(["node", "src/list_audio_texts.js"]))
files, index, seen = {}, {}, set()
for it in items:
    k = audio_key(it["text"])
    if k in seen:
        continue
    seen.add(k)
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w:
        voice.synthesize_wav(speech_text(it["text"]), w)
    buf.seek(0)
    with wave.open(buf) as w:
        pcm, rate = w.readframes(w.getnframes()), w.getframerate()
    enc = lameenc.Encoder()
    enc.set_bit_rate(32); enc.set_in_sample_rate(rate); enc.set_channels(1); enc.set_quality(2)
    mp3 = enc.encode(pcm) + enc.flush()
    files.setdefault(it["file"], {})[k] = base64.b64encode(mp3).decode()
    index.setdefault(it["file"], []).append(k)
os.makedirs("docs/audio", exist_ok=True)
total = 0
for f, data in files.items():
    s = json.dumps(data, separators=(",", ":"))
    total += len(s)
    open(f"docs/audio/{f}.json", "w").write(s)
json.dump({f: " ".join(ks) for f, ks in index.items()}, open("src/audio_index.json", "w"))
print(f"{len(seen)} clips in {len(files)} files, {total / 1e6:.1f} MB")
