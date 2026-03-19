import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SessionsProvider } from './context/SessionsContext'
import { UserProvider } from './context/UserContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SessionsProvider>
          <App />
        </SessionsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
