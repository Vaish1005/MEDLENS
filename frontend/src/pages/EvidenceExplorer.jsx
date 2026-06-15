import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getEvidence } from "../services/EvidenceService";

import SourceViewerModal from "../components/workbench/SourceViewerModal";

export default function EvidenceExplorer() {
  const [evidence, setEvidence] = useState([]);

  const [selectedSource, setSelectedSource] = useState(null);

  useEffect(() => {
    const loadEvidence = async () => {
      try {
        const data = await getEvidence();

        setEvidence(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadEvidence();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Evidence Explorer</h1>

        <p className="text-slate-400 mt-2">
          Retrieved evidence from medical databases
        </p>
      </div>

      <div className="space-y-4">
        {evidence.length > 0 ? (
          evidence.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedSource(item)}
              className="
              border
              border-slate-800
              rounded-xl
              p-5
              bg-slate-900
              cursor-pointer
              hover:border-cyan-500
              transition
              "
            >
              <h2 className="text-xl font-semibold">{item.source}</h2>

              <p className="text-sm text-slate-500 mt-2">
                Similarity Score: {item.score}
              </p>

              <p className="text-slate-300 mt-4">{item.preview}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-500">No evidence available.</p>
        )}
      </div>

      <SourceViewerModal
        source={selectedSource}
        onClose={() => setSelectedSource(null)}
      />
    </DashboardLayout>
  );
}
