import React from 'react';
import './index.css';
import Draggable from 'react-draggable';
import SideBar from './SideBar';
import Window from './Window';
import BackButton from './BackButton';

function AppleWindow({
  toggleTabs,
  setToggleTabs,
  matches,
  setMatches,
  dockActive,
  setDockActive,
}) {
  return (
    <>
      {matches ? (
        <Draggable>
          <div className="apple-window-container">
            <SideBar toggleTabs={toggleTabs} setToggleTabs={setToggleTabs} />
            <Window
              matches={matches}
              setMatches={setMatches}
              toggleTabs={toggleTabs}
              setToggleTabs={setToggleTabs}
              dockActive={dockActive}
              setDockActive={setDockActive}
            />
          </div>
        </Draggable>
      ) : (
        <>
          <BackButton
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <Window
            matches={matches}
            setMatches={setMatches}
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
        </>
      )}
    </>
  );
}

export default AppleWindow;
