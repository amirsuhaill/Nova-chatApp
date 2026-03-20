import { suggestedQuestions } from '../data/knowledgeBase';

export default function QuickChips({ onChipClick }) {
  return (
    <div className="px-3 py-2 flex flex-wrap gap-2">
      {suggestedQuestions.map(q => (
        <button
          key={q}
          onClick={() => onChipClick(q)}
          className="chip px-3 py-1.5 rounded-full text-xs bg-gray-100 dark:bg-gray-900/60 border border-violet-200 dark:border-violet-800/40 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:border-violet-400 dark:hover:border-violet-500/60 hover:text-violet-900 dark:hover:text-white cursor-pointer"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
