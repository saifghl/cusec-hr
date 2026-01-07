import React, { useState, useEffect } from 'react';
import HRHeader from './HRHeader';
import { useNavigate, useParams } from 'react-router-dom';
import './HREmployeeQueryDetail.css';
import {
    getQueryById,
    getQueryMessages,
    sendReply,
    updateQueryStatus,
    addQueryNote,
    getQueryNotes,
    assignQuery,
    getQueryActivity
} from '../../services/api';

const HREmployeeQueryDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('reply');
    const [query, setQuery] = useState(null);
    const [messages, setMessages] = useState([]);
    const [notes, setNotes] = useState([]);
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [replyMessage, setReplyMessage] = useState('');
    const [noteText, setNoteText] = useState('');
    const [sendViaEmail, setSendViaEmail] = useState(true);
    const [sendWhatsapp, setSendWhatsapp] = useState(false);
    const [currentStatus, setCurrentStatus] = useState('');

    // Icons
    const ChevronDown = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>;
    const MoreHorizontal = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>;
    const ExpandIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>;
    const PaperclipIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>;
    const DownloadIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
    const LockIcon = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
    const UserPlusIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>;
    const AlertTriangleIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
    const MailIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
    const SendIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

    // Fetch query data
    useEffect(() => {
        if (id) {
            fetchQueryData();
        }
    }, [id]);

    const fetchQueryData = async () => {
        try {
            setLoading(true);
            const [queryRes, messagesRes, notesRes, activityRes] = await Promise.all([
                getQueryById(id),
                getQueryMessages(id),
                getQueryNotes(id),
                getQueryActivity(id)
            ]);

            setQuery(queryRes.data);
            setCurrentStatus(queryRes.data.status);
            setMessages(messagesRes.data);
            setNotes(notesRes.data);
            setActivity(activityRes.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching query data:', error);
            setLoading(false);
        }
    };

    const formatDateTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
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
        if (status === 'NEW') return 'new';
        if (status === 'IN_PROGRESS') return 'in-progress';
        if (status === 'FOLLOW_UP') return 'follow-up';
        if (status === 'RESOLVED') return 'resolved';
        return '';
    };

    const handleStatusChange = async (newStatus) => {
        try {
            await updateQueryStatus(id, newStatus);
            setCurrentStatus(newStatus);
            setQuery(prev => ({ ...prev, status: newStatus }));
            fetchQueryData(); // Refresh data
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Error updating status');
        }
    };

    const handleSendReply = async () => {
        if (!replyMessage.trim()) {
            alert('Please enter a message');
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            await sendReply(id, {
                message: replyMessage,
                sender_name: user.name || 'HR User',
                sender_email: user.email || 'hr@example.com',
                send_via_email: sendViaEmail,
                send_whatsapp: sendWhatsapp
            });

            setReplyMessage('');
            fetchQueryData(); // Refresh messages
            alert('Reply sent successfully');
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Error sending reply');
        }
    };

    const handleAddNote = async () => {
        if (!noteText.trim()) {
            alert('Please enter a note');
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            await addQueryNote(id, noteText, user.id || 1);
            setNoteText('');
            fetchQueryData(); // Refresh notes
            alert('Note added successfully');
        } catch (error) {
            console.error('Error adding note:', error);
            alert('Error adding note');
        }
    };

    const handleAssignQuery = async () => {
        const userId = prompt('Enter user ID to assign query to:');
        if (userId) {
            try {
                await assignQuery(id, parseInt(userId));
                fetchQueryData();
                alert('Query assigned successfully');
            } catch (error) {
                console.error('Error assigning query:', error);
                alert('Error assigning query');
            }
        }
    };

    const handleDownloadAttachment = (filePath, fileName) => {
        // In a real app, you'd fetch the file from the server
        window.open(`http://localhost:5000/${filePath}`, '_blank');
    };

    if (loading) {
        return (
            <div className="hr-query-detail-page">
                <HRHeader />
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading query details...</div>
            </div>
        );
    }

    if (!query) {
        return (
            <div className="hr-query-detail-page">
                <HRHeader />
                <div style={{ padding: '2rem', textAlign: 'center' }}>Query not found</div>
            </div>
        );
    }

    // Get the first message (candidate's initial message)
    const initialMessage = messages.find(m => m.sender_type === 'CANDIDATE') || messages[0];

    return (
        <div className="hr-query-detail-page">
            <HRHeader />
            <div className="hr-query-detail-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back to Queries
                </button>

                {/* Page Header */}
                <div className="detail-header">
                    <div className="detail-title-block">
                        <h1 className="detail-title">Query #{query.query_number}: {query.subject}</h1>
                        <div className="detail-meta">
                            <span className="meta-icon">💼</span>
                            <span className="meta-text">
                                {query.name} | {query.query_type}
                                {query.related_job_title && (
                                    <span> | Applied for: <span className="highlight">{query.related_job_title}</span></span>
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="detail-actions">
                        <div className={`status-badge-large ${getStatusClass(currentStatus)}`}>
                            <span className="status-dot"></span>
                            {getStatusDisplay(currentStatus)}
                            <select
                                value={currentStatus}
                                onChange={(e) => handleStatusChange(e.target.value)}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                    marginLeft: '8px'
                                }}
                            >
                                <option value="NEW">New</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="FOLLOW_UP">Follow-up</option>
                                <option value="RESOLVED">Resolved</option>
                            </select>
                        </div>
                        <button className="more-btn">
                            <MoreHorizontal />
                        </button>
                    </div>
                </div>

                <div className="detail-grid">
                    {/* Left Column */}
                    <div className="detail-left-col">
                        {/* Message Card */}
                        {initialMessage && (
                            <div className="message-card">
                                <div className="message-header">
                                    <div className="sender-info">
                                        <div className="sender-avatar" style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#e0e0e0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#666',
                                            fontSize: '18px',
                                            fontWeight: 'bold'
                                        }}>
                                            {query.name ? query.name.charAt(0).toUpperCase() : '?'}
                                        </div>
                                        <div className="sender-details">
                                            <h3 className="sender-name">{query.name}</h3>
                                            <p className="sender-email">{query.email}</p>
                                        </div>
                                    </div>
                                    <span className="message-date">{formatDateTime(initialMessage.created_at)}</span>
                                </div>

                                <div className="message-content">
                                    <h4 className="message-subject">Subject: {query.subject}</h4>
                                    <div className="message-body">
                                        <p>{query.message}</p>
                                    </div>
                                </div>

                                {initialMessage.attachments && initialMessage.attachments.length > 0 && (
                                    <div className="attachments-section">
                                        <h5 className="attachments-title"><PaperclipIcon /> Attachments ({initialMessage.attachments.length})</h5>
                                        <div className="attachments-list">
                                            {initialMessage.attachments.map((att, idx) => (
                                                <div key={idx} className="attachment-item">
                                                    <div className={`file-icon ${att.type.toLowerCase()}`}>{att.type}</div>
                                                    <div className="file-info">
                                                        <span className="file-name">{att.name}</span>
                                                        <span className="file-size">File</span>
                                                    </div>
                                                    <button 
                                                        className="download-btn"
                                                        onClick={() => handleDownloadAttachment(att.path, att.name)}
                                                    >
                                                        <DownloadIcon />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Activity History */}
                        <div className="activity-history-section">
                            <h3 className="section-title">Activity History</h3>
                            <div className="timeline">
                                {activity.map((act, idx) => (
                                    <div key={idx} className="timeline-item">
                                        <div className={`timeline-icon ${act.sender_type === 'CANDIDATE' ? 'blue-mail' : 'yellow-note'}`}>
                                            {act.sender_type === 'CANDIDATE' ? <MailIcon /> : '📝'}
                                        </div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <span className="timeline-title">{act.description}</span>
                                                <span className="timeline-time">{formatDate(act.created_at)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {activity.length === 0 && (
                                    <div style={{ padding: '1rem', color: '#666' }}>No activity recorded</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="detail-right-col">
                        {/* Reply Card */}
                        <div className="reply-card">
                            <div className="reply-tabs">
                                <button
                                    className={`reply-tab ${activeTab === 'reply' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('reply')}
                                >
                                    Reply
                                </button>
                                <button
                                    className={`reply-tab ${activeTab === 'note' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('note')}
                                >
                                    Note
                                </button>
                            </div>

                            {activeTab === 'reply' ? (
                                <div className="reply-body">
                                    <div className="reply-recipient-row">
                                        <span className="recipient-label">REPLY TO Candidates</span>
                                        <button className="expand-btn"><ExpandIcon /></button>
                                    </div>
                                    <div className="editor-toolbar">
                                        <button className="tool-btn bold">B</button>
                                        <button className="tool-btn italic">I</button>
                                        <button className="tool-btn underline">U</button>
                                        <button className="tool-btn list">☰</button>
                                    </div>
                                    <textarea
                                        className="reply-textarea"
                                        placeholder="Type your response here..."
                                        rows="10"
                                        value={replyMessage}
                                        onChange={(e) => setReplyMessage(e.target.value)}
                                    ></textarea>

                                    <div className="reply-options">
                                        <label className="checkbox-option">
                                            <input
                                                type="checkbox"
                                                checked={sendViaEmail}
                                                onChange={(e) => setSendViaEmail(e.target.checked)}
                                            />
                                            Send Via email
                                        </label>
                                        <label className="checkbox-option">
                                            <input
                                                type="checkbox"
                                                checked={sendWhatsapp}
                                                onChange={(e) => setSendWhatsapp(e.target.checked)}
                                            />
                                            Send Whatsapp
                                        </label>
                                    </div>

                                    <div className="reply-actions">
                                        <button className="btn-draft">Save Draft</button>
                                        <button className="btn-send" onClick={handleSendReply}>
                                            Send Reply <SendIcon />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="reply-body">
                                    <div className="note-input-wrapper">
                                        <textarea
                                            className="note-textarea"
                                            placeholder="Add a quick note..."
                                            rows="8"
                                            value={noteText}
                                            onChange={(e) => setNoteText(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="reply-actions">
                                        <button className="btn-send" onClick={handleAddNote}>
                                            Add Note
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Recruiter Note */}
                        <div className="recruiter-note-card">
                            <div className="note-card-header">
                                <span className="note-title"><LockIcon /> Recruiter Note</span>
                                <span className="note-badge">Internal Only</span>
                            </div>
                            <div className="note-input-wrapper">
                                <span className="globe-icon">🌐</span>
                                <input
                                    type="text"
                                    placeholder="Add a quick note..."
                                    className="note-input"
                                    value={noteText}
                                    onChange={(e) => setNoteText(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleAddNote();
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions-card">
                            <h4 className="qa-title">Quick Actions</h4>
                            <div className="qa-list">
                                <button className="qa-btn" onClick={handleAssignQuery}>
                                    <UserPlusIcon /> Assign to Recruiter
                                </button>
                                <button className="qa-btn">
                                    <AlertTriangleIcon /> Escalate Hiring Manager
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HREmployeeQueryDetail;
