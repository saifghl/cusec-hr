import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HRLogin from './components/HRFolder/HRLogin';
import HRDashboard from './components/HRFolder/HRDashboard';
import HRJobs from './components/HRFolder/HRJobs';
import HRCreateJob from './components/HRFolder/HRCreateJob';
import HREditJob from './components/HRFolder/HREditJob';
import HRCandidates from './components/HRFolder/HRCandidates';
import HRCandidateProfile from './components/HRFolder/HRCandidateProfile';
import HRCandidateProfileStatus from './components/HRFolder/HRCandidateProfileStatus';
import HREmployeeQueries from './components/HRFolder/HREmployeeQueries';
import HREmployeeQueryDetail from './components/HRFolder/HREmployeeQueryDetail';
import HRProfile from './components/HRFolder/HRProfile';
import HRLogout from './components/HRFolder/HRLogout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HRLogin />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/hr-jobs" element={<HRJobs />} />
          <Route path="/hr-create-job" element={<HRCreateJob />} />
          <Route path="/hr-edit-job" element={<HREditJob />} />
          <Route path="/hr-candidates" element={<HRCandidates />} />
          <Route path="/hr-candidate-profile" element={<HRCandidateProfile />} />
          <Route path="/hr-candidate-status" element={<HRCandidateProfileStatus />} />
          <Route path="/hr-queries" element={<HREmployeeQueries />} />
          <Route path="/hr-query-detail" element={<HREmployeeQueryDetail />} />
          <Route path="/hr-profile" element={<HRProfile />} />
          <Route path="/hr-logout" element={<HRLogout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
