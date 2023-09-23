import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
/* Router */
import Paths from './Paths'

const root = document.getElementById('root')

createRoot(root).render(
  <>
    <HelmetProvider>
      <BrowserRouter>
        <Paths />
        <ToastContainer />
      </BrowserRouter>
    </HelmetProvider>
  </>
)
