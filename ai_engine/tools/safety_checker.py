# =========================
# MEDICAL SAFETY CHECKER
# =========================

EMERGENCY_KEYWORDS = [
    "chest pain",
    "heart attack",
    "stroke",
    "severe bleeding",
    "unconscious",
    "suicidal",
    "suicide",
    "difficulty breathing",
    "shortness of breath",
    "seizure",
    "anaphylaxis",
    "overdose",
    "cardiac arrest",
]


DISCLAIMER = """

IMPORTANT MEDICAL DISCLAIMER:

This system is an AI clinical decision support assistant.
It is NOT a licensed medical professional.

Always consult a qualified healthcare provider
for diagnosis and treatment decisions.

If this is a medical emergency,
contact emergency services immediately.

"""


# =========================
# SAFETY FUNCTION
# =========================


def safety_check(query, response):

    query_lower = query.lower()

    emergency_detected = False

    detected_keywords = []

    # =====================
    # DETECT EMERGENCIES
    # =====================

    for keyword in EMERGENCY_KEYWORDS:

        if keyword in query_lower:

            emergency_detected = True

            detected_keywords.append(keyword)

    # =====================
    # BUILD SAFE RESPONSE
    # =====================

    final_response = response

    # EMERGENCY ALERT

    if emergency_detected:

        emergency_message = f"""

🚨 MEDICAL EMERGENCY DETECTED

Detected emergency indicators:
{", ".join(detected_keywords)}

Seek immediate medical attention
or contact emergency services immediately.

"""

        final_response = emergency_message + "\n\n" + final_response

    # ALWAYS ADD DISCLAIMER

    final_response += "\n\n" + DISCLAIMER

    return final_response
