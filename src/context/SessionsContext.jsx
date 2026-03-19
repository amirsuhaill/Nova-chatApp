import { createContext, useContext, useState } from 'react';

const NOVA_GREETING = "Hello, explorer! I'm NOVA — your deep space guide. Ask me anything about the cosmos: black holes, Mars missions, exoplanets, the Big Bang, and more. The universe is waiting. 🌌";

function createSession(initialQuestion = null) {
  return {
    id: String(Date.now()),
    title: initialQuestion ? initialQuestion.slice(0, 42) : 'New Conversation',
    messages: [{ id: 0, role: 'bot', text: NOVA_GREETING }],
    lastSubtopic: null,
    isTyping: false,
    showChips: !initialQuestion,
    initialQuestion,
  };
}

const SessionsContext = createContext(null);

export function SessionsProvider({ children }) {
  const [sessions, setSessions] = useState([]);

  function addSession(initialQuestion = null) {
    const session = createSession(initialQuestion);
    setSessions(prev => [session, ...prev]);
    return session.id;
  }

  function updateSession(id, updater) {
    setSessions(prev => prev.map(s => s.id === id ? updater(s) : s));
  }

  function deleteSession(id) {
    setSessions(prev => prev.filter(s => s.id !== id));
  }

  function getSession(id) {
    return sessions.find(s => s.id === id) ?? null;
  }

  return (
    <SessionsContext.Provider value={{ sessions, addSession, updateSession, deleteSession, getSession }}>
      {children}
    </SessionsContext.Provider>
  );
}

export function useSessions() {
  return useContext(SessionsContext);
}
