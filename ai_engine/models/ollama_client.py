import ollama
import time

def generate_response(prompt):

    start = time.time()

    response = ollama.chat(
        model="phi3:mini",
        messages=[{"role": "user", "content": prompt}],
        keep_alive=-1
    )

    print("OLLAMA TIME:", round(time.time()-start,2))

    return response["message"]["content"]