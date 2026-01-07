import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HRHeader from './HRHeader';
import './HRAddCandidate.css';

const HRAddCandidate = () => {
    const navigate = useNavigate();
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        location: '',
        job_id: '',
        linkedin: ''
    });

    // Icons
    const UploadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
    );

    // Drag & drop handlers
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
        else if (e.type === "dragleave") setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
    };

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    };

    // Input change handler
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit handler
    const handleSubmit = async () => {
        // Basic validation
        if (!formData.full_name || !formData.email || !formData.job_id) {
            alert('Please fill Name, Email, and Job Applied fields.');
            return;
        }

        try {
            const data = new FormData();
            data.append('full_name', formData.full_name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('location', formData.location);
            data.append('job_id', formData.job_id);
            data.append('linkedin', formData.linkedin);
            if (file) data.append('resume', file);

            await axios.post('http://localhost:5000/api/candidates', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            alert('Candidate added successfully');
            navigate(-1);
        } catch (error) {
            console.error(error);
            alert('Failed to add candidate');
        }
    };

    return (
        <div className="hr-add-candidate-page">
            <HRHeader />

            <div className="hr-add-candidate-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
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
                                <input type="text" name="full_name" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" name="location" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="form-divider"></div>

                    <div className="form-section">
                        <h2 className="section-title">Professional Details</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Job Applied For</label>
                                <select name="job_id" onChange={handleInputChange}>
                                    <option value="">Select Job Role</option>
                                    <option value="1">Senior UX Designer</option>
                                    <option value="2">Frontend Engineer</option>
                                    <option value="3">Product Manager</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>LinkedIn URL</label>
                                <input type="url" name="linkedin" onChange={handleInputChange} />
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
                                    <span className="upload-subtitle">PDF, DOC, DOCX</span>
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
                        <button className="btn-save" onClick={handleSubmit}>Save Candidate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRAddCandidate;
