import React from 'react';
import '../index.css';

import BackButton from '../BackButton';

const formations = [
  {
    id: 1,
    name: 'Apple Foundation Program',
    description: 'Concevoir',
    img: './icons/apple.png',
  },
];

function FormationWindow({ setToggleTabs, dockActive, setDockActive }) {
  return (
    <>
      <BackButton
        dockActive={dockActive}
        setDockActive={setDockActive}
        setToggleTabs={setToggleTabs}
      />
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
    </>
  );
}

export default FormationWindow;
