import React from 'react';

import Chevron from './Icon/chevron-left.png';

function BackButtonNotes({ setNoteWindows, dockActive, setDockActive }) {
  const toggleTab = () => {
    setNoteWindows(false);
  };
  return (
    <div
      className="nav-bar-container"
      onClick={() => setDockActive(dockActive === false)}
    >
      <div className="back" onClick={toggleTab}>
        <img src={Chevron} alt="" />
        <p className="nav-bar-txt">Retour</p>
      </div>
    </div>
  );
}

export default BackButtonNotes;
