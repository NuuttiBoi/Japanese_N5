const express = require('express');
const router = express.Router();
const work_type = require('../models/Word_Model');

router.route("/create").post((req,res) =>{
    const word_kanji = req.body.word_kanji;
    const word_furagana = req.body.word_furagana;
    const word_english = req.body.word_english;

    const newWork =new work_type({
        word_kanji,
        word_furagana,
        word_english
    })
    console.log(newWork, "toimiiko");
    newWork.save();

})
module.exports = router;