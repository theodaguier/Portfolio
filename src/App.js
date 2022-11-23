import './App.css';
import React, { useState, useEffect } from 'react';
import Statusbar from './Components/Status-bar';
import Background from './assets/img/mac-os-background.jpg';
import Dock from './Components/Dock';
import Folders from './Components/Folders';
import AppleWindow from './Components/AppleWindow';
import AboutWindow from './Components/AppleWindow/A_propos';
import ContactPage from './Components/AppleWindow/Contact';

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
  // States

  const [NoteIsActive, NoteSetActive] = useState(true);
  const [toggleTabs, setToggleTabs] = useState(0);
  const [noteWindows, setNoteWindows] = useState(false);
  const [contactWindow, setContactWindow] = useState(false);

  // Responsive

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="App">
      {matches ? (
        <div className="container" style={backgroundImage}>
          <Statusbar />
          <Folders
            NoteIsActive={NoteIsActive}
            NoteSetActive={NoteSetActive}
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            noteWindows={noteWindows}
            setNoteWindows={setNoteWindows}
            contactWindow={contactWindow}
            setContactWindow={setContactWindow}
          />
          {contactWindow === true && (
            <ContactPage
              contactWindow={contactWindow}
              setContactWindow={setContactWindow}
            />
          )}

          {toggleTabs === 0 ? null : (
            <AppleWindow
              toggleTabs={toggleTabs}
              setToggleTabs={setToggleTabs}
            />
          )}

          {noteWindows === false ? null : (
            <AboutWindow
              noteWindows={noteWindows}
              setNoteWindows={setNoteWindows}
            />
          )}

          <Dock />
        </div>
      ) : null}
    </div>
  );
}

export default App;
