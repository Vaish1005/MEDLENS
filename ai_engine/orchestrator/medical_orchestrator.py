import sys
import os
import time
import traceback

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

sys.path.append(PROJECT_ROOT)

# =========================
# IMPORT AGENTS
# =========================

from ai_engine.agents.diagnosis_agent import diagnosis_agent
from ai_engine.agents.drug_agent import drug_agent
from ai_engine.agents.treatment_agent import treatment_agent
from ai_engine.agents.guideline_agent import guideline_agent
from ai_engine.agents.summarizer_agent import summarizer_agent
from ai_engine.agents.emergency_agent import emergency_agent
from ai_engine.agents.verifier_agent import verifier_agent

# =========================
# TOOLS
# =========================

from ai_engine.tools.safety_checker import safety_check
from backend.routes.audit_routes import add_log
from backend.routes.dashboard_routes import update_metrics

# =========================
# MEMORY
# =========================

from ai_engine.memory.conversation_memory import add_to_memory
from ai_engine.memory.patient_memory import (
    get_patient_memory,
    format_patient_memory,
)


def medical_orchestrator(query):

    start_time = time.time()
    query_lower = query.lower()

    update_metrics(queries=1)
    add_log(f"Query Received: {query}")

    # =====================
    # LOAD PATIENT MEMORY
    # =====================

    try:
        patient_data = get_patient_memory()
        patient_info = format_patient_memory(patient_data)

    except Exception as e:
        print("Memory Error:", e)
        patient_info = "No patient memory available."

    # =====================
    # KEYWORDS
    # =====================

    drug_keywords = [
        "drug",
        "medicine",
        "dose",
        "dosage",
        "tablet",
        "side effect",
        "interaction",
        "metformin",
        "aspirin",
        "ibuprofen",
    ]

    guideline_keywords = [
        "guideline",
        "recommendation",
        "who",
        "nih",
        "protocol",
    ]

    treatment_keywords = [
        "treatment",
        "therapy",
        "manage",
        "management",
    ]

    summary_keywords = [
        "summarize",
        "summary",
        "overview",
    ]

    emergency_keywords = [
        "chest pain",
        "heart attack",
        "stroke",
        "difficulty breathing",
        "shortness of breath",
        "seizure",
        "unconscious",
        "overdose",
        "suicidal",
        "cardiac arrest",
    ]

    # =====================
    # ROUTING
    # =====================

    try:

        if any(word in query_lower for word in emergency_keywords):

            print("Using Emergency Agent")
            add_log("Emergency Agent Selected")

            response = emergency_agent(query)

        elif any(word in query_lower for word in drug_keywords):

            print("Using Drug Agent")
            add_log("Drug Agent Selected")

            response = drug_agent(query)

        elif any(word in query_lower for word in guideline_keywords):

            print("Using Guideline Agent")
            add_log("Guideline Agent Selected")

            response = guideline_agent(query)

        elif any(word in query_lower for word in treatment_keywords):

            print("Using Treatment Agent")
            add_log("Treatment Agent Selected")

            response = treatment_agent(query)

        elif any(word in query_lower for word in summary_keywords):

            print("Using Summarizer Agent")
            add_log("Summarizer Agent Selected")

            response = summarizer_agent(query)

        else:

            print("Using Diagnosis Agent")
            add_log("Diagnosis Agent Selected")

            response = diagnosis_agent(query)

    except Exception:

        traceback.print_exc()

        response = "An error occurred while processing the query."

    # =====================
    # VERIFIER
    # =====================

    try:

        verification = verifier_agent(query=query, response=response, context="")
        print("Response type:", type(response))
        print("Verification type:", type(verification))
        if response is None:
            response = ""
        if verification is None:
            verification = ""

        response = str(response) + "\n\n" + str(verification)

        add_log("Verifier Agent Executed")

    except Exception:

        traceback.print_exc()

        add_log("Verifier Agent Failed")

    # =====================
    # MEMORY
    # =====================

    try:

        add_to_memory(query, response)

        add_log("Conversation Memory Updated")

    except Exception as e:

        print("Memory Save Error:", e)

    # =====================
    # SAFETY CHECK
    # =====================

    try:

        safe_response = safety_check(query, response)

        add_log("Safety Check Completed")

    except Exception as e:

        print("Safety Checker Error:", e)

        safe_response = response

    # =====================
    # METRICS
    # =====================

    response_time = round(time.time() - start_time, 2)

    print("Response Time:", response_time)

    update_metrics(response_time=response_time)

    from backend.routes.evidence_routes import evidence_store


    return {"response": safe_response, "evidence": evidence_store}
