import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="App">
      <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
      {isSignIn ? <SignIn /> : <SignUp />}
      <button onClick={() => setIsSignIn(!isSignIn)}>
        Switch to {isSignIn ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
  );
}

export default App;