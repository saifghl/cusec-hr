import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateProfile.css';

const HRCandidateProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');
    const [selectedAction, setSelectedAction] = useState('schedule');

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

                    {/* Right Content Area */}
                    <div className="profile-main-content">
                        {/* Tabs */}
                        <div className="profile-tabs">
                            {['Overview', 'Resume', 'Notes', 'Emails'].map(tab => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Overview Content */}
                        <div className="tab-content">
                            <div className="content-section">
                                <div className="section-header">
                                    <h3 className="section-title">Cover Letter</h3>
                                    <span className="submitted-badge">Submitted 2 days ago</span>
                                </div>
                                <div className="section-body">
                                    <p className="cover-letter-text">
                                        To the Hiring Manager,
                                    </p>
                                    <p className="cover-letter-text">
                                        I am writing to express my strong interest in the Senior Software Engineer position at TechCorp. With over 6 years of experience in full-stack development and a passion for scalable architecture, I believe I can make a significant contribution to your engineering team.
                                    </p>
                                    <p className="cover-letter-text">
                                        In my current role at InnovateSoft, I led the migration of a legacy monolith to a microservices architecture, resulting in a 40% reduction in deployment time. I have followed TechCorp's growth in the fintech sector with great admiration and am excited about the opportunity to bring my expertise in React and Node.js to your innovative projects.
                                    </p>
                                    <p className="cover-letter-text">
                                        Thank you for considering my application. I look forward to the possibility of discussing how my skills align with your team's needs.
                                    </p>
                                </div>
                            </div>

                            <div className="content-section">
                                <h3 className="section-title">Screening Questions</h3>

                                <div className="qa-pair">
                                    <p className="question-text">Q: Why do you want to work here?</p>
                                    <div className="answer-box">
                                        I've followed your company's growth in the fintech sector for several years. I am particularly impressed by your recent launch of the frictionless payment gateway API. I want to work in an environment that challenges me technically while solving real-world financial accessibility problems.
                                    </div>
                                </div>

                                <div className="qa-pair">
                                    <p className="question-text">Q: What is your expected salary?</p>
                                    <div className="answer-box">
                                        $90,000 – $110,000 annually, depending on the full compensation package and growth opportunities.
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

export default HRCandidateProfile;
