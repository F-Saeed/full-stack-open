// React
import { Fragment } from 'react';

// Components
import Delete from './Delete';

const Filtered = ({ filtered, persons, setPersons }) => {
  return (
    <Fragment>
      {Array.isArray(filtered) && filtered.length === 0 ? (
        <em>{console.log('filtered empty')} No Such Values</em>
      ) : filtered ? (
        filtered.map((item) => (
          <p key={item.id}>
            {console.log('filtered ran')}
            {item.name} <span>{item.number}</span>
            <Delete id={item.id} persons={persons} setPersons={setPersons} />
          </p>
        ))
      ) : (
        persons.map((item) => (
          <p key={item.id}>
            {/* {console.log('persons ran', persons)} */}
            {item.name} <span>{item.number}</span>{' '}
            <Delete id={item.id} persons={persons} setPersons={setPersons} />
          </p>
        ))
      )}
    </Fragment>
  );
};

export default Filtered;
