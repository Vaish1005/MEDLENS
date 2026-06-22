from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

audit_logs = []


def add_log(message):

    audit_logs.append(
        {"message": message, "timestamp": datetime.now().strftime("%H:%M:%S")}
    )

    if len(audit_logs) > 50:

        audit_logs.pop(0)


@router.get("/audit-trail")
def get_audit_trail():

    return audit_logs
