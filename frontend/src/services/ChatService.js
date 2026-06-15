import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const sendQuery = async (query) => {

  const response = await axios.post(
    `${API_URL}/chat`,
    {
      query: query
    }
  );

  return response.data.response;
};