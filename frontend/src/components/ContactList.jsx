import React from "react";
import Contact from "./Contact";

export default function ContactList({ contacts, onEdit }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        contacts.map((contact) => (
          <Contact
            key={contact._id}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phone={contact.phone}
            email={contact.email}
            address={contact.address}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}
