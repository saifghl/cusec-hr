import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HRHeader from './HRHeader';
import './HRCandidateEmails.css';

const HRCandidateEmails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // candidate ID from URL

  const [candidate, setCandidate] = useState(null); // for sidebar profile
  const [emails, setEmails] = useState([]);
  const [isComposing, setIsComposing] = useState(false);

  // Fetch candidate info for sidebar
  const fetchCandidate = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/candidates/${id}`);
      setCandidate(res.data);
    } catch (err) {
      console.error('Error fetching candidate:', err);
    }
  };

  // Fetch emails
  const fetchEmails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/candidates/${id}/emails`);
      setEmails(res.data);
    } catch (err) {
      console.error('Error fetching emails:', err);
    }
  };

  useEffect(() => {
    fetchCandidate();
    fetchEmails();
  }, [id]);

  if (!candidate) return <div>Loading...</div>;

  return (
    <div className="hr-candidate-profile-page">
      <HRHeader />
      <div className="hr-profile-content">
        <button className="back-btn" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <div className="profile-layout">
          {/* Left Sidebar - Profile Card */}
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="avatar-section">
                <div className="avatar-wrapper">
                  <img
                    src={`https://i.pravatar.cc/150?u=${candidate.candidate_id}`}
                    alt={candidate.full_name}
                    className="large-avatar"
                  />
                  <span className="online-status"></span>
                </div>
                <h2 className="profile-name">{candidate.full_name}</h2>
                <p className="profile-role">{candidate.job_title} Applicant</p>
                <span className="status-badge-pill">
                  <span className="status-dot"></span> {candidate.application_status}
                </span>
              </div>

              <div className="contact-info-list">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">{candidate.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">{candidate.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <span className="contact-value">{candidate.linkedin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area - Emails */}
          <div className="profile-main-content">
            <div className="profile-tabs">
              <button className="tab-btn" onClick={() => navigate(`/hr-candidate-profile/${id}`)}>Overview</button>
              <button className="tab-btn" onClick={() => navigate(`/hr-candidate-resume/${id}`)}>Resume</button>
              <button className="tab-btn" onClick={() => navigate(`/hr-candidate-notes/${id}`)}>Notes</button>
              <button className="tab-btn active">Emails</button>
            </div>

            <div className="emails-container">
              {emails.length === 0 && <p>No emails found for this candidate.</p>}
              {emails.map((email) => (
                <div key={email.message_id} className="email-item">
                  <div className="email-item-header">
                    <span className="email-sender">{email.sender_name}</span>
                    <span className="email-item-time">{new Date(email.created_at).toLocaleString()}</span>
                  </div>
                  <div className="email-subject">{email.subject}</div>
                  <div className="email-snippet">{email.body.substring(0, 100)}...</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRCandidateEmails;
