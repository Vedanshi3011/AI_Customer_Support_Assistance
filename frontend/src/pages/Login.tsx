import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bot,
  Brain,
  Database,
  ShieldCheck,
  Mail,
  Lock,
  User,
  ArrowRight,
  Sun,
  Moon,
  Eye,
  EyeOff,
} from "lucide-react";

import { useThemeStore } from "../store/themeStore";

export default function Login() {
  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useThemeStore();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className={`
        min-h-screen flex overflow-hidden relative
        transition-colors duration-300
        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-900"
        }
      `}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute top-20 left-20
            w-72 h-72 rounded-full
            bg-blue-500/20 blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute bottom-10 right-10
            w-96 h-96 rounded-full
            bg-purple-500/20 blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-80 h-80 rounded-full
            bg-cyan-500/10 blur-3xl
            animate-pulse
          "
        />

      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="
          absolute top-6 right-6 z-50
          p-3 rounded-xl
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-700
          shadow-lg
          hover:scale-105
          transition-all
        "
      >
        {darkMode ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>

      {/* Left Section */}
      <div
        className="
          hidden lg:flex lg:w-1/2
          bg-gradient-to-br
          from-blue-700
          via-indigo-700
          to-purple-800
          text-white
          relative z-10
          flex-col
          justify-center
          px-16
        "
      >
        <div className="flex items-center gap-4 mb-8">

          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur">
            <Bot size={40} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              AI Support
            </h1>

            <p className="text-blue-100">
              Customer Assistant Platform
            </p>
          </div>

        </div>

        <h2 className="text-5xl font-bold leading-tight mb-6">
          Intelligent Customer Support
        </h2>

        <p className="text-lg text-blue-100 leading-8 max-w-xl">
          AI-powered customer support built with
          Retrieval-Augmented Generation, Vector Search,
          Knowledge Bases and Large Language Models.
        </p>

        <div className="mt-12 space-y-4">

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl flex items-center gap-4 hover:translate-x-2 transition-all">
            <Brain size={24} />
            <span>AI Powered Responses</span>
          </div>

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl flex items-center gap-4 hover:translate-x-2 transition-all">
            <Database size={24} />
            <span>Knowledge Base Integration</span>
          </div>

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl flex items-center gap-4 hover:translate-x-2 transition-all">
            <ShieldCheck size={24} />
            <span>Fast & Accurate Support</span>
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 relative z-10">

        <div
          className={`
            w-full max-w-md
            rounded-3xl
            shadow-2xl
            border
            p-8
            backdrop-blur-xl
            transition-all duration-300
            ${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
            }
          `}
        >
          {/* Logo */}
          <div className="text-center mb-8">

            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
              <Bot size={30} />
            </div>

            <h2 className="text-3xl font-bold">
              {isSignup
                ? "Create Account"
                : "Welcome Back"}
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              {isSignup
                ? "Create your AI Support account"
                : "Sign in to access your dashboard"}
            </p>

          </div>

          <div className="space-y-5">

            {/* Full Name */}
            {isSignup && (
              <div className="relative">

                <User
                  size={18}
                  className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full pl-11 pr-4 py-3
                    rounded-xl border
                    bg-transparent
                    border-slate-300 dark:border-slate-700
                    focus:ring-2 focus:ring-blue-500
                    outline-none
                  "
                />

              </div>
            )}

            {/* Email */}
            <div className="relative">

              <Mail
                size={18}
                className="
                  absolute left-4 top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full pl-11 pr-4 py-3
                  rounded-xl border
                  bg-transparent
                  border-slate-300 dark:border-slate-700
                  focus:ring-2 focus:ring-blue-500
                  outline-none
                "
              />

            </div>

            {/* Password */}
            <div className="relative">

              <Lock
                size={18}
                className="
                  absolute left-4 top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                className="
                  w-full pl-11 pr-12 py-3
                  rounded-xl border
                  bg-transparent
                  border-slate-300 dark:border-slate-700
                  focus:ring-2 focus:ring-blue-500
                  outline-none
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute right-4 top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {/* Confirm Password */}
            {isSignup && (
              <div className="relative">

                <Lock
                  size={18}
                  className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="
                    w-full pl-11 pr-4 py-3
                    rounded-xl border
                    bg-transparent
                    border-slate-300 dark:border-slate-700
                    focus:ring-2 focus:ring-blue-500
                    outline-none
                  "
                />

              </div>
            )}

            {!isSignup && (
              <div className="flex justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-500">

                  <input type="checkbox" />

                  Remember Me

                </label>

                <button className="text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </button>

              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                font-semibold
                flex items-center
                justify-center
                gap-2
                transition-all
                hover:scale-[1.02]
              "
            >
              {isSignup
                ? "Create Account"
                : "Login"}

              <ArrowRight size={18} />
            </button>

            {/* Divider */}
            <div className="relative my-6">

              <div className="border-t border-slate-300 dark:border-slate-700" />

              <span
                className="
                  absolute left-1/2 top-0
                  -translate-x-1/2 -translate-y-1/2
                  px-3 text-sm
                  bg-white dark:bg-slate-900
                  text-slate-500
                "
              >
                OR
              </span>

            </div>

            {/* Toggle */}
            <div className="text-center">

              <button
                onClick={() =>
                  setIsSignup(!isSignup)
                }
                className="
                  text-blue-600
                  hover:text-blue-700
                  font-medium
                "
              >
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>

            </div>

          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            AI Customer Support Assistant © 2026
          </div>

        </div>

      </div>
    </div>
  );
}