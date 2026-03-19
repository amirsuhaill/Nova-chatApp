export default function Message({ msg }) {
  const isUser = msg.role === 'user';

  return (
    <div className={`flex items-end gap-2 msg-enter ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-sm flex-shrink-0">
          🔭
        </div>
      )}
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm flex-shrink-0">
          👤
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'rounded-2xl rounded-br-sm bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg shadow-violet-900/30'
            : 'rounded-2xl rounded-bl-sm bg-gray-900/80 border border-violet-900/40 text-gray-200'
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}
