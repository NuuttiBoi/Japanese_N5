const cors = require('cors');
const express = require('express');
const app = express();
const {Mongoose, connect} = require("mongoose");
const Work_Type = require('./models/Word_Model');

/* CORS ongelman korjaamiseen */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.json())
const url = 'mongodb+srv://nuuttiturunen:DUMGLO7BdN2yK9Th@cluster0.szliy4a.mongodb.net/test?retryWrites=true&w=majority';


connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
    })

app.get('/japanese_words', (request, response) => {
    Work_Type.find({}).then(japanese_words => {
        response.json(japanese_words)
    })
})

const PORT = process.env.PORT || 3001; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});