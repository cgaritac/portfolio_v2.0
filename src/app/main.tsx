import '@/shared/styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './configuration'
import { initReactDevToolsFix } from './devtools'

// fix for React DevTools with React 19
initReactDevToolsFix()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
