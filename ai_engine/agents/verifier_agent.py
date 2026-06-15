from ai_engine.models.llm_router import llm_response
from ai_engine.prompts.prompt_loader import load_prompt


def verifier_agent(query, response, context):

    template = load_prompt("verifier_prompt.txt")


    prompt = template.format(context=context, response=response)

    verification = llm_response(prompt)
    
    return verification
