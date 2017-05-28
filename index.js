const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4000, () => {
  console.log('listening on 4000')
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

io.on('connection', socket => {
  socket.emit('socket id', socket.client.conn.id);
  socket.on('chat message', payload => {
    console.log('message', payload.message, payload.userId)
  })
});
