"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

import { createClient } from "@supabase/supabase-js";
import React from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "0";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON || "0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function NavBar() {

  const [email, setEmail] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null); // State to store profile image URL

  const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://www.dudecrate.shop/'
      }

    });

    if (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error during sign-out:', error);
    } else {
      console.log("Sign out complete.")
      setEmail(null);
      setProfileImage(null);
    }
  };

  useEffect(() => {
    const handleSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching session:', error);
        return;
      }

      if (session.session) {
        setEmail(session.session.user?.email ?? null); // Use optional chaining to access user.email
        console.log('User email:', session.session.user?.email);

        // Check if user_metadata exists and has image URL
        if (session.session.user?.user_metadata && session.session.user.user_metadata.avatar_url) {
          setProfileImage(session.session.user.user_metadata.avatar_url);
          console.log('Profile image URL:', session.session.user.user_metadata.avatar_url);
        }
      }
    };

    handleSession();
  }, []);
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
