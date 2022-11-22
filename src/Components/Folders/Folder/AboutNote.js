import React from 'react';
import '../index.css';

function AboutNote({ NoteIsActive, NoteSetActive }) {
  const toggle = () => {
    NoteSetActive(!NoteIsActive);
  };

  const abouts = [{ id: 3, name: 'À propos', img: './Icons/notes.png' }];

  return (
    <div className="folder">
      {abouts.map((about) => (
        <div className="folder-content" key={about.id} onClick={toggle}>
          <div className="folder-icon">
            <img className="i-folder" src={about.img} alt="folder" />
          </div>
          <div className="folder-name">{about.name}</div>
        </div>
      ))}
    </div>
  );
}

export default AboutNote;
