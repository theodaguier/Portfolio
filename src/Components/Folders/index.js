import React from 'react';
import './index.css';

import FormationFolder from './Folder/FormationFolder';
import CompetenceFolder from './Folder/CompetenceFolder';
import AboutNote from './Folder/AboutNote';
import WorkFolder from './Folder/WorkFolder';

function Folders({ toggleTabs, setToggleTabs, noteWindows, setNoteWindows }) {
  return (
    <div className="folder-container">
      <FormationFolder toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
      <CompetenceFolder toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
      <WorkFolder toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
      <AboutNote noteWindows={noteWindows} setNoteWindows={setNoteWindows} />
    </div>
  );
}

export default Folders;
