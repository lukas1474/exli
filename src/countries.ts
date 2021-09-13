import { getData, checkLocalStorage} from "./api";

export const getCountries = () => {
  checkLocalStorage();
  getData();
};
