"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const CLIENT_ID = '229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com';

interface User {
  name: string;
  email: string;
  picture: string;
}

export function NavBar() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if the user is already authenticated when the component mounts
    const authenticatedUser = localStorage.getItem('user');
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
      setIsSignedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsSignedIn(false);
    setUser(null);
    // Additional actions after sign-out
  };

  const handleSignIn = (credentialResponse: any) => {
    if (credentialResponse && credentialResponse.credential) {
      const creds = jwt_decode(credentialResponse.credential) as User;
      localStorage.setItem('user', JSON.stringify(creds));
      setUser(creds);
      setIsSignedIn(true);
    }
  };

  return (
    <GoogleOAuthProvider clientId="229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com">

    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <script src="https://accounts.google.com/gsi/client" async defer></script>

      <Link href="/" passHref>
        <div className="flex items-center justify-center">
          <DudeCrateIcon />
          <span className="sr-only">Custom Bottle Opener</span>
        </div>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="/" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Home
          </div>
        </Link>
        <Link href="/bottle-openers" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Bottle Openers
          </div>
        </Link>
        <Link href="/custom" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Customization
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            About
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Contact
          </div>
        </Link>
      </nav>

      {isSignedIn && user ? (
        // Display user profile picture if signed in
        <div className="flex items-center gap-2">
          <img
            src={user.picture}
            alt={user.name}
            className="h-8 w-8 rounded-full"
          />
          <button onClick={handleSignOut} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign Out
          </button>
        </div>
      ) : (
        // Display sign-in button if not signed in
        <GoogleLogin
          onSuccess={handleSignIn}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      )}
    </header>
    </GoogleOAuthProvider>
  );
}

function DudeCrateIcon() {
  return (
    <img
      alt="Hero"
      className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover"
      src="/DudeCrateLogo.png"
      width="45"
    />
  );
}
