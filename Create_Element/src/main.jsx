import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const createElement = React.createElement(
  "a",
  {href:"https://www.google.com", target:"_blank"},
  "visit to google"
)

createRoot(document.getElementById('root')).render(

  createElement

)
