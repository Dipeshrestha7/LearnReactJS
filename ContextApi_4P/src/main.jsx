import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'
import LanguageContext from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeContext>
          <LanguageContext>
              <App />
          </LanguageContext>
      </ThemeContext>
  </StrictMode>,
)
