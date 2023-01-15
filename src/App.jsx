// React
import { useState, useEffect } from 'react';
import Filtered from './components/Filtered';
import Form from './components/Form';

// Components
import Search from './components/Search';

// Utility Functions
import services from './Functions/services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    services.getAllItems().then((resp) => setPersons(resp));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons={persons} setFiltered={setFiltered} />
      <br />
      <Form
        persons={persons}
        setPersons={setPersons}
        setFiltered={setFiltered}
      />
      <h2>Numbers</h2>
      <Filtered filtered={filtered} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
