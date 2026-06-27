import MainLayout from "../layouts/MainLayout";
import { useThemeStore } from "../store/themeStore";

import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Moon,
  Sun,
  User,
  Lock,
  Globe,
  Database,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function Settings() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <SettingsIcon className="text-blue-600" />
            Settings
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Customize your dashboard preferences and account settings.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white px-5 py-3
            rounded-xl shadow-lg
            transition-all duration-300
            hover:scale-105
          "
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Appearance */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl p-6 shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-3 mb-5">
            {darkMode ? (
              <Moon className="text-blue-500" />
            ) : (
              <Sun className="text-yellow-500" />
            )}

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Appearance
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-slate-800 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Switch between light and dark themes.
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className={`
                relative w-16 h-8 rounded-full transition-all duration-300
                ${
                  darkMode
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }
              `}
            >
              <div
                className={`
                  absolute top-1 left-1
                  bg-white w-6 h-6 rounded-full
                  transition-all duration-300
                  ${
                    darkMode
                      ? "translate-x-8"
                      : ""
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl p-6 shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <Bell className="text-green-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Email Notifications",
              "System Alerts",
              "AI Activity Updates",
            ].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center"
              >
                <span className="text-slate-700 dark:text-slate-300">
                  {item}
                </span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl p-6 shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <Shield className="text-red-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Security
            </h2>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <Lock size={18} />
              Change Password
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <Shield size={18} />
              Two-Factor Authentication
            </button>
          </div>
        </div>

        {/* Account */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl p-6 shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <User className="text-purple-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Account
            </h2>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <User size={18} />
              Edit Profile
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <Globe size={18} />
              Language Preferences
            </button>
          </div>
        </div>
      </div>

      {/* System Configuration */}
      <div
        className="
          mt-8
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          rounded-2xl p-6 shadow-lg
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <Database className="text-indigo-500" />

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            System Configuration
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <CheckCircle2
              size={28}
              className="mx-auto text-green-500 mb-3"
            />

            <h3 className="font-semibold text-slate-900 dark:text-white">
              AI Status
            </h3>

            <p className="text-green-600 font-medium mt-1">
              Online
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <Database
              size={28}
              className="mx-auto text-blue-500 mb-3"
            />

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Documents
            </h3>

            <p className="font-bold mt-1 text-slate-700 dark:text-slate-300">
              250 Indexed
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <Shield
              size={28}
              className="mx-auto text-red-500 mb-3"
            />

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Security
            </h3>

            <p className="font-bold mt-1 text-green-600">
              Protected
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}