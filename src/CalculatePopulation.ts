import { populationForCompare } from './config'

interface country {
  name: string;
  population: number;
  regionalBlocs?: {
    acronym: 'EU' | 'AU';
    name: 'European Union';
  }[];
}

export const calculatePopulation = (): void => {
  const countryList = localStorage.getItem('countries');
  const localStorageCountries = countryList ? JSON.parse(countryList) : [];
  const countriesArray: country[] = localStorageCountries;

  const euFilterCountries: country[] = countriesArray.filter(
    (euCountry: country) =>
      euCountry.regionalBlocs &&
      euCountry.regionalBlocs[0].name === 'European Union'
  );

  const euFilterCountriesNoA: country[] = euFilterCountries
    .filter((euCountry: country) => !euCountry.name.includes('a'))
    .sort((a, b) => {
      return b.population - a.population;
    })
    .slice(0, 5);

  const sumCountriesPopulation: number = euFilterCountriesNoA.reduce(
    (a, b) => a + b.population,
    0
  );

  const message = (sumCountriesPopulation > populationForCompare) ? 
    `The total population of the countries in array is greater than 500 milion and amounts to: ${sumCountriesPopulation} people`
    :
    `The total population of the countries in array is less than 500 milion and amounts to: ${sumCountriesPopulation} people`

  console.log('EU', euFilterCountries);
  console.log('EU bez a', euFilterCountriesNoA);
  console.log('suma', sumCountriesPopulation);
  console.log(message);
};
