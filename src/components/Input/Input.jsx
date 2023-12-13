import * as C from './styles.js'

export const Input = () => {
    return (
        <C.InputArea>
            <input
                type="text"
                placeholder="search your country name"
            />
            <select>
                <option disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.InputArea>
    )
}