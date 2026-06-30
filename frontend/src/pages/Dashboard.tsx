import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";
import QueryChart from "../components/QueryChart";

import {
  Users,
  MessageSquare,
  Bot,
  FileText,
  ArrowRight,
  Upload,
  Database,
  Search,
  Brain,
  CheckCircle,
  UserPlus,
  BookOpen,
  Activity,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* ========================= */}
      {/* Dashboard Header */}
      {/* ========================= */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

        <div>

          <div className="flex items-center gap-3 mb-2">

            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

              <Bot className="text-white" size={24} />

            </div>

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Dashboard
              </h1>

              <p className="text-slate-500 dark:text-slate-400 mt-1">
                AI Customer Support Assistant Monitoring Panel
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <button
            className="
              px-5
              py-3
              rounded-xl
              border
              border-slate-300
              dark:border-slate-700
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
            "
          >
            Export Data
          </button>

          <button
            className="
              px-5
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              shadow-lg
              transition
            "
          >
            Generate Report
          </button>

        </div>

      </div>

      {/* ========================= */}
      {/* Quick Stats */}
      {/* ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">

        <StatsCard
          title="Active Users"
          value="1,245"
          icon={<Users />}
        />

        <StatsCard
          title="Queries Today"
          value="5,428"
          icon={<MessageSquare />}
        />

        <StatsCard
          title="Knowledge Docs"
          value="250"
          icon={<FileText />}
        />

        <StatsCard
          title="AI Accuracy"
          value="96.8%"
          icon={<Bot />}
        />

      </div>

      {/* ========================= */}
      {/* Quick Overview Cards */}
      {/* ========================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Response Time
              </p>

              <h3 className="text-3xl font-bold mt-2 text-green-600">
                1.2s
              </h3>

            </div>

            <Clock
              className="text-green-500"
              size={34}
            />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                AI Health
              </p>

              <h3 className="text-3xl font-bold mt-2 text-blue-600">
                98%
              </h3>

            </div>

            <ShieldCheck
              className="text-blue-500"
              size={34}
            />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Growth
              </p>

              <h3 className="text-3xl font-bold mt-2 text-purple-600">
                +12%
              </h3>

            </div>

            <TrendingUp
              className="text-purple-500"
              size={34}
            />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Active Sessions
              </p>

              <h3 className="text-3xl font-bold mt-2 text-orange-600">
                324
              </h3>

            </div>

            <Activity
              className="text-orange-500"
              size={34}
            />

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* Query Analytics */}
      {/* ========================= */}

      <div
        className="
          mt-8
          rounded-2xl
          bg-white
          dark:bg-slate-800
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          p-6
        "
      >

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Query Analytics
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              AI interactions during the last 30 days
            </p>

          </div>

          <span className="px-4 py-2 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold">
            +12% Growth
          </span>

        </div>

        <QueryChart />

      </div>

      {/* Recent Activity + Overview */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
              {/* Activity + Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* Recent Activity */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl
            shadow-lg
            p-6
          "
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Recent Activity
            </h2>

            <button
              className="
                text-sm
                text-blue-600
                hover:text-blue-700
                font-medium
              "
            >
              View All
            </button>
          </div>

          <div className="space-y-5">

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FileText
                  size={18}
                  className="text-blue-600"
                />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  CompanyPolicy.pdf uploaded successfully
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  2 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Bot
                  size={18}
                  className="text-green-600"
                />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  AI resolved 120 support tickets
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  18 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <BookOpen
                  size={18}
                  className="text-purple-600"
                />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  Knowledge base indexed successfully
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  35 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                <UserPlus
                  size={18}
                  className="text-yellow-600"
                />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  New support agent registered
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  1 hour ago
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* System Overview */}

        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl
            shadow-lg
            p-6
          "
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              System Overview
            </h2>

            <span className="text-green-600 text-sm font-semibold">
              Healthy
            </span>
          </div>

          <div className="space-y-6">

            <div className="flex justify-between items-center">
              <span className="text-slate-500">
                Documents Indexed
              </span>

              <span className="font-bold text-lg">
                250
              </span>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-[82%]" />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">
                AI Responses Today
              </span>

              <span className="font-bold text-lg">
                786
              </span>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[74%]" />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">
                Average Response Time
              </span>

              <span className="font-bold text-green-600">
                1.2 sec
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">
                User Satisfaction
              </span>

              <span className="font-bold text-blue-600">
                94%
              </span>
            </div>

          </div>
        </div>

      </div>
            {/* Workflow */}
      <section
        className="
          mt-8
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          p-6
          shadow-sm
        "
      >
        <h2 className="text-xl font-bold mb-8">
          RAG Workflow Architecture
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 items-center">

          <div className="rounded-xl bg-blue-100 dark:bg-blue-950/30 p-5 flex flex-col items-center text-center">
            <Upload size={24} className="mb-2" />
            <span className="font-semibold">
              Upload Docs
            </span>
          </div>

          <div className="hidden xl:flex justify-center">
            <ArrowRight />
          </div>

          <div className="rounded-xl bg-green-100 dark:bg-green-950/30 p-5 flex flex-col items-center text-center">
            <Database size={24} className="mb-2" />
            <span className="font-semibold">
              Vector Database
            </span>
          </div>

          <div className="hidden xl:flex justify-center">
            <ArrowRight />
          </div>

          <div className="rounded-xl bg-yellow-100 dark:bg-yellow-950/30 p-5 flex flex-col items-center text-center">
            <Search size={24} className="mb-2" />
            <span className="font-semibold">
              Retrieval
            </span>
          </div>

          <div className="hidden xl:flex justify-center">
            <ArrowRight />
          </div>

          <div className="rounded-xl bg-purple-100 dark:bg-purple-950/30 p-5 flex flex-col items-center text-center">
            <Brain size={24} className="mb-2" />
            <span className="font-semibold">
              LLM Processing
            </span>
          </div>

          <div className="hidden xl:flex justify-center">
            <ArrowRight />
          </div>

          <div className="rounded-xl bg-red-100 dark:bg-red-950/30 p-5 flex flex-col items-center text-center">
            <CheckCircle size={24} className="mb-2" />
            <span className="font-semibold">
              Response
            </span>
          </div>

        </div>
      </section>

      {/* Bottom Cards */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold">
            AI Health Score
          </h3>

          <p className="text-4xl font-bold mt-4">
            98%
          </p>

          <p className="mt-2 text-blue-100 text-sm">
            Stable performance with excellent uptime.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-green-800 text-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold">
            Documents Processed
          </h3>

          <p className="text-4xl font-bold mt-4">
            15K+
          </p>

          <p className="mt-2 text-green-100 text-sm">
            Indexed across multiple knowledge bases.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold">
            Support Tickets Closed
          </h3>

          <p className="text-4xl font-bold mt-4">
            5,428
          </p>

          <p className="mt-2 text-purple-100 text-sm">
            Automated and assisted resolutions combined.
          </p>
        </div>

      </section>
    </div>
    </MainLayout>
  );
}