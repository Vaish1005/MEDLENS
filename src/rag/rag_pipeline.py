import sys
import os

sys.path.append(
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..", "..")
    )
)

import chromadb
import ollama

from sentence_transformers import (
    SentenceTransformer
)


# =========================
# LOAD EMBEDDING MODEL
# =========================

embedding_model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)


# =========================
# CONNECT CHROMADB
# =========================

client = chromadb.PersistentClient(
    path="data/db/chroma_db"
)

collection = client.get_collection(
    name="medical_knowledge"
)


# =========================
# RETRIEVAL FUNCTION
# =========================

def retrieve_context(
    query,
    top_k=5
):

    query_embedding = embedding_model.encode(
        query
    ).tolist()


    results = collection.query(

        query_embeddings=[
            query_embedding
        ],

        n_results=top_k
    )

    documents = results["documents"][0]

    context = "\n\n".join(
        documents
    )

    return context


# =========================
# ASK RAG
# =========================

def ask_rag(query):

    context = retrieve_context(
        query
    )

    prompt = f"""

You are a clinical decision support AI assistant.

Answer ONLY using the medical context below.

If information is insufficient,
say:
"I could not find enough evidence."

Medical Context:
{context}

Question:
{query}

Answer:
"""


    response = ollama.chat(

        model="mistral",

        messages=[

            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]


# =========================
# TEST
# =========================

query = (
    "What are symptoms of pulmonary hypertension?"
)

answer = ask_rag(query)

print("\n====================")
print("RAG RESPONSE")
print("====================\n")

print(answer)