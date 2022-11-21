import './App.css';
import React, { useState } from 'react';
import Statusbar from './Components/Status-bar';
import Background from './assets/img/mac-os-background.jpg';
import Dock from './Components/Dock';
import Folders from './Components/Folders';
import CompetencesWindow from './Components/AppleWindow/Compétences';

var backgroundImage = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '0',
};

function App() {
  const [isActive, setActive] = useState(true);

  function toggleClass() {
    setActive(!isActive);
  }

  return (
    <div className="App">
      <Statusbar />
      <div className="container" style={backgroundImage}>
        <Folders
          isActive={isActive}
          setActive={setActive}
          onClick={() => toggleClass()}
        />
        {!isActive && (
          <CompetencesWindow isActive={isActive} setActive={setActive} />
        )}
      </div>
      <Dock />
    </div>
  );
}

export default App;
