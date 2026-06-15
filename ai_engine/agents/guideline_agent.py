import ollama
import sys
import os

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
# GUIDELINE AGENT
# =========================


def guideline_agent(query):

    print("\nSearching guideline database...\n")

    context = retrieve_context(query, top_k=1)

    conversation_history = get_memory()

    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("guideline_prompt.txt")

    # format the loaded prompt template with retrieved context and question
    try:
        prompt = template.format(context=context, question=query)
    except Exception:
        # if formatting fails, fall back to the raw prompt
        pass

    response = llm_response(prompt)

    return response


# =========================
# TEST
# =========================

if __name__ == "__main__":

    question = "What are guidelines for hypertension management?"

    result = guideline_agent(question)

    print("\n====================")
    print("GUIDELINE RESPONSE")
    print("====================\n")

    print(result)
