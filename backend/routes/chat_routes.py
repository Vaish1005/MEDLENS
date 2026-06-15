from fastapi import APIRouter

from backend.models.request_models import (
    ChatRequest
)

from backend.models.response_models import (
    ChatResponse
)

from backend.services.orchestrator_service import (
    process_query
)

router = APIRouter()

@router.post(
    "/chat",
    response_model=ChatResponse
)
def chat(
    request: ChatRequest
):

    answer = process_query(
        request.query
    )

    return ChatResponse(
        response=answer
    )