import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateProfileStatus.css';

const HRCandidateProfileStatus = () => {
    const navigate = useNavigate();
    const [workflowStatus, setWorkflowStatus] = useState('Shortlisted');

    // Icons
    const MapPinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    );
    const ClockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    );
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    );
    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    );
    const MoreHorizontalIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
    );
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="6 9l6 6 6-6" /></svg>
    );
    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    );
    const LinkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    );
    const GlobeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    );
    const FileTextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F56565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    );
    const DownloadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    );
    const SendIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    );
    const RefreshIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
    );


    return (
        <div className="hr-candidate-status-page">
            <HRHeader />
            <div className="hr-status-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back
                </button>

                {/* Header Section */}
                <div className="candidate-header-card">
                    <div className="header-left">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Sarah Jenkins" className="header-avatar" />
                        <div className="header-info">
                            <div className="name-row">
                                <h1 className="header-name">Sarah Jenkins</h1>
                                <span className="status-badge-header">Shortlisted</span>
                            </div>
                            <p className="header-role">Applied for Senior Product Designer</p>
                            <div className="header-meta">
                                <span className="meta-item"><ClockIcon /> Applied 2 days ago</span>
                                <span className="meta-item"><MapPinIcon /> San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="header-action-btn">
                            <CalendarIcon /> Schedule
                        </button>
                        <button className="header-action-btn">
                            <MailIcon /> Email
                        </button>
                        <button className="header-menu-btn">
                            <MoreHorizontalIcon />
                        </button>
                    </div>
                </div>

                {/* Workflow & Automation Section */}
                <div className="workflow-automation-row">
                    {/* Workflow Card */}
                    <div className="workflow-card">
                        <div className="card-top-header">
                            <h3 className="card-title-icon"><span className="icon-grid">⚏</span> Workflow Status</h3>
                            <div className="card-dots">...</div>
                        </div>
                        <p className="card-description">Update the candidate's application stage to trigger automated workflows.</p>

                        <div className="workflow-status-control">
                            <label className="status-label">Status:</label>
                            <div className="status-select-wrapper">
                                <span className="status-dot-indicator"></span>
                                <select
                                    className="status-select"
                                    value={workflowStatus}
                                    onChange={(e) => setWorkflowStatus(e.target.value)}
                                >
                                    <option value="Shortlisted">Shortlisted</option>
                                    <option value="Interviewing">Interviewing</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                <ChevronDownIcon />
                            </div>
                        </div>

                        <div className="last-updated">
                            <RefreshIcon /> Last updated by You • Just now
                        </div>
                    </div>

                    {/* Automation Prompt Card */}
                    <div className="automation-card">
                        <h3 className="automation-title">Automation Prompt</h3>
                        <p className="automation-subtitle">You moved this candidate to Shortlisted. Send the automated notification?</p>

                        <div className="email-preview-box">
                            <div className="email-field">
                                <span className="field-label">To:</span> <span className="field-value">sarah.jenkins@example.com</span>
                            </div>
                            <div className="email-field">
                                <span className="field-label">Subject:</span> <span className="field-value">Update: You've been shortlisted for Senior Product Designer</span>
                            </div>
                            <div className="email-body">
                                <p>Hi Sarah,</p>
                                <p>Thanks for your application. We were impressed with your portfolio and would like to move you to the next stage.</p>
                                <p>Our team will be in touch shortly to schedule an interview.</p>
                            </div>
                        </div>

                        <div className="automation-actions">
                            <button className="btn-send-email"><SendIcon /> Send Shortlist Email</button>
                            <button className="btn-edit-preview">Edit Preview</button>
                            <button className="btn-skip">Skip</button>
                        </div>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="candidate-grid-layout">

                    {/* Left Sidebar Column */}
                    <div className="grid-sidebar">

                        {/* Contact Info */}
                        <div className="info-card">
                            <h3 className="card-title">CONTACT INFO</h3>
                            <div className="contact-list">
                                <div className="contact-row">
                                    <div className="icon-circle"><MailIcon /></div>
                                    <div className="contact-text">
                                        <span className="c-label">Email</span>
                                        <span className="c-value">sarah.j@example.com</span>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="icon-circle"><PhoneIcon /></div>
                                    <div className="contact-text">
                                        <span className="c-label">Phone Number</span>
                                        <span className="c-value">(555) 123-4567</span>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="icon-circle"><LinkIcon /></div>
                                    <div className="contact-text">
                                        <span className="c-label">LinkedIn</span>
                                        <span className="c-value">linkedin.com/in/sarahj</span>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="icon-circle"><GlobeIcon /></div>
                                    <div className="contact-text">
                                        <span className="c-label">Portfolio</span>
                                        <span className="c-value">www.sarahjenkins.design</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resume */}
                        <div className="info-card">
                            <h3 className="card-title">RESUME</h3>
                            <div className="resume-preview">
                                <div className="pdf-icon-placeholder">
                                    <FileTextIcon />
                                </div>
                                <div className="resume-details">
                                    <span className="resume-name">Sarah_Jenkins_Resume.pdf</span>
                                    <span className="resume-size">2.4 MB • Uploaded 2 days ago</span>
                                </div>
                                <button className="btn-download-resume">
                                    <DownloadIcon /> Download
                                </button>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="info-card">
                            <h3 className="card-title">SKILLS</h3>
                            <div className="skills-tags">
                                <span className="skill-tag">Figma</span>
                                <span className="skill-tag">Prototyping</span>
                                <span className="skill-tag">User Research</span>
                                <span className="skill-tag">HTML/CSS</span>
                                <span className="skill-tag">Design Systems</span>
                                <span className="skill-tag">Adobe Creative Suite</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Main Column */}
                    <div className="grid-main">

                        {/* Cover Letter */}
                        <div className="info-card">
                            <h3 className="card-tile-large">Cover Letter / Introduction</h3>
                            <div className="cover-letter-content">
                                <p>Dear Hiring Manager,</p>
                                <p>I am writing to express my strong interest in the Senior Product Designer role at your company. With over 6 years of experience crafting intuitive digital experiences for SaaS platforms, I have developed a keen eye for detail and a passion for solving complex user problems.</p>
                                <p>In my previous role at TechFlow, I led the redesign of the core analytics dashboard, which resulted in a 25% increase in user engagement and a 15% reduction in support tickets. I am particularly excited about your company's mission to democratize financial data, and I believe my background in fintech UX makes me a perfect fit for your team.</p>
                                <p>I look forward to the possibility of discussing how I can contribute to your design team's success. Thank you for considering my application.</p>
                            </div>
                        </div>

                        {/* Screening Questions */}
                        <div className="info-card">
                            <h3 className="card-tile-large">Screening Questions</h3>

                            <div className="qa-block">
                                <p className="qa-question">01. Why do you want to work for our company?</p>
                                <div className="qa-answer">
                                    I've been following your product updates for the last two years and I'm impressed by the velocity of your feature releases. The recent integration with AI tools specifically caught my eye. I want to work in an environment that prioritizes innovation and isn't afraid to disrupt legacy workflows.
                                </div>
                            </div>

                            <div className="qa-block">
                                <p className="qa-question">02. Describe a difficult challenge you faced in a previous project and how you overcame it.</p>
                                <div className="qa-answer">
                                    On my last project, we had a tight deadline to ship a mobile app update, but user testing revealed a major usability flaw in the checkout process just one week before launch. I facilitated an emergency design sprint with engineering and product to strip the feature back to its MVP essentials. We simplified the flow, removing optional steps, and shipped on time. Post-launch metrics showed a higher conversion rate than the original complex design.
                                </div>
                            </div>

                            <div className="qa-block">
                                <p className="qa-question">03. What is your preferred design tool stack?</p>
                                <div className="qa-answer">
                                    I am an expert in Figma for both design and prototyping. I use Notion for documentation and Jira for task management. I also have experience with Principle for high-fidelity animations and Webflow for quick landing pages.
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default HRCandidateProfileStatus;
