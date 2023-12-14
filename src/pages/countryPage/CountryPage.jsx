import * as C from './styles';
import { Link, useParams } from 'react-router-dom';
import { SingleCountry } from '../../components/SingleCountry/SingleCountry.jsx';
import { useEffect, useState } from 'react';
import {useForm} from '../../contexts/ThemeContext';
import { api } from '../../api/api.jsx';

export const CountryPage = () => {
  const {state} = useForm();
  const { name, code } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let countryData;
        if (name) {
          countryData = await api.getCountry(name);
        } else if (code) {
          countryData = await api.getCountryByCode(code);
        }
        console.log(countryData)
        setCountry(countryData && countryData.length > 0 ? countryData[0] : null);
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name, code]);

  return (
    <C.CountryPage theme={state.theme}>
      <div className='container'>
        <Link to="/" className='back--button'>Back</Link>
        {loading && <div className='loading'>Loading...</div>}
        {!loading && country && (
          <SingleCountry
            key={country.numericCode}
            flag={country.flags?.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            currencies={country.currencies && country.currencies}
            languages={country.languages}
            borders={country.borders}
          />
        )}
      </div>
    </C.CountryPage>
  );
};
