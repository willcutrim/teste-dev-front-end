import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './screens/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
