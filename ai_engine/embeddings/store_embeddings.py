import json
import os
import chromadb
from tqdm import tqdm


# =========================
# FILES
# =========================

INPUT_FILE = (
    "data/processed/embeddings/embedded_data.json"
)

CHROMA_PATH = (
    "data/db/chroma_db"
)

COLLECTION_NAME = (
    "medical_knowledge"
)


# =========================
# LOAD EMBEDDINGS
# =========================

print("Loading embedded data...")

with open(
    INPUT_FILE,
    "r",
    encoding="utf-8"
) as f:

    data = json.load(f)


print(
    f"Loaded {len(data)} records"
)


# =========================
# CHROMA CLIENT
# =========================

client = chromadb.PersistentClient(
    path=CHROMA_PATH
)


collection = client.get_or_create_collection(
    name=COLLECTION_NAME
)


# =========================
# STORE DATA
# =========================

BATCH_SIZE = 1000


for i in tqdm(
    range(0, len(data), BATCH_SIZE)
):

    batch = data[i:i+BATCH_SIZE]

    ids = []
    embeddings = []
    documents = []
    metadatas = []

    for item in batch:

        ids.append(
            str(item["chunk_id"])
        )

        embeddings.append(
            item["embedding"]
        )

        documents.append(
            item["content"]
        )

        metadata = {

            "source":
            item.get(
                "source",
                ""
            ),

            "title":
            item.get(
                "title",
                ""
            )
        }

        metadatas.append(
            metadata
        )


    collection.add(

        ids=ids,

        embeddings=embeddings,

        documents=documents,

        metadatas=metadatas
    )


print("\n===================")
print("Embeddings stored!")
print("===================")