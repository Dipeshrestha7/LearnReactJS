import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoleContext from './context/RoleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoleContext>
      <App />
    </RoleContext>
  </StrictMode>,
)
