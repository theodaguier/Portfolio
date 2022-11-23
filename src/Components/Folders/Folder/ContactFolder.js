import React from 'react';
import '../index.css';

function ContactFolder({ contactWindow, setContactWindow }) {
  const toggle = () => {
    setContactWindow(contactWindow);
  };

  const contacts = [{ id: 5, name: 'Contact', img: './Icons/contact.png' }];

  return (
    <div className="folder">
      {contacts.map((contact, index) => (
        <div
          className="folder-content"
          key={index}
          onClick={() => setContactWindow(!contactWindow)}
        >
          <div className="folder-icon">
            <img className="i-folder" src={contact.img} alt="folder" />
          </div>
          <div className="folder-name">{contact.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ContactFolder;
