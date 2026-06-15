export default function RecentActivity({ logs }) {
  return (
    <div
      className="
        border
        border-slate-800
        rounded-xl
        p-6
      "
    >
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

      {logs.length > 0 ? (
        logs.map((log, index) => (
          <p key={index} className="text-slate-400 mb-2">
            {log}
          </p>
        ))
      ) : (
        <p className="text-slate-500">No activity available</p>
      )}
    </div>
  );
}
