import React from 'react';
import './WidgetProject.css';

import Banner from './../../AppleWindow/Work/img/banner.png';

function WidgetProject() {
  return (
    <div className='widget-project'>
      <div className="header">
        <div className="c-left">
          <p className="upper-text">Projets</p>
          <p className="desc">Découvrez tous les projets majeurs réalisés</p>
        </div>
        <div className="c-right">
          <img className="bg-banner" src={Banner} alt="banner-apps" />
        </div>
      </div>
    </div>
  );
}

export default WidgetProject;
