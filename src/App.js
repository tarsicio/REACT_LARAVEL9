import React from 'react';
import UserContext from './context/UserContext';
//cdimport Navmenu from './Components/Navmenu/Navmenu';
import Navigationbar from './components/Navigationbar/Navigationbar';
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
//UserContext.provider value={userData}
//UserContext.provider 
  return (
    <>
      <Navigationbar />      
    </>
  ); 
}

export default App;