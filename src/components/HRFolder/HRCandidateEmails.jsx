import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateEmails.css';

const HRCandidateEmails = () => {
    const navigate = useNavigate();
    const [selectedAction, setSelectedAction] = useState('schedule');
    const [isComposing, setIsComposing] = useState(false);
    const activeTab = 'Emails'; // Always Emails on this page

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

                    {/* Right Content Area - Emails View */}
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
                                onClick={() => navigate('/hr-candidate-resume')}
                            >
                                Resume
                            </button>
                            <button
                                className="tab-btn"
                                onClick={() => navigate('/hr-candidate-notes')}
                            >
                                Notes
                            </button>
                            <button
                                className="tab-btn active"
                                onClick={() => { }}
                            >
                                Emails
                                <span className="tab-badge">3</span>
                            </button>
                        </div>

                        {/* Emails Content */}
                        <div className="emails-container">
                            <div className="emails-header">
                                <h3 className="inbox-title">Inbox</h3>
                                <button
                                    className="compose-btn"
                                    onClick={() => setIsComposing(true)}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                                    Compose New
                                </button>
                            </div>

                            <div className="emails-layout">
                                {/* Email List */}
                                <div className="email-list">
                                    <div className={`email-item ${!isComposing ? 'active' : ''}`} onClick={() => setIsComposing(false)}>
                                        <div className="email-item-header">
                                            <span className="email-sender">Sarah Jenkins</span>
                                            <span className="email-item-time">2 days ago</span>
                                        </div>
                                        <div className="email-subject">Re: Interview Confirmation</div>
                                        <div className="email-snippet">
                                            Hi Team, Thank you for scheduling the interview. I am confirmed for Tuesday at 2 P...
                                        </div>
                                    </div>
                                    <div className="email-item">
                                        <div className="email-item-header">
                                            <span className="email-sender">Recruiting Team (You)</span>
                                            <span className="email-item-time">3 days ago</span>
                                        </div>
                                        <div className="email-subject">Interview Schedule - Sarah Jenkins</div>
                                        <div className="email-snippet">
                                            Dear Sarah, We would like to invite you for a technical interview with our Senior...
                                        </div>
                                    </div>
                                    <div className="email-item">
                                        <div className="email-item-header">
                                            <span className="email-sender">Sarah Jenkins</span>
                                            <span className="email-item-time">1 week ago</span>
                                        </div>
                                        <div className="email-subject">Application for Senior Engineer</div>
                                        <div className="email-snippet">
                                            To the Hiring Manager, I am writing to express my strong interest in the Senior Softwa...
                                        </div>
                                    </div>
                                    <div className="email-item">
                                        <div className="email-item-header">
                                            <span className="email-sender">Automated System</span>
                                            <span className="email-item-time">1 week ago</span>
                                        </div>
                                        <div className="email-subject">Application Received</div>
                                        <div className="email-snippet">
                                            Your application has been received successfully. Our team will review your...
                                        </div>
                                    </div>
                                </div>

                                {/* Right Pane: Email Detail OR Compose View */}
                                {!isComposing ? (
                                    <div className="email-detail">
                                        <div className="email-detail-header">
                                            <div className="detail-subject-line">
                                                <h2>Re: Interview Confirmation</h2>
                                                <span className="detail-time">Oct 24, 2023, 10:42 AM</span>
                                            </div>
                                            <div className="detail-meta">
                                                <div className="meta-user">
                                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=40&auto=format&fit=crop" alt="Sarah" className="meta-avatar" />
                                                    <div className="meta-info">
                                                        <span className="meta-name">Sarah Jenkins</span>
                                                        <span className="meta-email">&lt;sarah.j@example.com&gt;</span>
                                                        <div className="meta-to">To: recruiting@techcorp.com</div>
                                                    </div>
                                                </div>
                                                <div className="detail-actions">
                                                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6M3 10l6-6" /></svg></button>
                                                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10H11a8 8 0 0 0-8 8v2M21 10l-6 6M21 10l-6-6" /></svg></button>
                                                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 14 20 19 15 24" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg></button>
                                                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="email-body-content">
                                            <p>Hi Team,</p>
                                            <p>Thank you for scheduling the interview. I am confirmed for Tuesday at 2 PM EST.</p>
                                            <p>I've reviewed the technical requirements sent in the previous email and I'm prepared to discuss my experience with microservices architecture.</p>
                                            <p>Looking forward to meeting the team!</p>
                                            <br />
                                            <p><strong>Best regards,</strong><br />Sarah Jenkins<br /><span style={{ fontSize: '12px', color: '#718096' }}>Senior Software Engineer | (555) 123-4567</span></p>

                                            <div className="quoted-text">
                                                <p className="quote-header">On Oct 21, 2023, at 09:15 AM, Recruiting Team wrote:</p>
                                                <p>Dear Sarah,</p>
                                                <p>We would like to invite you for a technical interview with our Senior Architect. Please let us know your availability for early next week...</p>
                                            </div>
                                        </div>

                                        <div className="reply-box">
                                            <textarea className="reply-textarea" placeholder="Click here to reply..." rows="3"></textarea>
                                            <div className="reply-toolbar">
                                                <div className="reply-tools">
                                                    <button className="tool-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                                                    <button className="tool-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></button>
                                                    <button className="tool-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                                                </div>
                                                <button className="send-reply-btn">Send Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="email-compose">
                                        <div className="compose-header">
                                            <h3>New Message</h3>
                                            <button className="close-compose-btn" onClick={() => setIsComposing(false)}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </div>
                                        <div className="compose-form">
                                            <div className="compose-field">
                                                <label>To:</label>
                                                <input type="text" defaultValue="sarah.j@example.com" />
                                            </div>
                                            <div className="compose-field">
                                                <label>Subject:</label>
                                                <input type="text" placeholder="Enter subject" />
                                            </div>
                                            <div className="compose-body">
                                                <textarea placeholder="Write your message here..."></textarea>
                                            </div>
                                            <div className="compose-footer">
                                                <div className="compose-tools">
                                                    <button className="tool-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                                                    <button className="tool-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></button>
                                                </div>
                                                <div className="compose-actions">
                                                    <button className="btn-outline" onClick={() => setIsComposing(false)} style={{ marginRight: '8px', padding: '8px 16px' }}>Discard</button>
                                                    <button className="send-reply-btn" onClick={() => setIsComposing(false)}>Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
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

export default HRCandidateEmails;
