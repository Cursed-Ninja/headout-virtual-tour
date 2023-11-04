import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Server } from 'socket.io';
import path from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/../virtual-tour-playground/index.html"));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});