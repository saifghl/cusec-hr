import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRProfileSecurity.css';

const HRProfileSecurity = () => {
    const navigate = useNavigate();

    // Icons
    const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const PhoneIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    const LinkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
    const IdCardIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><path d="M8 2h8"></path><path d="M8 18h8"></path></svg>;
    const MapPinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    const LogOutIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;

    return (
        <div className="hr-profile-security-page">
            <HRHeader />
            <div className="hr-profile-content">

                <div className="profile-page-header">
                    <h1 className="main-title">My Profile</h1>
                    <p className="main-subtitle">Manage your personal information and security settings.</p>
                </div>

                <div className="profile-grid">
                    {/* Sidebar */}
                    <div className="profile-sidebar-card">
                        <div className="profile-avatar-section">
                            <div className="avatar-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                    alt="Sarah Jenkins"
                                    className="profile-avatar"
                                />
                            </div>
                            <h2 className="profile-name">Sarah Jenkins</h2>
                            <p className="profile-role">Senior HR Manager</p>
                        </div>

                        <div className="profile-divider"></div>

                        <div className="contact-info-list">
                            <div className="contact-item">
                                <span className="contact-icon"><MailIcon /></span>
                                <span className="contact-text">sarah.j@example.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><PhoneIcon /></span>
                                <span className="contact-text">(555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><LinkIcon /></span>
                                <span className="contact-text">linkedin.com/in/sarahj</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><IdCardIcon /></span>
                                <span className="contact-text">ID: 482910</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><MapPinIcon /></span>
                                <span className="contact-text">New York, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="profile-main-card">

                        {/* Tabs */}
                        <div className="profile-tabs">
                            <NavLink to="/hr-profile" className={({ isActive }) => `tab-link`}>
                                General Info
                            </NavLink>
                            <NavLink to="/hr-profile-security" className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}>
                                Security
                            </NavLink>
                            <NavLink to="/hr-preferences" className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}>
                                Preferences
                            </NavLink>
                        </div>

                        {/* Form Content */}
                        <div className="profile-form-content">

                            <div className="form-section">
                                <h3 className="section-title">Security</h3>
                                <div className="section-subtitle">Change Password</div>

                                <div className="form-grid-security">
                                    <div className="form-group-security full-width">
                                        <label>Current Password</label>
                                        <input type="password" placeholder="e.g. abc" />
                                    </div>
                                    <div className="form-group-security">
                                        <label>New Password</label>
                                        <input type="password" placeholder="e.g. abc" />
                                    </div>
                                    <div className="form-group-security">
                                        <label>Confirm Password</label>
                                        <input type="password" placeholder="e.g. abc" />
                                    </div>
                                </div>
                                <p className="helper-text">Minimum 8 characters with a symbol.</p>

                                <div className="security-row">
                                    <div className="security-info">
                                        <h4>Two-Factor Authentication</h4>
                                        <p>Add an extra layer of security to your account.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                <div className="security-row">
                                    <div className="security-info">
                                        <h4>Active Sessions</h4>
                                        <p>Log out of all other active sessions on other devices.</p>
                                    </div>
                                    <button className="logout-all-btn" onClick={() => navigate('/hr-logout')}>
                                        <LogOutIcon /> Log Out All
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="profile-footer">
                            <button className="btn-cancel" onClick={() => navigate(-1)}>Cancle</button>
                            <button className="btn-save">Save Changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRProfileSecurity;
