import time

from ai_engine.tools.retrieval_tool import retrieve_context

from ai_engine.memory.conversation_memory import get_memory

from ai_engine.memory.patient_memory import (
    get_patient_memory,
    format_patient_memory,
)

from ai_engine.models.llm_router import llm_response

from ai_engine.prompts.prompt_loader import load_prompt


def diagnosis_agent(symptoms):

    print("\nAnalyzing symptoms...\n")

    start = time.time()

    context = retrieve_context(symptoms, top_k=1)

    print("RETRIEVAL TIME:", round(time.time() - start, 2))

    conversation_history = get_memory()

    patient_info = format_patient_memory(get_patient_memory())

    template = load_prompt("diagnosis_prompt.txt")

    # use the incoming symptoms as the question/query for the prompt
    query = symptoms

    # render the prompt template
    prompt = template.format(context=context, question=query)

    start = time.time()

    response = llm_response(prompt)

    print("LLM TIME:", round(time.time() - start, 2))

    return response
