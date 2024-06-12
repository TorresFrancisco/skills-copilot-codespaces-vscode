// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments data
const comments = require('./comments.json');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', (req, res) => {
  // Send comments data
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request
  const newComment = req.body;

  // Add the new comment to the existing comments data
  comments.push(newComment);

  // Send the updated comment data
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});