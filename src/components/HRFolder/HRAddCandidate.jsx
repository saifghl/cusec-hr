import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRAddCandidate.css';

const HRAddCandidate = () => {
    const navigate = useNavigate();
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);

    // Icons
    const UploadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
    );

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="hr-add-candidate-page">
            <HRHeader />

            <div className="hr-add-candidate-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back to Candidates
                </button>

                <div className="add-candidate-header">
                    <h1 className="page-title">Add New Candidate</h1>
                    <p className="page-subtitle">Enter the candidate's details and upload their resume.</p>
                </div>

                <div className="add-candidate-form-container">
                    <div className="form-section">
                        <h2 className="section-title">Personal Information</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="e.g. John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="e.g. john.doe@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="e.g. +1 234 567 890" />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" placeholder="e.g. New York, USA" />
                            </div>
                        </div>
                    </div>

                    <div className="form-divider"></div>

                    <div className="form-section">
                        <h2 className="section-title">Professional Details</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Job Applied For</label>
                                <select>
                                    <option value="">Select Job Role</option>
                                    <option value="ux-designer">Senior UX Designer</option>
                                    <option value="frontend-dev">Frontend Engineer</option>
                                    <option value="product-manager">Product Manager</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Department</label>
                                <select>
                                    <option value="">Select Department</option>
                                    <option value="design">Design</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="product">Product</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>LinkedIn URL</label>
                                <input type="url" placeholder="https://linkedin.com/in/..." />
                            </div>
                            <div className="form-group">
                                <label>Portfolio URL</label>
                                <input type="url" placeholder="https://..." />
                            </div>
                        </div>
                    </div>

                    <div className="form-divider"></div>

                    <div className="form-section">
                        <h2 className="section-title">Resume / CV</h2>
                        <div
                            className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                id="resume-upload"
                                className="file-input"
                                onChange={handleChange}
                                accept=".pdf,.doc,.docx"
                            />
                            <label htmlFor="resume-upload" className="file-upload-label">
                                <div className="upload-icon-circle">
                                    <UploadIcon />
                                </div>
                                <div className="upload-text">
                                    <span className="upload-title">Click to upload or drag and drop</span>
                                    <span className="upload-subtitle">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                                </div>
                                {file && (
                                    <div className="selected-file-notice">
                                        Selected: <strong>{file.name}</strong>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
                        <button className="btn-save">Save Candidate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRAddCandidate;
