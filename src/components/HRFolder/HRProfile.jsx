import React, { useState, useEffect } from 'react';
import HRHeader from './HRHeader';
import { useNavigate, NavLink } from 'react-router-dom';
import './HRProfile.css';
import { fetchProfile, updateProfile } from '../../services/api';

const HRProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        job_title: '',
        department: '',
        work_email: '',
        phone_number: '',
        employee_id: '',
        location: '',
        linkedin_url: ''
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user.user_id || 1;
            const response = await fetchProfile(userId);
            const data = response.data;
            
            setProfile({
                first_name: data.first_name || '',
                last_name: data.last_name || '',
                job_title: data.job_title || '',
                department: data.department || '',
                work_email: data.work_email || data.personal_email || '',
                phone_number: data.phone_number || '',
                employee_id: data.employee_id || '',
                location: data.location || '',
                linkedin_url: data.linkedin_url || ''
            });
        } catch (error) {
            console.error('Error loading profile:', error);
            alert('Failed to load profile');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user.user_id || 1;
            await updateProfile(userId, profile);
            alert('Profile updated successfully!');
            loadProfile();
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    // Icons
    const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const PhoneIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    const LinkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
    const IdCardIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><path d="M8 2h8"></path><path d="M8 18h8"></path></svg>;
    const MapPinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

    return (
        <div className="hr-profile-page">
            <HRHeader />
            <div className="hr-profile-content">

                <div className="profile-page-header">
                    <h1 className="main-title">My Profile</h1>
                    <p className="main-subtitle">Manage your personal information and security settings.</p>
                </div>

                <div className="profile-grid">

                    {/* Left Column: Profile Card */}
                    <div className="profile-sidebar-card">
                        <div className="profile-avatar-section">
                            <div className="avatar-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                    alt="Sarah Jenkins"
                                    className="profile-avatar"
                                />
                            </div>
                            <h2 className="profile-name">{profile.first_name} {profile.last_name}</h2>
                            <p className="profile-role">{profile.job_title || 'HR Manager'}</p>
                        </div>

                        <div className="profile-divider"></div>

                        <div className="contact-info-list">
                            <div className="contact-item">
                                <span className="contact-icon"><MailIcon /></span>
                                <span className="contact-text">{profile.work_email || 'N/A'}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><PhoneIcon /></span>
                                <span className="contact-text">{profile.phone_number || 'N/A'}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><LinkIcon /></span>
                                <span className="contact-text">{profile.linkedin_url || 'N/A'}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><IdCardIcon /></span>
                                <span className="contact-text">ID: {profile.employee_id || 'N/A'}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><MapPinIcon /></span>
                                <span className="contact-text">{profile.location || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Settings */}
                    <div className="profile-main-card">

                        {/* Tabs */}
                        <div className="profile-tabs">
                            <NavLink to="/hr-profile" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>
                                General Info
                            </NavLink>
                            <NavLink to="/hr-profile-security" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>
                                Security
                            </NavLink>
                            <NavLink to="/hr-preferences" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>
                                Preferences
                            </NavLink>
                        </div>

                        {/* Form Content */}
                        <div className="profile-form-content">

                            {/* Personal Details Section */}
                            <div className="form-section">
                                <div className="section-header">
                                    <h3 className="section-title">Personal Details</h3>
                                    <button className="edit-link">Edit Info</button>
                                </div>

                                {loading ? (
                                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
                                ) : (
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>First Name:</label>
                                            <input 
                                                type="text" 
                                                value={profile.first_name}
                                                onChange={(e) => handleChange('first_name', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name:</label>
                                            <input 
                                                type="text" 
                                                value={profile.last_name}
                                                onChange={(e) => handleChange('last_name', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Job Title:</label>
                                            <input 
                                                type="text" 
                                                value={profile.job_title}
                                                onChange={(e) => handleChange('job_title', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Department:</label>
                                            <input 
                                                type="text" 
                                                value={profile.department}
                                                onChange={(e) => handleChange('department', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Work Email:</label>
                                            <div className="input-with-icon">
                                                <span className="input-icon">✉️</span>
                                                <input 
                                                    type="email" 
                                                    value={profile.work_email}
                                                    onChange={(e) => handleChange('work_email', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number:</label>
                                            <div className="input-with-icon">
                                                <span className="input-icon">📞</span>
                                                <input 
                                                    type="tel" 
                                                    value={profile.phone_number}
                                                    onChange={(e) => handleChange('phone_number', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Location:</label>
                                            <input 
                                                type="text" 
                                                value={profile.location}
                                                onChange={(e) => handleChange('location', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>LinkedIn URL:</label>
                                            <input 
                                                type="text" 
                                                value={profile.linkedin_url}
                                                onChange={(e) => handleChange('linkedin_url', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group full-width">
                                            <label>Employee ID:</label>
                                            <input 
                                                type="text" 
                                                value={profile.employee_id} 
                                                className="bg-light" 
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* Footer Actions */}
                        <div className="profile-footer">
                            <button className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
                            <button className="btn-save" onClick={handleSave} disabled={saving || loading}>
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRProfile;