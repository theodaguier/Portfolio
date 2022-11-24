import React, { useState } from 'react';
import './index.css';
import CompetencesWindow from './Compétences';
import FormationWindow from './Formations';
import WorkWindow from './Work';
import ContactPage from './Contact';

function Window({
  toggleTabs,
  setToggleTabs,
  matches,
  setMatches,
  dockActive,
  setDockActive,
}) {
  return (
    <div className="window-frame">
      {toggleTabs === 1 && (
        <CompetencesWindow
          toggleTabs={toggleTabs}
          setToggleTabs={setToggleTabs}
          matches={matches}
          setMatches={setMatches}
          dockActive={dockActive}
          setDockActive={setDockActive}
        />
      )}
      {toggleTabs === 2 && (
        <FormationWindow
          toggleTabs={toggleTabs}
          setToggleTabs={setToggleTabs}
          matches={matches}
          setMatches={setMatches}
          dockActive={dockActive}
          setDockActive={setDockActive}
        />
      )}
      {toggleTabs === 4 && (
        <WorkWindow
          toggleTabs={toggleTabs}
          setToggleTabs={setToggleTabs}
          matches={matches}
          setMatches={setMatches}
          dockActive={dockActive}
          setDockActive={setDockActive}
        />
      )}
    </div>
  );
}

export default Window;
