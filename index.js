const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/campus_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const authRoutes = require('./app/routes/authRoutes');
const campusRoutes = require('./app/routes/campusRoutes')
const buildingRoutes = require('./app/routes/buildingRoutes');

app.use(session({
  secret: 'your-secret-key', // Use a strong secret key
  resave: false,
  saveUninitialized: true
}));


app.use('/auth', authRoutes);
app.use('/campus', campusRoutes);
app.use('/building', buildingRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
