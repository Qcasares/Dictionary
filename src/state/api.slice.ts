import { create } from 'zustand';

export interface ApiState {
  apiKey: string;
  socketConnected: boolean;
  setApiKey: (key: string) => void;
  setSocketConnected: (connected: boolean) => void;
}

export const initialState: ApiState = {
  apiKey: '',
  socketConnected: false,
  setApiKey: () => {},
  setSocketConnected: () => {},
};

export const useApiStore = create<ApiState>((set) => ({
  ...initialState,
  setApiKey: (key) => set({ apiKey: key }),
  setSocketConnected: (connected) => set({ socketConnected: connected }),
}));