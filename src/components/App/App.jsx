import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsSection } from './App.styled';

export const App = () => {
  // state = {
  //   contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
  //   filter: '',
  // }

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  const onFormSubmit = (values, actions) => {
    const isDublicate = contacts.find(contact => {
      return contact.name === values.name;
    });

    if (isDublicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    setContacts(contacts => [
      {
        name: values.name,
        number: values.number,
        id: nanoid(),
      },
      ...contacts,
    ]);

    actions.resetForm();
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onDeleteBtnClick = id => {
    setContacts(contacts => contacts.filter(contact => !(contact.id === id)));
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    savedContacts && setContacts(savedContacts);
  }, []);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit}></ContactForm>

      <h2>Contacts</h2>
      <ContactsSection>
        <Filter onFilterChange={onFilterChange} value={filter}></Filter>
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteBtbClick={onDeleteBtnClick}
        ></ContactList>
      </ContactsSection>
    </Container>
  );
};
