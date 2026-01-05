import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateResume.css';

const HRCandidateResume = () => {
    const navigate = useNavigate();

    // Icons(reusing from other files for consistency)
    const DownloadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    );

    return (
        <div className="hr-candidate-resume-page">
            <HRHeader />
            <div className="hr-resume-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back
                </button>

                <div className="resume-viewer-container">
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

export default HRCandidateResume;
