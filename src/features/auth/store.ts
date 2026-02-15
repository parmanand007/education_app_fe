import { create } from "zustand";

interface AuthState {
  token: string | null;
  contact: string | null;
  setToken: (token: string) => void;
  setContact: (value: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("auth_token"),
  contact: null,

  setToken: (token) => {
    localStorage.setItem("auth_token", token);
    set({ token });
  },

  setContact: (value) => set({ contact: value }),

  logout: () => {
    localStorage.removeItem("auth_token");
    set({ token: null, contact: null });
  },
}));
