import React from 'react';
import './index.css';
import MenuBar from './assets/icon/Icon.svg';

function AppleWindow(props, isActive) {
  const { id, name, isActive } = props;

  const projectData = [
    {
      id: 1,
      name: 'Crypto Tracker',
      description:
        'Application pour suivre la progression des cryptomonnaies actualisée en temps réel.',
      img: '/img/crypto.png',
      tag: '#React JS, #API',
      githubLink: 'https://theodaguier.github.io/crypto-tracker/',
      view: '...',
    },
    {
      id: 2,
      name: 'Elements',
      description: 'Tableau périodique des éléments.',
      githubLink: '...',
      view: '...',
      tag: '#React JS, #API',
    },
    {
      id: 3,
      name: 'Note App',
      description: 'Application de prise de note rapide.',
      githubLink: '...',
      view: '...',
      tag: '#React JS',
    },
  ];

  return (
    <div className>
      <div className="sidebar" value={id}>
        <div className="traffic-lights">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="green"></div>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-title">
            {name}
            <div className="sidebar-project">
              {projectData.map((name, index) => {
                return (
                  <div key={index} className="project-name">
                    <img className="menubar" src={MenuBar} alt="menubar-icon" />
                    <p className="project-title">{name.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="window-frame"></div>
    </div>
  );
}

export default AppleWindow;
