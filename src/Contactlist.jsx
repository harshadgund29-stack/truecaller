import React from 'react';

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return <div className="no-results">No contacts found.</div>;
  }

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-card">
          <div className="contact-avatar">
            <span role="img" aria-label="user-icon">👤</span>
          </div>
          <div className="contact-info">
            <h3 className="contact-name">{contact.name}</h3>
            <p className="contact-phone">{contact.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;