import React, { useContext, useEffect, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { editContact, getContactDetails, contactDetails } =
    useContext(contactsContext);

  const { id } = useParams();
  const [editName, setEditName] = useState(contactDetails.contactName);
  const [editEmail, setEditEmail] = useState(contactDetails.contactEmail);
  const [editPhone, setEditPhone] = useState(contactDetails.contactPhone);

  useEffect(() => {
    getContactDetails(id);
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    let editedContact = {
      contactName: editName,
      contactEmail: editEmail,
      contactPhone: editPhone,
    };
    editContact(editedContact, id);
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        placeholder="Имя контакта"
      />
      <input
        type="text"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
        placeholder="Email контакта"
      />
      <input
        type="text"
        value={editPhone}
        onChange={(e) => setEditPhone(e.target.value)}
        placeholder="Телефон контакта"
      />
      <button onClick={handleClick}>Изменить</button>
    </div>
  );
};

export default EditContact;
