from ai_engine.vector_store.pinecone_client import index
from ai_engine.embeddings.embedding_service import get_embedding

from backend.routes.evidence_routes import update_evidence
from backend.routes.audit_routes import add_log
from backend.routes.dashboard_routes import update_metrics


def retrieve_context(query, top_k=3):

    query_embedding = get_embedding(query)

    results = index.query(vector=query_embedding, top_k=top_k, include_metadata=True)

    print(results)

    matches = results.matches

    print("MATCHES:", len(matches))

    evidence_data = []

    context = ""

    for match in matches:

        metadata = match.metadata

        evidence_data.append(
            {
                "source": metadata.get("source", "Unknown"),
                "score": round(match.score, 3),
                "preview": metadata.get("content", "")[:500],
                "full_text": metadata.get("content", ""),
            }
        )

        context += metadata.get("content", "") + "\n\n"

    print("EVIDENCE DATA")
    print(evidence_data)

    update_evidence(evidence_data)

    update_metrics(evidence=len(matches))

    add_log(f"Retrieved {len(matches)} documents")

    return context[:800]
