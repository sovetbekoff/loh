import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContactsContextProvider from "./context/ContactContextProvider";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <ContactsContextProvider>
      <Navbar />
      <MainRoutes />
    </ContactsContextProvider>
  );
}

export default App;
