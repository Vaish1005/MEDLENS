export default function CaseCard({ item }) {
  if (!item) return null;

  return (
    <div
      className="
        border
        border-slate-800
        rounded-xl
        p-5
        bg-slate-900
      "
    >
      <p className="text-slate-400 text-sm">{item.date}</p>

      <h2 className="text-lg font-semibold mt-3">Query</h2>

      <p className="mt-2 text-slate-300">{item.query}</p>

      <h2 className="text-lg font-semibold mt-5">Response</h2>

      <p className="mt-2 text-slate-400 whitespace-pre-wrap">{item.response}</p>
    </div>
  );
}
