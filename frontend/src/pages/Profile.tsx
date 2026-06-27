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
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            My Profile
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Manage your account information and monitor your AI assistant
            activity.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-700
            hover:scale-105
            text-white px-5 py-3
            rounded-xl
            shadow-lg
            transition-all duration-300
          "
        >
          <Edit size={18} />
          Edit Profile
        </button>
      </div>

      {/* Main Profile Card */}
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-3xl shadow-xl
          border border-slate-200 dark:border-slate-700
          overflow-hidden
          mb-8
        "
      >
        {/* Cover Section */}
        <div
          className="
            h-40
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
          "
        />

        <div className="px-8 pb-8">
          <div className="flex flex-col lg:flex-row gap-8 -mt-16">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="
                    bg-white dark:bg-slate-900
                    rounded-full p-2
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
                    absolute bottom-3 right-3
                    bg-blue-600 hover:bg-blue-700
                    text-white p-2 rounded-full
                    shadow-lg
                    transition
                  "
                >
                  <Camera size={16} />
                </button>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                Admin User
              </h2>

              <p className="text-slate-500 dark:text-slate-400">
                Frontend Developer Intern
              </p>

              <div
                className="
                  mt-3 flex items-center gap-2
                  bg-green-100 dark:bg-green-900/30
                  text-green-700 dark:text-green-400
                  px-4 py-1.5 rounded-full text-sm
                "
              >
                <CheckCircle2 size={14} />
                Active
              </div>
            </div>

            {/* User Details */}
            <div className="flex-1 grid md:grid-cols-2 gap-5">
              {[
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
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-slate-50 dark:bg-slate-900
                    p-5 rounded-xl
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}

                    <span className="font-semibold text-slate-800 dark:text-white">
                      {item.label}
                    </span>
                  </div>

                  <p
                    className={`${
                      item.label === "Status"
                        ? "text-green-600 dark:text-green-400 font-medium"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div
          className="
            bg-white dark:bg-slate-800
            p-6 rounded-2xl
            shadow-lg
            border border-slate-200 dark:border-slate-700
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <MessageSquare
            className="text-blue-500 mb-4"
            size={30}
          />

          <h3 className="font-semibold text-slate-700 dark:text-slate-300">
            Total Queries
          </h3>

          <p className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
            5,428
          </p>
        </div>

        <div
          className="
            bg-white dark:bg-slate-800
            p-6 rounded-2xl
            shadow-lg
            border border-slate-200 dark:border-slate-700
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <FileText
            className="text-green-500 mb-4"
            size={30}
          />

          <h3 className="font-semibold text-slate-700 dark:text-slate-300">
            Documents Managed
          </h3>

          <p className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
            250
          </p>
        </div>

        <div
          className="
            bg-white dark:bg-slate-800
            p-6 rounded-2xl
            shadow-lg
            border border-slate-200 dark:border-slate-700
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <Activity
            className="text-purple-500 mb-4"
            size={30}
          />

          <h3 className="font-semibold text-slate-700 dark:text-slate-300">
            AI Accuracy
          </h3>

          <p className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
            96.8%
          </p>
        </div>
      </div>
    </MainLayout>
  );
}