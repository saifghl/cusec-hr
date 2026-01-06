# Backend API Documentation

## Overview
This document describes all the backend APIs created for HR Profile, Security, Preferences, and Notifications.

## Base URL
```
http://localhost:5000/api
```

## Authentication
All endpoints require authentication token in the header:
```
Authorization: Bearer <token>
```

---

## User Profile APIs

### 1. Get User Profile
**GET** `/users/:id`

**Response:**
```json
{
  "user_id": 1,
  "employee_id": "482910",
  "first_name": "Sarah",
  "last_name": "Jenkins",
  "job_title": "Senior HR Manager",
  "department": "Human Resources",
  "work_email": "sarah.jenkins@hrportal.com",
  "phone_number": "+1 (555) 012-3456",
  "location": "New York, USA",
  "linkedin_url": "linkedin.com/in/sarahj",
  "language": "en-US",
  "timezone": "Auto detect (GMT-5)",
  "date_format": "dd/mm/yyyy",
  "time_format": "24-hour",
  "theme": "light",
  "font_size": "medium",
  "layout_density": "comfortable",
  "high_contrast": 0,
  "reduce_animations": 0,
  "screen_reader_support": 0,
  "larger_clickable_areas": 0,
  "default_landing_page": "Dashboard",
  "default_list_view": "List",
  "remember_filters": 1,
  "auto_refresh": 0,
  "email_notifications": "{\"newJobAssignments\":true,\"candidateApplicationUpdates\":true}",
  "in_app_notifications": "{\"newMessages\":true,\"taskReminders\":true}",
  "two_factor_enabled": 0
}
```

### 2. Update User Profile
**PUT** `/users/:id`

**Request Body:**
```json
{
  "first_name": "Sarah",
  "last_name": "Jenkins",
  "job_title": "Senior HR Manager",
  "department": "Human Resources",
  "work_email": "sarah.jenkins@hrportal.com",
  "phone_number": "+1 (555) 012-3456",
  "location": "New York, USA",
  "linkedin_url": "linkedin.com/in/sarahj"
}
```

**Response:**
```json
{
  "message": "Profile updated successfully"
}
```

### 3. Change Password
**PUT** `/users/:id/password`

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

**Response:**
```json
{
  "message": "Password updated successfully"
}
```

**Error Responses:**
- `400`: Current password is incorrect
- `400`: Password must be at least 8 characters long
- `400`: New password and confirm password do not match

### 4. Update Security Settings
**PUT** `/users/:id/security`

**Request Body:**
```json
{
  "two_factor_enabled": true
}
```

**Response:**
```json
{
  "message": "Security settings updated successfully"
}
```

### 5. Update Preferences
**PUT** `/users/:id/preferences`

**Request Body:**
```json
{
  "language": "en-US",
  "timezone": "Auto detect (GMT-5)",
  "dateFormat": "dd/mm/yyyy",
  "timeFormat": "24-hour",
  "theme": "light",
  "fontSize": "medium",
  "layoutDensity": "comfortable",
  "highContrast": false,
  "reduceAnimations": false,
  "screenReaderSupport": false,
  "largerClickableAreas": false,
  "defaultLandingPage": "Dashboard",
  "defaultListView": "List",
  "rememberFilters": true,
  "autoRefresh": false,
  "emailNotifications": {
    "newJobAssignments": true,
    "candidateApplicationUpdates": true,
    "systemAnnouncements": false,
    "marketingEmails": false
  },
  "inAppNotifications": {
    "newMessages": true,
    "taskReminders": true,
    "statusChanges": true,
    "securityAlerts": true
  }
}
```

**Response:**
```json
{
  "message": "Preferences saved successfully"
}
```

---

## Notifications APIs

### 1. Get Notifications
**GET** `/notifications/:userId?filter=All&sort=newest`

**Query Parameters:**
- `filter`: All, Unread, Urgent, System
- `sort`: newest, oldest

**Response:**
```json
{
  "grouped": {
    "Today": [
      {
        "notification_id": 1,
        "type": "alert",
        "title": "Contract Expiry Alert",
        "description": "The employment contract expires in 7 days.",
        "is_read": 0,
        "is_urgent": 1,
        "tags": ["Urgent"],
        "actions": [{"label": "Review Contract", "primary": false}],
        "created_at": "2026-01-06T10:00:00.000Z"
      }
    ],
    "Yesterday": [...]
  }
}
```

### 2. Get Notification Stats
**GET** `/notifications/:userId/stats`

**Response:**
```json
{
  "total": 12,
  "unread": 5,
  "urgent": 1
}
```

### 3. Mark Notification as Read
**PUT** `/notifications/:notificationId/read`

**Response:**
```json
{
  "message": "Notification marked as read"
}
```

### 4. Mark All Notifications as Read
**PUT** `/notifications/:userId/read-all`

**Response:**
```json
{
  "message": "All notifications marked as read"
}
```

---

## Database Schema

### Required Columns in `users` table:
- `date_format` VARCHAR(20)
- `time_format` VARCHAR(20)
- `theme` VARCHAR(20)
- `font_size` VARCHAR(20)
- `layout_density` VARCHAR(20)
- `high_contrast` TINYINT(1)
- `reduce_animations` TINYINT(1)
- `screen_reader_support` TINYINT(1)
- `larger_clickable_areas` TINYINT(1)
- `default_landing_page` VARCHAR(50)
- `default_list_view` VARCHAR(50)
- `remember_filters` TINYINT(1)
- `auto_refresh` TINYINT(1)
- `email_notifications` TEXT
- `in_app_notifications` TEXT

### New `notifications` table:
See `backend/migrations/add_profile_preferences_columns.sql` for the complete schema.

---

## Setup Instructions

1. **Run Database Migration:**
   ```sql
   -- Execute the SQL file:
   source backend/migrations/add_profile_preferences_columns.sql
   ```

2. **Start Backend Server:**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:5000
   ```

3. **Start Frontend:**
   ```bash
   npm start
   # App runs on http://localhost:3000
   ```

---

## Routes Summary

### Frontend Routes (App.js):
- `/hr-profile` - HR Profile page
- `/hr-profile-security` - Security settings
- `/hr-preferences` - User preferences
- `/hr-notifications` - Notifications list
- `/hr-query-detail/:id` - Query detail page (FIXED: now accepts ID parameter)

### Backend Routes:
- `/api/users/:id` - Get/Update profile
- `/api/users/:id/password` - Change password
- `/api/users/:id/security` - Update security
- `/api/users/:id/preferences` - Update preferences
- `/api/notifications/:userId` - Get notifications
- `/api/notifications/:userId/stats` - Get stats
- `/api/notifications/:notificationId/read` - Mark as read
- `/api/notifications/:userId/read-all` - Mark all as read

---

## Notes

- All user data is stored in the database
- Preferences are stored as JSON strings in TEXT columns
- Notifications support filtering and sorting
- Password changes require current password verification
- All endpoints include proper error handling

