from dotenv import load_dotenv

load_dotenv()

from pinecone import Pinecone
import os

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

index = pc.Index("medlens-v2")
