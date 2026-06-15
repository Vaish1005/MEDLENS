from ai_engine.models.ollama_client import generate_response as ollama_response
from ai_engine.models.groq_client import generate_response as groq_response

USE_LOCAL = False


def llm_response(prompt):

    if USE_LOCAL:
        return ollama_response(prompt)

    return groq_response(prompt)
