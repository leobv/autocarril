import React, {useContext} from 'react';
import './NavBarStyle.css';
// Importa el logo de Auto Carril de la carpeta de images
import logo from '../../images/logo.png';
import DarkModeContext from "../../context/DarkModeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
  
    return (
      <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
        <div className="navbar-container">
          <img src={logo} alt="Auto Carril" />
          <a href="https://www.instagram.com/autocarril/?hl=es" className="social-link">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <br/>
      <a href='https://api.whatsapp.com/send?phone=541139359902' className="social-link">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
          <div className="dark-mode">
            <button className='button' onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? 'Modo claro' : 'Modo oscuro'}
            </button>
          </div>
        </div>
      </nav>
    );
  }
export default Navbar;