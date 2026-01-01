import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRJobs.css';

const HRJobs = () => {
    const navigate = useNavigate();

    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
    );
    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    );
    const EditIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
    );
    const TrashIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    );
    const BuildingIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18"></path><path d="M15 9h-6"></path><path d="M15 15h-6"></path></svg>
    ); // Placeholder for office building like icon
    const LaptopIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
    );
    const HandshakeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a4 4 0 0 0 5.66 0"></path><path d="m11 17 2 2a4 4 0 0 0 5.66 0"></path><path d="M4.6 15c-1 0-1.6 1.3-.9 2.1l2.5 2.8c1.3 1.5 3.3 2.1 5.3 1.7L19 19a4 4 0 0 0 1-7.6L16.3 3.6c-.6-.7-1.7-.6-2.2.1l-2.4 3.2"></path></svg>
    ); // Using fallback or generic icon if handshake specific isn't perfect, or use Briefcase for contract

    // Dummy Data
    const jobs = [
        { id: 1, title: 'Senior Product Manager', dept: 'Design', engagement: 'Client Work', type: 'Full time', applicants: 12, posted: '2 days ago', status: 'Active', icon: BuildingIcon },
        { id: 2, title: 'Marketing Manager', dept: 'Marketing', engagement: 'Own Payroll', type: 'Remote', applicants: 4, posted: '5 days ago', status: 'Closed', icon: LaptopIcon },
        { id: 3, title: 'Senior Product Manager', dept: 'Engineering', engagement: 'Client Work', type: 'Contract', applicants: 8, posted: '1 week ago', status: 'Draft', icon: HandshakeIcon },
        { id: 4, title: 'Senior Product Manager', dept: 'Human Resource', engagement: 'Own Payroll', type: 'Full time', applicants: 0, posted: 'Just now', status: 'Active', icon: BuildingIcon },
        { id: 5, title: 'Senior Product Manager', dept: 'Product', engagement: 'Client Work', type: 'Full time', applicants: 4, posted: '3 days ago', status: 'Active', icon: BuildingIcon },
    ];

    const getStatusClass = (status) => {
        if (status === 'Active') return 'status-active';
        if (status === 'Closed') return 'status-closed';
        if (status === 'Draft') return 'status-draft';
        return '';
    };

    const getEngagementClass = (eng) => {
        return eng === 'Client Work' ? 'eng-client' : 'eng-payroll';
    };

    return (
        <div className="hr-jobs-page">
            <HRHeader />

            <div className="hr-jobs-content">
                {/* Breadcrumb / Title */}
                <div className="jobs-header-section">
                    <div className="breadcrumb">
                        <span className="crumb-link">Dashboard</span>
                        <span className="crumb-sep">{'>'}</span>
                        <span className="crumb-current">Jobs</span>
                    </div>
                    <div className="jobs-title-row">
                        <div>
                            <h1 className="jobs-page-title">Job Listing</h1>
                            <p className="jobs-page-subtitle">Manage you open positions and track candidates applications.</p>
                        </div>
                        <button className="create-job-btn" onClick={() => navigate('/hr-create-job')}>
                            <PlusIcon />
                            <span>Create New Job</span>
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="jobs-filters-row">
                    <div className="job-search-box">
                        <SearchIcon />
                        <input type="text" placeholder="Search by job title, ID, or keywords" />
                    </div>

                    <div className="filter-dropdowns">
                        <button className="filter-btn">
                            <span>Job Type</span>
                            <ChevronDownIcon />
                        </button>
                        <button className="filter-btn">
                            <span>Status</span>
                            {/* No chevron in image for Status? Actually image has empty box? 
                                Wait, image has "Status" in a box. It looks like a dropdown or input.
                                I'll make it a button like the other.
                             */}
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="jobs-table-container">
                    <table className="jobs-table">
                        <thead>
                            <tr>
                                <th>JOB TITLE</th>
                                <th>DEPARTMENT</th>
                                <th>Engagement</th>
                                <th>TYPE</th>
                                <th>APPLICANTS</th>
                                <th>POSTED DATE</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(job => (
                                <tr key={job.id}>
                                    <td className="col-title">
                                        <div className="job-title-text">{job.title}</div>
                                    </td>
                                    <td className="col-dept">{job.dept}</td>
                                    <td>
                                        <span className={`badge-eng ${getEngagementClass(job.engagement)}`}>
                                            {job.engagement}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="job-type-cell">
                                            <job.icon />
                                            <span>{job.type}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="applicants-cell">
                                            {job.applicants > 0 ? (
                                                <>
                                                    <div className="applicant-avatars">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="" />
                                                        <span className="more-applicants">+10</span>
                                                    </div>
                                                    <span className="applicant-count">{job.applicants}</span>
                                                </>
                                            ) : (
                                                <span className="no-applicants">No applicants<br />yet</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="col-date">{job.posted}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="action-cell">
                                        <button className="action-icon-btn" onClick={() => navigate('/hr-edit-job')}>
                                            <EditIcon />
                                        </button>
                                        <button className="action-icon-btn">
                                            <TrashIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="jobs-table-footer">
                    <span className="showing-text">Showing 1 to 5 of 42 results</span>
                    <div className="pagination-btns">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn">Next</button>
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

export default HRJobs;
