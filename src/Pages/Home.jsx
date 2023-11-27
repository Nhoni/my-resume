import About from "../Components/About";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React, { useState, useEffect } from 'react';


function TypeEffect({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer); 
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

function Home() {
  const [afficherAccueil, setAfficherAccueil] = useState(true);
  const headerText = "MBEMBA Nhora ";
  const bodyText = "  Conceptrice Développeuse d'Application Junior";
  const speed = 90;

  const toggleSection = () => {
    setAfficherAccueil(!afficherAccueil);
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        {afficherAccueil ? (
          <div className="content-acc" id="accueil">
            <div className="acceuil-section">
              <div className="accueil-content">
                <div id="table">
                  <h1>
                    <TypeEffect text={headerText} speed={speed} />
                  </h1>
                  <div id="center-align">
                    <TypeEffect  text={bodyText} speed={speed} />
                    <span className="typed-cursor"></span>
                  </div>
                  <button onClick={toggleSection} className="roll-button">
                    Qui suis-je ?
                  </button>
                </div>
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
  );
}

export default Home;
