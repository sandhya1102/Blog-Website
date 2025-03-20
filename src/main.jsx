import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'
import { NewsProvider } from './context/NewsContext.jsx'

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   <NewsProvider>
    <App />
    </NewsProvider>
</React.StrictMode>
)
