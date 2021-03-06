import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
