import React from 'react';
import '../index.css';

const formations = [
  {
    id: 1,
    name: 'Apple Foundation Program',
    description: 'Concevoir',
    img: './icons/apple.png',
  },
];

function FormationWindow() {
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
