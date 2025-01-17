import type { AppProps } from 'next/app';
import { useSocketManager } from '@/lib/socket-manager';
import { useStore } from '@/store/store';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import AppLayout from '@/components/layout/app-layout';

export default function App({ Component, pageProps }: AppProps) {
  useSocketManager();
  const { socketConnected } = useStore();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}