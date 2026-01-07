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
                                className={`tab-btn ${activeTab === 'Notes' ? 'active' : ''}`}
                                onClick={() => navigate('/hr-candidate-notes')}
                            >
                                Notes
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'Emails' ? 'active' : ''}`}
                                onClick={() => navigate('/hr-candidate-emails')}
                            >
                                Emails
                            </button>
                        </div>

                        {/* Overview Content */}
                        <div className="tab-content">
                            {activeTab === 'Overview' && (
                                <>
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
                                </>
                            )}

                            {activeTab === 'Resume' && (
                                <div className="resume-viewer">
                                    <div className="resume-toolbar">
                                        <div className="resume-file-info">
                                            <svg className="file-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                            <span className="resume-filename">Sarah_Jenkins_Resume.pdf</span>
                                            <span className="resume-updated">Updated 3 days ago</span>
                                        </div>
                                        <div className="resume-actions">
                                            <button className="zoom-btn minus">-</button>
                                            <span className="zoom-level">100%</span>
                                            <button className="zoom-btn plus">+</button>
                                            <div className="toolbar-divider">|</div>
                                            <button className="print-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                                            </button>
                                            <button className="download-resume-btn">
                                                <DownloadIcon /> Download
                                            </button>
                                        </div>
                                    </div>

                                    <div className="resume-document">
                                        <div className="resume-header">
                                            <div className="resume-title-block">
                                                <h1 className="resume-name">Sarah Jenkins</h1>
                                                <p className="resume-job">Senior Software Engineer</p>
                                            </div>
                                            <div className="resume-contact-block">
                                                <p><span className="icon">✉</span> sarah.j@example.com</p>
                                                <p><span className="icon">call</span> (555) 123-4567</p>
                                                <p><span className="icon">📍</span> San Francisco, CA</p>
                                                <p><span className="icon">in</span> linkedin.com/in/sarahj</p>
                                            </div>
                                        </div>

                                        <div className="resume-section">
                                            <h3 className="resume-section-title">Professional Summary</h3>
                                            <p className="resume-text">
                                                Results-oriented Senior Software Engineer with over 6 years of experience in full-stack development, specializing in scalable web architectures. Proven track record of leading teams, optimizing performance, and delivering high-quality software solutions in fintech environments. Passionate about clean code, developer experience, and product impact.
                                            </p>
                                        </div>

                                        <div className="resume-section">
                                            <h3 className="resume-section-title">Work Experience</h3>

                                            <div className="resume-job-item">
                                                <div className="job-header">
                                                    <h4 className="job-role">Senior Full Stack Developer</h4>
                                                    <span className="job-date">2020 - Present</span>
                                                </div>
                                                <p className="job-company">InnovateSoft, San Francisco, CA</p>
                                                <ul className="job-bullets">
                                                    <li>Led migration of legacy monolithic application to microservices using Node.js and Docker, improving deployment frequency by 40%.</li>
                                                    <li>Architected and implemented a real-time data processing pipeline handling 50k+ transactions per second.</li>
                                                    <li>Mentored 3 junior developers, conducting code reviews and weekly technical workshops.</li>
                                                    <li>Reduced AWS infrastructure costs by 15% through optimization of EC2 instances and Lambda functions.</li>
                                                </ul>
                                            </div>

                                            <div className="resume-job-item">
                                                <div className="job-header">
                                                    <h4 className="job-role">Software Engineer</h4>
                                                    <span className="job-date">2017 - 2020</span>
                                                </div>
                                                <p className="job-company">FinTech Solutions Inc, New York, NY</p>
                                                <ul className="job-bullets">
                                                    <li>Developed and maintained customer-facing React web applications used by over 100,000 active users.</li>
                                                    <li>Optimized database queries in PostgreSQL, reducing average response time by 25%.</li>
                                                    <li>Collaborated with product managers to define requirements and deliver features in 2-week sprints.</li>
                                                    <li>Integrated third-party payment gateways (Stripe, PayPal) ensuring PCI compliance.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="resume-cols">
                                            <div className="resume-section half">
                                                <h3 className="resume-section-title">Education</h3>
                                                <div className="resume-edu-item">
                                                    <h4 className="edu-degree">B.S. Computer Science</h4>
                                                    <p className="edu-school">University of California, Berkeley</p>
                                                    <p className="edu-year">Graduated: May 2017</p>
                                                    <p className="edu-gpa">GPA: 3.8/4.0</p>
                                                </div>
                                            </div>
                                            <div className="resume-section half">
                                                <h3 className="resume-section-title">Technical Skills</h3>
                                                <div className="resume-skills-list">
                                                    <div className="skill-row">
                                                        <span className="skill-cat">Languages:</span>
                                                        <span className="skill-val">JavaScript (ES6+), TypeScript, Python, SQL, Go</span>
                                                    </div>
                                                    <div className="skill-row">
                                                        <span className="skill-cat">Frontend:</span>
                                                        <span className="skill-val">React, Redux, Tailwind CSS, Next.js, Webpack</span>
                                                    </div>
                                                    <div className="skill-row">
                                                        <span className="skill-cat">Backend:</span>
                                                        <span className="skill-val">Node.js, Express, Django, PostgreSQL, Redis</span>
                                                    </div>
                                                    <div className="skill-row">
                                                        <span className="skill-cat">DevOps:</span>
                                                        <span className="skill-val">Docker, Kubernetes, AWS, CI/CD, Terraform</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
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
