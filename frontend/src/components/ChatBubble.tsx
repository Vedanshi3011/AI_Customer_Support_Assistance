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
            className={`flex mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${
                    isUser ? "flex-row-reverse" : ""
                }`}
            >
                {/* Avatar */}
                <div
                    className={`
                        w-10 h-10 rounded-full
                        flex items-center justify-center
                        shadow-md flex-shrink-0
                        ${
                            isUser
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 dark:bg-slate-700 text-white"
                        }
                    `}
                >
                    {isUser ? (
                        <User size={18} />
                    ) : (
                        <Bot size={18} />
                    )}
                </div>

                {/* Message Bubble */}
                <div
                    className={`
                        px-5 py-4 rounded-2xl shadow-sm
                        transition-colors duration-300
                        ${
                            isUser
                                ? `
                                    bg-blue-600
                                    text-white
                                    rounded-br-md
                                  `
                                : `
                                    bg-white
                                    dark:bg-slate-800
                                    border border-slate-200 dark:border-slate-700
                                    text-slate-800 dark:text-slate-100
                                    rounded-bl-md
                                  `
                        }
                    `}
                >
                    {/* Sender Label */}
                    <div
                        className={`
                            text-xs font-semibold mb-2
                            ${
                                isUser
                                    ? "text-blue-100"
                                    : "text-slate-500 dark:text-slate-400"
                            }
                        `}
                    >
                        {isUser ? "You" : "AI Assistant"}
                    </div>

                    {/* Message Content */}
                    <p
                        className="
                            leading-relaxed
                            text-sm md:text-base
                            whitespace-pre-wrap
                            break-words
                        "
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}