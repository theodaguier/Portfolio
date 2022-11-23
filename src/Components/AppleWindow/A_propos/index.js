import React, { useState } from 'react';
import '../index.css';

import Draggable from 'react-draggable';

import List from './Icon/list.png';
import Square from './Icon/square.png';
import Trash from './Icon/trash.png';
import FolderIcon from './Icon/folder-icon.png';

const icons = [
  { id: 1, icon: './icons/edit.png' },
  { id: 2, icon: './icons/textformat.png' },
  { id: 3, icon: './icons/checkmark.png' },
  { id: 4, icon: './icons/tablecells.png' },
  { id: 5, icon: './icons/lock.png' },
  { id: 6, icon: './icons/photo.png' },
  { id: 7, icon: './icons/person.png' },
  { id: 8, icon: './icons/share.png' },
  { id: 9, icon: './icons/chevrons.png' },
  { id: 10, icon: './icons/search.png' },
];

function AboutWindow({ noteWindows, setNoteWindows }) {
  const [text, setText] = useState(false);

  return (
    <Draggable>
      <div className="apple-window-container">
        <div className="sidebar">
          <div className="traffic-lights">
            <div className="red" onClick={() => setNoteWindows(false)}></div>
            <div className="orange"></div>
            <div className="green"></div>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-title">
              <div className="sidebar-project">
                <div className="project-name">
                  <img
                    className="menubar"
                    src={FolderIcon}
                    alt="menubar-icon"
                  />
                  <p className="project-title note">Géneral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="window-frame notes">
          <div className="notes-container">
            <div className="col-left">
              <div className="tab">
                <ul className="icons">
                  <div className="left">
                    <li className="icon-notes list">
                      <img src={List} alt="icon" />
                    </li>
                    <li className="icon-notes square">
                      <img src={Square} alt="icon" />
                    </li>
                  </div>
                  <div className="right">
                    <li className="icon-notes trash">
                      <img src={Trash} alt="icon" />
                    </li>
                  </div>
                </ul>
              </div>
              <div className="notes-list">
                <div
                  className={`notes ${text === false ? 'active' : 'noactive'}`}
                  onClick={() => setText(!text)}
                >
                  <p className="text-title">A propos de moi</p>
                  <p className="resume">
                    <span className="hour">12:40</span> Presentation...
                  </p>
                </div>
                <div
                  className={`notes ${text === true ? 'active' : 'noactive'}`}
                  onClick={() => setText(!text)}
                >
                  <p className="text-title">Formation</p>
                  <p className="resume">
                    <span className="hour">12:44</span> Presentation...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-right">
              <div className="tab">
                <ul className="icons">
                  {icons.map((icon, index) => (
                    <li className="icon-notes" key={index}>
                      <img src={icon.icon} alt="icon" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-area">
                <p className="date-note"> 22 Novembre à 12:40</p>
                <div className="text" contentEditable="true">
                  {text === false ? (
                    <p className="text">
                      Salut ! Je m'appelle Théo. Passionné et curieux par le
                      monde du web et de l'informatique depuis mon plus jeune
                      âge, j'ai commencé mon apprentissage du développement web
                      en tant qu’autodidacte. Après avoir vécu 2 années à
                      Barcelone, je suis de retour à Paris pour la recherche
                      d’une alternance au sein de l'école O'Clock, dans le but
                      d'acquérir de l'expérience professionnelle et pouvoir
                      vivre un jour de ma passion. Sinon à part le développement
                      web, je suis aussi un passionné de musique, je fais de la
                      production musicale, si vous avez un projet musical ou si
                      vous voulez parler de musique, n'hésitez pas.
                    </p>
                  ) : (
                    <p className="text">
                      <span className="underline">
                        Apple Foundation Program  Octobre - Novembre 2022
                      </span>{' '}
                      <br />
                      - Concevoir une application mobile à partir d'une
                      problématique
                      <br />
                      - Développer une application mobile iOS
                      <br />- Développer des compétences transversales qui
                      renforcent l’employabilité
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default AboutWindow;
