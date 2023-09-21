import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import EditContact from "./components/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/details/:id" element={<ContactDetails />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
