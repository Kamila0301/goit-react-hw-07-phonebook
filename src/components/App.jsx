import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SectionPhonebook, SectionContact, SectionItem } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectVisibleContacts,
} from '../redux/selectors';
import { fetchContact } from '../redux/operations';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isVisibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <SectionPhonebook>
        <SectionItem>Phonebook</SectionItem>
        <ContactForm />

        <SectionContact>Contacts</SectionContact>
        <Filter />
        {contacts.length > 0 && isVisibleContacts.length === 0 && (
          <p>There is not found contact with that name</p>
        )}
        {isLoading && <Loader />}
        {contacts.length === 0 && !isLoading && (
          <p>There aren`t contacts here, add please</p>
        )}
        {contacts.length > 0 && <ContactList />}
      </SectionPhonebook>
    </>
  );
};
