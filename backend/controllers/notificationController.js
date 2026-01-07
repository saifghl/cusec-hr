const db = require("../config/db");

/* ===============================
   GET ALL NOTIFICATIONS
================================ */
exports.getNotifications = (req, res) => {
  const userId = req.params.userId || req.user?.id || 1; // Default to user 1 if not provided
  const { filter, sort } = req.query;

  let sql = `
    SELECT 
      notification_id, type, title, description, 
      is_read, is_urgent, created_at, tags, actions
    FROM notifications
    WHERE user_id = ?
  `;

  const params = [userId];

  // Apply filters
  if (filter === 'Unread') {
    sql += ' AND is_read = 0';
  } else if (filter === 'Urgent') {
    sql += ' AND is_urgent = 1';
  } else if (filter === 'System') {
    sql += ' AND type = "system"';
  }

  // Apply sorting
  if (sort === 'oldest') {
    sql += ' ORDER BY created_at ASC';
  } else {
    sql += ' ORDER BY created_at DESC';
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('Error fetching notifications:', err);
      return res.status(500).json({ error: 'Failed to fetch notifications' });
    }

    // Group notifications by date
    const grouped = {};
    results.forEach(notification => {
      const date = new Date(notification.created_at);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      let groupKey;
      if (date.toDateString() === today.toDateString()) {
        groupKey = 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        groupKey = 'Yesterday';
      } else {
        groupKey = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      }

      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }

      // Parse JSON fields if they exist
      if (notification.tags) {
        try {
          notification.tags = JSON.parse(notification.tags);
        } catch (e) {
          notification.tags = [];
        }
      }
      if (notification.actions) {
        try {
          notification.actions = JSON.parse(notification.actions);
        } catch (e) {
          notification.actions = [];
        }
      }

      grouped[groupKey].push(notification);
    });

    res.json({ grouped });
  });
};

/* ===============================
   MARK NOTIFICATION AS READ
================================ */
exports.markAsRead = (req, res) => {
  const { notificationId } = req.params;
  const userId = req.params.userId || req.user?.id || 1;

  db.query(
    'UPDATE notifications SET is_read = 1 WHERE notification_id = ? AND user_id = ?',
    [notificationId, userId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update notification' });
      }
      res.json({ message: 'Notification marked as read' });
    }
  );
};

/* ===============================
   MARK ALL AS READ
================================ */
exports.markAllAsRead = (req, res) => {
  const userId = req.params.userId || req.user?.id || 1;

  db.query(
    'UPDATE notifications SET is_read = 1 WHERE user_id = ? AND is_read = 0',
    [userId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update notifications' });
      }
      res.json({ message: 'All notifications marked as read' });
    }
  );
};

/* ===============================
   GET NOTIFICATION STATS
================================ */
exports.getNotificationStats = (req, res) => {
  const userId = req.params.userId || req.user?.id || 1;

  db.query(
    `SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN is_read = 0 THEN 1 ELSE 0 END) as unread,
      SUM(CASE WHEN is_urgent = 1 THEN 1 ELSE 0 END) as urgent
    FROM notifications
    WHERE user_id = ?`,
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch stats' });
      }
      res.json(results[0]);
    }
  );
};

