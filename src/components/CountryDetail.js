
const CountryDetail = ({country}) => {
    const population = country.population.toLocaleString()
    const imageSrc = country.flags.png
    const googleMapsLink = country.maps.googleMaps
    return (
      <div className="country-detail" id = "country-detail">
        <h3>{country.name.common} Details: </h3>  <img id = "flag-img" src = {imageSrc} alt = "country flag described above"></img>
        <p>The capital of {country.name.common} is {country.capital} and 
        the population is {population}.</p>
        <p>They drive on the {country.car.side}. </p>
        <p>{country.flag}  {country.flags.alt}</p>
        <a href = {googleMapsLink}> Google Maps link </a>

      </div>
    )
}
  
export default CountryDetail;