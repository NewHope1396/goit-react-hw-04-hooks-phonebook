import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsSection } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

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
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
