require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('./Database/conn')
const users = require('./models/userSchema')
const cors = require('cors');
const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//     res.send('Hello');
// })

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is listening at https://localhost:${PORT}/`);
})