# =========================
# CONVERSATION MEMORY
# =========================

conversation_history = []


# =========================
# ADD MEMORY
# =========================


def add_to_memory(query, response):

    conversation_history.append({"query": query, "response": response})


# =========================
# GET MEMORY
# =========================


def get_memory(limit=5):

    recent_memory = conversation_history[-limit:]

    memory_text = ""

    for item in recent_memory:

        memory_text += f"""

User Query:
{item['query']}

Assistant Response:
{item['response']}

"""

    return memory_text


# =========================
# CLEAR MEMORY
# =========================


def clear_memory():

    conversation_history.clear()
