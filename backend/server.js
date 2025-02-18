// app.js
const express = require('express');
const connectDB = require('./dbConnection'); // Import the database connection function
const cors = require('cors'); // Import the CORS middleware
const bodyParser = require("body-parser");  
const app = express();
const cookieParser = require('cookie-parser');


// Connect to the database
connectDB();
require('dotenv').config(); // Load environment variables from .env file
// Middleware
// CORS configuration
const corsOptions = {
  origin: 'http://13.60.10.245:5173',
  //origin: 'https://ai-attendance-client.vercel.app', 
  //origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  credentials: true, // Allow cookies and credentials
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

// Apply CORS middleware globally
app.use(cors(corsOptions));
 // Enable CORS for all routes
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
// Routes
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const reportRoutes = require('./routes/reportRoutes');
const authRoutes = require('./routes/authRoutes');

//const excelReportRoutes = require('./routes/excelReportRoutes');

app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/auth', authRoutes);

//app.use('/api/excel', excelReportRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
