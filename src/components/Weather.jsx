// React
import { useEffect, useState } from 'react';

// External libraries
import axios from 'axios';

const Weather = ({ city }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((resp) => setCityWeather(resp));
  }, []);

  return (
    <div>
      {cityWeather ? (
        <>
          <h3>Weather in {city}</h3>
          <p>
            Temperature <strong>{cityWeather.data.main.temp}</strong> ℃
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${cityWeather.data.weather[0].icon}@2x.png`}
          />
          <p>
            Wind <strong>{cityWeather.data.wind.speed}</strong> m/s
          </p>
        </>
      ) : (
        'Loading Weather'
      )}
    </div>
  );
};

export default Weather;
