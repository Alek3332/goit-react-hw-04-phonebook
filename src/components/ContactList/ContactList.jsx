import { Contact } from 'components/Contact/Contact.jsx';
import { List } from './ContactList.styled';
const listToRender = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const contactsList = listToRender(filter, contacts);

  return (
    <>
      <List>
        {contactsList.map(contactItem => {
          return (
            <Contact
              key={contactItem.id}
              contactItem={contactItem}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </List>
    </>
  );
};