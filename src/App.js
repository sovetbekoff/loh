import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContactsContextProvider from "./context/ContactContextProvider";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  let map = new Map();
  // console.log(map);
  // map.set("key1", "value1");
  // map.set("key2", "value2");

  // console.log(map.get); // выводит 'value1'
  // console.log(map.size); // выводит 2

  return (
    <ContactsContextProvider>
      <Navbar />
      <MainRoutes />
    </ContactsContextProvider>
  );
}

export default App;
