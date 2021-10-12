import { compareCountries } from "./CompareCountries";
import { API_URL } from "../config";

export const checkLocalStorage = (): void => {
  const nextFetch: number = new Date().getTime();
  const lastFetch = localStorage.getItem('lastFetchTime');
  const diff: number = Math.floor((nextFetch - (+lastFetch))/1000/60/60/24)
  const week= 7;

  if (!localStorage.getItem('countries') || diff >= week) {
    compareCountries();
    getDataToLocalStorage();
  }
}

export const getDataToLocalStorage = async () => {
  await fetch(API_URL)
  .then((res: { json: () => any; }) => res.json())
  .then((data: any) => localStorage.setItem('countries', JSON.stringify(data)))
  
  const fetchTime: string = new Date().getTime().toString();
  localStorage.setItem('lastFetchTime', fetchTime)
};
