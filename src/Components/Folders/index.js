import React from "react";
import "./index.css";

import FormationFolder from "./Folder/FormationFolder";
import CompetenceFolder from "./Folder/CompetenceFolder";
import AboutNote from "./Folder/AboutNote";
import WorkFolder from "./Folder/WorkFolder";
import ContactFolder from "./Folder/ContactFolder";
import WidgetProject from "../Mobile/Widget/WidgetProject";
import TwitterIcon from "./Folder/TwitterIcon";

function Folders({
  matches,
  setMatches,
  toggleTabs,
  setToggleTabs,
  noteWindows,
  setNoteWindows,
  contactWindow,
  setContactWindow,
  dockActive,
  setDockActive,
}) {
  return (
    <div className="folder-container">
      {matches ? (
        <>
          <FormationFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <CompetenceFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <WorkFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <AboutNote
            noteWindows={noteWindows}
            setNoteWindows={setNoteWindows}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <ContactFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            contactWindow={contactWindow}
            setContactWindow={setContactWindow}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
        </>
      ) : (
        <>
          <FormationFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <CompetenceFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          {/* <WidgetProject /> */}
          <WorkFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <AboutNote
            noteWindows={noteWindows}
            setNoteWindows={setNoteWindows}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <ContactFolder
            toggleTabs={toggleTabs}
            setToggleTabs={setToggleTabs}
            contactWindow={contactWindow}
            setContactWindow={setContactWindow}
            dockActive={dockActive}
            setDockActive={setDockActive}
          />
          <TwitterIcon />
        </>
      )}
    </div>
  );
}

export default Folders;
