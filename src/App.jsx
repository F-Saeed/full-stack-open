// React
import { useState, useEffect, Fragment } from 'react';

// External Libraries
import axios from 'axios';

// Components
import Country from './components/Country';
import CountryInformation from './components/CountryInformation';
import Search from './components/Search';

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((resp) => setCountriesData(resp.data));
    }
  }, [search]);

  return (
    <div>
      {' '}
      <p>
        Find Country <Search search={search} setSearch={setSearch} />
      </p>
      {countriesData.length > 10 ? (
        'Too Many Countries'
      ) : countriesData.length === 1 ? (
        countriesData.map((item) => (
          <CountryInformation key={item.cca2} item={item} />
        ))
      ) : (
        <ul>
          {countriesData.map((item) => (
            <Country key={item.cca2} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
