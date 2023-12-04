import React from 'react'


// Deconstructing country prop 
// PASSED DOWN FROM CountryList
const Country = ({ country }) => {
    return (
        <>
            <p>{country.name.common}</p>
            <p>{country.flag}</p>
            <button>Add To Visited!</button>
        </>
    )
}

export default Country;