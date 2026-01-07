const pool = require("../config/db");


const formatDateForMySQL = (date) => {
    if (!date) return null;

    // If ISO string like 2026-01-15T18:30:00.000Z
    if (typeof date === "string" && date.includes("T")) {
        return date.split("T")[0];
    }

    // If already YYYY-MM-DD
    return date;
};


/* =========================
   CREATE JOB
========================= */
exports.createJob = async (req, res) => {
    const {
        job_title,
        department,
        job_type,
        job_description,
        additional_qualification,
        industry_experience,
        work_arrangement,
        city,
        country,
        min_salary,
        max_salary,
        salary_negotiable,
        salary_hidden,
        experience_level,
        application_deadline,
        scheduled_publish_date,
        target_closing_date
    } = req.body;

    // Basic validation
    if (!job_title || !job_type || !work_arrangement) {
        return res.status(400).json({ message: "Job title, type, and work arrangement are required" });
    }

    try {
        console.log("Inserting job with data:", {
            job_title, department, job_type, job_description, additional_qualification,
            industry_experience, work_arrangement, city, country, min_salary, max_salary,
            salary_negotiable, salary_hidden, experience_level, application_deadline,
            scheduled_publish_date, target_closing_date
        });

        await pool.query(
            `
            INSERT INTO jobs (
                job_title, department, job_type,
                job_description, additional_qualification, industry_experience,
                work_arrangement, city, country,
                min_salary, max_salary, salary_negotiable, salary_hidden,
                experience_level, application_deadline, scheduled_publish_date,
                target_closing_date, status, created_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                job_title,
                department,
                job_type,
                job_description,
                additional_qualification,
                industry_experience,
                work_arrangement,
                city,
                country,
                min_salary,
                max_salary,
                salary_negotiable ? 1 : 0,
                salary_hidden ? 1 : 0,
                experience_level,
                application_deadline,
                scheduled_publish_date,
                target_closing_date,
                'DRAFT',
                null
            ]
        );

        res.status(201).json({ message: "Job created successfully" });
    } catch (err) {
        console.error("CREATE JOB ERROR:", err);
        res.status(500).json({ message: "Failed to create job" });
    }
};

/* =========================
   GET ALL JOBS
========================= */
/* =========================
   GET ALL JOBS
========================= */
exports.getAllJobs = async (req, res) => {
  try {
    // First, check if candidate_applications table exists (optional, to avoid errors)
    let query = `
      SELECT 
        j.*,
        0 AS applicants  -- Default to 0 if no applications table
      FROM jobs j
      ORDER BY j.created_at DESC
    `;
    
    // If you have candidate_applications, uncomment and use this instead:
    // const [jobs] = await pool.query(`
    //   SELECT 
    //     j.*,
    //     COUNT(ca.application_id) AS applicants
    //   FROM jobs j
    //   LEFT JOIN candidate_applications ca 
    //     ON ca.job_id = j.job_id
    //   GROUP BY j.job_id
    //   ORDER BY j.created_at DESC
    // `);

    const [jobs] = await pool.query(query);
    res.json(jobs);
  } catch (err) {
    console.error("GET ALL JOBS ERROR:", err);  // More specific logging
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};

/* =========================
   GET SINGLE JOB
========================= */
exports.getJobById = async (req, res) => {
    const jobId = req.params.id;

    try {
        const [[job]] = await pool.query(
            "SELECT * FROM jobs WHERE job_id = ?",
            [jobId]
        );

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.json(job);
    } catch (err) {
        console.error("GET JOB BY ID ERROR:", err);
        res.status(500).json({ message: "Failed to fetch job" });
    }
};

/* =========================
   UPDATE JOB
========================= */
exports.updateJob = async (req, res) => {
    const jobId = req.params.id;
    let updates = { ...req.body };

    if (!jobId) {
        return res.status(400).json({ message: "Job ID is required" });
    }

    try {
        // Format DATE fields safely
        updates.application_deadline = formatDateForMySQL(updates.application_deadline);
        updates.scheduled_publish_date = formatDateForMySQL(updates.scheduled_publish_date);
        updates.target_closing_date = formatDateForMySQL(updates.target_closing_date);

        // Remove undefined values (VERY IMPORTANT)
        Object.keys(updates).forEach(
            (key) => updates[key] === undefined && delete updates[key]
        );

        const fields = Object.keys(updates);
        if (fields.length === 0) {
            return res.status(400).json({ message: "No valid updates provided" });
        }

        const values = Object.values(updates);
        const setClause = fields.map((field) => `${field} = ?`).join(", ");

        values.push(jobId);

        await pool.query(
            `UPDATE jobs SET ${setClause} WHERE job_id = ?`,
            values
        );

        res.json({ message: "Job updated successfully" });
    } catch (err) {
        console.error("UPDATE JOB ERROR:", err);
        res.status(500).json({ message: "Failed to update job" });
    }
};


/* =========================
   DELETE JOB
========================= */
exports.deleteJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        const [result] = await pool.query(
            "DELETE FROM jobs WHERE job_id = ?",
            [jobId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.json({ message: "Job deleted successfully" });
    } catch (err) {
        console.error("DELETE JOB ERROR:", err);
        res.status(500).json({ message: "Failed to delete job" });
    }
};

/* =========================
   CHANGE JOB STATUS
========================= */
exports.changeJobStatus = async (req, res) => {
    const jobId = req.params.id;
    const { status } = req.body;

    if (!status || !['DRAFT', 'ACTIVE', 'CLOSED', 'UNPUBLISHED'].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
    }

    try {
        await pool.query(
            "UPDATE jobs SET status = ? WHERE job_id = ?",
            [status, jobId]
        );

        res.json({ message: "Job status updated successfully" });
    } catch (err) {
        console.error("CHANGE JOB STATUS ERROR:", err);
        res.status(500).json({ message: "Failed to update job status" });
    }
};