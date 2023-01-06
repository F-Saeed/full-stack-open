// React
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((resp) => setCountries(resp.data));
    }
  }, [search]);

  return (
    <div>
      {' '}
      <p>
        Find Country <Search search={search} setSearch={setSearch} />
      </p>
      {countries.length > 10 ? (
        'Too Many Countries'
      ) : countries.length === 1 ? (
        countries.map((item) => (
          <Fragment key={item.cca2}>
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
        ))
      ) : (
        <ul>
          {countries.map((item) => (
            <li key={item.cca2}>{item.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
