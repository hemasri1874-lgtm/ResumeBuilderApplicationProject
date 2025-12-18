// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // path to your schema file

// Save resume data
router.post('/saveResume', async (req, res) => {
  try {
    const { name, email, resumeData } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      // Update existing resume
      user.resumeData = resumeData;
      await user.save();
      return res.json({ success: true, message: 'Resume updated successfully' });
    }

    // Create new user + resume
    user = new User({ name, email, resumeData });
    await user.save();
    res.json({ success: true, message: 'Resume saved successfully' });

  } catch (error) {
    console.error('❌ Error saving resume:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
