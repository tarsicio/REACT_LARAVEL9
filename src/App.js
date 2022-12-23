import React, { useState } from 'react';

import { UserProvider } from './context/UserProvider';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Footer from './components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';

function App() {  
  return (
    <>
      <UserProvider>
        <Navigationbar />
        <Footer /> 
      </UserProvider>     
    </>
  ); 
}

export default App;