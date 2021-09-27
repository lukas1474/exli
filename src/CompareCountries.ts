import { API_URL } from "./config";

export const compareCountries = async () => {
  const data = await fetch(API_URL)
  const currentCountries: any = await data.json()
  const localStorageCountries: any = JSON.parse(localStorage.getItem('countries'));
  
  console.log('zapisane', localStorageCountries)
  console.log('pobierane', currentCountries)

  // const results: any = currentCountries.filter(
    // (item: { name: string; population: string }) => localStorageCountries.some(
    //   (old: { name: string; population: string }) => item.name === old.name && item.population !== old.population)
  // )

  const lista: any[] = [];
  for(let i = 0; i < currentCountries.length; i++){
    if(localStorageCountries.population !== currentCountries.population) {
      lista.push(currentCountries[i].name)
    }
  }

  console.log(lista)
}
