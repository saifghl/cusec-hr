import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCreateJob.css';
import { jobsAPI } from '../../services/api'; // Adjust path to your API client

const HRCreateJob = () => {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        job_title: '',
        department: '',
        job_type: 'Full Time',
        job_description: '',
        additional_qualification: '',
        industry_experience: '',
        work_arrangement: 'On Site',
        city: '',
        country: '',
        min_salary: '',
        max_salary: '',
        salary_negotiable: false,
        salary_hidden: false,
        experience_level: 'Mid Level (3-5 Years)',
        application_deadline: '',
        scheduled_publish_date: '',
        target_closing_date: ''
    });

    const [skills, setSkills] = useState([]); // Dynamic skills array
    const [skillInput, setSkillInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setError(''); // Clear errors on change
    };

    // Handle skills input
    const handleSkillAdd = (e) => {
        if (e.key === 'Enter' && skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput('');
            e.preventDefault();
        }
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!formData.job_title.trim() || !formData.job_type) {
            setError('Job title and type are required.');
            return;
        }
        if (formData.min_salary && isNaN(formData.min_salary)) {
            setError('Min salary must be a number.');
            return;
        }
        if (formData.max_salary && isNaN(formData.max_salary)) {
            setError('Max salary must be a number.');
            return;
        }

        setLoading(true);
        try {
            // Prepare data (include skills if backend supports; otherwise, handle separately)
            const dataToSend = { ...formData, skills }; // Assuming backend can handle skills array
            await jobsAPI.createJob(dataToSend);
            setSuccess('Job created successfully!');
            // Optional: Reset form or navigate
            setTimeout(() => navigate('/hr-jobs'), 2000);
        } catch (err) {
            setError('Failed to create job. Please try again.');
            console.error('Create job error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Icons (kept as-is, but consider extracting to a separate file)
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
    const RupeeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l8.5 10" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
    );
    const PublishIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
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
                    <p className="create-job-subtitle">Fill Details Below To Post a New Job Opening</p>
                </div>

                <div className="create-job-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search jobs, candidates" />
                </div>

                {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                {success && <div className="success-message" style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="create-job-grid">
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
                                    <input type="text" className="text-input" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="e.g., Senior Product Designer" required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <select className="select-input" name="department" value={formData.department} onChange={handleChange}>
                                            <option value="">Select Department</option>
                                            <option value="Design">Design</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Marketing">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Job Type<span className="required-star">*</span></label>
                                        <select className="select-input" name="job_type" value={formData.job_type} onChange={handleChange} required>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Internship">Internship</option>
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
                                    <textarea className="text-input" name="job_description" value={formData.job_description} onChange={handleChange} rows="4" placeholder="Enter job description..."></textarea>
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
                                        {skills.map((skill, index) => (
                                            <div key={index} className="skill-chip">
                                                {skill} <span className="remove-skill" onClick={() => removeSkill(index)}>×</span>
                                            </div>
                                        ))}
                                        <input
                                            type="text"
                                            className="skills-input"
                                            placeholder="Type skill and hit enter"
                                            value={skillInput}
                                            onChange={(e) => setSkillInput(e.target.value)}
                                            onKeyDown={handleSkillAdd}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Additional Qualification</label>
                                    <textarea className="text-input" name="additional_qualification" value={formData.additional_qualification} onChange={handleChange} rows="4" placeholder="e.g., Must have a degree in design or computer science"></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Industry Experience</label>
                                    <input type="text" className="text-input" name="industry_experience" value={formData.industry_experience} onChange={handleChange} placeholder="e.g., 3+ years in UI/UX" />
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
                                        {['On Site', 'Hybrid', 'Remote'].map((type) => (
                                            <div
                                                key={type}
                                                className={`arrangement-card ${formData.work_arrangement === type ? 'active' : ''}`}
                                                onClick={() => setFormData({ ...formData, work_arrangement: type })}
                                            >
                                                {type === 'On Site' && <BuildingIcon />}
                                                {type === 'Hybrid' && <HomeIcon />}
                                                {type === 'Remote' && <LaptopIcon />}
                                                <span className="arr-label">{type}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="text-input" name="city" value={formData.city} onChange={handleChange} placeholder="e.g., Pune" />
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className="text-input" name="country" value={formData.country} onChange={handleChange} placeholder="e.g., India" />
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
                                        <input type="number" className="text-input" name="min_salary" value={formData.min_salary} onChange={handleChange} placeholder="e.g., 20000" />
                                    </div>
                                    <div className="form-group">
                                        <label>Max Salary</label>
                                        <input type="number" className="text-input" name="max_salary" value={formData.max_salary} onChange={handleChange} placeholder="e.g., 30000" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>
                                            <input type="checkbox" name="salary_negotiable" checked={formData.salary_negotiable} onChange={handleChange} />
                                            Negotiable
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input type="checkbox" name="salary_hidden" checked={formData.salary_hidden} onChange={handleChange} />
                                            Hide Salary
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Publishing */}
                            <div className="form-card">
                                <div className="card-header">
                                    <div className="card-icon-box"><PublishIcon /></div>
                                    <h3 className="card-title">Publishing</h3>
                                </div>

                                                               <div className="form-group" style={{ marginBottom: '16px' }}>
                                    <label>Experience Level</label>
                                    <select className="select-input" name="experience_level" value={formData.experience_level} onChange={handleChange}>
                                        <option value="Entry Level (0-2 Years)">Entry Level (0-2 Years)</option>
                                        <option value="Mid Level (3-5 Years)">Mid Level (3-5 Years)</option>
                                        <option value="Senior Level (5+ Years)">Senior Level (5+ Years)</option>
                                    </select>
                                </div>

                                <div className="form-group" style={{ marginBottom: '16px' }}>
                                    <label>Application Deadline</label>
                                    <input type="date" className="text-input" name="application_deadline" value={formData.application_deadline} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Schedule Publish on Date</label>
                                    <input type="date" className="text-input" name="scheduled_publish_date" value={formData.scheduled_publish_date} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Target Closing Date</label>
                                    <input type="date" className="text-input" name="target_closing_date" value={formData.target_closing_date} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="create-job-footer">
                        <button type="button" className="footer-btn btn-cancel" onClick={() => navigate('/hr-jobs')} disabled={loading}>
                            Cancel
                        </button>
                        <button type="submit" className="footer-btn btn-publish" disabled={loading}>
                            {loading ? 'Publishing...' : 'Publish'}
                        </button>
                    </div>
                </form>
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