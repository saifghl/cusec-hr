import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HREditJob.css';
import { jobsAPI } from '../../services/api';

const formatDateInput = (date) => {
  if (!date) return '';
  return date.split('T')[0]; // handles ISO safely
};

const HREditJob = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [jobData, setJobData] = useState({});
    const [workType, setWorkType] = useState('On site');
    const [skills, setSkills] = useState(['Figma', 'UI/UX']);
    const [questions, setQuestions] = useState(['How many years of experience do you have?', 'Are you willing to relocate?']);

    // Icons (all defined)
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

    useEffect(() => {
        const jobId = id || '1';
        const fetchJob = async () => {
            try {
                const response = await jobsAPI.getJobById(jobId);
                setJobData({
  ...response.data,
  application_deadline: formatDateInput(response.data.application_deadline),
  scheduled_publish_date: formatDateInput(response.data.scheduled_publish_date),
  target_closing_date: formatDateInput(response.data.target_closing_date),
});

                setWorkType(response.data.work_arrangement || 'On site');
                setSkills(response.data.required_skills ? response.data.required_skills.split(',') : []);
                setQuestions(response.data.prequalifying_questions ? JSON.parse(response.data.prequalifying_questions) : []);
            } catch (error) {
                console.error('API failed, using dummy data:', error);
                // Fallback to dummy data
                setJobData({
                    job_title: 'Senior Product Designer',
                    department: 'Design',
                    job_type: 'Full Time',
                    job_description: 'As a script Designer, you will lead design individual...',
                    additional_qualification: 'must have graduate from any design or computer science degree',
                    industry_experience: 'SaaS',
                    work_arrangement: 'On site',
                    city: 'Pune',
                    country: 'Maharashtra',
                    min_salary: '20000',
                    max_salary: '30000',
                    experience_level: 'Mid Level (3-5 Years)',
                    application_deadline: '31/12/2025',
                    target_closing_date: '1/12/2025',
                    status: 'Active'
                });
            }
            setLoading(false);
        };
        fetchJob();
    }, [id]);

    const handleSave = async () => {
        const jobId = id || '1';
        try {
            const updates = {
                job_title: jobData.job_title,
                department: jobData.department,
                job_type: jobData.job_type,
                job_description: jobData.job_description,
                additional_qualification: jobData.additional_qualification,
                industry_experience: jobData.industry_experience,
                work_arrangement: workType,
                city: jobData.city,
                country: jobData.country,
                min_salary: Number(jobData.min_salary),
                max_salary: Number(jobData.max_salary),
                salary_negotiable: jobData.salary_negotiable ? 1 : 0,
                salary_hidden: jobData.salary_hidden ? 1 : 0,
                experience_level: jobData.experience_level,
                application_deadline: jobData.application_deadline,
                scheduled_publish_date: jobData.scheduled_publish_date,
                target_closing_date: jobData.target_closing_date,
                status: jobData.status,
                required_skills: skills.join(','),
                prequalifying_questions: JSON.stringify(questions)
            };
            await jobsAPI.updateJob(jobId, updates);
            alert('Job updated successfully');
            navigate('/hr-jobs');
        } catch (error) {
            console.error('Error updating job:', error);
            alert('Failed to update job');
        }
    };

    const handleUnpublish = async () => {
        const jobId = id || '1';
        try {
            await jobsAPI.changeJobStatus(jobId, 'UNPUBLISHED');
            alert('Job unpublished');
            navigate('/hr-jobs');
        } catch (error) {
            console.error('Error unpublishing job:', error);
            alert('Failed to unpublish job');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
                                <input type="text" className="text-input" value={jobData.job_title || ''} onChange={(e) => setJobData({ ...jobData, job_title: e.target.value })} />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select className="select-input" value={jobData.department || ''} onChange={(e) => setJobData({ ...jobData, department: e.target.value })}>
                                        <option>Design</option>
                                        <option>Engineering</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Job Type<span className="required-star">*</span></label>
                                    <select className="select-input" value={jobData.job_type || ''} onChange={(e) => setJobData({ ...jobData, job_type: e.target.value })}>
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>Contract</option>
                                        <option>Internship</option>
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
                                    <textarea className="editor-textarea" value={jobData.job_description || ''} onChange={(e) => setJobData({ ...jobData, job_description: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Prequalifying Questions */}
                        <div className="form-card">
                            <div className="card-header" style={{ justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-icon-box"><QuestionIcon /></div>
                                    <h3 className="card-title">Prequalifying Questions</h3>
                                </div>
                                <span className="badge-max-questions">Max 5 questions</span>
                            </div>

                            {questions.map((q, index) => (
                                <div className="form-group" key={index}>
                                    <label>Question {index + 1}</label>
                                    <div className="question-input-wrapper">
                                        <input type="text" className="text-input" value={q} onChange={(e) => {
                                            const newQuestions = [...questions];
                                            newQuestions[index] = e.target.value;
                                            setQuestions(newQuestions);
                                        }} />
                                        <button className="btn-delete-question" onClick={() => setQuestions(questions.filter((_, i) => i !== index))}><TrashIcon /></button>
                                    </div>
                                </div>
                            ))}
                            {questions.length < 5 && (


                                <button onClick={() => setQuestions([...questions, ''])}>Add Question</button>
                            )}
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
                                        <div className="skill-chip" key={index}>
                                            {skill} <span className="remove-skill" onClick={() => setSkills(skills.filter((_, i) => i !== index))}>×</span>
                                        </div>
                                    ))}
                                    <input type="text" className="skills-input" placeholder="Type Skill and hit enter" onKeyDown={(e) => {
                                        if (e.key === 'Enter' && e.target.value) {
                                            setSkills([...skills, e.target.value]);
                                            e.target.value = '';
                                        }
                                    }} />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label>Industry Experience</label>
                                <select className="select-input" value={jobData.industry_experience || ''} onChange={(e) => setJobData({ ...jobData, industry_experience: e.target.value })}>
                                    <option disabled>Select Required Industry Experience</option>
                                    <option>SaaS</option>
                                    <option>Fintech</option>
                                    <option>Edtech</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Additional Qualification</label>
                                <textarea className="text-input" rows="3" style={{ resize: 'none' }} value={jobData.additional_qualification || ''} onChange={(e) => setJobData({ ...jobData, additional_qualification: e.target.value })} />
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
                                    <input type="text" className="text-input location-input" value={`${jobData.city || ''}, ${jobData.country || ''}`} onChange={(e) => {
                                        const [city, country] = e.target.value.split(', ');
                                        setJobData({ ...jobData, city, country });
                                    }} />
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
                                    <input type="text" className="text-input" value={jobData.min_salary || ''} onChange={(e) => setJobData({ ...jobData, min_salary: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Max Salary</label>
                                    <input type="text" className="text-input" value={jobData.max_salary || ''} onChange={(e) => setJobData({ ...jobData, max_salary: e.target.value })} />
                                </div>
                            </div>

                            <button className="negotiable-toggle" onClick={() => setJobData({ ...jobData, salary_negotiable: !jobData.salary_negotiable })}>
                                {jobData.salary_negotiable ? 'Negotiable' : 'Not Negotiable'}/Hide
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
                                <select className="select-input" value={jobData.experience_level || ''} onChange={(e) => setJobData({ ...jobData, experience_level: e.target.value })}>
                                    <option>Mid Level (3-5 Years)</option>
                                    <option>Junior Level (0-2 Years)</option>
                                    <option>Senior Level (5+ Years)</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Application Deadline</label>
                                <div className="date-input-wrapper">
                                    <input type="text" className="text-input" value={jobData.application_deadline || ''} onChange={(e) => setJobData({ ...jobData, application_deadline: e.target.value })} />
                                    <div className="calendar-icon-right"><CalendarIcon /></div>
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label>Target Closing Date</label>
                                <div className="date-input-wrapper">
                                    <input type="text" className="text-input" value={jobData.target_closing_date || ''} onChange={(e) => setJobData({ ...jobData, target_closing_date: e.target.value })} />
                                    <div className="calendar-icon-right"><CalendarIcon /></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Current status</label>
                                <select className="select-input" style={{ color: jobData.status === 'ACTIVE' ? '#48BB78' : '#1A202C' }} value={jobData.status || ''} onChange={(e) => setJobData({ ...jobData, status: e.target.value })}>
                                    <option value="ACTIVE" style={{ color: '#48BB78' }}>Active</option>
                                    <option value="CLOSED" style={{ color: '#1A202C' }}>Closed</option>
                                    <option value="DRAFT" style={{ color: '#1A202C' }}>Draft</option>
                                    <option value="UNPUBLISHED" style={{ color: '#1A202C' }}>Unpublished</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edit-job-footer">
                    <button className="footer-btn btn-cancel" onClick={() => navigate('/hr-jobs')}>Cancel</button>
                    <button className="footer-btn btn-unpublish" onClick={handleUnpublish}>
                        <UnpublishIcon /> Unpublish
                    </button>
                    <button className="footer-btn btn-save" onClick={handleSave}>Save Changes</button>
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