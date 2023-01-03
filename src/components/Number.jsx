const Number = ({ newNumber, setNewNumber }) => {
  return (
    <div>
      Number:{' '}
      <input
        name='Telephone Number'
        type='tel'
        placeholder='00923411111095(0)'
        maxLength='15'
        required
        value={newNumber}
        onChange={(event) => setNewNumber(event.target.value)}
      />
    </div>
  );
};

export default Number;
