export default function AgentLogCard({ logs }) {
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
      <h2
        className="
        text-lg
        font-semibold
        mb-5
      "
      >
        Agent Execution
      </h2>

      <div className="space-y-4">
        {logs.map((agent, index) => (
          <div
            key={index}
            className="
                flex
                items-center
                gap-3
              "
          >
            <div
              className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-500
                "
            />

            <div className="flex items-center gap-3">
              <div
                className="
                    w-3
                    h-3
                    rounded-full
                    bg-green-500
                    animate-pulse
              "
              />

              <span>{agent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
