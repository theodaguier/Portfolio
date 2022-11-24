import React from 'react';
import '../index.css';

function FormationFolder({ setToggleTabs, dockActive, setDockActive }) {
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  const formations = [{ id: 1, name: 'Formations', img: './Icons/folder.png' }];

  return (
    <div className="folder" onClick={() => setDockActive(dockActive === false)}>
      {formations.map((folder, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => toggleTab(2)}
        >
          <div className="folder-icon">
            <img className="i-folder" src={folder.img} alt="folder" />
          </div>
          <div className="folder-name">{folder.name}</div>
        </div>
      ))}
    </div>
  );
}

export default FormationFolder;
