import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.css']
})
export class DayviewComponent implements OnInit {

  weatherData = null;

  dayData = null;

  dayIndex = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherData = this.weatherService.getWeatherData();
    this.dayIndex = this.weatherService.getDay();
    this.dayData = this.weatherData.list[this.dayIndex];
  }

}
