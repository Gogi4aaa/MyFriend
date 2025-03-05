import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteSettings } from './Routes/RouteSettings.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteSettings/>
  </StrictMode>,
)
