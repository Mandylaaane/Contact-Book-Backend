import "./ContactBook.css";
import React, { useState } from "react";

export default function ContactBook() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <>
      <div id="contact-book-box">
        <h1 class="contacts-title">MY CONTACTS</h1>
        <br></br>
        <form role="search" id="search-form">
          <button type="submit" id="search-button">
            SEARCH:
          </button>
          <input
            type="search"
            id="search-field"
            name="q"
            placeholder="enter first and/or last name"
            aria-label="search field for your contacts"
          ></input>
        </form>
      </div>
    </>
  );
}
