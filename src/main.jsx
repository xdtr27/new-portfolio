import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SizeProvider } from "./contexts/SizeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SizeProvider>
      <App />
    </SizeProvider>
  </React.StrictMode>
);
