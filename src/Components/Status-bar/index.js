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
                  <a href="">GitHub</a>
                </li>
                <li className="apple-menu-link">
                  <a href="">Linkedin</a>
                </li>
                <li className="apple-menu-link">
                  <a href="">Twitter</a>
                </li>
                <li className="apple-menu-link">
                  <a href="">Mail</a>
                </li>
                <li className="apple-menu-link">
                  <a href="">Phone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-page">
            <ul className="page-link-container">
              <li className="page-link">
                <a href="">Home</a>
              </li>
              <li className="page-link">
                <a href="">Work</a>
              </li>
              <li className="page-link">
                <a href="">About</a>
              </li>
              <li className="page-link">
                <a href="">Contact</a>
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
