import React, { useEffect, useState } from 'react';
import '../index.css';

const folders = [
  { id: 1, name: 'projects', img: './icons/folder.png' },
  { id: 2, name: 'formations', img: './icons/folder.png' },
  { id: 3, name: 'à propos', img: './icons/folder.png' },
];

console.log(folders.id);

function A_propos() {
  const [toggle, setToggle] = useState();

  const showWindow = () => {
    setToggle(!toggle);
  };

  return (
    <div className="folder-container">
      {/* {folders.map((folder) => (
        <div className="folder" onClick={showWindow}>
          <div className="folder-content">
            <div className="folder-icon">
              <img className="i-folder" src={folder.img} alt="folder" />
            </div>
            <div className="folder-name">{folder.name}</div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default A_propos;
