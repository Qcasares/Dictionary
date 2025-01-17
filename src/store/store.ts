import { create } from 'zustand';
import { MetadataField } from '@/components/metadata-field';

interface AppState {
  metadata: MetadataField[];
  setMetadata: (metadata: MetadataField[]) => void;
  selectedEntry: string | null;
  setSelectedEntry: (entryId: string | null) => void;
  socketConnected: boolean;
  setSocketConnected: (connected: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  metadata: [],
  setMetadata: (metadata) => set({ metadata }),
  selectedEntry: null,
  setSelectedEntry: (entryId) => set({ selectedEntry: entryId }),
  socketConnected: false,
  setSocketConnected: (connected) => set({ socketConnected: connected }),
}));