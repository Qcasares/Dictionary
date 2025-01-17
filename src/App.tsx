import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useSocketManager } from '@/lib/socket-manager';
import { useStore } from '@/store/store';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  useSocketManager();
  const { socketConnected } = useStore();

  useEffect(() => {
    console.log('Socket connection status:', socketConnected);
  }, [socketConnected]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}