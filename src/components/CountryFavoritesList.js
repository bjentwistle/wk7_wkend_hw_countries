import React from "react";

const CountryFavoritesList = (props) => {
  
   const favoriteCountries = props.favoriteCountries.map((country, cca3) => {
    return <li name={country.name.common} key={cca3}> {country.name.common}</li>;
    });

  return (
    <div>
      <h3>Favorite Countries List</h3>
      {favoriteCountries}
    </div>
  );
};

export default CountryFavoritesList;
