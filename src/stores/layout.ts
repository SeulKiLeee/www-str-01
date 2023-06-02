import { create } from 'zustand'

interface IMainHeaderStore {
    isShow: boolean;
    showBackButton: boolean;
    showMainHeader: () => void;
    hideMainHeader: () => void;
}

export const useMainHeaderStore = create<IMainHeaderStore>()((set) => ({
  isShow: true,
  showBackButton: false,
  showMainHeader: () => set(({ isShow: true })),
  hideMainHeader: () => set({ isShow: false }),
}));