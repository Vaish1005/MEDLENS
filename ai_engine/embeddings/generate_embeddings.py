from google import genai
import os
import json
from tqdm import tqdm

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

INPUT_FILE = "data/processed/chunks/chunked_data.json"

OUTPUT_FILE = "data/processed/embeddings/embedded_data.json"

print("Loading chunks...")

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    chunks = json.load(f)

embedded_data = []

for chunk in tqdm(chunks):

    response = client.models.embed_content(
        model="text-embedding-004", contents=chunk["content"]
    )

    chunk["embedding"] = response.embeddings[0].values

    embedded_data.append(chunk)

print("Saving embeddings...")

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:

    json.dump(embedded_data, f, ensure_ascii=False)

print(f"\nSaved {len(embedded_data)} embeddings")
