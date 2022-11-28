import React, { useState } from 'react';
import './index.css';
import DateTime from './DateTime';

import { DiApple } from 'react-icons/di';
import Battery from './icons/battery.png';
import Cellularbars from './icons/cellularbars.png';
import Wifi from './icons/wifi.png';

export default function Statusbar({ matches, setMatches }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="status-bar">
      {matches ? (
        <nav>
          <div className="apple">
            <DiApple onClick={handleToggle} />
            <div className={`apple-menu ${navbarOpen ? ' showMenu' : ''}`}>
              <ul>
                <li className="apple-menu-link">
                  <a href="https://github.com/theodaguier" target="_blank">
                    GitHub
                  </a>
                </li>
                <li className="apple-menu-link">
                  <a
                    href="https://www.linkedin.com/in/theo-daguier/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="apple-menu-link">
                  <a href="https://twitter.com/theodaguier" target="_blank">
                    Twitter
                  </a>
                </li>
                <li className="apple-menu-link">
                  <a href="sms://+330656678583" target="_blank">
                    SMS
                  </a>
                </li>
                <li className="apple-menu-link">
                  <a href="mailto:theo.daguier@icloud.com" target="_blank">
                    Mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-page">
            <ul className="page-link-container">
              <li className="page-link">
                <p>Fichier</p>
              </li>
              <li className="page-link">
                <p>Édition</p>
              </li>
              <li className="page-link">
                <p>Présentation</p>
              </li>
              <li className="page-link">
                <p>Aller</p>
              </li>
              <li className="page-link">
                <p>Fenêtre</p>
              </li>
              <li className="page-link">
                <p>Aide</p>
              </li>
            </ul>
          </div>
          <div className="time">
            <DateTime></DateTime>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="time">
            <DateTime></DateTime>
          </div>
          <div className="icon-info">
            <img src={Cellularbars} alt="battery-icon" />
            <img src={Wifi} alt="battery-icon" />
            <img src={Battery} alt="battery-icon" />
          </div>
        </nav>
      )}
    </div>
  );
}
