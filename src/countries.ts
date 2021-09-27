import { checkLocalStorage } from "./Api";
import { compareCountries } from "./CompareCountries";

export const getCountries = () => {
  compareCountries();
  checkLocalStorage();
};
