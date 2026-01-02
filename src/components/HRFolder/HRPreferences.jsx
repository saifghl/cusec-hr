import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRPreferences.css';
import './HRProfile.css'; // Reusing layout styles from Profile

const HRPreferences = () => {
    const navigate = useNavigate();

    // Icons reuse
    const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const PhoneIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    const LinkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
    const IdCardIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><path d="M8 2h8"></path><path d="M8 18h8"></path></svg>;
    const MapPinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

    return (
        <div className="hr-preferences-page">
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
                            <NavLink to="/hr-profile-security" className={({ isActive }) => `tab-link`}>
                                Security
                            </NavLink>
                            <NavLink to="/hr-preferences" className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}>
                                Preferences
                            </NavLink>
                        </div>

                        {/* Preferences Content */}
                        <div className="profile-form-content">

                            {/* Notifications */}
                            <div className="settings-card">
                                <div className="settings-card-header">
                                    <h3 className="settings-card-title">Notifications</h3>
                                    <p className="settings-card-subtitle">Manage how you receive updates and alerts.</p>
                                </div>
                                <div className="notifications-grid">
                                    <div className="notification-column">
                                        <h4>Email Notifications</h4>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>New job assignments</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>Candidate application updates</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" />
                                            <label>System announcements</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" />
                                            <label>Marketing & promotional emails</label>
                                        </div>
                                    </div>
                                    <div className="notification-column">
                                        <h4>In-App Notifications</h4>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>New messages</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>Task reminders</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>Status changes</label>
                                        </div>
                                        <div className="notification-item">
                                            <input type="checkbox" className="custom-checkbox" defaultChecked />
                                            <label>Security alerts</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '16px', fontSize: '12px', color: '#9CA3AF' }}>You can change these settings anytime.</div>
                            </div>

                            {/* Language & Region */}
                            <div className="settings-card">
                                <div className="settings-card-header">
                                    <h3 className="settings-card-title">Language & Region</h3>
                                </div>
                                <div className="settings-grid-2-col">
                                    <div className="settings-field">
                                        <label>Language</label>
                                        <select className="settings-select">
                                            <option>English (US)</option>
                                            <option>English (UK)</option>
                                        </select>
                                    </div>
                                    <div className="settings-field">
                                        <label>Time Zone</label>
                                        <select className="settings-select">
                                            <option>Auto detect (GMT-5)</option>
                                        </select>
                                    </div>
                                    <div className="settings-field">
                                        <label>Date Format</label>
                                        <select className="settings-select">
                                            <option>dd/mm/yyyy</option>
                                            <option>mm/dd/yyyy</option>
                                        </select>
                                    </div>
                                    <div className="settings-field">
                                        <label>Time Format</label>
                                        <div className="radio-group-horizontal" style={{ marginTop: '10px' }}>
                                            <div className="radio-item">
                                                <input type="radio" name="timefmt" className="custom-radio" />
                                                <span>12-hour</span>
                                            </div>
                                            <div className="radio-item">
                                                <input type="radio" name="timefmt" className="custom-radio" defaultChecked />
                                                <span>24-hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appearance */}
                            <div className="settings-card">
                                <div className="settings-card-header">
                                    <h3 className="settings-card-title">Appearance</h3>
                                </div>

                                <span className="section-label">Theme</span>
                                <div className="theme-options">
                                    <div className="theme-card active">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                        <span>Light (Default)</span>
                                    </div>
                                    <div className="theme-card">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                        <span>Dark</span>
                                    </div>
                                    <div className="theme-card">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        <span>System Default</span>
                                    </div>
                                </div>

                                <div className="settings-grid-2-col">
                                    <div>
                                        <span className="section-label">Font Size</span>
                                        <div className="radio-group-horizontal">
                                            <div className="radio-item">
                                                <input type="radio" name="fontsz" className="custom-radio" />
                                                <span>Small</span>
                                            </div>
                                            <div className="radio-item">
                                                <input type="radio" name="fontsz" className="custom-radio" defaultChecked />
                                                <span>Medium (Default)</span>
                                            </div>
                                            <div className="radio-item">
                                                <input type="radio" name="fontsz" className="custom-radio" />
                                                <span>Large</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="section-label">Layout Density</span>
                                        <div className="radio-group-horizontal">
                                            <div className="radio-item">
                                                <input type="radio" name="density" className="custom-radio" />
                                                <span>Compact</span>
                                            </div>
                                            <div className="radio-item">
                                                <input type="radio" name="density" className="custom-radio" defaultChecked />
                                                <span>Comfortable (Default)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accessibility & Default Settings Grid */}
                            <div className="settings-grid-2-col">
                                <div className="settings-card">
                                    <div className="settings-card-header">
                                        <h3 className="settings-card-title">Accessibility</h3>
                                        <p className="settings-card-subtitle">These settings improve usability and accessibility.</p>
                                    </div>
                                    <div className="accessibility-list">
                                        <div className="radio-item">
                                            <input type="checkbox" className="custom-radio" style={{ borderRadius: '50%' }} />
                                            <span>High contrast mode</span>
                                        </div>
                                        <div className="radio-item">
                                            <input type="checkbox" className="custom-radio" style={{ borderRadius: '50%' }} />
                                            <span>Reduce animations</span>
                                        </div>
                                        <div className="radio-item">
                                            <input type="checkbox" className="custom-radio" style={{ borderRadius: '50%' }} />
                                            <span>Enable screen reader support</span>
                                        </div>
                                        <div className="radio-item">
                                            <input type="checkbox" className="custom-radio" style={{ borderRadius: '50%' }} />
                                            <span>Larger clickable areas</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="settings-card">
                                    <div className="settings-card-header">
                                        <h3 className="settings-card-title">Default Settings</h3>
                                    </div>
                                    <div className="settings-field" style={{ marginBottom: '16px' }}>
                                        <label>Default landing page</label>
                                        <select className="settings-select">
                                            <option>Dashboard</option>
                                        </select>
                                    </div>
                                    <div className="settings-field" style={{ marginBottom: '16px' }}>
                                        <label>Default list view</label>
                                        <select className="settings-select">
                                            <option>List</option>
                                        </select>
                                    </div>
                                    <div className="settings-toggle-row">
                                        <span className="settings-toggle-label">Remember filters</span>
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="settings-toggle-row">
                                        <span className="settings-toggle-label">Auto-refresh data</span>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="profile-footer">
                            <button className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
                            <button className="btn-save">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRPreferences;
