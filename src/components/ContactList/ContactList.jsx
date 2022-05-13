import { List } from "./ContactList.styled"
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import PropTypes from 'prop-types';

export const ContactList = ({filteredContacts, onDeleteBtbClick}) => (
    <List>
        {filteredContacts.map(contact => (
        <ContactListItem onDeleteBtbClick={onDeleteBtbClick} key={contact.id} contact={contact}></ContactListItem>))}
    </List>
)

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    onDeleteBtbClick: PropTypes.func.isRequired
}