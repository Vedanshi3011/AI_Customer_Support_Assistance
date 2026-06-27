import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/themeStore";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  const { darkMode } = useThemeStore();

  return (
    <div
      className={`
        flex min-h-screen transition-all duration-300
        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-900"
        }
      `}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main
          className={`
            flex-1 overflow-y-auto transition-colors duration-300
            ${
              darkMode
                ? "bg-slate-950"
                : "bg-slate-100"
            }
          `}
        >
          <div className="p-6 md:p-8 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}