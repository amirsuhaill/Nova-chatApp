import { useState } from 'react';

export default function NameModal({ onConfirm, onSkip }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const name = value.trim();
    if (!name) return;
    onConfirm(name);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white dark:bg-gray-950 border border-violet-300 dark:border-violet-800/50 rounded-2xl p-8 shadow-2xl shadow-violet-200/60 dark:shadow-violet-950/60 flex flex-col items-center text-center msg-enter">
        <div className="nova-glow w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 flex items-center justify-center text-3xl border border-violet-400/30 mb-5">
          🔭
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Welcome, Explorer</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          Before we launch into the cosmos, what should NOVA call you?
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            autoFocus
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter your name..."
            maxLength={30}
            className="w-full bg-gray-50 dark:bg-gray-900/80 border border-violet-300 dark:border-violet-800/50 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-center"
          />
          <button
            type="submit"
            disabled={!value.trim()}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-indigo-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-lg shadow-violet-900/40 cursor-pointer"
          >
            Let's Explore →
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full py-2.5 rounded-xl text-gray-400 dark:text-gray-500 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            Skip for now
          </button>
        </form>
      </div>
    </div>
  );
}
