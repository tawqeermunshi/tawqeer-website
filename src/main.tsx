
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    console.log("Root element found, mounting app...");
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found! Cannot mount app.");
  }
} catch (error) {
  console.error("Failed to mount React application:", error);
}
