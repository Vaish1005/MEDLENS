import json
import os
from tqdm import tqdm


INPUT_FILE = (
    "data/processed/cleaned_text/cleaned_data.json"
)

OUTPUT_FILE = (
    "data/processed/chunks/chunked_data.json"
)


os.makedirs(
    "data/processed/chunks",
    exist_ok=True
)


CHUNK_SIZE = 500
OVERLAP = 100


def split_text(text):

    words = text.split()

    chunks = []

    start = 0

    while start < len(words):

        end = start + CHUNK_SIZE

        chunk = " ".join(
            words[start:end]
        )

        chunks.append(
            chunk
        )

        start += (
            CHUNK_SIZE - OVERLAP
        )

    return chunks


with open(
    INPUT_FILE,
    "r",
    encoding="utf-8"
) as f:

    data = json.load(f)


all_chunks=[]

chunk_id=0


for item in tqdm(data):

    content=item.get(
        "content",
        ""
    )

    chunks=split_text(
        content
    )

    for chunk in chunks:

        chunk_doc={

            "chunk_id":
            chunk_id,

            "source":
            item.get(
                "source",
                ""
            ),

            "title":
            item.get(
                "title",
                ""
            ),

            "content":
            chunk,

            "metadata":
            item.get(
                "metadata",
                {}
            )
        }

        all_chunks.append(
            chunk_doc
        )

        chunk_id+=1


with open(
    OUTPUT_FILE,
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        all_chunks,
        f,
        indent=2,
        ensure_ascii=False
    )


print(
    f"\nSaved {len(all_chunks)} chunks"
)