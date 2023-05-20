import React, { useState, useEffect } from "react";
//import CountryList from "../components/CountryList";
import "./CountriesContainer.css";
import CountryDetail from "../components/CountryDetail";
import CountrySelect from "../components/CountrySelect";
import PopulationTotal from "../components/PopulationTotal";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]); //initial state - empty array
  const [selectedCountry, setSelectedCountry] = useState(null); //initial state - unselected
  

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
        {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
    </main>
      
    </div>
  );
};

export default CountryContainer;
