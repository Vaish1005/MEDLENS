export default function HistoryCard({ item }) {
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
      <h2 className="font-semibold">Query</h2>

      <p className="text-slate-300">{item.query}</p>

      <h2 className="font-semibold mt-4">Response</h2>

      <p className="text-slate-400">{item.response}</p>

      <p className="text-xs text-slate-500 mt-4">{item.date}</p>
    </div>
  );
}
