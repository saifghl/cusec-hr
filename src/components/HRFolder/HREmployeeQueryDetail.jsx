import React, { useState } from 'react';
import HRHeader from './HRHeader';
import { useNavigate } from 'react-router-dom';
import './HREmployeeQueryDetail.css';

const HREmployeeQueryDetail = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('reply');

    // Icons
    const ChevronDown = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>;
    const MoreHorizontal = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>;
    const ExpandIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>;
    const PaperclipIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>;
    const DownloadIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
    const LockIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
    const UserPlusIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>;
    const AlertTriangleIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
    const MailIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
    const SendIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

    return (
        <div className="hr-query-detail-page">
            <HRHeader />
            <div className="hr-query-detail-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back to Queries
                </button>

                {/* Page Header */}
                <div className="detail-header">
                    <div className="detail-title-block">
                        <h1 className="detail-title">Query #4920: Application Query – Interview Status</h1>
                        <div className="detail-meta">
                            <span className="meta-icon">💼</span>
                            <span className="meta-text">Sarah Jenkins | Applied for: <span className="highlight">Senior UX Designer</span></span>
                        </div>
                    </div>
                    <div className="detail-actions">
                        <div className="status-badge-large in-progress">
                            <span className="status-dot"></span>
                            In Progress
                            <ChevronDown />
                        </div>
                        <button className="more-btn">
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>

                <div className="detail-grid">
                    {/* Left Column */}
                    <div className="detail-left-col">

                        {/* Message Card */}
                        <div className="message-card">
                            <div className="message-header">
                                <div className="sender-info">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Sarah" className="sender-avatar" />
                                    <div className="sender-details">
                                        <h3 className="sender-name">Sarah Jenkins</h3>
                                        <p className="sender-email">sarah.jenkins@company.com</p>
                                    </div>
                                </div>
                                <span className="message-date">July 15, 2023 at 09:42 AM</span>
                            </div>

                            <div className="message-content">
                                <h4 className="message-subject">Subject: Interview Schedule Confirmation</h4>
                                <div className="message-body">
                                    <p>Hi Recruiter Flow Team,</p>
                                    <p>I hope you're having a great week. I just wanted to check on the status of my interview regarding the take-home assignment I submitted last Tuesday. I haven't heard back yet and wanted to ensure you received the files correctly.</p>
                                    <p>I've re-attached my portfolio and resume below just in case. Looking forward to hearing from you regarding the next steps.</p>
                                    <p>Best regards,<br />Sarah</p>
                                </div>
                            </div>

                            <div className="attachments-section">
                                <h5 className="attachments-title"><PaperclipIcon /> Attachments (2)</h5>
                                <div className="attachments-list">
                                    <div className="attachment-item">
                                        <div className="file-icon pdf">PDF</div>
                                        <div className="file-info">
                                            <span className="file-name">Jenkins_Resume_2023.pdf</span>
                                            <span className="file-size">1.2 MB</span>
                                        </div>
                                        <button className="download-btn"><DownloadIcon /></button>
                                    </div>
                                    <div className="attachment-item">
                                        <div className="file-icon zip">ZIP</div>
                                        <div className="file-info">
                                            <span className="file-name">Portfolio_Assets.zip</span>
                                            <span className="file-size">14.5 MB</span>
                                        </div>
                                        <button className="download-btn"><DownloadIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity History */}
                        <div className="activity-history-section">
                            <h3 className="section-title">Activity History</h3>
                            <div className="timeline">

                                <div className="timeline-item">
                                    <div className="timeline-icon blue-mail"><MailIcon /></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="timeline-title">Query submitted by candidate</span>
                                            <span className="timeline-time">July 15, 10:15 AM</span>
                                        </div>
                                        <div className="timeline-body">
                                            Candidate submitted a query regarding interview scheduling for the Senior UX Designer position.
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon yellow-note">📝</div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="timeline-title">Recruiter replied</span>
                                            <span className="timeline-time">July 15, 10:10 AM</span>
                                        </div>
                                        <div className="timeline-body">
                                            The recruiter responded to the candidate with an update regarding their application.
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-icon green-check">✓</div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="timeline-title">Candidate follow-up received</span>
                                            <span className="timeline-time">July 15, 09:42 AM</span>
                                        </div>
                                        <div className="timeline-body">
                                            A follow-up query was received from the candidate for further clarification.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="detail-right-col">

                        {/* Reply Card */}
                        <div className="reply-card">
                            <div className="reply-tabs">
                                <button
                                    className={`reply-tab ${activeTab === 'reply' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('reply')}
                                >
                                    Reply
                                </button>
                                <button
                                    className={`reply-tab ${activeTab === 'note' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('note')}
                                >
                                    Note
                                </button>
                            </div>

                            <div className="reply-body">
                                <div className="reply-recipient-row">
                                    <span className="recipient-label">REPLY TO Candidates</span>
                                    <button className="expand-btn"><ExpandIcon /></button>
                                </div>
                                <div className="editor-toolbar">
                                    <button className="tool-btn bold">B</button>
                                    <button className="tool-btn italic">I</button>
                                    <button className="tool-btn underline">U</button>
                                    <button className="tool-btn list">☰</button>
                                </div>
                                <textarea
                                    className="reply-textarea"
                                    placeholder="Type your response here..."
                                    rows="10"
                                ></textarea>

                                <div className="reply-options">
                                    <label className="checkbox-option">
                                        Send Via email
                                    </label>
                                    <label className="checkbox-option">
                                        Send Whatsapp
                                    </label>
                                </div>

                                <div className="reply-actions">
                                    <button className="btn-draft">Save Draft</button>
                                    <button className="btn-send">Send Reply <SendIcon /></button>
                                </div>
                            </div>
                        </div>

                        {/* Recruiter Note */}
                        <div className="recruiter-note-card">
                            <div className="note-card-header">
                                <span className="note-title"><LockIcon /> Recruiter Note</span>
                                <span className="note-badge">Internal Only</span>
                            </div>
                            <div className="note-input-wrapper">
                                <span className="globe-icon">🌐</span>
                                <input type="text" placeholder="Add a quick note..." className="note-input" />
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions-card">
                            <h4 className="qa-title">Quick Actions</h4>
                            <div className="qa-list">
                                <button className="qa-btn">
                                    <UserPlusIcon /> Assign to Recruiter
                                </button>
                                <button className="qa-btn">
                                    <AlertTriangleIcon /> Escalate Hiring Manager
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HREmployeeQueryDetail;
