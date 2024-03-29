import React from "react";

import Draggable from "react-draggable";
import BackButtonContact from "../BackButtonContact";

import Portrait from "./img/portrait.png";

const contacts = [
  { type: "portable", content: "+330656678583" },
  { type: "e-mail", content: "theo.daguier@icloud.com" },
  { type: "domicile", content: "Paris" },
];

function ContactPage({
  setContactWindow,
  matches,
  dockActive,
  setDockActive,
  setToggleTabs,
  toggleTabs,
}) {
  return (
    <>
      {matches ? (
        <Draggable>
          <div className="apple-window-container">
            <div className="sidebar">
              <div className="traffic-lights">
                <div
                  className="red"
                  onClick={() => setContactWindow(false)}
                  onTouchEnd={() => setContactWindow(false)}
                ></div>
                <div className="orange"></div>
                <div className="green"></div>
              </div>
              <div className="sidebar-menu">
                <div className="sidebar-title">
                  <div className="sidebar-project">
                    <div className="user-container">
                      <div className="circle-sidebar">
                        <img src={Portrait} alt="theo daguier" />
                      </div>
                      <p className="user-title">Daguier Théo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="window-frame contact-container">
              <div className="contact-header">
                <div className="header-circle">
                  <img src={Portrait} alt="theo-daguier" />
                </div>
                <div className="header-text">
                  <p className="title">Théo Daguier</p>
                  <p className="sub-title">Développeur front-end & iOS</p>
                </div>
              </div>
              {contacts.map((contact, index) => (
                <div className="contact-info" key={index}>
                  <p className="type">{contact.type}</p>
                  <p className="content">{contact.content}</p>
                </div>
              ))}
              <div className="contact-info">
                <a
                  href="https://drive.google.com/file/d/1py-q9HyjHSD_OlQlO37ssw6kOeWlL4ra/view?usp=sharing"
                  target="_blank"
                >
                  <p className="type">Télécharger mon CV</p>
                </a>
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <>
          <div className="window-frame contact-container">
            <BackButtonContact
              setContactWindow={setContactWindow}
              setToggleTabs={setToggleTabs}
              dockActive={dockActive}
              setDockActive={setDockActive}
            />
            <div className="contact-header">
              <div className="header-circle">
                <img src={Portrait} alt="theo-daguier" />
              </div>
              <div className="header-text">
                <p className="title">Théo Daguier</p>
                <p className="sub-title">Développeur front-end & iOS</p>
              </div>
            </div>
            {contacts.map((contact, index) => (
              <div className="contact-info" key={index}>
                <p className="type">{contact.type}</p>
                <p className="content">{contact.content}</p>
              </div>
            ))}
            <div className="contact-info">
              <a
                href="https://drive.google.com/file/d/1py-q9HyjHSD_OlQlO37ssw6kOeWlL4ra/view?usp=sharing"
                target="_blank"
              >
                <p className="type">Télécharger mon CV</p>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ContactPage;
