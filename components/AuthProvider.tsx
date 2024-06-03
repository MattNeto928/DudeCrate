"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { gapi } from 'gapi-script'; // Assuming you are using gapi for Google Sign-In

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isSignedIn: boolean;
  user: gapi.auth2.GoogleUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<gapi.auth2.GoogleUser | null>(null);

  useEffect(() => {
    const initAuth = () => {
      // Ensure gapi is available on the client side
      gapi.load('auth2', () => {
        const auth2 = gapi.auth2.init({
          client_id: '229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com',
        });

        auth2.isSignedIn.listen(setIsSignedIn);
        setIsSignedIn(auth2.isSignedIn.get());
        setUser(auth2.currentUser.get());
      });
    };

    initAuth();
  }, []);

  if (typeof window === 'undefined') {
    // If rendering on the server, return null or some placeholder
    return null;
  }

  if (!children) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
