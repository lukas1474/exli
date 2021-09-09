// wszystkie operacja na panstwach, pobieranie, zapisywanie itp bedzie importował me

import { getData } from "./api";

export const getCountries = () => {
  getData();
};
