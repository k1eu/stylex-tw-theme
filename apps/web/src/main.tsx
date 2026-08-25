import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'stylex-tw-theme/reset.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
