import React from 'react';

import Navigationbar from './components/Navigationbar/Navigationbar';
import Footer from './components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';

function App() {  
  return (
    <>
      <Navigationbar />
      <Footer /> 
    </>
  ); 
}

export default App;