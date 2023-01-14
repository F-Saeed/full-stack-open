// React
import { useState } from 'react';
import services from '../Functions/services';

// Components
import Name from './Name';
import Number from './Number';

const Form = ({ persons, setPersons, setFiltered }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNew = (event) => {
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

    setPersons(
      persons.concat({
        name,
        number: numberWithDashes,
      })
    );

    services.create({ name, number });

    setNewName('');
    setNewNumber('');
    setFiltered('');
  };

  return (
    <>
      <h3>Add New</h3>
      <form onSubmit={addNew}>
        <Name newName={newName} setNewName={setNewName} />
        <Number newNumber={newNumber} setNewNumber={setNewNumber} />
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
