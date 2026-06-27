import MainLayout from "../layouts/MainLayout";

import {
  Bot,
  Brain,
  Languages,
  MessageSquare,
  Clock,
  Sparkles,
  Save,
  SlidersHorizontal,
  CheckCircle,
} from "lucide-react";

export default function AIPreferences() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Bot className="text-blue-600" />
            AI Preferences
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Customize how the AI assistant behaves and responds.
          </p>
        </div>

        <button
          className="
          flex items-center gap-2
          bg-blue-600 hover:bg-blue-700
          text-white px-5 py-3 rounded-xl
          transition-all duration-300
          hover:scale-105
        "
        >
          <Save size={18} />
          Save Preferences
        </button>

      </div>

      {/* Settings Grid */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Response Style */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

          <div className="flex items-center gap-3 mb-5">
            <MessageSquare className="text-blue-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Response Style
            </h2>
          </div>

          <select
            className="
            w-full p-3 rounded-xl
            bg-slate-100 dark:bg-slate-900
            border border-slate-300 dark:border-slate-700
          "
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Technical</option>
            <option>Formal</option>
          </select>

        </div>

        {/* Language */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

          <div className="flex items-center gap-3 mb-5">
            <Languages className="text-green-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Preferred Language
            </h2>
          </div>

          <select
            className="
            w-full p-3 rounded-xl
            bg-slate-100 dark:bg-slate-900
            border border-slate-300 dark:border-slate-700
          "
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

        </div>

        {/* Creativity */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="text-yellow-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Creativity Level
            </h2>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="w-full"
          />

          <p className="text-sm text-slate-500 mt-3">
            Controls how creative AI responses should be.
          </p>

        </div>

        {/* Response Length */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

          <div className="flex items-center gap-3 mb-5">
            <Clock className="text-red-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Response Length
            </h2>
          </div>

          <select
            className="
            w-full p-3 rounded-xl
            bg-slate-100 dark:bg-slate-900
            border border-slate-300 dark:border-slate-700
          "
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Detailed</option>
          </select>

        </div>

      </div>

      {/* Advanced Settings */}
      <div
        className="
          mt-8
          bg-white dark:bg-slate-800
          rounded-2xl p-6 shadow-lg
          border border-slate-200 dark:border-slate-700
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <SlidersHorizontal className="text-purple-500" />

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Advanced AI Controls
          </h2>
        </div>

        <div className="space-y-5">

          <label className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Brain size={18} />
              Enable Context Memory
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-blue-600"
            />
          </label>

          <label className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Bot size={18} />
              Auto Suggest Answers
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-blue-600"
            />
          </label>

          <label className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <CheckCircle size={18} />
              Confidence Scoring
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-blue-600"
            />
          </label>

        </div>

      </div>

      {/* AI Status Card */}
      <div
        className="
          mt-8
          bg-gradient-to-r
          from-blue-600 to-indigo-700
          text-white
          rounded-2xl p-8 shadow-lg
        "
      >
        <div className="flex items-center gap-4">

          <Bot size={42} />

          <div>
            <h2 className="text-2xl font-bold">
              AI Assistant Status
            </h2>

            <p className="opacity-90 mt-1">
              Running GPT-based RAG System • Online • Healthy
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div>
            <h3 className="text-sm opacity-80">
              Accuracy
            </h3>

            <p className="text-3xl font-bold">
              96.8%
            </p>
          </div>

          <div>
            <h3 className="text-sm opacity-80">
              Avg Response
            </h3>

            <p className="text-3xl font-bold">
              1.2s
            </p>
          </div>

          <div>
            <h3 className="text-sm opacity-80">
              Documents Indexed
            </h3>

            <p className="text-3xl font-bold">
              250
            </p>
          </div>

        </div>

      </div>

    </MainLayout>
  );
}