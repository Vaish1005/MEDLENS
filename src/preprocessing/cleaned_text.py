import json
import re
import os
from tqdm import tqdm


INPUT_FILE = (
    "data/processed/unified/merged_dataset.json"
)

OUTPUT_FILE = (
    "data/processed/cleaned_text/cleaned_data.json"
)


os.makedirs(
    "data/processed/cleaned_text",
    exist_ok=True
)


def clean_text(text):

    if not text:
        return ""

    # Remove HTML tags
    text = re.sub(
        r"<.*?>",
        " ",
        text
    )

    # Remove URLs
    text = re.sub(
        r"http\S+",
        " ",
        text
    )

    # Remove extra spaces
    text = re.sub(
        r"\s+",
        " ",
        text
    )

    return text.strip()


with open(
    INPUT_FILE,
    "r",
    encoding="utf-8"
) as f:

    data=json.load(f)


cleaned=[]

for item in tqdm(data):

    cleaned_doc={

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
        clean_text(
            item.get(
                "content",
                ""
            )
        ),

        "metadata":
        item.get(
            "metadata",
            {}
        )
    }

    cleaned.append(
        cleaned_doc
    )


with open(
    OUTPUT_FILE,
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        cleaned,
        f,
        indent=2,
        ensure_ascii=False
    )


print(
    f"\nSaved {len(cleaned)} cleaned documents"
)