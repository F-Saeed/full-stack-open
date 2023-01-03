import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [filtered, setFiltered] = useState('');

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

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
    const numberWithDashes = number.replace(
      /^(\d{4})(\d{3})(\d{4})/,
      '$1-$2-$3'
    );

    console.log(numberWithDashes);

    setPersons(persons.concat({ name, number: numberWithDashes }));
    setNewName('');
    setNewNumber('');
  };

  const searchName = (event) => {
    event.preventDefault();

    const searchItem = event.target.children[0].value.toLowerCase();
    const filteredNames = persons.filter(
      (item) => item.name.toLowerCase() === searchItem
    );

    setFiltered(filteredNames);
    setSearch('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <form onSubmit={searchName}>
          <input
            type='text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type='submit'>Search Name</button>
        </form>
        <button type='button' onClick={() => setFiltered('')}>
          Reset
        </button>
      </div>
      <br />
      <h3>Add New</h3>
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
            placeholder='+923411111095(0)'
            maxLength='14'
            required
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered
        ? filtered.map((item) => (
            <p key={item.id}>
              {item.name} <span>{item.number}</span>
            </p>
          ))
        : persons.map((item) => (
            <p key={item.id}>
              {item.name} <span>{item.number}</span>
            </p>
          ))}
    </div>
  );
};

export default App;
