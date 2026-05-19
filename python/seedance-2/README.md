# Seedance 2 Python Example

Submits a `seedance-2` video task and polls until it reaches `finished` or `failed`.

## Run

```bash
cd python/seedance-2
cp ../../.env.example ../../.env
# Edit ../../.env and set POYO_API_KEY
pip install -r requirements.txt
python main.py
```

The script exits before making a request if `POYO_API_KEY` is missing.
