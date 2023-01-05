// React
import axios from 'axios';
import { useState, useEffect } from 'react';
import Filtered from './components/Filtered';
import Form from './components/Form';

// Components
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/persons')
      .then((resp) => setPersons(resp.data));
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
      <Filtered filtered={filtered} persons={persons} />
    </div>
  );
};

export default App;
