import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

interface MatchMedia {
  matches: boolean;
  media: string;
  onchange: null;
  addListener: typeof vi.fn;
  removeListener: typeof vi.fn;
  addEventListener: typeof vi.fn;
  removeEventListener: typeof vi.fn;
  dispatchEvent: typeof vi.fn;
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string): MatchMedia => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});