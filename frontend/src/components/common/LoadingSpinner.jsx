export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 py-10">

      <div
        className="
          w-14
          h-14
          border-4
          border-cyan-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />

      <div className="text-cyan-400 text-center">

        <p>Analyzing symptoms...</p>
        <p>Retrieving evidence...</p>
        <p>Generating response...</p>

      </div>

    </div>
  );
}