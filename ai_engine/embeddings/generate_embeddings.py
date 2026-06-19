import json
import os
import time
from tqdm import tqdm
import google.generativeai as genai

INPUT_FILE = "data/processed/chunks/chunked_data.json"

OUTPUT_FILE = "data/processed/embeddings/embedded_data.json"

os.makedirs("data/processed/embeddings", exist_ok=True)

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

print("Loading chunks...")

with open(INPUT_FILE, "r", encoding="utf-8") as f:

    chunks = json.load(f)

print(f"Generating embeddings for {len(chunks)} chunks...")

embedded_data = []

for chunk in tqdm(chunks):

    text = chunk["content"]

    try:

        response = genai.embed_content(model="models/text-embedding-004", content=text)

        chunk["embedding"] = response["embedding"]

        embedded_data.append(chunk)

        # Avoid rate limits
        time.sleep(0.1)

    except Exception as e:

        print(f"Error embedding chunk {chunk['chunk_id']}: {e}")

print("Saving embeddings...")

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:

    json.dump(embedded_data, f, ensure_ascii=False)

print(f"\nSaved {len(embedded_data)} embeddings")
