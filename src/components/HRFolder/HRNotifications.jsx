import React, { useState, useEffect } from 'react';
import HRHeader from './HRHeader';
import './HRNotifications.css';
import { getNotifications, getNotificationStats, markNotificationAsRead } from '../../services/api';

const HRNotifications = () => {
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [stats, setStats] = useState({ total: 0, unread: 0, urgent: 0 });

    useEffect(() => {
        loadNotifications();
        loadStats();
    }, [filter]);

    const loadNotifications = async () => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user.user_id || 1;
            const response = await getNotifications(userId, { filter, sort: 'newest' });
            const grouped = response.data.grouped || {};
            
            // Convert grouped object to sections array
            const sections = Object.keys(grouped).map(title => ({
                title,
                items: grouped[title].map(item => ({
                    id: item.notification_id,
                    type: item.type || 'system',
                    icon: getIconForType(item.type),
                    title: item.title,
                    desc: item.description,
                    time: formatTime(item.created_at),
                    tags: item.tags || [],
                    isUnread: !item.is_read,
                    actions: item.actions || []
                }))
            }));
            
            setNotifications(sections);
        } catch (error) {
            console.error('Error loading notifications:', error);
            // Fallback to mock data if API fails
            setNotifications(getMockSections());
        } finally {
            setLoading(false);
        }
    };

    const loadStats = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user.user_id || 1;
            const response = await getNotificationStats(userId);
            setStats(response.data);
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    };

    const formatTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

    const getIconForType = (type) => {
        const icons = {
            alert: <AlertIcon />,
            applicant: <UserPlusIcon />,
            system: <MegaphoneIcon />,
            calendar: <CalendarIcon />,
            success: <CheckCircleIcon />,
            file: <FileTextIcon />
        };
        return icons[type] || <AlertIcon />;
    };

    const getMockSections = () => {
        return [
            {
                title: 'Today',
                items: [
                    {
                        id: 1,
                        type: 'alert',
                        icon: <AlertIcon />,
                        title: 'Contract Expiry Alert: Sarah Jenkins',
                        desc: 'The employment contract for Sarah Jenkins expires in 7 days. Please review renewal options immediately to avoid service interruption.',
                        time: '2 hours ago',
                        tags: ['Urgent'],
                        isUnread: true,
                        actions: [{ label: 'Review Contract', primary: false }]
                    }
                ]
            }
        ];
    };

    // Icons
    const AlertIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-alert"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    );
    const UserPlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
    );
    const MegaphoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-megaphone"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
    );
    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    );
    const CheckCircleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-check"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    );
    const FileTextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-file"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    );
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
    );

    // Mock Data
    const sections = [
        {
            title: 'Today',
            items: [
                {
                    id: 1,
                    type: 'alert',
                    icon: <AlertIcon />,
                    title: 'Contract Expiry Alert: Sarah Jenkins',
                    desc: 'The employment contract for Sarah Jenkins expires in 7 days. Please review renewal options immediately to avoid service interruption.',
                    time: '2 hours ago',
                    tags: ['Urgent'],
                    isUnread: true,
                    actions: [{ label: 'Review Contract', primary: false }] // Button style in image is light red/pink
                },
                {
                    id: 2,
                    type: 'applicant',
                    icon: <UserPlusIcon />,
                    title: 'New Application: Senior Frontend Developer',
                    desc: 'Michael Chen has applied for the Senior Frontend Developer position via LinkedIn integration.',
                    time: '4 hours ago',
                    isUnread: true,
                    actions: [{ label: 'View Profile', primary: true }, { label: 'Schedule Interview', primary: false }]
                },
                {
                    id: 3,
                    type: 'system',
                    icon: <MegaphoneIcon />,
                    title: 'System Maintenance Scheduled',
                    desc: 'The HR Portal will undergo maintenance on Saturday at 2:00 AM EST. Expected downtime is 30 minutes.',
                    time: '5 hours ago',
                    isUnread: true,
                    actions: []
                }
            ]
        },
        {
            title: 'Yesterday',
            items: [
                {
                    id: 4,
                    type: 'calendar',
                    icon: <CalendarIcon />,
                    title: 'Interview Confirmed: David Kim',
                    desc: 'Technical interview scheduled for tomorrow, 10:00 AM EST with Engineering Team.',
                    time: 'Yesterday at 4:30 PM',
                    isUnread: false,
                    actions: []
                },
                {
                    id: 5,
                    type: 'success',
                    icon: <CheckCircleIcon />,
                    title: 'Leave Request Approved',
                    desc: 'Your leave request for Sep 15 - Sep 20 has been approved by management.',
                    time: 'Yesterday at 11:00 AM',
                    isUnread: false,
                    actions: []
                },
                {
                    id: 6,
                    type: 'file',
                    icon: <FileTextIcon />,
                    title: 'Document Shared: Q3 Performance Review',
                    desc: 'A new document has been shared with you in the Employee Documents folder.',
                    time: 'Yesterday at 9:15 AM',
                    isUnread: false,
                    actions: []
                }
            ]
        }
    ];

    return (
        <div className="hr-notifications-page">
            <HRHeader />

            <div className="hr-notifications-content">
                {/* Filter Bar */}
                <div className="notifications-filter-bar">
                    <div className="filter-chips">
                        <button className={`chip ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>
                            All <span className="badge-count">{stats.total || 0}</span>
                        </button>
                        <button className={`chip ${filter === 'Unread' ? 'active' : ''}`} onClick={() => setFilter('Unread')}>
                            <span className="dot-unread"></span> Unread <span className="badge-count light">{stats.unread || 0}</span>
                        </button>
                        <button className={`chip ${filter === 'Urgent' ? 'active' : ''}`} onClick={() => setFilter('Urgent')}>
                            <span className="dot-urgent"></span> Urgent <span className="badge-count light">{stats.urgent || 0}</span>
                        </button>
                        <button className={`chip ${filter === 'System' ? 'active' : ''}`} onClick={() => setFilter('System')}>
                            <span className="icon-system"></span> System
                        </button>
                    </div>

                    <div className="sort-dropdown">
                        <span>Sort by:</span>
                        <button className="sort-btn">
                            Newest First <ChevronDownIcon />
                        </button>
                    </div>
                </div>

                {/* Notifications Lists */}
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading notifications...</div>
                ) : notifications.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>No notifications found</div>
                ) : (
                    notifications.map(section => (
                    <div className="notifications-section" key={section.title}>
                        <h3 className="section-header">{section.title}</h3>
                        <div className="notifications-list">
                            {section.items.map(item => (
                                <div className={`notification-card ${item.isUnread ? 'unread' : ''}`} key={item.id}>
                                    <div className="card-icon-wrapper">
                                        <div className={`icon-circle bg-${item.type}`}>
                                            {item.icon}
                                        </div>
                                        {item.isUnread && <span className="blue-dot"></span>}
                                    </div>

                                    <div className="card-content">
                                        <div className="card-header">
                                            <h4 className="card-title">{item.title}</h4>
                                            {item.tags && item.tags.map(tag => (
                                                <span className="tag-urgent" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <p className="card-desc">{item.desc}</p>
                                        <span className="card-time">{item.time}</span>

                                        {item.actions.length > 0 && (
                                            <div className="card-actions">
                                                {item.actions.map(action => (
                                                    <button
                                                        className={`action-btn ${action.primary ? 'btn-primary' : 'btn-secondary'} ${item.type === 'alert' ? 'btn-alert-light' : ''}`}
                                                        key={action.label}
                                                    >
                                                        {action.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    ))
                )}

                <div className="load-more-container">
                    <button className="load-more-btn">Load older notifications</button>
                </div>
            </div>
        </div>
    );
};

export default HRNotifications;
