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
                  <p>Je m'appelle Alioune Diagne, j'ai 21 ans et je suis en deuxieme année de BTS SIO (Service Informatique aux Organisations) à l'IPSSI.
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
            <div className="wrap_grid_them">
      <div className="grid_them">
        <div className="exper_prof">
          <h1 onClick={toggleExperience} className="btn_exper ">
            Experience professionnelle
            <img
              src={showExperience ? chevronUp : chevronDwon }
              alt=""
            />
          </h1>
          {showExperience && (
            <div className="experience">
        <ul>
        <h3>Projet Developpeur FullStack</h3>
        <p>SENTECHS - Mai 2023 à août 2023</p>
        <li>Création d'un site de portage salarial en utilisant les langages React.js</li>
        <li>Conception d'images et de maquettes sur Figma</li>
        <li>Utilisation de Chart.js pour générer des graphiques </li>
        <li>Mise en place et utilisation de Google Tag Manager</li>
       </ul>
       <ul>
        <h3> Projet Developpeur FullStack</h3>
        <p>Ipssi - Mars 2023 à avril 2023</p>
        <li>création d'une librairie</li>
        <li>l'utilisation des langages PHP MySQL JavaScript CSS HTML</li>
        <li>L'utilisation d'une API </li>
        <li>création de logo sur Canvas</li>
    </ul>
    <ul>
        <h4> Projet Developpeur FrontEnd</h4>
        <p>Ipssi - Décembre 2022 à janvier 2023</p>
        <li>Création de site vitrine</li>
        <li>L'utilisation des langages HTML CSS et JAVASCRIPT</li>
        <li>création de charte graphique (logo) sur figma </li>
    </ul>
    <ul>
        <h4> Auto-Entrepreneur</h4>
        <p>Idrac - Mars 2022 à mai 2022</p>
        <li>Création d'une boutique en ligne(Wix)</li>
        <li>Vente de produit</li>
        <li>sondage et promotion sur le produit</li>
        <li>Etude de marché</li>
    </ul>
            </div>
          )}
        </div>

        <div className="projet_prof">
          <h1 onClick={toggleProjet} className="btn_projet">
            Projet proffessionnel
            <img
             src={showProjet ? chevronUp : chevronDwon}
              alt=""
            />
          </h1>
          {showProjet && (
            <div className="projet">
              <p>Après l'obtention de mon BTS SIO option SLAM à l'IPSSI, je souhaite poursuivre mes études en
        faisant un Bachelor en développement web et en applications. Ensuite, je prévois de consolider mes compétences en faisant un Master dans
        le même domaine.
        Ces programmes me permettront d'acquérir des compétences spécifiques, telles que la programmation web,
        la conception d'interface utilisateur,
        la gestion de base de données, et bien plus encore.
        Mon objectif professionnel est de devenir un développeur web et d'applications reconnu, en travaillant
        pour une entreprise innovante ou en créant ma propre entreprise. Mon domaine d'intérêt est
        le développement de solutions web pour les entreprises et les organisations. Je souhaite
        créer des applications web efficaces, faciles à utiliser et qui répondent aux besoins des clients
    </p>
            </div>
          )}
        </div>
      </div>
    </div>
          </div>


      </div >  
      </div>
  );
};

export default Accueil;
