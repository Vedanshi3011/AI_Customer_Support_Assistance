import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";
import Documents from "../pages/Documents";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import AIPreferences from "../pages/AIPreference";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <p className="text-xl mt-4 text-slate-700 dark:text-slate-300">
          Page Not Found
        </p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Chat */}
        <Route
          path="/chat"
          element={<Chat />}
        />

        {/* Documents */}
        <Route
          path="/documents"
          element={<Documents />}
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* AI Preferences */}
        <Route
          path="/ai-preferences"
          element={<AIPreferences />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}