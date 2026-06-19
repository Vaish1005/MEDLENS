from sentence_transformers import SentenceTransformer

_model = None


def get_embedding_model():
    global _model

    if _model is None:
        print("Loading embedding model...")
        _model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

    return _model


def get_embedding(text):
    model = get_embedding_model()

    embedding = model.encode(text)

    return embedding.tolist()
