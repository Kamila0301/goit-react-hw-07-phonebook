import { useDispatch } from 'react-redux';
import { filtered } from '../../redux/filterSlice';

import { InputStyled, LabelStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeContactFilter = event => {
    dispatch(filtered(event.target.value.toLowerCase().trim()));
  };

  return (
    <LabelStyled>
      <h2>Find contacts by name</h2>
      <InputStyled type="text" name="text" onChange={changeContactFilter} />
    </LabelStyled>
  );
};
