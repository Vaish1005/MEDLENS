from backend.auth.jwt_handler import (

    create_access_token,

    verify_token

)

token = create_access_token({

    "sub": "admin",

    "email": "admin@medlens.com"

})

print("\nTOKEN:\n")

print(token)

decoded = verify_token(
    token
)

print("\nDECODED TOKEN:\n")

print(decoded)