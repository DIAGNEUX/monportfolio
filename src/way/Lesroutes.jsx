import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import BtsSio from '../pages/BtsSio';
import {Ecole} from '../pages/Ecole';
import {VeilleTechnologique} from '../pages/VeilleTechnologique'
import { Entreprise } from '../pages/Entreprise';
import {Ap1} from '../component/Ap1';
export const Lesroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Accueil />} exact />
            <Route path="/bts-sio" element={<BtsSio />} />
            <Route path="/ecole" element={<Ecole />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/veille-technologique" element={<VeilleTechnologique />} />
            <Route path="/Ap1" element={<Ap1 />} />
          </Routes>
    </div>
  )
}
