import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GLPI from '../Assets/GLPI.png';
import AP3 from '../Assets/AP3.png';
import AP1 from '../Assets/ps_site.png';
import Bibliotheque from '../Assets/library.png';
import "../css/Ecole.css"
import rightIcon from "../Assets/icons8-right-50.png" 
import { useNavigate } from "react-router-dom";
import sentechs from "../Assets/sentechs logo.png"
import TSF from "../Assets/TSF.jpg"
import { PremiereAnnées } from './PremiereAnnée';
import { DeuxiemeAnnée } from './DeuxiemeAnnée';

export const Entreprise = () => {
  const [displayProjects, setDisplayProjects] = useState(true); 
  const handleTagClick = (isProjects) => {
    setDisplayProjects(isProjects);
  };

  const navigate = useNavigate();
  
  return (
    <div>
      <main className="main_ecole">
        <div className="ps">
            <div className="englobe_ps">
              <div className="grid_ps">
                <div className='Card'>
                  <Link to="/PremiereAnnée">
                    <img className='img-project' src={sentechs} alt="" />
                  </Link>
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>SENTECHS</h1>
                      {/* <div className='tools'>
                        <div>Services informatique</div>
                        <div>Service d'assistance</div>
                      </div> */}
                    </div>
                  </div>
                </div> 
                <div className='Card'>
                  <Link to="/DeuxiemeAnnée">
                    <img className='img-project' src={TSF} alt="" />
                  </Link>
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>TSF</h1>
                      {/* <div className='tools'>
                        <div>Services informatique</div>
                        <div>Service d'assistance</div>
                      </div> */}
                    </div>
                  </div>
                </div> 
                
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};
