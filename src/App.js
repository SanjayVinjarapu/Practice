import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState, useEffect, useReducer } from 'react';
import React from 'react';

import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import DressList from './Pages/home/home';


function App() {
  
  return (
    <div className="app-wrapper">
      <Header/>
      <DressList/>
      <Footer/>
    </div>
    
  );
}

export default App;
