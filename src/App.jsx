import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Starfield from './components/Starfield';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ChatPage from './pages/ChatPage';
import NameModal from './components/NameModal';
import { useSessions } from './context/SessionsContext';
import { useUser } from './context/UserContext';

export default function App() {
  const { addSession } = useSessions();
  const { userName, setUserName } = useUser();
  const navigate = useNavigate();
  const [pendingQuestion, setPendingQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function startNewChat(initialQuestion = null) {
    const id = addSession(initialQuestion);
    navigate(`/chat/${id}`);
  }

  function requestChat(initialQuestion = null) {
    if (!userName) {
      setPendingQuestion(initialQuestion);
      setShowModal(true);
    } else {
      startNewChat(initialQuestion);
    }
  }

  function handleNameSkip() {
    setUserName('User');
    setShowModal(false);
    startNewChat(pendingQuestion);
    setPendingQuestion(null);
  }

  function handleNameConfirm(name) {
    setUserName(name);
    setShowModal(false);
    startNewChat(pendingQuestion);
    setPendingQuestion(null);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative flex flex-col">
      <Starfield />

      {/* Nebula gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        <Sidebar onNew={() => requestChat()} />

        <div className="flex flex-col flex-1 min-w-0">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col flex-1 overflow-auto h-full">
                  <header className="flex items-center justify-between px-4 py-4 border-b border-violet-900/20 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🌌</span>
                      <span className="font-bold text-violet-300 tracking-wide">NOVA</span>
                    </div>
                    <span className="text-gray-500 text-xs hidden sm:block">Astronomy & Space Exploration AI</span>
                  </header>
                  <Hero onStart={() => requestChat()} onChipClick={q => requestChat(q)} />
                  <footer className="text-center py-4 text-gray-700 text-xs flex-shrink-0">
                    Powered by a local knowledge base · No external APIs
                  </footer>
                </div>
              }
            />
            <Route
              path="/chat/:id"
              element={<ChatPage onNew={() => requestChat()} />}
            />
          </Routes>
        </div>
      </div>

      {showModal && <NameModal onConfirm={handleNameConfirm} onSkip={handleNameSkip} />}
    </div>
  );
}
