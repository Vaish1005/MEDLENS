export default function AgentFlow() {
  const agents = [
    "User Query",

    "Diagnosis Agent",

    "Drug Agent",

    "Guideline Agent",

    "Emergency Agent",

    "Summarizer Agent",
  ];

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
      <h2 className="text-lg font-semibold mb-6">Multi-Agent Flow</h2>

      <div className="flex flex-col items-center">
        {agents.map((agent, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="
                  px-6
                  py-3
                  rounded-xl
                  bg-cyan-600
                  mb-3
                "
            >
              {agent}
            </div>

            {index !== agents.length - 1 && (
              <div className="text-slate-400">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
