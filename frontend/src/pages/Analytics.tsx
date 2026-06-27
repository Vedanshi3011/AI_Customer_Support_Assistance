import MainLayout from "../layouts/MainLayout";
import QueryChart from "../components/QueryChart";

import {
  TrendingUp,
  Bot,
  Clock3,
  Smile,
  Database,
  Brain,
  Ticket,
  Lightbulb,
  BarChart3,
  BookOpen,
  Zap,
} from "lucide-react";

export default function Analytics() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Analytics Dashboard
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Monitor AI performance, customer support trends, and system
            efficiency.
          </p>
        </div>

        <button
          className="
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white px-5 py-2 rounded-xl
            shadow-lg hover:scale-105
            transition-all duration-300
          "
        >
          Export Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Total Queries
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
                5,400
              </h2>

              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                +18% growth
              </p>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <BarChart3
                size={24}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Accuracy Rate
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-600 dark:text-green-400">
                95%
              </h2>

              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                Excellent
              </p>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <Bot
                size={24}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Response Time
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
                1.2s
              </h2>

              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                Fast
              </p>
            </div>

            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl">
              <Clock3
                size={24}
                className="text-yellow-500 dark:text-yellow-400"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Satisfaction
              </p>

              <h2 className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">
                92%
              </h2>

              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                Positive
              </p>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <Smile
                size={24}
                className="text-green-500 dark:text-green-400"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            Weekly Query Trend
          </h2>

          <span className="text-green-600 dark:text-green-400 font-medium">
            +18% This Week
          </span>
        </div>

        <QueryChart />
      </div>

      {/* Analytics Sections */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Query Distribution */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-xl font-semibold mb-5 text-slate-800 dark:text-white">
            Query Distribution
          </h2>

          <div className="space-y-5">
            {[
              ["Technical Support", "40%", "w-[40%]", "bg-blue-600"],
              ["Account Issues", "25%", "w-[25%]", "bg-green-500"],
              ["Product Information", "20%", "w-[20%]", "bg-yellow-500"],
              ["General Queries", "15%", "w-[15%]", "bg-purple-500"],
            ].map(([label, value, width, color]) => (
              <div key={label}>
                <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>

                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full">
                  <div
                    className={`h-3 ${width} ${color} rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Metrics */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-xl font-semibold mb-5 text-slate-800 dark:text-white">
            AI Performance Metrics
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <Database size={18} />
                Documents Indexed
              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                250
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <Brain size={18} />
                Embeddings Generated
              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                18,400
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <Bot size={18} />
                Retrieval Success
              </span>

              <span className="font-bold text-green-600 dark:text-green-400">
                97%
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <Ticket size={18} />
                Escalated Tickets
              </span>

              <span className="font-bold text-red-500">
                3%
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* AI Insights */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mt-8">
        <div className="flex items-center gap-3 mb-5">
          <Lightbulb
            size={24}
            className="text-yellow-500"
          />

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            AI Generated Insights
          </h2>
        </div>

        <ul className="space-y-4">

          <li className="border-l-4 border-blue-500 pl-4 flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <TrendingUp
              size={18}
              className="text-blue-500 mt-1 flex-shrink-0"
            />
            <span>
              Customer queries increased by 18% this week.
            </span>
          </li>

          <li className="border-l-4 border-green-500 pl-4 flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <Bot
              size={18}
              className="text-green-500 mt-1 flex-shrink-0"
            />
            <span>
              AI resolved 95% of requests automatically.
            </span>
          </li>

          <li className="border-l-4 border-purple-500 pl-4 flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <BookOpen
              size={18}
              className="text-purple-500 mt-1 flex-shrink-0"
            />
            <span>
              Newly uploaded documents improved retrieval quality.
            </span>
          </li>

          <li className="border-l-4 border-yellow-500 pl-4 flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <Zap
              size={18}
              className="text-yellow-500 mt-1 flex-shrink-0"
            />
            <span>
              Average response time remains under 2 seconds.
            </span>
          </li>

        </ul>
      </div>
    </MainLayout>
  );
}