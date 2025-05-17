const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { Resend } = require('resend');
const { contactEmailTemplate } = require('../utils/emailTemplate');

// Initialize Resend with hardcoded API key (not secure for production)
const resend = new Resend('re_fJB3JnK9_2BgryKiXzo97EUTGNppEjG3D'); // Replace with your Resend API key

// POST /api/contact - Save contact message and send email
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ganeshpatil2719@gmail.com'], // Replace with your receiver email
      subject: `New Message from ${name}`,
      html: contactEmailTemplate({ name, email, message }),
    });

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to process contact form');
  }
});

module.exports = router;