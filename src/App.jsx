import React, { useState } from 'react';
import OTPPage from './pages/OTPPage';
import VotingFlow from './pages/VotingFlow'; // <- UPDATED

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      {authenticated ? (
        <VotingFlow onFinish={() => setAuthenticated(false)} /> // <- UPDATED PROP
      ) : (
        <OTPPage onVerify={() => setAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
