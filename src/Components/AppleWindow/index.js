import React, { useState } from 'react';
import './index.css';
import SideBar from './SideBar';
import CompetencesWindow from './Compétences';

function AppleWindow(props, isActive) {
  const [changePage, setChangePage] = useState(0);

  return (
    <div>
      <SideBar changePage={changePage} setChangePage={setChangePage} />
      <CompetencesWindow />
    </div>
  );
}

export default AppleWindow;
