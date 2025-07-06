// // src/main.jsx
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./App.css";
// import { AuthProvider } from "./AuthContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>
// );


// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { AuthProvider } from "./AuthContext.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅ import this

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap here */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
