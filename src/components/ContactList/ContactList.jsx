import { useSelector } from 'react-redux';
import { ListElement } from 'components/ListElement/ListElement';
import { Box } from '@mui/material';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filter.filter);

  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  return (
    <Box
      component={'ul'}
      sx={{
        listStyle: 'none',
        maxWidth: 500,
        ml: 'auto',
        mr: 'auto',
        padding: 0,
      }}
    >
      {filteredContacts().map(contact => (
        <ListElement key={contact.id} element={contact} />
      ))}
    </Box>
  );
};
