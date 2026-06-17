import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

if (window.location.pathname.endsWith('/index.html')) {
  const newPath = window.location.pathname.replace('/index.html', '/');
  window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
