import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import AppLayout from '@/components/layout/app-layout';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <Toaster position="top-center" />
      </TooltipProvider>
    </ThemeProvider>
  );
}