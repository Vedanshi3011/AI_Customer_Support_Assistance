import { useState, useRef, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ChatBubble from "../components/ChatBubble";
import TypingIndicator from "../components/TypingIndicator";

import {
  MessageSquare,
  Trash2,
  Send,
  Bot,
  Clock3,
} from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      message:
        "Hello! I'm your AI Customer Support Assistant. Ask me anything from the company knowledge base.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /* Auto Scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* Auto Expand Textarea */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const sendMessage = () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        message: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message:
            "This response is currently mocked. Later it will come from the RAG backend using retrieved company knowledge and LLM processing.",
        },
      ]);

      setLoading(false);
    }, 1200);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        message:
          "Chat cleared successfully. How can I help you today?",
      },
    ]);
  };

  const suggestions = [
    "What is the company refund policy?",
    "How do I reset my password?",
    "Explain the onboarding process",
    "Where can I contact support?",
  ];

  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          AI Customer Support Chat
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Interact with the AI assistant powered by RAG and company knowledge.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar History */}
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl shadow-lg p-5
          "
        >
          <div className="flex items-center gap-2 mb-5">
            <MessageSquare size={20} />

            <h2 className="font-semibold text-slate-900 dark:text-white">
              Recent Chats
            </h2>
          </div>

          <div className="space-y-3">
            {[
              "Company Policies",
              "Product Information",
              "Support FAQs",
            ].map((chat, index) => (
              <div
                key={index}
                className="
                  p-3 rounded-xl cursor-pointer
                  bg-slate-100 dark:bg-slate-700
                  hover:bg-slate-200 dark:hover:bg-slate-600
                  transition-all
                "
              >
                <div className="font-medium text-slate-800 dark:text-white">
                  {chat}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Last accessed recently
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock3 size={16} />
              Chat History
            </div>
          </div>
        </div>

        {/* Main Chat */}
        <div
          className="
            lg:col-span-3
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            rounded-2xl shadow-lg
            overflow-hidden
            h-[85vh]
            flex flex-col
          "
        >
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-700 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot
                size={30}
                className="text-blue-600"
              />

              <div>
                <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
                  AI Assistant
                </h2>

                <p className="text-green-600 text-sm">
                  ● Online
                </p>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="
                flex items-center gap-2
                bg-red-500 text-white
                px-4 py-2 rounded-lg
                hover:bg-red-600 transition
              "
            >
              <Trash2 size={16} />
              Clear Chat
            </button>
          </div>

          {/* Suggestions */}
          <div className="border-b border-slate-200 dark:border-slate-700 p-4 flex flex-wrap gap-2">
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => setInput(item)}
                className="
                  bg-slate-100 dark:bg-slate-700
                  text-slate-700 dark:text-slate-200
                  px-3 py-2 rounded-lg text-sm
                  hover:bg-slate-200 dark:hover:bg-slate-600
                  transition
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div
            className="
              flex-1 overflow-y-auto
              bg-slate-50 dark:bg-slate-900
              p-6 scroll-smooth
            "
          >
            {messages.map((msg, index) => (
              <ChatBubble
                key={index}
                role={msg.role}
                message={msg.message}
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
            <div className="flex gap-3 items-end">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask a question..."
                className="
                  flex-1
                  border border-slate-300 dark:border-slate-600
                  bg-white dark:bg-slate-700
                  text-slate-900 dark:text-white
                  rounded-xl p-3
                  resize-none
                  min-h-[60px]
                  max-h-[220px]
                  overflow-y-auto
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="
                  bg-blue-600 text-white
                  px-6 py-3 rounded-xl
                  hover:bg-blue-700
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  flex items-center gap-2
                  transition
                "
              >
                <Send size={18} />

                {loading ? "Sending..." : "Send"}
              </button>
            </div>

            <div className="flex justify-between mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span>
                Messages: {messages.length}
              </span>

              <span>
                Enter → Send | Shift + Enter → New Line
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}