import React from 'react';
import './index.css';

import Formations from './Formations';
import Competences from './Compétences';

// const folders = [
//   { id: 1, name: 'projects', img: './icons/folder.png' },
//   { id: 2, name: 'formations', img: './icons/folder.png' },
//   { id: 3, name: 'à propos', img: './icons/folder.png' },
// ];

function Folders({ setActive, isActive }) {
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="folder-container" onClick={toggleClass}>
      <Formations />
      <Competences />
    </div>
  );
}

export default Folders;
