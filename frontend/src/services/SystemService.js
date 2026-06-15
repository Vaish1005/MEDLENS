import api from "./api";

export const getSystemHealth =
  async () => {

    const response =
      await api.get(
        "/system-health"
      );

    return response.data;
};