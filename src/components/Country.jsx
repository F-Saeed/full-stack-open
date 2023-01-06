// React
import { useState } from 'react';

// Components
import CountryInformation from './CountryInformation';

const Country = ({ item }) => {
  const [showInformation, setShowInformation] = useState(false);

  return (
    <>
      <li>
        {item.name.common}{' '}
        <button
          type='button'
          onClick={() => setShowInformation((state) => !state)}
        >
          {showInformation ? 'hide' : 'show'}
        </button>
      </li>
      {showInformation ? (
        <CountryInformation key={item.cca2} item={item} />
      ) : null}
    </>
  );
};

export default Country;
