
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element found, mounting app...");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Cannot mount app.");
}
