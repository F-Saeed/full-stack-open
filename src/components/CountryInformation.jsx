import { Fragment } from 'react';

const CountryInformation = ({ item }) => {
  return (
    <Fragment>
      <h2>{item.name.common}</h2>
      <p>capital {item.capital[0]}</p>
      <p>area {item.area}</p>
      <h4>Languages</h4>
      <ul>
        {Object.values(item.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={item.flags.png} alt='Country Flag' />
    </Fragment>
  );
};

export default CountryInformation;
