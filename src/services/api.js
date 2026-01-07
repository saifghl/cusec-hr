import axios from "axios";

/* =====================================================
   AXIOS INSTANCE
===================================================== */

const API = axios.create({
  baseURL: "https://cusec-hr.onrender.com",
  withCredentials: true,
});

// Attach token automatically
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

export const jobsAPI = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  changeJobStatus,
};

/* ================= DASHBOARD ================= */

export const getHRDashboard = () =>
  API.get("/dashboard/hr-dashboard");

export const dashboardAPI = {
  getHRDashboard,
};

/* ================= CANDIDATES ================= */

export const getAllCandidates = () => API.get("/candidates");
export const getCandidateById = (id) =>
  API.get(`/candidates/${id}`);
export const updateCandidateStatus = (id, status) =>
  API.patch(`/candidates/${id}/status`, { status });

export const candidatesAPI = {
  getAllCandidates,
  getCandidateById,
  updateCandidateStatus,
};

/* ================= QUERIES ================= */

export const getAllQueries = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return API.get(`/queries${queryString ? `?${queryString}` : ""}`);
};

export const createQuery = (formData) =>
  API.post("/queries", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

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
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getQueryActivity = (id) =>
  API.get(`/queries/${id}/activity`);

export const queriesAPI = {
  getAllQueries,
  createQuery,
  getQueryById,
  getQueryMessages,
  sendReply,
  updateQueryStatus,
  addQueryNote,
  getQueryNotes,
  assignQuery,
  uploadAttachment,
  getQueryActivity,
};

/* ================= NOTIFICATIONS ================= */




