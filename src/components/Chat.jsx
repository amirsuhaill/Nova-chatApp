import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import QuickChips from './QuickChips';
import { getResponse } from '../engine/matcher';
import { useSessions } from '../context/SessionsContext';
import { useUser } from '../context/UserContext';

export default function Chat({ session, onNew }) {
  const { updateSession } = useSessions();
  const { userName } = useUser();
  const navigate = useNavigate();
  const { id, messages, lastSubtopic, initialQuestion, isTyping, showChips } = session;

  const bottomRef = useRef(null);
  const firedInitial = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialQuestion && !firedInitial.current) {
      firedInitial.current = true;
      handleSend(initialQuestion);
    }
  }, []);

  function handleSend(text) {
    const userMsg = { id: Date.now(), role: 'user', text };

    updateSession(id, s => ({
      ...s,
      // Auto-title from first user message
      title: s.messages.filter(m => m.role === 'user').length === 0
        ? text.slice(0, 42)
        : s.title,
      messages: [...s.messages, userMsg],
      showChips: false,
      isTyping: true,
    }));

    const delay = 300 + Math.random() * 700;
    setTimeout(() => {
      const { answer, subtopic } = getResponse(text, lastSubtopic);
      const botMsg = { id: Date.now() + 1, role: 'bot', text: answer };
      updateSession(id, s => ({
        ...s,
        messages: [...s.messages, botMsg],
        lastSubtopic: subtopic ?? s.lastSubtopic,
        isTyping: false,
      }));
    }, delay);
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-violet-900/30 bg-gray-950/60 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-3 pl-10 lg:pl-0">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 flex items-center justify-center text-lg nova-glow">
              🔭
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-950 animate-pulse" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-none">NOVA</p>
            <p className="text-emerald-400 text-xs mt-0.5">Online · Deep Space Guide</p>
          </div>
        </div>

        <button
          onClick={onNew}
          className="text-gray-500 hover:text-violet-400 text-xs transition-colors cursor-pointer px-2 py-1 rounded-lg hover:bg-violet-900/20"
        >
          ✦ New Chat
        </button>

        {/* User avatar */}
        {userName && (
          <div className="flex items-center gap-2 ml-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-md shadow-violet-900/40" title={userName}>
              {userName.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
        {messages.map(msg => (
          <Message key={msg.id} msg={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        {showChips && !isTyping && (
          <QuickChips onChipClick={handleSend} />
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0">
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}
