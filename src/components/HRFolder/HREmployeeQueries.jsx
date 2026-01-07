import React, { useState, useEffect } from 'react';
import HRHeader from './HRHeader';
import { useNavigate } from 'react-router-dom';
import './HREmployeeQueries.css';
import { getAllQueries } from '../../services/api';

const HREmployeeQueries = () => {
    const navigate = useNavigate();
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Statuses');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalQueries, setTotalQueries] = useState(0);
    const queriesPerPage = 5;

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
    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    );

    const FollowUpIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10L4 15l5 5"></path><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
    );
    const ViewIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    );

    // Fetch queries from database
    useEffect(() => {
        fetchQueries();
    }, [statusFilter, searchTerm]);

    const fetchQueries = async () => {
        try {
            setLoading(true);
            const params = {};
            if (statusFilter && statusFilter !== 'All Statuses') {
                params.status = statusFilter;
            }
            if (searchTerm) {
                params.search = searchTerm;
            }

            const response = await getAllQueries(params);
            setQueries(response.data);
            setTotalQueries(response.data.length);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching queries:', error);
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const getStatusDisplay = (status) => {
        const statusMap = {
            'NEW': 'New',
            'IN_PROGRESS': 'In Progress',
            'FOLLOW_UP': 'Follow-up',
            'RESOLVED': 'Resolved'
        };
        return statusMap[status] || status;
    };

    const getStatusClass = (status) => {
        if (status === 'NEW') return 'status-new';
        if (status === 'IN_PROGRESS') return 'status-progress';
        if (status === 'FOLLOW_UP') return 'status-follow';
        if (status === 'RESOLVED') return 'status-resolved';
        return '';
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
    };

    const handleExportCSV = () => {
        // Convert queries to CSV format
        const headers = ['Name', 'Email', 'Subject', 'Status', 'Date Submission', 'Last Follow-up'];
        const rows = queries.map(q => [
            q.name,
            q.email,
            q.subject,
            getStatusDisplay(q.status),
            formatDate(q.submitted_at),
            formatDate(q.last_follow_up)
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `queries_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    // Pagination
    const indexOfLastQuery = currentPage * queriesPerPage;
    const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
    const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);
    const totalPages = Math.ceil(totalQueries / queriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                        <button className="btn-export" onClick={handleExportCSV}>
                            <DownloadIcon /> Export CSV
                        </button>
                        <button className="btn-new-query" onClick={() => navigate('/hr-add-query')}>
                            <PlusIcon /> New Query
                        </button>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="queries-filter-bar">
                    <div className="search-wrapper">
                        <SearchIcon />
                        <input 
                            type="text" 
                            placeholder="Search by name, email, or subject..." 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="filter-actions">
                        <div className="status-dropdown">
                            <select 
                                value={statusFilter} 
                                onChange={(e) => handleStatusFilterChange(e.target.value)}
                                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                            >
                                <option value="All Statuses">All Statuses</option>
                                <option value="NEW">New</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="FOLLOW_UP">Follow-up</option>
                                <option value="RESOLVED">Resolved</option>
                            </select>
                            {statusFilter !== 'All Statuses' && (
                                <button className="clear-x" onClick={() => setStatusFilter('All Statuses')}>×</button>
                            )}
                        </div>
                        <button className="filter-toggle-btn">
                            <FilterIcon />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="queries-table-container">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading queries...</div>
                    ) : (
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
                                {currentQueries.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                                            No queries found
                                        </td>
                                    </tr>
                                ) : (
                                    currentQueries.map((q) => (
                                        <tr key={q.query_id}>
                                            <td className="col-name">
                                                <div className="profile-cell">
                                                    <div className="cell-avatar" style={{ 
                                                        width: '40px', 
                                                        height: '40px', 
                                                        borderRadius: '50%', 
                                                        backgroundColor: '#e0e0e0',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#666',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        {q.name ? q.name.charAt(0).toUpperCase() : '?'}
                                                    </div>
                                                    <div className="cell-info">
                                                        <span className="name-text">{q.name || 'N/A'}</span>
                                                        <span className="email-text">{q.email || 'N/A'}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="col-details">
                                                <div className="query-details" onClick={() => navigate(`/hr-query-detail/${q.query_id}`)}>
                                                    <span className="query-title">{q.subject || 'No Subject'}</span>
                                                    <span className="query-desc">
                                                        {q.message ? (q.message.length > 50 ? q.message.substring(0, 50) + '...' : q.message) : 'No description'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="col-date">{formatDate(q.submitted_at)}</td>
                                            <td className="col-followup">{formatDate(q.last_follow_up)}</td>
                                            <td className="col-status">
                                                <span className={`status-pill ${getStatusClass(q.status)}`}>
                                                    {getStatusDisplay(q.status)}
                                                </span>
                                            </td>
                                            <td className="col-action">
                                                {q.status !== 'RESOLVED' ? (
                                                    <button className="btn-follow-up" onClick={() => navigate(`/hr-query-detail/${q.query_id}`)}>
                                                        <FollowUpIcon /> Follow-up
                                                    </button>
                                                ) : (
                                                    <button className="btn-view-action" onClick={() => navigate(`/hr-query-detail/${q.query_id}`)}>
                                                        <ViewIcon /> View
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Footer */}
                <div className="queries-footer">
                    <span className="footer-text">Showing {indexOfFirstQuery + 1}–{Math.min(indexOfLastQuery, totalQueries)} of {totalQueries} queries</span>
                    <div className="pagination">
                        <button 
                            className="page-arrow" 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ‹
                        </button>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }
                            return (
                                <button
                                    key={pageNum}
                                    className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                                    onClick={() => handlePageChange(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <span className="page-dots">...</span>
                        )}
                        {totalPages > 5 && (
                            <button
                                className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
                                onClick={() => handlePageChange(totalPages)}
                            >
                                {totalPages}
                            </button>
                        )}
                        <button 
                            className="page-arrow" 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            ›
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HREmployeeQueries;
