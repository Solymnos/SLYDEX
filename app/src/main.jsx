import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route , useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import "./main.css"
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
