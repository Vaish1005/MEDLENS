export default function PatientCard({

  patient

}) {

  return (

    <div className="border border-slate-800 rounded-xl p-5 bg-slate-900">

      <h2 className="text-lg font-semibold mb-4">

        Patient Memory

      </h2>

      {

        patient

        ?

        <div className="space-y-3">

          <p>

            <span className="text-slate-500">

              Name:

            </span>

            {" "}

            {patient.name || "N/A"}

          </p>

          <p>

            <span className="text-slate-500">

              Age:

            </span>

            {" "}

            {patient.age || "N/A"}

          </p>

          <p>

            <span className="text-slate-500">

              Gender:

            </span>

            {" "}

            {patient.gender || "N/A"}

          </p>

        </div>

        :

        <p className="text-slate-500">

          Loading...

        </p>

      }

    </div>

  );

}