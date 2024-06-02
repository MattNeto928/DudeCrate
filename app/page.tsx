import React from 'react';
import { LandingPage } from '@/components/LandingPage';
import { BottleOpener } from '@/components/BottleOpener';
import { AuthProvider } from '@/components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BottleOpener />
    </AuthProvider>
  );
}

export default App;
