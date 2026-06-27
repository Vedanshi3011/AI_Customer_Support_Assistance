import { Bot } from "lucide-react";

export default function TypingIndicator() {
    return (
        <div className="flex items-start gap-3 mb-6">

            {/* AI Avatar */}
            <div
                className="
                    w-10 h-10 rounded-full
                    bg-slate-800 dark:bg-slate-700
                    text-white
                    flex items-center justify-center
                    shadow-md flex-shrink-0
                "
            >
                <Bot size={18} />
            </div>

            {/* Typing Bubble */}
            <div
                className="
                    bg-white dark:bg-slate-800
                    border border-slate-200 dark:border-slate-700
                    rounded-2xl rounded-bl-md
                    px-5 py-4
                    shadow-sm
                "
            >
                {/* Label */}
                <p className="text-xs font-semibold mb-2 text-slate-500 dark:text-slate-400">
                    AI Assistant
                </p>

                {/* Dots */}
                <div className="flex items-center gap-2">

                    <span
                        className="
                            w-2.5 h-2.5 rounded-full
                            bg-slate-400 dark:bg-slate-500
                            animate-bounce
                        "
                    />

                    <span
                        className="
                            w-2.5 h-2.5 rounded-full
                            bg-slate-400 dark:bg-slate-500
                            animate-bounce
                        "
                        style={{
                            animationDelay: "0.15s",
                        }}
                    />

                    <span
                        className="
                            w-2.5 h-2.5 rounded-full
                            bg-slate-400 dark:bg-slate-500
                            animate-bounce
                        "
                        style={{
                            animationDelay: "0.3s",
                        }}
                    />

                </div>
            </div>

        </div>
    );
}