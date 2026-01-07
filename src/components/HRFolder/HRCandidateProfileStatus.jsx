import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HRHeader from './HRHeader';
import './HRCandidateProfileStatus.css';
import axios from 'axios';

/* ===== ENUM ↔ LABEL MAPS (REQUIRED FIX) ===== */
const STATUS_LABEL_TO_ENUM = {
    'New Applicant': 'APPLIED',
    'Shortlisted': 'SHORTLISTED',
    'Interviewing': 'INTERVIEWING',
    'Offer Sent': 'OFFER_SENT',
    'Rejected': 'REJECTED',
    'Hired': 'HIRED'
};

const STATUS_ENUM_TO_LABEL = {
    APPLIED: 'New Applicant',
    SHORTLISTED: 'Shortlisted',
    INTERVIEWING: 'Interviewing',
    OFFER_SENT: 'Offer Sent',
    REJECTED: 'Rejected',
    HIRED: 'Hired'
};

const HRCandidateProfileStatus = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [workflowStatus, setWorkflowStatus] = useState('');

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/candidates/${id}`);
                setWorkflowStatus(
                    STATUS_ENUM_TO_LABEL[res.data.application_status] || 'New Applicant'
                );
            } catch (err) {
                console.error(err);
            }
        };
        fetchStatus();
    }, [id]);

    const updateStatus = async (e) => {
        const labelStatus = e.target.value;
        const enumStatus = STATUS_LABEL_TO_ENUM[labelStatus];

        try {
            await axios.put(
                `http://localhost:5000/api/candidates/${id}/status`,
                { status: enumStatus }
            );
            setWorkflowStatus(labelStatus);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="hr-candidate-status-page">
            <HRHeader />
            <div className="hr-status-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back
                </button>

                <h2>Candidate Status</h2>

                <div>
                    <label>Current Status:</label>
                    <select value={workflowStatus} onChange={updateStatus}>
                        <option value="New Applicant">New Applicant</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Offer Sent">Offer Sent</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Hired">Hired</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HRCandidateProfileStatus;
