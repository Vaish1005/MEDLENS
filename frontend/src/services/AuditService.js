import api from "./api";

export const getAuditTrail =
  async () => {

    const response =
      await api.get(
        "/audit-trail"
      );

    return response.data;

};