import { create } from 'zustand';

export interface UiState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const initialState: UiState = {
  theme: 'light',
  setTheme: () => {},
};

export const useUiStore = create<UiState>((set) => ({
  ...initialState,
  setTheme: (theme) => set({ theme }),
}));