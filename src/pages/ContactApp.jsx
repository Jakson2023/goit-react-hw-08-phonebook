import { fetchContacts } from 'redux/tasks/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import * as React from 'react';

export const ContactApp = () => {
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster />
        <ContactForm />
        <Filter />
        <Typography
          component={'h1'}
          fontSize={24}
          sx={{
            ml: 'auto',
            mr: 'auto',
            mt: 6,
            width: '100%',
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
            width: '100%',
            textAlign: 'center',
            mb: 4,
          }}
        ></Box>
        <ContactList />
      </div>
    </>
  );
};
