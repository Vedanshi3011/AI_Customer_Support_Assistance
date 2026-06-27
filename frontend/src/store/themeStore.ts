import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

export const useThemeStore =
  create<ThemeState>((set) => ({
    darkMode: savedTheme === "dark",

    toggleTheme: () =>
      set((state) => {
        const next = !state.darkMode;

        if (next) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }

        return {
          darkMode: next,
        };
      }),
  }));
  