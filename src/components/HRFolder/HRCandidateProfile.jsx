import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HRHeader from './HRHeader';
import './HRCandidateProfile.css';

const HRCandidateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedAction, setSelectedAction] = useState('');
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/candidates/${id}`);
        setCandidate(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCandidate();
  }, [id]);

  if (!candidate) return <div>Loading...</div>;

  return (
    <div className="hr-candidate-profile-page">
      <HRHeader />

      <div className="hr-profile-content">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="profile-layout">
          {/* LEFT SIDEBAR */}
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="avatar-section">
                <div className="avatar-wrapper">
                  <img
                    src={`https://i.pravatar.cc/200?u=${candidate.candidate_id}`}
                    alt={candidate.full_name}
                    className="large-avatar"
                  />
                  <span className="online-status"></span>
                </div>

                <h2 className="profile-name">{candidate.full_name}</h2>
                <p className="profile-role">
                  {candidate.job_title} Applicant
                </p>

                <span className="status-badge-pill">
                  <span className="status-dot"></span>
                  {candidate.application_status}
                </span>
              </div>

              <div className="contact-info-list">
                <div className="contact-item">
                  <span>Email:</span>
                  <strong>{candidate.email}</strong>
                </div>

                <div className="contact-item">
                  <span>Phone:</span>
                  <strong>{candidate.phone}</strong>
                </div>

                <div className="contact-item">
                  <span>LinkedIn:</span>
                  <strong>{candidate.linkedin}</strong>
                </div>
              </div>

              <div className="profile-actions">
                <button className="action-btn btn-primary">
                  Schedule Interview
                </button>

                <button className="action-btn btn-outline btn-reject">
                  Reject Candidate
                </button>

                <button
                  className="action-btn btn-outline"
                  onClick={() =>
                    navigate(`/hr-candidate-status/${candidate.candidate_id}`)
                  }
                >
                  Candidate Profile Status
                </button>

                <button
                  className="btn-link-download"
                  onClick={() =>
                    window.open(
                      `http://localhost:5000/${candidate.resume_url}`,
                      '_blank'
                    )
                  }
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="profile-main-content">
            <div className="profile-tabs">
              <button
                className={`tab-btn ${activeTab === 'Overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('Overview')}
              >
                Overview
              </button>

              <button
                className={`tab-btn ${activeTab === 'Resume' ? 'active' : ''}`}
                onClick={() => setActiveTab('Resume')}
              >
                Resume
              </button>

              <button
                className="tab-btn"
                onClick={() =>
                  navigate(`/hr-candidate-notes/${candidate.candidate_id}`)
                }
              >
                Notes
              </button>

              <button
                className="tab-btn"
                onClick={() =>
                  navigate(`/hr-candidate-emails/${candidate.candidate_id}`)
                }
              >
                Emails
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'Overview' && (
                <>
                  <div className="content-section">
                    <div className="section-header">
                      <h3>Cover Letter</h3>
                      <span className="submitted-badge">
                        Submitted recently
                      </span>
                    </div>

                    <div className="section-body">
                      <p>{candidate.cover_letter || 'No cover letter provided.'}</p>
                    </div>
                  </div>

                  <div className="content-section">
                    <h3>Screening Questions</h3>

                    <div className="qa-pair">
                      <p className="question-text">
                        Q: Why do you want to work here?
                      </p>
                      <div className="answer-box">
                        {candidate.screening_answer ||
                          'No answer provided.'}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'Resume' && (
                <iframe
                  src={`http://localhost:5000/${candidate.resume_url}`}
                  width="100%"
                  height="650"
                  title="Resume"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRCandidateProfile;
