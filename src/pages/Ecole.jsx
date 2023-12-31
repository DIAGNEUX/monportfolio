import React, { useState } from 'react';
import GLPI from '../Assets/GLPI.png';
import AP3 from '../Assets/AP3.png';
import AP1 from '../Assets/ps_site.png';
import Bibliotheque from '../Assets/library.png';
import "../css/Ecole.css"
import rightIcon from "../Assets/icons8-right-50.png" 
import { useNavigate } from "react-router-dom";
import BiblioDoc from '../Assets/otherDoc/bibliotheque.pdf'
import Ap3Doc from "../Assets/otherDoc/AP3 doc1.pdf"
import GlpIDoc from "../Assets/otherDoc/glpi.pdf"
import inventaire from "../Assets/otherDoc/Inventaire.pdf"
import AP2 from "../Assets/otherDoc/AP2 c.pdf"

export const Ecole = () => {
  const [displayProjects, setDisplayProjects] = useState(true); 
  const handleTagClick = (isProjects) => {
    setDisplayProjects(isProjects);
  };

  const navigate = useNavigate();
  
  return (
    <div>
      <main className="main_ecole">
        <div className='Lestags'>
          <ul>
          <li className={displayProjects ? 'activeTag' : ''} onClick={() => handleTagClick(true)}>Projets</li>
          <li className={!displayProjects ? 'activeTag' : ''} onClick={() => handleTagClick(false)}>Documents</li>
          </ul>
        </div>
        <div className="ps">
          {displayProjects ? (
            <div className="englobe_ps">
              <div className="grid_ps">
                <div className='Card'>
                  <img onClick={() => navigate("/Ap1")} className='img-project' src={AP1} alt="" />
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>Atelier professionnel</h1>
                      <div className='tools'>
                        <div>Html</div>
                        <div>css</div>
                        <div>javascript</div>
                        <div>Figma</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Card">
                  <a href={BiblioDoc} target='_blank'>
                    <img className='img-project' src={Bibliotheque} alt="" />
                  </a>
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>Projet Bibliotheque</h1>
                      <div className='tools'>
                        <div>Php</div>
                        <div>Css</div>
                        <div>Javascript</div>
                        <div>Google book Api</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Card">
                  <a href={Ap3Doc} target='_blank'>
                    <img className='img-project' src={AP3} alt="" />
                  </a>
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>Atelier professionnel 3</h1>
                      <div className='tools'>
                        <div>E-Commerce</div>
                        <div>React</div>
                        <div>Node js</div>
                        <div>Mysql</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Card'>
                  <a href={GlpIDoc} target='_blank'>
                    <img className='img-project' src={GLPI} alt="" />
                  </a>
                  <div className="englobe_ecole_par">
                    <div>
                      <h1>GLPI</h1>
                      <div className='tools'>
                        <div>Services informatique</div>
                        <div>Service d'assistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='Wrapmesdocus'>
              <div className='mesdocus'>
              <div onClick={() => navigate("/Ap1")}><p>Atelier professionnel 1</p>  </div>
              <div><a href={AP2} target="_blank" rel="noopener noreferrer"><p>Atelier professionnel 2</p></a>  </div>
              <div>
                <a href={Ap3Doc} target='_blank'><p>Atelier professionnel 3</p></a>
                </div>
                <div>
                <a href={GLPI} target='_blank' ><p>GLPI</p></a>
                </div>
                <div>
                <a href={inventaire} target='_blank' ><p>Inventaire</p></a>
                </div>
                </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
