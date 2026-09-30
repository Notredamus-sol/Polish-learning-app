# Audio

The app speaks Polish with the device's own voice when it has one (Chrome, Edge).
When it doesn't (for example inside the Claude app), it plays the recordings in
`docs/audio/`. They were made with [Piper TTS](https://github.com/rhasspy/piper), voice
`pl-mls_6892-low` (CC BY 4.0, trained on the Multilingual LibriSpeech dataset).

This voice has no nasal vowel sound, so before recording `make_audio.py` spells ą/ę the
way they are pronounced (for example *ręka* → "renka", *są* → "som").

To re-record after changing the course text:

    pip install piper-tts lameenc
    curl -LO https://github.com/rhasspy/piper/releases/download/v0.0.2/voice-pl-mls_6892-low.tar.gz
    tar xzf voice-pl-mls_6892-low.tar.gz
    python3 src/make_audio.py pl-mls_6892-low.onnx
    python3 src/build.py
