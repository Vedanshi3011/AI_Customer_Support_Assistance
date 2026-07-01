import { User, Bot } from "lucide-react";

interface ChatBubbleProps {
  role: string;
  message: string;
}

export default function ChatBubble({
  role,
  message,
}: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full mb-8 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          flex gap-3 items-end
          ${
            isUser
              ? "flex-row-reverse"
              : "flex-row"
          }

          max-w-[94%]
          sm:max-w-[85%]
          lg:max-w-[75%]
        `}
      >
        {/* Avatar */}

        <div
          className={`
            h-11
            w-11

            rounded-2xl

            flex
            items-center
            justify-center

            shadow-lg

            flex-shrink-0

            ${
              isUser
                ? `
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-600

                    text-white
                  `
                : `
                    bg-gradient-to-br
                    from-slate-800
                    to-slate-700

                    dark:from-slate-700
                    dark:to-slate-600

                    text-white
                  `
            }
          `}
        >
          {isUser ? (
            <User size={19} />
          ) : (
            <Bot size={19} />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`
            relative

            rounded-3xl

            px-5
            py-4

            shadow-md

            transition-all
            duration-300

            ${
              isUser
                ? `
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-600

                    text-white

                    rounded-br-lg
                  `
                : `
                    bg-white
                    dark:bg-slate-800

                    border
                    border-slate-200
                    dark:border-slate-700

                    text-slate-800
                    dark:text-slate-100

                    rounded-bl-lg
                  `
            }
          `}
        >
          {/* Header */}

          <div
            className={`
              flex
              items-center
              justify-between

              mb-2
            `}
          >
            <span
              className={`
                text-xs

                font-semibold

                tracking-wide

                ${
                  isUser
                    ? "text-blue-100"
                    : "text-slate-500 dark:text-slate-400"
                }
              `}
            >
              {isUser ? "You" : "AI Assistant"}
            </span>

            <span
              className={`
                text-[10px]

                ${
                  isUser
                    ? "text-blue-200"
                    : "text-slate-400"
                }
              `}
            >
              Just now
            </span>
          </div>

          {/* Message */}

          <p
            className="
              whitespace-pre-wrap
              break-words

              leading-7

              text-[15px]
              sm:text-base
            "
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}