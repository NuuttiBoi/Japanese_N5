const cors = require('cors');
const express = require('express');
const app = express();
const {Mongoose, connect} = require("mongoose");
const Work_Type = require('./models/Word_Model');

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
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
        console.log(japanese_words)
    })
})

const PORT = process.env.PORT || 3001; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});