import sys
import os

PROJECT_ROOT = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../../"
    )
)

sys.path.append(PROJECT_ROOT)

# backend/services/orchestrator_service.py

from ai_engine.orchestrator.medical_orchestrator import (
    medical_orchestrator
)

def process_query(query):

    return medical_orchestrator(query)