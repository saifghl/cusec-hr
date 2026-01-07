const pool = require('../config/db');

// GET /api/candidates
exports.getCandidates = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        c.candidate_id,
        c.full_name,
        c.email,
        c.phone,
        c.applied_date,
        ca.application_status,
        j.job_title,
        j.department
      FROM candidates c
      LEFT JOIN candidate_applications ca ON c.candidate_id = ca.candidate_id
      LEFT JOIN jobs j ON ca.job_id = j.job_id
      ORDER BY c.applied_date DESC
    `);

    res.json(rows);
  } catch (err) {
    console.error('Error fetching candidates:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
// POST /api/candidates
// ... (rest of the file remains the same)

// POST /api/candidates
exports.addCandidate = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      job_id,
      linkedin
    } = req.body;

    // Define resumePath correctly
    const resumePath = `uploads/resumes/${req.file.filename}`;

    // 1️⃣ Insert candidate (use resumePath, not undefined resume_url)
    const [candidateResult] = await pool.query(
      `INSERT INTO candidates
      (full_name, email, phone, linkedin, resume_url)
      VALUES (?, ?, ?, ?, ?)`,
      [full_name, email, phone, linkedin, resumePath]  // Fixed: use resumePath
    );

    const candidate_id = candidateResult.insertId;

    // 2️⃣ Insert candidate application
    await pool.query(
      `INSERT INTO candidate_applications
      (candidate_id, job_id, application_status)
      VALUES (?, ?, 'APPLIED')`,
      [candidate_id, job_id]
    );

    res.json({ message: 'Candidate added successfully', candidate_id });
  } catch (err) {
    console.error('Error adding candidate:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ... (rest of the file remains the same)
// GET /api/candidates/:id
exports.getCandidateById = async (req, res) => {
  try {
    const candidate_id = req.params.id;

    // Candidate info
    const [candidateRows] = await pool.query(
      `SELECT c.candidate_id, c.full_name, c.email, c.phone, c.linkedin, c.resume_url,
              ca.application_status, j.job_title, j.department
       FROM candidates c
       LEFT JOIN candidate_applications ca ON c.candidate_id = ca.candidate_id
       LEFT JOIN jobs j ON ca.job_id = j.job_id
       WHERE c.candidate_id = ?`,
      [candidate_id]
    );

    if (candidateRows.length === 0) return res.status(404).json({ message: 'Candidate not found' });

    res.json(candidateRows[0]);
  } catch (err) {
    console.error('Error fetching candidate:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
// GET /api/candidates/:id/notes
exports.getCandidateNotes = async (req, res) => {
  try {
    const candidate_id = req.params.id;
    const [notes] = await pool.query(
      `SELECT cn.note_id, cn.note, cn.created_at, u.full_name AS created_by
       FROM candidate_notes cn
       LEFT JOIN users u ON cn.created_by = u.user_id
       WHERE cn.candidate_id = ?
       ORDER BY cn.created_at DESC`,
      [candidate_id]
    );
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/candidates/:id/notes

exports.addCandidateNote = async (req, res) => {
  try {
    const candidate_id = req.params.id;
    const { note } = req.body;

    // Use valid HR admin user_id (replace 1 with actual logged-in user id)
    const created_by = 1;

    const [result] = await pool.query(
      `INSERT INTO candidate_notes (candidate_id, note, created_by) VALUES (?, ?, ?)`,
      [candidate_id, note, created_by]
    );

    res.json({ message: 'Note added', note_id: result.insertId });
  } catch (err) {
    console.error('Error adding candidate note:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// candidateController.js
exports.getCandidateEmails = async (req, res) => {
  try {
    const candidateId = req.params.id;

    // Fetch candidate email first
    const [candidateRows] = await pool.query(
      'SELECT email FROM candidates WHERE candidate_id = ?',
      [candidateId]
    );

    if (candidateRows.length === 0) return res.status(404).json({ message: 'Candidate not found' });

    const candidateEmail = candidateRows[0].email;

    // Fetch emails for candidate by email
    const [emails] = await pool.query(
      `
      SELECT 
          qm.message_id,
          qm.query_id,
          qm.sender_type,
          qm.sender_name,
          qm.sender_email,
          qm.message AS body,
          qm.created_at,
          q.subject
      FROM query_messages qm
      INNER JOIN queries q ON qm.query_id = q.query_id
      WHERE q.email = ?
      ORDER BY qm.created_at DESC
      `,
      [candidateEmail]
    );

    res.json(emails);
  } catch (err) {
    console.error('Error fetching emails:', err);
    res.status(500).json({ message: 'Server error fetching emails' });
  }
};


exports.updateCandidateStatus = async (req, res) => {
  try {
    const candidate_id = req.params.id;
    const { status } = req.body;

    const ALLOWED_STATUSES = [
      'APPLIED',
      'SHORTLISTED',
      'INTERVIEWING',
      'OFFER_SENT',
      'REJECTED',
      'HIRED'
    ];

    if (!ALLOWED_STATUSES.includes(status)) {
      return res.status(400).json({ message: 'Invalid application status' });
    }

    await pool.query(
      `UPDATE candidate_applications 
       SET application_status = ?
       WHERE candidate_id = ?`,
      [status, candidate_id]
    );

    res.json({ message: 'Status updated successfully' });
  } catch (err) {
    console.error('Status update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


