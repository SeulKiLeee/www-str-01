import { create } from 'zustand'

interface IMainHeaderStore {
    isMainHeaderShow: boolean;
    showMainHeader: () => void;
    hideMainHeader: () => void;
}

export const useMainHeaderStore = create<IMainHeaderStore>()((set) => ({
  isMainHeaderShow: true,
  showMainHeader: () => set(({ isMainHeaderShow: true })),
  hideMainHeader: () => set({ isMainHeaderShow: false }),
}));




interface IBottomNavigationStore {
  isNavigatorShow: boolean;
  showMBottomNavigator: () => void;
  hideMBottomNavigator: () => void;
}

export const useBottomNavigatorStore = create<IBottomNavigationStore>()((set) => ({
isNavigatorShow: true,
showMBottomNavigator: () => set(({ isNavigatorShow: true })),
hideMBottomNavigator: () => set({ isNavigatorShow: false }),
}));

