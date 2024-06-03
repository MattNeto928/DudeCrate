"use client"

import Link from "next/link";
import { useState } from "react";
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

const CLIENT_ID = '229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com';

interface User {
  name: string;
  email: string;
  imageUrl: string;
}

export function NavBar() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      setIsSignedIn(true);
      setUser(response.profileObj as User);
      // Additional actions after sign-in
    } else {
      console.log('Login Success: offline response:', response);
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUser(null);
    // Additional actions after sign-out
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
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
        <Link href="#" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Customization
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            About
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Contact
          </div>
        </Link>
        
      </nav>
      {isSignedIn ? (
          <div className="flex items-center">
            {user && (
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={user.imageUrl}
                alt={user.name}
              />
            )}
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleSignOut}
            />
          </div>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign In with Google"
            onSuccess={handleSignIn}
            onFailure={(error) => console.error('Google sign-in failed:', error)}
            cookiePolicy={'single_host_origin'}
          />
        )}
    </header>
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
