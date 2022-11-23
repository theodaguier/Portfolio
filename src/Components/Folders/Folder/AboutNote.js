import React from 'react';
import '../index.css';

function AboutNote({ noteWindows, setNoteWindows }) {
  const toggle = () => {
    setNoteWindows(noteWindows);
  };

  const abouts = [{ id: 3, name: 'À propos', img: './Icons/notes.png' }];

  return (
    <div className="folder">
      {abouts.map((about, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => setNoteWindows(!noteWindows)}
        >
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
