const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/api/', (req, res) => {
  res.json({ message: 'Ahmad Faraz Portfolio API - Running' });
});

// Contact form endpoint (for EmailJS integration)
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Since we're using EmailJS on frontend, this endpoint just validates and responds
    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Message received successfully'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Ahmad Faraz Portfolio API'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('MongoDB dependency removed - using EmailJS for contact form');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  process.exit(0);
});