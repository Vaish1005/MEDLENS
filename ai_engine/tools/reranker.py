from sentence_transformers import (
    CrossEncoder
)

# =========================
# LOAD RERANKER MODEL
# =========================

reranker_model = CrossEncoder(

    "cross-encoder/ms-marco-MiniLM-L-6-v2"
)

# =========================
# RERANK FUNCTION
# =========================

def rerank_documents(

    query,

    retrieved_docs,

    top_k=3
):

    pairs = []

    for doc in retrieved_docs:

        pairs.append(

            [
                query,
                doc["content"]
            ]
        )

    # =====================
    # SCORE DOCS
    # =====================

    scores = reranker_model.predict(
        pairs
    )

    # =====================
    # ATTACH SCORES
    # =====================

    scored_docs = []

    for doc, score in zip(
        retrieved_docs,
        scores
    ):

        doc["rerank_score"] = float(score)

        scored_docs.append(doc)

    # =====================
    # SORT
    # =====================

    scored_docs = sorted(

        scored_docs,

        key=lambda x: x["rerank_score"],

        reverse=True
    )

    return scored_docs[:top_k]