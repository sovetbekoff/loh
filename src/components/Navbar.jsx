import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
import me from "./itsme.JPG";
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* Navbar */}
      <NavLink to="/">Главная</NavLink>
      <img src={me} alt="" style={{ width: "20%", height: " 42px" }} />
      <NavLink to="/add">Добавить контакт</NavLink>
    </div>
  );
};

export default Navbar;
