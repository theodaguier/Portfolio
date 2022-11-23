import React from 'react';

import Hammer from './Icon/hammer.png';
import Star from './Icon/star.png';
import Book from './Icon/book.png';

export default function SideBar({ toggleTabs, setToggleTabs }) {
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="sidebar">
      <div className="traffic-lights">
        <div className="red" onClick={() => toggleTab(0)}></div>
        <div className="orange"></div>
        <div className="green"></div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <div className="sidebar-project">
            <div
              className={`project-name ${toggleTabs === 1 && 'active'}`}
              onClick={() => toggleTab(1)}
            >
              <img className="menubar" src={Star} alt="menubar-icon" />
              <p className="project-title">Compétences</p>
            </div>
            <div
              className={`project-name ${toggleTabs === 2 && 'active'}`}
              onClick={() => toggleTab(2)}
            >
              <img className="menubar" src={Book} alt="menubar-icon" />
              <p className="project-title">Formations</p>
            </div>
            <div
              className={`project-name ${toggleTabs === 4 && 'active'}`}
              onClick={() => toggleTab(4)}
            >
              <img className="menubar" src={Hammer} alt="menubar-icon" />
              <p className="project-title">Projets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
