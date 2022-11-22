import React from 'react';
import '../index.css';

function FormationFoler({ FormationsIsActive, FormationsSetActive }) {
  const toggleClass = () => {
    FormationsSetActive(!FormationsIsActive);
  };

  const formations = [{ id: 1, name: 'Formations', img: './Icons/folder.png' }];

  return (
    <div className="folder">
      {formations.map((folder) => (
        <div className="folder-content" key={folder.id} onClick={toggleClass}>
          <div className="folder-icon">
            <img className="i-folder" src={folder.img} alt="folder" />
          </div>
          <div className="folder-name">{folder.name}</div>
        </div>
      ))}
    </div>
  );
}

export default FormationFoler;
