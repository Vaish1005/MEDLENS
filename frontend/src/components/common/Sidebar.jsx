import { useNavigate } from "react-router-dom";

import { logout } from "../../utils/auth";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside
      className="
      w-64
      min-h-screen
      bg-slate-900
      border-r
      border-slate-800
      p-6
    "
    >
      <h1
        className="
        text-3xl
        font-bold
        mb-10
      "
      >
        MedLens
      </h1>

      <div className="space-y-3">
        <button
          onClick={() => navigate("/dashboard")}
          className="
          w-full
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/workbench")}
          className="
          w-full
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
        >
          Clinical Workbench
        </button>

        <button
          onClick={() => navigate("/evidence")}
          className="
          w-full
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
        >
          Evidence Explorer
        </button>

        <button
          onClick={() => navigate("/patient-memory")}
          className="
          w-full
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
        >
          Patient Memory
        </button>

        <button
          onClick={() => navigate("/audit")}
          className="
          w-full
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
        >
          Audit Trail
        </button>
        <button
          onClick={() => navigate("/cases")}
          className="
    w-full
    text-left
    px-4
    py-3
    rounded-lg
    hover:bg-slate-800
    transition
  "
        >
          Saved Cases
        </button>

        <button
          onClick={() => navigate("/history")}
          className="
             w-full
             text-left
             px-4
             py-3
             rounded-lg
             hover:bg-slate-800
             transition
          ">
          Conversation History
        </button>
      </div>

      <div className="mt-12">
        <button
          onClick={() => {
            logout();

            navigate("/");
          }}
          className="
          w-full
          bg-red-500
          hover:bg-red-600
          py-3
          rounded-lg
          transition
        "
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
