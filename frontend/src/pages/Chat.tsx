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
  Menu,
  X,
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

  const [showSidebar, setShowSidebar] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const suggestions = [
    "What is the company refund policy?",
    "How do I reset my password?",
    "Explain the onboarding process",
    "Where can I contact support?",
  ];

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

  return (
    <MainLayout>

      {/* Page Header */}

      <div className="mb-5">

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          AI Customer Support Chat
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Chat with your AI assistant powered by Retrieval-Augmented Generation.
        </p>

      </div>

      {/* Main Layout */}

      <div className="relative flex gap-6 h-[calc(100vh-170px)]">

        {/* Mobile Overlay */}

        {showSidebar && (
          <div
            className="fixed inset-0 bg-black/40 z-30 xl:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Sidebar */}

        <aside
          className={`
            fixed xl:static
            top-0 left-0
            h-full xl:h-auto
            w-[290px]
            xl:w-80
            z-40
            bg-white dark:bg-slate-800
            border-r xl:border
            border-slate-200 dark:border-slate-700
            shadow-xl xl:shadow-lg
            rounded-none xl:rounded-2xl
            p-5
            transition-transform duration-300
            ${showSidebar
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
            }
          `}
        >

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-2">

              <MessageSquare size={20} />

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Recent Chats
              </h2>

            </div>

            <button
              onClick={() => setShowSidebar(false)}
              className="xl:hidden"
            >
              <X size={22} />
            </button>

          </div>

          <div className="space-y-3">

            {[
              "Company Policies",
              "Product Information",
              "Support FAQs",
            ].map((chat) => (

              <button
                key={chat}
                className="
                  w-full
                  text-left
                  rounded-xl
                  p-4
                  bg-slate-100
                  dark:bg-slate-700
                  hover:bg-slate-200
                  dark:hover:bg-slate-600
                  transition
                "
              >

                <div className="font-medium text-slate-900 dark:text-white">
                  {chat}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Last accessed recently
                </div>

              </button>

            ))}

          </div>

          <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-700">

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

              <Clock3 size={16} />

              Chat History

            </div>

          </div>

        </aside>

        {/* Chat Area */}

        <section
          className="
            flex-1
            flex
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            shadow-lg
          "
        >

          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              px-5
              py-4
              border-b
              border-slate-200
              dark:border-slate-700
            "
          >

            <div className="flex items-center gap-4">

              <button
                onClick={() => setShowSidebar(true)}
                className="xl:hidden"
              >
                <Menu size={22} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">

                <Bot
                  size={28}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
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
                flex
                items-center
                gap-2
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                px-5
                py-3
                transition
              "
            >

              <Trash2 size={18} />

              <span className="hidden sm:block">
                Clear Chat
              </span>

            </button>

          </div>
          {/* Suggested Questions */}

          <div
            className="
              border-b
              border-slate-200
              dark:border-slate-700

              px-5
              py-4

              bg-slate-50
              dark:bg-slate-900/40
            "
          >

            <div
              className="
                flex
                gap-3
                overflow-x-auto
                scrollbar-hide
                pb-1
              "
            >

              {suggestions.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setInput(item)}
                  className="
                    flex-shrink-0

                    rounded-full

                    border
                    border-slate-200
                    dark:border-slate-700

                    bg-white
                    dark:bg-slate-800

                    hover:bg-blue-50
                    dark:hover:bg-slate-700

                    px-4
                    py-2.5

                    text-sm

                    whitespace-nowrap

                    transition-all
                    duration-200
                  "
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* Messages */}

          <div
            className="
              flex-1

              overflow-y-auto

              bg-slate-50
              dark:bg-slate-900

              px-4
              sm:px-6

              py-6

              space-y-6
            "
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className="animate-fade-in"
              >

                <ChatBubble
                  role={msg.role}
                  message={msg.message}
                />

              </div>

            ))}

            {loading && <TypingIndicator />}

            <div ref={messagesEndRef} />

          </div>

          {/* Input Section */}

          <div
            className="
              border-t
              border-slate-200
              dark:border-slate-700

              bg-white
              dark:bg-slate-800

              p-4
              sm:p-5
            "
          >

            <div
              className="
                flex
                items-end
                gap-3
              "
            >

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
                placeholder="Ask anything about your company..."
                className="
                  flex-1

                  resize-none

                  min-h-[58px]
                  max-h-[180px]

                  overflow-y-auto

                  rounded-2xl

                  border
                  border-slate-300
                  dark:border-slate-600

                  bg-slate-50
                  dark:bg-slate-700

                  px-5
                  py-4

                  text-slate-900
                  dark:text-white

                  placeholder:text-slate-400

                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500

                  transition
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="
                  h-[58px]
                  w-[58px]

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-blue-600
                  hover:bg-blue-700

                  disabled:opacity-50
                  disabled:cursor-not-allowed

                  text-white

                  shadow-lg

                  transition-all
                  duration-200

                  hover:scale-105
                "
              >

                <Send size={20} />

              </button>

            </div>

            <div
              className="
                mt-4

                flex
                flex-col
                sm:flex-row

                justify-between

                gap-2

                text-xs

                text-slate-500
                dark:text-slate-400
              "
            >

              <span>
                Messages: {messages.length}
              </span>

              <span>
                Press Enter to send • Shift + Enter for new line
              </span>

            </div>
          </div>

        </section>

      </div>

    </MainLayout>
  );
}