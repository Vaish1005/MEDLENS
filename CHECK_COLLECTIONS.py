import chromadb

client = chromadb.PersistentClient(path="data/db")

print(client.list_collections())