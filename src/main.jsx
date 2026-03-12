import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App'
import './index.css'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
