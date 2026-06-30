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

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          lg:items-center

          gap-5

          mb-8
        "
      >

        <div>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Analytics Dashboard
          </h1>

          <p
            className="
              mt-2

              text-sm
              sm:text-base

              text-slate-500
              dark:text-slate-400

              max-w-2xl
            "
          >
            Monitor AI performance, customer support trends,
            response quality and overall system efficiency.
          </p>

        </div>

        <button
          className="
            w-full
            sm:w-auto

            bg-gradient-to-r
            from-blue-600
            to-indigo-600

            hover:from-blue-700
            hover:to-indigo-700

            text-white

            px-6
            py-3

            rounded-xl

            shadow-lg

            transition-all
            duration-300

            hover:scale-105
          "
        >
          Export Report
        </button>

      </div>

      {/* ========================= */}
      {/* KPI Cards */}
      {/* ========================= */}

      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-6
        "
      >

        {/* Total Queries */}

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

            hover:shadow-xl

            transition-all
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Queries
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
                5,400
              </h2>

              <p className="mt-3 text-green-600 dark:text-green-400 text-sm">
                +18% growth
              </p>

            </div>

            <div
              className="
                p-4

                rounded-xl

                bg-blue-100
                dark:bg-blue-900/30
              "
            >

              <BarChart3
                size={26}
                className="text-blue-600 dark:text-blue-400"
              />

            </div>

          </div>

        </div>

        {/* Accuracy */}

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

            hover:shadow-xl

            transition-all
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Accuracy Rate
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-600 dark:text-green-400">
                95%
              </h2>

              <p className="mt-3 text-green-600 dark:text-green-400 text-sm">
                Excellent
              </p>

            </div>

            <div
              className="
                p-4

                rounded-xl

                bg-purple-100
                dark:bg-purple-900/30
              "
            >

              <Bot
                size={26}
                className="text-purple-600 dark:text-purple-400"
              />

            </div>

          </div>

        </div>

        {/* Response Time */}

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

            hover:shadow-xl

            transition-all
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Response Time
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
                1.2s
              </h2>

              <p className="mt-3 text-green-600 dark:text-green-400 text-sm">
                Fast
              </p>

            </div>

            <div
              className="
                p-4

                rounded-xl

                bg-yellow-100
                dark:bg-yellow-900/30
              "
            >

              <Clock3
                size={26}
                className="text-yellow-500 dark:text-yellow-400"
              />

            </div>

          </div>

        </div>

        {/* Satisfaction */}

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

            hover:shadow-xl

            transition-all
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Satisfaction
              </p>

              <h2 className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">
                92%
              </h2>

              <p className="mt-3 text-green-600 dark:text-green-400 text-sm">
                Positive
              </p>

            </div>

            <div
              className="
                p-4

                rounded-xl

                bg-green-100
                dark:bg-green-900/30
              "
            >

              <Smile
                size={26}
                className="text-green-500 dark:text-green-400"
              />

            </div>

          </div>

        </div>

      </div>
      {/* ========================= */}
      {/* Weekly Query Trend */}
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

          p-4
          sm:p-6
        "
      >

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">
            Weekly Query Trend
          </h2>

          <span className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
            +18% This Week
          </span>

        </div>

        <QueryChart />

      </div>

      {/* ========================= */}
      {/* Analytics Cards */}
      {/* ========================= */}

      <div
        className="
          grid

          grid-cols-1
          xl:grid-cols-2

          gap-6

          mt-8
        "
      >

        {/* Query Distribution */}

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

          <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
            Query Distribution
          </h2>

          <div className="space-y-6">

            {[
              [
                "Technical Support",
                "40%",
                "w-[40%]",
                "bg-blue-600",
              ],

              [
                "Account Issues",
                "25%",
                "w-[25%]",
                "bg-green-500",
              ],

              [
                "Product Information",
                "20%",
                "w-[20%]",
                "bg-yellow-500",
              ],

              [
                "General Queries",
                "15%",
                "w-[15%]",
                "bg-purple-500",
              ],

            ].map(([label, value, width, color]) => (

              <div key={label}>

                <div className="flex justify-between mb-2 text-slate-700 dark:text-slate-300">

                  <span>{label}</span>

                  <span>{value}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">

                  <div
                    className={`h-full ${width} ${color} rounded-full transition-all duration-500`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* AI Performance */}

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

          <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
            AI Performance Metrics
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">

                <Database size={18} />

                Documents Indexed

              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                250
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">

                <Brain size={18} />

                Embeddings Generated

              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                18,400
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">

                <Bot size={18} />

                Retrieval Success

              </span>

              <span className="font-bold text-green-600 dark:text-green-400">
                97%
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">

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
      {/* ========================= */}
      {/* AI Generated Insights */}
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

          <Lightbulb
            size={24}
            className="text-yellow-500"
          />

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            AI Generated Insights
          </h2>

        </div>

        <ul className="space-y-5">

          <li
            className="
              flex
              items-start
              gap-3

              border-l-4
              border-blue-500

              pl-4

              text-slate-700
              dark:text-slate-300
            "
          >

            <TrendingUp
              size={18}
              className="mt-1 text-blue-500 flex-shrink-0"
            />

            <span>
              Customer queries increased by <strong>18%</strong> this
              week compared to the previous reporting period.
            </span>

          </li>

          <li
            className="
              flex
              items-start
              gap-3

              border-l-4
              border-green-500

              pl-4

              text-slate-700
              dark:text-slate-300
            "
          >

            <Bot
              size={18}
              className="mt-1 text-green-500 flex-shrink-0"
            />

            <span>
              AI successfully resolved <strong>95%</strong> of customer
              requests without requiring human intervention.
            </span>

          </li>

          <li
            className="
              flex
              items-start
              gap-3

              border-l-4
              border-purple-500

              pl-4

              text-slate-700
              dark:text-slate-300
            "
          >

            <BookOpen
              size={18}
              className="mt-1 text-purple-500 flex-shrink-0"
            />

            <span>
              Recently uploaded knowledge-base documents significantly
              improved retrieval quality and response relevance.
            </span>

          </li>

          <li
            className="
              flex
              items-start
              gap-3

              border-l-4
              border-yellow-500

              pl-4

              text-slate-700
              dark:text-slate-300
            "
          >

            <Zap
              size={18}
              className="mt-1 text-yellow-500 flex-shrink-0"
            />

            <span>
              Average AI response time remains below
              <strong> 2 seconds</strong>, providing a fast customer
              support experience.
            </span>

          </li>

        </ul>

      </div>

    </MainLayout>
  );
}