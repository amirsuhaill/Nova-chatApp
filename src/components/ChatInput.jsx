import { useState, useRef, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    return () => recognitionRef.current?.stop();
  }, []);

  function toggleMic() {
    if (!SpeechRecognition) return;

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map(r => r[0].transcript)
        .join('');
      setValue(transcript);
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-violet-200 dark:border-violet-900/30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={listening ? 'Listening...' : 'Ask NOVA about the cosmos...'}
        disabled={disabled}
        className="flex-1 bg-gray-50 dark:bg-gray-900/70 border border-violet-200 dark:border-violet-800/40 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-violet-500 dark:focus:border-violet-500/70 focus:ring-1 focus:ring-violet-500/30 transition-all disabled:opacity-50"
      />
      {SpeechRecognition && (
        <button
          type="button"
          onClick={toggleMic}
          disabled={disabled}
          title={listening ? 'Stop listening' : 'Speak your message'}
          className={`px-3 py-2.5 rounded-xl text-sm transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed border ${
            listening
              ? 'bg-red-100 dark:bg-red-500/20 border-red-400 dark:border-red-500/60 text-red-500 dark:text-red-400 animate-pulse'
              : 'bg-gray-50 dark:bg-gray-900/70 border-violet-200 dark:border-violet-800/40 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-400 dark:hover:border-violet-500/60'
          }`}
          aria-label={listening ? 'Stop microphone' : 'Start microphone'}
        >
          {listening ? '⏹' : '🎙'}
        </button>
      )}
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
