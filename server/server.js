const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200", // Remplacez par l'URL de votre application Angular
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ pseudo, room }) => {
    socket.join(room);
    socket.to(room).emit('message', `${pseudo} has joined the room ${room}`);
  });

  socket.on('chatMessage', ({ pseudo, room, message }) => {
    io.to(room).emit('message', `${pseudo}: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
