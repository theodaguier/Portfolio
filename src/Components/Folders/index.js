import React from 'react';
import './index.css';

import FormationFoler from './Folder/FormationFolder';
import CompetenceFolder from './Folder/CompetenceFolder';
import AboutNote from './Folder/AboutNote';

function Folders({
  CompetencesIsActive,
  CompetencesSetActive,
  FormationsIsActive,
  FormationsSetActive,
  NoteIsActive,
  NoteSetActive,
  toggleTabs,
  setToggleTabs,
}) {
  return (
    <div className="folder-container">
      <FormationFoler
        FormationsIsActive={FormationsIsActive}
        FormationsSetActive={FormationsSetActive}
        toggleTabs={toggleTabs}
        setToggleTabs={setToggleTabs}
      />
      <CompetenceFolder
        CompetencesIsActive={CompetencesIsActive}
        CompetencesSetActive={CompetencesSetActive}
        toggleTabs={toggleTabs}
        setToggleTabs={setToggleTabs}
      />
      <AboutNote NoteIsActive={NoteIsActive} NoteSetActive={NoteSetActive} />
    </div>
  );
}

export default Folders;
