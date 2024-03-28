import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import PQRS from './PQRS';
import Planes from './Planes';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import TyC from './pages/TyC';
import PPriv from './pages/PPriv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Empresa" element={<Empresa />}></Route>
        <Route path="/pqrs" element={<PQRS />}></Route>
        <Route path="/planes" element={<Planes />}></Route>
        <Route path="/TyC" element={<TyC />}></Route>
        <Route path="/PoliticasDePrivacidad" element={<PPriv />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
