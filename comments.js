// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create in-memory database
const comments = [
  { id: 1, comment: 'Comment 1' },
  { id: 2, comment: 'Comment 2' },
  { id: 3, comment: 'Comment 3' }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.