interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
}

export default function ChatInput({
    value,
    onChange,
    onSend,
}: ChatInputProps) {
    return (
        <div className="border-t p-4 flex gap-3">

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 border rounded-xl p-3"
            />

            <button
                onClick={onSend}
                className="bg-blue-600 text-white px-6 rounded-xl"
            >
                Send
            </button>

        </div>
    );
}