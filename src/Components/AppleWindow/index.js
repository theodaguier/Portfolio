import React from 'react';
import './index.css';
import Draggable from 'react-draggable';
import SideBar from './SideBar';
import Window from './Window';

function AppleWindow({ toggleTabs, setToggleTabs }) {
  return (
    <Draggable>
      <div className="apple-window-container">
        <SideBar toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
        <Window toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
      </div>
    </Draggable>
  );
}

export default AppleWindow;
