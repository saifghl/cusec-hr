-- Migration: Add columns for HR Profile, Security, and Preferences
-- Run this SQL script on your database to add the necessary columns

-- Add preference columns to users table (if they don't exist)
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS date_format VARCHAR(20) DEFAULT 'dd/mm/yyyy',
ADD COLUMN IF NOT EXISTS time_format VARCHAR(20) DEFAULT '24-hour',
ADD COLUMN IF NOT EXISTS theme VARCHAR(20) DEFAULT 'light',
ADD COLUMN IF NOT EXISTS font_size VARCHAR(20) DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS layout_density VARCHAR(20) DEFAULT 'comfortable',
ADD COLUMN IF NOT EXISTS high_contrast TINYINT(1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS reduce_animations TINYINT(1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS screen_reader_support TINYINT(1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS larger_clickable_areas TINYINT(1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS default_landing_page VARCHAR(50) DEFAULT 'Dashboard',
ADD COLUMN IF NOT EXISTS default_list_view VARCHAR(50) DEFAULT 'List',
ADD COLUMN IF NOT EXISTS remember_filters TINYINT(1) DEFAULT 1,
ADD COLUMN IF NOT EXISTS auto_refresh TINYINT(1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS email_notifications TEXT,
ADD COLUMN IF NOT EXISTS in_app_notifications TEXT;

-- Create notifications table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50) NOT NULL DEFAULT 'system',
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_read TINYINT(1) DEFAULT 0,
    is_urgent TINYINT(1) DEFAULT 0,
    tags TEXT,
    actions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_is_read (is_read),
    INDEX idx_is_urgent (is_urgent),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Note: If your MySQL version doesn't support IF NOT EXISTS in ALTER TABLE,
-- you may need to check for column existence manually or use a migration tool.

