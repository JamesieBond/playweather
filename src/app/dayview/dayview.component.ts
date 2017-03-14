import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.css']
})
export class DayviewComponent implements OnInit {

  weatherData = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherData = this.weatherService.getWeatherData();
  }

}
