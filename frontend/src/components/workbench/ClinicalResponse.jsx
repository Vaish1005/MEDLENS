import { exportPDF } from "../../services/PDFService";

export default function ClinicalResponse({
  query,

  response,

  loading,
}) {
  return (
    <div className="border border-slate-800 rounded-xl p-5 min-h-[500px]">
      <h2 className="text-lg font-semibold mb-4">Clinical Analysis</h2>

      <div className="whitespace-pre-wrap text-slate-300">
        {loading ? (
          <div className="text-cyan-400">
            Analyzing symptoms...
            <br />
            Retrieving evidence...
            <br />
            Generating response...
          </div>
        ) : (
          response || "Clinical analysis will appear here."
        )}
      </div>

      {response && !loading && (
        <div className="mt-6">
          <button
            onClick={() =>
              exportPDF(
                query,

                response,
              )
            }
            className="
                px-5
                py-3
                rounded-lg
                bg-green-600
                hover:bg-green-500
                text-white
              "
          >
            Export PDF
          </button>
        </div>
      )}
    </div>
  );
}
