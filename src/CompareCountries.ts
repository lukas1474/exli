import { API_URL } from "../config";

export const compareCountries = async () => {
  const data: Response = await fetch(API_URL)
  const currentCountries: any = await data.json()
  const localStorageCountries: any = JSON.parse(localStorage.getItem('countries'));

  const changePopulationCountryList = [];
  for(let i = 0; i < currentCountries.length; i++){
    if(localStorageCountries.population !== currentCountries.population) {
      changePopulationCountryList.push(currentCountries[i].name)
    }
  }
}
