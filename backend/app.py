from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.patient_routes import (
    router as patient_router
)
from backend.routes.evidence_routes import (
    router as evidence_router
)
from backend.routes.chat_routes import (
    router as chat_router
)
from backend.routes.audit_routes import (
    router as audit_router
)
from backend.routes.dashboard_routes import (
    router as dashboard_router
)
from backend.routes.system_routes import (
    router as system_router
)
from backend.auth.auth_routes import (
    router as auth_router
)

app = FastAPI(
    title="Medical AI Backend"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(
    chat_router
)
app.include_router(
    patient_router
)
app.include_router(
    evidence_router
)
app.include_router(
    audit_router
)
app.include_router(
    dashboard_router
)
app.include_router(
    system_router
)
app.include_router(
    auth_router
)   

@app.get("/")

def home():

    return {
        "message":
        "Backend running successfully"
    }



