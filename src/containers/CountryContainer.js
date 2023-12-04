import { useEffect, useState } from 'react'
import CountryList from '../components/CountryList';


const CountryContainer = () => {

    /* 
    - setting up state to list out all the countries
    - initializing the state with empty array to store
      generated country objects
    */
    const [countriesToVisit, setCountriesToVisit] = useState([]);
    const [countriesVisited, setCountriesVisited] = useState([]);

    useEffect(() => {

        // Fetching country data from the API and loading it
        const loadCountryData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json();
            setCountriesToVisit(data);
        }
        loadCountryData();

    }, []);

    const handleAddToVisited = (countryToAdd) => {

        // Remove country from the countriesToVisit list
        /*
            - filter through the countriesToVisit Array
            - call each array element 'countryToKeep'
            - add countryToKeep to updatedCountriesToVisit 
              if it is NOT EQUAL to the countryToAdd
            - remove countryToKeep from UpdatedCountriesToVisit
              if it is EQUAL to the countryToAdd 
        */
        const updatedCountriesToVisit = countriesToVisit.filter((countryToKeep) => {
            return countryToKeep !== countryToAdd
        });

        // Add the country to the countriesVisited list:
        /*
            - spread operator creates a new array 
              which is stored in updatedCountriesVisited variable
            - countryToAdd is added to UpdatedCountriesVisited 
        */
        const updatedCountriesVisited = [...countriesVisited];
        updatedCountriesVisited.push(countryToAdd);

        // Update the state with the updated lists
        setCountriesToVisit(updatedCountriesToVisit);
        setCountriesVisited(updatedCountriesVisited);
    };

    return (
        <>
            {/*
            Included 'countriesVisited' prop in both lists:
              - Prevents duplicate rendering
              - Enables button functionality for adding countries 
            */}
            <CountryList
                // Display all the countries in the Array
                countries={countriesToVisit}
                // A prop that contains the logic to add
                // a country to the 'Countries Visited' List
                handleAddToVisited={handleAddToVisited}
                title="🤞 Countries To Visit 🤞"
                countriesVisited={countriesVisited}
            />
            <CountryList
                // Display all the visited countries
                countries={countriesVisited}
                title="🎉 Countries Visited! 🎉"
                countriesVisited={countriesVisited}
            />
        </>
    )
}

export default CountryContainer;