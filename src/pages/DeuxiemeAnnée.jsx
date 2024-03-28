import React from 'react';
import "../css/Deuxieme.css"
import "../Assets/otherDoc/first Veille technologique.pdf"
import tableau from "../Assets/otherDoc/Tableau de synthèse - Epreuve E4 - BTS SIO 2023.pdf"
import sentechs from "../Assets/sentechs logo.png"
import stage from "../Assets/otherDoc/stage doc.pdf"
import TSF from "../Assets/TSF.jpg"

export const DeuxiemeAnnée = () => {
  return (
    <div>
       <div className='Entreprise'>
        <h1>Stage en deuxieme année</h1>
        <div className='Ent_contain'>
            <div className='Ent_par'>
                <p>
                Le groupe TSF, acteur cinématographique majeur en France et en Europe depuis 1979, est reconnu pour son engagement continu à fournir
                des solutions précises répondant aux besoins des professionnels du cinéma. 
                Nous proposons une gamme complète de matériel issu des dernières innovations technologiques, couvrant tout, de la
                 caméra à la régie, de la lumière
                 aux véhicules, en passant par la machinerie et la gestion des données. Notre offre diversifiée et nos prestations complètes sont 
                 conçues pour répondre à tous les impératifs de la production cinématographique et audiovisuelle.
                </p>
            </div>
            <div className='Ent_img'>
                <img src={TSF} alt="" />
            </div>
        </div>
        <div>
        <h1>Mes missions </h1>
        </div>
        <div className="wrapmission">
        <div className="tache">
            <ul>
                <li>Refonte du site Plouf Plouf </li>
                <li>Creation de base de données</li>
                <li>Utilisation des langages Next.JS, Node.JS , mysqlServer</li>
                <li>maquette du site </li>
            </ul>
            </div>
            <div className="tocenter">
              <div>
              <button>
                <a href={stage} target="_blank" rel="noopener noreferrer">Rapport de stage</a>
                </button>
              </div>
            </div>
        </div>

       
    </div>
    </div>
  );
};
