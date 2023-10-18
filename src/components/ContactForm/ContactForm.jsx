import { InputForm, StyledForm } from 'components/Phonebook.styled';
import { Formik, Field  } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';


import { addContact } from 'redux/tasks/operations';
import * as Yup from 'yup';
import { Button, TextField} from '@mui/material';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required.')
    .matches(
      /[a-zA-Zа-яА-ЯЄєІіЇї]+(([' -][a-zA-Zа-яА-ЯЄєІіЇї ])?[a-zA-Zа-яА-ЯЄєІіЇї]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(17, 'Too Long!')
    .required('Required.')
    .matches(
      /^(?:\+?\d{1,4}\(\d{2,3}\)\d{3}-\d{2}-\d{2}|\+?\d{1,4}\d{3}-\d{2}-\d{2}|\+?\d{1,4}\(\d{2,3}\)\d{3}\d{2}\d{2}|\d{3}-\d{2}-\d{2})$/,
      'Invalid phone number format'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const addNewContact = newContact => {
    const contactInList = contacts.find(
      contact =>
        contact.name &&
        newContact.name &&
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactInList) {
      alert(`${contactInList.name} is already in contacts`);
    } else {
      dispatch(addContact({...newContact }));
    }
  };

  

  return (
    <InputForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, formikHelpers) => {
          addNewContact(values);
          formikHelpers.resetForm();
        }}
      >
        {({errors, dirty, touched, isValid }) => (
          <StyledForm>
            
            <Field
             name="name"
             type="text"
             as={TextField}
             variant='outlined'
             color='primary'
             label='Name' 
             error={Boolean(errors.name) && Boolean(touched.name)}
            
             
             />
           
            
            <Field name="number" type="tel"
            as={TextField}
            variant='outlined'
            color='primary'
            label='Number'
            error={Boolean(errors.number) && Boolean(touched.number)} />
          
            <Button
             type="submit"
             variant='contained'
             color='primary'
             size='large'
              disabled={!dirty || !isValid}
              >
              Add contact
            </Button>
          </StyledForm>
        )}
      </Formik>
    </InputForm>
  );
};
