import React, { useContext, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact } = useContext(contactsContext);
  const navigate = useNavigate();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleClick = () => {
    if (!contactName || !contactEmail || !contactPhone) {
      navigate("/");
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
  };

  return (
    <div>
      <input
        type="text"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        placeholder="Имя контакта"
      />
      <input
        type="text"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        placeholder="Email контакта"
      />
      <input
        type="text"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        placeholder="Телефон контакта"
      />

      <button onClick={handleClick}>Добавить</button>
      {/* <ToastContainer position="top-center" pauseOnHover={false} /> */}
    </div>
  );
};

export default AddContact;
