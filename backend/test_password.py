from passlib.hash import bcrypt

password = "medlens123"

hashed = bcrypt.hash(password)

print(hashed)

print(
    bcrypt.verify(
        password,
        hashed
    )
)