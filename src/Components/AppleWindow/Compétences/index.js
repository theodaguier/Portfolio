import React, { useState } from 'react';
import '../index.css';
import Hammer from './Icon/hammer.png';

const devIos = [
  {
    id: 1,
    name: 'Swift',
    img: './icons/swift.png',
  },
  {
    id: 2,
    name: 'Swift UI',
    img: './icons/swiftUI.png',
    category: 'Développement iOS',
  },
];

const devWeb = [
  {
    id: 1,
    name: 'React JS',
    img: './icons/react.png',
    category: 'Devéloppement Web',
  },
  {
    id: 2,
    name: 'JavaScript',
    img: './icons/js.png',
    category: 'Devéloppement Web',
  },
  {
    id: 3,
    name: 'CSS',
    img: './icons/css.png',
    category: 'Devéloppement Web',
  },
  {
    id: 4,
    name: 'SASS',
    img: './icons/sass.png',
    category: 'Devéloppement Web',
  },
  {
    id: 5,
    name: 'Bootstrap',
    img: './icons/bootstrap.png',
    category: 'Devéloppement Web',
  },
  {
    id: 6,
    name: 'GSAP',
    img: './icons/gsap.png',
    category: 'Devéloppement Web',
  },
];

const versioning = [
  {
    id: 1,
    name: 'Git / Github',
    img: './icons/github.png',
    category: 'Versioning',
  },
];

const software = [
  {
    id: 1,
    name: 'Figma',
    img: './icons/figma.png',
    category: 'Software',
  },
];

function CompetencesWindow({ skills, isActive, setActive }) {
  const toggleClass = () => {
    setActive(!isActive);
  };
  function SkillRow({ skill }) {
    return (
      <div className="col">
        <div>
          <img classname="icon" src={skill.img} alt="icon" />
        </div>
        <div>
          <p className="skill-name">{skill.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`apple-window-container`}>
      <div className="sidebar">
        <div className="traffic-lights">
          <div className="red" onClick={toggleClass}></div>
          <div className="orange"></div>
          <div className="green"></div>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-title">
            <div className="sidebar-project">
              <div className="project-name">
                <img className="menubar" src={Hammer} alt="menubar-icon" />
                <p className="project-title">Compétences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="window-frame">
        <p className="cat-title ios">Developpement ios</p>
        <div className="skill-cat">
          {devIos.map((ios) => (
            <div className="skill" id={ios.id}>
              <div className="skill-content">
                <div className="icon-content">
                  <img src={ios.img} alt="icon" />
                </div>
                <p className="skill-name">{ios.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cat-title web">Developpement Web</p>
        <div className="skill-cat">
          {devWeb.map((web) => (
            <div className="skill" id={web.id}>
              <div className="skill-content w">
                <div className="icon-content">
                  <img src={web.img} alt="icon" />
                </div>
                <p className="skill-name">{web.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cat-title vers">Versioning</p>
        <div className="skill-cat">
          {versioning.map((vers) => (
            <div className="skill" id={vers.id}>
              <div className="skill-content">
                <div className="icon-content">
                  <img src={vers.img} alt="icon" />
                </div>
                <p className="skill-name">{vers.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cat-title soft">Software</p>
        <div className="skill-cat">
          {software.map((soft) => (
            <div className="skill" id={soft.id}>
              <div className="skill-content">
                <div className="icon-content">
                  <img src={soft.img} alt="icon" />
                </div>
                <p className="skill-name">{soft.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompetencesWindow;
