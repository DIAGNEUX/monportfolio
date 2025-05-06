import React, { useEffect , useState } from 'react';
import GlobeAnimation from '../component/3d';
import profilImg from "../Assets/profil.png"
import linkedin from "../Assets/linkedin.png"
import gitHub from '../Assets/github.png'
import biggithub from '../Assets/icons8-github-100.png'
import bdd from '../Assets/data base.png'
import coding from '../Assets/coding.png'
import chevronUp from '../Assets/icons8-chevron-haut-48.png'
import chevronDwon from '../Assets/icons8-chevron-bas-48.png'
import cv from '../Assets/diagne-alioune-cv.pdf'

const Accueil = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjet, setShowProjet] = useState(false);

  

  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  const toggleProjet = () => {
    setShowProjet(!showProjet);
  };
  
  return (
      <div className='Accueil'>
        <div className='first-page'>
          <div className='presentation'>
            <div className='left'>
              <div>
            <h1>Bonjour je suis <span >Alioune</span> </h1>
            <h2>Je suis étudiant en <span> BTS SIO </span>  </h2>
            <h3>option SLAM</h3>
            
            <div className='bottom_me'>
            <a href={cv} target="_blank"><button>consultez mon cv</button></a>
            </div>
            </div>
            </div>
            <div className='Canvas'>
          <GlobeAnimation/>
          </div>
          </div>
          <div className='Profil'>
            <div className='box'></div>
            <div className='in-Profil'>
              <div className='img-profil'>
              <img src={profilImg} alt="" />
              </div>
              <div className='text-presentation'>
                <div>
                  <h1>A propos de moi</h1>
                  <p>Je m'appelle Alioune Diagne, j'ai 23 ans et je suis en etudiant en BTS SIO (Service Informatique aux Organisations) en candidat libre.
                    Je suis passionné par les technologies de l'information et de la communication, et j'ai choisi de suivre cette filière
                     car elle offre de nombreuses opportunités dans le domaine de l'informatique.
                     </p>
                    <div className='btn-contact'>
                      <a href="https://www.linkedin.com/in/alioune-diagne-281635253/" target="_blank" rel="noopener noreferrer"><button>LinkedIn<img src={linkedin} alt="" /></button></a>
                      <a href="https://github.com/DIAGNEUX" target="_blank" rel="noopener noreferrer"><button>Github<img src={gitHub} alt="" /></button></a>
                    </div>   
                </div>
              </div>
            </div>
            <div className='Skills'>
              <h1>Compétence acquises</h1>
              <div>
              <div class="grid_competence">
                    <div class="card" >
                      <div className='card-img'>
                      <img src={coding} alt="" />
                      </div>
                        <h1>Developpement Web</h1>
                        <h4>HTML, CSS, JAVASCRIPT, PHP, REACT, NODE JS</h4>
                    </div>
                    <div class="card" >
                      <div className='card-img'>
                      <img src={bdd} alt="" />
                      </div>
                        <h1>Gestion de BDD</h1>
                        <h4> Stocker, manipuler et gérer les données
                             dans une base de données via MySQL ou MARIA BD.</h4>
                    </div>
                    <div class="card">
                      <div className='card-img'>
                      <img src={biggithub} alt="" />
                      </div>
                        <h1>Git et GitHub</h1>
                        <h4>Contrôle de version, collaboration et gestion de projets avec Git et GitHub. </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div >  
      </div>
  );
};

export default Accueil;
