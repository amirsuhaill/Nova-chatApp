export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 msg-enter">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-sm flex-shrink-0">
        🔭
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-gray-100 dark:bg-gray-900/80 border border-violet-200 dark:border-violet-900/50 flex gap-1 items-center">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}
