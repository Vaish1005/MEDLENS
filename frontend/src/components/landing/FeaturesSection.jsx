const features = [
  {
    title: "Clinical Workbench",
    description:
      "Unified clinical analysis and decision support workspace."
  },
  {
    title: "Evidence Explorer",
    description:
      "Inspect retrieved medical evidence and relevance scores."
  },
  {
    title: "Patient Memory",
    description:
      "Persistent patient history, medications and conditions."
  },
  {
    title: "Agent Audit Trail",
    description:
      "Track every reasoning step and verification action."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        Platform Features
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-slate-400 mt-4">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}