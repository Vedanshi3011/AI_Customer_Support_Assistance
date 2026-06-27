import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
} from "lucide-react";

import { useThemeStore } from "../store/themeStore";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const { darkMode } = useThemeStore();

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

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-72"}
        min-h-screen
        flex flex-col
        transition-all duration-300
        border-r
        ${
          darkMode
            ? "bg-slate-950 border-slate-800 text-white"
            : "bg-white border-slate-200 text-slate-900 shadow-sm"
        }
      `}
    >
      {/* Logo */}
      <div
        className={`
          p-5 border-b
          ${
            darkMode
              ? "border-slate-800"
              : "border-slate-200"
          }
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot
              size={32}
              className="text-blue-600"
            />

            {!collapsed && (
              <div>
                <h1 className="font-bold text-xl">
                  AI Support
                </h1>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  Customer Assistant
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className={`
              p-1 rounded-lg transition
              ${
                darkMode
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
        </div>
      </div>

      {/* AI Status */}
      {!collapsed && (
        <div
          className={`
            mx-4 mt-4 p-4 rounded-xl
            ${
              darkMode
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
            className={`text-xs mt-3 ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Avg Response: 1.2s
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              title={
                collapsed
                  ? item.name
                  : undefined
              }
              className={`
                flex items-center
                ${
                  collapsed
                    ? "justify-center"
                    : "justify-between"
                }
                p-3 mb-2 rounded-xl
                transition-all duration-300

                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
                    : darkMode
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-slate-100 text-slate-700"
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

              {!collapsed && item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className={`
          mt-auto
          p-4
          border-t
          ${
            darkMode
              ? "border-slate-800"
              : "border-slate-200"
          }
        `}
      >
        {!collapsed ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <User
                  size={18}
                  className="text-white"
                />
              </div>

              <div>
                <p className="font-medium">
                  Admin User
                </p>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  Frontend Developer
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-red-500
                hover:bg-red-600
                text-white
                py-2.5
                rounded-xl
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="
              w-full
              flex
              items-center
              justify-center
              bg-red-500
              hover:bg-red-600
              text-white
              py-2.5
              rounded-xl
              transition-all
            "
          >
            <LogOut size={18} />
          </button>
        )}
      </div>
    </aside>
  );
}