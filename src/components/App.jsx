import { useDispatch, useSelector } from 'react-redux';
import Phonebook from './Phonebook/PhonebookApp/Phonebook';
import { getError, getIsLoading } from './Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './Redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div>
    //   {isLoading && <p>Loading....</p>}
    //   {error && <p>{error}</p>}
    //   {<p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p>}
    // </div>
    <div>
      <Phonebook>{isLoading && !error && <p>Loading....</p>}</Phonebook>
    </div>
  );
};
