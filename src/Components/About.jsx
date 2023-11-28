import React from 'react';

function About() {
  return (
    <div className="section--2">
      <div className="container-4">
        <div className="title-section">
          <h1 className="heading-2">
            <span className="text-span-2">A PROPOS DE MOI</span>
          </h1>
        </div>
        <div className="containt-s2">
          <div className="photo-s2">
            <img src="media/ma-pp.png" alt="" />
            <div className="div-poste-2">
            <h2 className="heading-7">Mbemba Nhora</h2>
              
              <div className="div-block-24"></div>
            </div>
          </div>
          <div className="text-s2">
            <div className="titles-s2">
              <div className="name-s2">
                <h3 className="heading-8">Conceptrice développeuse d'application junior</h3>
              </div>
              <div className="div-block-25"></div>
            </div>
            <p className="paragraph-5">
              J’ai suivi la formation développeur d'applications multimédias au sein du centre de formation{' '}
              <a href="https://alt-rh.com/alt-rh-propose-diverses-formations/developpeur-dapplications-multimedia/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(243, 144, 14, 0.78)' }}>
                Alt-Rh
              </a>
              . <br /> Suite à cette formation, j’ai eu envie d'en découvrir plus..<br /> <br />C'est pourquoi j'ai commencé cette année la formation de concepteur développeur d'applications chez{' '}
              <a
                href="https://www.prepavenir-formation.fr/cda-concepteur-dapplication-conventionnee/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(243, 144, 14, 0.78)' }}
              >
                Prepavenir-formation
              </a>
              .<br /> <br />J'aimerais me spécialiser dans le développement front-end par la suite.
            </p>
            <div className="scroll-indication"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
