import axios from "axios";

<<<<<<< HEAD
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // ready for auth/session cookies
});

/* ================= JOBS API ================= */
export const jobsAPI = {
  createJob: (data) => api.post("/jobs", data),
  getAllJobs: () => api.get("/jobs"),
  getJobById: (id) => api.get(`/jobs/${id}`),
  updateJob: (id, data) => api.put(`/jobs/${id}`, data),
  deleteJob: (id) => api.delete(`/jobs/${id}`),
  changeJobStatus: (id, status) =>
    api.patch(`/jobs/${id}/status`, { status }),
};

/* ================= DASHBOARD API ================= */
export const dashboardAPI = {
  // HR Dashboard stats
  getHRDashboard: () => api.get("/dashboard/hr-dashboard"),
};

/* ================= CANDIDATES API ================= */
export const candidatesAPI = {
  getAllCandidates: () => api.get("/candidates"),
  getCandidateById: (id) => api.get(`/candidates/${id}`),
  updateCandidateStatus: (id, status) =>
    api.patch(`/candidates/${id}/status`, { status }),
};

/* ================= QUERIES API ================= */
export const queriesAPI = {
  getAllQueries: () => api.get("/queries"),
  getQueryById: (id) => api.get(`/queries/${id}`),
  updateQueryStatus: (id, status) =>
    api.patch(`/queries/${id}/status`, { status }),
};

/* ================= AUTH / SESSION (READY) ================= */
export const authAPI = {
  login: (data) => api.post("/auth/login", data),
  logout: () => api.post("/auth/logout"),
  me: () => api.get("/auth/me"),
};

export default api;
=======
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token to requests if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ================= USERS ================= */
export const fetchProfile = (id) => API.get(`/users/${id}`);
export const updateProfile = (id, data) => API.put(`/users/${id}`, data);
export const updatePassword = (id, data) =>
  API.put(`/users/${id}/password`, data);
export const updateSecurity = (id, data) =>
  API.put(`/users/${id}/security`, data);
export const updatePreferences = (id, data) =>
  API.put(`/users/${id}/preferences`, data);

/* ================= QUERIES ================= */
// Get all queries with optional filters
export const getAllQueries = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return API.get(`/queries${queryString ? `?${queryString}` : ""}`);
};

// Create new query
export const createQuery = (formData) => {
  return API.post("/queries", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Get query by ID
export const getQueryById = (id) => API.get(`/queries/${id}`);

// Get query messages
export const getQueryMessages = (id) =>
  API.get(`/queries/${id}/messages`);

// Send reply to query
export const sendReply = (id, data) =>
  API.post(`/queries/${id}/reply`, data);

// Update query status
export const updateQueryStatus = (id, status) =>
  API.put(`/queries/${id}/status`, { status });

// Add note to query
export const addQueryNote = (id, note, created_by) =>
  API.post(`/queries/${id}/notes`, { note, created_by });

// Get query notes
export const getQueryNotes = (id) => API.get(`/queries/${id}/notes`);

// Assign query to user
export const assignQuery = (id, assigned_to) =>
  API.put(`/queries/${id}/assign`, { assigned_to });

// Upload attachment
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

// Get query activity history
export const getQueryActivity = (id) => API.get(`/queries/${id}/activity`);

/* ================= NOTIFICATIONS ================= */
// Get all notifications for a user
export const getNotifications = (userId, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return API.get(`/notifications/${userId}${queryString ? `?${queryString}` : ""}`);
};

// Get notification stats
export const getNotificationStats = (userId) => API.get(`/notifications/${userId}/stats`);

// Mark notification as read
export const markNotificationAsRead = (notificationId) => 
  API.put(`/notifications/${notificationId}/read`);

// Mark all notifications as read
export const markAllNotificationsAsRead = (userId) => 
  API.put(`/notifications/${userId}/read-all`);
>>>>>>> c66cf8cff78d2b033112bc992bac8706bb0fc174
