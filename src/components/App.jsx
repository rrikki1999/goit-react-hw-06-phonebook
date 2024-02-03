import React, {  useEffect } from 'react';
import  ContactForm  from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import {addContact, deleteContact, setFilter } from '../redux/actions';

export const App = () => {
  // const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  // const [filter, setFilter] = useState('');
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const unstringifiedContacts = JSON.parse(stringifiedContacts);

    if (unstringifiedContacts) {
      // setContacts(unstringifiedContacts);
      dispatch(addContact(unstringifiedContacts));
    }
  }, [dispatch]); 

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);
  

  const addNewContact = (name, number) => {
    const isInContacts = contacts.some(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    // setContacts((prevContacts) => [
    //   {
    //     id: nanoid(),
    //     name,
    //     number,
    //   },
    //   ...prevContacts,
    // ]);
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const removeContact = (contactId) => {
    // setContacts((prevContacts) =>
    //   prevContacts.filter(({ id }) => id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  const changeFilter = (e) => {
    // setFilter(e.target.value);
    dispatch(setFilter(e.target.value))
  };
  
  // const filterContacts = () => {
  //   const normalizeFilter = filter.trim().toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };
  const filterContacts = () => {
    const normalizeFilter = filter ? filter.trim().toLowerCase() : '';
  
    return contacts
      ? contacts.filter((contact) =>
          contact.name && contact.name.toLowerCase().includes(normalizeFilter)
        )
      : [];
  };
  
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={filterContacts()}
            onRemoveContact={removeContact}
          />
        </>
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
    </div>
  );
};
