export default function SourcesSection() {
  return (
    <section className="py-24">

      <h2 className="text-4xl font-bold text-center">
        Trusted Medical Sources
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        {[
          "PubMed",
          "WHO",
          "NIH",
          "DailyMed",
          "MedQuAD"
        ].map((source) => (
          <div
            key={source}
            className="border border-slate-800 rounded-lg px-6 py-3"
          >
            {source}
          </div>
        ))}

      </div>

    </section>
  );
}