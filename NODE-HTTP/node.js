const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

// Read raw posts from rawPosts.json
const rawPosts = JSON.parse(fs.readFileSync('rawPosts.json'));

// Filter out posts containing vulgarities
const cleanPosts = rawPosts.filter(post => !containsVulgarity(post));

// Write clean posts to cleanPosts.json
fs.writeFileSync('cleanPosts.json', JSON.stringify(cleanPosts, null, 2));

// Function to check if post contains vulgarities (replace with actual logic)
function containsVulgarity(post) {
    // Example: Check if post contains a specific vulgar word
    const vulgarWords = ['vulgar1', 'vulgar2', 'vulgar3'];
    return vulgarWords.some(word => post.content.includes(word));
}

// GET endpoint to serve clean posts
app.get('/feed', (req, res) => {
    res.json(cleanPosts);
});

// POST endpoint to create new post
app.post('/post/create', (req, res) => {
    // Assuming request body contains { 'content': string }
    const { content } = req.body;
    // Process the new post and add to cleanPosts array
    // Example: cleanPosts.push({ content });
    res.send('Post created successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
