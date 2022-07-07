import React from 'react';
import "./App.scss";
import Home from './components/Home/Home.js';
import MeteorFingers from './components/MeteorFingers/MeteorFingers.js';
import ChatApp from './components/ChatApp/ChatApp';
import MushroomDriver from './components/MushroomDriver/MushroomDriver';
import FishyFeeder from './components/FishyFeeder/FishyFeeder';
import NavBar from './components/NavBar/NavBar.js'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/MeteorFingers' element={<MeteorFingers />} />
        <Route path='/ChatApp' element={<ChatApp />} />
        <Route path='/MushroomDriver' element={<MushroomDriver />} />
        <Route path='/FishyFeeder' element={<FishyFeeder />} />
      </Routes>
    </>
  );
}