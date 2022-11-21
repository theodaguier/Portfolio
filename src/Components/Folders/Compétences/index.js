import React, { useState } from 'react';
import CompetencesWindow from '../../AppleWindow/Compétences';
import '../index.css';

const folder = [{ id: 2, name: 'Compétences', img: './Icons/folder.png' }];

function Competences() {
  return (
    <div className="folder">
      {folder.map((formationFolder) => (
        <div className="folder-content">
          <div className="folder-icon">
            <img className="i-folder" src={formationFolder.img} alt="folder" />
          </div>
          <div className="folder-name">{formationFolder.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Competences;
