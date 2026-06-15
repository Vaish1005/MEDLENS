from datasets import Dataset
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall
)

# --------------------------------
# Sample data
# --------------------------------

data = {
    "question": [
        "Patient has chest pain and shortness of breath",
        "Metformin side effects",
        "WHO guideline for hypertension"
    ],

    "answer": [
        "Chest pain and shortness of breath may indicate a heart attack and require emergency care.",
        "Common side effects of metformin include nausea, diarrhea and abdominal discomfort.",
        "WHO recommends lifestyle modification and antihypertensive medications for hypertension."
    ],

    "contexts": [
        [
            "Chest pain with breathing difficulty is a medical emergency and requires immediate attention."
        ],

        [
            "Metformin commonly causes nausea, diarrhea and stomach upset."
        ],

        [
            "WHO hypertension guidelines recommend lifestyle changes and medications."
        ]
    ],

    "ground_truth": [
        "Heart attack symptoms require emergency treatment.",
        "Metformin may cause gastrointestinal side effects.",
        "WHO recommends lifestyle modifications and antihypertensive therapy."
    ]
}

dataset = Dataset.from_dict(data)

# --------------------------------
# Evaluation
# --------------------------------

result = evaluate(
    dataset=dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
        context_recall
    ]
)

print(result)
print(result.to_pandas())