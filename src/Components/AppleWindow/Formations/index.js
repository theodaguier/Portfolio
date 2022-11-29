import React from "react";
import "../index.css";

import BackButton from "../BackButton";

const formations = [
  {
    id: 1,
    name: "Apple Foundation Program",
    description: "Concevoir",
    img: "./icons/apple.png",
    desc: "Développer une application iOS, développer des compétences transversales qui renforcent l’employabilité",
  },
];

function FormationWindow({
  setToggleTabs,
  dockActive,
  setDockActive,
  matches,
}) {
  return (
    <>
      {!matches ? (
        <BackButton
          dockActive={dockActive}
          setDockActive={setDockActive}
          setToggleTabs={setToggleTabs}
        />
      ) : null}
      <div>
        <p className="cat-title ios">Formations</p>
        <div className="skill-cat">
          {formations.map((formation, index) => (
            <div className="skill" key={index}>
              <div className="skill-content w forma">
                <div className="icon-content">
                  <img src={formation.img} alt="icon" />
                </div>
                <p className="skill-name">
                  {formation.name}
                  <p className="skill-desc">{formation.desc}</p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormationWindow;
