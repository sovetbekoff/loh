import React, { useContext, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/AddContact.css";

const AddContact = () => {
  const { addContact, getContacts } = useContext(contactsContext);
  const navigate = useNavigate();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleClick = () => {
    if (!contactName || !contactEmail || !contactPhone) {
      return;
    }
    let newContact = {
      contactName: contactName,
      contactEmail: contactEmail,
      contactPhone: contactPhone,
    };
    addContact(newContact);
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    getContacts();
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add Contact</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="phone">
          Phone:
        </label>
        <input
          className="form-input"
          type="text"
          id="phone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
      </div>
      <button onClick={handleClick} className="submit-button" type="submit">
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
