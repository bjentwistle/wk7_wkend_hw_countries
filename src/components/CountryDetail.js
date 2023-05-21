const CountryDetail = ({ country, onFavCountryClicked }) => {
  const population = country.population.toLocaleString();
  const imageSrc = country.flags.png;
  const googleMapsLink = country.maps.googleMaps;

  const handleOnClick = (evt) => {
    console.log(`Clicked on ${country.name.common}`);
    onFavCountryClicked(country);
  };

  return (
    <div className="country-detail" id="country-detail">
      <h3>{country.name.common} Details: </h3>{" "}
      <img
        id="flag-img"
        src={imageSrc}
        alt="country flag described above"
      ></img>
      <p>
        The capital of {country.name.common} is {country.capital} and the
        population is {population}.
      </p>
      <p>They drive on the {country.car.side}. </p>
      <p>
        {country.flag} {country.flags.alt}
      </p>
      <a href={googleMapsLink}> Google Maps link (opens a new tab)</a>
      <button onClick={handleOnClick} name="favorite">
        Add to favorites
      </button>
    </div>
  );
};

export default CountryDetail;
