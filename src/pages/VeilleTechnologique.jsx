import React from 'react';
import "../css/Veille.css"
import ui from "../Assets/UI and UX.png"
import FirstV from '../Assets/otherDoc/first Veille technologique.pdf'
import lesoutilsV from "../Assets/otherDoc/Les outils de la veille technologie.pdf"

export const VeilleTechnologique = () => {
  return (
    <main className='VeilleTechno'>
      
      <div className="develop">
        <div>
          <h1>Qu'est ce que la veille technologique ?</h1>
          <p>La veille technologique désigne l'ensemble des méthodes légales employées pour organiser de manière systématique la collecte d'informations technologiques, leur analyse, leur diffusion et leur exploitation en vue de soutenir la croissance et le développement d'une entreprise. Elle implique l'observation et l'analyse des avancées scientifiques et techniques des produits, des processus de fabrication, des matériaux ainsi que des impacts économiques qu'ils engendrent, tant actuels que futurs. La veille technologique nécessite une surveillance constante des nouvelles technologies et de leur mise en marché, ainsi qu'une recherche continue de la meilleure façon de les exploiter.</p>
        </div>
      </div>
      <div className="outil">
        <a href={lesoutilsV}>
          <button>Consulter la documentation sur les outils de veille technologie</button>
        </a>
      </div>

      <div className="englobe_grid">
        <div className="grid_me">
          <div className="the_first">
            <div className="englobe_UI">
              <img src={ui} alt="" />
              <div className="englobe_par">
                <div>
                  <p>Les dernières tendances en matière de conception d'interfaces utilisateur et de conception UX/UI </p>
                  <div className="center_btn">
                    <a href={FirstV}>
                      <button> documentation veille technologique</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="the_second">
            <h1>La deuxième veille</h1>
          </div>
        </div>
      </div>
    </main>
  );
};
