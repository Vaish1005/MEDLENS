export default function WorkbenchPreview() {
  return (
    <section className="py-32 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        Clinical Workbench
      </h2>

      <div className="max-w-7xl mx-auto border border-slate-800 rounded-2xl p-6">

        <div className="grid grid-cols-12 gap-4 h-[500px]">

          <div className="col-span-3 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold">
              Patient Memory
            </h3>

            <div className="mt-4 space-y-3 text-slate-400">
              <p>Age: 47</p>
              <p>Thyroid Disorder</p>
              <p>Type 2 Diabetes</p>
              <p>Metformin</p>
            </div>
          </div>

          <div className="col-span-6 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold">
              Clinical Analysis
            </h3>

            <div className="mt-6 text-slate-400">
              AI-generated recommendations,
              differential diagnosis,
              treatment suggestions,
              and guideline summaries.
            </div>
          </div>

          <div className="col-span-3 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold">
              Evidence Sources
            </h3>

            <div className="mt-4 space-y-3 text-slate-400">
              <p>PubMed Study</p>
              <p>WHO Guideline</p>
              <p>NIH Report</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}