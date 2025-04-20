'use client';

import { create } from 'zustand';
import { StateCreator } from 'zustand';

type Language = 'nl' | 'en';

interface LanguageStore {
  language: Language;
  toggleLanguage: () => void;
}

const createStore: StateCreator<LanguageStore> = (set) => ({
  language: (typeof window !== 'undefined' && localStorage.getItem('language') as Language) || 'nl',
  toggleLanguage: () => {
    set((state: LanguageStore) => {
      const newLanguage = state.language === 'nl' ? 'en' : 'nl';
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
      return { language: newLanguage };
    });
  },
});

export const useLanguageStore = create<LanguageStore>(createStore);

export const useLanguage = () => {
  return useLanguageStore();
}; 