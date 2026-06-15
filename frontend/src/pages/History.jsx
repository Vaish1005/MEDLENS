import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import HistoryCard from "../components/history/HistoryCard";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("savedCases")) || [];

    setHistory(items);
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Conversation History</h1>

      <div className="space-y-6">
        {history.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </div>
    </DashboardLayout>
  );
}
