import * as C from './styles';
import {Link} from 'react-router-dom';

export const SingleCountry = ({
                                  name,
                                  population,
                                  region,
                                  subregion,
                                  capital,
                                  topLevelDomain,
                                  currencies,
                                  languages,
                                  borders,
                                  flag
                              }) => {

    const currenciesArray = currencies ? Object.values(currencies) : [];
    const languagesArray = languages ? Object.values(languages) : [];

    return (
        <C.CountryData>
            <img src={flag} alt={`Country: ${name}`}/>
            <div className='data--area'>
                <h1>{name}</h1>
                <div className='data--firstArea'>
                    <p><span>Country Name: </span>{name}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Subregion: </span>{subregion}</p>
                    {capital &&
                        <p><span>Capital: </span>{capital}</p>
                    }
                    {topLevelDomain &&
                        <p className='topLevel'><span>Top Level Domain: </span>{topLevelDomain}</p>
                    }
                    {currenciesArray.length > 0 &&
                        <p><span>Currencies: </span>{currenciesArray.map(item => item.name)}</p>
                    }
                    {languagesArray.length > 0 &&
                        <p><span>Languages: </span>{languagesArray.map(language => language)}</p>
                    }
                </div>
                {borders && borders.length > 0 &&
                    <div className='border--area'>
                        <p>Border Countries: </p>
                        <div className='borders'>{borders.map((item, index) => <Link to={`/code/${item}`}
                                                                                     key={index}>{item}</Link>)}</div>
                    </div>
                }
            </div>
        </C.CountryData>
    );
};
