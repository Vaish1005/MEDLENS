import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import CaseCard from "../components/cases/CaseCard";

import { getSavedCases } from "../services/CaseService";
import SearchBar from "../components/common/SearchBar";

export default function SavedCases() {
  const [cases, setCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCases = cases.filter(
    (item) =>
      item.query?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.response?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    setCases(getSavedCases());
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Saved Cases</h1>

      {cases.length > 0 ? (
        <div className="space-y-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {filteredCases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No saved cases available.</p>
      )}
    </DashboardLayout>
  );
}
