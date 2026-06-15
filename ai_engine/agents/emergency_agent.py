import sys
import os
import ollama

from ai_engine.memory.conversation_memory import get_memory

from ai_engine.memory.patient_memory import format_patient_memory, get_patient_memory
from ai_engine.models.llm_router import llm_response
from ai_engine.prompts.prompt_loader import load_prompt

# =========================
# PROJECT ROOT
# =========================

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

sys.path.append(PROJECT_ROOT)

# =========================
# RETRIEVAL
# =========================

from ai_engine.tools.retrieval_tool import retrieve_context

# =========================
# EMERGENCY AGENT
# =========================


def emergency_agent(query):

    print("\nChecking emergency context...\n")

    context = retrieve_context(query, top_k=1)

    conversation_history = get_memory()

    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("emergency_prompt.txt")

    prompt = f"""
        {template}

        Medical Evidence:
        {context}

        Patient Profile:
        {patient_info}

        Conversation History:
        {conversation_history}

        Symptoms:
        {query}
    """
    response = llm_response(prompt)

    return response



# =========================
# TEST
# =========================

if __name__ == "__main__":

    test_query = "Patient has chest pain and difficulty breathing"

    result = emergency_agent(test_query)

    print("\n========================")
    print("EMERGENCY RESPONSE")
    print("========================\n")

    print(result)
