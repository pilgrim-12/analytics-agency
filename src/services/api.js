import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchAnalyticsData = async (params) => {
  const response = await api.get("/analytics", { params });
  return response.data;
};

export const submitAnalyticsRequest = async (data) => {
  const response = await api.post("/analytics/request", data);
  return response.data;
};
