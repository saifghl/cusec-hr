import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCreateJob.css';

const HRCreateJob = () => {
    const navigate = useNavigate();
    // State for interactive elements (optional for UI demo, but good for "active" visuals)
    const [workType, setWorkType] = useState('On site');

    // Icons
    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    );
    const AlertIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    );
    const StarIcon = () => (
        /* Actually using * character for requirement usually, but using custom icon for "Requirement" section header */
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    );
    const LocationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    );
    const RupeeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l8.5 10" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
    );
    const PublishIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
        /* Using generic or similar icon for publishing section */
    );
    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    );
    const BuildingIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect><line x1="9" y1="2" x2="9" y2="22"></line><line x1="15" y1="2" x2="15" y2="22"></line></svg>
    );
    const HomeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    );
    const LaptopIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
    );

    return (
        <div className="hr-create-job-page">
            <HRHeader />
            <div className="hr-create-job-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back
                </button>
                <div className="create-job-header">
                    <h1 className="create-job-title">Create Job Posting</h1>
                    <p className="create-job-subtitle">Fill Detail Below To Post a new job openning</p>
                </div>

                <div className="create-job-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search jobs ,candidates" />
                </div>

                <div className="create-job-grid">
                    {/* Left Column */}
                    <div className="left-column">
                        {/* Basic Info */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><UserIcon /></div> {/* Using UserIcon as placeholder for the ID card/Profile icon i image */}
                                <h3 className="card-title">Basic Information</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Job Title<span className="required-star">*</span></label>
                                <input type="text" className="text-input" placeholder="Senior Product Designer" defaultValue="Senior Product Designer" />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select className="select-input" defaultValue="Design">
                                        <option>Design</option>
                                        <option>Engineering</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Job Type<span className="required-star">*</span></label>
                                    <select className="select-input" defaultValue="Full Time">
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>Contract</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><AlertIcon /></div>
                                <h3 className="card-title">Job Description</h3>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <div className="editor-container">
                                    <div className="editor-toolbar">
                                        <button className="toolbar-btn">B</button>
                                        <button className="toolbar-btn" style={{ fontStyle: 'italic' }}>I</button>
                                        <button className="toolbar-btn" style={{ textDecoration: 'underline' }}>U</button>
                                        <button className="toolbar-btn">list</button>
                                        <button className="toolbar-btn">link</button>
                                    </div>
                                    <textarea className="editor-textarea" placeholder="Enter job description..."></textarea>
                                </div>
                                <p style={{ fontSize: '12px', color: '#718096', margin: '4px 0' }}>As a script Designer,you will lead design individual...</p>
                            </div>
                        </div>

                        {/* Requirement */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><StarIcon /></div>
                                <h3 className="card-title">Requirement</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Required Skills</label>
                                <div className="skills-input-container">
                                    <div className="skill-chip">
                                        Figma <span className="remove-skill">×</span>
                                    </div>
                                    <div className="skill-chip">
                                        UI/UX <span className="remove-skill">×</span>
                                    </div>
                                    <input type="text" className="skills-input" placeholder="Type Skill and hit enter" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Additional Qualification</label>
                                <textarea className="text-input" rows="4" style={{ resize: 'none' }} defaultValue="must have graduate from any design or computer science degree"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="right-column">
                        {/* Location */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><LocationIcon /></div>
                                <h3 className="card-title">Location</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Work Arrangement</label>
                                <div className="arrangement-options">
                                    <div className={`arrangement-card ${workType === 'On site' ? 'active' : ''}`} onClick={() => setWorkType('On site')}>
                                        <BuildingIcon />
                                        <span className="arr-label">On site</span>
                                    </div>
                                    <div className={`arrangement-card ${workType === 'Hybrid' ? 'active' : ''}`} onClick={() => setWorkType('Hybrid')}>
                                        <HomeIcon />
                                        <span className="arr-label">Hybrid</span>
                                    </div>
                                    <div className={`arrangement-card ${workType === 'Remote' ? 'active' : ''}`} onClick={() => setWorkType('Remote')}>
                                        <LaptopIcon />
                                        <span className="arr-label">Remote</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>City, Country</label>
                                <div className="location-input-wrapper">
                                    <div className="location-icon-inside"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                                    <input type="text" className="text-input location-input" defaultValue="Pune, Maharashtra" />
                                </div>
                            </div>
                        </div>

                        {/* Compensation */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><RupeeIcon /></div>
                                <h3 className="card-title">Compensation</h3>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Min Salary</label>
                                    <input type="text" className="text-input" defaultValue="₹20000" />
                                </div>
                                <div className="form-group">
                                    <label>Max Salary</label>
                                    <input type="text" className="text-input" defaultValue="₹30000" />
                                </div>
                            </div>

                            <button className="negotiable-toggle">
                                Negotiable/Hide
                            </button>
                        </div>

                        {/* Publishing */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><PublishIcon /></div> {/* actually looks like Filter icon in image for title 'Publishing' or similar. */}
                                <h3 className="card-title">Publishing</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Experience Level</label>
                                <select className="select-input" defaultValue="Mid Level">
                                    <option>Mid Level (3-5 Years)</option>
                                    <option>Junior Level (0-2 Years)</option>
                                    <option>Senior Level (5+ Years)</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Application Deadline</label>
                                <div className="date-input-wrapper">
                                    <input type="date" className="text-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Schedule Publish on date</label>
                                <div className="date-input-wrapper">
                                    <input type="date" className="text-input" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="create-job-footer">
                    <button className="footer-btn btn-cancel" onClick={() => navigate('/hr-jobs')}>Cancel</button>
                    <button className="footer-btn btn-publish">Publish</button>
                </div>
            </div>

            <div className="logout-container">
                <button className="logout-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default HRCreateJob;
