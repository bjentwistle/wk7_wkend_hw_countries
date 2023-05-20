
const PopulationTotal = (countries) => {

    const countryPopulations = countries.map((country => country.population)) 
    const worldPopulation = countryPopulations.reduce((accumulator, currentValue) =>accumulator+ currentValue,0)
    if (worldPopulation === 0){
        return null   //stops it flashing 0 before reloading with total.
    }else {
        return worldPopulation.toLocaleString();
    }
   
}

export default PopulationTotal;