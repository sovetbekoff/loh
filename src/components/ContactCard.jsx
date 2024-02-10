import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/Card.css";
import { contactsContext } from "../context/ContactContextProvider";
import { useContext } from "react";

const ContactCard = ({ name, id, email, phone }) => {
  // const { id } = useParams();
  const { getContactDetails, deleteContact } = useContext(contactsContext);

  useEffect(() => {
    getContactDetails(id);
  }, []);
  return (
    <div className="container">
      <div className="cards">
        {/* <NavLink to={`/details/${id}`}> */}
        <div className="cardContact">{name}</div>
        <img src={email} />
        <div>{phone}</div>
        <NavLink to="/">
          <button
            style={{
              backgroundColor: "red",
              border: "none",
              borderRadius: "22px",
              width: "60%",
              height: "22%",
              margin: "1%",
            }}
            onClick={() => deleteContact(id)}
          >
            Удалитет
          </button>
        </NavLink>
        <NavLink to={`/edit/${id}`}>
          <button
            style={{
              margin: "1%",
              backgroundColor: "green",
              border: "none",
              borderRadius: "22px",
              width: "60%",
              height: "22%",
            }}
          >
            Изменитет
          </button>
        </NavLink>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default ContactCard;
