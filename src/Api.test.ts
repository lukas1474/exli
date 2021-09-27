import fetchMock from 'jest-fetch-mock';
import {getDataToLocalStorage} from './Api';
import { API_URL } from 
"./config";


it('Should fetch all countries', () => {
  getDataToLocalStorage();
  expect(fetch).toHaveBeenCalledWith(API_URL)
});

test('should save to localStorage', async () => {
  // const KEY = 'foo',
  //   VALUE = 'bar';
    getDataToLocalStorage();
    fetchMock.mockResponse('string')
  await expect(localStorage.setItem).toHaveBeenLastCalledWith('countries', 'string');
  // await expect(localStorage.setItem).toHaveBeenLastCalledWith('lastFetchTime', 'string');
  // expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  // expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});




// const unmockedFetch = global.fetch

// beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//       json: () => Promise.resolve([]),
//     })
// })

// afterAll(() => {
//   global.fetch = unmockedFetch
// })

// const localStorageData: any = {
//   countries: true
// }

// const localStorageNoData: any = {
//   countries: false
// }

// describe('localStorage data', () => {
//   it('has data in localStorage', () => {
//     expect(getData(localStorageData).toBe(true))
//   })
  
//   it('has no data in localStorage', () => {
//     expect(getData(localStorageNoData).toBe(false))
//   })
// })

// it('Should fetch all countiries', () => {
//   getData();
//   const countries = getData();
//   expect(countries)
//   fetch.localStorageMock(resp)
//   expect(fetch).toHaveBeenCalledWith(API_URL)
// });

// const localStorageMock = (function() {
//   let store = {};
  
//   return {
//     getItem(key: string | number) {
//       return store[key];
//     },
 
//     setItem(key: string | number, value: any) {
//       store[key] = value;
//     },
  
//     clear() {
//       store = {};
//     },

//     removeItem(key: string | number) {
//       delete store[key];
//     },
     
//     getAll() {
//       console.log(store);
//     }
//   };
// })();

// Object.defineProperty(localStorageMock, 'localStorageMock', { value: localStorageMock });

// it('sets data into local storage', () => {
//   const localStorageId = 'countries';
//   const dataCountries = {data: 'json data'};
//   localStorageMock.setItem(localStorageId, dataCountries);
//   expect(localStorageMock.getItem(localStorageId)).toEqual(
//     JSON.stringify(dataCountries)
//   );
// });

// it('has data in local storage', () => {
//   const localStorageId = 'countries';
//   const dataCountries = {data: 'json data'};
//   localStorageMock.setItem(localStorageId, JSON.stringify(dataCountries));
// });

// function setItem(jsonId: string, newJson: { data: string; }) {
//   throw new Error('Function not implemented.');
// }
// global.fetch = jest.fn(() => Promise.resolve(true))

// function setItem(jsonId: string, newJson: { data: string; }) {
//   throw new Error('Function not implemented.');
// }
