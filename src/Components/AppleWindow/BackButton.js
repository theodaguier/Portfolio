import React from "react";

import Chevron from "./Icon/chevron-left.png";

function BackButton({ setToggleTabs, dockActive, setDockActive }) {
  const toggleTab = () => {
    setToggleTabs(0);
    setDockActive(dockActive === false);
  };
  return (
    <div
      className="nav-bar-container"
      onClick={() => setDockActive(dockActive === false)}
    >
      <div className="back" onClick={toggleTab}>
        <img src={Chevron} alt="" />
        <p className="nav-bar-txt">Retour</p>
      </div>
    </div>
  );
}

export default BackButton;
