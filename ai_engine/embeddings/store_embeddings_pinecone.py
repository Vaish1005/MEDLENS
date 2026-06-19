import json
from tqdm import tqdm
from pinecone import Pinecone

# -------------------------
# CONFIG
# -------------------------

PINECONE_API_KEY = "pcsk_3zwLCF_TqmpdYhTgGzB7eihi6shyqV76JnxS9wVdKH64fU4AykazZB96xmnztC1NzJYKVZ"
INDEX_NAME = "medlens"

INPUT_FILE = "data/processed/embeddings/embedded_data.json"

BATCH_SIZE = 100

# -------------------------
# CONNECT
# -------------------------

pc = Pinecone(api_key=PINECONE_API_KEY)

index = pc.Index(INDEX_NAME)

# -------------------------
# LOAD EMBEDDINGS
# -------------------------

print("Loading embeddings...")

with open(INPUT_FILE, "r", encoding="utf-8") as f:

    embedded_data = json.load(f)

print(f"{len(embedded_data)} chunks loaded")

# -------------------------
# UPLOAD IN BATCHES
# -------------------------

for i in tqdm(range(0, len(embedded_data), BATCH_SIZE)):

    batch = embedded_data[i : i + BATCH_SIZE]

    vectors = []

    for item in batch:

        vectors.append(
            {
                "id": str(item["chunk_id"]),
                "values": item["embedding"],
                "metadata": {
                    "source": item["source"],
                    "title": item["title"],
                    "content": item["content"],
                },
            }
        )

    index.upsert(vectors=vectors)

print("\nUpload completed.")
