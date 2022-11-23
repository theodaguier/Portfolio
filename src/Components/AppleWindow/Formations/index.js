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
    <div>
      <p className="cat-title ios">Formations</p>
      <div className="skill-cat">
        {formations.map((formation, index) => (
          <div className="skill" key={index}>
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
  );
}

export default FormationWindow;
