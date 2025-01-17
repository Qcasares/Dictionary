import { create } from 'zustand';

export type FieldType = 'string' | 'number' | 'boolean' | 'date';

export interface MetadataField {
  key: string;
  type: FieldType;
  value: string;
}

export interface DictionaryState {
  metadata: MetadataField[];
  setMetadata: (metadata: MetadataField[]) => void;
}

export const initialState: DictionaryState = {
  metadata: [],
  setMetadata: () => {},
};

export const useDictionaryStore = create<DictionaryState>((set) => ({
  ...initialState,
  setMetadata: (metadata) => set({ metadata }),
}));