import chromadb
from sentence_transformers import SentenceTransformer


# =========================
# LOAD MODEL
# =========================

print("Loading embedding model...")

model = SentenceTransformer(
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
# SEARCH FUNCTION
# =========================

def search_medical_documents(
    query,
    top_k=5
):

    query_embedding = model.encode(
        query
    ).tolist()


    results = collection.query(

        query_embeddings=[
            query_embedding
        ],

        n_results=top_k
    )

    return results


# =========================
# TEST QUERY
# =========================

query = (
    "What are the symptoms of hypertension?"
)


results = search_medical_documents(
    query
)


print("\n========================")
print("TOP RESULTS")
print("========================\n")


for i in range(
    len(results["documents"][0])
):

    print(
        f"\nRESULT {i+1}"
    )

    print(
        "\nTITLE:"
    )

    print(
        results["metadatas"][0][i]["title"]
    )

    print(
        "\nSOURCE:"
    )

    print(
        results["metadatas"][0][i]["source"]
    )

    print(
        "\nCONTENT:"
    )

    print(
        results["documents"][0][i][:1000]
    )

    print(
        "\n------------------------"
    )