import sqlite3

conn = sqlite3.connect(
    "db/medlens.db"
)

cursor = conn.cursor()

cursor.execute(
    "SELECT * FROM users"
)

print(
    cursor.fetchall()
)