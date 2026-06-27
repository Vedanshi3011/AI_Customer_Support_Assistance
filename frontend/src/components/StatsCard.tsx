import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
}

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <div className="flex justify-between items-center">
        {/* Content */}
        <div>
          <h3
            className="
              text-sm
              font-medium
              text-slate-500
              dark:text-slate-400
            "
          >
            {title}
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-2
              text-slate-800
              dark:text-white
            "
          >
            {value}
          </p>
        </div>

        {/* Icon */}
        <div
          className="
            w-14 h-14
            rounded-full
            flex items-center justify-center
            text-xl
            bg-blue-100
            text-blue-600

            dark:bg-blue-500/20
            dark:text-blue-400
          "
        >
          {icon}
        </div>
      </div>

      {/* Growth Indicator */}
      <div className="mt-4 flex items-center gap-2">
        <span
          className="
            text-sm
            font-semibold
            text-green-600
            dark:text-green-400
          "
        >
          ↑ 12%
        </span>

        <span
          className="
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          compared to last week
        </span>
      </div>
    </div>
  );
}