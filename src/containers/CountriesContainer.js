import React, { useState, useEffect } from "react";
//import CountryList from "../components/CountryList";
import "./CountriesContainer.css";
import CountryDetail from "../components/CountryDetail";
import CountrySelect from "../components/CountrySelect";
import PopulationTotal from "../components/PopulationTotal";
import CountryFavoritesList from "../components/CountryFavoritesList";

const CountryContainer = () => {
    const [countries, setCountries] = useState([]); //initial state - empty array
    const [selectedCountry, setSelectedCountry] = useState(null); //initial state - unselected
    const [favoriteCountries, setFavoriteCountries] = useState([]);
  
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = function () {
    //promises to populate getCountries array once fetched
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  };

  const updateSelectedCountry = function (country) {
    setSelectedCountry(country);
  };
   const onFavCountryClicked = function(country) {
     favoriteCountries.push(country)
     setFavoriteCountries(favoriteCountries)
     //console.log(favoriteCountries)
   };

  const worldPopulation = PopulationTotal(countries)

  return (
    <div className="main-container">
    <header> World Population: {worldPopulation} </header>
    <main>
      <CountrySelect
        countries={countries}
        updateSelectedCountry={updateSelectedCountry}
      />
    </main>
    <main>
        {selectedCountry ? <CountryDetail country={selectedCountry} onFavCountryClicked={onFavCountryClicked} /> : null}
    </main>
        {favoriteCountries.length === 0 ? null : <CountryFavoritesList favoriteCountries ={favoriteCountries}/>}

    </div>
  );
};

export default CountryContainer;
