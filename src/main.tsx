import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Global.style.tsx'
import { ContextProviber } from './context/ValueFetch.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProviber>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ContextProviber>
  </React.StrictMode>,
)
