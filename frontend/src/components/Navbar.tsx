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
  Menu,
  X,
} from "lucide-react";

import { useThemeStore } from "../store/themeStore";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const [
    showNotifications,
    setShowNotifications,
  ] = useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

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
        backdrop-blur-xl
        border-b
        transition-all duration-300
        ${darkMode
          ? "bg-slate-900/95 border-slate-700"
          : "bg-white/95 border-slate-200"
        }
      `}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">

        {/* LEFT SECTION */}

        <div className="flex items-center gap-4 flex-1">

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className={`
              lg:hidden
              p-2
              rounded-xl
              transition
              ${darkMode
                ? "hover:bg-slate-800"
                : "hover:bg-slate-100"
              }
            `}
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          {/* Search */}

          <div className="relative flex-1 max-w-xl">

            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search..."
              className={`
                w-full
                rounded-xl
                border
                pl-10
                pr-4
                py-2.5
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

          </div>

          {/* AI Status */}

          <div
            className="
              hidden
              xl:flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-green-100
              dark:bg-green-900/20
              text-green-700
              dark:text-green-400
            "
          >
            <Bot size={18} />

            <span className="font-medium text-sm">
              AI Online
            </span>

            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="flex items-center gap-2 md:gap-4">

          {/* Date */}

          <div
            className={`
              hidden lg:block
              text-sm
              ${darkMode
                ? "text-slate-400"
                : "text-slate-500"
              }
            `}
          >
            {today}
          </div>

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className={`
              p-2.5
              rounded-xl
              transition
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
            className="relative flex-shrink-0"
            ref={notificationRef}
          >
            <button
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
              className={`
                relative
                p-2.5
                rounded-xl
                transition
                ${darkMode
                  ? "hover:bg-slate-800"
                  : "hover:bg-slate-100"
                }
              `}
            >
              <Bell size={21} />

              <span
                className="
                  absolute
                  top-1
                  right-1
                  w-4
                  h-4
                  rounded-full
                  bg-red-500
                  text-white
                  text-[10px]
                  flex
                  items-center
                  justify-center
                "
              >
                3
              </span>
            </button>
            {showNotifications && (
              <div
                className={`
                absolute
                top-full
                mt-3

                right-0
                sm:right-0

                left-1/2
                -translate-x-1/2
                sm:left-auto
                sm:translate-x-0

                w-[calc(100vw-24px)]
                max-w-[340px]
                sm:w-80

                rounded-2xl
                border
                shadow-2xl
                overflow-hidden
                max-h-[70vh]
                overflow-y-auto

                z-[999]

                ${darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                  }
                `}
              >
                <div
                  className="
                  px-5
                  py-4
                  font-semibold
                  border-b
                  dark:border-slate-700
                  text-lg
                  "
                >
                  Notifications
                </div>

                {notifications.map((item, index) => (
                  <button
                    key={index}
                    className="
                    w-full
                    text-left

                    px-5
                    py-4

                    text-sm

                    break-words

                    transition

                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                    "
                  >
                    {item}
                  </button>
                ))}

                <div
                  className="
                    border-t
                    dark:border-slate-700
                    px-5
                    py-3
                  "
                >
                  <button
                    className="
                      text-blue-600
                      text-sm
                      font-medium
                    "
                  >
                    View all notifications
                  </button>
                </div>
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
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-2
                py-1.5
                transition-all
                hover:bg-slate-100
                dark:hover:bg-slate-800
              "
            >
              <UserCircle2
                size={38}
                className="text-blue-500 shrink-0"
              />

              <div className="hidden md:block text-left">
                <p
                  className={`font-semibold ${darkMode
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

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${showMenu
                    ? "rotate-180"
                    : ""
                  }
                `}
              />
            </button>

            {showMenu && (
              <div
                className={`
                  absolute
                  right-0
                  mt-3
                  w-64
                  rounded-2xl
                  border
                  shadow-2xl
                  overflow-hidden
                  z-50
                  ${darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                  }
                `}
              >
                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowMenu(false);
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    transition
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                  "
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/settings");
                    setShowMenu(false);
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    transition
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                  "
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/ai-preferences");
                    setShowMenu(false);
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    transition
                    hover:bg-slate-100
                    dark:hover:bg-slate-700
                  "
                >
                  <Sparkles size={18} />
                  <span>AI Preferences</span>
                </button>

                <div className="border-t dark:border-slate-700" />

                <button
                  onClick={() => {
                    navigate("/");
                    setShowMenu(false);
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    text-red-500
                    transition
                    hover:bg-red-50
                    dark:hover:bg-red-900/20
                  "
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}
