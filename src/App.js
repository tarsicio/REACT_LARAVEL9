import React from 'react';
import UserContext from './context/UserContext';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Footer from './components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';

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
      <Footer />      
    </>
  ); 
}

export default App;