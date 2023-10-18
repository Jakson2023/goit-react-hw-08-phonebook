import { fetchContacts } from 'redux/tasks/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

export const ContactApp = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ContactForm />
        <Filter />
        <Typography
          component={'h1'}
          fontSize={24}
          sx={{
            ml: 'auto',
            mr: 'auto',
            mt: 6,
            maxWidth: 150,
            textAlign: 'center',
          }}
        >
          Contacts
        </Typography>
        {error && <Typography>Error. Try reloading the App</Typography>}
        <Box
          height={16}
          sx={{
            display: 'block',
            ml: 'auto',
            mr: 'auto',
            width: 150,
            textAlign: 'center',
            mb: 4,
          }}
        >
          {isLoading && (
            <Typography color="success.light" fontSize={20}>
              Loading...
            </Typography>
          )}
        </Box>
        <ContactList />
      </div>
    </>
  );
};
