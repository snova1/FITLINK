import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import PQRS from './PQRS';
import Planes from './Planes';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import TyC from './pages/TyC';
import PPriv from './pages/PPriv';
import GymAdmin from './pages/GymAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterAlly from './pages/RegisterAlly';
import User from './pages/User';
import UserEdit from './pages/UserEdit';
import GymMod from './pages/GymMod';

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
        <Route path="/Gym" element={<GymAdmin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/RegisterAlly" element={<RegisterAlly />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/UserEdit" element={<UserEdit />}></Route>
        <Route path="/GymModify" element={<GymMod />}></Route>
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
