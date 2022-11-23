import React from 'react';
import '../index.css';

import Banner from './img/banner.png';

function WorkWindow({ CompetencesIsActive, CompetencesSetActive }) {
  return (
    <div className="col-right">
      <div className="header">
        <div className="c-left">
          <p>title</p>
          <p>message</p>
          <p>explore</p>
        </div>
        <div className="c-right">
          <img className="bg-banner" src={Banner} alt="banner-apps" />
        </div>
      </div>
      <div className="work-container">
        <div className="work-card">
          <div className="card">
            <p>title</p>
            <p>desc</p>
            <p>desc2</p>
          </div>
        </div>
        <div className="work-card">
          <div className="card">
            <p>title</p>
            <p>desc</p>
            <p>desc2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWindow;
