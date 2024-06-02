import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const CLIENT_ID = '229259974112-1de9qiggh25q2jkjgubjr7d04mf16qe7.apps.googleusercontent.com';

const GoogleSignIn: React.FC = () => {
  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      console.log('Login Success: currentUser:', response.profileObj);
      // Handle successful login here
    } else {
      console.log('Login Success: offline response:', response);
    }
  };

  const onFailure = (response: any) => {
    console.log('Login failed: res:', response);
    // Handle failed login here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleSignIn;
