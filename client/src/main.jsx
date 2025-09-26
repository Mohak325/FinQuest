import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import Navbar from './navbar.jsx';
import { motion } from "framer-motion";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <Navbar />
    
  </React.StrictMode>
);