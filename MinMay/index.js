/* var express = require('express');
var router = express.Router();

GET home page. 
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('Un usuario se conecto');
    socket.on('disconnect', function () {
        console.log('Un usuario se desconecto');
    });
    socket.on('mensaje chat', function (msg) {
        io.emit('mensaje chat', msg.toUpperCase());
    });
});

http.listen(3000, function () {
    console.log('Escucho en *:3000');
});
