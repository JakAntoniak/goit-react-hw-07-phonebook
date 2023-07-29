import { useDispatch } from 'react-redux';
import css from './Style.module.css';
import { setStatusFilter } from 'components/Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterUpdate = () => {
    const filterValue = document.querySelector('#filter-input').value;

    dispatch(setStatusFilter(filterValue));
  };

  return (
    <div className={css.filter}>
      <label>Find contacts by name</label>
      <input
        className={css['filter-input']}
        id="filter-input"
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Filter"
        onChange={handleFilterUpdate}
      />
    </div>
  );
};

export default Filter;
