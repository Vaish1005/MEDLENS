from fastapi import APIRouter
from fastapi import HTTPException

from backend.db.database import SessionLocal

from ..db.models import User

from ..db.schemas import UserRegister, UserLogin
from .password_utils import hash_password, verify_password
from .jwt_handler import create_access_token, verify_token

router = APIRouter()


@router.post("/register")
def register_user(user: UserRegister):

    db = SessionLocal()

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:

        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = User(
        username=user.username, email=user.email, password=hash_password(user.password)
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {"message": "User Registered Successfully"}


@router.post("/login")
def login_user(user: UserLogin):

    db = SessionLocal()

    existing_user = db.query(User).filter(User.email == user.email).first()

    if not existing_user:

        raise HTTPException(status_code=401, detail="Invalid Credentials")

    if not verify_password(user.password, existing_user.password):

        raise HTTPException(status_code=401, detail="Invalid Credentials")

    token = create_access_token({"sub": existing_user.email})

    return {"access_token": token, "token_type": "bearer"}


@router.get("/me")
def get_current_user(token: str):

    payload = verify_token(token)

    return {"email": payload["sub"]}
