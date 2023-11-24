import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src="media/logo_p.jpg"
            alt="Logo portfolio" style={{ height: '50px' }} />
          </Link>
        </div>
        <div className="menu-toggle" id="menu-toggle" onClick={handleToggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={handleToggleMenu}>Home</Link></li>
          <li><Link to="/competences" onClick={handleToggleMenu}>Compétences</Link></li>
          <li><Link to="/portfolio" onClick={handleToggleMenu}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={handleToggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
