import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  text?: string;
}

export default function LoadingSpinner({
  text = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        py-12
        gap-4
      "
    >
      {/* Spinner */}
      <div
        className="
          w-16 h-16
          rounded-2xl
          bg-blue-100
          dark:bg-blue-900/20
          flex items-center justify-center
        "
      >
        <Loader2
          size={34}
          className="
            animate-spin
            text-blue-600
            dark:text-blue-400
          "
        />
      </div>

      {/* Text */}
      <p
        className="
          text-sm font-medium
          text-slate-600
          dark:text-slate-400
        "
      >
        {text}
      </p>
    </div>
  );
}