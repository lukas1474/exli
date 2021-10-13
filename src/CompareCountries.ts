import { fetchCountries } from "./index";


export const compareCountries = async () => {
  const currentCountries = await fetchCountries();
  const countryList = localStorage.getItem("countries");
  const localStorageCountries = countryList ? JSON.parse(countryList) : [];

  const changePopulationCountryList = [];

  for (let i = 0; i < currentCountries.length; i++) {
    if (localStorageCountries.population !== currentCountries.population) {
      changePopulationCountryList.push(currentCountries[i].name);
    }
  }

  console.log(
    'kraje w których populacja uległa zmianie', changePopulationCountryList
  );
};
