import axios from "axios";
import React, { createContext, useReducer } from "react";

export const contactsContext = createContext();

const API = "http://localhost:7000/users";

const INIT_STATE = {
  contacts: [],
  contactDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_CONTACT_DETAILS":
      return { ...state, contactDetails: action.payload };
    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (contact) => {
    await axios.post(API, contact);
  };

  const getContacts = async () => {
    const { data } = await axios.get(API);
    dispatch(addTodo(data));
  };

  const addTodo = (elem) => {
    return {
      type: 'GET_CONTACTS',
      payload: elem
    }
  }

  const getContactDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_CONTACT_DETAILS",
      payload: data,
    });
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  const editContact = async (editedContact, id) => {
    await axios.patch(`${API}/${id}`, editedContact);
  };

  return (
    <contactsContext.Provider
      value={{
        contacts: state.contacts,
        contactDetails: state.contactDetails,
        addContact,
        getContacts,
        getContactDetails,
        deleteContact,
        editContact,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
