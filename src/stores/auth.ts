import { create } from 'zustand'

interface IAuthStore {
  isLogedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isLogedIn: true,
  login: () => set(({ isLogedIn: true })),
  logout: () => set({ isLogedIn: false }),
}));