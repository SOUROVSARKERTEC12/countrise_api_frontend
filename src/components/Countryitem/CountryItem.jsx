import {Link} from 'react-router-dom';
import * as C from './styles'; // Assuming that './styles' is the correct path

// eslint-disable-next-line react/prop-types
const CountryItem = ({name, population, region, capital, flag, timezones}) => {

    return (
        <C.CountryItem>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={`country: ${name}`}/>
                </div>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                    <p>
                        Population: <span>{population}</span>
                    </p>
                    <p>
                        Region: <span>{region}</span>
                    </p>
                    <p>
                        Capital: <span>{capital}</span>
                    </p>
                    <p>
                        Timezones: <span>{timezones}</span>
                    </p>
                </div>
            </Link>
        </C.CountryItem>
    );
};

export default CountryItem;
