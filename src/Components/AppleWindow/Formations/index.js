import React from "react";
import "../index.css";

import BackButton from "../BackButton";

const formations = [
  {
    id: 1,
    name: "O'Clock - Alternance, 16 mois",
    img: "./icons/oclock.png",
    date: "Début décembre 2022",
    desc: "Rythme d'alternance : 1 semaine à l’école, 2 semaines en entreprise.",
    url: "https://oclock.io/formations/alternance",
  },
  {
    id: 2,
    name: "Apple Foundation Program",
    img: "./icons/apple.png",
    date: "Octobre / Novembre 2022",
    desc: "Développer une application iOS, développer des compétences transversales qui renforcent l’employabilité",
    url: "https://simplon.co/formation/foundation/24",
  },
];

const certifications = [
  {
    id: 1,
    name: "FreeCodeCamp",
    img: "./icons/fcc.jpeg",
    desc: "Responsive Web Design",
    date: "Juin 2022",
    url: "https://www.freecodecamp.org/certification/TDgr/responsive-web-design",
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
        <div className="skill-cat cat-ios">
          {formations.map((formation, index) => (
            <div className="skill skill-ios" key={index}>
              <a href={formation.url} target="_blank">
                <div className="skill-content w forma">
                  <div className="icon-content">
                    <img src={formation.img} alt="icon" />
                  </div>
                  <p className="skill-name name-ios">
                    {formation.name}
                    <p className="skill-desc desc-ios">{formation.date}</p>
                    <p className="skill-desc desc-ios">{formation.desc}</p>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <p className="cat-title ios certif">Certification</p>
        <div className="skill-cat cat-ios">
          {certifications.map((certif, index) => (
            <div className="skill skill-ios" key={index}>
              <a href={certif.url} target="_blank">
                <div className="skill-content w forma">
                  <div className="icon-content">
                    <img src={certif.img} alt="icon" />
                  </div>
                  <p className="skill-name name-ios">
                    {certif.name}
                    <p className="skill-desc desc-ios">{certif.date}</p>
                    <p className="skill-desc desc-ios">{certif.desc}</p>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormationWindow;
