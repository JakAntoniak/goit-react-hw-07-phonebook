import css from './Style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/Redux/selectors';
import { deleteContact } from 'components/Redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const shownContacts = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {shownContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.phone}{' '}
            <button
              className={css.deleteButton}
              type="button"
              name={contact.name}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
