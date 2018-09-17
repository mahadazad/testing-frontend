export interface Weather {
  id: number;
  date: string;
  maxTemp: number;
  minTemp: number;
  temp: number;
  weatherAbbr: string;
  weatherName: string;
}

export interface City {
  woeid: number;
  name: string;
  weathers: Array<Weather>;
}
