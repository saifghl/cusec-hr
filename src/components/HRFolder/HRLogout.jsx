import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HRLogout.css';

const HRLogout = () => {
    const navigate = useNavigate();

    // Icon
    const LogoutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    );

    const handleLogout = () => {
        // Perform logout logic here (clear tokens, etc.)
        navigate('/'); // Redirect to login/home
    };

    return (
        <div className="hr-logout-page">
            <div className="logout-card">
                <div className="icon-circle">
                    <LogoutIcon />
                </div>
                <h1 className="logout-title">Logout For Hr Portal</h1>
                <p className="logout-message">
                    You will be returned to the login screen.
                    <br />
                    Please ensure you have saved your work before proceeding.
                </p>
                <div className="logout-actions">
                    <button className="btn-cancel" onClick={() => navigate(-1)}>No, Cancel</button>
                    <button className="btn-logout" onClick={handleLogout}>Yes, Logout</button>
                </div>
            </div>
        </div>
    );
};

export default HRLogout;
