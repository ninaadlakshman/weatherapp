import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APIKey = "a3d4c109b5ed86234e5e0c87e1be0fb6";

  constructor(private readonly http: HttpClient) { }

  getWeather(cityName) {
    let APICall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + this.APIKey;
    return this.http.get<JSON>(APICall);
  }
}
