const express = require('express');
const cors = require('cors');
const { connect } = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Attempt to load the route file
let companyRoutes;

try {
  companyRoutes = require('./routes/companies');
  console.log("✅ companyRoutes loaded");
} catch (err) {
  console.error("❌ Failed to load companyRoutes:", err.message);
}

// Mount the route (even if undefined for debugging)
app.use('/api/companies', (req, res, next) => {
  console.log('➡️ Incoming request:', req.method, req.originalUrl);
  next();
}, companyRoutes || ((req, res) => res.status(500).send('💥 Route failed to load')));

// Test route
app.get('/test', (req, res) => {
  res.send('✅ Server is working');
});

// Connect to MongoDB and start server
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Server failed to start:', err);
});
