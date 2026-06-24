import api from "./api";

export const getPatientMemory = async () => {
  const response = await api.get("/patient-memory");
  return response.data;
};
