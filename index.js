const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(4000, () => {
  console.log('listining on port');
});

app.use(express.static('public'));

const io = socket(server);
io.on('connection', socket => {
  console.log('made the connection');
});
