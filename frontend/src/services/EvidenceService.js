import axios from "axios";

const API =
  "http://127.0.0.1:8000";

export const getEvidence =
  async () => {

    const response =
      await axios.get(
        `${API}/evidence`
      );

    return response.data;
};