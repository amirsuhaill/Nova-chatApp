import { useState } from 'react';

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-violet-900/30 bg-gray-950/80 backdrop-blur-sm">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ask NOVA about the cosmos..."
        disabled={disabled}
        className="flex-1 bg-gray-900/70 border border-violet-800/40 rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-violet-500/70 focus:ring-1 focus:ring-violet-500/30 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium hover:from-violet-500 hover:to-indigo-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-md shadow-violet-900/40 cursor-pointer"
      >
        <span className="hidden sm:inline">Send</span>
        <span className="sm:hidden">↑</span>
      </button>
    </form>
  );
}
