import React, {Component} from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsSection } from './App.styled';

export class App extends Component {

  state = {
    contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: '',
  }

  onFormSubmit = (values, actions) => {

    const isDublicate = this.state.contacts.find(contact => {
      return contact.name === values.name
    })

    if(isDublicate){
      alert(`${values.name} is already in contacts`);
      return 
    }

    this.setState(prevState => ({
      contacts:[
        {name: values.name,
         number: values.number,
         id: nanoid()},
         ...prevState.contacts]
    }))
    actions.resetForm();
  }

  onFilterChange = (e) => {
    this.setState({filter: e.target.value})
  }

  onDeleteBtbClick = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => !(contact.id === id))
    }))
  }

  componentDidUpdate (_, prevState) {

    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount () {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts !== null) {
      this.setState({
        contacts: savedContacts
      })
    }
  }

  render() {   
    const {contacts, filter} = this.state; 
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))

    return(
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={this.onFormSubmit}></ContactForm>

      <h2>Contacts</h2>
      <ContactsSection>
        <Filter onFilterChange={this.onFilterChange} value={filter}></Filter>
        <ContactList filteredContacts={filteredContacts} onDeleteBtbClick={this.onDeleteBtbClick}></ContactList>
      </ContactsSection>
    </Container>
  )};
};
