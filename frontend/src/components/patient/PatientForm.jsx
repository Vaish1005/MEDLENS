import { useState } from "react";

export default function PatientForm() {
  const existingPatient =
    JSON.parse(localStorage.getItem("patientMemory")) || {};

  const [name, setName] = useState(existingPatient.name || "");

  const [age, setAge] = useState(existingPatient.age || "");

  const [gender, setGender] = useState(existingPatient.gender || "");

  const [conditions, setConditions] = useState(
    existingPatient.conditions || "",
  );

  const [medications, setMedications] = useState(
    existingPatient.medications || "",
  );

  const [allergies, setAllergies] = useState(existingPatient.allergies || "");

  const savePatient = () => {
    localStorage.setItem(
      "patientMemory",

      JSON.stringify({
        name,

        age,

        gender,

        conditions,

        medications,

        allergies,
      }),
    );

    alert("Patient saved successfully");
  };

  return (
    <div className="space-y-5">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Patient Name"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <input
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <textarea
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
        placeholder="Conditions"
        rows="3"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <textarea
        value={medications}
        onChange={(e) => setMedications(e.target.value)}
        placeholder="Medications"
        rows="3"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <textarea
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
        placeholder="Allergies"
        rows="3"
        className="w-full p-3 rounded-lg bg-slate-900"
      />

      <button
        onClick={savePatient}
        className="

          px-6

          py-3

          rounded-lg

          bg-cyan-500

        "
      >
        Save Patient
      </button>
    </div>
  );
}
