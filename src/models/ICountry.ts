export interface ILanguege {
  name: string;
  nativeName: string;
}

export interface ICurrencies {
  code: string;
  name: string;
  symbol: string;
}

export interface ICountry {
  area: number;
  capital: string;
  demonym: string;
  region: string;
  name: string;
  population: number;
  subregion: string;
  numericCode: number;
  languages: Array<ILanguege>;
  independet: boolean;
  flag: string;
  flags: { svg: string; png: string };
  cioc: string;
  nativeName: string;
  topLevelDomain: Array<string>;
  currencies: Array<ICurrencies>;
  borders: Array<string>;
}
