import MainLayout from "../layouts/MainLayout";

import {
  UserCircle2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Edit,
  Camera,
  Activity,
  FileText,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function Profile() {
  const userDetails = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "admin@example.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Gurgaon, Haryana",
    },
    {
      icon: <Calendar size={18} />,
      label: "Joined",
      value: "June 2026",
    },
    {
      icon: <ShieldCheck size={18} />,
      label: "Role",
      value: "Administrator",
    },
    {
      icon: <Activity size={18} />,
      label: "Status",
      value: "Online",
    },
  ];

  const activities = [
    {
      title: "Uploaded CompanyPolicy.pdf",
      time: "2 hours ago",
      color: "bg-blue-500",
    },
    {
      title: "Knowledge Base Updated",
      time: "Yesterday",
      color: "bg-green-500",
    },
    {
      title: "Resolved 120 AI Queries",
      time: "2 days ago",
      color: "bg-purple-500",
    },
    {
      title: "New Support Agent Added",
      time: "4 days ago",
      color: "bg-yellow-500",
    },
  ];

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage your account information and monitor AI assistant activity.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white
            px-5 py-3
            rounded-xl
            shadow-lg
            transition-all duration-300
            hover:scale-105
            active:scale-95
          "
        >
          <Edit size={18} />
          Edit Profile
        </button>
      </div>

      {/* Profile Card */}

      <div
        className="
          bg-white
          dark:bg-slate-800
          rounded-3xl
          shadow-xl
          border
          border-slate-200
          dark:border-slate-700
          overflow-hidden
          mb-8
        "
      >
        {/* Cover */}

        <div
          className="
            h-36
            sm:h-44
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
          "
        />

        <div className="px-5 sm:px-8 pb-8">
          <div
            className="
              flex
              flex-col
              xl:flex-row
              gap-8
              -mt-16
            "
          >
            {/* Avatar */}

            <div
              className="
                flex
                flex-col
                items-center
                xl:w-72
                flex-shrink-0
              "
            >
              <div className="relative">
                <div
                  className="
                    bg-white
                    dark:bg-slate-900
                    rounded-full
                    p-2
                    shadow-xl
                  "
                >
                  <UserCircle2
                    size={140}
                    className="text-blue-500"
                  />
                </div>

                <button
                  className="
                    absolute
                    bottom-3
                    right-3
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    p-2
                    rounded-full
                    shadow-lg
                    transition-all
                    hover:scale-110
                  "
                >
                  <Camera size={16} />
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                Admin User
              </h2>

              <p className="text-slate-500 dark:text-slate-400">
                Frontend Developer Intern
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  bg-green-100
                  dark:bg-green-900/30
                  text-green-700
                  dark:text-green-400
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                <CheckCircle2 size={15} />
                Active
              </div>
            </div>

            {/* User Details */}

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {userDetails.map((item) => (
                  <div
                    key={item.label}
                    className="
                      bg-slate-50
                      dark:bg-slate-900
                      p-5
                      rounded-xl
                      hover:shadow-lg
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon}

                      <span className="font-semibold text-slate-800 dark:text-white">
                        {item.label}
                      </span>
                    </div>

                    <p
                      className={
                        item.label === "Status"
                          ? "text-green-600 dark:text-green-400 font-medium"
                          : "text-slate-600 dark:text-slate-400"
                      }
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Queries */}
        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-700
            bg-white/80 dark:bg-slate-900/60
            backdrop-blur-xl
            p-7
            shadow-xl
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <div
            className="
              w-14 h-14 rounded-2xl
              flex items-center justify-center
              bg-blue-500/10
              text-blue-600
              mb-5
            "
          >
            <MessageSquare size={28} />
          </div>

          <h3 className="text-slate-500 dark:text-slate-400">
            Total Queries
          </h3>

          <p className="text-5xl font-bold mt-3 text-slate-900 dark:text-white">
            5,428
          </p>

          <p className="mt-4 text-green-600 font-medium">
            ▲ 14% this month
          </p>
        </div>

        {/* Documents Managed */}
        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-700
            bg-white/80 dark:bg-slate-900/60
            backdrop-blur-xl
            p-7
            shadow-xl
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <div
            className="
              w-14 h-14 rounded-2xl
              flex items-center justify-center
              bg-green-500/10
              text-green-600
              mb-5
            "
          >
            <FileText size={28} />
          </div>

          <h3 className="text-slate-500 dark:text-slate-400">
            Documents Managed
          </h3>

          <p className="text-5xl font-bold mt-3 text-slate-900 dark:text-white">
            250
          </p>

          <p className="mt-4 text-blue-600 font-medium">
            Knowledge Base Updated
          </p>
        </div>

        {/* AI Accuracy */}
        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-700
            bg-white/80 dark:bg-slate-900/60
            backdrop-blur-xl
            p-7
            shadow-xl
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <div
            className="
              w-14 h-14 rounded-2xl
              flex items-center justify-center
              bg-purple-500/10
              text-purple-600
              mb-5
            "
          >
            <Activity size={28} />
          </div>

          <h3 className="text-slate-500 dark:text-slate-400">
            AI Accuracy
          </h3>

          <p className="text-5xl font-bold mt-3 text-slate-900 dark:text-white">
            96.8%
          </p>

          <p className="mt-4 text-green-600 font-medium">
            Excellent Performance
          </p>
        </div>
      </div>

      {/* Recent Activity + Achievements */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Recent Activity */}

        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-700
            bg-white/80 dark:bg-slate-900/60
            backdrop-blur-xl
            shadow-xl
            p-8
          "
        >
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <div className="space-y-7">
            {activities.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-4 h-4 rounded-full mt-2 ${item.color}`}
                />

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}

        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-700
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-purple-700
            text-white
            shadow-2xl
            p-8
          "
        >
          <h2 className="text-2xl font-bold mb-8">
            Achievements
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <CheckCircle2 size={26} />

              <div>
                <h3 className="font-semibold">
                  Top Administrator
                </h3>

                <p className="opacity-80 text-sm">
                  Highest AI management score.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 size={26} />

              <div>
                <h3 className="font-semibold">
                  250 Documents Indexed
                </h3>

                <p className="opacity-80 text-sm">
                  Successfully processed company knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 size={26} />

              <div>
                <h3 className="font-semibold">
                  AI Accuracy Above 96%
                </h3>

                <p className="opacity-80 text-sm">
                  Consistently high-quality responses.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </MainLayout>
  );
}