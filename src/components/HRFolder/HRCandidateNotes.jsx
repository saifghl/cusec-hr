import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateNotes.css'; // Using the dedicated CSS file

const HRCandidateNotes = () => {
    const navigate = useNavigate();
    const [selectedAction, setSelectedAction] = useState('schedule');
    const activeTab = 'Notes'; // Always Notes on this page

    // Icons
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    );
    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    );
    const LinkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    );
    const DownloadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    );

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
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Sarah Jenkins" className="large-avatar" />
                                    <span className="online-status"></span>
                                </div>
                                <h2 className="profile-name">Sarah Jenkins</h2>
                                <p className="profile-role">Senior Software Engineer Applicant</p>
                                <span className="status-badge-pill">
                                    <span className="status-dot"></span> Interviewing
                                </span>
                            </div>

                            <div className="contact-info-list">
                                <div className="contact-item">
                                    <div className="contact-icon"><MailIcon /></div>
                                    <div className="contact-details">
                                        <span className="contact-label">Email:</span>
                                        <span className="contact-value">sarah.j@example.com</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon"><PhoneIcon /></div>
                                    <div className="contact-details">
                                        <span className="contact-label">Phone Number:</span>
                                        <span className="contact-value">(555) 123-4567</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon"><LinkIcon /></div>
                                    <div className="contact-details">
                                        <span className="contact-label">LinkedIn:</span>
                                        <span className="contact-value">linkedin.com/in/sarahj</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-actions">
                                <button
                                    className={`action-btn ${selectedAction === 'schedule' ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => setSelectedAction('schedule')}
                                >
                                    Schedule Interview
                                </button>
                                <button
                                    className={`action-btn ${selectedAction === 'reject' ? 'btn-black' : 'btn-outline btn-reject'}`}
                                    onClick={() => setSelectedAction('reject')}
                                >
                                    {selectedAction === 'reject' && <span className="btn-dots">...</span>} Reject Candidate
                                </button>
                                <button
                                    className="action-btn btn-outline"
                                    onClick={() => navigate('/hr-candidate-status')}
                                >
                                    Candidate Profile Status
                                </button>
                                <button className="btn-link-download">
                                    <DownloadIcon /> Download Resume (PDF)
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area - Notes View */}
                    <div className="profile-main-content">
                        {/* Tabs */}
                        <div className="profile-tabs">
                            <button
                                className="tab-btn"
                                onClick={() => navigate('/hr-candidate-profile')}
                            >
                                Overview
                            </button>
                            <button
                                className="tab-btn"
                                onClick={() => navigate('/hr-candidate-resume')} /* Assumed link based on previous context, even if user reverted it, I'll keep consistency */
                            >
                                Resume
                            </button>
                            <button
                                className="tab-btn active"
                                onClick={() => { }}
                            >
                                Notes
                            </button>
                            <button
                                className="tab-btn"
                                onClick={() => navigate('/hr-candidate-emails')}
                            >
                                Emails
                            </button>
                        </div>

                        {/* Notes Content */}
                        <div className="notes-tab-content">
                            <div className="add-note-card">
                                <h3 className="section-title" style={{ marginBottom: '16px' }}>Add a Note</h3>
                                <div className="note-input-wrapper">
                                    <textarea
                                        className="note-textarea"
                                        placeholder="Write down your thoughts, interview feedback, or screening details..."
                                        rows="4"
                                    ></textarea>
                                    <div className="note-input-toolbar">
                                        <div className="toolbar-icons">
                                            <button className="toolbar-icon-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                                            <button className="toolbar-icon-btn"><strong style={{ fontFamily: 'serif' }}>B</strong></button>
                                            <button className="toolbar-icon-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="note-card-footer">
                                    <div className="visibility-selector">
                                        <span className="visibility-label">Visibility:</span>
                                        <select className="visibility-select">
                                            <option>Everyone</option>
                                            <option>Admins Only</option>
                                        </select>
                                    </div>
                                    <button className="save-note-btn">Save Note</button>
                                </div>
                            </div>

                            <div className="past-notes-section">
                                <div className="section-header">
                                    <h3 className="section-title">Past Notes (3)</h3>
                                    <button className="filter-notes-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                                    </button>
                                </div>

                                <div className="notes-timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-icon blue">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                        </div>
                                        <div className="timeline-content">
                                            <div className="note-header">
                                                <span className="note-author">Michael Chen</span>
                                                <span className="note-role">(Technical Lead) added a note</span>
                                                <span className="note-time">2h ago</span>
                                            </div>
                                            <div className="note-body">
                                                Excellent technical screening. Sarah demonstrated deep knowledge of React hooks and context API. Her solution for the scalability question was very pragmatic. Strong recommend for the next round.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-icon purple">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <div className="timeline-content">
                                            <div className="note-header">
                                                <span className="note-author">Jessica Wong</span>
                                                <span className="note-role">(Recruiter) added a note</span>
                                                <span className="note-time">Yesterday</span>
                                            </div>
                                            <div className="note-body">
                                                Spoke with Sarah regarding salary expectations. She is looking for $90k – $110k range. Available to start in 2 weeks after offer acceptance.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-icon gray">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        </div>
                                        <div className="timeline-content">
                                            <div className="note-header">
                                                <span className="note-role-only">Application created by <strong>System</strong></span>
                                                <span className="note-time">Oct 20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="logout-container">
                    <button className="logout-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HRCandidateNotes;
