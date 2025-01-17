import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold">
            Dictionary App
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/dictionary">Dictionary</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/settings">Settings</Link>
            </Button>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}