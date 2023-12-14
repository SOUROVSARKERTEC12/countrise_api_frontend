import * as C from './styles';
import { useState } from 'react';
import useDebounce from './useDebounce';

const delay = 500;

// eslint-disable-next-line react/prop-types
export const Input = ({search,value}) => {

    const [input, setInput] = useState('');

    const debouncedChange = useDebounce(search, delay);

    const handleChange = (e) => {
        debouncedChange(e);
        setInput(e);
    };

    return (
        <C.InputArea>
            <input
                type="text"
                placeholder="Search By Country"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <select value="Filter by Region" onChange={(e) => handleChange(e.target.value)}>
                <option disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.InputArea>
    );
};
