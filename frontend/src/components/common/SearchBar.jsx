export default function SearchBar({
  value,

  setValue,

  placeholder,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="
        w-full
        p-3
        rounded-lg
        bg-slate-900
        border
        border-slate-700
      "
    />
  );
}
