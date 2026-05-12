const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // Here you would typically handle the contact form submission, e.g., save to database or send email
  res.status(200).json({ message: 'Contact form submitted successfully' });
});

module.exports = router;