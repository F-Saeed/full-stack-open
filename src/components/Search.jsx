const Search = ({ search, setSearch }) => {
  return (
    <input
      type='text'
      onChange={(event) => setSearch(event.target.value)}
      value={search}
    />
  );
};

export default Search;
