import React, { useState } from 'react';
import '../index.css';
import SideBar from '../SideBar';

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

function CompetencesWindow({ CompetencesIsActive, CompetencesSetActive }) {
  return (
    <div>
      <p className="cat-title ios">Developpement ios</p>
      <div className="skill-cat">
        {devIos.map((ios, index) => (
          <div className="skill" key={index}>
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
  );
}

export default CompetencesWindow;
