import { TitleText, Wrapper, Title, ErrorMsg, Loading } from 'components/Phonebook.styled';
import { fetchContacts } from 'redux/tasks/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ContactApp = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <TitleText>Contacts</TitleText>
      {error && <ErrorMsg>Error. Try reloading the App</ErrorMsg>}
      {isLoading && <Loading>Loading...</Loading>}
      <ContactList />
    </Wrapper>
    </>
  );
};
