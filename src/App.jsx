import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();

    const name = event.target.firstChild.lastChild.value;

    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name === name) {
        alert(`${name} already is already in the Phonebook`);
        return;
      }
    }

    setPersons(persons.concat({ name }));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
};

export default App;
