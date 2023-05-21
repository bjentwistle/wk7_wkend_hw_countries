// CountrySelect( { countries: [{}, {}], updateSelectedCountry: () => {} } )

const CountrySelect = (props) => {

  // TODO: refactor this - index not great as a key - done
  // TODO: make this accessible - label
  const countryOptions = props.countries.map((country, cca3) => {

    return <option label = {country.name.common} key={cca3} value={cca3}>{country.name.common}</option>

  })

  if (props.countries.length === 0){
    return null
  }

  const handleOnChange = (evt) => {
    const index = evt.target.value
    const country = props.countries[index]
    props.updateSelectedCountry(country)
  }

  return (
    <div>
      <label>
      <select onChange={handleOnChange}>
      <option value="disabled" disabled selected>Select a country</option>
        {countryOptions}
      </select>
      </label>
    </div>
  )

}


export default CountrySelect