import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  BarChart3,
  Bot,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Circle,
  User,
  Settings,
  Sparkles,
  X,
} from "lucide-react";

import { useThemeStore } from "../store/themeStore";

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function Sidebar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const { darkMode } = useThemeStore();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () =>
      window.removeEventListener("resize", resize);
  }, [setMobileMenuOpen]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Chat",
      icon: <MessageSquare size={20} />,
      path: "/chat",
      badge: "3",
    },
    {
      name: "Documents",
      icon: <FileText size={20} />,
      path: "/documents",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/analytics",
    },
    {
      name: "AI Preferences",
      icon: <Sparkles size={20} />,
      path: "/ai-preferences",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);

    if (window.innerWidth < 1024) {
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    navigate("/");

    if (window.innerWidth < 1024) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>

      {/* Overlay */}

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          lg:relative
          inset-y-0
          left-0
          z-[60]

          ${collapsed ? "lg:w-20" : "lg:w-72"}

          w-72

          transform
          transition-all
          duration-300

          ${mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }

          flex
          flex-col
          border-r

          ${darkMode
            ? "bg-slate-950 border-slate-800 text-white"
            : "bg-white border-slate-200 text-slate-900 shadow-lg"
          }
        `}
      >
        {/* Header */}

        <div
          className={`
            p-5
            border-b

            ${darkMode
              ? "border-slate-800"
              : "border-slate-200"
            }
          `}
        >
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Bot
                size={34}
                className="text-blue-600"
              />

              {(!collapsed || mobileMenuOpen) && (
                <div>

                  <h1 className="font-bold text-xl">
                    AI Support
                  </h1>

                  <p
                    className={`text-xs ${darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                      }`}
                  >
                    Customer Assistant
                  </p>

                </div>
              )}

            </div>

            <div className="flex items-center gap-2">

              {/* Desktop Collapse */}

              <button
                onClick={() => {
                  if (window.innerWidth >= 1024) {
                    setCollapsed(!collapsed);
                  }
                }}
                className={`
                  hidden
                  lg:flex

                  p-2
                  rounded-lg

                  ${darkMode
                    ? "hover:bg-slate-800"
                    : "hover:bg-slate-100"
                  }
                `}
              >
                {collapsed ? (
                  <ChevronRight size={18} />
                ) : (
                  <ChevronLeft size={18} />
                )}
              </button>

              {/* Mobile Close */}

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  lg:hidden
                  p-2
                  rounded-lg
                "
              >
                <X size={22} />
              </button>

            </div>

          </div>
        </div>

        {/* AI Status */}

        {!collapsed && (
          <div
            className={`
              mx-4
              mt-4
              p-4
              rounded-xl

              ${darkMode
                ? "bg-slate-900"
                : "bg-slate-100"
              }
            `}
          >
            <div className="flex justify-between items-center">

              <span className="text-sm font-medium">
                AI Status
              </span>

              <div className="flex items-center gap-2 text-green-500">

                <Circle
                  size={10}
                  fill="currentColor"
                />

                <span className="text-sm">
                  Online
                </span>

              </div>

            </div>

            <p
              className={`text-xs mt-3 ${darkMode
                ? "text-slate-400"
                : "text-slate-500"
                }`}
            >
              Avg Response: 1.2s
            </p>

          </div>
        )}

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-5">
          {menuItems.map((item) => {
            const active =
              location.pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() =>
                  handleNavigation(item.path)
                }
                title={
                  collapsed
                    ? item.name
                    : undefined
                }
                className={`
                  w-full
                  flex
                  items-center
                  ${collapsed
                    ? "justify-center"
                    : "justify-between"
                  }

                  p-3
                  mb-2
                  rounded-xl

                  transition-[width,transform]
                  duration-300
                  ease-in-out

                  group

                  ${active
                    ? "bg-blue-600 text-white shadow-2xl lg:shadow-none lg:scale-[1.02]"
                    : darkMode
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                `}
              >
                <div className="flex items-center gap-3">

                  {item.icon}

                  {!collapsed && (
                    <span className="font-medium">
                      {item.name}
                    </span>
                  )}

                </div>

                {!collapsed &&
                  item.badge && (
                    <span
                      className="
                        bg-red-500
                        text-white
                        text-xs
                        px-2
                        py-0.5
                        rounded-full
                      "
                    >
                      {item.badge}
                    </span>
                  )}
              </button>
            );
          })}
        </div>

        {/* Footer */}

        <div
          className={`
            mt-auto
            border-t
            p-4

            ${darkMode
              ? "border-slate-800"
              : "border-slate-200"
            }
          `}
        >

          {!collapsed ? (

            <>

              <div
                className={`
                  flex
                  items-center
                  gap-3
                  mb-5

                  p-3
                  rounded-xl

                  transition

                  ${darkMode
                    ? "hover:bg-slate-900"
                    : "hover:bg-slate-100"
                  }
                `}
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-blue-600

                    flex
                    items-center
                    justify-center

                    shadow-md
                  "
                >

                  <User
                    size={20}
                    className="text-white"
                  />

                </div>

                <div className="flex-1">

                  <p className="font-semibold">
                    Admin User
                  </p>

                  <p
                    className={`text-xs ${darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                      }`}
                  >
                    Frontend Developer
                  </p>

                </div>

              </div>

              <button
                onClick={handleLogout}
                className="
                  w-full

                  flex
                  items-center
                  justify-center
                  gap-2

                  py-3

                  rounded-xl

                  bg-red-500
                  hover:bg-red-600

                  text-white

                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  active:scale-95
                "
              >

                <LogOut size={18} />

                Logout

              </button>

            </>
          ) : (

            <button
              onClick={handleLogout}
              className="
                w-full

                flex
                items-center
                justify-center

                py-3

                rounded-xl

                bg-red-500
                hover:bg-red-600

                text-white

                transition-all
                duration-300

                hover:scale-105
                active:scale-95
              "
            >
              <LogOut size={20} />
            </button>

          )}

        </div>

      </aside>

    </>
  );
}