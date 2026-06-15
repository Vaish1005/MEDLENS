from ai_engine.memory.patient_memory import (

    update_patient_memory,

    format_patient_memory
)

update_patient_memory(
    "age",
    "45"
)

update_patient_memory(
    "gender",
    "Male"
)

update_patient_memory(
    "conditions",
    "Diabetes"
)

update_patient_memory(
    "medications",
    "Metformin"
)

update_patient_memory(
    "allergies",
    "Penicillin"
)

update_patient_memory(
    "symptoms",
    "Chest pain"
)

update_patient_memory(

    "vitals",

    {
        "BP": "140/90",
        "HR": "110 bpm"
    }
)

print(
    format_patient_memory()
)