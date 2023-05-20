import React from 'react';
import ListItem from './ListItem';

const CountryList = ({countries, onCountryClicked}) => {
    console.log(countries)
    const countryItems = countries.map((country, cca3) => {
      return (
      <ListItem 
        country={country} 
        key={cca3} 
        onCountryClicked={onCountryClicked}
      />
      )
    })

  return (
    <div>
    <ul>
      {countryItems}
    </ul>
  </div>
  )
}

export default CountryList;