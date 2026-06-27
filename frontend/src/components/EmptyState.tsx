import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function EmptyState({
  title,
  description,
  icon: Icon,
}: EmptyStateProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        py-20 px-6
      "
    >
      {Icon && (
        <div
          className="
            w-20 h-20
            rounded-2xl
            bg-blue-100
            dark:bg-blue-900/20
            flex items-center justify-center
            mb-6
          "
        >
          <Icon
            size={40}
            className="
              text-blue-600
              dark:text-blue-400
            "
          />
        </div>
      )}

      <h2
        className="
          text-2xl font-bold
          text-slate-900
          dark:text-white
          mb-2
        "
      >
        {title}
      </h2>

      <p
        className="
          max-w-md
          text-slate-500
          dark:text-slate-400
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}