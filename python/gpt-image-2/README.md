# GPT Image 2 Python Example

Submits a `gpt-image-2` task and polls until it reaches `finished` or `failed`.

## Run

```bash
cd python/gpt-image-2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
pip install -r requirements.txt
python main.py
```

The script exits before making a request if `POYO_API_KEY` is missing.
