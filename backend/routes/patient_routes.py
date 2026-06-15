from fastapi import APIRouter

from ai_engine.memory.patient_memory import (
    get_patient_memory
)

router = APIRouter()

@router.get("/patient-memory")
def patient_memory():

    return get_patient_memory()