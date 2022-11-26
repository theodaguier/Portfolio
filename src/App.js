import './App.css';
import React, { useState, useEffect } from 'react';

import './safariFix';
import './safariFix.css';

import Statusbar from './Components/Status-bar';
import Background from './assets/img/mac-os-background.jpg';
import BackgroundMobile from './assets/img/ios-bg.webp';
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

var backgroundMobile = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${BackgroundMobile})`,
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
  const [dockActive, setDockActive] = useState(true);

  // Responsive

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 800px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 800px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="App">
      {matches ? (
        <div className="container" style={backgroundImage}>
          <Statusbar matches={matches} setMatches={setMatches} />
          <Folders
            matches={matches}
            setMatches={setMatches}
            NoteIsActive={NoteIsActive}
            NoteSetActive={NoteSetActive}
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            noteWindows={noteWindows}
            setNoteWindows={setNoteWindows}
            contactWindow={contactWindow}
            setContactWindow={setContactWindow}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          {contactWindow === true && (
            <ContactPage
              contactWindow={contactWindow}
              setContactWindow={setContactWindow}
              matches={matches}
              setMatches={setMatches}
              dockActive={dockActive}
              setDockActive={setDockActive}
              setToggleTabs={setToggleTabs}
            />
          )}

          {toggleTabs === 0 ? null : (
            <AppleWindow
              toggleTabs={toggleTabs}
              setToggleTabs={setToggleTabs}
              matches={matches}
              setMatches={setMatches}
            />
          )}

          {noteWindows === false ? null : (
            <AboutWindow
              noteWindows={noteWindows}
              setNoteWindows={setNoteWindows}
              matches={matches}
              dockActive={dockActive}
              setDockActive={setDockActive}
            />
          )}

          <Dock />
        </div>
      ) : (
        <div className="mobile-container" style={backgroundMobile}>
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
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          {contactWindow === true && (
            <ContactPage
              contactWindow={contactWindow}
              setContactWindow={setContactWindow}
              matches={matches}
              setMatches={setMatches}
              dockActive={dockActive}
              setDockActive={setDockActive}
              toggleTabs={toggleTabs}
              setToggleTabs={setToggleTabs}
            />
          )}

          {toggleTabs === 0 ? null : (
            <AppleWindow
              toggleTabs={toggleTabs}
              setToggleTabs={setToggleTabs}
              matches={matches}
              setMatches={setMatches}
              dockActive={dockActive}
              setDockActive={setDockActive}
            />
          )}

          {noteWindows === false ? null : (
            <AboutWindow
              noteWindows={noteWindows}
              setNoteWindows={setNoteWindows}
              matches={matches}
              dockActive={dockActive}
              setDockActive={setDockActive}
            />
          )}
          {dockActive === false ? null : <Dock />}
        </div>
      )}
    </div>
  );
}

export default App;
