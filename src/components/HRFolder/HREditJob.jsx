import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HREditJob.css';

const HREditJob = () => {
    const navigate = useNavigate();
    // State for interactive elements make it feel alive
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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    );
    const LocationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    );
    const DollarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    );
    const PublishIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
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
    const QuestionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    );
    const TrashIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    );
    const UnpublishIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
    );


    return (
        <div className="hr-edit-job-page">
            <HRHeader />
            <div className="hr-edit-job-content">
                <div className="edit-job-header">
                    <h1 className="edit-job-title">Edit Job Posting</h1>
                    <p className="edit-job-subtitle">Update the details below this existing job opening</p>
                </div>

                <div className="edit-job-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search projects by name, city, or ID..." />
                </div>

                <div className="edit-job-grid">
                    {/* Left Column */}
                    <div className="left-column">
                        {/* Basic Info */}
                        <div className="form-card">
                            <div className="card-header">
                                <div className="card-icon-box"><UserIcon /></div>
                                <h3 className="card-title">Basic Information</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Job Title<span className="required-star">*</span></label>
                                <input type="text" className="text-input" defaultValue="Senior Product Designer" />
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
                                <div className="editor-container">
                                    <div className="editor-toolbar">
                                        <button className="toolbar-btn">B</button>
                                        <button className="toolbar-btn" style={{ fontStyle: 'italic' }}>I</button>
                                        <button className="toolbar-btn" style={{ textDecoration: 'underline' }}>U</button>
                                        <button className="toolbar-btn">list</button>
                                        <button className="toolbar-btn">link</button>
                                    </div>
                                    <textarea className="editor-textarea" defaultValue="As a script Designer, you will lead design individual..." ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Prequalifying Questions - NEW SECTION */}
                        <div className="form-card">
                            <div className="card-header" style={{ justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-icon-box"><QuestionIcon /></div>
                                    <h3 className="card-title">Prequalifying Questions</h3>
                                </div>
                                <span className="badge-max-questions">Max 5 questions</span>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Question 1</label>
                                <div className="question-input-wrapper">
                                    <input type="text" className="text-input" defaultValue="e.g. How many years of experience do you have with figma?" />
                                    <button className="btn-delete-question"><TrashIcon /></button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Question 2</label>
                                <div className="question-input-wrapper">
                                    <input type="text" className="text-input" defaultValue="e.g. Are you willing to relocate?" />
                                    <button className="btn-delete-question"><TrashIcon /></button>
                                </div>
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

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Industry Experience</label>
                                <select className="select-input" defaultValue="Select Required Industry Experience">
                                    <option disabled>Select Required Industry Experience</option>
                                    <option>SaaS</option>
                                    <option>Fintech</option>
                                    <option>Edtech</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Additional Qualification</label>
                                <textarea className="text-input" rows="3" style={{ resize: 'none' }} defaultValue="must have graduate from any design or computer science degree"></textarea>
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
                                <div className="card-icon-box"><DollarIcon /></div>
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
                                <div className="card-icon-box"><PublishIcon /></div>
                                <h3 className="card-title">Publishing</h3>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Experience Level</label>
                                <select className="select-input" defaultValue="Mid Level (3-5 Years)">
                                    <option>Mid Level (3-5 Years)</option>
                                    <option>Junior Level (0-2 Years)</option>
                                    <option>Senior Level (5+ Years)</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Application Deadline</label>
                                <div className="date-input-wrapper">
                                    <input type="text" className="text-input" defaultValue="31/12/2025" />
                                    <div className="calendar-icon-right"><CalendarIcon /></div>
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Target Closing Date</label>
                                <div className="date-input-wrapper">
                                    <input type="text" className="text-input" defaultValue="1/12/2025" />
                                    <div className="calendar-icon-right"><CalendarIcon /></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Current status</label>
                                <select className="select-input" style={{ color: '#48BB78' }} defaultValue="Active">
                                    <option style={{ color: '#1A202C' }}>Active</option>
                                    <option style={{ color: '#1A202C' }}>Closed</option>
                                    <option style={{ color: '#1A202C' }}>Draft</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edit-job-footer">
                    <button className="footer-btn btn-cancel" onClick={() => navigate('/hr-jobs')}>Cancel</button>
                    <button className="footer-btn btn-unpublish">
                        <UnpublishIcon /> Unpublish
                    </button>
                    <button className="footer-btn btn-save">Save Changes</button>
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

export default HREditJob;
