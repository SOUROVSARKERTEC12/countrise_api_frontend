import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Routes} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
        <ThemeProvider>
        <App />
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
)
