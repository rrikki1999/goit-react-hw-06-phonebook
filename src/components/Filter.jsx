import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);

  const changeFilter = e => {
    // console.log("New Filter Value:", e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <label htmlFor={nanoid()}>
      Find contacts by name
      <input
        value={value}
        type="text"
        placeholder="find contact"
        onChange={changeFilter}
      />
    </label>
  );
};
