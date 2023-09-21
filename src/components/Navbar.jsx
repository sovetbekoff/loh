import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/add">Добавить контакт</NavLink>
    </div>
  );
};

export default Navbar;
