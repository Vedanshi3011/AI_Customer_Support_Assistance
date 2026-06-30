import { useState } from "react";

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
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function AIPreferences() {
  const [responseStyle, setResponseStyle] =
    useState("Professional");

  const [language, setLanguage] =
    useState("English");

  const [responseLength, setResponseLength] =
    useState("Detailed");

  const [creativity, setCreativity] =
    useState(6);

  const [contextMemory, setContextMemory] =
    useState(true);

  const [autoSuggest, setAutoSuggest] =
    useState(true);

  const [confidenceScore, setConfidenceScore] =
    useState(true);

  const [safeMode, setSafeMode] =
    useState(true);

  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

        <div>

          <div className="flex items-center gap-3">

            <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-lg">
              <Bot size={28} />
            </div>

            <div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                AI Preferences
              </h1>

              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Configure how your AI assistant behaves,
                responds and retrieves information.
              </p>

            </div>

          </div>

        </div>

        <button
          className="
            flex items-center gap-2

            bg-blue-600
            hover:bg-blue-700

            text-white

            px-6
            py-3

            rounded-xl

            shadow-lg

            transition-all
            duration-300

            hover:scale-[1.03]
            active:scale-95
          "
        >
          <Save size={18} />
          Save Preferences
        </button>

      </div>

      {/* Top Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Current Model
              </p>

              <h3 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                GPT-RAG
              </h3>

            </div>

            <Cpu className="text-blue-600" />

          </div>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Retrieval Accuracy
              </p>

              <h3 className="text-2xl font-bold mt-2 text-green-600">
                96.8%
              </h3>

            </div>

            <Brain className="text-green-600" />

          </div>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Average Response
              </p>

              <h3 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                1.2 sec
              </h3>

            </div>

            <Clock className="text-yellow-500" />

          </div>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Safe Mode
              </p>

              <h3 className="text-2xl font-bold mt-2 text-blue-600">
                Enabled
              </h3>

            </div>

            <ShieldCheck className="text-blue-600" />

          </div>

        </div>

      </div>

      {/* Settings */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Response Style */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">

          <div className="flex items-center gap-3 mb-5">

            <MessageSquare className="text-blue-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Response Style
            </h2>

          </div>

          <select
            value={responseStyle}
            onChange={(e) =>
              setResponseStyle(e.target.value)
            }
            className="
              w-full
              rounded-xl
              p-3

              bg-slate-100
              dark:bg-slate-900

              border
              border-slate-300
              dark:border-slate-700
            "
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Technical</option>
            <option>Formal</option>
          </select>

        </div>

        {/* Language */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">

          <div className="flex items-center gap-3 mb-5">

            <Languages className="text-green-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Preferred Language
            </h2>

          </div>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="
              w-full
              rounded-xl
              p-3

              bg-slate-100
              dark:bg-slate-900

              border
              border-slate-300
              dark:border-slate-700
            "
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

        </div>

        {/* Creativity */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">

          <div className="flex justify-between items-center mb-5">

            <div className="flex items-center gap-3">

              <Sparkles className="text-yellow-500" />

              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Creativity Level
              </h2>

            </div>

            <span className="font-bold text-blue-600">
              {creativity}/10
            </span>

          </div>

          <input
            type="range"
            min="1"
            max="10"
            value={creativity}
            onChange={(e) =>
              setCreativity(Number(e.target.value))
            }
            className="w-full"
          />

          <p className="text-sm mt-4 text-slate-500 dark:text-slate-400">
            Higher creativity generates more
            imaginative responses while lower values
            prioritize factual consistency.
          </p>

        </div>

        {/* Response Length */}

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">

          <div className="flex items-center gap-3 mb-5">

            <Clock className="text-red-500" />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Response Length
            </h2>

          </div>

          <select
            value={responseLength}
            onChange={(e) =>
              setResponseLength(e.target.value)
            }
            className="
              w-full
              rounded-xl
              p-3

              bg-slate-100
              dark:bg-slate-900

              border
              border-slate-300
              dark:border-slate-700
            "
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Detailed</option>
          </select>

        </div>

      </div>
            {/* ========================= */}
      {/* Advanced AI Controls */}
      {/* ========================= */}

      <div
        className="
          mt-8

          bg-white
          dark:bg-slate-800

          rounded-2xl

          shadow-lg

          border
          border-slate-200
          dark:border-slate-700

          p-6
        "
      >

        <div className="flex items-center gap-3 mb-6">

          <SlidersHorizontal
            className="text-purple-500"
          />

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Advanced AI Controls
          </h2>

        </div>

        <div className="space-y-5">

          {/* Context Memory */}

          <label className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2 font-medium">

                <Brain size={18} />

                Enable Context Memory

              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Remember previous conversation
                context for better responses.
              </p>

            </div>

            <input
              type="checkbox"
              checked={contextMemory}
              onChange={() =>
                setContextMemory(!contextMemory)
              }
              className="w-5 h-5 accent-blue-600"
            />

          </label>

          {/* Auto Suggest */}

          <label className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2 font-medium">

                <Bot size={18} />

                Auto Suggest Answers

              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Generate AI suggestions while
                typing.
              </p>

            </div>

            <input
              type="checkbox"
              checked={autoSuggest}
              onChange={() =>
                setAutoSuggest(!autoSuggest)
              }
              className="w-5 h-5 accent-blue-600"
            />

          </label>

          {/* Confidence */}

          <label className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2 font-medium">

                <CheckCircle size={18} />

                Confidence Scoring

              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Display confidence percentage for
                generated responses.
              </p>

            </div>

            <input
              type="checkbox"
              checked={confidenceScore}
              onChange={() =>
                setConfidenceScore(
                  !confidenceScore
                )
              }
              className="w-5 h-5 accent-blue-600"
            />

          </label>

          {/* Safe Mode */}

          <label className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2 font-medium">

                <ShieldCheck size={18} />

                Safe Mode

              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Filter potentially unsafe or
                sensitive responses automatically.
              </p>

            </div>

            <input
              type="checkbox"
              checked={safeMode}
              onChange={() =>
                setSafeMode(!safeMode)
              }
              className="w-5 h-5 accent-blue-600"
            />

          </label>

        </div>

      </div>

      {/* ========================= */}
      {/* AI Configuration Summary */}
      {/* ========================= */}

      <div
        className="
          mt-8

          grid

          gap-6

          md:grid-cols-2
        "
      >

        <div
          className="
            bg-white
            dark:bg-slate-800

            rounded-2xl

            shadow-lg

            border
            border-slate-200
            dark:border-slate-700

            p-6
          "
        >

          <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">
            Current Configuration
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">
                Response Style
              </span>

              <span className="font-semibold">
                {responseStyle}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">
                Language
              </span>

              <span className="font-semibold">
                {language}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">
                Creativity
              </span>

              <span className="font-semibold">
                {creativity}/10
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">
                Response Length
              </span>

              <span className="font-semibold">
                {responseLength}
              </span>
            </div>

          </div>

        </div>

        <div
          className="
            bg-gradient-to-br

            from-blue-600
            via-indigo-600
            to-purple-700

            rounded-2xl

            text-white

            shadow-xl

            p-6
          "
        >

          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>

          <p className="opacity-90 mt-2">
            Personalized settings help the AI
            deliver faster, smarter and more
            accurate responses tailored to your
            workflow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="px-3 py-2 rounded-lg bg-white/20">
              GPT-RAG
            </span>

            <span className="px-3 py-2 rounded-lg bg-white/20">
              Context Aware
            </span>

            <span className="px-3 py-2 rounded-lg bg-white/20">
              Vector Search
            </span>

          </div>

        </div>

      </div>
            {/* ========================= */}
      {/* AI Status */}
      {/* ========================= */}

      <div
        className="
          mt-8

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-700

          text-white

          rounded-2xl

          shadow-2xl

          overflow-hidden
        "
      >

        <div className="p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div className="flex items-center gap-5">

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-white/20

                  flex
                  items-center
                  justify-center
                "
              >
                <Bot size={36} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  AI Assistant Status
                </h2>

                <p className="opacity-90 mt-2">
                  GPT-powered Retrieval-Augmented
                  Generation system is running
                  normally.
                </p>

              </div>

            </div>

            <div
              className="
                px-5
                py-3

                rounded-xl

                bg-green-500/20
                border
                border-green-300/30

                flex
                items-center
                gap-3
              "
            >

              <CheckCircle size={22} />

              <span className="font-semibold">
                System Healthy
              </span>

            </div>

          </div>

          {/* Metrics */}

          <div
            className="
              grid
              gap-6

              md:grid-cols-2
              xl:grid-cols-4

              mt-10
            "
          >

            <div>

              <p className="text-sm opacity-80">
                Accuracy
              </p>

              <h3 className="text-4xl font-bold mt-2">
                96.8%
              </h3>

            </div>

            <div>

              <p className="text-sm opacity-80">
                Avg Response
              </p>

              <h3 className="text-4xl font-bold mt-2">
                1.2s
              </h3>

            </div>

            <div>

              <p className="text-sm opacity-80">
                Documents Indexed
              </p>

              <h3 className="text-4xl font-bold mt-2">
                250
              </h3>

            </div>

            <div>

              <p className="text-sm opacity-80">
                Vector Embeddings
              </p>

              <h3 className="text-4xl font-bold mt-2">
                18.4K
              </h3>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}