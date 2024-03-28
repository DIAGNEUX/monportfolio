import React from 'react';
import "../css/Entreprise.css"
import "../Assets/otherDoc/first Veille technologique.pdf"
import tableau from "../Assets/otherDoc/Tableau de synthèse - Epreuve E4 - BTS SIO 2023.pdf"
import sentechs from "../Assets/sentechs logo.png"
import stage from "../Assets/otherDoc/stage doc.pdf"

export const PremiereAnnée = () => {
  return (
    <div>
       <div className='Entreprise'>
        <h1>Stage en premiere année</h1>
        <div className='Ent_contain'>
            <div className='Ent_par'>
                <p>
                    SENTECHS Technology Engineering est une entreprise de conseils et services informatiques spécialisé dans les solutions applicatives tels que Salesforces.
                    Fondée par deux consultants seniors ayant plus de 20 ans d’expérience en conseils avec des clients satisfaits dans une dizaine de pays de la zone EMEA. SENTECHS est donc avant tout un cabinet d’experts. 
                </p>
            </div>
            <div className='Ent_img'>
                <img src={sentechs} alt="" />
            </div>
        </div>
        <div>
        <h1>Mes missions </h1>
        </div>
        <div className="wrapmission">
        <div className="tache">
            <ul>
                <li>Creation de site de portage salarial</li>
                <li>Creation de base de données</li>
                <li>Utilisation des langages React js , Node js , mysql ou Mongo db</li>
                <li>Utilisation de google tag manager </li>
            </ul>
            </div>
            <div className="tocenter">
              <div>
              <button>
                <a href={stage} target="_blank" rel="noopener noreferrer">Rapport de stage</a>
                </button>
              <button>
                <a href="https://diagneux.github.io/portage_salarial/">Consultez le site</a>
              </button>
              </div>
            </div>
        </div>

       
    </div>
    </div>
  );
};
