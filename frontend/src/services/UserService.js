import api from "./api";

export const getCurrentUser =
  async () => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await api.get(
        "/me",
        {
          params: {
            token
          }
        }
      );

    return response.data;

};