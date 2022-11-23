import React, { useState } from 'react';
import './index.css';
import CompetencesWindow from './Compétences';
import FormationWindow from './Formations';
import WorkWindow from './Work';

function Window({ toggleTabs }) {
  return (
    <div className="window-frame">
      {toggleTabs === 1 && <CompetencesWindow />}
      {toggleTabs === 2 && <FormationWindow />}
      {toggleTabs === 4 && <WorkWindow />}
    </div>
  );
}

export default Window;
