export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-8xl font-extrabold tracking-tight">
        MedLens
      </h1>

      <p className="mt-6 text-2xl text-slate-300">
        Clinical Intelligence Powered by Verified Medical Evidence
      </p>

      <p className="mt-4 max-w-3xl text-slate-500">
        Evidence-first clinical decision support platform built with
        Agentic RAG, transparent evidence retrieval, patient memory,
        and clinical verification.
      </p>

      <div className="flex gap-4 mt-10">

        <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition">
          Launch Workbench
        </button>

        <button className="px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition">
          View Demo
        </button>

      </div>

    </section>
  );
}