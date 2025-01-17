import { useEffect } from 'react';
import { useSocketManager } from '@/lib/socket-manager';
import { useStore } from '@/store/store';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import Router from '@/router';

function App() {
  useSocketManager();
  const { socketConnected } = useStore();

  useEffect(() => {
    console.log('Socket connection status:', socketConnected);
  }, [socketConnected]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;