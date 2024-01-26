import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';
import { UlStyled, DeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const isVisibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  return (
    <UlStyled>
      {isVisibleContacts.map(({ name, phone, id }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {phone}</span>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </li>
      ))}
    </UlStyled>
  );
};
