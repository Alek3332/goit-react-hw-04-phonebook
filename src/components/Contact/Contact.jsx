import {
  ContactListItem,
  ContactListItemNumber,
  ContactListItemName,
  ContactListItemButton,
} from './Contact.styled';

export const Contact = p => {
  const { name, number, id } = p.contactItem;
  return (
    <ContactListItem>
      <ContactListItemName>{name}</ContactListItemName>
      <ContactListItemNumber>{number}</ContactListItemNumber>
      <ContactListItemButton onClick={() => p.onDeleteContact(id)}>
        Delete
      </ContactListItemButton>
    </ContactListItem>
  );
};