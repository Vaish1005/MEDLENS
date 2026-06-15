export default function MetricCard({
  title,

  value,

  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
      border
      border-slate-800
      rounded-xl
      p-6
      cursor-pointer
      hover:border-cyan-500
      transition
      "
    >
      <h3 className="text-slate-500">{title}</h3>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
