import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bell,
  Search,
  UserCircle2,
  Bot,
  Moon,
  Sun,
  ChevronDown,
  Settings,
  User,
  LogOut,
  Sparkles,
} from "lucide-react";

import { useThemeStore } from "../store/themeStore";

export default function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] =
    useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const notificationRef =
    useRef<HTMLDivElement>(null);

  const { darkMode, toggleTheme } =
    useThemeStore();

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        setShowMenu(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          event.target as Node
        )
      ) {
        setShowNotifications(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const notifications = [
    "New document uploaded",
    "Knowledge base updated",
    "Analytics report generated",
  ];

  return (
    <header
      className={`
        sticky top-0 z-40
        backdrop-blur-lg
        border-b
        px-4 md:px-6 py-4
        transition-all duration-300
        ${darkMode
          ? "bg-slate-900/90 border-slate-700"
          : "bg-white/90 border-slate-200"
        }
      `}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

        {/* Left Section */}
        <div className="flex items-center gap-4 w-full lg:w-auto">

          {/* Search */}
          <div className="relative w-full lg:w-96">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className={`
                w-full rounded-xl
                pl-10 pr-20 py-2.5
                border
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
                ${darkMode
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-white border-slate-300 text-slate-900"
                }
              `}
            />

            <span
              className="
                absolute right-3 top-2.5
                text-xs
                bg-slate-200 dark:bg-slate-700
                px-2 py-1 rounded
                text-slate-500
              "
            >
              Ctrl K
            </span>

          </div>

          {/* AI Status */}
          <div
            className="
              hidden xl:flex
              items-center gap-2
              px-4 py-2
              rounded-xl
              bg-green-100
              dark:bg-green-900/30
              text-green-700
              dark:text-green-400
            "
          >
            <div className="relative">

              <Bot size={18} />

              <span
                className="
                  absolute -top-1 -right-1
                  h-2 w-2
                  rounded-full
                  bg-green-500
                  animate-ping
                "
              />

            </div>

            <span className="font-medium text-sm">
              AI Online
            </span>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Date */}
          <div
            className={`
              hidden md:block text-sm
              ${darkMode
                ? "text-slate-400"
                : "text-slate-500"
              }
            `}
          >
            {today}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              p-2.5 rounded-xl transition
              ${darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
              }
            `}
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Notifications */}
          <div
            className="relative"
            ref={notificationRef}
          >
            <button
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
              className={`
                p-2.5 rounded-xl transition
                ${darkMode
                  ? "hover:bg-slate-800"
                  : "hover:bg-slate-100"
                }
              `}
            >
              <Bell size={22} />

              <span
                className="
                  absolute top-1 right-1
                  w-4 h-4
                  bg-red-500
                  text-white
                  text-[10px]
                  rounded-full
                  flex items-center justify-center
                "
              >
                3
              </span>

            </button>

            {showNotifications && (
              <div
                className={`
                  absolute right-0 mt-3
                  w-72 rounded-2xl
                  shadow-xl border
                  overflow-hidden
                  z-50
                  ${darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                  }
                `}
              >
                <div className="p-4 font-semibold border-b dark:border-slate-700">
                  Notifications
                </div>

                {notifications.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="
                        px-4 py-3
                        text-sm
                        cursor-pointer
                        hover:bg-slate-100
                        dark:hover:bg-slate-700
                      "
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* User Menu */}
          <div
            className="relative"
            ref={menuRef}
          >
            <button
              onClick={() =>
                setShowMenu(!showMenu)
              }
              className="flex items-center gap-2"
            >
              <UserCircle2
                size={36}
                className="text-blue-500"
              />

              <div className="hidden md:block text-left">

                <p
                  className={`font-medium ${darkMode
                      ? "text-white"
                      : "text-slate-800"
                    }`}
                >
                  Admin User
                </p>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>

              </div>

              <ChevronDown size={16} />

            </button>

            {showMenu && (
              <div
                className={`
                  absolute right-0 mt-3
                  w-56 rounded-2xl
                  shadow-xl border
                  overflow-hidden
                  z-50
                  ${darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                  }
                `}
              >
                <button
                  onClick={() =>
                    navigate("/profile")
                  }
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                  "
                >
                  <User size={18} />
                  Profile
                </button>

                <button
                  onClick={() =>
                    navigate("/settings")
                  }
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                  "
                >
                  <Settings size={18} />
                  Settings
                </button>

                {/* AI Preferences */}
                <button
                  onClick={() => {
                    navigate("/ai-preferences");
                    setShowMenu(false);
                  }}
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                    transition
                  "
                >
                  <Sparkles size={18} />
                  AI Preferences
                </button>

                <div className="border-t dark:border-slate-700" />

                <button
                  onClick={() => navigate("/")}
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3
                    text-red-500
                    hover:bg-red-50
                    dark:hover:bg-red-900/20
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}