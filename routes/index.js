const express = require('express');
const router = express.Router();



router.get('/', function(req, res) {
    return res.render('home', {
        title: 'My Task'
    });
});

router.use('/chatlogs', require('./chatlogs'));



module.exports = router;
