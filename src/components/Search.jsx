import { useState } from 'react';

const Search = ({ persons, setFiltered }) => {
  const [search, setSearch] = useState('');

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
      Filter Names:
      <form onSubmit={searchName}>
        <input
          type='text'
          minLength='1'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type='submit'>Search Name</button>
      </form>
      <button type='button' onClick={() => setFiltered('')}>
        Reset
      </button>
    </div>
  );
};

export default Search;
