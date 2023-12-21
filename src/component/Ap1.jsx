import React, { useState , useEffect } from 'react';
import PDProject from "../Assets/Api-docs/Présentation projet slam.pdf";
import Facture from "../Assets/Api-docs/Facture.pdf";
import Kbis from "../Assets/Api-docs/Kbis.pdf";
import Equipe from "../Assets/Api-docs/Equipe.pdf";
import EtudeDeMarche from "../Assets/Api-docs/Etude de Marche.pdf";

export const Ap1 = () => {
  const [pdfToShow, setPdfToShow] = useState(null);

  const showPdf = (pdf) => {
    setPdfToShow(pdf);
  };
  useEffect(() => {
    setPdfToShow(PDProject);
  }, []);

  return (
    <div className='Ap1'>
      <h1>Eratech</h1>
      <div className='Api-Docs'>
        <div className='docs' onClick={() => showPdf(PDProject)}>Présentation du projet</div>
        <div className='docs' onClick={() => showPdf(Facture)}>Facture</div>
        <div className='docs' onClick={() => showPdf(EtudeDeMarche)}>Etude de marché</div>
        <div className='docs' onClick={() => showPdf(Equipe)}>Equipe</div>
      </div>
      <div className="wrap-Affichage">
      <div className="affichage">
        {pdfToShow && <iframe src={pdfToShow} title="PDF Viewer" width="100%" height="500px" />}
      </div>
      </div>
      <div className='Eratech'>
      <div className='website'><a href="https://diagneux.github.io/eratech/"> Consultez le site</a></div>
      </div>
    </div>
  )
}
