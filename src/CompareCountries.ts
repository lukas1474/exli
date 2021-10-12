import { API_URL } from "./config";

export const compareCountries = async () => {
  const data: Response = await fetch(API_URL)
  const currentCountries = await data.json()
  const countryList= localStorage.getItem('countries')
  const localStorageCountries = countryList ? JSON.parse(countryList) : []

  const changePopulationCountryList = [];
  for(let i = 0; i < currentCountries.length; i++){
    if(localStorageCountries.population !== currentCountries.population) {
      changePopulationCountryList.push(currentCountries[i].name)
    }
  }
}
