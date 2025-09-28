# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly in your email inbox (ahmadfarazpz@gmail.com).

## What You'll Get
When someone fills out your contact form, you'll receive an email like this:
- **From:** Your website visitor
- **To:** ahmadfarazpz@gmail.com (your inbox)
- **Subject:** Contact from [Visitor Name] - [Their Subject]
- **Content:** Their message with their contact information

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account (ahmadfarazpz@gmail.com)
5. Note down the **Service ID** (something like `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** `Contact Form Submission`

**Template Content:**
```
Subject: New Contact Form Submission from {{from_name}}

Hello Ahmad,

You received a new message from your portfolio website!

---
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
---

Reply to: {{reply_to}}

This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (something like `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (something like `abc123xyz`)

### 5. Update Environment Variables
Update the `.env` file in your frontend folder with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Test the Contact Form
1. Make sure both frontend and backend are running
2. Go to your website and fill out the contact form
3. Check your email (ahmadfarazpz@gmail.com) for the message

## Benefits of This Setup
- ✅ **No app passwords needed** - EmailJS handles authentication
- ✅ **Free plan available** - 200 emails/month
- ✅ **Direct to your inbox** - No database required
- ✅ **Professional emails** - Formatted nicely
- ✅ **Spam protection** - Built-in security features

## Troubleshooting

### If emails aren't being received:
1. Check your spam/junk folder
2. Verify the EmailJS service is connected properly
3. Make sure your template variables match the code
4. Check the browser console for any errors

### Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

If you need more emails or want to remove branding, you can upgrade to a paid plan later.

## Need Help?
If you encounter any issues during setup, let me know and I'll help you troubleshoot!