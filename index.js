const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const pathToIndex = path.resolve(__dirname, 'client/proxi/build', 'index.html');

app.use(cors());
app.use(express.static('client/proxi/build'));
app.use(express.json());

app.post('/signup1', (req, res) => {
    res.sendFile(pathToIndex);
});

app.get('*', (req, res) => {
    res.sendFile(pathToIndex);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is ready at http://localhost:${PORT}`);
});