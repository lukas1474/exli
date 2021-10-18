import { compareCountries } from "./CompareCountries";
import { fetchCountries } from "./index";
import { week } from "./config";

export const checkLocalStorage = (): void => {
  const nextFetch: number = new Date().getTime();
  const time = localStorage.getItem("lastFetchTime");
  const lastFetch: number = time ? JSON.parse(time) : 0;
  const diff: number = nextFetch - lastFetch;

  if (!localStorage.getItem("countries") || diff >= week) {
    compareCountries();
    getDataToLocalStorage();
  }
};

export const getDataToLocalStorage = async () => {
  const fetchToLocalStorage = await fetchCountries();
  localStorage.setItem("countries", JSON.stringify(fetchToLocalStorage));

  const fetchTime: string = new Date().getTime().toString();
  localStorage.setItem("lastFetchTime", fetchTime);
};
