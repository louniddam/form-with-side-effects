import React, { useEffect, useState } from 'react';
import AuthContext from './components/store/auth-context'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('logged', '1')
  };

  const logoutHandler = () => {
    localStorage.removeItem('logged')
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const logged = localStorage.getItem('logged')

    if(logged === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }
    }>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
