// Components
import Delete from './Delete';

const Filtered = ({ filtered, persons, setPersons }) => {
  return (
    <>
      {Array.isArray(filtered) && filtered.length === 0 ? (
        <em>No Such Values</em>
      ) : filtered ? (
        filtered.map((item) => (
          <p key={item.id}>
            {item.name} <span>{item.number}</span>
          </p>
        ))
      ) : (
        persons.map((item) => (
          <p key={item.id}>
            {item.name} <span>{item.number}</span>{' '}
            <Delete id={item.id} persons={persons} setPersons={setPersons} />
          </p>
        ))
      )}
    </>
  );
};

export default Filtered;
