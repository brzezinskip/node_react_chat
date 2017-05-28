const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`);
});

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});