const express = require('express');
const path = require('path');
const uuid = require('uuid');
const moment = require('moment');
const users = require('./users');
const port = 8000;



const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded( {extended: false}));
app.use(express.static('assets'));





app.get('/', function(req, res) {

    return res.render('home', {
        title: 'My Task'
    });
});

app.post('/chatlogs/123456/', function(req, res) {
    var userChatDetails = {
        msg_id : uuid.v4(),
        message: req.body.content,
        timeStamp: moment().format(),
        isSent: true
    }
    users.push(userChatDetails);
    return res.redirect('back');
});


app.get('/chatlogs/123456', function(req, res) {
    console.log(users);
    return res.json({ users });
});
app.delete('/chatlogs/123456', function(req, res) {
    // users = users.clear();
    users.length = 0;
    console.log(users);
    return res.json({ users });


});


app.listen(port, function(err) {
    if(err) {
        console.log("Error:", err);
    }

    console.log("My express server is running on Port:", port);
    
});
// app.get('/chatlogs/123456', function(req, res) {
//     return res.json({ users });
// });


app.delete('/chatlogs/users/:id', function(req, res) {
    const found = users.some(user => user.msg_.id === parseInt(req.params.id));
    if(found) {
        res.json(users.filter(user =>  user.msg.id === parseInt(req.params.id)));
    } else {
        return res.json({
            message: "Please put valid msg id"
        })
    }s
   
});


