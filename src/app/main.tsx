import '@/shared/styles/index.css'
import '@/shared/translations/i18n'
import 'react'
import { StrictMode } from 'react'
import 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './configuration'
import { initReactDevToolsFix } from './devtools'

initReactDevToolsFix()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
