import React, { useState } from 'react';
import FormationsWindow from '../../AppleWindow/Formations/index';
import '../index.css';

const folder = [{ id: 2, name: 'Formations', img: './Icons/folder.png' }];

function Formations() {
  const [toggle, setToggle] = useState();

  const showWindow = () => {
    setToggle(!toggle);
  };

  return (
    <div className="folder" onClick={showWindow}>
      {folder.map((formationFolder) => (
        <div className="folder-content">
          <div className="folder-icon">
            <img className="i-folder" src={formationFolder.img} alt="folder" />
          </div>
          <div className="folder-name">{formationFolder.name}</div>
        </div>
      ))}
      {toggle && <FormationsWindow />}
    </div>
  );
}

export default Formations;
