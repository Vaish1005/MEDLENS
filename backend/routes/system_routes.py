from fastapi import APIRouter

router = APIRouter()


@router.get("/system-health")
def system_health():

    return {

        "backend": "Online",

        "vector_db": "Connected",

        "embedding_model": "Loaded",

        "memory_service": "Active",

        "agents": "6 Active"

    }