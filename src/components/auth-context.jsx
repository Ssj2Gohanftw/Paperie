// components/AuthContext.js
"use client";
import React, { createContext, useState, useEffect, cache } from "react";
import { usePathname } from "next/navigation";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  const fetchUserStatus = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/status", { cache: "no-store" });
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
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    fetchUserStatus();
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ user, isLoading, fetchUserStatus, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
