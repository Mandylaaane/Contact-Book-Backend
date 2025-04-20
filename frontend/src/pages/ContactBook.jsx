import "./ContactBook.css";
import React, { useState, useEffect } from "react";
import ContactList from "../components/ContactList";
import CreateOrEdit from "../components/CreateOrEdit";

export default function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setFilteredContacts(data);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);
  // SEARCH CONTACTS
  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();
    const filtered = contacts.filter(
      (contact) =>
        contact.first_name.toLowerCase().includes(q) ||
        contact.last_name.toLowerCase().includes(q) ||
        contact.email.toLowerCase().includes(q)
    );
    setFilteredContacts(filtered);
  };

  const handleCreate = () => {
    setEditContact(null);
    setShowForm(true);
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
    setShowForm(true);
  };
  // SUBMIT
  const handleFormSubmit = (formData) => {
    if (editContact) {
      // EDIT EXISTING
      fetch(`http://localhost:3000/contacts/${editContact._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => {
          setShowForm(false);
          setEditContact(null);
          fetchContacts();
        });
    } else {
      // CREATE NEW
      fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => {
          setShowForm(false);
          fetchContacts();
        });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditContact(null);
  };

  return (
    <>
      <div id="contact-book-box">
        <h1 className="contacts-title" aria-label="title">
          MY CONTACTS
        </h1>
        <br></br>
        <form onSubmit={handleSearch} id="search-form" aria-label="search-form">
          <input
            type="text"
            id="search-field"
            placeholder="  enter first and/or last name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="contact-search-input"
          ></input>
          <button type="submit" id="search-button" aria-label="search-button">
            SEARCH
          </button>
        </form>
      </div>
      <div id="contact-search-result" aria-label="search-results">
        <h2 id="display-title">DISPLAY CONTACTS</h2>
        <ContactList contacts={filteredContacts} onEdit={handleEdit} />
      </div>
      <div id="new-and-edit-buttons">
        <button
          type="button"
          onClick={handleCreate}
          aria-label="create-new-contact-button"
        >
          CREATE NEW
        </button>
        <CreateOrEdit
          initialData={editContact}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
}
