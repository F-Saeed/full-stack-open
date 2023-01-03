const Filtered = ({ filtered, persons }) => {
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
            {item.name} <span>{item.number}</span>
          </p>
        ))
      )}
    </>
  );
};

export default Filtered;
