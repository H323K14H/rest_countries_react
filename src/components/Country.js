import React from 'react'

/* 
    Deconstructing country and handleAddToVisit
    prop PASSED DOWN FROM CountryList
*/
const Country = ({ country, handleAddToVisited }) => {
    return (
        <>
            <p>{country.name.common}</p>
            <p>{country.flag}</p>
            {/* Calls the function on the specific country */}
            <button 
            onClick={() => handleAddToVisited(country)}>Add To Visited!</button>
        </>
    )
}

export default Country;