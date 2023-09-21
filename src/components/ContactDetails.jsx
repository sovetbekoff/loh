import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { contactsContext } from "../context/ContactContextProvider";

const ContactDetails = () => {
  const { id } = useParams();
  const { getContactDetails, contactDetails, deleteContact } =
    useContext(contactsContext);

  useEffect(() => {
    getContactDetails(id);
  }, []);

  console.log(contactDetails);
  return (
    <div>
      <h1>{contactDetails.contactName}</h1>
      <NavLink to="/">
        <button onClick={() => deleteContact(id)}>Удалить</button>
      </NavLink>
      <NavLink to={`/edit/${id}`}>
        <button>Изменить</button>
      </NavLink>
    </div>
  );
};

export default ContactDetails;
