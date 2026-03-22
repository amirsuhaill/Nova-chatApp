import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSessions } from '../context/SessionsContext';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function Sidebar({ onNew }) {
  const { sessions, deleteSession, clearSessions } = useSessions();
  const { userName, logout } = useUser();
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  function handleSelect(id) {
    navigate(`/chat/${id}`);
    setOpen(false);
  }

  function handleDelete(e, id) {
    e.stopPropagation();
    deleteSession(id);
    if (pathname === `/chat/${id}`) navigate('/');
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-20 lg:hidden text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-300 p-2 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-violet-200 dark:border-violet-900/30 backdrop-blur-sm cursor-pointer"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-30 flex flex-col
          bg-white dark:bg-gray-950 border-r border-violet-200 dark:border-violet-900/30
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-violet-100 dark:border-violet-900/20 flex-shrink-0">
          <button
            onClick={() => { navigate('/'); setOpen(false); }}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-lg">🌌</span>
            <span className="font-bold text-violet-600 dark:text-violet-300 tracking-wide text-sm">NOVA</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-base cursor-pointer hover:scale-110 transition-transform"
              aria-label="Toggle theme"
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 lg:hidden cursor-pointer text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* New chat */}
        <div className="px-3 py-3 flex-shrink-0">
          <button
            onClick={() => { onNew(); setOpen(false); }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-violet-100 dark:bg-violet-600/20 border border-violet-300 dark:border-violet-700/40 text-violet-700 dark:text-violet-300 text-sm hover:bg-violet-200 dark:hover:bg-violet-600/30 hover:border-violet-400 dark:hover:border-violet-500/60 transition-all cursor-pointer"
          >
            <span>✦</span>
            New Conversation
          </button>
        </div>

        {/* History */}
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          {sessions.length === 0 ? (
            <p className="text-gray-400 dark:text-gray-600 text-xs text-center mt-6 px-2">
              No conversations yet. Start exploring the cosmos!
            </p>
          ) : (
            <>
              <p className="text-gray-400 dark:text-gray-600 text-xs uppercase tracking-widest px-2 py-2">History</p>
              {sessions.map(s => {
                const isActive = pathname === `/chat/${s.id}`;
                return (
                  <div
                    key={s.id}
                    onClick={() => handleSelect(s.id)}
                    className={`group flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                      isActive
                        ? 'bg-violet-100 dark:bg-violet-900/40 border border-violet-300 dark:border-violet-700/50 text-violet-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900/60 hover:text-gray-800 dark:hover:text-gray-200 border border-transparent'
                    }`}
                  >
                    <span className="text-sm flex-shrink-0">💬</span>
                    <span className="text-xs truncate flex-1">{s.title}</span>
                    <button
                      onClick={e => handleDelete(e, s.id)}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-all text-xs flex-shrink-0 cursor-pointer"
                      aria-label="Delete conversation"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-violet-100 dark:border-violet-900/20 flex-shrink-0">
          {userName ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-md shadow-violet-900/40">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-xs font-medium truncate">{userName}</p>
                <p className="text-gray-400 dark:text-gray-600 text-xs">Explorer</p>
              </div>
              <button
                onClick={() => { clearSessions(); logout(); navigate('/'); setOpen(false); }}
                className="text-gray-400 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-colors text-xs cursor-pointer flex-shrink-0"
                title="Logout"
                aria-label="Logout"
              >
                ⏻
              </button>
            </div>
          ) : (
            <p className="text-gray-400 dark:text-gray-700 text-xs text-center">Local knowledge base · No APIs</p>
          )}
        </div>
        <div className="pb-2 text-center text-xs text-gray-400 dark:text-gray-600 flex-shrink-0">
          v1.0.0
        </div>
      </aside>
    </>
  );
}
