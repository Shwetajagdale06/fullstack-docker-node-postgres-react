// backend/server.js
const express = require('express');
const path = require('path');
const app = require('./app'); // Import your existing app.js

const PORT = process.env.PORT || 3000;

// Serve React frontend from /client/build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all route to serve React app for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
