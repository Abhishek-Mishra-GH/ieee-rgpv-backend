const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
const studentRoutes = require('./src/routes/studentRoutes');
app.use('/api/students', studentRoutes);

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
