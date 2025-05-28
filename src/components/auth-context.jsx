// components/AuthContext.js
"use client";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserStatus = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/status");
      const data = await res.json();
      if (data.isLoggedIn) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user status", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, fetchUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
