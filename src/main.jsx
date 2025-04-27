import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './styles.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>,
)
