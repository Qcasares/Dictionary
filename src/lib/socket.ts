import { Manager } from 'socket.io-client';

const socket = new Manager(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001', {
  transports: ['websocket'],
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
}).socket('/');

export default socket;