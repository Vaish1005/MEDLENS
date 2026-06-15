import DashboardLayout from "../layouts/DashboardLayout";

import PatientForm from "../components/patient/PatientForm";

export default function PatientMemory() {
  return (
    <DashboardLayout>
      <h1
        className="

        text-4xl

        font-bold

        mb-10

      "
      >
        Patient Memory
      </h1>

      <PatientForm />
    </DashboardLayout>
  );
}
