import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateResume.css';

const HRCandidateResume = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const candidate = state?.candidate;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!candidate || !candidate.resume_url) {
    return <div>No resume available</div>;
  }

  const resumeUrl = `http://localhost:5000/${candidate.resume_url}`;

  const fileExt = candidate.resume_url.split('.').pop().toLowerCase();
  const isPDF = fileExt === 'pdf';

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError('Failed to load resume. Try downloading or refreshing.');
  };

  const reloadFrame = () => {
    setLoading(true);
    setError(null);
    // Force a reload by appending a timestamp
    window.location.reload();
  };

  return (
    <div className="hr-candidate-resume-page">
      <HRHeader />

      <div className="hr-resume-content">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="resume-viewer-container">
          <div className="resume-toolbar">
            <span className="resume-filename">{candidate.full_name}_Resume</span>
            <button className="download-resume-btn" onClick={() => window.open(resumeUrl, '_blank')}>
              Download
            </button>
            <button onClick={reloadFrame}>Reload Frame</button>  {/* For testing */}
          </div>

          {loading && <div>Loading resume...</div>}
          {error && <div style={{ color: 'red' }}>{error}</div>}

          {isPDF ? (
            <embed
              src={resumeUrl}
              type="application/pdf"
              width="100%"
              height="800px"
              onLoad={handleLoad}
              onError={handleError}
              style={{ border: 'none' }}
            />
          ) : (
            // Fallback for non-PDF: Use object tag or force download
            <object
              data={resumeUrl}
              type="application/pdf"  // Fallback; adjust for other types
              width="100%"
              height="800px"
              onLoad={handleLoad}
              onError={handleError}
              style={{ border: 'none' }}
            >
              <p>Your browser doesn't support embedded files. <a href={resumeUrl} target="_blank">Download here</a>.</p>
            </object>
          )}
        </div>
      </div>
    </div>
  );
};

export default HRCandidateResume;