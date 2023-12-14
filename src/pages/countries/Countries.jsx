import {useEffect, useState} from 'react';
import * as C from './styles';
import {Input} from '../../components/Input/Input.jsx';
import CountryItem from '../../components/Countryitem/CountryItem.jsx';
import {useForm} from '../../contexts/ThemeContext';
import Pagination from './Pagination'
import {api} from '../../api/api.jsx';


const LIMIT = 12;

export const Countries = () => {
    const {state} = useForm();
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = async () => {
        setLoading(true);
        try {
            let countriesData = await api.getCountries();
            setCountries(countriesData);
        } catch (error) {
            console.error('Error fetching countries:', error);
        } finally {
            setLoading(false);
        }
    };

    const lowerSearch = search.toLowerCase();

    const filteredCountries = countries.filter(country => {
        const countryName = country.name && country.name.common;
        const countryRegion = country.region && country.region.toLowerCase();
        return (
            (countryName && countryName.toLowerCase().includes(lowerSearch)) ||
            (countryRegion && countryRegion.includes(lowerSearch))
        );
    });

     const pagCountries = filteredCountries.slice(offset, offset+12)


    return (
        <C.CountriesArea theme={state.theme}>
            <Input
                value={search}
                search={setSearch}
            />
            <div className="countries">
                {loading && <div className="loading">Loading...</div>}
                {!loading &&
                    pagCountries.map((item) => (
                        <CountryItem
                            key={item.numericCode}
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            timezones={item.timezones.join(', ')}
                            flag={item.flags.png}
                        />
                    ))}
            </div>
            <Pagination
                limit={LIMIT}
                total={filteredCountries.length}
                offset={offset}
                setOffset={setOffset}
            />
        </C.CountriesArea>
    );
};

export default Countries;
