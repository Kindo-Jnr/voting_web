import React, { useState } from 'react';
import VotingPage from './pages/VotingPage';
import OTPPage from './pages/OTPPage'; // Create this file if it doesn't exist

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      {authenticated ? (
        <VotingPage onLogout={() => setAuthenticated(false)} />
      ) : (
        <OTPPage onVerify={() => setAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
