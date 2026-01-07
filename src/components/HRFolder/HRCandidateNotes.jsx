import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HRHeader from './HRHeader';
import './HRCandidateNotes.css';

const HRCandidateNotes = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // candidate ID from URL
    const [selectedAction, setSelectedAction] = useState('schedule');
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [candidate, setCandidate] = useState(null); // <-- candidate info for sidebar

    // Fetch notes
    const fetchNotes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/candidates/${id}/notes`);
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // Fetch candidate info for sidebar
    const fetchCandidate = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/candidates/${id}`);
            setCandidate(res.data);
        } catch (err) {
            console.error('Error fetching candidate:', err);
        }
    };

    useEffect(() => {
        fetchNotes();
        fetchCandidate();
    }, [id]);

    // Add new note
    const handleSaveNote = async () => {
        try {
            await axios.post(`http://localhost:5000/api/candidates/${id}/notes`, {
                note: newNote,
                created_by: 1 // must match a valid user_id in your users table
            });
            setNewNote('');
            fetchNotes(); // refresh notes
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

    return (
        <div className="hr-candidate-profile-page">
            <HRHeader />
            <div className="hr-profile-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back
                </button>
                <div className="profile-layout">
                    {/* Left Sidebar - Profile Card */}
                    {candidate && (
                        <div className="profile-sidebar">
                            <div className="profile-card">
                                <div className="avatar-section">
                                    <div className="avatar-wrapper">
                                        <img
                                            src={`https://i.pravatar.cc/150?u=${candidate.candidate_id}`}
                                            alt={candidate.full_name}
                                            className="large-avatar"
                                        />
                                        <span className="online-status"></span>
                                    </div>
                                    <h2 className="profile-name">{candidate.full_name}</h2>
                                    <p className="profile-role">{candidate.job_title} Applicant</p>
                                    <span className="status-badge-pill">
                                        <span className="status-dot"></span> {candidate.application_status}
                                    </span>
                                </div>

                                <div className="contact-info-list">
                                    <div className="contact-item">
                                        <span>Email:</span> {candidate.email}
                                    </div>
                                    <div className="contact-item">
                                        <span>Phone:</span> {candidate.phone}
                                    </div>
                                    <div className="contact-item">
                                        <span>LinkedIn:</span> {candidate.linkedin}
                                    </div>
                                </div>

                                <div className="profile-actions">
                                    <button
                                        className={`action-btn ${selectedAction === 'schedule' ? 'btn-primary' : 'btn-outline'}`}
                                        onClick={() => setSelectedAction('schedule')}
                                    >
                                        Schedule Interview
                                    </button>
                                    <button
                                        className={`action-btn ${selectedAction === 'reject' ? 'btn-black' : 'btn-outline btn-reject'}`}
                                        onClick={() => setSelectedAction('reject')}
                                    >
                                        {selectedAction === 'reject' && <span className="btn-dots">...</span>} Reject Candidate
                                    </button>
                                    <button
                                        className="action-btn btn-outline"
                                        onClick={() => navigate(`/hr-candidate-status/${candidate.candidate_id}`)}
                                    >
                                        Candidate Profile Status
                                    </button>
                                    {candidate.resume_url && (
                                        <button
                                            className="btn-link-download"
                                            onClick={() => window.open(`http://localhost:5000/${candidate.resume_url}`, '_blank')}
                                        >
                                            Download Resume
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Right Content Area - Notes View */}
                    <div className="profile-main-content">
                        <div className="profile-tabs">
                            <button className="tab-btn" onClick={() => navigate(`/hr-candidate-profile/${id}`)}>Overview</button>
                            <button className="tab-btn" onClick={() => navigate(`/hr-candidate-resume/${id}`)}>Resume</button>
                            <button className="tab-btn active">Notes</button>
                            <button className="tab-btn" onClick={() => navigate(`/hr-candidate-emails/${id}`)}>Emails</button>
                        </div>

                        <div className="notes-tab-content">
                            <div className="add-note-card">
                                <h3 className="section-title" style={{ marginBottom: '16px' }}>Add a Note</h3>
                                <textarea
                                    className="note-textarea"
                                    placeholder="Write down your thoughts, interview feedback, or screening details..."
                                    rows="4"
                                    value={newNote}
                                    onChange={(e) => setNewNote(e.target.value)}
                                ></textarea>
                                <button className="save-note-btn" onClick={handleSaveNote}>Save Note</button>
                            </div>

                            <div className="past-notes-section">
                                <h3 className="section-title">Past Notes ({notes.length})</h3>
                                {notes.map((n) => (
                                    <div key={n.note_id} className="timeline-item">
                                        <div className="timeline-content">
                                            <div className="note-header">
                                                <span className="note-author">{n.created_by_name}</span>
                                                <span className="note-time">{new Date(n.created_at).toLocaleString()}</span>
                                            </div>
                                            <div className="note-body">{n.note}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRCandidateNotes;
