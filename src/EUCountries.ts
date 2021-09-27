export const filterEUCountries = (): void => {
  const localStorageCountries = JSON.parse(localStorage.getItem('countries'));
  const countriesArray = localStorageCountries;

  console.log('do filtrowania', localStorageCountries)

  const euFilterCountries = localStorageCountries.filter(
    (euCountry: { regionalBlocs: { name: string; }; }) => euCountry.regionalBlocs[0] && euCountry.regionalBlocs[0].name === 'European Union')
 
  const europeanUnionCountries = [];

  for(let i = 0; i < countriesArray.length; i++){
    if(countriesArray[i].regionalBlocs[0] && countriesArray[i].regionalBlocs[0].name === 'European Union') {
      europeanUnionCountries.push(countriesArray[i])
    }
  }
  
  console.log('EU', euFilterCountries);
}
