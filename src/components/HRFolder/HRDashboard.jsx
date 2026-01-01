import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HRDashboard.css';
import HRHeader from './HRHeader';

const HRDashboard = () => {
    const navigate = useNavigate();
    // Icons
    const DashboardIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    );
    const JobsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    );
    const QueriesIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    );
    const CandidatesIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    );
    const SettingsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    );
    const BellIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    );
    const SearchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    );
    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    );
    const EyeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    );
    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    );
    const FileTextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
    );
    const BriefcaseIconBig = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    );
    const UsersIconBig = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    );
    const ImageIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    );
    const LogOutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    );

    // Dummy Activity Data
    const activities = [
        { id: 1, text: 'Sarah J. applied for UX Designer', time: '2 Min ago', type: 'user', color: 'blue' },
        { id: 2, text: 'Interview done withJane Smith', time: '1 Hour ago', type: 'calendar', color: 'purple' },
        { id: 3, text: 'New Query regarding company Benefits', time: '3 Hour ago', type: 'help', color: 'orange' },
        { id: 4, text: 'Mike T. accepted the offer', time: '5 Hour ago', type: 'check', color: 'green' },
    ];

    const getIcon = (type, color) => {
        let comp = null;
        if (type === 'user') comp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M16 11h.01"></path></svg>;
        if (type === 'calendar') comp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>;
        if (type === 'help') comp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><text x="12" y="18" textAnchor="middle" fontSize="16" fontWeight="bold">?</text></svg>;
        if (type === 'check') comp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;

        return <div className={`activity-icon-box bg-${color}-light`}>{comp}</div>;
    };

    return (
        <div className="hr-dashboard-container">
            {/* Header */}
            <HRHeader />
            {/* Main Content */}
            <div className="dashboard-content">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <div className="welcome-text">
                        <h1>Welcome HR</h1>
                        <p>Here is overview</p>
                    </div>
                    <div className="action-buttons">
                        <button className="action-btn primary" onClick={() => navigate('/hr-create-job')}>
                            <PlusIcon />
                            <span>Create New Job</span>
                        </button>
                        <button className="action-btn" onClick={() => navigate('/hr-candidates')}>
                            <EyeIcon />
                            <span>View Candidates</span>
                        </button>
                        <button className="action-btn" onClick={() => navigate('/hr-queries')}>
                            <FileTextIcon />
                            <span>View Queries</span>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="search-container">
                    <SearchIcon />
                    <input type="text" placeholder="Search Candidates, Jobs Or Queries" className="search-input" />
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Active Jobs</span>
                            <BriefcaseIconBig />
                        </div>
                        <div className="stat-value-container">
                            <div className="stat-value-row" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start', gap: '12px' }}>
                                <div className="stat-value">12</div>
                                <div className="stat-detail">2+ this week</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Total Applicants</span>
                            <UsersIconBig />
                        </div>
                        <div className="stat-value-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <div className="stat-value">1,240</div>
                            <div className="stat-detail">+2% vs last week</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">New Queries</span>
                            <ImageIcon />
                        </div>
                        <div className="stat-value-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <div className="stat-value">8</div>
                            <div className="stat-detail">+3 since login</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Interviews Today</span>
                            <CalendarIcon />
                        </div>
                        <div className="stat-value-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <div className="stat-value">3</div>
                            <div className="stat-meta">Scheduled</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Grid: Chart + Activity */}
                <div className="dashboard-bottom-grid">
                    {/* Applicant Overview */}
                    <div className="chart-card">
                        <div className="card-title">Applicants Overview</div>
                        <div className="card-subtitle">Performance Over Last 30 days</div>

                        <div className="chart-container">
                            <svg className="chart-svg" viewBox="0 0 500 200" preserveAspectRatio="none">
                                {/* Smooth Area Curve */}
                                <path
                                    d="M0,200 L0,180 C50,160 100,150 150,100 C200,50 250,50 300,70 C350,90 400,120 450,140 C480,150 500,160 500,170 L500,200 Z"
                                    className="chart-area"
                                />
                            </svg>
                        </div>
                        <div className="chart-labels">
                            <span>Week1</span>
                            <span>Week2</span>
                            <span>Week3</span>
                            <span>Week4</span>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="activity-card">
                        <div className="activity-header">
                            <div className="card-title">Recent Activity</div>
                            <a href="#" className="view-all-link">View All</a>
                        </div>

                        <div className="activity-list">
                            {activities.map(activity => (
                                <div className="activity-item" key={activity.id}>
                                    {getIcon(activity.type, activity.color)}
                                    <div className="activity-content">
                                        <h4>{activity.text}</h4>
                                        <p>{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="logout-container">
                    <button className="logout-btn" onClick={() => navigate('/hr-logout')}>
                        <LogOutIcon />
                        <span>Log Out</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default HRDashboard;
