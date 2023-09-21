import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";
const ContactCard = ({ name, id, email, phone }) => {
  return (
    <div className="container">
      <div className="cards">
        <NavLink to={`/details/${id}`}>
          <div className="cardContact">{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default ContactCard;
