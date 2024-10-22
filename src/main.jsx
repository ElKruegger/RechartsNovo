import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
