import { create } from 'zustand';
import { ApiState, initialState as apiInitialState } from './api.slice';
import { DictionaryState, initialState as dictionaryInitialState, MetadataField } from './dictionary.slice';
import { UiState, initialState as uiInitialState } from './ui.slice';

type AppState = ApiState & DictionaryState & UiState;

export const useStore = create<AppState>((set, get) => ({
  ...apiInitialState,
  ...dictionaryInitialState,
  ...uiInitialState,
  
  // API actions
  setApiKey: (key: string) => set({ apiKey: key }),
  setSocketConnected: (connected: boolean) => set({ socketConnected: connected }),
  
  // Dictionary actions
  setMetadata: (metadata: MetadataField[]) => set({ metadata }),
  
  // UI actions
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));

// Middleware for logging state changes
useStore.subscribe(
  (state) => console.log('State changed:', state)
);

// Middleware for persistence
useStore.subscribe(
  (state) => localStorage.setItem('app-state', JSON.stringify(state))
);