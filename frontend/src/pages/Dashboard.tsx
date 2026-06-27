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
} from "lucide-react";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Dashboard
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            AI Customer Support Assistant Monitoring Panel
          </p>
        </div>

        <button
          className="
            bg-blue-600 hover:bg-blue-700
            dark:bg-blue-500 dark:hover:bg-blue-600
            text-white px-5 py-3 rounded-xl
            shadow-lg transition-all duration-300
          "
        >
          Generate Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
          title="Accuracy"
          value="96.8%"
          icon={<Bot />}
        />
      </div>

      {/* Analytics Chart */}
      <div
        className="
          mt-8 p-6 rounded-2xl shadow-lg
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
        "
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Query Analytics
          </h2>

          <span className="text-green-600 dark:text-green-400 font-semibold">
            +12% Growth
          </span>
        </div>

        <QueryChart />
      </div>

      {/* Activity + Overview */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Activity */}
        <div
          className="
            p-6 rounded-2xl shadow-lg
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
          "
        >
          <h2 className="text-xl font-bold mb-5 text-slate-800 dark:text-white">
            Recent Activity
          </h2>

          <div className="space-y-5">
            <div className="border-l-4 border-blue-500 pl-4 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <FileText size={18} />
              CompanyPolicy.pdf uploaded successfully
            </div>

            <div className="border-l-4 border-green-500 pl-4 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Bot size={18} />
              AI resolved 120 support tickets
            </div>

            <div className="border-l-4 border-purple-500 pl-4 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <BookOpen size={18} />
              Knowledge base indexed successfully
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <UserPlus size={18} />
              New support agent registered
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div
          className="
            p-6 rounded-2xl shadow-lg
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
          "
        >
          <h2 className="text-xl font-bold mb-5 text-slate-800 dark:text-white">
            System Overview
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Documents Indexed
              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                250
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                AI Responses Today
              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                786
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Response Time
              </span>

              <span className="font-bold text-green-600 dark:text-green-400">
                1.2 sec
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                User Satisfaction
              </span>

              <span className="font-bold text-blue-600 dark:text-blue-400">
                94%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div
        className="
          mt-8 p-6 rounded-2xl shadow-lg
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
        "
      >
        <h2 className="text-xl font-bold mb-8 text-slate-800 dark:text-white">
          RAG Workflow Architecture
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-950/40 px-5 py-4 rounded-xl shadow">
            <Upload size={18} />
            Upload Docs
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-green-100 dark:bg-green-950/40 px-5 py-4 rounded-xl shadow">
            <Database size={18} />
            Vector DB
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-950/40 px-5 py-4 rounded-xl shadow">
            <Search size={18} />
            Retrieval
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-950/40 px-5 py-4 rounded-xl shadow">
            <Brain size={18} />
            LLM
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-red-100 dark:bg-red-950/40 px-5 py-4 rounded-xl shadow">
            <CheckCircle size={18} />
            Response
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div
          className="
            bg-gradient-to-r
            from-blue-500 to-blue-700
            dark:from-blue-700 dark:to-blue-900
            text-white p-6 rounded-2xl shadow-lg
          "
        >
          <h3 className="text-lg font-bold">
            AI Health Score
          </h3>

          <p className="text-4xl font-bold mt-3">
            98%
          </p>
        </div>

        <div
          className="
            bg-gradient-to-r
            from-green-500 to-green-700
            dark:from-green-700 dark:to-green-900
            text-white p-6 rounded-2xl shadow-lg
          "
        >
          <h3 className="text-lg font-bold">
            Documents Processed
          </h3>

          <p className="text-4xl font-bold mt-3">
            15K+
          </p>
        </div>

        <div
          className="
            bg-gradient-to-r
            from-purple-500 to-purple-700
            dark:from-purple-700 dark:to-purple-900
            text-white p-6 rounded-2xl shadow-lg
          "
        >
          <h3 className="text-lg font-bold">
            Support Tickets Closed
          </h3>

          <p className="text-4xl font-bold mt-3">
            5,428
          </p>
        </div>
      </div>
    </MainLayout>
  );
}