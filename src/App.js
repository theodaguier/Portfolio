import './App.css';
import React, { useState } from 'react';
import Statusbar from './Components/Status-bar';
import Background from './assets/img/mac-os-background.jpg';
import Dock from './Components/Dock';
import Folders from './Components/Folders';
import CompetencesWindow from './Components/AppleWindow/Compétences';
import FormationWindow from './Components/AppleWindow/Formations';
import AboutWindow from './Components/AppleWindow/A_propos';

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
  const [CompetencesIsActive, CompetencesSetActive] = useState(true);
  const [FormationsIsActive, FormationsSetActive] = useState(true);
  const [NoteIsActive, NoteSetActive] = useState(true);

  return (
    <div className="App">
      <Statusbar />
      <div className="container" style={backgroundImage}>
        <Folders
          CompetencesIsActive={CompetencesIsActive}
          CompetencesSetActive={CompetencesSetActive}
          FormationsIsActive={FormationsIsActive}
          FormationsSetActive={FormationsSetActive}
          NoteIsActive={NoteIsActive}
          NoteSetActive={NoteSetActive}
        />
        {!CompetencesIsActive && (
          <CompetencesWindow
            CompetencesIsActive={CompetencesIsActive}
            CompetencesSetActive={CompetencesSetActive}
          />
        )}
        {!FormationsIsActive && (
          <FormationWindow
            FormationsIsActive={FormationsIsActive}
            FormationsSetActive={FormationsSetActive}
          />
        )}
        {!NoteIsActive && (
          <AboutWindow
            NoteIsActive={NoteIsActive}
            NoteSetActive={NoteSetActive}
          />
        )}
      </div>
      <Dock />
    </div>
  );
}

export default App;
