import React from 'react';
import '../index.css';

function WorkFolder({ setToggleTabs, dockActive, setDockActive }) {
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  const works = [{ id: 1, name: 'Mon travail', img: './Icons/appstore.png' }];

  return (
    <div className="folder" onClick={() => setDockActive(dockActive === false)}>
      {works.map((work, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => toggleTab(4)}
        >
          <div className="folder-icon">
            <img className="i-folder" src={work.img} alt="folder" />
          </div>
          <div className="folder-name">{work.name}</div>
        </div>
      ))}
    </div>
  );
}

export default WorkFolder;
