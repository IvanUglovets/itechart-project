export interface ILanguege {
  name: string;
  nativeName: string;
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
}
