const url='https://restcountries.eu/rest/v2/all'

export const getData = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => localStorage.setItem('countries', data))
};

const time = 12341231231223;

console.log(time)


// localStorage.setItem('kraje', kraje)
// .then(data => console.log(data))