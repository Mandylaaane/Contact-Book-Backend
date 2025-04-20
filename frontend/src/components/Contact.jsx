import React from "react";
import "./Contact.css";

export default function Contact({
  firstName,
  lastName,
  phone,
  email,
  address,
  onEdit,
}) {
  return (
    <>
      <div id="contact-section">
        <p id="contact-items">
          Name: {firstName} {lastName}
        </p>
        <p id="contact-items">Phone: {phone}</p>
        <p id="contact-items">Email: {email}</p>
        {address && (
          <div id="contact-items">
            <p>
              Address: {address.street}, {address.city}, {address.zip},{" "}
              {address.country}
            </p>
          </div>
        )}
        <button onClick={() => onEdit(contact)} id="edit-button">
          EDIT
        </button>
      </div>
    </>
  );
}
