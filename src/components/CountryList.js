import React from 'react'
import Country from './Country'

/* 
    Deconstructing countriesToVisit, title and 
    handleAddToVisited props PASSED DOWN FROM 
    CountryContainer 
*/
const CountryList = ({ countries, title, handleAddToVisited }) => {

    /* 
        - loop through countriesToVisit and return an
          ARRAY of Country components
        - store the array in variable 'countryComponents'
    */
    const countryComponents = countries.map((country, id) => {
        return <Country
            country={country}
            key={id}
            handleAddToVisited={handleAddToVisited}
        />
    })

    return (
        <>
            <h1><u>{title}</u></h1>
            {countryComponents}
        </>
    )
}

export default CountryList