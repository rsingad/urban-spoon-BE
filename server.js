const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const inquiryRoutes = require('./routes/inquiryRoutes');

connectDB(); // Database connect karein

const app = express();
app.use(cors({
  origin: 'https://urban-spoon-fe.vercel.app', // Sirf apna frontend allow karein
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes manage karein

// Health Check Route
app.get('/', (req, res) => {
  res.send('🥄 Urban Spoon API is running...');
});
//inquery router
app.use('/api/inquiry', inquiryRoutes);
//error handling mid (pro.. stander)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));