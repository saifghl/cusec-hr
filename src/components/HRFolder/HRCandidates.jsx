import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidates.css';

const HRCandidates = () => {
    const navigate = useNavigate();

    // Icons
    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
    );
    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    );
    const ChatIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    );
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    );
    const MoreVerticalIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    );
    const MessageSquareIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    );
    const FileTextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    );


    // Dummy Data
    const candidates = [
        { id: 1, name: 'John Doe', email: 'john.d@example.com', job: 'Senior UX Designer', dept: 'Design Dept.', status: 'Offer sent', date: 'Oct 24, 2025', remarkType: 'chat' },
        { id: 2, name: 'Sarah Smith', email: 'sarahs@example.com', job: 'Frontend Engineer', dept: 'Engineering', status: 'Rejected', date: 'Oct 24, 2025', remarkType: 'file' },
        { id: 3, name: 'Mike Ross', email: 'mikeross@example.com', job: 'Product Manager', dept: 'Product', status: 'Interviewing', date: 'Oct 24, 2025', remarkType: 'chat' },
        { id: 4, name: 'Emily Blunt', email: 'emilyb7@example.com', job: 'Senior UX Designer', dept: 'Design Dept.', status: 'New Applicant', date: 'Oct 24, 2025', remarkType: 'file' },
        { id: 5, name: 'David Kim', email: 'davidkim@example.com', job: 'Senior UX Designer', dept: 'Design Dept.', status: 'Rejected', date: 'Oct 24, 2025', remarkType: 'file' },
    ];

    const getStatusClass = (status) => {
        if (status === 'Offer sent') return 'status-offer';
        if (status === 'Rejected') return 'status-rejected';
        if (status === 'Interviewing') return 'status-interviewing';
        if (status === 'New Applicant') return 'status-new';
        return '';
    };

    return (
        <div className="hr-candidates-page">
            <HRHeader />

            <div className="hr-candidates-content">
                {/* Breadcrumb / Title */}
                <div className="candidates-header-section">
                    <div className="breadcrumb">
                        <span className="crumb-link">Dashboard</span>
                        <span className="crumb-sep">/</span>
                        <span className="crumb-current">Candidates</span>
                    </div>

                    <div className="candidates-title-row">
                        <div>
                            <h1 className="candidates-page-title">Candidates</h1>
                            <p className="candidates-page-subtitle">Total Applicants: 45</p>
                        </div>
                        <button className="add-candidate-btn">
                            <PlusIcon />
                            <span>Add New Candidates</span>
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="candidates-filters-row">
                    <div className="candidate-search-box">
                        <SearchIcon />
                        <input type="text" placeholder="Search by job title, ID, or keywords" />
                    </div>

                    <div className="filter-dropdowns">
                        <button className="filter-btn">
                            <span>All Jobs</span>
                            <ChevronDownIcon />
                        </button>
                        <button className="filter-btn">
                            <span>Status</span>
                            {/* Empty/Simple button as per earlier pattern */}
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="candidates-table-container">
                    <table className="candidates-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                <th>NAME</th>
                                <th>JOB APPLIED</th>
                                <th>STATUS</th>
                                <th>APPLIED DATE</th>
                                <th>Remark</th>
                                <th>Contact</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(candidate => (
                                <tr key={candidate.id}>
                                    <td><input type="checkbox" /></td>
                                    <td className="col-name">
                                        <div className="candidate-profile">
                                            <img src={`https://i.pravatar.cc/150?u=${candidate.id}`} alt="avatar" className="candidate-avatar" />
                                            <div className="candidate-info">
                                                <span className="candidate-name">{candidate.name}</span>
                                                <span className="candidate-email">{candidate.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-job">
                                        <div className="job-info">
                                            <span className="job-title">{candidate.job}</span>
                                            <span className="job-dept">{candidate.dept}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(candidate.status)}`}>
                                            {candidate.status}
                                        </span>
                                    </td>
                                    <td className="col-date">{candidate.date}</td>
                                    <td className="col-remark">
                                        <button className={`remark-btn ${candidate.remarkType === 'chat' ? 'remark-chat' : 'remark-file'}`}>
                                            {candidate.remarkType === 'chat' ? <MessageSquareIcon /> : <FileTextIcon />}
                                        </button>
                                    </td>
                                    <td className="col-contact">
                                        <div className="contact-actions">
                                            <button className="contact-btn btn-chat"><MessageSquareIcon /></button>
                                            <button className="contact-btn btn-mail"><MailIcon /></button>
                                        </div>
                                    </td>
                                    <td className="action-cell">
                                        <button className="action-icon-btn" onClick={() => navigate('/hr-candidate-profile')}>
                                            <MoreVerticalIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="candidates-table-footer">
                    <div className="rows-per-page">
                        <span>Rows per page:</span>
                        <select className="rows-select">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>

                    <div className="pagination-controls">
                        <button className="page-nav-btn">{'<'}</button>
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                        <button className="page-number">4</button>
                        <button className="page-number">5</button>
                        <span className="page-ellipsis">...</span>
                        <button className="page-number">42</button>
                        <button className="page-nav-btn">{'>'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRCandidates;
