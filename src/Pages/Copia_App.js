import React from 'react';
import UserContext from './context/UserContext';
//cdimport Navmenu from './Components/Navmenu/Navmenu';
import Navigationbar from './Components/Navigationbar/Navigationbar';
//import Footer from './Components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const userData = {
    name: null,
    token: null,
    avatar: null,
    mail: null,
  };

  return (
    <UserContext.provider value={userData}>
      <Navigationbar />      
    </UserContext.provider >
  ); 
}

export default App;