import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import tableau from "../Assets/otherDoc/Tableau de synthèse - Epreuve E4 - BTS SIO 2023.pdf"
import TS from "../Assets/Ts.pdf"

export default function Navbar() {
  const [sticky , setSticky]= useState(false)
  const handleScroll = () => {
    if(window.pageYOffset > 70){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll' , handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])

  return (
    <div>
      <div className={`navbar${sticky ? 'sticky' : '' }` }>
        <div className="logo">
          <p>A.Diagne</p>
        </div>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/bts-sio">Bts Sio</Link></li>
            <li><Link to="/ecole">Ecole</Link></li>
            <li><Link to="/entreprise">Entreprise</Link></li>
            <li><Link to="/veille-technologique">Veille technologique</Link></li>
            <li> <a href={TS} target="_blank" > Tableau de synthese</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}