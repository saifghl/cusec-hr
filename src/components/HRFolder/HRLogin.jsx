import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HRLogin.css';
// Note: In a real project w/ bundler, we might import the image. 
// For this environment, we'll assume the image is placed in public or handled via props/import.
// I will use a placeholder or local reference for now, and we can move the generated image to src/assets later.
// But first let's just use the style. 

const HRLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/hr-dashboard');
  };

  // Inline SVGs for icons to avoid external deps
  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon-right">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon-right">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="input-icon-left">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );

  const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="input-icon-left">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shield-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );

  const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg>
  )

  return (
    <div className="hr-login-page">
      {/* Top Header */}
      <header className="hr-login-header">
        <div className="support-link">
          <SupportIcon />
          <span>Support Centre</span>
        </div>
      </header>

      <div className="hr-login-container">
        {/* Left Panel - Form */}
        <div className="hr-login-left">
          <div className="hr-login-form-wrapper">
            <h1 className="welcome-title">Welcome Back</h1>
            <p className="welcome-subtitle">Please sign in to manage jobs and candidates.</p>

            <form className="hr-login-form">
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <MailIcon />
                  <input type="email" placeholder="name@company.com" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label>Password</label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                <div className="input-with-icon">
                  <LockIcon />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <button type="button" className="sign-in-btn" onClick={handleLogin}>
                <span>Sign In</span>
                <ArrowRightIcon />
              </button>
            </form>

            <p className="signup-prompt">
              Don't have an account? <a href="#" className="contact-admin">Contact HR Admin</a>
            </p>
          </div>
        </div>

        {/* Right Panel - Image & Info */}
        <div className="hr-login-right">
          <div className="overlay-content">
            <div className="shield-container">
              <ShieldIcon />
            </div>
            <h2 className="quote-text">
              "Streamline your recruitment process and manage talent efficiently in one secure place."
            </h2>
            <div className="portal-footer">
              <span className="dash-line"></span>
              <span>Secure Enterprise Portal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRLogin;
