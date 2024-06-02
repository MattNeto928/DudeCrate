"use client"

import Link from "next/link"
import GoogleSignIn from "./google-sign-in";
import { gapi } from 'gapi-script'
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

const CLIENT_ID = '229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com';

export function NavBar() {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const { isSignedIn, user } = useAuth();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);
  }, []); // Added dependency array to ensure this runs only once

  useEffect(() => {
    if (isSignedIn && user) {
      try {
        const imageUrl = user.getBasicProfile().getImageUrl();
        setProfileImageUrl(imageUrl);
      } catch (error) {
        setError(true);
      }
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    if (error) {
      window.location.reload();
    }
  }, [error]);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="#">
        <DudeCrateIcon />
        <span className="sr-only">Custom Bottle Opener</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          href="/bottle-openers"
        >
          Bottle Openers
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          href="#"
        >
          Customization
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          href="#"
        >
          Contact
        </Link>
      </nav>
      {isSignedIn && user ? (
        <div className="flex gap-4 items-center">
          {profileImageUrl ? (
            <img className='h-10 rounded-lg' src={profileImageUrl} alt="Profile" />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      ) : (
        <GoogleSignIn />
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
      width='45'
    />
  );
}
