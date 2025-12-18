const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// ✅ Save or update user resume
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, resumeData } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // 🔁 Update existing resume
      user.name = name;
      user.resumeData = resumeData;
      await user.save();
      return res.json({ message: '✅ Resume updated successfully!' });
    }

    // 🆕 Create new user + resume
    const newUser = new User({ name, email, resumeData });
    await newUser.save();

    res.json({ message: '✅ New user resume saved successfully!' });

  } catch (error) {
    console.error('❌ Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
