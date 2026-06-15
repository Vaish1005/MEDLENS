export default function QueryPanel({

  query,

  setQuery,

  handleAnalyze,

  loading

}) {

  return (

    <div className="border border-slate-800 rounded-xl p-5">

      <h2 className="text-lg font-semibold mb-4">

        Clinical Query

      </h2>

      <textarea

        rows="6"

        value={query}

        onChange={(e) =>
          setQuery(e.target.value)
        }

        placeholder="Enter symptoms, diagnosis, treatment, drug or guideline query..."

        className="
          w-full
          bg-slate-900
          border
          border-slate-700
          rounded-lg
          p-4
        "

      />

      <button

        onClick={handleAnalyze}

        className="
          mt-4
          px-6
          py-3
          bg-cyan-500
          hover:bg-cyan-400
          rounded-lg
          text-white
          transition
        "

      >

        {

          loading

            ? "Analyzing..."

            : "Analyze"

        }

      </button>

    </div>

  );

}