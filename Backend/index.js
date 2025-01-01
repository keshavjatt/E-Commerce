const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes/index');

const app = express();

// Enable CORS
app.use(cors({
    origin: true, 
    credentials: true, 
}));

// Middleware to parse JSON data with increased limit
app.use(express.json({ limit: '10mb' })); // Increased limit to 10mb

// Middleware to parse URL-encoded data with increased limit
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Increased limit to 10mb

// Middleware for parsing cookies
app.use(cookieParser());

// Route handling
app.use("/api", router);

const PORT = process.env.PORT || 8080;

// Database connection and server start
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running");
        console.log("Connected to DB");
    });
});