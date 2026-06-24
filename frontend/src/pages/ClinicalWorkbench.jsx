import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { sendQuery } from "../services/ChatService";

import QueryPanel from "../components/workbench/QueryPanel";

import ClinicalResponse from "../components/workbench/ClinicalResponse";

import EvidenceCard from "../components/workbench/EvidenceCard";

import PatientCard from "../components/workbench/PatientCard";

import ClinicalSummary from "../components/workbench/ClinicalSummary";

import AgentLogCard from "../components/workbench/AgentLogCard";

import SourceViewerModal from "../components/workbench/SourceViewerModal";

import AgentFlow from "../components/workbench/AgentFlow";

export default function ClinicalWorkbench() {
  const [query, setQuery] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const [patient, setPatient] = useState(null);

  const [evidence, setEvidence] = useState([]);

  const [selectedSource, setSelectedSource] = useState(null);

  const [agentLogs, setAgentLogs] = useState([]);

  useEffect(() => {
    const storedPatient = JSON.parse(localStorage.getItem("patientMemory"));

    if (storedPatient) {
      setPatient(storedPatient);
    }

    const previousCase = JSON.parse(localStorage.getItem("currentCase"));

    if (previousCase) {
      setQuery(previousCase.query);

      setResponse(previousCase.response);
    }
  }, []);


  const saveCase = () => {
    const previousCases = JSON.parse(localStorage.getItem("savedCases")) || [];

    const newCase = {
      id: Date.now(),

      query,

      response,

      date: new Date().toLocaleString(),
    };

    previousCases.unshift(newCase);

    localStorage.setItem(
      "savedCases",

      JSON.stringify(previousCases),
    );
  };

  const handleAnalyze = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      setAgentLogs([]);

      const result = await sendQuery(query);

      setResponse(result.response || "No response generated.");

      setEvidence(result.evidence || []);

      localStorage.setItem(
        "currentCase",
        JSON.stringify({
          query,
          response: result.response,
        }),
      );

      const agents = [
        "Diagnosis Agent",
        "Drug Agent",
        "Guideline Agent",
        "Emergency Agent",
        "Summarizer Agent",
      ];

      agents.forEach((agent, index) => {
        setTimeout(
          () => {
            setAgentLogs((prev) => [...prev, agent]);
          },
          (index + 1) * 1000,
        );
      });
    } catch (error) {
      console.error(error);

      setResponse("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Clinical Workbench</h1>

        <p className="text-slate-400 mt-2">
          AI-powered clinical intelligence and evidence analysis
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-3 space-y-6">
          <PatientCard patient={patient} />

          <ClinicalSummary />
        </div>

        {/* CENTER */}
        <div className="col-span-6 space-y-6">
          <QueryPanel
            query={query}
            setQuery={setQuery}
            handleAnalyze={handleAnalyze}
            loading={loading}
          />

          <ClinicalResponse
            query={query}
            response={response}
            loading={loading}
          />

          <div className="flex gap-4">
            <button
              onClick={saveCase}
              className="
                px-5
                py-3
                rounded-lg
                bg-blue-600
                hover:bg-blue-500
              "
            >
              Save Case
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-3 space-y-6">
          <div
            className="
              border
              border-slate-800
              rounded-lg
              p-5
            "
          >
            <h2 className="text-lg font-semibold mb-4">Evidence Sources</h2>

            <EvidenceCard
              evidence={evidence}
              setSelectedSource={setSelectedSource}
            />
          </div>

          <AgentLogCard logs={agentLogs} />

          <AgentFlow />
        </div>
      </div>

      <SourceViewerModal
        source={selectedSource}
        onClose={() => setSelectedSource(null)}
      />
    </DashboardLayout>
  );
}
