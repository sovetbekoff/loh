import React, { useContext, useEffect } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-evenly align-items-center">
      {contacts.map((item) => (
        <ContactCard
          key={item.id}
          name={item.contactName}
          email={item.contactEmail}
          phone={item.contactPhone}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ContactList;
