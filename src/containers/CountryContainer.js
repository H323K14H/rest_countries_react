import { useEffect, useState } from 'react'
import CountryList from '../components/CountryList';


const CountryContainer = () => {

    /* 
    - setting up state to list out all the countries
    - initializing the state with empty array to store
      generated country objects
    */
    const [countriesToVisit, setCountriesToVisit] = useState([]);

    useEffect(() => {

        // Fetching country data from the API and loading it
        const loadCountryData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json();
            setCountriesToVisit(data);
        }
        loadCountryData();

    }, []);

    return (
        <>
            <CountryList countriesToVisit={countriesToVisit}/>
        </>
    )
}

export default CountryContainer;