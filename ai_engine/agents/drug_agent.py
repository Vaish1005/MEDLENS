import time

from ai_engine.memory.conversation_memory import get_memory
from ai_engine.memory.patient_memory import format_patient_memory, get_patient_memory
from ai_engine.tools.retrieval_tool import retrieve_context
from ai_engine.models.llm_router import llm_response
from ai_engine.prompts.prompt_loader import load_prompt

# ============================================
# DRUG AGENT
# ============================================


def drug_agent(user_query):
    print("\nSearching drug database...\n")

    context = retrieve_context(user_query, top_k=1)
    conversation_history = get_memory()
    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("drug_prompt.txt")

    prompt = template.format(context=context, question=user_query)

    start = time.time()
    response = llm_response(prompt)
    
    return response
