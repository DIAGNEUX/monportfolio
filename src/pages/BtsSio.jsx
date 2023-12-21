import React from 'react'
import "../css/Bts.css"

const BtsSio = () => {
  return (
    <main className="main_bts">
        <div className="wrap_bts">
        <h1 >BTS SIO</h1>
        <h3>Présentation du BTS SIO</h3>
        <p>Le BTS SIO - Brevet du Technicien Supérieur Services Informatiques aux Organisations
             - se prépare sur une période de deux ans et s'adresse aux personnes qui souhaitent devenir développeur ou s'orienter dans l'administration des systèmes et réseaux. Pour ma part, j'ai choisi de faire un BTS SIO pour m'orienter dans la première option (SLAM) .
               </p>

              <div className="bts_grid">
                <div className="SISR">
                    <h2>SISR</h2>
                    <ul>
                        <li>Technicien de production</li>
                        <li>Technicien d’infrastructure</li>
                        <li>Technicien réseau et télécoms</li>
                        <li>Technicien systèmes et réseaux</li>
                        <li>Administrateur systèmes et réseaux</li>
                        <li>Support systèmes et réseaux</li>
                        <li>Pilote d’exploitation</li>
                        <li>Informaticien support et déploiement</li>
                    </ul>
                </div>
                <div className="SLAM">
                    <h2>SLAM</h2>
                    <ul>
                        <li>Développeur d'applications informatiques</li>
                        <li>Développeur informatique</li>
                        <li>Analyste d'applications ou d'études</li>
                        <li>Analyste programmeur</li>
                        <li>Chargé d'études informatiques</li>
                        <li>Informaticien d'études</li>
                        <li>Programmeur analyste</li>
                        <li>Programmeur d'applications</li>
                        <li>Responsable des services applicatifs</li>
                        <li>Technicien d'études informatiques</li>
                    </ul>


                </div>
              </div>
              <div className="secu">
                <h2>La cybersecurité</h2>
                <p>Cette année le référentiel a changé pour répondre au besoin actuel du domaine informatique. La sécurité des données professionnelles et personnelles sont un enjeu important pour chaque entreprise. Au vu de l'augmentation des vols de données et de l'évolution des techniques d'arnaques, les entreprises souhaitent développer la cybersécurité. C'est à cet effet, que le BTS SIO s'est réformé et est maintenant plus axé sur la sécurité. Les deux sections apprennent donc à sécuriser leurs codes pour les SLAM et l'Infrastructure réseau pour les SISR.

                </p>
              </div>
        </div>
    </main>
  )
}

export default BtsSio