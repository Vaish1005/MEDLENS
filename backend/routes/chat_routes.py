from fastapi import APIRouter

from backend.models.request_models import ChatRequest

from backend.services.orchestrator_service import process_query

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    result = process_query(request.query)

    return result
