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



interface ITabMenuStore {
  currentIndex: number;
  tabInfo: {
    title: string;
    component?: React.ReactNode;
  };
  setCurrentIndex: (index:number) => void;
  initCurrentIndex: () => void;
  setTabInfo: (title:string, component: React.ReactNode) => void;
  initTabInfo: () => void;
}

export const useTabMenuStore = create<ITabMenuStore>()((set) => ({
  currentIndex: 0,
  tabInfo: {
    title: '',
    component: null,
  },
  setCurrentIndex: (index) => set(({ currentIndex: index })),
  initCurrentIndex: () => set({ currentIndex: 0 }),
  setTabInfo: (title, component) => set(({ tabInfo: { title: title, component: component } })),
  initTabInfo: () => set({ tabInfo: { title: '', component: null } }),
}));
