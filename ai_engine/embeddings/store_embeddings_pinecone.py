import json
import os
from tqdm import tqdm
from pinecone import Pinecone

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")

INDEX_NAME = "medlens-v2"

INPUT_FILE = "data/processed/embeddings/embedded_data.json"

BATCH_SIZE = 200

pc = Pinecone(
    api_key=PINECONE_API_KEY
)

index = pc.Index(INDEX_NAME)

print("Loading embeddings...")

with open(
    INPUT_FILE,
    "r",
    encoding="utf-8"
) as f:

    embedded_data = json.load(f)

print(f"{len(embedded_data)} chunks loaded")

for i in tqdm(
    range(0, len(embedded_data), BATCH_SIZE)
):

    batch = embedded_data[i:i+BATCH_SIZE]

    vectors = []

    for item in batch:

        vectors.append(
            {
                "id": str(item["chunk_id"]),
                "values": item["embedding"],
                "metadata": {
                    "source": item["source"],
                    "title": item["title"],
                    "content": item["content"]
                }
            }
        )

    index.upsert(
        vectors=vectors
    )

print("\nUpload completed.")