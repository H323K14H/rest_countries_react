import React from 'react'

/* 
    Deconstructing country and handleAddToVisit
    prop PASSED DOWN FROM CountryList
*/
const Country = ({ country, handleAddToVisited, countriesVisited }) => {
    // Check if the country is already in the visited list
    const isVisited = countriesVisited.find(
        (visitedCountry) => visitedCountry.name.common === country.name.common
    );

    return (
        <>
            <p>{country.name.common}</p>
            <p>{country.flag}</p>

            {/* Only render the button if the country is not already visited */}
            {!isVisited && (
                <button onClick={() => handleAddToVisited(country)}>Add To Visited!</button>
            )}
        </>
    );
};

export default Country;