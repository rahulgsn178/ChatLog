const express = require('express');
const path = require('path');
const port = 8000;



const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded( {extended: false}));
app.use(express.static('assets'));



app.use('/', require('./routes'));



app.listen(port, function(err) {
    if(err) {
        console.log("Error:", err);
    }

    console.log("My express server is running on Port:", port);
    
});


