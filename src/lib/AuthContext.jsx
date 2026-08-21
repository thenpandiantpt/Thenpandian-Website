import React, { createContext, useState, useContext, useEffect } from "react";
import { appParams } from "@/lib/app-params";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  useEffect(() => {
    checkAppState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ SIMPLIFIED APP STATE CHECK
  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      // Mock public settings (you can replace later with API)
      setAppPublicSettings({
        id: "demo-app",
        public_settings: {},
      });

      // If token exists → simulate login
      if (appParams?.token) {
        await checkUserAuth();
      } else {
        setIsAuthenticated(false);
        setIsLoadingAuth(false);
        setAuthChecked(true);
      }

      setIsLoadingPublicSettings(false);
    } catch (error) {
      // App state error suppressed for production
      setAuthError({
        type: "unknown",
        message: error.message || "Something went wrong",
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  // ✅ MOCK USER AUTH
  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);

      // Simulated user (replace with real API later)
      const currentUser = {
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
      };

      setUser(currentUser);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    } catch (error) {
      // Auth error suppressed for production
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
    }
  };

  // ✅ SIMPLE LOGOUT
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // ✅ SIMPLE LOGIN REDIRECT
  const navigateToLogin = () => {
    // Redirect to login page
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        authChecked,
        logout,
        navigateToLogin,
        checkUserAuth,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
