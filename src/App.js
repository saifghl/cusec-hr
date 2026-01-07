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
import HRProfileSecurity from './components/HRFolder/HRProfileSecurity';
import HRPreferences from './components/HRFolder/HRPreferences';
import HRAddCandidate from './components/HRFolder/HRAddCandidate';
import HRAddQuery from './components/HRFolder/HRAddQuery';
import HRNotifications from './components/HRFolder/HRNotifications';
import HRCandidateResume from './components/HRFolder/HRCandidateResume';
import HRCandidateNotes from './components/HRFolder/HRCandidateNotes';
import HRCandidateEmails from './components/HRFolder/HRCandidateEmails';

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
          <Route path="/hr-candidate-profile/:id" element={<HRCandidateProfile />} />
          <Route path="/hr-add-candidate" element={<HRAddCandidate />} />
          <Route path="/hr-candidate-resume/:id" element={<HRCandidateResume />} />
          <Route path="/hr-candidate-notes/:id" element={<HRCandidateNotes />} />
          <Route path="/hr-candidate-emails/:id" element={<HRCandidateEmails />} />
          <Route path="/hr-candidate-status/:id" element={<HRCandidateProfileStatus />} />
          <Route path="/hr-queries" element={<HREmployeeQueries />} />
          <Route path="/hr-add-query" element={<HRAddQuery />} />
          <Route path="/hr-notifications" element={<HRNotifications />} />
          <Route path="/hr-query-detail" element={<HREmployeeQueryDetail />} />
          <Route path="/hr-profile" element={<HRProfile />} />
          <Route path="/hr-logout" element={<HRLogout />} />
          <Route path="/hr-profile-security" element={<HRProfileSecurity />} />
          <Route path="/hr-preferences" element={<HRPreferences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
