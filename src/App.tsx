import { useStore } from '@/state/store';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import AppLayout from '@/components/layout/app-layout';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function App() {
  const { theme, setTheme } = useStore();
  
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
      <TooltipProvider>
        <AppLayout>
          {/* Main application content */}
        </AppLayout>
        <Toaster position="top-center" />
      </TooltipProvider>
    </ThemeProvider>
  );
}