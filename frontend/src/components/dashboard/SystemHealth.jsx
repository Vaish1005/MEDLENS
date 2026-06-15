export default function SystemHealth({ health }) {
  return (
    <div
      className="
        border
        border-slate-800
        rounded-xl
        p-6
      "
    >
      <h2 className="text-xl font-semibold mb-4">System Health</h2>

      <div className="space-y-3 text-slate-400">
        <p>Backend API • {health?.backend}</p>

        <p>ChromaDB • {health?.chromadb}</p>

        <p>Phi3 Mini • {health?.phi3_mini}</p>

        <p>Memory Service • {health?.memory_service}</p>

        <p>Agents • {health?.agents}</p>
      </div>
    </div>
  );
}
