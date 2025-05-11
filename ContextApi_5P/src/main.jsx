import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'
import AuthContent from './context/AuthContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <AuthContent>
        <App />
      </AuthContent>
    </ThemeContext>
  </StrictMode>,
)
