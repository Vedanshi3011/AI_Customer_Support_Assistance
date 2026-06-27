import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <AppRoutes />;
}

export default App;