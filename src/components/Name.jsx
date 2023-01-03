const Name = ({ newName, setNewName }) => {
  return (
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
  );
};

export default Name;
