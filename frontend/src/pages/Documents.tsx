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

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          mb-8
        "
      >

        <div>

          <h1
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-slate-900
              dark:text-slate-100
            "
          >
            Knowledge Base
          </h1>

          <p
            className="
              mt-2
              text-sm
              sm:text-base
              text-slate-500
              dark:text-slate-400
            "
          >
            Manage documents used for AI-powered responses.
          </p>

        </div>

        <button
          className="
            w-full
            sm:w-auto

            flex
            items-center
            justify-center
            gap-2

            bg-blue-600
            hover:bg-blue-700

            dark:bg-blue-500
            dark:hover:bg-blue-600

            text-white

            px-5
            py-3

            rounded-xl

            shadow-lg

            transition-all
            duration-300
          "
        >

          <RefreshCw size={18} />

          Refresh Index

        </button>

      </div>

      {/* ========================= */}
      {/* Statistics */}
      {/* ========================= */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          mb-8
        "
      >

        <div
          className="
            bg-white
            dark:bg-slate-800

            rounded-2xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg

            p-6
          "
        >

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Documents
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            250
          </h2>

        </div>

        <div
          className="
            bg-white
            dark:bg-slate-800

            rounded-2xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg

            p-6
          "
        >

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Indexed Files
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-green-600
              dark:text-green-400
            "
          >
            230
          </h2>

        </div>

        <div
          className="
            bg-white
            dark:bg-slate-800

            rounded-2xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg

            p-6

            sm:col-span-2
            xl:col-span-1
          "
        >

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Processing Queue
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-yellow-600
              dark:text-yellow-400
            "
          >
            20
          </h2>

        </div>

      </div>

      {/* ========================= */}
      {/* Upload Section */}
      {/* ========================= */}
      <div
        className="
          bg-white
          dark:bg-slate-800

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          shadow-lg

          p-6

          mb-8
        "
      >

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Upload Document
        </h2>

        <div
          className="
            border-2
            border-dashed
            border-slate-300
            dark:border-slate-600

            rounded-2xl

            p-6
            sm:p-8
            lg:p-10

            text-center
          "
        >

          <UploadCloud
            size={60}
            className="
              mx-auto
              mb-5
              text-blue-600
              dark:text-blue-400
            "
          />

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
            Upload PDF, DOCX or TXT files
          </h3>

          <p
            className="
              mt-3
              mb-6

              text-sm
              sm:text-base

              text-slate-500
              dark:text-slate-400
            "
          >
            Documents will automatically be indexed and stored in the vector database.
          </p>

          <input
            type="file"
            className="
              w-full
              max-w-md

              mx-auto

              block

              text-sm

              text-slate-700
              dark:text-slate-300
            "
          />

          <button
            className="
              mt-6

              w-full
              sm:w-auto

              bg-blue-600
              hover:bg-blue-700

              dark:bg-blue-500
              dark:hover:bg-blue-600

              text-white

              px-6
              py-3

              rounded-xl

              transition
            "
          >
            Upload Document
          </button>

        </div>

      </div>

      {/* ========================= */}
      {/* Search */}
      {/* ========================= */}

      <div
        className="
          bg-white
          dark:bg-slate-800

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          shadow-lg

          p-4

          mb-6
        "
      >

        <div className="flex items-center gap-3">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search documents..."
            className="
              w-full

              bg-transparent

              outline-none

              text-slate-900
              dark:text-white

              placeholder:text-slate-500
            "
          />

        </div>

      </div>

      {/* ========================= */}
      {/* Documents */}
      {/* ========================= */}

      <div
        className="
          bg-white
          dark:bg-slate-800

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          shadow-lg

          overflow-hidden
        "
      >

        <div className="p-5 border-b border-slate-200 dark:border-slate-700">

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Uploaded Documents
          </h2>

        </div>

        {/* Desktop Table */}

        <div className="hidden lg:block overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-900 text-white">

              <tr>

                <th className="p-4 text-left">
                  Document
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-left">
                  Size
                </th>

                <th className="text-left">
                  Updated
                </th>

              </tr>

            </thead>

            <tbody>

              {documents.map((doc, index) => (

                <tr
                  key={index}
                  className="
                    border-b
                    border-slate-200
                    dark:border-slate-700

                    hover:bg-slate-50
                    dark:hover:bg-slate-700/50

                    transition
                  "
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <FileText size={18} />

                      <span>{doc.name}</span>

                    </div>

                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${doc.status === "Processed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : doc.status === "Indexed"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                    >
                      {doc.status}
                    </span>

                  </td>

                  <td>{doc.size}</td>

                  <td>{doc.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile Cards */}

        <div className="lg:hidden divide-y divide-slate-200 dark:divide-slate-700">

          {documents.map((doc, index) => (
            <div
              key={index}
              className="p-5"
            >
              <div className="flex items-center gap-3 mb-4">

                <FileText
                  size={20}
                  className="text-blue-600"
                />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white break-all">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {doc.size}
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${doc.status === "Processed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : doc.status === "Indexed"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                >
                  {doc.status}
                </span>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {doc.date}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ========================= */}
      {/* RAG Pipeline */}
      {/* ========================= */}

      <div
        className="
          mt-8

          bg-white
          dark:bg-slate-800

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          shadow-lg

          p-6
        "
      >

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
          RAG Document Pipeline
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-5
          "
        >

          <div
            className="
              bg-blue-100
              dark:bg-blue-900/30

              rounded-xl

              p-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-center
            "
          >

            <Upload size={22} />

            <span className="font-medium">
              Upload
            </span>

          </div>

          <div
            className="
              bg-green-100
              dark:bg-green-900/30

              rounded-xl

              p-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-center
            "
          >

            <FileSearch size={22} />

            <span className="font-medium">
              Extract Text
            </span>

          </div>

          <div
            className="
              bg-yellow-100
              dark:bg-yellow-900/30

              rounded-xl

              p-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-center
            "
          >

            <Brain size={22} />

            <span className="font-medium">
              Generate Embeddings
            </span>

          </div>

          <div
            className="
              bg-purple-100
              dark:bg-purple-900/30

              rounded-xl

              p-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-center
            "
          >

            <Database size={22} />

            <span className="font-medium">
              Store Vectors
            </span>

          </div>

          <div
            className="
              bg-red-100
              dark:bg-red-900/30

              rounded-xl

              p-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-center
            "
          >

            <CheckCircle size={22} />

            <span className="font-medium">
              AI Ready
            </span>

          </div>

        </div>

        <div
          className="
            hidden
            lg:flex

            justify-center
            items-center

            gap-6

            mt-6

            text-slate-400
          "
        >

          <ArrowRight />

          <ArrowRight />

          <ArrowRight />

          <ArrowRight />

        </div>

      </div>

    </MainLayout>
  );
}