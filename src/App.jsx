// React
import { useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import Filtered from './components/Filtered';
import Form from './components/Form';

// Components
import Search from './components/Search';
import Message from './components/Message/Message';

// Utility Functions
import services from './Functions/services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState('');
  const [message, setMessage] = useState(null);

  useDeepCompareEffect(() => {
    services.getAllItems().then((resp) => setPersons(resp));
    // console.log(persons)
  }, [, persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Search persons={persons} setFiltered={setFiltered} />
      <br />
      <Form
        persons={persons}
        setPersons={setPersons}
        setFiltered={setFiltered}
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <Filtered filtered={filtered} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
