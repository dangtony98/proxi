const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');

const pathToIndex = path.resolve(__dirname, 'client/proxi/build', 'index.html');

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.static('client/proxi/build'));
app.use(express.json());

app.post('/signup1', async (req, res) => {
    if (req.body.email && req.body.email.trim() != '') {
        // case: non-empty email exists
        await User.findOneAndUpdate({
            email: req.body.email
        }, {
            email: req.body.email
        }, {
            new: true,
            upsert: true
        });
    }

    res.sendFile(pathToIndex);
});

app.get('*', (req, res) => {
    res.sendFile(pathToIndex);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});