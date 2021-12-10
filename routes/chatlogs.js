const express = require('express');
const uuid = require('uuid');
const moment = require('moment');
const chatlogs = require('../chatlogs');
const router = express.Router();



router.post('/123456/', function(req, res) {
    // console.log(req.body);
    // res.send(req.body);
    var chat = {
        mes_id: uuid.v4(),
        content: req.body.content,
        timeStamp: moment().format(),
        isSent: true
    }
    chatlogs.push(chat)
    res.json({message: 'created chatlog entry', chatlogs});
});


router.delete('/123456', function(req, res) {
    chatlogs.length = 0;
    res.json({message: 'all chatlogs have been deleted', chatlogs});
});

router.delete('/123456/:id', function(req, res) {
    let found = chatlogs.some(chat => chat.mes_id === req.params.id);
    if(found) {
        return res.json({
            message: 'chatlog with this id deleted',
            chatlogs: chatlogs.filter(chat => chat.mes_id !== req.params.id)
        })
    
    } else {
        return res.json({message: 'please enter the valid message id to be deleted'});
    }
});


router.get('/123456', function(req, res) {
    res.json(chatlogs);
});

module.exports = router;
