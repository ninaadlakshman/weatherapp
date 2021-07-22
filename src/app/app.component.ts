import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  cityName = '';
  displayName = 'No city found...';
  temp;

  constructor(private weatherService: WeatherService) {}

  onClick() {
    console.log(this.cityName);
    this.displayName = this.cityName;
    this.weatherService.getWeather(this.cityName).subscribe((data) => {
      console.log(data);
    });
  }
  getText(name) {
    this.cityName = name;
  }
  convertToF(kelvinTemp: number) {
    this.temp = (kelvinTemp - 273.15) * 9/5 + 32;
  }
}
