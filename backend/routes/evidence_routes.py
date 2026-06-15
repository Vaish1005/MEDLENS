from fastapi import APIRouter

router = APIRouter()

evidence_store = []

@router.get("/evidence")
def get_evidence():

    return evidence_store

evidence_store = []

def update_evidence(data):

    global evidence_store

    evidence_store = data