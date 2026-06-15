import json
import os
import glob

merged=[]

FILES=[

    "data/processed/nih/nih_medlineplus.json",

    "data/processed/dailymed/dailymed_processed.json",

    "data/processed/who/who_processed.json",

    "data/processed/pubmed/cardiology.json",

    "data/processed/pubmed/diabetes.json",

    "data/processed/pubmed/hypertension.json",

    "data/processed/pubmed/pulmonary.json"
]


# Normal datasets
for file in FILES:

    if os.path.exists(file):

        print(f"Loading {file}")

        with open(
            file,
            "r",
            encoding="utf-8"
        ) as f:

            data=json.load(f)

            merged.extend(data)

            print(
                f"Added {len(data)} docs"
            )


# MedQuad folder
print("\nLoading MedQuad files...")

medquad_files=glob.glob(
    "data/processed/medquad/*.json"
)

print(
    f"Found {len(medquad_files)} files"
)

for file in medquad_files:

    try:

        with open(
            file,
            "r",
            encoding="utf-8"
        ) as f:

            data=json.load(f)

            if isinstance(data,list):
                merged.extend(data)

            else:
                merged.append(data)

    except Exception as e:

        print(
            f"Error {file}: {e}"
        )


print(
    f"\nTotal merged docs: {len(merged)}"
)


os.makedirs(
    "data/processed/unified",
    exist_ok=True
)

with open(
    "data/processed/unified/merged_dataset.json",
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        merged,
        f,
        indent=2,
        ensure_ascii=False
    )

print(
    "\nMerged dataset saved successfully"
)