import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Adicione essa linha

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter> {/* Adicione o BrowserRouter aqui */}
      <App />
    </BrowserRouter> {/* E feche ele aqui */}
  </>
)
