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

/* ================= JOBS API ================= */

export const jobsAPI = {
  createJob: (data) => API.post("/jobs", data),
  getAllJobs: () => API.get("/jobs"),
  getJobById: (id) => API.get(`/jobs/${id}`),
  updateJob: (id, data) => API.put(`/jobs/${id}`, data),
  deleteJob: (id) => API.delete(`/jobs/${id}`),
  changeJobStatus: (id, status) =>
    API.patch(`/jobs/${id}/status`, { status }),
};

/* ================= DASHBOARD API ================= */

export const dashboardAPI = {
  getHRDashboard: () => API.get("/dashboard/hr-dashboard"),
};

/* ================= CANDIDATES API ================= */

export const candidatesAPI = {
  getAllCandidates: () => API.get("/candidates"),
  getCandidateById: (id) => API.get(`/candidates/${id}`),
  updateCandidateStatus: (id, status) =>
    API.patch(`/candidates/${id}/status`, { status }),
};

/* ================= QUERIES API ================= */

export const queriesAPI = {
  getAllQueries: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return API.get(`/queries${queryString ? `?${queryString}` : ""}`);
  },

  createQuery: (formData) =>
    API.post("/queries", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  getQueryById: (id) => API.get(`/queries/${id}`),

  getQueryMessages: (id) => API.get(`/queries/${id}/messages`),

  sendReply: (id, data) => API.post(`/queries/${id}/reply`, data),

  updateQueryStatus: (id, status) =>
    API.put(`/queries/${id}/status`, { status }),

  addQueryNote: (id, note, created_by) =>
    API.post(`/queries/${id}/notes`, { note, created_by }),

  getQueryNotes: (id) => API.get(`/queries/${id}/notes`),

  assignQuery: (id, assigned_to) =>
    API.put(`/queries/${id}/assign`, { assigned_to }),

  uploadAttachment: (id, message_id, file) => {
    const formData = new FormData();
    formData.append("attachment", file);
    formData.append("message_id", message_id);
    return API.post(`/queries/${id}/attachments`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  getQueryActivity: (id) => API.get(`/queries/${id}/activity`),
};

/* ================= NOTIFICATIONS API ================= */

export const notificationsAPI = {
  getNotifications: (userId, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return API.get(
      `/notifications/${userId}${queryString ? `?${queryString}` : ""}`
    );
  },

  getNotificationStats: (userId) =>
    API.get(`/notifications/${userId}/stats`),

  markNotificationAsRead: (notificationId) =>
    API.put(`/notifications/${notificationId}/read`),

  markAllNotificationsAsRead: (userId) =>
    API.put(`/notifications/${userId}/read-all`),
};

/* ================= AUTH API ================= */

export const authAPI = {
  login: (data) => API.post("/auth/login", data),
  logout: () => API.post("/auth/logout"),
  me: () => API.get("/auth/me"),
};

export default API;


