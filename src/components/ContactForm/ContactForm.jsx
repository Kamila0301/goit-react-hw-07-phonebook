import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledError,
  StyledField,
  AddButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import React from 'react';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches("^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$")
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
    )
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const handleAddContact = (values, actions) => {
  //   const { name, number } = values;
  //   if (contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
  //   )
  //   {
  //     return alert(`${values.name} is already in contacts`);
  //   }
  //     dispatch(addContact({ name, phone: number }));
  //     actions.resetForm();
  //     toast.success(`Contact ${values.name} added successfully!`);
  //   }
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        if (
          contacts.find(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
          )
        ) {
          return alert(`${values.name} is already in contacts`);
        }
        dispatch(addContact({ name, phone: number }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField name="name" />
          <StyledError name="name" />
        </label>

        <label>
          Phone Number
          <StyledField name="number" />
          <StyledError name="number" />
        </label>

        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </Formik>
  );
};
