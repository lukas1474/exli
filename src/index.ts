/** Zadanie 1:
 * Ściągnij wszystkie możliwe dane państw z pomocą API: https://restcountries.eu/. W dalszej części kursu będą one nazywane Tablicą Państw (TP).
 * Ściągnięte dane zapisz w sposób, który pozwoli na ich ponowne wykorzystanie po zamknięciu i ponownym otwarciu przeglądarki,
 * Przy starcie aplikacji sprawdź, czy dane państw istnieją w pamięci przeglądarki.
 * Jeśli nie, ściągnij je,
 * Przy starcie aplikacji sprawdź ile czasu minęło od poprzedniego ściągnięcia danych państw.
 * Jeśli od ostatniego razu minęło co najmniej 7 dni, ściągnij i zapisz je ponownie.
 * Stwórz metodę, która przy ponownym ściąganiu danych państw porówna populację między starym i nowym zestawem danych oraz wyświetli wszystkie nazwy państw,
 * których populacja uległa zmianie.
 *
 * Kod powinien być w pełni otypowany.
 * Kod powinien posiadać pełen zestaw testów (Jest).
 * Kod może posiadać komentarze.
 */

/**Zadanie 2:
 * Z Tablicy Państw z zadania 1 przefiltruj wszystkie należące do Unii Europejskiej.
 * Z uzyskanej w ten sposób tablicy usuń wszystkie państwa posiadające w swojej nazwie literę a.
 * Z uzyskanej w ten sposób tablicy posortuj państwa według populacji, tak by najgęściej zaludnione znajdowały się na górze listy. 
 * Zsumuj populację pięciu najgęściej zaludnionych państw i oblicz, czy jest większa od 500 milionów
 
 * Kod powinien być w pełni otypowany.
 * Kod powinien posiadać pełen zestaw testów (Jest).
 * Kod może posiadać komentarze.
 */

import { API_URL } from "./config";

import { checkLocalStorage } from "./LocalStorageManagment";
import { compareCountries } from "./CompareCountries";
import { calculatePopulation } from "./CalculatePopulation";

window.addEventListener("load", () => {
  getCountries();
});

export const getCountries = () => {
  compareCountries();
  checkLocalStorage();
  calculatePopulation();
};

export const fetchCountries = async () => {
  const data = await fetch(API_URL)
  return data.json()
}
