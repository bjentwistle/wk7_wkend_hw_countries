
const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The capital of {country.name.common} is {country.capital}, 
        the population is {country.population}.
        They drive on the {country.car.side}
      </div>
    )
}
  
export default CountryDetail;