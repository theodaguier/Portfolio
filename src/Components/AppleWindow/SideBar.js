import React from 'react';
import Hammer from './Icon/hammer.png';

export default function SideBar({
  CompetencesIsActive,
  CompetencesSetActive,
  setToggleTabs,
  toggleTabs,
}) {
  const toggle = () => {
    CompetencesSetActive(!CompetencesIsActive);
  };

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="sidebar">
      <div className="traffic-lights">
        <div className="red" onClick={toggle}></div>
        <div className="orange"></div>
        <div className="green"></div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <div className="sidebar-project">
            <div className="project-name" onClick={() => toggleTab(1)}>
              <img className="menubar" src={Hammer} alt="menubar-icon" />
              <p className="project-title">Compétences</p>
            </div>
            <div className="project-name" onClick={() => toggleTab(2)}>
              <img className="menubar" src={Hammer} alt="menubar-icon" />
              <p className="project-title">Caca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
