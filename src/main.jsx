// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/* components */
import App from './components/App'

const root = document.getElementById('root')

/* createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
) */
createRoot(root).render(<App />)
