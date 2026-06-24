import api from "./api";

export const sendQuery = async (query) => {
  const response = await api.post("/chat", {
    query,
  });

  return response.data.response;
};
