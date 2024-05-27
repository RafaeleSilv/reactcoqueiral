import React, { useState } from 'react';
import './Navbar.css';
import logo from '../imgs/icones/logo.png';
import ajuda from '../imgs/icones/ajudaazul 1.png';
import perfil from '../imgs/icones/Group 159.png';
import notificacao from '../imgs/icones/Group 173.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo coqueiral" className="logo" />
      <div className="nav-icon-container">
        <img src={ajuda} alt="ajuda" className="ajuda" />
        <img src={perfil} alt="perfil" className="perfil" />
        <img src={notificacao} alt="notificação" className="notificacao" />
      <button id="menuBtn" className="menu-button" onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
      </button></div>
      
      <div className={`header-inner-content ${menuOpen ? 'show-menu' : ''}`}>
        <nav>
          <ul>
            <li>INÍCIO</li> 
            <li> - </li>
            <li>SOBRE</li> 
            <li> - </li>
            <li>ÉTICA</li> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
