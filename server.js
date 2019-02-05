// Backend framework
const express = require('express')
// ORM interacts with mongoDB database
const mongoose = require('mongoose')
// Get info from body
const bodyParser = require('body-parser')

const items = require('./routes/api/items'); 

const app = express();

app.use(bodyParser.json());

// MongoDB uri to connect to DB
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));