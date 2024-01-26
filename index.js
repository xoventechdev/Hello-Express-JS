const express = require('express');

const app = express();

app.get('/', function(req, res) {

    res.end('Hello Express');
});

app.listen(8080, function(){
    console.log('Server running on port 8080');
});