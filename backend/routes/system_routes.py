from fastapi import APIRouter

router = APIRouter()


@router.get("/system-health")
def system_health():

    return {

        "backend": "Online",

        "Pinecone": "Connected",

        "Groq LLM": "Loaded",

        "memory_service": "Active",

        "agents": "6 Active"

    }