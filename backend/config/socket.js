import { Server } from 'socket.io';
import { handleConnection } from '../events/connectionHandler.js';

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "https://quizgame-fr20.onrender.com/",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    handleConnection(io, socket);
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};