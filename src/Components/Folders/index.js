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
}) {
  return (
    <div className="folder-container">
      <FormationFoler
        FormationsIsActive={FormationsIsActive}
        FormationsSetActive={FormationsSetActive}
      />
      <CompetenceFolder
        CompetencesIsActive={CompetencesIsActive}
        CompetencesSetActive={CompetencesSetActive}
      />
      <AboutNote NoteIsActive={NoteIsActive} NoteSetActive={NoteSetActive} />
    </div>
  );
}

export default Folders;
