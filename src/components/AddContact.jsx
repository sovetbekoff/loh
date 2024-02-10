import React, { useContext, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/AddContact.css";
import loh from "../img/лох.gif";
const AddContact = () => {
  const { addContact, getContacts } = useContext(contactsContext);
  const navigate = useNavigate();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [lohh, setlohh] = useState(false);
 
  const handleClick = () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim()) {
      return alert("заполните все ");
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

  function funcLoh() {
    setlohh(true);
  }
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
          img
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
      {lohh == true ? (
        <div>
          <button onClick={() => setlohh(false)}>X</button>
          <h1 style={{ fontFamily: "Courier New, Courier, monospace" }}>
            AXAXAXAX, ЛОХ
          </h1>
          <img src={loh} alt="ты лох" />
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button className="submit-button" onClick={funcLoh}>
          не не сюда нажми
        </button>
        <button
          style={{ display: "flex" }}
          tton
          onClick={handleClick}
          className="submit-button"
          type="submit"
        >
          нажми чтобы добавить
        </button>

        <button className="submit-button" type="submit" onClick={funcLoh}>
          надо меня нажать!
        </button>
        <button className="submit-button" onClick={funcLoh}>
          Нажмите на меня, пожулуйста
        </button>
        <button className="submit-button" onClick={funcLoh}>
          нет на меня
        </button>
      </div>
    </div>
  );
};

export default AddContact;
