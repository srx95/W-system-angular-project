import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
//Stranice
import Home from './pages/Home';
import Contact from './pages/Contact';
import Marketing from './pages/Marketing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App(){
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
       <Routes> 
          <Route path="/" element={<Home/>} exact />
          <Route path="/marketing" element={<Marketing/>} />
          <Route path="/contact" element={<Contact/>} exact />
       </Routes>
       <Footer />
    </Router>
 ); 
}

export default App;
