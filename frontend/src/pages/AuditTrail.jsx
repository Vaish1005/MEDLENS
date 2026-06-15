import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getAuditTrail } from "../services/AuditService";

export default function AuditTrail() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await getAuditTrail();

        setLogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadLogs();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Audit Trail</h1>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="
                border
                border-slate-800
                rounded-xl
                p-5
                bg-slate-900
              "
          >
            <p className="font-medium">{log.message}</p>

            <p className="text-slate-500 text-sm mt-2">{log.timestamp}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
