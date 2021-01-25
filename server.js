const express = require('express');
const mongoose = require('mongoose');

const promotions = require('./routes/api/promotions');

const app = express();

// Bodyparser Middlewear
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/promotions', promotions);

// const port = process.env.PORT || 5000;
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));