import ollama

from ai_engine.memory.conversation_memory import get_memory
from ai_engine.memory.patient_memory import format_patient_memory, get_patient_memory


from ai_engine.tools.retrieval_tool import retrieve_context
from ai_engine.models.llm_router import llm_response
from ai_engine.prompts.prompt_loader import load_prompt

# =========================
# TREATMENT AGENT
# =========================


def treatment_agent(condition):

    context = retrieve_context(condition, top_k=1)
    conversation_history = get_memory()

    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("treatment_prompt.txt")

    prompt = template.format(context=context, question=condition)

    response = llm_response(prompt)

    return response


# =========================
# TEST
# =========================

if __name__ == "__main__":

    condition = "Type 2 diabetes"

    result = treatment_agent(condition)

    print("\n====================")
    print("TREATMENT RESPONSE")
    print("====================\n")

    print(result)
