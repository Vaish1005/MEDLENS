def load_prompt(file_name):

    with open(f"ai_engine/prompts/{file_name}", encoding="utf-8") as f:

        return f.read()
