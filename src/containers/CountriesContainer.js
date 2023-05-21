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
  const [borderingCountries, setBorderingCountries] = useState([]);


  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = function () {
    //promises to populate getCountries array once fetched
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => {
        //want countries sorted alphabetically!
        const sortedCountries = countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      });
  };

  const updateSelectedCountry = function (country) {
    const countriesBordering = country.borders;
   // console.log("This is the country.borders array:", countriesBordering)
    // gives ["IND","SNG" etc....] of cca3 codes per country bordering above country ^
    
    //with this array of cca3 codes, I want to find the countries that match from the countries list and put their names into a new array
   
    if (countriesBordering !==undefined  && countriesBordering.length !== 0) {
        const borderingCountries = []
        for (let x of countriesBordering) {
            const map1 = countries.find(obj => obj.cca3 === x)
            borderingCountries.push(map1.name.common)
        }   console.log("From the updateSelectedCountry func:", borderingCountries)

        setBorderingCountries(borderingCountries);
    } 
        
        setSelectedCountry(country)
  };

  const onFavCountryClicked = function (country) {
    if (favoriteCountries.includes(country)) {
      return null;
    } else {
      const updatedFavoriteCountries = [...favoriteCountries, country];
      //favoriteCountries.push(country); this mutates the state of favoriteCountries hence react can't see a change (face palm emoji)
      setFavoriteCountries(updatedFavoriteCountries);
      //console.log(updatedFavoriteCountries)
    }
  };

  const worldPopulation = PopulationTotal(countries);

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
        {selectedCountry ? (
          <CountryDetail
            country={selectedCountry}
            borderingCountries = {borderingCountries}
            onFavCountryClicked={onFavCountryClicked}
          />
        ) : null}
      </main>
      {favoriteCountries.length === 0 ? (
        <h3>Favourite Countries will appear here</h3>
      ) : (
        <CountryFavoritesList
          favoriteCountries={favoriteCountries}
          setFavoriteCountries={setFavoriteCountries}
        />
      )}
    </div>
  );
};

export default CountryContainer;
