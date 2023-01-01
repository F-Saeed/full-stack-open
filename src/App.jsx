import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const name = event.target.children[0].lastChild.value;

    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name === name) {
        alert(`${name} already is already in the Phonebook`);
        return;
      }
    }

    const number = event.target.children[1].lastChild.value;
    console.log(number);
    setPersons(persons.concat({ name, number }));
    setNewName('');
    setNewNumber('');
  };

  const numberChange = (event) => {
    if (
      event.key != 'Backspace' &&
      (event.target.value.length === 3 || event.target.value.length === 7)
    ) {
      event.target.value += '-';
    }

    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name:{' '}
          <input
            name='Name'
            type='text'
            placeholder='Name'
            required
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          Number:{' '}
          <input
            name='Telephone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            placeholder='123-456-7890'
            maxLength='12'
            required
            value={newNumber}
            onChange={numberChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item) => (
        <p key={item.name}>
          {item.name} <span>{item.number}</span>
        </p>
      ))}
    </div>
  );
};

export default App;
