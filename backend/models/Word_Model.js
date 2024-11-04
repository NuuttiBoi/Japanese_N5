const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word_kanji: { type: String, required: true },
    word_furagana: { type: String, required: true },
    word_english: { type: String, required: true },
},
    { strict: false });

wordSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },

})

const Word = mongoose.model('japanese_word', wordSchema);  //the name is what mongodb will look for, so it should be
                                                                        // the collection name

module.exports = Word;