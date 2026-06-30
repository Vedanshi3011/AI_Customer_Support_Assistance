import { useState } from "react";
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

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div
      className={`
        min-h-screen
        flex
        overflow-hidden
        transition-colors
        duration-300

        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-900"
        }
      `}
    >
      {/* Sidebar */}

      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}

      <div
        className="
          flex-1
          flex
          flex-col
          min-w-0

          transition-all
          duration-300
        "
      >
        {/* Navbar */}

        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Page Content */}

        <main
          className={`
            flex-1

            overflow-y-auto
            overflow-x-hidden

            transition-colors
            duration-300

            ${
              darkMode
                ? "bg-slate-950"
                : "bg-slate-100"
            }
          `}
        >
          <div
            className="
              w-full
              max-w-[1600px]

              mx-auto

              px-4
              py-4

              sm:px-6
              sm:py-6

              lg:px-8
              lg:py-8
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}