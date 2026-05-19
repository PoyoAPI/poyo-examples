# GPT-5.2 Python Example

Sends a synchronous chat completion request to `/v1/chat/completions`.

## Run

```bash
cd python/gpt-5.2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
pip install -r requirements.txt
python main.py
```

The script exits before making a request if `POYO_API_KEY` is missing.
