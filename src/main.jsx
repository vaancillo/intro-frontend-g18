// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
/* components */
// import App from './components/App'
import Countries from './components/Countries'
import { ToastContainer } from 'react-toastify'

const root = document.getElementById('root')

/* createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
) */
createRoot(root).render(
  <>
    <Countries />
    <ToastContainer />
  </>
)
