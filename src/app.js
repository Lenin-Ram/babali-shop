require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
const connectMongoDB = () => mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Welcome route
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to Babali Shop',
  });
});

// API Routes
app.use('/api', require('./handlers'));

connectMongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Babali Shop API on port ${process.env.PORT}`);
  })
});