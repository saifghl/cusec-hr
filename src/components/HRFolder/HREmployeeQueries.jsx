import React from 'react';
import HRHeader from './HRHeader';
import { useNavigate } from 'react-router-dom';
import './HREmployeeQueries.css';

const HREmployeeQueries = () => {
    const navigate = useNavigate();
    // Icons
    const DownloadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    );

    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
    );
    const FilterIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
    );

    // Mock Data
    const queries = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.d@example.com',
            avatar: 'https://i.pravatar.cc/150?u=1',
            title: 'Application Status',
            desc: 'Checking on the status of my senior designer application...',
            date: 'Oct 30, 2025',
            followUp: '-',
            status: 'New',
            action: 'Follow-up'
        },
        {
            id: 2,
            name: 'Sarah Smith',
            email: 'sarahs@example.com',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
            title: 'Interview Reschedule',
            desc: 'Would be happy for the interview to be next Tuesday if possible.',
            date: 'Oct 15, 2025',
            followUp: 'Oct 22, 2025',
            status: 'In Progress',
            action: 'Follow-up'
        },
        {
            id: 3,
            name: 'Mike Ross',
            email: 'mike.ross@example.com',
            avatar: 'https://i.pravatar.cc/150?u=3',
            title: 'Portfolio Attachment',
            desc: 'Forgot to attach portfolio in the main form! Here is t...',
            date: 'Oct 18, 2025',
            followUp: 'Oct 21, 2025',
            status: 'Follow-up',
            action: 'Follow-up'
        },
        {
            id: 4,
            name: 'Emily Blunt',
            email: 'emily.b@example.com',
            avatar: 'https://i.pravatar.cc/150?u=4',
            title: 'Offer Negotiation',
            desc: 'Regarding the compensation package discussed...',
            date: 'Oct 30, 2025',
            followUp: '-',
            status: 'New',
            action: 'Follow-up'
        },
        {
            id: 5,
            name: 'David Kim',
            email: 'david.kim@example.com',
            avatar: 'https://i.pravatar.cc/150?u=5',
            title: 'Technical Issue',
            desc: 'BUG REPORT: Unable to upload resume PDF format...',
            date: 'Oct 31, 2025',
            followUp: 'Oct 19, 2025',
            status: 'Follow-up',
            action: 'View'
        },
    ];

    const FollowUpIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10L4 15l5 5"></path><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
    );
    const ViewIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    );

    // Mock Data


    const getStatusClass = (status) => {
        if (status === 'New') return 'status-new';
        if (status === 'In Progress') return 'status-progress';
        if (status === 'Follow-up') return 'status-follow';
        return '';
    };

    return (
        <div className="hr-queries-page">
            <HRHeader />
            <div className="hr-queries-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Back
                </button>

                {/* Header Section */}
                <div className="queries-header-row">
                    <div className="title-block">
                        <div className="title-wrapper">
                            <h1 className="page-title">Employee Queries</h1>
                            <span className="title-underline"></span>
                        </div>
                        <p className="page-subtitle">Manage and respond to candidate inquiries and internal questions.</p>
                    </div>
                    <div className="header-buttons">
                        <button className="btn-export">
                            <DownloadIcon /> Export CSV
                        </button>

                    </div>
                </div>

                {/* Filter Bar */}
                <div className="queries-filter-bar">
                    <div className="search-wrapper">
                        <SearchIcon />
                        <input type="text" placeholder="Search by name, email, or subject..." />
                    </div>
                    <div className="filter-actions">
                        <div className="status-dropdown">
                            <span>All Statuses</span>
                            <button className="clear-x">×</button>
                        </div>
                        <button className="filter-toggle-btn">
                            <FilterIcon />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="queries-table-container">
                    <table className="queries-table">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>QUERY DETAILS</th>
                                <th>DATE SUBMISSION</th>
                                <th>LAST FOLLOW-UP</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queries.map((q) => (
                                <tr key={q.id}>
                                    <td className="col-name">
                                        <div className="profile-cell">
                                            <img src={q.avatar} alt={q.name} className="cell-avatar" />
                                            <div className="cell-info">
                                                <span className="name-text">{q.name}</span>
                                                <span className="email-text">{q.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-details">
                                        <div className="query-details" onClick={() => navigate('/hr-query-detail')}>
                                            <span className="query-title">{q.title}</span>
                                            <span className="query-desc">{q.desc}</span>
                                        </div>
                                    </td>
                                    <td className="col-date">{q.date}</td>
                                    <td className="col-followup">{q.followUp}</td>
                                    <td className="col-status">
                                        <span className={`status-pill ${getStatusClass(q.status)}`}>
                                            {q.status}
                                        </span>
                                    </td>
                                    <td className="col-action">
                                        {q.action === 'Follow-up' ? (
                                            <button className="btn-follow-up" onClick={() => navigate('/hr-query-detail')}>
                                                <FollowUpIcon /> Follow-up
                                            </button>
                                        ) : (
                                            <button className="btn-view-action" onClick={() => navigate('/hr-query-detail')}>
                                                <ViewIcon /> View
                                            </button>
                                        )}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="queries-footer">
                    <span className="footer-text">Showing 1–5 of 24 queries</span>
                    <div className="pagination">
                        <button className="page-arrow">‹</button>
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                        <button className="page-number">4</button>
                        <span className="page-dots">...</span>
                        <button className="page-number">24</button>
                        <button className="page-arrow">›</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HREmployeeQueries;
