import { Component } from "react";
import { FormContact } from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { SearchFilter } from "./SearchFilter/SearchFilter";


export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter:'',
  };

  addContact = newContact => {
    const check = this.state.contacts.some(({ name }) => newContact.name === name);
    if (check) {
      alert(`${newContact.name} is already in contacts`)
      return
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id:nanoid() }],
    }));
  };

  changeFilter = value => {
    this.setState({ filter: value.trim().toLocaleLowerCase() })
  };

  getVisibleItems = () => {
    return this.state.contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(this.state.filter)
    })
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }


  render() {
    const visibleItems = this.getVisibleItems();
  return (
    <div>
      <h1>Phonebook</h1>
      <FormContact onAdd={this.addContact} />

      <h2>Contact List</h2>
      <SearchFilter filter={this.state} onChangeFilter={this.changeFilter} />
      <ContactList onDelete={this.deleteContact} items={visibleItems} />
    </div>
  )
}
};
