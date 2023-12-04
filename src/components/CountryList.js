import React from 'react'
import Country from './Country'

// Deconstructing countriesToVisit prop 
// PASSED DOWN FROM CountryContainer
const CountryList = ({ countriesToVisit }) => {

    // loop through countriesToVisit and return an
    // ARRAY of Country components
    // store the array in variable 'countryComponents'
    const countryComponents = countriesToVisit.map((country, id) => {
        return <Country
            country={country}
            key={id}
        />
    })

    return (
        <>
        <h1><u>Countries Yet To Be Visited</u></h1>
            {countryComponents}
        </>
    )
}

export default CountryList