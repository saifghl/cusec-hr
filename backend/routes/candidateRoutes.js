const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const upload = require('../middleware/upload'); // make sure this exists

// GET all candidates
router.get('/', candidateController.getCandidates);

// POST: Add new candidate
router.post('/', upload.single('resume'), candidateController.addCandidate);
// GET /api/candidates/:id
router.get('/:id', candidateController.getCandidateById);
// Candidate Notes
router.get('/:id/notes', candidateController.getCandidateNotes);
router.post('/:id/notes', candidateController.addCandidateNote);

// Candidate Emails
router.get('/:id/emails', candidateController.getCandidateEmails);

// Candidate Status
router.put('/:id/status', candidateController.updateCandidateStatus);

module.exports = router;
