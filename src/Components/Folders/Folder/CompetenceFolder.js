import React from 'react';
import '../index.css';

function CompetenceFolder({ setToggleTabs }) {
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  const competences = [
    { id: 1, name: 'Compétences', img: './Icons/folder.png' },
  ];

  return (
    <div className="folder">
      {competences.map((folder, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => toggleTab(1)}
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

export default CompetenceFolder;
