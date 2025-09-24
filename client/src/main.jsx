import React from 'react'
import ReactDOM from 'react-dom/client'

import SignUpPage from './signup.jsx';
import './index.css' // <-- Make sure this line is here
import Login from './loginpg.jsx';
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)