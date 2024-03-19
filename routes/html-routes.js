const router = require('express').Router();
const path = require('path');

// GET Route for retrieving information on the main page and new notes respectively 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;