import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  isLogedIn: true,
  login: () => set(({ isLogedIn: true })),
  logout: () => set({ isLogedIn: false }),
}));