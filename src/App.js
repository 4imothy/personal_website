import React from 'react';
import './App.scss';
import Home from './components/Home/Home.js';
import MeteorFingers from './components/MeteorFingers/MeteorFingers.js';
import ChatApp from './components/ChatApp/ChatApp';
import MushroomDriver from './components/MushroomDriver/MushroomDriver';
import FishyFeeder from './components/FishyFeeder/FishyFeeder';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import RealTimeObjDet from './components/RealTimeObjDet/RealTimeObjDet';
import Gret from './components/Gret/Gret';
import ClearNet from './components/ClearNet/ClearNet';
import AI3 from './components/ai3/ai3';
import NavBar from './components/NavBar/NavBar.js';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/SortingVisualizer" element={<SortingVisualizer />} />
                <Route path="/MeteorFingers" element={<MeteorFingers />} />
                <Route path="/ChatApp" element={<ChatApp />} />
                <Route path="/MushroomDriver" element={<MushroomDriver />} />
                <Route path="/FishyFeeder" element={<FishyFeeder />} />
                <Route path="/RealTimeObjDet" element={<RealTimeObjDet />} />
                <Route path="/Gret" element={<Gret />} />
                <Route path="/ClearNet" element={<ClearNet />} />
                <Route path="/ai3" element={<AI3 />} />
            </Routes>
        </>
    );
}
