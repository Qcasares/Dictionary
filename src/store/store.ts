import { create } from 'zustand';
import { MetadataField } from '@/components/metadata-field';

interface AppState {
  metadata: MetadataField[];
  setMetadata: (metadata: MetadataField[]) => void;
  selectedEntry: string | null;
  setSelectedEntry: (entryId: string | null) => void;
  // Add other global state as needed
}

export const useStore = create<AppState>((set) => ({
  metadata: [],
  setMetadata: (metadata) => set({ metadata }),
  selectedEntry: null,
  setSelectedEntry: (entryId) => set({ selectedEntry: entryId }),
}));