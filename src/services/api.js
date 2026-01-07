import axios from "axios";

/* =====================================================
   AXIOS INSTANCE
===================================================== */

const API = axios.create({
  baseURL: "https://cusec-hr.onrender.com",
  withCredentials: true,
});

// Add token automatically if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ================= JOBS ================= */

export const createJob = (data) => API.post("/jobs", data);
export const getAllJobs = () => API.get("/jobs");
export const getJobById = (id) => API.get(`/jobs/${id}`);
export const updateJob = (id, data) => API.put(`/jobs/${id}`, data);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
export const changeJobStatus = (id, status) =>
  API.patch(`/jobs/${id}/status`, { status });

/* ================= DASHBOARD ================= */

export const getHRDashboard = () =>
  API.get("/dashboard/hr-dashboard");

/* ================= CANDIDATES ================= */

export const getAllCandidates = () => API.get("/candidates");
export const getCandidateById = (id) =>
  API.get(`/candidates/${id}`);
export const updateCandidateStatus = (id, status) =>
  API.patch(`/candidates/${id}/status`, { status });

/* ================= QUERIES ================= */

// Get all queries
export const getAllQueries = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return API.get(`/queries${queryString ? `?${queryString}` : ""}`);
};

// Create query  ✅ FIX FOR YOUR ERROR
export const createQuery = (formData) => {
  return API.post("/queries", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getQueryById = (id) =>
  API.get(`/queries/${id}`);

export const getQueryMessages = (id) =>
  API.get(`/queries/${id}/messages`);

export const sendReply = (id, data) =>
  API.post(`/queries/${id}/reply`, data);

export const updateQueryStatus = (id, status) =>
  API.put(`/queries/${id}/status`, { status });

export const addQueryNote = (id, note, created_by) =>
  API.post(`/queries/${id}/notes`, { note, created_by });

export const getQueryNotes = (id) =>
  API.get(`/queries/${id}/notes`);

export const assignQuery = (id, assigned_to) =>
  API.put(`/queries/${id}/assign`, { assigned_to });

export const uploadAttachment = (id, message_id, file) => {
  const formData = new FormData();
  formData.append("attachment", file);
  formData.append("message_id", message_id);

  return API.post(`/queries/${id}/attachments`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getQueryActivity = (id) =>
  API.get(`/queries/${id}/activity`);

/* ================= NOTIFICATIONS ================= */

export const getNotifications = (userId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return API.get(
    `/notifications/${userId}${queryString ? `?${queryString}` : ""}`
  );
};

export const getNotificationStats = (userId) =>
  API.get(`/notifications/${userId}/stats`);

export const markNotificationAsRead = (notificationId) =>
  API.put(`/notifications/${notificationId}/read`);

export const markAllNotificationsAsRead = (userId) =>
  API.put(`/notifications/${userId}/read-all`);

/* ================= AUTH ================= */

export const login = (data) =>
  API.post("/auth/login", data);

export const logout = () =>
  API.post("/auth/logout");

export const me = () =>
  API.get("/auth/me");

export default API;



