import About from "../Components/About";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React, { useState } from 'react';

function Home() {
    const [afficherAccueil, setAfficherAccueil] = useState(true);
    const basculerSection = () => {
    setAfficherAccueil(!afficherAccueil)};

    return (
     
    <>
      <header>
          <Nav />
      </header>

      <main>
              {afficherAccueil ? (
                <div className="content_acc" id="accueil">
                  <div className="acceuil-section">
                    <div className="accueil-content">
                      <h1>MBEMBA Nhora</h1>
                      <p className="text_accueil"> Conceptrice Développeuse d'Applications junior</p>
                      <button onClick={basculerSection} className="roll-button">
                        Qui suis-je ?
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <About />
              )}
      </main>
      
      <footer>
          <Footer />
      </footer>
    </>
    
  )
}

export default Home
