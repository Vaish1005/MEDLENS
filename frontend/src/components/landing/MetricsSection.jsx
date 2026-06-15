export default function MetricsSection() {
  return (
    <section className="py-24 px-8">

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        <div className="border border-slate-800 rounded-xl p-6">
          <h2 className="text-4xl font-bold">20K+</h2>
          <p className="text-slate-400 mt-2">
            Medical Documents
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6">
          <h2 className="text-4xl font-bold">95%</h2>
          <p className="text-slate-400 mt-2">
            Evidence Verification
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6">
          <h2 className="text-4xl font-bold">6</h2>
          <p className="text-slate-400 mt-2">
            Specialized Agents
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6">
          <h2 className="text-4xl font-bold">WHO</h2>
          <p className="text-slate-400 mt-2">
            NIH • PubMed
          </p>
        </div>

      </div>

    </section>
  );
}