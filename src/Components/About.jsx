import React from 'react'

function About() {
    return (
        <>
         <div className="content_apropos" id="a-propos">
          <h2>A propos de moi</h2>
          <div className="apropos-section">
            <div className="photos-p">
              <img src="public\media\ma_photos.jpg" alt="Mbemba Nhora" style={{ height: '300px' }} />
            </div>
            <p>
              J’ai suivi la formation développeur d'applications multimédias au sein du centre de formation{' '}
              <a style={{ color: '#f3900ec7' }} href="https://alt-rh.com/alt-rh-propose-diverses-formations/developpeur-dapplications-multimedia/" target="_blank" rel="noopener">
                Alt-Rh
              </a>
              . <br /> Suite à cette formation, j’ai eu envie d'en découvrir plus..<br /> <br />
              C'est pourquoi j'ai commencé cette année la formation de concepteur développeur d'applications chez{' '}
              <a style={{ color: '#f3900ec7' }} href="https://www.prepavenir-formation.fr/cda-concepteur-dapplication-conventionnee/" target="_blank" rel="noopener">
                Prepavenir-formation
              </a>
              .<br /> <br />J'aimerais me spécialiser dans le développement front-end par la suite.
            </p>
          </div>
        </div>
        </>
    )
}
export default About 