import { create } from "zustand";

interface Message {
    role: string;
    message: string;
}

interface ChatStore {
    messages: Message[];

    addMessage: (
        role: string,
        message: string
    ) => void;

    clearChat: () => void;
}

export const useChatStore =
    create<ChatStore>((set) => ({

        messages: [
            {
                role: "assistant",
                message:
                    "Hello! How can I help you today?",
            },
        ],

        addMessage: (
            role,
            message
        ) =>
            set((state) => ({
                messages: [
                    ...state.messages,
                    {
                        role,
                        message,
                    },
                ],
            })),

        clearChat: () =>
            set({
                messages: [],
            }),

    }));