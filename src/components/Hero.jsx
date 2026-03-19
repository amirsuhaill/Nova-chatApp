import { suggestedQuestions } from '../data/knowledgeBase';
import { useUser } from '../context/UserContext';

export default function Hero({ onStart, onChipClick }) {
  const { userName } = useUser();
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center">
      {/* Nova avatar */}
      <div className="relative mb-6">
        <div className="nova-glow w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 flex items-center justify-center text-5xl border border-violet-400/40">
          🔭
        </div>
        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-gray-950 animate-pulse" />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent mb-2">
        NOVA
      </h1>
      <p className="text-violet-300/80 text-lg mb-1 font-light tracking-widest uppercase text-sm">
        Your Deep Space Guide
      </p>
      <p className="text-gray-400 max-w-md mt-3 text-sm leading-relaxed">
        {userName
          ? `Welcome back, ${userName}! Ready to explore the cosmos again?`
          : 'Ask me anything about black holes, Mars missions, exoplanets, telescopes, astronauts, and the mysteries of the cosmos.'
        }
      </p>

      {/* Topic pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-lg">
        {['🌑 Black Holes', '🔴 Mars', '🌌 Galaxies', '🛸 Missions', '🪐 Planets', '👽 Alien Life'].map(t => (
          <span key={t} className="px-3 py-1 rounded-full text-xs bg-violet-900/40 border border-violet-700/50 text-violet-300">
            {t}
          </span>
        ))}
      </div>

      {/* Suggested questions */}
      <div className="mt-8 w-full max-w-lg">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Try asking...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {suggestedQuestions.map(q => (
            <button
              key={q}
              onClick={() => onChipClick(q)}
              className="chip text-left px-4 py-3 rounded-xl bg-gray-900/70 border border-violet-800/50 text-gray-300 text-sm hover:bg-violet-900/40 hover:border-violet-500/70 hover:text-white cursor-pointer"
            >
              <span className="text-violet-400 mr-2">✦</span>{q}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onStart}
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-indigo-500 active:scale-95 transition-all duration-150 shadow-lg shadow-violet-900/50 cursor-pointer"
      >
        Start Exploring →
      </button>
    </div>
  );
}
