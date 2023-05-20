
const PopulationTotal = (countries) => {

    const countryPopulations = countries.map((country => country.population)) 
    const worldPopulation = countryPopulations.reduce((accumulator, currentValue) =>accumulator+ currentValue,0)
    
    return worldPopulation.toLocaleString();
    
}


export default PopulationTotal;