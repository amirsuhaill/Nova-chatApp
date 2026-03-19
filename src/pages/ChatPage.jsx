import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Chat from '../components/Chat';
import { useSessions } from '../context/SessionsContext';

export default function ChatPage({ onNew }) {
  const { id } = useParams();
  const { getSession } = useSessions();
  const navigate = useNavigate();

  const session = getSession(id);

  // If session doesn't exist (e.g. direct URL), redirect home
  useEffect(() => {
    if (!session) navigate('/', { replace: true });
  }, [session]);

  if (!session) return null;

  return <Chat session={session} onNew={onNew} />;
}
