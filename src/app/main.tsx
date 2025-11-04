import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './configuration/App.tsx'
import { initFirebase } from './hoting/firebase.hosting.ts'

initFirebase();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
