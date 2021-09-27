import { checkLocalStorage } from "./Api";
import { compareCountries } from "./CompareCountries";
import { filterEUCountries } from "./EUCountries";

export const getCountries = () => {
  compareCountries();
  checkLocalStorage();
  filterEUCountries();
};
