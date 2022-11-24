import React from 'react';
import '../index.css';

import Banner from './img/banner.png';
import BackButton from '../BackButton';

const works = [
  {
    id: 1,
    name: 'Crypto Tracker',
    description: 'Suivi de la progression des cryptomonnaies.',
    img: './icons/crypto.png',
    color: '#5856d6;',
    tag: '#Web #React JS #API',
    url: 'https://theodaguier.github.io/crypto-tracker/',
  },
  {
    id: 2,
    name: 'Notes.',
    description: 'Prise de note rapide.',
    img: './icons/notes.png',
    color: '#b3d7ff',
    tag: '#Web #React JS',
    url: 'https://notes-application-dt.netlify.app',
  },
  {
    id: 3,
    name: 'Drum Kit',
    description: 'Simple drum kit.',
    img: './icons/garageband.png',
    color: '#ff9f0a',
    tag: '#Web #Javascript',
    url: 'https://joyful-halva-2c6ff3.netlify.app',
  },
  {
    id: 4,
    name: 'Slide App',
    description: 'Application découverte de musique basé sur le swipe.',
    img: './icons/music.svg',
    color: ' #98989d',
    tag: '#Swift #SwiftUI',
    url: 'https://joyful-halva-2c6ff3.netlify.app',
  },
];

function WorkWindow({ matches, dockActive, setDockActive, setToggleTabs }) {
  return (
    <div>
      {matches ? (
        <div className="col-right">
          <div className="header">
            <div className="c-left">
              <p className="upper-text">Projets</p>
              <p className="desc">
                Découvrez tous les projets majeurs réalisés
              </p>
              <a
                href="https://github.com/theodaguier?tab=repositories"
                target="_blank"
              >
                <p className="tag underline">Repositories</p>
              </a>
            </div>
            <div className="c-right">
              <img className="bg-banner" src={Banner} alt="banner-apps" />
            </div>
          </div>
          <div className="work-container">
            <div className="work-card">
              {works.map((work, index) => (
                <div className="card" key={index}>
                  <div className="card-text">
                    <p className="upper-text">{work.name}</p>
                    <p className="desc">{work.description}</p>
                    <p className="tag">{work.tag}</p>
                  </div>
                  <div className="card-image">
                    <a href={work.url} target="_blank">
                      <div
                        className="circle"
                        style={{
                          backgroundColor: work.color,
                        }}
                      >
                        <img className="card-item" src={work.img} alt="icon" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="work-container">
          <BackButton
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <div className="col-right">
            <div className="header">
              <div className="c-left">
                <p className="upper-text">Projets</p>
                <p className="desc">
                  Découvrez tous les projets majeurs réalisés
                </p>
                <a
                  href="https://github.com/theodaguier?tab=repositories"
                  target="_blank"
                >
                  <p className="tag underline">Repositories</p>
                </a>
              </div>
              <div className="c-right">
                <img className="bg-banner" src={Banner} alt="banner-apps" />
              </div>
            </div>
            <div className="work-container">
              <div className="work-card">
                {works.map((work, index) => (
                  <div className="card" key={index}>
                    <div className="card-text">
                      <p className="upper-text">{work.name}</p>
                      <p className="desc">{work.description}</p>
                      <p className="tag">{work.tag}</p>
                    </div>
                    <div className="card-image">
                      <a href={work.url} target="_blank">
                        <div
                          className="circle"
                          style={{
                            backgroundColor: work.color,
                          }}
                        >
                          <img
                            className="card-item"
                            src={work.img}
                            alt="icon"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkWindow;
