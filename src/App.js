import React, { useState } from 'react';

import UserContext from './context/UserContext';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Footer from './components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';

function App() {  
  const [user, setUser] = useState(UserContext._currentValue);
  console.log(user);
  return (
    <>
      <UserContext.Provider value={user}>
        <Navigationbar />
        <Footer /> 
      </UserContext.Provider>     
    </>
  ); 
}

export default App;