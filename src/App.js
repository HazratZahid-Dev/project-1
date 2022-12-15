import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';



import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <Router>
      <div>
        <Nav  />
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
        <Routes>
          <Route path='/about' element={<About />} />


        </Routes>
        <Routes>
          <Route path='contact' element={<Contact />} />


        </Routes>
      



      </div>
      
    </Router>
  

</>


  );
  

  }
  


export default App;
