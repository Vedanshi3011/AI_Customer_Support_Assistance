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
        <h1
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          AI Customer Support Chat
        </h1>

        <p
          className="
            mt-2
            text-sm
            sm:text-base
            text-slate-500
            dark:text-slate-400
          "
        >
          Interact with the AI assistant powered by RAG and company knowledge.
        </p>
      </div>

      {/* Responsive Layout */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-4
          gap-6
        "
      >
        {/* ========================= */}
        {/* Recent Chats Sidebar */}
        {/* ========================= */}

        <div
          className="
            xl:col-span-1
            bg-white
            dark:bg-slate-800
            border
            border-slate-200
            dark:border-slate-700
            rounded-2xl
            shadow-lg
            p-5
            h-fit
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

              <button
                key={index}
                className="
                  w-full
                  text-left

                  p-3

                  rounded-xl

                  bg-slate-100
                  dark:bg-slate-700

                  hover:bg-slate-200
                  dark:hover:bg-slate-600

                  transition-all
                "
              >

                <div className="font-medium text-slate-800 dark:text-white">
                  {chat}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Last accessed recently
                </div>

              </button>

            ))}

          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700">

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

              <Clock3 size={16} />

              Chat History

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* Main Chat */}
        {/* ========================= */}

        <div
          className="
            xl:col-span-3

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            rounded-2xl
            shadow-lg

            overflow-hidden

            h-[75vh]
            sm:h-[78vh]
            xl:h-[82vh]

            flex
            flex-col
          "
        >

          {/* Chat Header */}

          <div
            className="
              border-b
              border-slate-200
              dark:border-slate-700

              p-4
              sm:p-5

              flex
              flex-col
              sm:flex-row
              sm:justify-between
              sm:items-center

              gap-4
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-blue-100
                  dark:bg-blue-900/30

                  flex
                  items-center
                  justify-center
                "
              >

                <Bot
                  size={26}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
                  AI Assistant
                </h2>

                <p className="text-sm text-green-600">
                  ● Online
                </p>

              </div>

            </div>

            <button
              onClick={clearChat}
              className="
                flex
                items-center
                justify-center
                gap-2

                bg-red-500
                hover:bg-red-600

                text-white

                px-4
                py-2.5

                rounded-xl

                transition
              "
            >

              <Trash2 size={16} />

              Clear Chat

            </button>

          </div>

          {/* Suggestions */}

          <div
            className="
              border-b
              border-slate-200
              dark:border-slate-700

              p-4

              flex
              flex-wrap

              gap-2
            "
          >

            {suggestions.map((item, index) => (

              <button
                key={index}
                onClick={() => setInput(item)}
                className="
                  px-3
                  py-2

                  rounded-lg

                  text-sm

                  bg-slate-100
                  dark:bg-slate-700

                  hover:bg-slate-200
                  dark:hover:bg-slate-600

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
              flex-1

              overflow-y-auto

              bg-slate-50
              dark:bg-slate-900

              p-4
              sm:p-6
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

          {/* Chat Input */}

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

            <div className="flex items-end gap-3">

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

                  min-h-[60px]
                  max-h-[180px]

                  resize-none
                  overflow-y-auto

                  rounded-xl

                  border
                  border-slate-300
                  dark:border-slate-600

                  bg-white
                  dark:bg-slate-700

                  text-slate-900
                  dark:text-white

                  p-3

                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-blue-600
                  hover:bg-blue-700

                  disabled:opacity-50
                  disabled:cursor-not-allowed

                  text-white

                  px-5
                  sm:px-6

                  h-[60px]

                  transition
                "
              >

                <Send size={18} />

                <span className="hidden sm:inline">
                  {loading
                    ? "Sending..."
                    : "Send"}
                </span>

              </button>

            </div>

            <div
              className="
                mt-3

                flex
                flex-col
                sm:flex-row

                gap-2

                sm:justify-between

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

        </div>

      </div>
      
    </MainLayout>
  );
}