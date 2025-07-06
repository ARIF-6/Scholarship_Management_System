// // src/AuthContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     setIsAuthenticated(!!localStorage.getItem("token"));
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// src/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Define possible roles
export const Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
};

const AuthContext = createContext();

// Provider wraps the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    setIsAuthenticated(!!token);
    setRole(storedRole);
  }, []);

  const login = (token, userRole) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole);
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// *** Make sure we export useAuth by name ***
export function useAuth() {
  return useContext(AuthContext);
}

// Also export AuthContext as default (not strictly needed but avoids confusion)
export default AuthContext;
