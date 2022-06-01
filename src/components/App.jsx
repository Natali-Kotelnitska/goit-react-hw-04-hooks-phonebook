import { nanoid } from 'nanoid';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = contactValue => {
    const contact = {
      id: nanoid(),
      name: contactValue.name,
      number: contactValue.number,
    };

    return setContacts(prevState => [contact, ...prevState]);
  };

  const normalizedContact = text => {
    return text.name.toLowerCase();
  };

  const formSubmitHandler = data => {
    const normalizedName = normalizedContact(data);
    if (contacts.some(item => normalizedContact(item) === normalizedName)) {
      alert(`${normalizedName} is already in contacts`);
      return;
    }
    addContact(data);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      normalizedContact(contact).includes(normalizedFilter)
    );
  };

  return (
    <div
      style={{
        // height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 700,
        color: '#010101',
        padding: '20px 45px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onSubmit={addContact}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
