// React
import { useState } from 'react';

// Components
import Name from './Name';
import Number from './Number';

// Utility Functions
import services from '../Functions/services';

const Form = ({ persons, setPersons, setFiltered, setMessage }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNew = (event) => {
    event.preventDefault();
    const name = event.target.children[0].lastChild.value;

    const number = event.target.children[1].lastChild.value;
    const numberWithDashes = number.replace(
      /^(\d{4})(\d{3})(\d{4})/,
      '$1-$2-$3'
    );

    const person = persons.find((item) => item.name === name);

    if (person === undefined) {
      setPersons(
        persons.concat({
          name,
          number: numberWithDashes,
          id: new Date().getTime(),
        })
      );

      services.createItem({ name, number, id: new Date().getTime() });
      setMessage(`${name} was added to the Phonebook`);
    } else if (
      window.confirm(
        `${name} is already in the Phonebook, Are you sure you want to replace it?`
      )
    ) {
      const index = persons.indexOf(person);
      const altPersons = [
        ...persons,
      ]; /* Using altPersons = persons just refers to values of persons in memory, [...persons] creates separate reference values in memory */

      services
        .updateItem(altPersons[index].id, {
          name: person.name,
          id: person.id,
          number: numberWithDashes,
        })
        .catch((err) =>
          setMessage(`${name} cannot be edited as it doesn't exist`)
        );

      altPersons[index] = {
        name: person.name,
        id: person.id,
        number: numberWithDashes,
      };

      setPersons(altPersons);
      setMessage(`${name} was edited in the Phonebook`);
    }

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
