import React from 'react';
import '../index.css';

function TwitterIcon({ setToggleTabs }) {
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  const twitter = [{ id: 6, name: 'Twitter', img: './Icons/twitter.png' }];

  return (
    <div className="folder">
      {twitter.map((twi, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => toggleTab(6)}
        >
          <div className="folder-icon">
            <img className="i-folder" src={twi.img} alt="folder" />
          </div>
          <div className="folder-name">{twi.name}</div>
        </div>
      ))}
    </div>
  );
}

export default TwitterIcon;
