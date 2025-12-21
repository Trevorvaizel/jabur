# EPIC-06: Notifications & Communication

**Epic Owner:** [TBD]  
**Priority:** P1  
**Estimated Effort:** 4-5 weeks  
**Dependencies:** Epic 1-5  

---

## 1. Epic Overview

### 1.1 Description

This epic covers all notification and communication systems: email notifications, push notifications, in-app notifications, and internal messaging. It ensures users stay informed of relevant events without notification fatigue.

### 1.2 Business Value

- Timely notifications increase engagement
- Reduced missed deadlines
- Better communication improves satisfaction
- Configurable preferences respect user autonomy

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Email delivery rate | > 99% |
| Push notification delivery | > 95% |
| Notification open rate | > 40% |
| Unsubscribe rate | < 2% |
| Response time to notifications | < 2 hours avg |

---

## 2. User Stories

### 2.1 Email Notifications

#### US-6.1: Transactional Emails
**As a** user  
**I want to** receive important emails  
**So that** I'm informed of critical events  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Email templates for all transactional events
- [ ] Consistent branding and styling
- [ ] Mobile-responsive design
- [ ] Unsubscribe link where legally required
- [ ] Delivery tracking and logging
- [ ] Retry on transient failures

**Email Types (Transactional - Cannot Unsubscribe):**
| Event | Recipient | Subject Template |
|-------|-----------|------------------|
| Email verification | All users | Verify your email |
| Password reset | All users | Reset your password |
| Payment receipt | Uploaders | Payment confirmed - $X |
| Payout sent | Creators | Your payout of $X is on the way |
| Account suspended | All users | Important: Account status update |

**Email Types (Operational - Can Unsubscribe):**
| Event | Recipient | Subject Template |
|-------|-----------|------------------|
| Upload ready | Uploaders | Your content is ready for review |
| New assignment available | Creators | New task available: {type} |
| Assignment claimed | Uploaders | Your task has been claimed |
| Revision requested | Creators | Revision requested on {task} |
| Content approved | Both | Content approved: {title} |
| Level changed | Creators | Congratulations! You've reached {level} |
| Weekly digest | All users | Your weekly summary |

---

#### US-6.2: Email Preferences
**As a** user  
**I want to** control which emails I receive  
**So that** I'm not overwhelmed  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Preference settings in account
- [ ] Categories: Essential, Updates, Marketing
- [ ] Per-notification-type toggles
- [ ] "Unsubscribe all non-essential" option
- [ ] One-click unsubscribe from email footer
- [ ] Changes take effect immediately

---

### 2.2 Push Notifications

#### US-6.3: Web Push Notifications
**As a** user  
**I want to** receive browser notifications  
**So that** I see updates in real-time  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Permission request on first relevant action
- [ ] Service worker registration
- [ ] Push subscription management
- [ ] Notification with action buttons
- [ ] Click to navigate to relevant page
- [ ] Badge count on PWA icon

**Push Events:**
| Event | Priority | Action Buttons |
|-------|----------|----------------|
| New assignment (matches preferences) | High | View, Dismiss |
| Deadline approaching (< 6 hours) | Urgent | Open Task |
| Revision requested | High | View Feedback |
| Content approved | Normal | View |
| Payout processed | Normal | View Earnings |

---

#### US-6.4: Mobile Push Notifications
**As a** mobile app user  
**I want to** receive push notifications  
**So that** I stay updated on the go  

**Priority:** P2 (Phase 2)  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Firebase Cloud Messaging integration
- [ ] iOS APNs integration
- [ ] Rich notifications with images
- [ ] Deep linking to specific screens
- [ ] Notification grouping
- [ ] Do Not Disturb respect

---

### 2.3 In-App Notifications

#### US-6.5: Notification Center
**As a** user  
**I want to** see all notifications in one place  
**So that** I don't miss anything  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Bell icon with unread count badge
- [ ] Dropdown/panel with notification list
- [ ] Mark as read on click
- [ ] Mark all as read option
- [ ] Filter by type
- [ ] Notification history (last 30 days)
- [ ] Click navigates to relevant page
- [ ] Real-time updates via WebSocket

**UI Design:**
```
┌─────────────────────────────────────────────────────────────────┐
│  🔔 Notifications                          [Mark All Read]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ● Today                                                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 📝 New task available: Executive Summary                    ││
│  │    $9.75 payout • 32 min audio                              ││
│  │    2 minutes ago                                 [View →]   ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ✅ Your submission was approved!                            ││
│  │    "AI Healthcare Trends" - Blog Post                       ││
│  │    1 hour ago                                               ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ○ Yesterday                                                    │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 💰 Payout processed: $127.50                                ││
│  │    Sent to PayPal j***@email.com                            ││
│  │    Yesterday at 12:01 AM                                    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  [Load More]                                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-6.6: Real-Time Updates
**As a** user  
**I want to** see updates without refreshing  
**So that** I have current information  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] WebSocket connection on page load
- [ ] Reconnection on disconnect
- [ ] Events pushed to client
- [ ] UI updates reactively
- [ ] Connection status indicator

**Real-Time Events:**
| Event | Users Notified | UI Update |
|-------|----------------|-----------|
| Assignment claimed | Uploader | Status change |
| Submission received | Editor | Queue badge |
| Review completed | Creator | Status + notification |
| New assignment posted | Eligible creators | List refresh + notification |

---

### 2.4 In-Platform Messaging

#### US-6.7: Editor-Creator Messaging
**As an** editor  
**I want to** message a creator about their submission  
**So that** I can ask clarifying questions  

**Priority:** P1  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Message thread per assignment
- [ ] Creator pseudonym preserved (no real identity)
- [ ] Rich text support (bold, lists)
- [ ] File/image attachments
- [ ] Read receipts
- [ ] Notification on new message
- [ ] Thread closed when assignment complete
- [ ] Admin can view threads for moderation

---

#### US-6.8: Support Contact
**As a** user  
**I want to** contact support  
**So that** I can get help with issues  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] "Contact Support" link in help section
- [ ] Category selection (billing, technical, quality, other)
- [ ] Message form with attachment support
- [ ] Ticket created in support system
- [ ] Confirmation email with ticket number
- [ ] Response via email

---

### 2.5 Notification Preferences

#### US-6.9: Granular Notification Settings
**As a** user  
**I want to** customize my notification preferences  
**So that** I only get notifications I want  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Settings page with notification matrix
- [ ] Toggle per notification type
- [ ] Toggle per channel (email, push, in-app)
- [ ] Quiet hours setting (no push during X-Y)
- [ ] Instant vs digest option for low-priority
- [ ] Save confirmation

**Settings UI:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Notification Preferences                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Notification Type              Email   Push   In-App          │
│  ─────────────────────────────────────────────────────────────  │
│  New assignments available       [✓]    [✓]     [✓]            │
│  Assignment claimed              [✓]    [ ]     [✓]            │
│  Content ready for review        [✓]    [✓]     [✓]            │
│  Revision requested              [✓]    [✓]     [✓]            │
│  Content approved                [✓]    [ ]     [✓]            │
│  Payout processed                [✓]    [✓]     [✓]            │
│  Weekly summary                  [✓]    [ ]     [ ]            │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  Quiet Hours                                                    │
│  Don't send push notifications between:                         │
│  [10:00 PM ▼] and [7:00 AM ▼]    Timezone: [Africa/Nairobi ▼]  │
│                                                                  │
│                                              [Save Preferences]  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Notifications
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Content
    type VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    body TEXT,
    data JSONB, -- Additional payload
    
    -- Navigation
    action_url VARCHAR(500),
    action_label VARCHAR(50),
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    
    -- Delivery tracking
    email_sent BOOLEAN DEFAULT FALSE,
    email_sent_at TIMESTAMP,
    push_sent BOOLEAN DEFAULT FALSE,
    push_sent_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP -- Auto-delete after this
);

-- Notification preferences
CREATE TABLE notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    
    -- Per-type preferences (JSONB for flexibility)
    preferences JSONB NOT NULL DEFAULT '{}'::jsonb,
    /*
    Example:
    {
      "new_assignment": {"email": true, "push": true, "in_app": true},
      "content_approved": {"email": true, "push": false, "in_app": true},
      ...
    }
    */
    
    -- Quiet hours
    quiet_hours_enabled BOOLEAN DEFAULT FALSE,
    quiet_hours_start TIME,
    quiet_hours_end TIME,
    timezone VARCHAR(50) DEFAULT 'UTC',
    
    -- Digest preferences
    digest_frequency VARCHAR(20) DEFAULT 'none', -- 'none', 'daily', 'weekly'
    
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Push subscriptions
CREATE TABLE push_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Subscription data
    endpoint VARCHAR(500) NOT NULL,
    keys JSONB NOT NULL, -- p256dh, auth keys
    
    -- Device info
    device_type VARCHAR(20), -- 'web', 'ios', 'android'
    device_name VARCHAR(100),
    user_agent TEXT,
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    last_used_at TIMESTAMP,
    failed_count INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(user_id, endpoint)
);

-- Messages (for editor-creator communication)
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    thread_id UUID NOT NULL,
    sender_id UUID REFERENCES users(id),
    
    -- Content
    content TEXT NOT NULL,
    content_html TEXT,
    attachments JSONB, -- [{url, filename, size, type}]
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Message threads
CREATE TABLE message_threads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    
    -- Participants (stored for query efficiency)
    participant_ids UUID[] NOT NULL,
    
    -- Status
    status VARCHAR(20) DEFAULT 'open',
    
    -- Metadata
    last_message_at TIMESTAMP,
    message_count INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('open', 'closed'))
);

-- Email log
CREATE TABLE email_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    notification_id UUID REFERENCES notifications(id),
    
    -- Email details
    email_type VARCHAR(50) NOT NULL,
    recipient_email VARCHAR(255) NOT NULL,
    subject VARCHAR(500),
    
    -- Provider info
    provider VARCHAR(20) NOT NULL,
    provider_message_id VARCHAR(100),
    
    -- Status tracking
    status VARCHAR(20) NOT NULL DEFAULT 'queued',
    sent_at TIMESTAMP,
    delivered_at TIMESTAMP,
    opened_at TIMESTAMP,
    clicked_at TIMESTAMP,
    bounced_at TIMESTAMP,
    
    -- Error handling
    error_message TEXT,
    retry_count INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('queued', 'sent', 'delivered', 'opened', 'bounced', 'failed'))
);

-- Indexes
CREATE INDEX idx_notifications_user ON notifications(user_id, created_at DESC);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read) WHERE is_read = FALSE;
CREATE INDEX idx_push_subscriptions_user ON push_subscriptions(user_id) WHERE is_active = TRUE;
CREATE INDEX idx_messages_thread ON messages(thread_id, created_at);
CREATE INDEX idx_threads_assignment ON message_threads(assignment_id);
CREATE INDEX idx_email_log_status ON email_log(status, created_at);
```

---

## 4. API Specifications

### 4.1 Notification Endpoints

```yaml
# Get Notifications
GET /api/v1/notifications
  Headers: Authorization: Bearer {token}
  Query:
    unread_only: boolean
    type: string
    page: number
    limit: number (max 50)
  Response: 200 OK
    notifications: Notification[]
    unread_count: number
    pagination: {...}

# Mark as Read
POST /api/v1/notifications/:id/read
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    notification: Notification

# Mark All as Read
POST /api/v1/notifications/read-all
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    updated_count: number

# Get Unread Count
GET /api/v1/notifications/unread-count
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    count: number

# Delete Notification
DELETE /api/v1/notifications/:id
  Headers: Authorization: Bearer {token}
  Response: 204 No Content
```

### 4.2 Preferences Endpoints

```yaml
# Get Notification Preferences
GET /api/v1/users/me/notification-preferences
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    preferences: NotificationPreferences

# Update Notification Preferences
PATCH /api/v1/users/me/notification-preferences
  Headers: Authorization: Bearer {token}
  Request:
    preferences: {
      "new_assignment": {"email": true, "push": true, "in_app": true},
      ...
    }
    quiet_hours_enabled: boolean
    quiet_hours_start: string (HH:MM)
    quiet_hours_end: string (HH:MM)
    timezone: string
  Response: 200 OK
    preferences: NotificationPreferences
```

### 4.3 Push Subscription Endpoints

```yaml
# Register Push Subscription
POST /api/v1/push-subscriptions
  Headers: Authorization: Bearer {token}
  Request:
    endpoint: string
    keys: {
      p256dh: string
      auth: string
    }
    device_type: string
    device_name: string
  Response: 201 Created
    subscription_id: uuid

# Unregister Push Subscription
DELETE /api/v1/push-subscriptions/:endpoint
  Headers: Authorization: Bearer {token}
  Response: 204 No Content
```

### 4.4 Messaging Endpoints

```yaml
# Get Thread for Assignment
GET /api/v1/assignments/:id/messages
  Headers: Authorization: Bearer {token}
  Query:
    page: number
  Response: 200 OK
    thread: MessageThread
    messages: Message[]
    pagination: {...}

# Send Message
POST /api/v1/assignments/:id/messages
  Headers: Authorization: Bearer {token}
  Request:
    content: string
    attachments: [{url, filename}]
  Response: 201 Created
    message: Message

# Mark Thread as Read
POST /api/v1/message-threads/:id/read
  Headers: Authorization: Bearer {token}
  Response: 200 OK
```

---

## 5. Notification Service Architecture

```javascript
// notification.service.js

class NotificationService {
  async send(userId, type, data) {
    const user = await this.getUser(userId);
    const preferences = await this.getPreferences(userId);
    const notification = await this.createNotification(userId, type, data);
    
    // Check each channel
    if (this.shouldSendEmail(preferences, type)) {
      await this.queueEmail(user, type, data, notification.id);
    }
    
    if (this.shouldSendPush(preferences, type)) {
      if (!this.isQuietHours(preferences)) {
        await this.sendPush(userId, type, data);
      }
    }
    
    // In-app is always created unless disabled
    if (preferences.preferences[type]?.in_app !== false) {
      await this.emitWebSocket(userId, notification);
    }
    
    return notification;
  }
  
  async queueEmail(user, type, data, notificationId) {
    const template = this.getEmailTemplate(type);
    const rendered = await this.renderEmail(template, data);
    
    await emailQueue.add({
      to: user.email,
      subject: rendered.subject,
      html: rendered.html,
      notificationId: notificationId
    });
  }
  
  async sendPush(userId, type, data) {
    const subscriptions = await this.getActiveSubscriptions(userId);
    const payload = this.buildPushPayload(type, data);
    
    for (const sub of subscriptions) {
      try {
        await webpush.sendNotification(sub, JSON.stringify(payload));
        await this.updateLastUsed(sub.id);
      } catch (error) {
        await this.handlePushError(sub.id, error);
      }
    }
  }
  
  isQuietHours(preferences) {
    if (!preferences.quiet_hours_enabled) return false;
    
    const now = moment().tz(preferences.timezone);
    const start = moment.tz(preferences.quiet_hours_start, 'HH:mm', preferences.timezone);
    const end = moment.tz(preferences.quiet_hours_end, 'HH:mm', preferences.timezone);
    
    return now.isBetween(start, end);
  }
}

// Notification types and templates
const NOTIFICATION_TYPES = {
  NEW_ASSIGNMENT: {
    title: 'New task available',
    body: '{output_type}: {title}',
    action_url: '/assignments/{assignment_id}',
    channels: ['email', 'push', 'in_app']
  },
  ASSIGNMENT_CLAIMED: {
    title: 'Your task has been claimed',
    body: 'A creator has started working on "{title}"',
    action_url: '/uploads/{upload_id}',
    channels: ['email', 'in_app']
  },
  REVISION_REQUESTED: {
    title: 'Revision requested',
    body: 'Please review feedback for "{title}"',
    action_url: '/assignments/{assignment_id}',
    channels: ['email', 'push', 'in_app']
  },
  CONTENT_APPROVED: {
    title: 'Content approved!',
    body: 'Your {output_type} for "{title}" has been approved',
    action_url: '/assignments/{assignment_id}',
    channels: ['email', 'in_app']
  },
  PAYOUT_PROCESSED: {
    title: 'Payout sent',
    body: '${amount} has been sent to your {method}',
    action_url: '/earnings',
    channels: ['email', 'push', 'in_app']
  },
  LEVEL_CHANGED: {
    title: 'Level updated',
    body: 'Congratulations! You\'ve reached {level_name}',
    action_url: '/profile',
    channels: ['email', 'push', 'in_app']
  }
};
```

---

## 6. Email Templates

### 6.1 Template Structure

```html
<!-- Base template: base.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; padding: 20px 0; }
    .content { padding: 20px; background: #f9f9f9; border-radius: 8px; }
    .button { 
      display: inline-block; 
      padding: 12px 24px; 
      background: #000; 
      color: #fff; 
      text-decoration: none; 
      border-radius: 6px; 
    }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="{{logo_url}}" alt="Logo" height="40">
    </div>
    <div class="content">
      {{content}}
    </div>
    <div class="footer">
      <p>{{company_name}}</p>
      <p><a href="{{unsubscribe_url}}">Unsubscribe</a> | <a href="{{preferences_url}}">Manage preferences</a></p>
    </div>
  </div>
</body>
</html>
```

---

## 7. Implementation Checklist

### Week 1-2: Core Notifications
- [ ] Notification data model
- [ ] Notification service
- [ ] In-app notification center
- [ ] WebSocket real-time updates

### Week 3: Email System
- [ ] Email templates
- [ ] SendGrid/SES integration
- [ ] Email queue processing
- [ ] Delivery tracking

### Week 4: Push Notifications
- [ ] Web push setup
- [ ] Service worker
- [ ] Subscription management
- [ ] Push delivery

### Week 5: Preferences & Messaging
- [ ] Preference settings UI
- [ ] Quiet hours logic
- [ ] In-platform messaging
- [ ] Support contact form

---

*Document Version: 1.0*  
*Last Updated: December 2024*
