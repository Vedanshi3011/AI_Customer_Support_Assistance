import MainLayout from "../layouts/MainLayout";

import {
  UploadCloud,
  FileText,
  Search,
  RefreshCw,
  Upload,
  ArrowRight,
  Brain,
  Database,
  CheckCircle,
  FileSearch,
} from "lucide-react";

export default function Documents() {
  const documents = [
    {
      name: "CompanyPolicy.pdf",
      status: "Processed",
      size: "2.4 MB",
      date: "22 Jun 2026",
    },
    {
      name: "FAQ.pdf",
      status: "Indexed",
      size: "1.2 MB",
      date: "23 Jun 2026",
    },
    {
      name: "EmployeeHandbook.pdf",
      status: "Processed",
      size: "4.7 MB",
      date: "21 Jun 2026",
    },
    {
      name: "ProductGuide.pdf",
      status: "Processing",
      size: "3.8 MB",
      date: "24 Jun 2026",
    },
  ];

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Knowledge Base
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage documents used for AI-powered responses.
          </p>
        </div>

        <button
          className="
            bg-blue-600 hover:bg-blue-700
            dark:bg-blue-500 dark:hover:bg-blue-600
            text-white px-5 py-2 rounded-lg
            flex items-center gap-2
            transition-all duration-300
          "
        >
          <RefreshCw size={18} />
          Refresh Index
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Total Documents
          </p>

          <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            250
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Indexed Files
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600 dark:text-green-400">
            230
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Processing Queue
          </p>

          <h2 className="text-3xl font-bold mt-2 text-yellow-600 dark:text-yellow-400">
            20
          </h2>
        </div>
      </div>

      {/* Upload */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border dark:border-slate-700 mb-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Upload Document
        </h2>

        <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-10 text-center">
          <UploadCloud
            size={55}
            className="mx-auto text-blue-600 dark:text-blue-400 mb-4"
          />

          <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
            Upload PDF, DOCX or TXT files
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-2 mb-5">
            Documents will be indexed and stored in the vector database.
          </p>

          <input
            type="file"
            className="mb-4 text-slate-700 dark:text-slate-300"
          />

          <br />

          <button
            className="
              bg-blue-600 hover:bg-blue-700
              dark:bg-blue-500 dark:hover:bg-blue-600
              text-white px-5 py-2 rounded-lg
            "
          >
            Upload Document
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow border dark:border-slate-700 mb-6">
        <div className="flex items-center gap-3">
          <Search className="text-slate-500" size={18} />

          <input
            type="text"
            placeholder="Search documents..."
            className="
              w-full bg-transparent
              text-slate-900 dark:text-white
              placeholder:text-slate-500
              outline-none
            "
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border dark:border-slate-700 overflow-hidden">
        <div className="p-5 border-b dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Uploaded Documents
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 text-left">Document</th>
                <th>Status</th>
                <th>Size</th>
                <th>Updated</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc, index) => (
                <tr
                  key={index}
                  className="
                    border-b dark:border-slate-700
                    hover:bg-slate-50 dark:hover:bg-slate-700/50
                    transition
                  "
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                      <FileText size={18} />
                      {doc.name}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        doc.status === "Processed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : doc.status === "Indexed"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>

                  <td className="text-slate-700 dark:text-slate-300">
                    {doc.size}
                  </td>

                  <td className="text-slate-700 dark:text-slate-300">
                    {doc.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RAG Pipeline */}
      <div className="bg-white dark:bg-slate-800 mt-8 p-6 rounded-xl shadow border dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          RAG Document Pipeline
        </h2>

        <div className="flex flex-wrap gap-4 items-center justify-center text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-3 rounded-lg shadow">
            <Upload size={18} />
            Upload
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-3 rounded-lg shadow">
            <FileSearch size={18} />
            Extract Text
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-3 rounded-lg shadow">
            <Brain size={18} />
            Generate Embeddings
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg shadow">
            <Database size={18} />
            Store Vectors
          </div>

          <ArrowRight size={18} />

          <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-4 py-3 rounded-lg shadow">
            <CheckCircle size={18} />
            AI Ready
          </div>
        </div>
      </div>
    </MainLayout>
  );
}