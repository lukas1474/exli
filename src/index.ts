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

 /** Zadanie 3:
 * Stwórz nowy obiekt. Powinien on posiadać klucze EU, NAFTA, AU oraz other. Każdy z tych kluczy będzie zawierał obiekt o kluczach countries, population, languages oraz currencies. Wartościami countries oraz currencies są puste tablice, wartość population wynosi 0. Wartość languages to pusty obiekt.
 * W TP znajdź kraje należące do EU, NAFTA albo AU. Jeśli państwo należy do którejś z tych grup, umieść jego dane w stosownym obiekcie: natywną nazwę w tablicy countries, używane przez nią waluty w tablicy currencies oraz dodaj jej populację do wartości population.
 * Sprawdź języki przypisane do kraju. Użyj ich kodu iso639_1 jako klucza dla obiektu languages. Jeśli danego języka nie ma w obiekcie languages, przypisz do niego nowy obiekt o kluczach countries, pusta arajka, population, 0, area, 0 oraz name, pusty string. Jeśli dany język znajduje się w obiekcie languages, dodaj do tablicy countries kod alpha3code kraju, w którym jest używany, populację tego kraju do wartości population, obszar kraju do wartości area, a do name przypisz natywną nazwę tego języka.
 * Jeśli kraj nie należy do żadnej z podanych wcześniej organizacji wykonaj kroki z poprzednich dwóch punktów, ale dane umieść w tablicy other.
 * Jeśli kraj należy do więcej, niż jednej organizacji, umieść jego dane we wszystkich pasujących obiektach bloków. Blok other może się powtarzać.
 * Dla każdej organizacji dane w tablicy currencies nie mogą się powtarzać.
 * Dla każdej organizacji dane w tablicy countries powinny być posortowane alfabetycznie z do a.
 * Wyświetl w konsoli:
 * Nazwę organizacji o największej populacji,
 * Nazwę organizacji o drugiej największej gęstości zaludnienia,
 * Nazwę organizacji zajmującej trzeci największy obszar,
 * Nazwy organizacji o największej i najmniejszej przypisanej do nich liczbie języków,
 * Nazwę organizacji wykorzystującej największą liczbę walut,
 * Nazwę organizacji posiadającej najmniejszą liczbę państw członkowskich,
 * Natywną nazwę języka wykorzystywanego w największej liczbie krajów,
 * Natywną nazwę języka wykorzystywanego przez najmniejszą liczbę ludzi,
 * Natywne nazwy języków wykorzystywanych na największym i najmniejszym obszarze.
 * W przypadku remisów wyświetl wszystkich zwycięzców.
 */

import { API_URL } from "./config";

import { checkLocalStorage } from "./LocalStorageManagement";
import { compareCountries } from "./CompareCountries";
import { calculatePopulation } from "./CalculatePopulation";

window.addEventListener("load", () => getCountries())

export const getCountries = () => {
  compareCountries();
  checkLocalStorage();
  calculatePopulation();
};

getCountries()

export const fetchCountries = async () => {
  const data = await fetch(API_URL);
  return data.json();
};
