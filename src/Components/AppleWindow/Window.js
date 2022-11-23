import React, { useState } from 'react';
import './index.css';
import SideBar from './SideBar';
import CompetencesWindow from './Compétences';
import FormationWindow from './Formations';

function Window({ toggleTabs, setToggleTabs }) {
  return (
    <div className="window-frame">
      {toggleTabs === 1 && <CompetencesWindow />}
      {toggleTabs === 2 && <FormationWindow />}
    </div>
  );
}

export default Window;
