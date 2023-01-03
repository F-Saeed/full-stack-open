// React
import { useState } from 'react';
import Filtered from './components/Filtered';
import Form from './components/Form';

// Components
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [filtered, setFiltered] = useState('');

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
