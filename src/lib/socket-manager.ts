import { useEffect } from 'react';
import socket from './socket';
import { useStore } from '@/store/store';

export const useSocketManager = () => {
  const { setSocketConnected } = useStore();

  useEffect(() => {
    const onConnect = () => {
      setSocketConnected(true);
      console.log('Socket connected');
    };

    const onDisconnect = () => {
      setSocketConnected(false);
      console.log('Socket disconnected');
    };

    socket.connect();
    
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.disconnect();
    };
  }, [setSocketConnected]);
};