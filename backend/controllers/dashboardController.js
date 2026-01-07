const pool = require("../config/db");

exports.getHrDashboard = async (req, res) => {
  try {
    /* =========================
       ACTIVE JOBS
    ========================= */
    const [[activeJobs]] = await pool.query(
      "SELECT COUNT(*) AS total FROM jobs WHERE status = 'ACTIVE'"
    );

    /* =========================
       TOTAL APPLICANTS
    ========================= */
    const [[totalApplicants]] = await pool.query(
      "SELECT COUNT(*) AS total FROM candidate_applications"
    );

    /* =========================
       NEW QUERIES
    ========================= */
    const [[newQueries]] = await pool.query(
      "SELECT COUNT(*) AS total FROM queries WHERE status = 'NEW'"
    );

    /* =========================
       INTERVIEWS TODAY
       (DB has no interview_date)
    ========================= */
    const [[interviews]] = await pool.query(
      "SELECT COUNT(*) AS total FROM candidate_applications WHERE application_status = 'INTERVIEWING'"
    );

    /* =========================
       RECENT ACTIVITY
    ========================= */
    const [recentActivity] = await pool.query(`
      (
        SELECT 
          CONCAT(c.full_name, ' applied for ', j.job_title) AS activity,
          ca.application_status AS type,
          NOW() AS time
        FROM candidate_applications ca
        JOIN candidates c ON c.candidate_id = ca.candidate_id
        JOIN jobs j ON j.job_id = ca.job_id
        ORDER BY ca.application_id DESC
        LIMIT 3
      )
      UNION ALL
      (
        SELECT 
          CONCAT('New query: ', subject) AS activity,
          status AS type,
          submitted_at AS time
        FROM queries
        ORDER BY query_id DESC
        LIMIT 2
      )
      ORDER BY time DESC
      LIMIT 5
    `);

    res.json({
      activeJobs: activeJobs.total,
      totalApplicants: totalApplicants.total,
      newQueries: newQueries.total,
      interviewsToday: interviews.total,
      recentActivity
    });

  } catch (err) {
    console.error("Dashboard Error:", err);
    res.status(500).json({ message: "Dashboard data fetch failed" });
  }
};
