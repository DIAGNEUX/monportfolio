
<div className="wrap_grid_them">
<div className="grid_them">
<div className="exper_prof">
    <h1 onClick={toggleExperience} class="btn_exper ">Experience professionnelle <img src={chevronUp} alt="" /></h1>
    {showExperience && (
    <div class="experience">
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

{/* projet professionel */}
<div class="projet_prof">
    <h1 onClick={toggleProjet} class="btn_projet">Projet proffessionnel<img src={chevronDwon} alt="" /></h1>
    {showProjet && (
    <div class="projet">
        <div class="in_projet">
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
    </div>
    )}
</div>
</div>
</div>