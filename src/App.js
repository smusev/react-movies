import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
