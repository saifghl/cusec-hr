import axios from "axios";

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
