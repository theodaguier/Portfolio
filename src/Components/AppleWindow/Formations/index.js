import React, { useState } from 'react';
import '../index.css';
import Book from './Icon/book.png';

const formations = [
  {
    id: 1,
    name: 'Apple Foundation Program',
    description: 'Concevoir',
    img: './icons/apple.png',
  },
];

function FormationWindow({ FormationsIsActive, FormationsSetActive }) {
  const toggleClass = () => {
    FormationsSetActive(!FormationsIsActive);
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
                <img className="menubar" src={Book} alt="menubar-icon" />
                <p className="project-title">Formations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="window-frame">
        <p className="cat-title ios">Formations</p>
        <div className="skill-cat">
          {formations.map((formation) => (
            <div className="skill" id={formation.id}>
              <div className="skill-content w">
                <div className="icon-content">
                  <img src={formation.img} alt="icon" />
                </div>
                <p className="skill-name">{formation.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormationWindow;
