const CountryDetail = (props) => {
  const population = props.country.population.toLocaleString();
  const imageSrc = props.country.flags.png;
  const googleMapsLink = props.country.maps.googleMaps;
  
  let bordersList = null;
  if (props.borderingCountries === null){
    bordersList =  <li> None </li>
  } else {
    bordersList = props.borderingCountries.map((country, index) => {
    return (
      <li name={country} key={index}>
        {" "}
        {country}
      </li>
    );
  });
  }
  const handleOnClick = (evt) => {
    props.onFavCountryClicked(props.country);
  };

  return (
    <div className="country-detail" id="country-detail">
      <h3>{props.country.name.common} Details: </h3>{" "}
      <img
        id="flag-img"
        src={imageSrc}
        alt="country flag described above"
      ></img>
      <p>
        The capital of {props.country.name.common} is {props.country.capital}{" "}
        and the population is {population}.
      </p>
      <p>They drive on the {props.country.car.side}. </p>
      <p>Borders with:</p>
      <ul>{bordersList}</ul>
      <p>
        {props.country.flag} {props.country.flags.alt}
      </p>
      <a href={googleMapsLink}> Google Maps link (opens a new tab)</a>
      <button onClick={handleOnClick} name="favorite">
        Add to favorites
      </button>
    </div>
  );
};

export default CountryDetail;
