interface country{
  name: string;
  population: number;
  regionalBlocs?: {
    acronym: 'EU' | 'AU'; 
    name: 'European Union'
  }[]
}

export const filterEUCountries = (): void => {
  const countryList= localStorage.getItem('countries');
  const localStorageCountries = countryList ? JSON.parse(countryList) : [];
  const countriesArray: country[] = localStorageCountries;

  const euFilterCountries: country[] = countriesArray.filter(
    (euCountry: country) => euCountry.regionalBlocs && euCountry.regionalBlocs[0].name === 'European Union'
  );
  
  const euFilterCountriesNoA: country[] = euFilterCountries
    .filter((euCountry: country) => !euCountry.name.includes('a'))
    .sort((a, b) => {return b.population - a.population })
    .slice(0, 5);

  const sumaCountry: number = euFilterCountriesNoA.reduce((a, b) => a + b.population, 0);
  const population = 500000000;
    
  if(sumaCountry > population) {  
    console.log(
      `The total population of the countries in array is greater than 500 milion and amounts to: ${sumaCountry} people`
    )
  } else if(sumaCountry < population) {
    console.log(
      `The total population of the countries in array is less than 500 milion and amounts to: ${sumaCountry} people`
    ) 
  }

  console.log('do filtrowania', countriesArray);
  console.log('EU', euFilterCountries);
  console.log('EU bez a', euFilterCountriesNoA);
  console.log('suma', sumaCountry);
};
