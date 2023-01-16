// React
import { useState } from 'react';

// Utility Functions
import services from '../Functions/services';

const Delete = ({ id, persons, setPersons }) => {
  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setPersons(persons.filter((item) => item.id !== id));
      services.deleteItem(id);
    }
  };

  return (
    <button type='button' onClick={handleClick}>
      Delete
    </button>
  );
};

export default Delete;
