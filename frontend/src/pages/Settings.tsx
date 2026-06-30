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
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-5 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-lg">
              <SettingsIcon size={28} />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Settings
              </h1>

              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Customize your dashboard preferences and account settings.
              </p>
            </div>
          </div>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white
            px-6 py-3
            rounded-xl
            shadow-lg
            transition-all duration-300
            hover:scale-105
            active:scale-95
          "
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Appearance */}
        <div
          className="
            bg-white dark:bg-slate-800
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            p-6
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              {darkMode ? (
                <Moon className="text-blue-500" />
              ) : (
                <Sun className="text-yellow-500" />
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Appearance
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Customize application theme
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Switch between light and dark themes
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className={`
                relative
                w-16
                h-8
                rounded-full
                transition-all
                duration-300
                ${darkMode ? "bg-blue-600" : "bg-slate-300"}
              `}
            >
              <div
                className={`
                  absolute
                  top-1
                  left-1
                  w-6
                  h-6
                  bg-white
                  rounded-full
                  transition-all
                  duration-300
                  ${darkMode ? "translate-x-8" : ""}
                `}
              />
            </button>

          </div>
        </div>

        {/* Notifications */}
        <div
          className="
            bg-white dark:bg-slate-800
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            p-6
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
              <Bell className="text-green-500" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Notifications
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage notification preferences
              </p>
            </div>
          </div>

          <div className="space-y-5">

            {[
              "Email Notifications",
              "System Alerts",
              "AI Activity Updates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between"
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
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            p-6
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30">
              <Shield className="text-red-500" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Security
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Account protection settings
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <button
              className="
                w-full
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                bg-slate-100 dark:bg-slate-900
                hover:bg-slate-200 dark:hover:bg-slate-700
                transition
              "
            >
              <Lock size={18} />
              Change Password
            </button>

            <button
              className="
                w-full
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                bg-slate-100 dark:bg-slate-900
                hover:bg-slate-200 dark:hover:bg-slate-700
                transition
              "
            >
              <Shield size={18} />
              Two-Factor Authentication
            </button>

          </div>
        </div>

        {/* Account */}
        <div
          className="
            bg-white dark:bg-slate-800
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            p-6
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <User className="text-purple-500" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Account
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage profile information
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <User size={18} />
              Edit Profile
            </button>

            <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <Globe size={18} />
              Language Preferences
            </button>

          </div>
        </div>

      </div>
      {/* Security */}
      <div
        className="
            rounded-2xl
            border
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            hover:-translate-y-1

            bg-white
            border-slate-200

            dark:bg-slate-900/60
            dark:border-slate-800
            backdrop-blur-xl
          "
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-red-100 dark:bg-red-500/10">
            <Shield className="text-red-600 dark:text-red-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Security
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Protect your account and AI workspace.
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <button
            className="
                w-full
                flex
                items-center
                gap-3

                p-4
                rounded-xl

                bg-slate-100
                hover:bg-slate-200

                dark:bg-slate-800
                dark:hover:bg-slate-700

                transition-all
              "
          >
            <Lock size={18} />
            Change Password
          </button>

          <button
            className="
                w-full
                flex
                items-center
                gap-3

                p-4
                rounded-xl

                bg-slate-100
                hover:bg-slate-200

                dark:bg-slate-800
                dark:hover:bg-slate-700

                transition-all
              "
          >
            <Shield size={18} />
            Two-Factor Authentication
          </button>

        </div>
      </div>

      {/* Account */}
      <div
        className="
            rounded-2xl
            border
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            hover:-translate-y-1

            bg-white
            border-slate-200

            dark:bg-slate-900/60
            dark:border-slate-800
            backdrop-blur-xl
          "
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/10">
            <User className="text-purple-600 dark:text-purple-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Account
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Manage your profile and language.
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <button
            className="
                w-full
                flex
                items-center
                gap-3

                p-4
                rounded-xl

                bg-slate-100
                hover:bg-slate-200

                dark:bg-slate-800
                dark:hover:bg-slate-700

                transition-all
              "
          >
            <User size={18} />
            Edit Profile
          </button>

          <button
            className="
                w-full
                flex
                items-center
                gap-3

                p-4
                rounded-xl

                bg-slate-100
                hover:bg-slate-200

                dark:bg-slate-800
                dark:hover:bg-slate-700

                transition-all
              "
          >
            <Globe size={18} />
            Language Preferences
          </button>

        </div>
      </div>

      {/* System Configuration */}
      <div
        className="
          mt-8

          rounded-2xl
          border

          bg-white
          border-slate-200

          dark:bg-slate-900/60
          dark:border-slate-800

          backdrop-blur-xl

          p-6
          shadow-sm
        "
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10">
            <Database className="text-indigo-600 dark:text-indigo-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              System Configuration
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Current AI system health and platform status.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="
              rounded-2xl
              border
              border-green-200
              dark:border-green-800

              bg-gradient-to-br
              from-green-50
              to-green-100

              dark:from-green-900/20
              dark:to-green-800/10

              p-6
              text-center

              hover:shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <CheckCircle2
              size={34}
              className="mx-auto text-green-600 dark:text-green-400 mb-4"
            />

            <h3 className="font-semibold text-lg">
              AI Status
            </h3>

            <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
              ● Online
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              All AI services are operating normally.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-blue-200
              dark:border-blue-800

              bg-gradient-to-br
              from-blue-50
              to-blue-100

              dark:from-blue-900/20
              dark:to-blue-800/10

              p-6
              text-center

              hover:shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Database
              size={34}
              className="mx-auto text-blue-600 dark:text-blue-400 mb-4"
            />

            <h3 className="font-semibold text-lg">
              Documents
            </h3>

            <p className="text-3xl font-bold mt-2">
              250
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              Indexed Successfully
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-red-200
              dark:border-red-800

              bg-gradient-to-br
              from-red-50
              to-red-100

              dark:from-red-900/20
              dark:to-red-800/10

              p-6
              text-center

              hover:shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Shield
              size={34}
              className="mx-auto text-red-600 dark:text-red-400 mb-4"
            />

            <h3 className="font-semibold text-lg">
              Security
            </h3>

            <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
              Protected
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              Firewall & encryption enabled.
            </p>
          </div>

        </div>
      </div>

    </MainLayout>
  );
}