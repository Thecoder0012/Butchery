import {BrowserRouter, Routes, Route} from "react-router-dom"
import {StrictMode} from 'react';
import React, { useState } from 'react';
import Home from './components/Home'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { FrontPageImage } from './components/FrontPageImage';
import { Form } from "./components/Form";
import { Admin } from "./components/Admin";
import Login from './components/Login/Login';




function App() {

 


  

return (
<>

    <Navbar /> 
      <Routes>
        <Route path="/" element={[ <Home />]} />
        <Route path="/order" element={<Form/>} />
        <Route path="/products" element={<Products /> }/>
        <Route path="/about" element={<About /> }/>
        <Route path="/admin" element={<Admin /> }/>
      </Routes>
      <Footer />
      

    
  
</>
);
}

export default App;