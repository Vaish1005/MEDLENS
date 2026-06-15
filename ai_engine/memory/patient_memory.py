# =========================
# PATIENT MEMORY
# =========================

patient_memory = {

    "name": "",

    "age": "",

    "gender": "",

    "conditions": [],

    "medications": [],

    "allergies": [],

    "symptoms": [],

    "vitals": {}
}


# =========================
# UPDATE PATIENT INFO
# =========================

def update_patient_memory(

    key,
    value
):

    global patient_memory

    # LIST FIELDS

    if key in [

        "conditions",
        "medications",
        "allergies",
        "symptoms"
    ]:

        if value not in patient_memory[key]:

            patient_memory[key].append(
                value
            )

    # VITALS

    elif key == "vitals":

        patient_memory["vitals"].update(
            value
        )

    # NORMAL FIELDS

    else:

        patient_memory[key] = value


# =========================
# GET MEMORY
# =========================

def get_patient_memory():

    return patient_memory


# =========================
# FORMAT MEMORY
# =========================

def format_patient_memory(patient_memory):

    memory = patient_memory

    return f"""

Patient Information:

Name:
{memory['name']}

Age:
{memory['age']}

Gender:
{memory['gender']}

Conditions:
{", ".join(memory.get('conditions', []))}

Medications:
{", ".join(memory.get('medications', []))}

Allergies:
{", ".join(memory.get('allergies', []))}

Symptoms:
{", ".join(memory.get('symptoms', []))}

Vitals:
{memory['vitals']}

"""


# =========================
# CLEAR MEMORY
# =========================

def clear_patient_memory():

    global patient_memory

    patient_memory = {

        "name": "",

        "age": "",

        "gender": "",

        "conditions": [],

        "medications": [],

        "allergies": [],

        "symptoms": [],

        "vitals": {}
    }