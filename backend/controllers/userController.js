const db = require("../config/db");
const bcrypt = require("bcryptjs");

/* ===============================
   GET USER PROFILE
================================ */
exports.getProfile = (req, res) => {
  const userId = req.params.id;

  const sql = `
    SELECT 
      user_id, employee_id, first_name, last_name,
      job_title, department, role, work_email, personal_email,
      phone_number, location, linkedin_url, language, timezone,
      date_format, time_format, theme, font_size, layout_density,
      high_contrast, reduce_animations, screen_reader_support,
      larger_clickable_areas, default_landing_page, default_list_view,
      remember_filters, auto_refresh, email_notifications, in_app_notifications,
      notification_email, notification_sms, two_factor_enabled
    FROM users
    WHERE user_id = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error fetching profile:', err);
      return res.status(500).json({ error: 'Failed to fetch profile' });
    }
    
    if (!result || result.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result[0];
    
    // Parse JSON fields
    if (user.email_notifications) {
      try {
        user.email_notifications = JSON.parse(user.email_notifications);
      } catch (e) {
        user.email_notifications = {};
      }
    }
    if (user.in_app_notifications) {
      try {
        user.in_app_notifications = JSON.parse(user.in_app_notifications);
      } catch (e) {
        user.in_app_notifications = {};
      }
    }

    res.json(user);
  });
};

/* ===============================
   UPDATE PROFILE (GENERAL INFO)
================================ */
exports.updateProfile = (req, res) => {
  const userId = req.params.id;
  const data = req.body;

  const sql = `
    UPDATE users SET
      first_name=?, last_name=?,
      job_title=?, department=?, phone_number=?,
      location=?, linkedin_url=?, personal_email=?,
      updated_at=NOW()
    WHERE user_id=?
  `;

  const values = [
    data.first_name,
    data.last_name,
    `${data.first_name} ${data.last_name}`,
    data.job_title,
    data.department,
    data.phone_number,
    data.location,
    data.linkedin_url,
    data.personal_email,
    userId
  ];

  db.query(sql, values, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Profile updated successfully" });
  });
};

/* ===============================
   CHANGE PASSWORD
================================ */
exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const userId = req.params.id;

  // Validate new password
  if (!newPassword || newPassword.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters long" });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: "New password and confirm password do not match" });
  }

  const sql = `SELECT password_hash FROM users WHERE user_id=?`;

  db.query(sql, [userId], async (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: "Failed to verify password" });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const match = await bcrypt.compare(
      currentPassword,
      result[0].password_hash
    );

    if (!match) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    db.query(
      `UPDATE users SET password_hash=?, last_password_change=NOW() WHERE user_id=?`,
      [hash, userId],
      (err) => {
        if (err) {
          console.error('Error updating password:', err);
          return res.status(500).json({ error: "Failed to update password" });
        }
        res.json({ message: "Password updated successfully" });
      }
    );
  });
};

/* ===============================
   UPDATE SECURITY
================================ */
exports.updateSecurity = (req, res) => {
  const userId = req.params.id;
  const { two_factor_enabled } = req.body;

  db.query(
    `UPDATE users SET two_factor_enabled=?, updated_at=NOW() WHERE user_id=?`,
    [two_factor_enabled ? 1 : 0, userId],
    (err) => {
      if (err) {
        console.error('Error updating security:', err);
        return res.status(500).json({ error: "Failed to update security settings" });
      }
      res.json({ message: "Security settings updated successfully" });
    }
  );
};

/* ===============================
   UPDATE PREFERENCES
================================ */
exports.updatePreferences = (req, res) => {
  const userId = req.params.id;
  const data = req.body;

  // Handle notification preferences
  const emailNotifications = JSON.stringify(data.emailNotifications || {});
  const inAppNotifications = JSON.stringify(data.inAppNotifications || {});
  
  const sql = `
    UPDATE users SET
      language=?,
      timezone=?,
      date_format=?,
      time_format=?,
      theme=?,
      font_size=?,
      layout_density=?,
      high_contrast=?,
      reduce_animations=?,
      screen_reader_support=?,
      larger_clickable_areas=?,
      default_landing_page=?,
      default_list_view=?,
      remember_filters=?,
      auto_refresh=?,
      email_notifications=?,
      in_app_notifications=?,
      updated_at=NOW()
    WHERE user_id=?
  `;

  db.query(
    sql,
    [
      data.language || 'en-US',
      data.timezone || 'Auto detect',
      data.dateFormat || 'dd/mm/yyyy',
      data.timeFormat || '24-hour',
      data.theme || 'light',
      data.fontSize || 'medium',
      data.layoutDensity || 'comfortable',
      data.highContrast ? 1 : 0,
      data.reduceAnimations ? 1 : 0,
      data.screenReaderSupport ? 1 : 0,
      data.largerClickableAreas ? 1 : 0,
      data.defaultLandingPage || 'Dashboard',
      data.defaultListView || 'List',
      data.rememberFilters ? 1 : 0,
      data.autoRefresh ? 1 : 0,
      emailNotifications,
      inAppNotifications,
      userId
    ],
    (err) => {
      if (err) {
        console.error('Error updating preferences:', err);
        return res.status(500).json({ error: 'Failed to update preferences' });
      }
      res.json({ message: "Preferences saved successfully" });
    }
  );
};
