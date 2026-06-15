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
# SUMMARIZER AGENT
# =========================


def summarizer_agent(topic):

    print("\nRetrieving summary context...\n")

    context = retrieve_context(topic, top_k=1)

    conversation_history = get_memory()

    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("summarizer_prompt.txt")

    prompt = template.format(context=context, question=topic)

    response = llm_response(prompt)

    return response


# =========================
# TEST
# =========================

if __name__ == "__main__":

    topic = "Pulmonary hypertension"

    result = summarizer_agent(topic)

    print("\n====================")
    print("SUMMARY RESPONSE")
    print("====================\n")

    print(result)
