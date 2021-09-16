import { API_URL } from "./config";

export async function getData() {
  const cos = await fetch(API_URL)
  localStorage.setItem('countries', JSON.stringify(cos.json()));
  // .then((res: { json: () => any; }) => res.json())
  // .then((data: any) => localStorage.setItem('countries', JSON.stringify(data)))
  
  const fetchTime: string = new Date().getTime().toString();
  localStorage.setItem('lastFetchTime', fetchTime)
  
}

// console.log( 'kraje', localStorage.countries)

export const checkLocalStorage = (): void => {
  const nextFetch: number = new Date().getTime();
  const lastFetch: string = localStorage.getItem('lastFetchTime');
  const diff: number = Math.floor((nextFetch - (+lastFetch))/1000/60/60/24)
  const week= 7;

  if (!localStorage.getItem('countries') || diff >= week) {
    getData()
  }
}
