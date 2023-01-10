import React from 'react';
import Footer from './components/Footer/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';
import Routers from './components/Routers/Routers';

function App() {  
  return (
    <>
      <Routers />
      <Footer /> 
    </>
  ); 
}

export default App;