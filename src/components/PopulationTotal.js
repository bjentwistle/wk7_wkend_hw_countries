
const PopulationTotal = (countries) => {

    const countryPopulations = countries.map((country => country.population)) 
    const worldPopulation = countryPopulations.reduce((accumulator, currentValue) =>accumulator+ currentValue,0)
    if (worldPopulation === 0){
        return null
    }else {
        return worldPopulation.toLocaleString();
    }
   
}


export default PopulationTotal;