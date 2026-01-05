import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRAddQuery.css';

const HRAddQuery = () => {
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
        <div className="hr-add-query-page">
            <HRHeader />

            <div className="hr-add-query-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back to Queries
                </button>

                <div className="add-query-header">
                    <h1 className="page-title">Create New Query</h1>
                    <p className="page-subtitle">Submit a new query ticket for an employee or candidate.</p>
                </div>

                <div className="add-query-form-container">
                    <div className="form-section">
                        <h2 className="section-title">Query Details</h2>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Subject</label>
                                <input type="text" placeholder="e.g. Application Status Inquiry" />
                            </div>
                            <div className="form-group full-width">
                                <label>Description</label>
                                <textarea rows="4" placeholder="Describe the issue or inquiry in detail..."></textarea>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select>
                                    <option value="">Select Category</option>
                                    <option value="interview">Interview Process</option>
                                    <option value="application">Application Status</option>
                                    <option value="technical">Technical Issue</option>
                                    <option value="offer">Offer / Onboarding</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Priority</label>
                                <select>
                                    <option value="normal">Normal</option>
                                    <option value="high">High</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-divider"></div>

                    <div className="form-section">
                        <h2 className="section-title">Contact Information</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Employee / Candidate Name</label>
                                <input type="text" placeholder="e.g. Jane Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="e.g. jane.doe@example.com" />
                            </div>
                        </div>
                    </div>

                    <div className="form-divider"></div>

                    <div className="form-section">
                        <h2 className="section-title">Attachments</h2>
                        <div
                            className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                id="attachment-upload"
                                className="file-input"
                                onChange={handleChange}
                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                            />
                            <label htmlFor="attachment-upload" className="file-upload-label">
                                <div className="upload-icon-circle">
                                    <UploadIcon />
                                </div>
                                <div className="upload-text">
                                    <span className="upload-title">Click to upload or drag and drop</span>
                                    <span className="upload-subtitle">Files supported: PDF, DOCX, JPG, PNG (max 5MB)</span>
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
                        <button className="btn-submit">Submit Query</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRAddQuery;
