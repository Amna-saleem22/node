const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cookie parser
app.use(cookieParser());

// Configure session middleware
app.use(session({
    secret: 'mysecretkey',      // Secret key for signing session ID
    resave: false,               // Don't save session if unmodified
    saveUninitialized: true,     // Save new sessions
    cookie: { maxAge: 60000 }    // Session expires in 1 minute
}));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Abdullah', { maxAge: 60000 }); // Expires in 1 minute
    res.send('Cookie has been set!');
});

// Get cookie
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username || 'Guest';
    res.send(`Hello ${username}, this is your cookie!`);
});

// Set session
app.get('/set-session', (req, res) => {
    req.session.user = { name: 'Abdullah', role: 'Developer' };
    res.send('Session has been set!');
});

// Get session
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user.name}, your role is ${req.session.user.role}`);
    } else {
        res.send('No session found. Please visit /set-session first.');
    }
});

// Destroy session
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session destroyed. You are logged out!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});