import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa Font Awesome CSS

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
