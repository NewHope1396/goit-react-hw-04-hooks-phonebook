import { Button, Item } from "./ContactListItem.styled";
import PropTypes from 'prop-types';

export const ContactListItem = ({contact, onDeleteBtbClick}) => (
    <Item>
        <p>{contact.name}: {contact.number}</p>
        <Button onClick={() => onDeleteBtbClick(contact.id)} type="button">Delete</Button>
    </Item>
)

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }),
    onDeleteBtbClick: PropTypes.func.isRequired
}