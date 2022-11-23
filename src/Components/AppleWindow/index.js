import React, { useState } from 'react';
import './index.css';
import SideBar from './SideBar';
import CompetencesWindow from './Compétences';
import Window from './Window';

function AppleWindow() {
  const [toggleTabs, setToggleTabs] = useState(1);

  return (
    <div className="apple-window-container">
      <SideBar toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
      <Window toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
    </div>
  );
}

export default AppleWindow;
