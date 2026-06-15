import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import MetricCard from "../components/dashboard/MetricCard";

import { getDashboardMetrics } from "../services/DashboardService";

import { getAuditTrail } from "../services/AuditService";

import AgentTimeline from "../components/dashboard/AgentTimeline";

import { getSystemHealth } from "../services/SystemService";

import { getCurrentUser } from "../services/UserService";

import { logout } from "../utils/auth";

import { useNavigate } from "react-router-dom";

import QueryChart from "../components/dashboard/QueryChart";

import RecentActivity from "../components/dashboard/RecentActivity";

import SystemHealth from "../components/dashboard/SystemHealth";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);

  const [health, setHealth] = useState(null);

  const [logs, setLogs] = useState([]);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const data = await getDashboardMetrics();

        setMetrics(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadHealth = async () => {
      try {
        const data = await getSystemHealth();

        setHealth(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadAuditTrail = async () => {
      try {
        const data = await getAuditTrail();

        setLogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadUser = async () => {
      try {
        const data = await getCurrentUser();

        setUser(data);
      } catch (error) {
        logout();

        navigate("/login");
      }
    };

    loadMetrics();

    loadHealth();

    loadAuditTrail();

    loadUser();
  }, [navigate]);

  return (
    <DashboardLayout>
      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">MedLens Command Center</h1>

          <p className="text-slate-400">Logged in as: {user?.email}</p>
        </div>

        <button
          onClick={() => {
            logout();

            navigate("/login");
          }}
          className="
      px-4
      py-2
      rounded-lg
      bg-red-500
      text-white
    "
        >
          Logout
        </button>
      </div>
      {/* METRICS */}

      <div
        className="
        grid
        grid-cols-4
        gap-6
      "
      >
        <MetricCard
          title="Queries Processed"
          value={metrics?.queries || 0}
          onClick={() => navigate("/workbench")}
        />

        <MetricCard
          title="Evidence Retrieved"
          value={metrics?.evidence || 0}
          onClick={() => navigate("/evidence")}
        />

        <MetricCard
          title="Active Agents"
          value={metrics?.agents || 0}
          onClick={() => navigate("/audit")}
        />

        <MetricCard
          title="Avg Response Time"
          value={metrics ? `${metrics.avg_response_time}s` : "0s"}
          onClick={() => navigate("/patient-memory")}
        />
        <QueryChart />
      </div>

      {/* SECOND ROW */}

      <div
        className="
        grid
        grid-cols-2
        gap-6
        mt-8
      "
      >
        {/* ACTIVITY */}
        <RecentActivity logs={logs} />

        <div className="space-y-3">
          {logs.length > 0 ? (
            <AgentTimeline logs={logs} />
          ) : (
            <p className="text-slate-500">No audit activity available</p>
          )}
        </div>
      </div>
      {/* HEALTH */}

      <SystemHealth health={health} />

      <div
        className="
            space-y-4
            text-slate-400
          "
      >
        <p>
          Backend API •
          <span className="text-green-400 ml-1">{health?.backend}</span>
        </p>

        <p>
          ChromaDB •
          <span className="text-green-400 ml-1">{health?.chromadb}</span>
        </p>

        <p>
          Phi3 Mini •
          <span className="text-green-400 ml-1">{health?.phi3_mini}</span>
        </p>

        <p>
          Memory Service •
          <span className="text-green-400 ml-1">{health?.memory_service}</span>
        </p>

        <p>
          Agents •<span className="text-green-400 ml-1">{health?.agents}</span>
        </p>
      </div>
    </DashboardLayout>
  );
}
